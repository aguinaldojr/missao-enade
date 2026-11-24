# Ranking online com Google Sheets

## Escopo

O serviço mantém rankings independentes por curso e modalidade. O ranking de avaliação reúne os 15 melhores resultados de jornadas concluídas de 25 desafios. As abas operacionais também preparam o ranking diário (10 posições) e o ranking geral semanal (15 posições). Resultados de cursos ou modalidades diferentes não são comparados.

No primeiro acesso, o jogador informa RA e e-mail. O Google Apps Script confere os dois campos na aba privada `Alunos` e devolve nome, curso, modalidade, tipo de perfil e um comprovante assinado. O e-mail é descartado após a conferência. O perfil validado fica neste navegador e restringe o jogador ao seu curso. O ranking recebe o comprovante assinado e não volta a solicitar o RA.

O RA fica na aba institucional `Alunos` e no perfil local validado. A aba pública operacional `Ranking` continua armazenando somente `studentKey`, código público pseudônimo, curso, acertos, pontuação, duração, data e coleção. O e-mail não é salvo no navegador nem na aba `Ranking`.

Mesmo com a pseudonimização, o RA é um dado pessoal no momento da transmissão. A instituição deve definir base legal, aviso de privacidade, prazo de retenção e canal para correção ou exclusão antes do uso com estudantes.

## Ordenação

1. maior desempenho normalizado;
2. maior quantidade de acertos;
3. menor duração;
4. resultado alcançado primeiro.

A fórmula permanece `arredondar((pontuação / 2500) × 1000)`. Cada RA ocupa no máximo uma posição por curso. Um resultado inferior não substitui o melhor.

## Componentes

- `src/infrastructure/online/AppsScriptLeaderboardRepository.ts`: cliente HTTPS e validação das respostas;
- `src/ui/components/OnlineLeaderboardPanel.ts`: consentimento, envio e tabela acessível;
- `google-apps-script/ranking/Code.gs`: API e acesso à planilha privada;
- `google-apps-script/ranking/appsscript.json`: manifesto do projeto Apps Script;
- variáveis de build `VITE_RANKING_API_URL` e `VITE_STUDENT_REGISTRY_API_URL`: URL `/exec` da implantação. As duas podem usar a mesma URL.

Sem a variável, nenhuma chamada de rede é feita e o jogo informa que o ranking online está temporariamente indisponível. A partida, o perfil e o progresso continuam funcionando, mas não há classificação alternativa local.

## Configuração da planilha e do Apps Script

1. Crie uma planilha Google privada. Não publique nem compartilhe a planilha com estudantes.
2. Crie um projeto Apps Script e copie os dois arquivos de `google-apps-script/ranking/`.
3. Em **Configurações do projeto > Propriedades do script**, crie:
   - `SPREADSHEET_ID`: identificador da planilha;
   - `RANKING_HMAC_SECRET`: segredo aleatório com pelo menos 32 caracteres.
4. Execute manualmente `setupRankingSheet`, `setupStudentRosterSheet` e `setupOperationalSheets` uma vez e autorize somente a conta proprietária. Se a aba `Alunos` já estiver preenchida, não execute `setupStudentRosterSheet`; a função se recusa a alterá-la.
5. Implante como aplicativo da web, executando como proprietário, com acesso compatível com os participantes do piloto.
6. Copie a URL terminada em `/exec` para `VITE_RANKING_API_URL` e `VITE_STUDENT_REGISTRY_API_URL`. Em desenvolvimento, use variáveis locais; no GitHub Actions, crie variáveis de repositório com esses nomes.

Não coloque o ID da planilha nem o segredo HMAC no Vite, no Git ou no navegador. A URL da API não é segredo e deve ser protegida por validação e limites no servidor.

## Estrutura da aba `Ranking`

| Coluna | Finalidade |
|---|---|
| `studentKey` | HMAC completo usado para deduplicação |
| `publicCode` | código exibido, como `N9-AB12CD34` |
| `course` | CC, SI, TADS, TGTI ou TRC |
| `questionCount` | sempre 25 nesta versão |
| `correctCount`, `score`, `maxScore`, `rankingScore` | desempenho |
| `durationMs` | tempo medido pelo cliente |
| `achievedAt`, `updatedAt` | datas do servidor |
| `collectionId` | coleção técnica de origem |

## Estrutura da aba privada `Alunos`

| Coluna | Preenchimento |
|---|---|
| `academicId` | RA do aluno ou identificador de teste do professor |
| `fullName` | nome completo |
| `email` | e-mail institucional ou pessoal cadastrado |
| `course` | CC, SI, TADS, TGTI ou TRC |
| `modality` | PRESENCIAL ou EAD |
| `role` | student ou teacher |
| `active` | TRUE para liberar o acesso |

Importe uma linha por aluno. Para professores de teste, crie uma linha por curso com `role` igual a `teacher`. Esses perfis acessam o percurso completo e seus resultados são recusados pelo ranking.

## Criação das abas operacionais

Depois de copiar a versão atualizada de `Code.gs`, execute manualmente `setupOperationalSheets` no editor do Apps Script. A função cria `Resultados`, `Ranking_Diario`, `Ranking_Avaliacao`, `Ranking_Geral` e `Horas_Bonus`, congela e formata os cabeçalhos e não limpa dados existentes. Se encontrar uma dessas abas com outro cabeçalho, interrompe a execução para permitir conferência manual.

### Regras operacionais

- `Resultados` registra cada tentativa identificada uma única vez por aluno e `attemptId`.
- `Ranking_Diario` guarda as 10 melhores posições por data, curso e modalidade. A pontuação diária soma o melhor desempenho normalizado de cada modo naquele dia.
- `Ranking_Avaliacao` guarda as 15 melhores avaliações por semana, curso e modalidade.
- `Ranking_Geral` soma os resultados diários da semana e guarda as 15 melhores posições por curso e modalidade. O cálculo usa todos os participantes do dia, não apenas o top 10 diário.
- a semana começa na segunda-feira e encerra no sábado; resultados recebidos no domingo não entram nos rankings.
- `Horas_Bonus` concede uma hora por avaliação com pelo menos 15 acertos (60%), até o limite de 10 horas. Perfis de professor não recebem horas nem entram em ranking.
- cada uma das duas primeiras avaliações válidas com pelo menos 60% no ciclo concede 0,5 ponto; tentativas posteriores continuam podendo gerar horas, mas não aumentam essa categoria de bônus.
- cada fechamento diário no top 10 concede 0,5 ponto, limitado aos dois primeiros dias de classificação do estudante no ciclo.
- o top 15 do ranking geral encerrado concede 1,0 ponto. As três categorias podem ser acumuladas até o teto de 3,0 pontos no ciclo.
- o fechamento e a concessão automática de bônus são executados pela manutenção diária criada por `setupBenefitTrigger`; a classificação do dia atual nunca é premiada antes de seu encerramento.
- o destino administrativo é `AV2` para presencial e `DUAS_MENORES_NOTAS` para EAD; a aba começa com status `PENDENTE` para conferência institucional.

As consultas públicas novas usam `action=ranking`, `type=daily|evaluation|general`, `course` e `modality`. Sem `type`, a API preserva a resposta antiga para compatibilidade com a tela atual.

O Modo Rápido envia, mediante ação do estudante identificado, a quantidade de atividades resolvidas corretamente na primeira tentativa. O serviço normaliza esse resultado para `quickScore`; as tentativas de aprendizagem posteriores continuam liberadas, mas não aumentam a pontuação daquela atividade.

## Segurança e limitações

O serviço valida curso, contagem, relação entre acertos e pontos, coleção e limites de duração; usa bloqueio para evitar gravações concorrentes; devolve somente campos públicos; e nunca registra o RA deliberadamente. O Apps Script e a planilha devem permanecer privados.

Esta é uma solução de piloto. A validação de RA e e-mail reduz trocas acidentais e o uso direto do RA de um colega, mas alguém que conheça os dois dados ainda pode entrar. A aplicação roda no navegador, portanto pontuação e duração podem ser manipuladas por alguém com conhecimento técnico. Para ampliar o controle seriam necessários autenticação institucional, tentativas iniciadas no servidor, auditoria e política formal de retenção.

O endpoint real precisa ser testado após a implantação, inclusive a política de acesso e o comportamento entre GitHub Pages e Apps Script. Nenhum serviço foi criado ou publicado por esta alteração local.
