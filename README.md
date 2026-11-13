# N9 — Jornada Digital

**N9 é um nome provisório, sujeito à aprovação institucional.** A escolha busca uma associação conceitual com a Universidade Nove de Julho, sem afirmar que o jogo seja um produto oficial. Não foram adotados logotipo, slogan, brasão, imagens de campi ou cores oficiais. A paleta anterior do protótipo permanece sem qualificação institucional. O subtítulo é **Jornada Digital**.

Experiência permanente e lúdica de desenvolvimento de competências em tecnologia para CC, SI, TADS, TGTI e TRC, ambientada na cidade digital Nexo. A versão 0.2.0 oferece uma **fase de demonstração com dez desafios fictícios**, identificados como exemplos em todas as telas da partida.

O fluxo disponível é **Iniciar missão → escolher curso → Central Nexo → Jogar missão de exemplo → dez desafios com feedback → relatório da missão → menu**.

## Posicionamento e origem pedagógica interna

A identidade e os textos principais ficam em `src/config/game.ts`, incluindo subtítulo, títulos da aba e HTML inicial. O jogador encontra missões, desafios, pontuação e relatórios da missão, em uma experiência contínua de aprendizagem.

Na primeira versão editorial, a coleção interna **`enade-2026`** terá como base as competências e referências do ENADE. Essa origem é apenas metadado pedagógico, registrado em `src/config/collections.ts`; não aparece como finalidade de preparação, prova ou simulado na interface principal. A demonstração fictícia atual mantém seus IDs e não se torna uma coleção aprovada.

PPCs, disciplinas, nivelamento, projetos e certificações são futuras origens de coleções. Missão especial e laboratório de treinamento são termos reservados, sem implementação nesta refatoração.

Nome técnico da pasta/pacote, IDs, versões e a chave `missao-enade:example-result:v1` permanecem por compatibilidade. As regras de filtragem, confirmação, pontuação e armazenamento são as mesmas do checkpoint.

## Iniciar localmente

Use Node.js **26.x** (validado com **26.13.1**, indicado em `.nvmrc`) e npm **11 ou 12**.

```powershell
npm.cmd ci
npm.cmd run dev
```

Abra o endereço exibido pelo Vite, normalmente [localhost:5173](http://localhost:5173). Nesta máquina, as dependências já estão instaladas; basta `npm.cmd run dev`. No PowerShell, `npm.cmd` evita depender da política de scripts `.ps1`. Em outros terminais pode usar `npm`.

No celular conectado à mesma rede, abra `http://IP-DO-COMPUTADOR:5173`. O servidor de desenvolvimento escuta na rede local. Não há servidor de aplicação ou cadastro.

## Como funciona a missão

- O arquivo [central-nexo.json](src/content/questions/central-nexo.json) contém 14 exemplos: nove compartilhados e um específico de cada curso. Cada curso recebe exatamente dez desafios, em ordem fixa.
- `classification` aceita COMUM, CC, SI, TADS, TGTI e TRC. `courses` é uma lista explícita e permite vários cursos por desafio. A filtragem usa essa lista: a classificação COMUM não libera um desafio automaticamente para todos.
- Escolha uma das cinco alternativas e pressione **Confirmar resposta**. Antes de confirmar, pode mudar a seleção; depois, a resposta fica bloqueada.
- O feedback mostra acerto ou erro, alternativa correta, explicação geral, explicação da escolha e justificativas das cinco alternativas. A solução só é renderizada após confirmar.
- Cada acerto vale 100 pontos; erros valem zero, sem desconto, cronômetro ou exigência mínima de pontuação. A pontuação de cada partida começa em zero e pode chegar a 1.000.
- **Próximo desafio** avança após a apresentação do feedback. Após o décimo desafio, **Ver relatório da missão** conclui a fase e salva seu resumo.
- **Voltar ao menu** está disponível durante a partida e no relatório da missão. Sair ou recarregar encerra uma partida incompleta; não há retomada nesta entrega.

Os desafios foram criados exclusivamente para demonstrar o funcionamento; são fictícios, ainda sem validação docente, e não substituem o conteúdo pedagógico planejado. A fase usa o identificador separado `FASE-EXEMPLO-01`; não é a fase comum aprovada prevista no MVP.

## Relatório da missão local

Somente o **último relatório da missão concluído** é salvo no LocalStorage, na chave `missao-enade:example-result:v1`. O resumo tem versão de formato e conteúdo, identificador local da tentativa, curso, dez desafios, acertos, pontuação e data de conclusão. O menu o apresenta novamente após recarregar.

Uma nova conclusão substitui o resumo anterior; não existe ranking ou histórico acumulado. A escolha de curso e as respostas da partida ficam somente em memória. O código não apaga chaves de outros aplicativos.

JSON inválido é ignorado sem travar o jogo. Um registro corrompido pode ser substituído quando o usuário conclui outra fase; versões futuras desconhecidas são preservadas. Se o armazenamento estiver bloqueado ou sem quota, o relatório da missão continua visível na sessão com aviso e botão para tentar salvar novamente. Navegador, origem ou dispositivo diferentes não compartilham o relatório da missão.

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

- `src/domain/`: desafios, tentativas e resumos, elegibilidade, pontuação e progressão sem DOM ou Phaser.
- `src/app/`: comandos e única sessão de jogo; injeta contratos de conteúdo e relatório da missão.
- `src/ports/`: contratos usados pela aplicação.
- `src/infrastructure/`: validação Ajv, carregamento JSON e LocalStorage com tratamento de falhas.
- `src/schemas/`: schemas do catálogo fictício e do resumo de relatório da missão.
- `src/game/`: ambientação local em Phaser 3 e cenas de início, central, questão e relatório da missão.
- `src/ui/` e `src/styles/`: HTML semântico, foco, anúncios, alternativas, feedback e layout responsivo.
- `tests/`: unidade, integração DOM e testes de navegador.

As referências pedagógicas e as cópias históricas em `docs/fontes` permanecem preservadas. A visão vigente está em [docs/visao-do-jogo.md](docs/visao-do-jogo.md). A [arquitetura](docs/arquitetura.md) descreve o MVP completo; o [backlog](docs/backlog.md) diferencia o que foi demonstrado nesta fase dos critérios ainda pendentes.

Mapa de dez terminais, retomada de partida, laboratório de treinamento, conquistas, conteúdo aprovado, campanhas específicas, publicação e outras funções futuras permanecem pendentes. Não há login, banco de dados, ranking online, CDN, IA durante a partida ou APIs pagas. O projeto é independente, sem vínculo ou chancela do Inep.

## Explorar a Base N9

Após selecionar qualquer um dos cinco cursos, entre na base. Use **setas ou WASD** para mover, ou mantenha pressionados os botões direcionais na tela. Use **E**, **Espaço** ou o botão de interação quando a indicação de proximidade aparecer. No teclado, Tab também alcança os controles da interface.

Converse com **Lia** para conhecer a missão. No **computador**, inicie os mesmos dez desafios fictícios. Ao concluir e visualizar o relatório, escolha **Voltar à Base N9**: o personagem retorna ao mesmo local e a porta fica liberada, independentemente da pontuação. Atravesse para conhecer o terminal; não há outra região implementada.

Posição, estado da missão e porta são salvos separadamente em `n9:exploration:v1`, no navegador atual, inclusive após recarregar e escolher novamente um curso. Esse progresso da base é compartilhado entre os cinco cursos; respostas de fases incompletas não são retomadas. O relatório continua usando sua chave anterior. A interface avisa quando o salvamento falha. Apagar dados do navegador elimina o progresso; não existe conta ou sincronização.

No PowerShell, execute `npm.cmd run dev` na pasta do projeto, onde está `package.json`:

```powershell
Set-Location 'C:\Users\AulaU9\Documents\Projetos\missao-enade'
npm.cmd run dev
```

Abra o endereço informado pelo Vite, normalmente [localhost:5173](http://localhost:5173).
