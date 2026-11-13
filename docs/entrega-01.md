# Primeira entrega — Missão ENADE

Concluída em 12/11/2026. Escopo: fundação e navegação inicial, conforme autorização do responsável pelo projeto.

## Resultado

Vite 8.3.8, TypeScript 5.9.3 estrito e Phaser 3.90.0 instalado localmente. O fluxo disponível é início → seleção com sigla e nome completo → confirmação → Central Nexo provisória. A escolha aceita CC, SI, TADS, TGTI e TRC, permanece ao navegar e trocar curso e é apagada ao recarregar ou fechar a página.

Uma única GameSession recebe os comandos e mantém o estado em memória. Textos e ações são HTML semântico, com radios nativos, confirmação desabilitada sem seleção, foco entre telas e anúncios de estado. Phaser apresenta formas estáticas em Canvas 2D e alterna Boot, Preload, Home, CourseSelect e Map. A MapScene é apenas provisória.

A organização segue as camadas e pastas da arquitetura. Pastas futuras têm somente `.gitkeep`; modelos, regras e adaptadores de outras entregas não foram simulados. Os controles HTML também funcionam quando o motor não carrega. Fontes, motor e recursos são locais.

## Verificação concluída

| Verificação | Resultado |
| --- | --- |
| Node.js / npm / Git | 26.13.1 / 11.20.0 / 2.56.0.windows.4 |
| `npm.cmd run lint` | Passou |
| `npm.cmd test` | 15 testes, 2 arquivos, passaram |
| `npm.cmd run build` | TypeScript e pacote de produção passaram |
| `npm.cmd run test:e2e` | 14 testes Chromium passaram, 32,5 segundos |
| Dependências | Instalação local válida; auditoria final da instalação: zero vulnerabilidades conhecidas |
| Fontes documentais | Sete cópias e arquitetura conferidas byte a byte por SHA-256 |
| Revisão visual | Capturas de início, seleção e central em computador e celular inspecionadas |

As jornadas E2E cobrem os cinco cursos em 1366 × 900 e 360 × 800, troca de curso, reset por recarga, ausência de gravação em LocalStorage/SessionStorage e de requisições externas, foco e navegação por teclado. A central também é verificada em 320 × 740 e 800 × 360, sem rolagem horizontal ou perda da escolha. Há teste da interface quando o chunk do motor é bloqueado e verificação de desenho efetivo do canvas.

O pacote inicial totaliza aproximadamente **328 KB com gzip**, conforme o relatório do Vite, incluindo cerca de 318,5 KB do Phaser. A primeira execução do Chromium excedeu o tempo em dois testes durante inicialização simultânea; a suíte foi configurada com um worker para reduzir disputa de recursos e a execução final completa passou.

A dependência transitiva `minimatch` das ferramentas de lint foi fixada em `11.0.8` por `overrides` para corrigir o aviso moderado detectado na instalação. Lint, tipos, unidade e integração foram repetidos após o ajuste.

## Como iniciar

Na pasta do projeto:

```powershell
npm.cmd ci
npm.cmd run dev
```

Abra o endereço indicado pelo Vite, normalmente [localhost:5173](http://localhost:5173). Como as dependências já estão instaladas, basta `npm.cmd run dev` nesta máquina. Para o pacote compilado, use `npm.cmd run preview` e [localhost:4173](http://localhost:4173).

No celular da mesma rede, use o IP local do computador e a porta exibida. As instruções completas estão no [README](../README.md).

## Limites e próximos passos

A verificação móvel é emulação Chromium. Android/Chrome e iOS/Safari reais, NVDA/VoiceOver/TalkBack e auditoria completa de acessibilidade permanecem pendentes; não se declara conformidade WCAG completa. O workflow de CI foi preparado, mas não executado num provedor remoto.

A central informa explicitamente que as questões e as cinco trilhas ainda estão em preparação. Não há conteúdo pedagógico novo, questões, mapa de dez terminais, pontuação, login, servidor de aplicação, banco, ranking online, chamadas de IA, APIs pagas ou progresso persistente nesta entrega.

Os sete originais na raiz e as cópias em `docs/fontes` permanecem íntegros. `docs/arquitetura.md` é cópia integral. Somente a cópia operacional `docs/backlog.md` recebeu atualização de status. A próxima entrega depende de autorização do responsável.

## Arquivos criados ou atualizados

`docs/backlog.md` foi criado a partir da fonte e atualizado com o estado desta entrega. Os outros arquivos abaixo foram criados; os sete arquivos originais da raiz não foram modificados. Dependências em `node_modules`, pacote em `dist` e evidências em `test-results` são artefatos gerados e estão ignorados pelo Git.

- `.github/workflows/ci.yml`
- `.gitignore`
- `.nvmrc`
- `docs/arquitetura.md`
- `docs/backlog.md`
- `docs/entrega-01.md`
- `docs/fontes/areas.json`
- `docs/fontes/arquitetura.md`
- `docs/fontes/backlog.md`
- `docs/fontes/distribuicao-inicial-questoes.md`
- `docs/fontes/matriz-pedagogica.md`
- `docs/fontes/referencias-enade-2026.md`
- `docs/fontes/visao-do-jogo.md`
- `eslint.config.js`
- `index.html`
- `package-lock.json`
- `package.json`
- `playwright.config.ts`
- `public/favicon.svg`
- `README.md`
- `scripts/.gitkeep`
- `src/app/bootstrap.ts`
- `src/app/commands/.gitkeep`
- `src/app/courses.ts`
- `src/app/GameSession.ts`
- `src/assets/audio/.gitkeep`
- `src/assets/images/.gitkeep`
- `src/content/courses.json`
- `src/content/questions/.gitkeep`
- `src/domain/models/Course.ts`
- `src/game/config.ts`
- `src/game/objects/.gitkeep`
- `src/game/scenes/BootScene.ts`
- `src/game/scenes/CityScene.ts`
- `src/game/scenes/CourseSelectScene.ts`
- `src/game/scenes/HomeScene.ts`
- `src/game/scenes/MapScene.ts`
- `src/game/scenes/PreloadScene.ts`
- `src/infrastructure/content/.gitkeep`
- `src/infrastructure/storage/migrations/.gitkeep`
- `src/infrastructure/system/.gitkeep`
- `src/main.ts`
- `src/ports/.gitkeep`
- `src/schemas/.gitkeep`
- `src/styles/base.css`
- `src/styles/components.css`
- `src/styles/layout.css`
- `src/styles/tokens.css`
- `src/ui/announcements.ts`
- `src/ui/AppShell.ts`
- `src/ui/components/elements.ts`
- `src/ui/focus.ts`
- `src/ui/views/CourseSelectView.ts`
- `src/ui/views/HomeView.ts`
- `src/ui/views/MapView.ts`
- `tests/e2e/first-delivery.spec.ts`
- `tests/fixtures/.gitkeep`
- `tests/integration/AppShell.test.ts`
- `tests/unit/GameSession.test.ts`
- `tsconfig.json`
- `vite.config.ts`
- `vitest.config.ts`
