# Prompt para o Gemini — conceito visual N9 v1

Crie somente a primeira prancha conceitual de personagens, cenários e selos do **N9 Jornada Digital**. Esta etapa define a direção artística; não produz ainda sprites finais para integração.

## Referências obrigatórias

Leia integralmente:

- `matriz-conceito-visual-n9-v1.md`;
- `guia-visual-n9.md`;
- `implementacao-visual-fase-1.md`;
- `CharacterRenderer.ts`;
- `visual.ts`;
- `LearningLab.ts`;
- `learning-lab.css`;
- `engajamento-v1.json`;
- `n9-tutorial-selos-v1.json`.

Use os arquivos somente como referência. Não altere código, textos, atividades ou regras.

## Objetivo artístico

Criar uma identidade 2D original para um campus-laboratório tecnológico brasileiro, moderno, divertido e universitário. A aparência deve ser acolhedora e energética, sem infantilização, sexualização ou semelhança deliberada com personagens de outros aplicativos educacionais.

## Regras gerais

- Arte 2D vetorial ou vetorial simulada, com formas limpas, contornos controlados e sombreamento suave.
- Proporções estilizadas, mas claramente adultas e universitárias.
- Boa leitura em telas pequenas.
- Silhuetas diferentes e reconhecíveis.
- Não usar logotipo, brasão, slogan, campi ou identidade oficial da UNINOVE.
- Não afirmar produto institucional oficial.
- Não usar a palavra `ENADE`.
- Não incorporar textos, letras, números, marcas ou placas legíveis nas imagens.
- Não copiar estilo, personagens, mascotes, poses ou cenários de Duolingo ou de qualquer outra marca.
- Não usar imagens, fotografias ou elementos de terceiros.
- Evitar estética infantil, chibi, anime escolar, fantasia medieval, cyberpunk sombrio ou militarização.
- Imagens devem continuar compreensíveis sem depender exclusivamente de cor.
- Cenários não podem competir visualmente com os cartões de atividades.

## Paleta principal

- fundo tecnológico: `#071F2B`;
- superfícies escuras: `#102D38` e `#1B4650`;
- verde N9: `#087A68` e `#26C99A`;
- ciano: `#55D6E4`;
- violeta da Lia: `#6756BC`;
- âmbar: `#F3BD56`;
- creme: `#FFF7DF`;
- branco: `#FFFFFF`.

Tons de pele, cabelo e materiais podem usar cores naturais fora dessa paleta.

## Personagem 1 — Lia

Lia é a guia tecnológica do N9.

- jovem mulher brasileira morena;
- adulta jovem, com aparência universitária;
- pele castanha em tom médio e quente;
- referência de pele: base `#B96F4B`, luz `#D88A68`, sombra `#8E4936`;
- cabelo escuro, cacheado, com silhueta reconhecível;
- apresentação claramente feminina;
- expressão acolhedora, inteligente e confiante;
- jaqueta violeta `#6756BC`;
- detalhes tecnológicos em ciano `#55D6E4`;
- camiseta clara e calça azul-marinho;
- óculos tecnológicos discretos opcionais;
- sem salto alto, roupa formal rígida, sexualização ou estereótipos raciais;
- deve parecer a mesma pessoa em todas as poses.

A folha de referência deve mostrar Lia de corpo inteiro em cinco estados, sem texto:

1. neutra;
2. orientação/apontando;
3. incentivo;
4. reflexão;
5. comemoração.

## Personagem 2 — estudante

- representa o jogador;
- adulto jovem universitário;
- apresentação inclusiva e relativamente neutra, preparada para personalização futura;
- visual diferente de Lia;
- mochila discreta;
- roupas modernas em verde N9, azul-marinho e creme;
- cinco estados: neutro, atenção, escolha, dúvida e comemoração;
- não definir curso, gênero, desempenho ou condição social pela aparência.

## Personagem 3 — robô-companheiro

- mascote tecnológico original do N9;
- pequeno e flutuante;
- aparência amigável, porém não infantil;
- corpo geométrico simples, adequado a SVG e animação CSS;
- cores verde N9, ciano, azul escuro e pequeno detalhe âmbar;
- sem rosto ou silhueta semelhante a mascotes conhecidos;
- cinco estados: normal, alerta, XP, sequência e conquista;
- não inserir letras ou números em sua carcaça.

## Cenários

### Base N9 — visão superior

- visão ortográfica superior, não isométrica;
- campus-laboratório com piso modular, paredes, computador, terminal, porta e posição de Lia;
- caminhos e objetos facilmente distinguíveis;
- áreas livres para personagem e controles virtuais;
- sem textos ou placas legíveis;
- aparência compatível com o mapa atual, sem criar novo mapa.

### Laboratório de aprendizagem — desktop

- ambiente universitário tecnológico claro e acolhedor;
- composição horizontal 16:9;
- espaço visual livre no centro/direita para cartões da interface;
- elementos decorativos discretos: painéis, luzes, plantas e equipamentos;
- Lia, estudante e robô não devem ser incorporados ao fundo.

### Laboratório de aprendizagem — celular

- composição vertical 9:16;
- mesma arquitetura e identidade do cenário desktop;
- poucos detalhes nas áreas onde haverá texto e botões;
- continuidade visual, sem apenas recortar a versão horizontal.

## Selos

Crie uma prancha com os oito selos definidos em `n9-tutorial-selos-v1.json`, preservando símbolos, formas e paleta:

- Sequência ativa;
- Caçador de conceitos;
- Mestre da revisão;
- Modo turbo;
- Precisão máxima;
- Pioneiro do dia;
- Destaque diário;
- Destaque da semana.

Cada selo deve aparecer em dois estados: bloqueado e conquistado. Não inserir os nomes dentro da imagem; a interface exibirá texto ao lado.

## Arquivos exigidos

Gere exatamente:

1. `lia-reference.png` — 2048 × 2048, fundo transparente;
2. `student-reference.png` — 2048 × 2048, fundo transparente;
3. `robot-reference.png` — 2048 × 2048, fundo transparente;
4. `base-n9-topdown-concept.png` — 1920 × 1080;
5. `learning-lab-desktop-concept.png` — 1920 × 1080;
6. `learning-lab-mobile-concept.png` — 1080 × 1920;
7. `badges-reference.png` — 2048 × 2048, fundo transparente;
8. `visual-manifest.json`;
9. `relatorio-conceito-visual.md`.

Reúna tudo em `n9-conceito-visual-v1-entrega.zip`.

## Manifesto

O `visual-manifest.json` deve conter:

```json
{
  "schemaVersion": 1,
  "packageId": "N9-VISUAL-CONCEPT-V1",
  "assets": []
}
```

Cada ativo deve conter somente:

- `file`;
- `kind`: `character-sheet`, `background-concept`, `map-concept` ou `badge-sheet`;
- `width`;
- `height`;
- `transparentBackground`;
- `purpose`;
- `accessibleDescription`;
- `integrationState`: sempre `concept-only`.

## Processo de consistência

1. Gere primeiro `lia-reference.png`.
2. Use essa imagem como referência para qualquer aparição posterior de Lia.
3. Gere estudante e robô na mesma linguagem visual.
4. Gere os dois laboratórios como versões do mesmo espaço.
5. Compare todas as imagens antes de entregar e corrija divergências de paleta, proporção e traço.

## Relatório

Registre:

- direção artística adotada;
- consistência dos personagens;
- representação respeitosa de Lia;
- diferenças claras entre Lia e estudante;
- coerência entre cenários horizontal e vertical;
- aplicação da paleta;
- legibilidade em tamanho reduzido;
- ausência de textos e marcas incorporadas;
- acessibilidade e limitações;
- quais ativos ainda exigirão recorte, vetorização, otimização ou criação de sprites;
- declaração de que os ativos são conceitos originais gerados nesta sessão.

Não declare os arquivos prontos para produção. Não gere spritesheets finais, código, SVG, fontes, áudio ou animações nesta etapa. Entregue somente o ZIP acompanhado de um resumo curto.
