---
doc_id: "coinjoin.round-details"
title: "Rondas de CoinJoin e elegibilidade das entradas"
description: "Compreenda as fases do CoinJoin no Ginger, a elegibilidade das entradas e as novas tentativas quando as verificações comuns de início, pausa e espera não explicarem o resultado."
lang: "pt-PT"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Primeiro, compreenda os controlos comuns de início e pausa e o facto de que rondas concluídas têm taxas.

Comece pelo [guia comum de CoinJoin](/pt-pt/using-ginger/coinjoin/). O Ginger gere o protocolo automaticamente; esta referência serve para compreender um estado ou uma limitação específicos.

<span id="why-a-balance-may-not-be-eligible" data-ginger-heading="porque-é-que-um-saldo-pode-não-ser-elegível" aria-hidden="true"></span>

## Porque é que um saldo pode não ser elegível

Não há um tempo de espera fixo nem um saldo mínimo universal que garanta a participação. A elegibilidade depende dos parâmetros da ronda, dos valores das moedas, do estado de confirmação, das taxas, das exclusões e das definições da carteira. Um saldo pode ser maior do que o valor mínimo de entrada e ainda assim não conter nenhuma moeda elegível cuja participação seja economicamente viável.

<span id="what-happens-during-a-round" data-ginger-heading="o-que-acontece-durante-uma-ronda" aria-hidden="true"></span>

## O que acontece durante uma ronda

| Fase | O que a sua carteira aguarda |
| --- | --- |
| Registo de entradas | Moedas elegíveis são propostas para a transação partilhada. |
| Confirmação de ligação | Os participantes registados confirmam que continuam disponíveis. |
| Registo de saídas | Os participantes organizam, por meio do protocolo, as saídas que devem receber. |
| Assinatura | As carteiras conferem a proposta e assinam suas próprias entradas. Mantenha o Ginger disponível durante essa fase crítica. |
| Ronda de responsabilização, quando necessária | Uma nova tentativa usa participantes elegíveis da transação anterior e aplica verificações adicionais de consistência. |
| Transmissão | A transação concluída é enviada aos nós Bitcoin e aguarda confirmação. |

O programa gere essas fases; não precisa trocar chaves nem se coordenar manualmente com desconhecidos. A ronda e a seleção de moedas determinam o número de entradas aceites e de saídas resultantes. Não há um número fixo de entradas ou saídas que deva esperar para todas as carteiras, e o saldo total de uma carteira não garante que ele possa participar por inteiro de uma única ronda.

<span id="why-signing-can-stop-a-round" data-ginger-heading="porque-é-que-a-assinatura-pode-interromper-uma-ronda" aria-hidden="true"></span>

## Porque é que a assinatura pode interromper uma ronda

Antes de concluir a assinatura, o Ginger verifica a transação efetivamente proposta, incluindo se:

- Todas as entradas que esta carteira registou continuam presentes, sem duplicação de nenhuma delas.
- A transação contém entradas suficientes e, a menos que a configuração permita CoinJoin solo, inclui entradas além das registadas por esta carteira.
- A taxa de mineração por byte virtual efetiva está suficientemente próxima da anunciada para a ronda, considerando diferenças de estimativa.
- As saídas prometidas à carteira estão presentes com valores pelo menos iguais aos esperados.

As definições de participantes ou taxas de uma ronda oferecida não substituem essas verificações da própria transação. Em particular, uma taxa por byte virtual muito abaixo da anunciada pode falhar nas verificações de assinatura mesmo que o valor descontado da carteira parecesse aceitável. A contagem de entradas é uma contagem de moedas, não uma prova de pessoas independentes; consulte [confiança e limites do CoinJoin](/pt-pt/learn-coinjoin/trust-and-limits/).

Se essas verificações falharem, o Ginger não conclui todas as assinaturas das suas entradas. Quando algumas entradas registadas pela carteira continuam na proposta, ele retém a assinatura de uma dessas entradas presentes. Isso importa porque reter a assinatura de uma entrada omitida não impediria a transação proposta. Se nenhuma entrada da carteira permanecer, ele não envia assinaturas. Uma proposta com uma entrada registada pela carteira duplicada é rejeitada de imediato.

Assim, uma ronda pode chegar à fase de assinatura e ainda falhar ou ser tentada novamente. Mantenha o Ginger disponível até sair da fase crítica e inspecione o estado resultante antes de tentar outra ação com essas moedas. Não altere limites que desconhece apenas para fazer uma ronda rejeitada continuar.

<span id="checks-on-blame-rounds" data-ginger-heading="verificações-das-rondas-de-responsabilização" aria-hidden="true"></span>

## Verificações das rondas de responsabilização

Quando uma ronda é interrompida, o Ginger leva adiante apenas suas moedas para as quais foram enviadas assinaturas. Uma ronda de responsabilização deve usar entradas da transação anterior e manter o mesmo valor máximo sugerido para as entradas. O Ginger verifica essa relação antes de registar saídas, além de verificar a fase da ronda de responsabilização, a contagem mínima de entradas e os limites de taxas.

Essas verificações limitam o que pode mudar numa nova tentativa. Elas não garantem que uma ronda de responsabilização será concluída, não estabelecem quem controla as outras entradas nem transformam uma ronda malsucedida em prova de um ataque.

<span id="inspect-a-completed-round" data-ginger-heading="inspecione-uma-ronda-concluída" aria-hidden="true"></span>

## Inspecione uma ronda concluída

Expanda uma entrada agrupada de CoinJoin no histórico e abra os detalhes de uma ronda individual. Escolha **View transaction** para inspecionar suas entradas e saídas no visualizador de transações redimensionável. Ele mostra propriedade, etiquetas e pontuações de anonimato conhecidas quando disponíveis; valores desconhecidos não estabelecem quem possui as moedas de outro participante. Consulte [o guia do visualizador de transações](/pt-pt/payments/coin-control-history/#inspect-inputs-and-outputs) para os detalhes disponíveis e as ações de cópia.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="moedas-privadas-e-outra-carteira-de-destino" aria-hidden="true"></span>

## Moedas privadas e outra carteira de destino

O início normal do CoinJoin recusa uma carteira ou um conjunto de candidatas disponíveis cujas moedas já tenham atingido a meta de privacidade. Selecionar outra carteira de destino não força uma ronda composta apenas por moedas privadas. Confira [as definições da carteira de destino](/pt-pt/coinjoin/settings/) antes de depender de uma rotina de encaminhamento.

Para os cálculos de pontuação e a conciliação completa dos valores, consulte [taxas e progresso da privacidade](/pt-pt/using-ginger/annonset/).
