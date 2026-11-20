# Preparação para futura publicação no GitHub Pages

Este documento descreve uma possibilidade futura de publicação gratuita do **N9 — Jornada Digital**. A preparação não criou repositório remoto, não realizou login, não enviou commits, não habilitou o GitHub Pages e não publicou o site.

## Alerta antes de publicar

Uma publicação no GitHub Pages torna o site e seus arquivos acessíveis publicamente na internet.

- Os JSON, textos, metadados e gabaritos fazem parte da aplicação cliente e poderão ser inspecionados pelo navegador. Eles **não estão protegidos** por estarem empacotados pelo Vite.
- Os 66 conteúdos permanecem experimentais e em revisão editorial assistida por IA. O site deve continuar exibindo **Conteúdo experimental em revisão editorial**.
- O ranking permanece somente no dispositivo e não representa toda a turma.
- Não existe autenticação, conta online, servidor de aplicação ou banco de dados online.
- Perfis, progresso, resultados e ranking ficam no LocalStorage do navegador atual. Eles não são sincronizados entre dispositivos.

Não publique antes de confirmar que o nível de exposição dos conteúdos e gabaritos foi autorizado.

## Estado preparado

O MVP inclui cinco cursos, jornadas de 25 desafios, mapa Base N9, perfil local e ranking online por curso.

O Vite usa a variável `VITE_BASE_PATH`:

- sem a variável: `base` igual a `/`, adequado ao desenvolvimento, testes e build local;
- com `/nome-do-repositorio/`: todos os recursos gerados usam o subdiretório de um site de projeto do GitHub Pages;
- o workflow calcula o caminho a partir de `github.event.repository.name`, sem nome de conta ou repositório fixado no código.

A aplicação não possui rotas no servidor. A navegação entre telas ocorre no documento atual, portanto uma recarga retorna ao ponto de entrada do mesmo subdiretório sem depender de fallback de SPA. O progresso compatível reaparece a partir do LocalStorage da origem publicada.

## Pré-requisitos futuros

Configure no repositório a variável de Actions `VITE_RANKING_API_URL` com a URL `/exec` do Google Apps Script. Sem essa variável, o jogo continua funcional, mas o ranking fica indisponível. Nunca cadastre `SPREADSHEET_ID` ou `RANKING_HMAC_SECRET` como variáveis do Vite; esses valores pertencem exclusivamente às propriedades privadas do Apps Script.

- conta GitHub autorizada a hospedar o projeto;
- Git instalado e autoria configurada;
- Node.js 26.x e npm 11 ou 12 para validação local;
- revisão dos alertas de conteúdo, privacidade e propriedade intelectual;
- decisão institucional sobre o nome provisório N9;
- revisão editorial assistida por IA e decisão explícita da pessoa responsável sobre a exposição dos gabaritos;
- suíte local aprovada e árvore Git limpa.

## Validar localmente antes de criar o repositório

Build normal na raiz:

```powershell
npm.cmd ci
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test
npm.cmd run validate:content
npm.cmd run build
npm.cmd run test:e2e
```

Build simulando um subdiretório:

```powershell
$env:VITE_BASE_PATH = '/n9-jornada-digital/'
npm.cmd run build
npm.cmd run test:e2e
Remove-Item Env:VITE_BASE_PATH
```

O nome `n9-jornada-digital` é apenas um exemplo. Use no teste o nome planejado para o futuro repositório. O diretório `dist/` é gerado localmente e está no `.gitignore`; ele não deve ser commitado.

## Criar futuramente o repositório

Quando houver autorização:

1. No GitHub, crie um repositório vazio com o nome aprovado.
2. Defina a visibilidade conscientemente. O GitHub Pages gratuito e o conteúdo publicado devem ser tratados como acesso público.
3. Não inicialize o repositório remoto com outro README, `.gitignore` ou licença se quiser evitar histórico divergente no primeiro envio.
4. Copie a URL HTTPS ou SSH exibida pelo GitHub, sem incluir credenciais na URL.

Esta preparação não escolhe conta, organização, nome do repositório ou visibilidade.

## Adicionar o remote e fazer o primeiro push

Confirme primeiro a branch atual:

```powershell
git branch --show-current
git status
```

O projeto estava na branch `master` durante esta preparação. Para mantê-la:

```powershell
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git remote -v
git push -u origin master
```

Se a equipe decidir usar `main`, faça a mudança conscientemente antes do primeiro push:

```powershell
git branch -M main
git push -u origin main
```

Nunca coloque token, senha ou credencial na URL do remote. Use o gerenciador de credenciais do Git ou autenticação SSH configurada fora do repositório.

## Habilitar GitHub Pages

Depois do primeiro push e somente com autorização:

1. Abra **Settings → Pages** no repositório.
2. Em **Build and deployment**, escolha **GitHub Actions** como fonte.
3. Não escolha publicação por branch se a intenção for usar o workflow versionado.
4. Abra a aba **Actions** e confirme que o workflow **Publicar teste no GitHub Pages** está disponível.

O arquivo [deploy-pages.yml](../.github/workflows/deploy-pages.yml) não reage a `push`. Seu único gatilho é `workflow_dispatch`.

## Executar manualmente o workflow

1. Abra **Actions**.
2. Selecione **Publicar teste no GitHub Pages**.
3. Use **Run workflow**.
4. Escolha a branch autorizada.
5. Confirme **Run workflow**.

O workflow:

1. obtém o código com `actions/checkout`;
2. configura o Node.js indicado em `.nvmrc` e o cache do npm;
3. instala exatamente o lockfile com `npm ci`;
4. executa lint e toda a suíte Vitest;
5. configura o GitHub Pages com a ação oficial;
6. compila com `VITE_BASE_PATH=/<nome-real-do-repositorio>/`;
7. envia somente `dist/` como artefato do Pages;
8. publica pelo environment protegido `github-pages`.

As permissões declaradas são `contents: read`, `pages: write` e `id-token: write`. Não há permissão de escrita no repositório.

## Localizar e conferir a URL

Quando o job `deploy` terminar, a URL aparece:

- no resumo da execução do workflow;
- no environment `github-pages`;
- em **Settings → Pages**.

Para um site de projeto, o formato usual é:

```text
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```

Confirme a URL exibida pelo próprio GitHub; organizações, nomes e domínios personalizados podem alterar esse formato.

Depois de publicar, repita ao menos: carregamento inicial, perfil, curso, missão, mapa, questão, puzzle, ranking, recarga, desktop, celular e inspeção do console/rede para 404.

## Atualizar o site

O push de novos commits **não publica automaticamente**. Para atualizar:

1. execute todas as validações localmente;
2. faça commit das mudanças aprovadas;
3. envie a branch ao remote autorizado;
4. abra Actions e execute manualmente o mesmo workflow;
5. confira a URL e os assets após o deploy.

Essa separação impede uma publicação acidental causada apenas por um push.

## Despublicar

Para retirar o site do ar, use a opção de despublicação/remoção do deployment em **Settings → Pages**, conforme a interface atual do GitHub. Desabilitar apenas o workflow impede novos deploys, mas não garante a remoção do deployment já publicado.

Depois:

- confirme em janela anônima que a URL não serve mais o site;
- preserve o histórico Git e os artefatos necessários para auditoria;
- não apague o repositório como primeira medida, a menos que essa decisão tenha sido autorizada separadamente.

## Voltar para uma versão anterior

Prefira uma reversão auditável, sem reescrever o histórico compartilhado:

```powershell
git log --oneline
git revert HASH_DO_COMMIT_PROBLEMATICO
git push
```

Depois execute manualmente o workflow na branch que contém o commit de reversão. Se vários commits precisarem ser revertidos, planeje a ordem e valide localmente antes do push. Evite `git reset --hard` e force push em uma branch já compartilhada.

## Segurança e privacidade

Antes de cada publicação, confirme:

- `.env`, `.env.*`, `.npmrc`, chaves, certificados, credenciais e arquivos de segredo continuam ignorados;
- nenhum segredo foi inserido no histórico Git, nos JSON, no workflow ou em URLs;
- `node_modules/`, `dist/`, cobertura, relatórios Playwright, resultados de teste, logs, caches e arquivos temporários não estão versionados;
- não existem dados reais de alunos nem capturas contendo dados pessoais;
- o conteúdo do LocalStorage não faz parte do build;
- os requests do jogo permanecem restritos aos arquivos estáticos da própria origem;
- nenhuma dependência externa foi adicionada para perfil, ranking ou resultados.

O workflow não usa segredo personalizado. A autenticação do deploy usa o token OIDC temporário fornecido pelo GitHub Pages com as permissões mínimas declaradas.

## Validação realizada nesta preparação

- build normal em `/`: aprovado;
- build simulada em `/n9-jornada-digital/`: aprovada, com favicon, CSS e módulos sob o prefixo correto;
- suíte Vitest final: 23 arquivos e 258 testes aprovados, incluindo contratos do base path, workflow e `.gitignore`;
- suíte Playwright completa sobre o subdiretório: 67 casos aprovados, um dispensado por cobertura móvel equivalente e nenhuma falha;
- verificação específica de base path e recarga: aprovada em desktop e celular, sem resposta 404;
- fluxos de perfil, cursos, missões, mapa, questões, puzzles, ranking, salvamento e recarga: aprovados no subdiretório simulado;
- lint, TypeScript, contratos de conteúdo e `diff --check`: aprovados;
- nenhuma requisição externa de perfil, ranking ou resultado foi observada pelos testes;
- `dist/`, relatórios, resultados de teste, dependências e arquivos de ambiente permaneceram ignorados.

Uma repetição posterior na raiz ficou temporariamente degradada por lentidão local e atingiu o timeout original de 30 segundos em três casos. Os relatórios mostraram os elementos presentes, sem erro de asset ou 404. O harness recebeu timeout total de 60 segundos e um deslocamento de mapa determinístico; os 15 casos afetados foram repetidos e aprovados. As expectativas funcionais mantiveram seus timeouts curtos.

## Pendências antes de qualquer publicação

- autorização institucional para o nome provisório N9 e para a exposição pública do projeto;
- revisão editorial dos conteúdos marcados como experimentais;
- decisão consciente sobre a publicação dos gabaritos e metadados editoriais;
- homologação humana com NVDA e VoiceOver;
- teste em dispositivos físicos e navegadores adicionais;
- revisão de licença do código, das fontes documentais e dos recursos visuais;
- definição da conta/organização, visibilidade e nome definitivo do repositório;
- política de manutenção, atendimento e despublicação;
- eventual margem editorial adicional para a Arena, que hoje usa a capacidade exata de vinte questões por curso.

Até essas decisões serem tomadas, o projeto deve permanecer somente no repositório Git local.
