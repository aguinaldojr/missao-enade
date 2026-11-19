var SHEET_NAME = 'Ranking';
var HEADERS = ['studentKey', 'publicCode', 'course', 'questionCount', 'correctCount', 'score', 'maxScore',
  'rankingScore', 'durationMs', 'achievedAt', 'collectionId', 'updatedAt'];
var COURSES = ['CC', 'SI', 'TADS', 'TGTI', 'TRC'];
var LIMIT = 15;

function doGet(e) {
  try {
    if (!e || !e.parameter || e.parameter.action !== 'ranking') throw new Error('Ação inválida.');
    var course = validateCourse_(e.parameter.course);
    return json_({ ok: true, entries: publicRanking_(course) });
  } catch (error) {
    return json_({ ok: false, error: safeMessage_(error) });
  }
}

function doPost(e) {
  try {
    var payload = JSON.parse(e && e.postData ? e.postData.contents : '{}');
    if (payload.action !== 'submit') throw new Error('Ação inválida.');
    var input = validateSubmission_(payload);
    var identity = pseudonymize_(input.academicId);
    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      var updated = upsertBest_(identity, input);
      return json_({ ok: true, publicCode: identity.publicCode, bestUpdated: updated,
        entries: publicRanking_(input.course) });
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

function validateSubmission_(payload) {
  var academicId = String(payload.academicId || '').toUpperCase().replace(/[\s.-]+/g, '');
  if (!/^[A-Z0-9]{4,20}$/.test(academicId)) throw new Error('RA inválido.');
  var course = validateCourse_(payload.course);
  var questionCount = integer_(payload.questionCount, 'Quantidade inválida.');
  var correctCount = integer_(payload.correctCount, 'Acertos inválidos.');
  var score = integer_(payload.score, 'Pontuação inválida.');
  var maxScore = integer_(payload.maxScore, 'Pontuação máxima inválida.');
  var durationMs = integer_(payload.durationMs, 'Duração inválida.');
  if (questionCount !== 25 || maxScore !== 2500 || correctCount < 0 || correctCount > 25 ||
      score !== correctCount * 100 || durationMs < 0 || durationMs > 14400000) {
    throw new Error('O resultado não corresponde a uma jornada válida de 25 desafios.');
  }
  if (payload.collectionId !== 'enade-2026') throw new Error('Coleção inválida.');
  return { academicId: academicId, course: course, questionCount: questionCount, correctCount: correctCount,
    score: score, maxScore: maxScore, rankingScore: Math.round(score / maxScore * 1000),
    durationMs: durationMs, collectionId: payload.collectionId };
}

function pseudonymize_(academicId) {
  var salt = PropertiesService.getScriptProperties().getProperty('RANKING_HMAC_SECRET');
  if (!salt || salt.length < 32) throw new Error('Serviço não configurado.');
  var signature = Utilities.computeHmacSha256Signature(academicId, salt);
  var key = Utilities.base64EncodeWebSafe(signature).replace(/=+$/, '');
  return { studentKey: key, publicCode: 'N9-' + key.substring(0, 8).toUpperCase() };
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

function compareRows_(a, b) {
  return Number(b[7]) - Number(a[7]) || Number(b[4]) - Number(a[4]) || Number(a[8]) - Number(b[8]) ||
    String(a[9]).localeCompare(String(b[9]));
}

function sheet_() {
  var id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!id) throw new Error('Serviço não configurado.');
  var spreadsheet = SpreadsheetApp.openById(id);
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
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
