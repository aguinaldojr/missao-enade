var SHEET_NAME = 'Ranking';
var ROSTER_SHEET_NAME = 'Alunos';
var HEADERS = ['studentKey', 'publicCode', 'course', 'questionCount', 'correctCount', 'score', 'maxScore',
  'rankingScore', 'durationMs', 'achievedAt', 'collectionId', 'updatedAt'];
var ROSTER_HEADERS = ['academicId', 'fullName', 'email', 'course', 'modality', 'role', 'active'];
var RESULT_HEADERS = ['eventId', 'studentKey', 'publicCode', 'course', 'modality', 'role', 'mode', 'attemptId',
  'questionCount', 'correctCount', 'score', 'maxScore', 'rankingScore', 'durationMs', 'completedAt',
  'receivedAt', 'collectionId', 'qualifiesHours'];
var DAILY_RANKING_HEADERS = ['date', 'course', 'modality', 'position', 'studentKey', 'publicCode',
  'quickScore', 'evaluationScore', 'dailyScore', 'updatedAt'];
var EVALUATION_RANKING_HEADERS = ['weekId', 'course', 'modality', 'position', 'studentKey', 'publicCode',
  'correctCount', 'score', 'rankingScore', 'durationMs', 'attemptId', 'achievedAt', 'updatedAt'];
var GENERAL_RANKING_HEADERS = ['weekId', 'course', 'modality', 'position', 'studentKey', 'publicCode',
  'activeDays', 'dailyScoreTotal', 'updatedAt'];
var HOURS_BONUS_HEADERS = ['studentKey', 'publicCode', 'course', 'modality', 'referenceType', 'referenceId',
  'hours', 'bonusValue', 'benefitTarget', 'status', 'earnedAt', 'updatedAt'];
var COURSES = ['CC', 'SI', 'TADS', 'TGTI', 'TRC'];
var LIMIT = 15;
var DAILY_LIMIT = 10;
var TIME_ZONE = 'America/Sao_Paulo';

function doGet(e) {
  try {
    if (!e || !e.parameter || e.parameter.action !== 'ranking') throw new Error('Ação inválida.');
    var course = validateCourse_(e.parameter.course);
    if (e.parameter.type) {
      var type = validateRankingType_(e.parameter.type);
      var modality = validateModality_(e.parameter.modality);
      return json_({ ok: true, type: type, course: course, modality: modality,
        entries: publicOperationalRanking_(type, course, modality) });
    }
    return json_({ ok: true, entries: publicRanking_(course) });
  } catch (error) {
    return json_({ ok: false, error: safeMessage_(error) });
  }
}

function doPost(e) {
  try {
    var payload = JSON.parse(e && e.postData ? e.postData.contents : '{}');
    if (payload.action === 'verify-student') return json_({ ok: true, identity: verifyStudent_(payload) });
    if (payload.action !== 'submit') throw new Error('Ação inválida.');
    var input = validateSubmission_(payload);
    var identity = input.identity || pseudonymize_(input.academicId);
    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      var updated = input.mode === 'evaluation' ? upsertBest_(identity, input) : false;
      var benefit = null;
      if (input.identity) {
        recordResult_(identity, input);
        benefit = recordEvaluationHour_(identity, input);
        refreshOperationalRankings_();
        finalizeClosedBenefits_();
      }
      return json_({ ok: true, publicCode: identity.publicCode, bestUpdated: updated,
        benefit: benefit,
        entries: input.identity
          ? publicOperationalRanking_('evaluation', input.course, identity.modality)
          : publicRanking_(input.course) });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    return json_({ ok: false, error: safeMessage_(error) });
  }
}

/** Execute uma vez no editor do Apps Script, depois de configurar as propriedades. */
function setupRankingSheet() {
  var sheet = sheet_();
  sheet.clear();
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  sheet.autoResizeColumns(1, HEADERS.length);
}

/** Execute uma vez. Depois, preencha esta aba sem alterar o cabeçalho. */
function setupStudentRosterSheet() {
  var spreadsheet = spreadsheet_();
  var sheet = spreadsheet.getSheetByName(ROSTER_SHEET_NAME);
  if (sheet && sheet.getLastRow() > 0) throw new Error('A aba Alunos já existe e não foi alterada.');
  sheet = sheet || spreadsheet.insertSheet(ROSTER_SHEET_NAME);
  sheet.getRange(1, 1, 1, ROSTER_HEADERS.length).setValues([ROSTER_HEADERS]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, ROSTER_HEADERS.length).setFontWeight('bold');
  sheet.autoResizeColumns(1, ROSTER_HEADERS.length);
}

/**
 * Execute uma vez no editor. Cria as abas operacionais sem limpar dados existentes.
 * Se uma aba já tiver outro cabeçalho, a função interrompe para evitar sobrescrita silenciosa.
 */
function setupOperationalSheets() {
  var spreadsheet = spreadsheet_();
  var definitions = [
    ['Resultados', RESULT_HEADERS],
    ['Ranking_Diario', DAILY_RANKING_HEADERS],
    ['Ranking_Avaliacao', EVALUATION_RANKING_HEADERS],
    ['Ranking_Geral', GENERAL_RANKING_HEADERS],
    ['Horas_Bonus', HOURS_BONUS_HEADERS]
  ];
  definitions.forEach(function (definition) {
    ensureOperationalSheet_(spreadsheet, definition[0], definition[1]);
  });
  return definitions.map(function (definition) { return definition[0]; }).join(', ');
}

/** Execute uma vez para atualizar rankings e benefícios diariamente após o fechamento. */
function setupBenefitTrigger() {
  var handler = 'runScheduledRankingMaintenance';
  ScriptApp.getProjectTriggers().filter(function (trigger) {
    return trigger.getHandlerFunction() === handler;
  }).forEach(function (trigger) { ScriptApp.deleteTrigger(trigger); });
  ScriptApp.newTrigger(handler).timeBased().everyDays(1).atHour(1).create();
  return 'Atualização diária configurada para aproximadamente 1h (' + TIME_ZONE + ').';
}

function runScheduledRankingMaintenance() {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    refreshOperationalRankings_();
    finalizeClosedBenefits_();
  } finally {
    lock.releaseLock();
  }
}

function ensureOperationalSheet_(spreadsheet, name, headers) {
  var sheet = spreadsheet.getSheetByName(name);
  if (!sheet) sheet = spreadsheet.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  } else {
    var actual = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
    if (actual.join('|') !== headers.join('|')) {
      throw new Error('Cabeçalho incompatível na aba ' + name + '. Nenhum dado foi alterado nessa aba.');
    }
  }
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.autoResizeColumns(1, headers.length);
}

function verifyStudent_(payload) {
  var academicId = normalizeAcademicId_(payload.academicId);
  var email = String(payload.email || '').trim().toLowerCase();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('E-mail inválido.');
  var sheet = rosterSheet_();
  var rows = sheet.getLastRow() > 1 ? sheet.getRange(2, 1, sheet.getLastRow() - 1, ROSTER_HEADERS.length).getValues() : [];
  var matches = rows.filter(function (row) { return normalizeAcademicId_(row[0]) === academicId; });
  if (matches.length !== 1) throw new Error('RA ou e-mail não conferem com o cadastro acadêmico.');
  var row = matches[0];
  if (String(row[2] || '').trim().toLowerCase() !== email || !active_(row[6])) {
    throw new Error('RA ou e-mail não conferem com o cadastro acadêmico.');
  }
  var fullName = String(row[1] || '').trim().replace(/\s+/g, ' ');
  if (!fullName || fullName.length > 120) throw new Error('Nome inválido no cadastro acadêmico.');
  var course = validateCourse_(row[3]);
  var modality = String(row[4] || '').trim().toUpperCase();
  if (['PRESENCIAL', 'EAD'].indexOf(modality) < 0) throw new Error('Modalidade inválida no cadastro acadêmico.');
  var role = String(row[5] || 'student').trim().toLowerCase();
  if (['student', 'teacher'].indexOf(role) < 0) throw new Error('Tipo de perfil inválido no cadastro acadêmico.');
  var identity = pseudonymize_(academicId);
  var firstName = fullName.split(' ')[0].substring(0, 15);
  var claims = { v: 1, studentKey: identity.studentKey, publicCode: identity.publicCode,
    course: course, modality: modality, role: role, rankingEligible: role === 'student' };
  return { academicId: academicId, fullName: fullName, nickname: firstName + '-' + academicId.slice(-4),
    course: course, modality: modality, role: role, publicCode: identity.publicCode,
    verificationToken: signClaims_(claims), rankingEligible: role === 'student' };
}

function validateSubmission_(payload) {
  var claims = payload.verificationToken ? verifyClaims_(payload.verificationToken) : null;
  var academicId = claims ? null : normalizeAcademicId_(payload.academicId);
  var course = validateCourse_(payload.course);
  if (claims && (claims.course !== course || claims.rankingEligible !== true || claims.role !== 'student')) {
    throw new Error('Este perfil não pode participar deste ranking.');
  }
  var questionCount = integer_(payload.questionCount, 'Quantidade inválida.');
  var correctCount = integer_(payload.correctCount, 'Acertos inválidos.');
  var score = integer_(payload.score, 'Pontuação inválida.');
  var maxScore = integer_(payload.maxScore, 'Pontuação máxima inválida.');
  var durationMs = integer_(payload.durationMs, 'Duração inválida.');
  var mode = payload.mode === undefined || payload.mode === 'evaluation' ? 'evaluation'
    : payload.mode === 'quick' ? 'quick' : null;
  if (!mode) throw new Error('Modo inválido.');
  var expectedCount = mode === 'quick' ? 15 : 25;
  var validQuickScore = mode === 'quick' && maxScore >= 600 && maxScore <= 1500 &&
    score >= 0 && score <= maxScore;
  var validEvaluationScore = mode === 'evaluation' && maxScore === 2500 && score === correctCount * 100;
  if (questionCount !== expectedCount || correctCount < 0 || correctCount > expectedCount ||
      (!validQuickScore && !validEvaluationScore) || durationMs < 0 || durationMs > 14400000) {
    throw new Error('O resultado não corresponde a uma jornada válida deste modo.');
  }
  if (payload.collectionId !== 'enade-2026') throw new Error('Coleção inválida.');
  var attemptId = String(payload.attemptId || '');
  if (!/^[A-Za-z0-9._:-]{1,100}$/.test(attemptId)) throw new Error('Tentativa inválida.');
  var completedAt = new Date(payload.achievedAt);
  if (!isFinite(completedAt.getTime())) throw new Error('Data da tentativa inválida.');
  return { academicId: academicId, identity: claims, course: course, questionCount: questionCount, correctCount: correctCount,
    score: score, maxScore: maxScore, rankingScore: Math.round(score / maxScore * 1000),
    durationMs: durationMs, collectionId: payload.collectionId, attemptId: attemptId,
    completedAt: completedAt.toISOString(), mode: mode };
}

function recordResult_(identity, input) {
  var sheet = operationalSheet_('Resultados', RESULT_HEADERS);
  var eventId = identity.studentKey + '|' + input.attemptId;
  if (sheet.getLastRow() > 1) {
    var ids = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues();
    if (ids.some(function (row) { return String(row[0]) === eventId; })) return false;
  }
  var receivedAt = new Date().toISOString();
  sheet.appendRow([eventId, identity.studentKey, identity.publicCode, input.course, identity.modality,
    identity.role, input.mode, input.attemptId, input.questionCount, input.correctCount, input.score,
    input.maxScore, input.rankingScore, input.durationMs, input.completedAt, receivedAt,
    input.collectionId, identity.role === 'student' && input.mode === 'evaluation' && input.correctCount >= 15]);
  return true;
}

function recordEvaluationHour_(identity, input) {
  if (identity.role !== 'student' || input.mode !== 'evaluation') return null;
  var sheet = operationalSheet_('Horas_Bonus', HOURS_BONUS_HEADERS);
  var rows = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, HOURS_BONUS_HEADERS.length).getValues() : [];
  var cycleId = weekId_(new Date());
  var referenceId = cycleId + '|' + input.attemptId;
  var current = rows.find(function (row) {
    return row[0] === identity.studentKey && row[4] === 'AVALIACAO_60' && row[5] === referenceId;
  });
  var hours = rows.filter(function (row) { return row[0] === identity.studentKey; })
    .reduce(function (total, row) { return total + Number(row[6] || 0); }, 0);
  var cycleBenefits = rows.filter(function (row) {
    return row[0] === identity.studentKey && row[4] === 'AVALIACAO_60' &&
      String(row[5]).indexOf(cycleId + '|') === 0;
  });
  var bonusTotal = cycleBenefits.reduce(function (total, row) { return total + Number(row[7] || 0); }, 0);
  var qualifyingAttempts = cycleBenefits.filter(function (row) { return Number(row[7] || 0) > 0; }).length;
  if (input.correctCount < 15) return { qualified: false, recorded: false, hoursEarned: 0,
    totalHours: hours, bonusEarned: 0, evaluationBonusTotal: bonusTotal,
    qualifyingBonusAttempts: qualifyingAttempts };
  if (current) return { qualified: true, recorded: true, hoursEarned: Number(current[6] || 0),
    totalHours: hours, bonusEarned: Number(current[7] || 0), evaluationBonusTotal: bonusTotal,
    qualifyingBonusAttempts: qualifyingAttempts };
  var earnedHours = hours < 10 ? 1 : 0;
  var bonusValue = qualifyingAttempts < 2 ? 0.5 : 0;
  if (earnedHours > 0 || bonusValue > 0) appendBenefit_(sheet, identity.studentKey, identity.publicCode,
    input.course, identity.modality, 'AVALIACAO_60', referenceId, earnedHours, bonusValue);
  return { qualified: true, recorded: earnedHours > 0 || bonusValue > 0, hoursEarned: earnedHours,
    totalHours: hours + earnedHours, bonusEarned: bonusValue,
    evaluationBonusTotal: bonusTotal + bonusValue,
    qualifyingBonusAttempts: qualifyingAttempts + (bonusValue > 0 ? 1 : 0) };
}

function finalizeClosedBenefits_() {
  var benefitSheet = operationalSheet_('Horas_Bonus', HOURS_BONUS_HEADERS);
  var benefits = benefitSheet.getLastRow() > 1
    ? benefitSheet.getRange(2, 1, benefitSheet.getLastRow() - 1, HOURS_BONUS_HEADERS.length).getValues() : [];
  var existing = {};
  benefits.forEach(function (row) { existing[[row[0], row[4], row[5]].join('|')] = true; });
  var today = localDate_(new Date());

  var dailySheet = operationalSheet_('Ranking_Diario', DAILY_RANKING_HEADERS);
  var daily = dailySheet.getLastRow() > 1
    ? dailySheet.getRange(2, 1, dailySheet.getLastRow() - 1, DAILY_RANKING_HEADERS.length).getValues() : [];
  daily.filter(function (row) { return periodKey_(row[0]) < today && Number(row[3]) <= DAILY_LIMIT; })
    .sort(function (a, b) { return periodKey_(a[0]).localeCompare(periodKey_(b[0])); })
    .forEach(function (row) {
      var rankingDate = periodKey_(row[0]);
      var cycleId = weekId_(rankingDate + 'T12:00:00Z');
      var referenceId = cycleId + '|' + rankingDate;
      var eventKey = [row[4], 'RANKING_DIARIO', referenceId].join('|');
      var awardedDays = benefits.filter(function (benefit) {
        return benefit[0] === row[4] && benefit[4] === 'RANKING_DIARIO' &&
          String(benefit[5]).indexOf(cycleId + '|') === 0 && Number(benefit[7] || 0) > 0;
      }).length;
      if (!existing[eventKey] && awardedDays < 2) {
        appendBenefit_(benefitSheet, row[4], row[5], row[1], row[2],
          'RANKING_DIARIO', referenceId, 0, 0.5);
        var created = [row[4], row[5], row[1], row[2], 'RANKING_DIARIO', referenceId, 0, 0.5];
        benefits.push(created);
        existing[eventKey] = true;
      }
    });

  var generalSheet = operationalSheet_('Ranking_Geral', GENERAL_RANKING_HEADERS);
  var general = generalSheet.getLastRow() > 1
    ? generalSheet.getRange(2, 1, generalSheet.getLastRow() - 1, GENERAL_RANKING_HEADERS.length).getValues() : [];
  general.filter(function (row) { return Number(row[3]) <= LIMIT && isClosedWeek_(periodKey_(row[0]), today); })
    .forEach(function (row) {
      var referenceId = periodKey_(row[0]);
      var eventKey = [row[4], 'RANKING_GERAL', referenceId].join('|');
      if (!existing[eventKey]) {
        appendBenefit_(benefitSheet, row[4], row[5], row[1], row[2],
          'RANKING_GERAL', referenceId, 0, 1);
        existing[eventKey] = true;
      }
    });
}

function appendBenefit_(sheet, studentKey, publicCode, course, modality,
  referenceType, referenceId, hours, bonusValue) {
  var now = new Date().toISOString();
  sheet.appendRow([studentKey, publicCode, course, modality, referenceType, referenceId,
    hours, bonusValue, modality === 'PRESENCIAL' ? 'AV2' : 'DUAS_MENORES_NOTAS',
    'PENDENTE', now, now]);
}

function isClosedWeek_(weekId, today) {
  var week = weekId.split('-').map(Number);
  var current = today.split('-').map(Number);
  var saturday = new Date(Date.UTC(week[0], week[1] - 1, week[2] + 5, 12));
  var currentDate = new Date(Date.UTC(current[0], current[1] - 1, current[2], 12));
  return currentDate.getTime() > saturday.getTime();
}

function refreshOperationalRankings_() {
  var sheet = operationalSheet_('Resultados', RESULT_HEADERS);
  var rows = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, RESULT_HEADERS.length).getValues() : [];
  var results = rows.map(resultFromRow_).filter(function (item) {
    return item.role === 'student' && isRankingDay_(item.receivedAt);
  });
  var dailyAll = dailyRanking_(results, 0);
  var daily = dailyAll.filter(function (item) { return item.position <= DAILY_LIMIT; });
  var evaluation = evaluationRanking_(results);
  var general = generalRanking_(dailyAll);
  replaceOperationalRows_('Ranking_Diario', DAILY_RANKING_HEADERS, daily.map(function (item) {
    return [item.date, item.course, item.modality, item.position, item.studentKey, item.publicCode,
      item.quickScore, item.evaluationScore, item.dailyScore, new Date().toISOString()];
  }));
  replaceOperationalRows_('Ranking_Avaliacao', EVALUATION_RANKING_HEADERS, evaluation.map(function (item) {
    return [item.weekId, item.course, item.modality, item.position, item.studentKey, item.publicCode,
      item.correctCount, item.score, item.rankingScore, item.durationMs, item.attemptId,
      item.completedAt, new Date().toISOString()];
  }));
  replaceOperationalRows_('Ranking_Geral', GENERAL_RANKING_HEADERS, general.map(function (item) {
    return [item.weekId, item.course, item.modality, item.position, item.studentKey, item.publicCode,
      item.activeDays, item.dailyScoreTotal, new Date().toISOString()];
  }));
}

function resultFromRow_(row) {
  return { studentKey: String(row[1]), publicCode: String(row[2]), course: String(row[3]),
    modality: String(row[4]), role: String(row[5]), mode: String(row[6]), attemptId: String(row[7]),
    correctCount: Number(row[9]), score: Number(row[10]), rankingScore: Number(row[12]),
    durationMs: Number(row[13]), completedAt: String(row[14]), receivedAt: String(row[15]) };
}

function dailyRanking_(results, limit) {
  var best = {};
  results.forEach(function (item) {
    var date = localDate_(item.receivedAt);
    var key = [date, item.course, item.modality, item.studentKey].join('|');
    var current = best[key] || { date: date, course: item.course, modality: item.modality,
      studentKey: item.studentKey, publicCode: item.publicCode, quickScore: 0, evaluationScore: 0 };
    if (item.mode === 'quick') current.quickScore = Math.max(current.quickScore, item.rankingScore);
    if (item.mode === 'evaluation') current.evaluationScore = Math.max(current.evaluationScore, item.rankingScore);
    current.dailyScore = current.quickScore + current.evaluationScore;
    best[key] = current;
  });
  return rankGroups_(Object.keys(best).map(function (key) { return best[key]; }),
    function (item) { return [item.date, item.course, item.modality].join('|'); },
    function (a, b) { return b.dailyScore - a.dailyScore || a.publicCode.localeCompare(b.publicCode); }, limit);
}

function evaluationRanking_(results) {
  var best = {};
  results.filter(function (item) { return item.mode === 'evaluation'; }).forEach(function (item) {
    item.weekId = weekId_(item.receivedAt);
    var key = [item.weekId, item.course, item.modality, item.studentKey].join('|');
    if (!best[key] || compareEvaluation_(item, best[key]) < 0) best[key] = item;
  });
  return rankGroups_(Object.keys(best).map(function (key) { return best[key]; }),
    function (item) { return [item.weekId, item.course, item.modality].join('|'); }, compareEvaluation_, LIMIT);
}

function generalRanking_(daily) {
  var totals = {};
  daily.forEach(function (item) {
    var weekId = weekId_(item.date + 'T12:00:00Z');
    var key = [weekId, item.course, item.modality, item.studentKey].join('|');
    var current = totals[key] || { weekId: weekId, course: item.course, modality: item.modality,
      studentKey: item.studentKey, publicCode: item.publicCode, activeDays: 0, dailyScoreTotal: 0 };
    current.activeDays += 1;
    current.dailyScoreTotal += item.dailyScore;
    totals[key] = current;
  });
  return rankGroups_(Object.keys(totals).map(function (key) { return totals[key]; }),
    function (item) { return [item.weekId, item.course, item.modality].join('|'); },
    function (a, b) { return b.dailyScoreTotal - a.dailyScoreTotal || b.activeDays - a.activeDays ||
      a.publicCode.localeCompare(b.publicCode); }, LIMIT);
}

function rankGroups_(items, groupKey, compare, limit) {
  var groups = {};
  items.forEach(function (item) { var key = groupKey(item); (groups[key] = groups[key] || []).push(item); });
  return Object.keys(groups).sort().reduce(function (output, key) {
    var ranked = groups[key].sort(compare);
    if (limit > 0) ranked = ranked.slice(0, limit);
    ranked.forEach(function (item, index) {
      item.position = index + 1;
      output.push(item);
    });
    return output;
  }, []);
}

function compareEvaluation_(a, b) {
  return b.rankingScore - a.rankingScore || b.correctCount - a.correctCount ||
    a.durationMs - b.durationMs || String(a.completedAt).localeCompare(String(b.completedAt));
}

function localDate_(value) {
  return Utilities.formatDate(new Date(value), TIME_ZONE, 'yyyy-MM-dd');
}

/** Normaliza datas que o Google Sheets pode devolver como Date ou como texto. */
function periodKey_(value) {
  if (value instanceof Date && isFinite(value.getTime())) return localDate_(value);
  var text = String(value || '').trim();
  var iso = text.match(/^(\d{4}-\d{2}-\d{2})/);
  if (iso) return iso[1];
  var parsed = new Date(value);
  return isFinite(parsed.getTime()) ? localDate_(parsed) : text;
}

function weekId_(value) {
  var parts = localDate_(value).split('-').map(Number);
  var date = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2], 12));
  var distance = (date.getUTCDay() + 6) % 7;
  date.setUTCDate(date.getUTCDate() - distance);
  return Utilities.formatDate(date, 'UTC', 'yyyy-MM-dd');
}

function isRankingDay_(value) {
  var parts = localDate_(value).split('-').map(Number);
  var day = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2], 12)).getUTCDay();
  return day >= 1 && day <= 6;
}

function operationalSheet_(name, headers) {
  var spreadsheet = spreadsheet_();
  ensureOperationalSheet_(spreadsheet, name, headers);
  return spreadsheet.getSheetByName(name);
}

function replaceOperationalRows_(name, headers, rows) {
  var sheet = operationalSheet_(name, headers);
  if (sheet.getLastRow() > 1) sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).clearContent();
  if (rows.length) {
    // Impede que chaves como 2026-11-23 sejam convertidas automaticamente em Date.
    sheet.getRange(2, 1, rows.length, 1).setNumberFormat('@');
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  }
}

function pseudonymize_(academicId) {
  var salt = PropertiesService.getScriptProperties().getProperty('RANKING_HMAC_SECRET');
  if (!salt || salt.length < 32) throw new Error('Serviço não configurado.');
  var signature = Utilities.computeHmacSha256Signature(academicId, salt);
  var key = Utilities.base64EncodeWebSafe(signature).replace(/=+$/, '');
  return { studentKey: key, publicCode: 'N9-' + key.substring(0, 8).toUpperCase() };
}

function normalizeAcademicId_(value) {
  var academicId = String(value || '').toUpperCase().replace(/[\s.-]+/g, '');
  if (!/^[A-Z0-9]{4,20}$/.test(academicId)) throw new Error('RA inválido.');
  return academicId;
}

function secret_() {
  var secret = PropertiesService.getScriptProperties().getProperty('RANKING_HMAC_SECRET');
  if (!secret || secret.length < 32) throw new Error('Serviço não configurado.');
  return secret;
}

function signClaims_(claims) {
  var body = Utilities.base64EncodeWebSafe(JSON.stringify(claims), Utilities.Charset.UTF_8).replace(/=+$/, '');
  var signature = Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(body, secret_())).replace(/=+$/, '');
  return body + '.' + signature;
}

function verifyClaims_(token) {
  var parts = String(token || '').split('.');
  if (parts.length !== 2) throw new Error('Perfil acadêmico inválido.');
  var expected = Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(parts[0], secret_())).replace(/=+$/, '');
  if (parts[1] !== expected) throw new Error('Perfil acadêmico inválido.');
  try {
    var claims = JSON.parse(Utilities.newBlob(Utilities.base64DecodeWebSafe(parts[0])).getDataAsString('UTF-8'));
    if (claims.v !== 1 || !claims.studentKey || !claims.publicCode || !claims.course) throw new Error();
    return claims;
  } catch (error) { throw new Error('Perfil acadêmico inválido.'); }
}

function upsertBest_(identity, input) {
  var sheet = sheet_();
  ensureHeader_(sheet);
  var rows = sheet.getLastRow() > 1 ? sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getValues() : [];
  var index = -1;
  for (var i = 0; i < rows.length; i += 1) {
    if (rows[i][0] === identity.studentKey && rows[i][2] === input.course) { index = i; break; }
  }
  var now = new Date().toISOString();
  var candidate = [identity.studentKey, identity.publicCode, input.course, 25, input.correctCount, input.score,
    input.maxScore, input.rankingScore, input.durationMs, now, input.collectionId, now];
  if (index >= 0) {
    if (compareRows_(candidate, rows[index]) >= 0) return false;
    sheet.getRange(index + 2, 1, 1, HEADERS.length).setValues([candidate]);
  } else {
    sheet.appendRow(candidate);
  }
  return true;
}

function publicRanking_(course) {
  var sheet = sheet_();
  ensureHeader_(sheet);
  var rows = sheet.getLastRow() > 1 ? sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getValues() : [];
  return rows.filter(function (row) { return row[2] === course; }).sort(compareRows_).slice(0, LIMIT)
    .map(function (row) { return { publicCode: row[1], course: row[2], questionCount: Number(row[3]),
      correctCount: Number(row[4]), score: Number(row[5]), maxScore: Number(row[6]),
      rankingScore: Number(row[7]), durationMs: Number(row[8]), achievedAt: String(row[9]),
      collectionId: String(row[10]) }; });
}

function publicOperationalRanking_(type, course, modality) {
  var definitions = {
    daily: { sheet: 'Ranking_Diario', headers: DAILY_RANKING_HEADERS },
    evaluation: { sheet: 'Ranking_Avaliacao', headers: EVALUATION_RANKING_HEADERS },
    general: { sheet: 'Ranking_Geral', headers: GENERAL_RANKING_HEADERS }
  };
  var definition = definitions[type];
  var sheet = operationalSheet_(definition.sheet, definition.headers);
  var rows = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, definition.headers.length).getValues() : [];
  var period = type === 'daily' ? localDate_(new Date()) : weekId_(new Date());
  return rows.filter(function (row) {
    return periodKey_(row[0]) === period && String(row[1]) === course && String(row[2]) === modality;
  }).sort(function (a, b) { return Number(a[3]) - Number(b[3]); }).map(function (row) {
    if (type === 'daily') {
      return { date: periodKey_(row[0]), course: String(row[1]), modality: String(row[2]),
        position: Number(row[3]), publicCode: String(row[5]), quickScore: Number(row[6]),
        evaluationScore: Number(row[7]), dailyScore: Number(row[8]) };
    }
    if (type === 'evaluation') {
      return { weekId: periodKey_(row[0]), course: String(row[1]), modality: String(row[2]),
        position: Number(row[3]), publicCode: String(row[5]), correctCount: Number(row[6]),
        questionCount: 25, score: Number(row[7]), maxScore: 2500,
        rankingScore: Number(row[8]), durationMs: Number(row[9]),
        achievedAt: String(row[11]), collectionId: 'enade-2026' };
    }
    return { weekId: periodKey_(row[0]), course: String(row[1]), modality: String(row[2]),
      position: Number(row[3]), publicCode: String(row[5]), activeDays: Number(row[6]),
      dailyScoreTotal: Number(row[7]) };
  });
}

function compareRows_(a, b) {
  return Number(b[7]) - Number(a[7]) || Number(b[4]) - Number(a[4]) || Number(a[8]) - Number(b[8]) ||
    String(a[9]).localeCompare(String(b[9]));
}

function sheet_() {
  var spreadsheet = spreadsheet_();
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function spreadsheet_() {
  var id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!id) throw new Error('Serviço não configurado.');
  return SpreadsheetApp.openById(id);
}

function rosterSheet_() {
  var sheet = spreadsheet_().getSheetByName(ROSTER_SHEET_NAME);
  if (!sheet) throw new Error('Cadastro acadêmico indisponível.');
  var actual = sheet.getRange(1, 1, 1, ROSTER_HEADERS.length).getValues()[0];
  if (actual.join('|') !== ROSTER_HEADERS.join('|')) throw new Error('Cabeçalho do cadastro acadêmico incompatível.');
  return sheet;
}

function active_(value) {
  return value === true || ['1', 'TRUE', 'SIM', 'ATIVO'].indexOf(String(value || '').trim().toUpperCase()) >= 0;
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() === 0) sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  var actual = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  if (actual.join('|') !== HEADERS.join('|')) throw new Error('Cabeçalho da planilha incompatível.');
}

function validateCourse_(value) {
  var course = String(value || '');
  if (COURSES.indexOf(course) < 0) throw new Error('Curso inválido.');
  return course;
}

function validateModality_(value) {
  var modality = String(value || '').trim().toUpperCase();
  if (['PRESENCIAL', 'EAD'].indexOf(modality) < 0) throw new Error('Modalidade inválida.');
  return modality;
}

function validateRankingType_(value) {
  var type = String(value || '').trim().toLowerCase();
  if (['daily', 'evaluation', 'general'].indexOf(type) < 0) throw new Error('Tipo de ranking inválido.');
  return type;
}

function integer_(value, message) {
  var number = Number(value);
  if (!Number.isInteger(number)) throw new Error(message);
  return number;
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}

function safeMessage_(error) {
  var message = error && error.message ? String(error.message) : 'Falha no serviço.';
  return message.indexOf('configurado') >= 0 ? 'Serviço indisponível.' : message;
}
