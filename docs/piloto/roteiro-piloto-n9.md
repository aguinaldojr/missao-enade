# Roteiro do piloto — N9 Jornada Digital

Versão: 1.0 — 18/11/2026.

## 1. Objetivo e limites

O piloto verifica se o jogo é compreensível, agradável, tecnicamente estável e adequado ao nível dos estudantes. Ele também procura questões ambíguas, excessivamente longas, fáceis ou difíceis e explicações pouco úteis.

O piloto é exploratório. Não mede desempenho da turma, não substitui avaliação acadêmica e não demonstra eficácia pedagógica. Os conteúdos permanecem experimentais sob governança editorial assistida por IA.

## 2. Privacidade

- Não coletar nome completo, RA, e-mail, CPF, telefone ou login institucional.
- Identificar participantes somente por código, por exemplo `SI-P03`.
- Informar que perfil, progresso e ranking ficam apenas no navegador utilizado.
- Não fotografar a pessoa nem gravar tela, voz ou imagem sem consentimento específico.
- Respostas do formulário devem ser armazenadas pelo responsável pelo piloto fora do jogo, conforme as regras institucionais aplicáveis.
- O participante pode interromper a atividade sem prejuízo.

## 3. Amostra mínima sugerida

O mínimo operacional é uma execução de cada roteiro-base, distribuída entre participantes. Ninguém precisa realizar todas as partidas.

| Curso | Roteiros-base | Sessões mínimas | Exposição total |
|---|---:|---:|---:|
| CC | A, B e C | 3 | 75 questões |
| SI | A, B, C e D | 4 | 100 questões |
| TADS | A, B e C | 3 | 75 questões |
| TGTI | A, B e C | 3 | 75 questões |
| TRC | A, B e C | 3 | 75 questões |
| **Total** | **16 roteiros** | **16 sessões** | **400 apresentações** |

Se houver disponibilidade, usar dois participantes por roteiro, totalizando 32 sessões. Priorizar diversidade de experiência acadêmica e dispositivos, não apenas estudantes com maior familiaridade técnica.

## 4. Preparação técnica

Na pasta que contém `package.json`, executar:

```powershell
Set-Location 'C:\Users\AulaU9\Documents\Projetos\missao-enade'
npm.cmd ci
npm.cmd run dev
```

Abrir o endereço mostrado pelo Vite, normalmente `http://localhost:5173`. Antes da primeira sessão do dia, verificar:

- página inicial e criação de apelido;
- seleção dos cinco cursos;
- indicação de 25 desafios;
- movimentação no mapa;
- computador, Lia, terminal e porta;
- uma questão com código ou tabela;
- um puzzle por teclado e toque;
- resultado e ranking online por curso;
- ausência de erros no console.

Não é necessário limpar todo o LocalStorage entre participantes. A troca de jogador preserva rankings separados. O contador de roteiros é compartilhado pelo navegador e curso, de modo que conclusões sucessivas avançam A, B, C e, em SI, D.

### Reinício controlado dos roteiros

Somente no computador de teste e quando for necessário reiniciar a distribuição, remover pelas ferramentas do navegador estas duas chaves:

- `n9:mission-route-progress:v1`;
- `n9:mission-recent-questions:v1`.

Não usar “limpar todos os dados” se for necessário preservar perfis, ranking, puzzles ou resultados. Registrar qualquer reinício na ficha da sessão.

## 5. Identificação da partida e do desafio

Começando com o contador zerado, cada conclusão avança para o roteiro seguinte do mesmo curso. Uma partida interrompida não avança o contador.

| Número concluído no curso | CC/TADS/TGTI/TRC | SI |
|---:|---|---|
| 1 | Roteiro A | Roteiro A |
| 2 | Roteiro B | Roteiro B |
| 3 | Roteiro C | Roteiro C |
| 4 | Sorteio balanceado | Roteiro D |
| 5 em diante | Sorteio balanceado | Sorteio balanceado |

Nos roteiros-base, a posição do desafio corresponde à ordem do curso em `src/content/mission-routes.json`: posições 1–5 são comuns e 6–25 são técnicas. Para registrar um problema, anotar curso, roteiro, número do desafio e cinco a oito palavras iniciais do enunciado. Isso permite localizar o ID sem mostrá-lo na interface.

## 6. Condução de uma sessão

Tempo estimado: 35 a 50 minutos.

1. Apresentar o objetivo do teste e as regras de privacidade — 3 minutos.
2. Criar ou selecionar um apelido fictício — 1 minuto.
3. Escolher o curso e explorar a Base N9 sem instrução detalhada — até 5 minutos.
4. Completar uma jornada de 25 desafios — 20 a 35 minutos.
5. Interagir com pelo menos um puzzle elegível — até 5 minutos.
6. Abrir o relatório e o ranking online — 2 minutos.
7. Preencher o formulário de feedback — 5 minutos.

O facilitador deve observar sem ensinar a resposta. Pode ajudar em problemas de navegação, registrando a ajuda prestada. Se uma questão causar desconforto, ambiguidade séria ou bloqueio técnico, o participante pode avançar escolhendo qualquer alternativa; o ocorrido deve ser anotado.

## 7. Dispositivos e acessibilidade

Distribuir as sessões, quando possível, entre:

- computador com mouse;
- computador usando apenas teclado;
- celular em orientação vertical;
- zoom de 200%;
- pessoa que utilize tecnologia assistiva, mediante participação voluntária e suporte adequado.

Verificar foco visível, ordem de navegação, leitura dos códigos e tabelas, tamanho das áreas de toque, rolagem, ausência de dependência exclusiva de cor e compreensão das mensagens. A homologação com NVDA e VoiceOver exige avaliação humana e deve ser registrada separadamente.

## 8. Puzzles a cobrir

CC, TADS, TGTI e TRC possuem o puzzle comum e um específico. SI possui o comum e três específicos. Distribuir os puzzles entre participantes para que cada ID seja utilizado pelo menos uma vez; não exigir que uma mesma pessoa conclua todos.

Observar descoberta da interação, reorganização por mouse/toque/teclado, utilidade das dicas, clareza do erro, compreensão da solução e replay sem recompensa duplicada.

## 9. Classificação de problemas

| Gravidade | Critério | Ação antes de ampliar o piloto |
|---|---|---|
| Bloqueador | Impede iniciar, concluir, salvar ou continuar a sessão | Corrigir e repetir o fluxo afetado |
| Alta | Gabarito indefensável, ambiguidade grave, perda de progresso ou barreira de acessibilidade | Suspender o item ou fluxo e corrigir |
| Média | Texto confuso, dificuldade inadequada, layout ruim ou feedback pouco útil | Corrigir antes da próxima rodada ampla |
| Baixa | Ajuste de redação, alinhamento ou acabamento sem prejuízo à tarefa | Registrar para refinamento |

## 10. Critérios de decisão

O piloto pode avançar para uma segunda rodada quando:

- não houver defeito bloqueador aberto;
- nenhum gabarito contestado permanecer sem análise;
- pelo menos 80% das sessões forem concluídas sem ajuda técnica crítica;
- pelo menos 70% dos participantes avaliarem clareza e interesse com nota 4 ou 5;
- a mediana de duração ficar entre 25 e 50 minutos;
- não houver barreira recorrente de teclado, toque, zoom ou leitura;
- problemas altos tiverem correção ou retirada controlada do item.

Esses valores são critérios iniciais de decisão, não resultados já demonstrados.

## 11. Encerramento

Consolidar os formulários sem nomes, agrupar achados por curso, roteiro, desafio e gravidade e separar:

- defeitos técnicos;
- problemas de interface;
- problemas editoriais;
- dificuldade e duração;
- acessibilidade;
- sugestões fora do escopo.

Somente depois da consolidação devem ser autorizadas correções. Não alterar gabaritos ou promover conteúdo para `ready-for-release` apenas com base em uma observação isolada.
