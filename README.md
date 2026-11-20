# N9 — Jornada Digital

**N9 é um nome provisório, sujeito à aprovação institucional.** O projeto não utiliza logotipo, slogan, brasão ou imagens oficiais e não afirma ser um produto oficial da Universidade Nove de Julho.

N9 — Jornada Digital é uma experiência educacional 2D para desenvolvimento de competências em tecnologia. O MVP atende às trilhas CC, SI, TADS, TGTI e TRC e combina exploração em visão superior, missões de múltipla escolha, quebra-cabeças de sequência lógica, perfil local e ranking online por curso.

O conteúdo permanece em governança editorial assistida por IA. O aviso **Conteúdo experimental em revisão editorial** é apresentado ao jogador.

## Estado do MVP

- mapa Base N9 com personagem, Lia, computador, terminal, porta e progresso local;
- 205 desafios de questão e oito puzzles provisórios;
- jornada fixa de 25 questões, com cinco comuns e vinte técnicas elegíveis para o curso;
- três roteiros-base para CC, TADS, TGTI e TRC e quatro para SI;
- sorteio determinístico por área depois dos roteiros-base, evitando a partida anterior;
- cinco cursos: CC, SI, TADS, TGTI e TRC;
- perfil por apelido e ranking separado por curso e tamanho;
- controles por teclado, mouse e toque;
- interface responsiva para desktop e celular;
- funcionamento inteiramente no navegador, sem servidor de aplicação ou banco de dados online.

Os JSON, metadados e gabaritos fazem parte da aplicação cliente e podem ser inspecionados por quem acessar uma versão publicada. Perfis, progresso, resultados e ranking permanecem no LocalStorage do navegador e não são enviados pela rede.

## Requisitos

- Node.js 26.x, conforme `.nvmrc`;
- npm 11 ou 12;
- Git para versionamento local;
- Chromium instalado pelo Playwright para os testes de navegador.

## Instalação e execução local

No PowerShell, entre na pasta que contém `package.json`:

```powershell
Set-Location 'C:\Users\AulaU9\Documents\Projetos\missao-enade'
npm.cmd ci
npm.cmd run dev
```

Abra o endereço informado pelo Vite, normalmente [http://localhost:5173](http://localhost:5173). Em outros terminais, `npm` pode ser usado no lugar de `npm.cmd`.

## Validações

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test
npm.cmd run validate:content
npm.cmd run build
npm.cmd exec -- playwright install chromium
npm.cmd run test:e2e
```

O build normal usa a raiz `/` e gera os arquivos estáticos em `dist/`. Esse diretório é temporário e não é versionado.

## Build para subdiretório

O Vite lê `VITE_BASE_PATH`. Sem essa variável, desenvolvimento, build e testes continuam usando `/`. Para simular um site de projeto do GitHub Pages:

```powershell
$env:VITE_BASE_PATH = '/n9-jornada-digital/'
npm.cmd run build
npm.cmd run preview
```

Ao terminar:

```powershell
Remove-Item Env:VITE_BASE_PATH
```

O nome acima é apenas um exemplo local. O workflow manual calcula o caminho a partir do nome real do futuro repositório, sem fixar conta ou repositório no código.

## Armazenamento e privacidade

As chaves versionadas do jogo armazenam somente dados locais, incluindo:

- perfil por apelido;
- progresso de exploração e puzzles;
- último relatório de missão;
- ranking online dos 15 melhores resultados por curso.

Não são solicitados nome completo, RA, e-mail, CPF ou telefone. Não há autenticação, telemetria, sincronização entre dispositivos ou envio de resultados. Limpar os dados do site no navegador remove os dados locais.

## Organização

- `src/domain/`: regras de seleção, elegibilidade, pontuação e progresso;
- `src/app/`: sessão e comandos da aplicação;
- `src/infrastructure/`: validação dos catálogos e persistência local;
- `src/content/`: coleções provisórias em JSON;
- `src/game/`: mapa e renderização Phaser 3;
- `docs/piloto/`: roteiro de aplicação e formulário de feedback do teste controlado;
- `src/ui/` e `src/styles/`: interface semântica e responsiva;
- `tests/`: unidade, contratos, integração DOM e navegador;
- `docs/`: arquitetura, autoria, auditorias e guias do projeto.

A origem pedagógica histórica pode aparecer em identificadores e documentação técnica interna, como a coleção `enade-2026`, mas não compõe o nome público nem a finalidade apresentada ao jogador.

## Preparação para publicação

O projeto está preparado para uma futura publicação manual e gratuita no GitHub Pages, mas nenhum remote, repositório público ou site foi criado nesta etapa. Consulte [docs/preparacao-publicacao.md](docs/preparacao-publicacao.md) antes de qualquer exposição pública.

O guia registra os alertas de conteúdo provisório, segurança, privacidade, operação do workflow manual, atualização, despublicação e reversão.
