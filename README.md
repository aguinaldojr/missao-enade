# Missão ENADE

Jogo educacional de navegador para CC, SI, TADS, TGTI e TRC, ambientado na cidade digital Nexo. A versão 0.2.0 oferece uma **fase de demonstração com dez questões fictícias**, identificadas como exemplos em todas as telas da partida.

O fluxo disponível é **Iniciar missão → escolher curso → Central Nexo → Jogar fase de exemplo → dez questões com feedback → resultado → menu**.

## Iniciar localmente

Use Node.js **26.x** (validado com **26.13.1**, indicado em `.nvmrc`) e npm **11 ou 12**.

```powershell
npm.cmd ci
npm.cmd run dev
```

Abra o endereço exibido pelo Vite, normalmente [localhost:5173](http://localhost:5173). Nesta máquina, as dependências já estão instaladas; basta `npm.cmd run dev`. No PowerShell, `npm.cmd` evita depender da política de scripts `.ps1`. Em outros terminais pode usar `npm`.

No celular conectado à mesma rede, abra `http://IP-DO-COMPUTADOR:5173`. O servidor de desenvolvimento escuta na rede local. Não há servidor de aplicação ou cadastro.

## Como funciona a fase

- O arquivo [central-nexo.json](src/content/questions/central-nexo.json) contém 14 exemplos: nove compartilhados e um específico de cada curso. Cada curso recebe exatamente dez questões, em ordem fixa.
- `classification` aceita COMUM, CC, SI, TADS, TGTI e TRC. `courses` é uma lista explícita e permite vários cursos por questão. A filtragem usa essa lista: a classificação COMUM não libera uma questão automaticamente para todos.
- Escolha uma das cinco alternativas e pressione **Confirmar resposta**. Antes de confirmar, pode mudar a seleção; depois, a resposta fica bloqueada.
- O feedback mostra acerto ou erro, alternativa correta, explicação geral, explicação da escolha e justificativas das cinco alternativas. A solução só é renderizada após confirmar.
- Cada acerto vale 100 pontos; erros valem zero, sem desconto, cronômetro ou bloqueio por nota. A pontuação de cada partida começa em zero e pode chegar a 1.000.
- **Próxima questão** avança após a apresentação do feedback. Após a décima questão, **Ver resultado final** conclui a fase e salva seu resumo.
- **Voltar ao menu** está disponível durante a partida e no resultado. Sair ou recarregar encerra uma partida incompleta; não há retomada nesta entrega.

As questões foram criadas exclusivamente para demonstrar o funcionamento. Não são questões oficiais do ENADE, não foram validadas por docentes e não substituem o conteúdo pedagógico planejado. A fase usa o identificador separado `FASE-EXEMPLO-01`; não é a fase comum aprovada prevista no MVP.

## Resultado local

Somente o **último resultado concluído** é salvo no LocalStorage, na chave `missao-enade:example-result:v1`. O resumo tem versão de formato e conteúdo, identificador local da tentativa, curso, dez questões, acertos, pontuação e data de conclusão. O menu o apresenta novamente após recarregar.

Uma nova conclusão substitui o resumo anterior; não existe ranking ou histórico acumulado. A escolha de curso e as respostas da partida ficam somente em memória. O código não apaga chaves de outros aplicativos.

JSON inválido é ignorado sem travar o jogo. Um registro corrompido pode ser substituído quando o usuário conclui outra fase; versões futuras desconhecidas são preservadas. Se o armazenamento estiver bloqueado ou sem quota, o resultado continua visível na sessão com aviso e botão para tentar salvar novamente. Navegador, origem ou dispositivo diferentes não compartilham o resultado.

## Verificar e compilar

```powershell
npm.cmd run lint
npm.cmd test
npm.cmd run validate:content
npm.cmd run build
npm.cmd exec -- playwright install chromium
npm.cmd run test:e2e
npm.cmd run preview
```

O build executa TypeScript e os testes de contrato do catálogo antes de gerar `dist/`. O preview serve o pacote em [localhost:4173](http://localhost:4173); não abra o HTML por `file://`.

Vitest cobre regras de resposta única, 0/8/10 acertos, elegibilidade, contratos JSON, DOM e falhas de armazenamento. Playwright verifica a navegação e partidas completas nos cinco cursos, computador/celular, teclado/toque, reflow, recarga e LocalStorage indisponível. Os testes iniciam seu próprio preview na porta 4173. Emulação não substitui Android/iOS reais ou leitores de tela.

## Organização e limites

- `src/domain/`: questões, tentativas e resumos, elegibilidade, pontuação e progressão sem DOM ou Phaser.
- `src/app/`: comandos e única sessão de jogo; injeta contratos de conteúdo e resultado.
- `src/ports/`: contratos usados pela aplicação.
- `src/infrastructure/`: validação Ajv, carregamento JSON e LocalStorage com tratamento de falhas.
- `src/schemas/`: schemas do catálogo fictício e do resumo de resultado.
- `src/game/`: ambientação local em Phaser 3 e cenas de início, central, questão e resultado.
- `src/ui/` e `src/styles/`: HTML semântico, foco, anúncios, alternativas, feedback e layout responsivo.
- `tests/`: unidade, integração DOM e testes de navegador.

Os documentos pedagógicos originais e as cópias em `docs/fontes` permanecem preservados. A [arquitetura](docs/arquitetura.md) descreve o MVP completo; o [backlog](docs/backlog.md) diferencia o que foi demonstrado nesta fase dos critérios ainda pendentes.

Mapa de dez terminais, retomada de partida, revisão de erros, conquistas, conteúdo aprovado, campanhas específicas, publicação e outras funções futuras permanecem pendentes. Não há login, banco de dados, ranking online, CDN, IA durante a partida ou APIs pagas. O projeto é independente, sem vínculo ou chancela do Inep.
