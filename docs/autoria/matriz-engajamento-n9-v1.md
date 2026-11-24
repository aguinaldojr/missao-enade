# Matriz de engajamento — N9 v1

Este documento descreve o estado atual e delimita o pacote editorial. Não contém código executável nem autoriza mudanças nas atividades.

## Estado atual

- O modo Aprender apresenta 15 atividades diárias.
- Há nove mecânicas: escolha simples, verdadeiro/falso, seleção múltipla, ordenação, associação, categorização, preenchimento de código, diagrama interativo e diálogo com decisão.
- O catálogo possui 160 atividades rápidas.
- A interface já desenha estudante e acompanhante em SVG embutido.
- Lia fornece mensagens fixas de orientação.
- Sons atuais são sintetizados por Web Audio API: `tap`, `correct`, `wrong` e `complete`.
- Animações atuais: flutuação, respiração, piscar, celebração, salto, progresso e explosão de XP.
- Som pode ser desligado.
- `prefers-reduced-motion` precisa continuar respeitado.
- O pacote editorial não altera pontuação, seleção, persistência, ranking ou respostas.

## Público e tom

Estudantes universitários de CC, SI, TADS, TGTI e TRC, com diferentes níveis de conhecimento e possíveis lacunas de formação. O tom deve acolher sem infantilizar, explicar sem dar sermão e celebrar esforço sem afirmar domínio definitivo.

## Princípios

1. A resposta técnica e sua explicação pertencem à atividade; falas de Lia são motivacionais e contextuais.
2. Erros geram nova tentativa, orientação e ausência de perda de XP.
3. Ajuda é parte legítima da aprendizagem.
4. Celebrações devem ser breves para não interromper o ritmo.
5. Sons e movimentos são opcionais e decorativos.
6. Toda informação importante permanece textual.
7. O jogo possui identidade própria e não deve imitar marcas externas.
8. Textos devem funcionar em telas de 360 × 800 e com zoom elevado.

## Conquistas planejadas

| Conquista | Intenção | Dependência atual |
|---|---|---|
| Sequência ativa | incentivar retorno durante os seis dias | persistência local futura |
| Caçador de conceitos | valorizar abertura das explicações | telemetria local futura |
| Mestre da revisão | valorizar correção de erros anteriores | revisão local futura |
| Modo turbo | celebrar cinco acertos consecutivos | contador local futuro |
| Precisão máxima | reconhecer sessão sem erros | resultado local futuro |
| Pioneiro do dia | primeiro a concluir a missão diária | ranking online futuro |
| Destaque diário | primeiro lugar diário do curso | ranking online futuro |
| Destaque da semana | vencedor geral do curso | ranking online futuro |

O Gemini deve produzir somente textos e especificações. O repositório principal decidirá regras, persistência, disponibilidade e integração.

## Limites de implementação

- Não criar novas mecânicas.
- Não criar personagens adicionais.
- Não alterar as 160 atividades.
- Não criar áudio gravado ou usar voz de pessoas.
- Não usar bibliotecas, APIs ou serviços externos.
- Não criar comunicação de rede.
- Não afirmar que conquistas e bônus já estão ativos.
- Não associar pior desempenho a vergonha, fracasso ou perda pública.
