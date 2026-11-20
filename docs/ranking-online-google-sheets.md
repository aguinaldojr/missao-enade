# Ranking online com Google Sheets

## Escopo

O ranking online é o único ranking apresentado pelo jogo. Ele reúne os 15 melhores resultados de jornadas concluídas de 25 desafios, em tabelas independentes para CC, SI, TADS, TGTI e TRC. Resultados de cursos diferentes não são comparados.

O jogador informa o RA somente após concluir a jornada e aceitar o envio. O RA viaja por HTTPS até o Google Apps Script, é normalizado em memória e convertido por HMAC-SHA-256 em uma chave irreversível para uso operacional. A planilha armazena somente `studentKey`, código público pseudônimo, curso, acertos, pontuação, duração, data e coleção. O RA não é salvo no navegador, na planilha nem devolvido pela API.

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
- variável de build `VITE_RANKING_API_URL`: URL `/exec` da implantação.

Sem a variável, nenhuma chamada de rede é feita e o jogo informa que o ranking online está temporariamente indisponível. A partida, o perfil e o progresso continuam funcionando, mas não há classificação alternativa local.

## Configuração da planilha e do Apps Script

1. Crie uma planilha Google privada. Não publique nem compartilhe a planilha com estudantes.
2. Crie um projeto Apps Script e copie os dois arquivos de `google-apps-script/ranking/`.
3. Em **Configurações do projeto > Propriedades do script**, crie:
   - `SPREADSHEET_ID`: identificador da planilha;
   - `RANKING_HMAC_SECRET`: segredo aleatório com pelo menos 32 caracteres.
4. Execute manualmente `setupRankingSheet` uma vez e autorize somente a conta proprietária.
5. Implante como aplicativo da web, executando como proprietário, com acesso compatível com os participantes do piloto.
6. Copie a URL terminada em `/exec` para `VITE_RANKING_API_URL`. Em desenvolvimento, use uma variável local; no GitHub Actions, crie a variável de repositório com esse nome.

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

## Segurança e limitações

O serviço valida curso, contagem, relação entre acertos e pontos, coleção e limites de duração; usa bloqueio para evitar gravações concorrentes; devolve somente campos públicos; e nunca registra o RA deliberadamente. O Apps Script e a planilha devem permanecer privados.

Esta é uma solução de piloto, não um sistema antifraude. A aplicação roda no navegador, portanto pontuação e duração podem ser manipuladas por alguém com conhecimento técnico. A duração também pode incluir pausas, troca de aba ou suspensão do dispositivo. Para uso avaliativo seria necessário autenticação institucional, tentativas iniciadas no servidor, tokens de sessão, auditoria e política formal de retenção.

O endpoint real precisa ser testado após a implantação, inclusive a política de acesso e o comportamento entre GitHub Pages e Apps Script. Nenhum serviço foi criado ou publicado por esta alteração local.
