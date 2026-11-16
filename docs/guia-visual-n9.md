# Guia visual N9 Jornada Digital

## Propósito

A identidade visual do N9 representa um campus-laboratório tecnológico 2D: contemporâneo, acolhedor e lúdico sem aparência infantil. O sistema é provisório e próprio do jogo. Não utiliza logotipo, slogan, brasão, imagens de campi ou cores institucionais não aprovadas, nem apresenta referências visíveis ao ENADE.

## Princípios

1. **Tecnologia com presença humana:** interfaces técnicas são acompanhadas por personagens, espaços e sinais de colaboração.
2. **Visão superior coerente:** ambientação, mapa, objetos e circulação usam a mesma lógica ortogonal.
3. **Informação redundante:** cor nunca atua sozinha; estados combinam texto, símbolo, forma e contraste.
4. **Jogo universitário:** geometria limpa, vocabulário direto, movimento contido e hierarquia madura.
5. **DOM acessível, Canvas contextual:** navegação e informação crítica permanecem semânticas; o Canvas representa o espaço.
6. **Movimento opcional:** animações reforçam ação, mas não são necessárias para compreender ou concluir tarefas.

## Paleta

| Papel | Cor | Uso |
| --- | --- | --- |
| Tinta principal | `#102D38` | texto, botões principais, títulos e contornos |
| Tinta suave | `#1B4650` | superfícies escuras e detalhes do mapa |
| Fundo | `#F4F1E8` | plano geral da aplicação |
| Superfície | `#FFFDF7` | cartões e áreas de leitura |
| Superfície suave | `#EDF5EF` | linhas alternadas e agrupamentos |
| N9 primária | `#087A68` | seleção, percurso e interação |
| N9 forte | `#056052` | texto de destaque sobre fundo claro |
| Menta | `#66DFB6` | conexão, progresso e energia tecnológica |
| Ciano | `#147B8A` | informação e computadores |
| Violeta | `#6756BC` | Lia, terminais e CC |
| Sucesso | `#176B4E` | acerto, conclusão e passagem liberada |
| Atenção | `#8A5314` | revisão editorial, capacidade e avisos |
| Erro | `#963B36` | resposta incorreta, falha e exclusão |
| Foco | `#F2B544` | contorno de foco visível |

Os pares de texto principais atendem WCAG AA. Texto normal usa contraste mínimo de 4,5:1; títulos e elementos grandes não reduzem esse requisito por padrão. Estados em alto contraste respeitam `forced-colors`.

## Famílias de puzzles

| Família | Símbolo | Cor secundária | Nome sempre exibido |
| --- | --- | --- | --- |
| Comum | `◇` | verde N9 | Comum |
| CC | `{ }` | violeta | Ciência da Computação |
| SI | `▦` | ciano | Sistemas de Informação |
| TADS | `</>` | azul | Análise e Desenvolvimento |
| TGTI | `◎` | âmbar | Gestão de TI |
| TRC | `⌁` | magenta | Redes de Computadores |

Símbolo e nome acompanham a cor para que a família permaneça identificável sem percepção cromática.

## Tipografia

- Família: `Inter`, `Segoe UI Variable`, `Segoe UI` e fontes de sistema como fallback local, sem download externo.
- Título principal: peso 600–750, entre 40 e 68 px conforme viewport.
- Título de seção: entre 28 e 46 px.
- Título de desafio: entre 25 e 33 px.
- Corpo: 15–17 px, altura de linha de 1,5 a 1,75.
- Rótulos técnicos: 9–13 px, peso 700, espaçamento moderado entre letras.
- Códigos e símbolos: `Consolas` ou monoespaçada do sistema.

Textos de aprendizagem não usam caixa alta integral, exceto etiquetas curtas. Larguras pequenas não reduzem o corpo abaixo de 15 px.

## Espaçamento, bordas e sombras

- Escala base: 4, 8, 12, 16, 24, 32 e 48 px.
- Raio pequeno: 6 px; cartões: 12 px; painéis principais: 20 px.
- Borda padrão: 1–2 px; seleção e estado crítico: 2–3 px.
- Sombra pequena: separa cartões; sombra média: painéis ativos; sombra ampla: ambientação visual.
- Sombras não são o único indicador de hierarquia ou foco.

## Estados

| Estado | Tratamento |
| --- | --- |
| Foco | contorno âmbar de 3 px com separação escura |
| Hover | borda de destaque, elevação de 1 px e sombra maior |
| Pressionado | deslocamento de 2–3 px e redução da sombra |
| Selecionado | borda verde, fundo verde suave e controle nativo marcado |
| Desabilitado | baixo contraste controlado, cursor e propriedade nativa `disabled` |
| Bloqueado | vermelho com símbolo de bloqueio e texto correspondente |
| Próximo/interativo | contorno âmbar, marcador e instrução textual com tecla E |
| Concluído | verde, símbolo de confirmação e texto de conclusão |
| Erro | vermelho, ícone/texto e superfície vermelha suave |

## Personagens

O estudante e Lia são desenhados em partes independentes: pele, cabelo, roupa, pernas, calçados, mochila e acessórios. Essa separação prepara personalização futura sem alterar hitbox ou estado salvo.

- quatro orientações: cima, baixo, esquerda e direita;
- caminhada em dois quadros alternados por orientação;
- diagonais escolhem a orientação do eixo dominante;
- sombra indica contato com o piso;
- contorno, contraste e escala preservam leitura no celular;
- com movimento reduzido, o quadro alternado é desativado;
- Lia usa roupa violeta, óculos cianos e marcador textual/simbólico de missão.

## Mapa e objetos

- Piso escuro, grade técnica discreta e zonas funcionais translúcidas.
- Paredes possuem corpo e borda superior, preservando exatamente as hitboxes existentes.
- Computador: monitor ciano, tela e base reconhecíveis.
- Terminal: cápsula violeta, núcleo e ligação tecnológica.
- Porta: vermelho e símbolo quando bloqueada; contorno verde e passagem visível quando liberada.
- Objeto próximo: contorno âmbar e marcador, além do texto no painel DOM.
- Elementos decorativos nunca devem parecer interativos sem rótulo ou estado.

## Interface educacional

- Missões usam cabeçalho escuro e barra de progresso semântica.
- Alternativas são cartões inteiros clicáveis, com radio nativo preservado.
- Acerto e erro combinam borda, fundo, texto e marca.
- Resultados usam cartões numéricos e ranking tabular sem remover o conteúdo textual.
- Puzzles usam cartões reordenáveis, alça, botões e tema da família.
- Perfil, curso e missão usam cartões com agrupamentos semânticos.

## Desktop e celular

### Desktop

- largura de referência: 1366 × 900;
- duas colunas apenas quando o conteúdo comporta leitura adequada;
- painel visual pode permanecer fixo ao lado de desafios;
- mapa e painel de missão formam duas colunas a partir de 960 px.

### Celular

- largura de referência: 360 × 800;
- uma coluna, áreas de toque com pelo menos 44 px;
- Canvas mantém proporção e controles aparecem logo abaixo;
- cabeçalho de progresso pode permanecer visível durante questões longas;
- cartões reduzem padding, nunca corpo textual ou semântica;
- tabelas extensas usam região rolável explícita.

### Zoom

Em equivalente a zoom de 200%, o conteúdo reorganiza-se em uma coluna, preserva ações, permite rolagem vertical e não cria rolagem horizontal na página. Regiões tabulares podem manter rolagem própria.

## Movimento e acessibilidade

- `prefers-reduced-motion: reduce` elimina transições perceptíveis e alternância da caminhada.
- `forced-colors` preserva bordas, foco e seleção.
- Canvas do mapa possui rótulo e equivalente textual de posição, proximidade, objetivo e estado da porta.
- Ícones decorativos usam `aria-hidden`; símbolos informativos são acompanhados por texto.
- Todas as ações continuam disponíveis por teclado, mouse e toque.

