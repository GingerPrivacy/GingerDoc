---
doc_id: "coinjoin.round-details"
title: "Rodadas de CoinJoin e elegibilidade das entradas"
description: "Entenda as fases do CoinJoin no Ginger, a elegibilidade das entradas e as novas tentativas quando as verificações comuns de início, pausa e espera não explicarem o resultado."
lang: "pt-BR"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Primeiro, entenda os controles comuns de início e pausa e o fato de que rodadas concluídas têm taxas.

Comece pelo [guia comum de CoinJoin](/pt-br/using-ginger/coinjoin/). O Ginger gerencia o protocolo automaticamente; esta referência serve para entender um estado ou uma limitação específicos.

<span id="why-a-balance-may-not-be-eligible" data-ginger-heading="por-que-um-saldo-pode-não-ser-elegível" aria-hidden="true"></span>

## Por que um saldo pode não ser elegível

Não há um tempo de espera fixo nem um saldo mínimo universal que garanta a participação. A elegibilidade depende dos parâmetros da rodada, dos valores das moedas, do estado de confirmação, das taxas, das exclusões e das configurações da carteira. Um saldo pode ser maior do que o valor mínimo de entrada e ainda assim não conter nenhuma moeda elegível cuja participação seja economicamente viável.

<span id="what-happens-during-a-round" data-ginger-heading="o-que-acontece-durante-uma-rodada" aria-hidden="true"></span>

## O que acontece durante uma rodada

| Fase | O que sua carteira está esperando |
| --- | --- |
| Registro de entradas | Moedas elegíveis são propostas para a transação compartilhada. |
| Confirmação de conexão | Os participantes registrados confirmam que continuam disponíveis. |
| Registro de saídas | Os participantes organizam, por meio do protocolo, as saídas que devem receber. |
| Assinatura | As carteiras conferem a proposta e assinam suas próprias entradas. Mantenha o Ginger disponível durante essa fase crítica. |
| Rodada de responsabilização, quando necessária | Uma nova tentativa usa participantes elegíveis da transação anterior e aplica verificações adicionais de consistência. |
| Transmissão | A transação concluída é enviada aos nós Bitcoin e aguarda confirmação. |

O aplicativo gerencia essas fases; você não precisa trocar chaves nem se coordenar manualmente com desconhecidos. A rodada e a seleção de moedas determinam o número de entradas aceitas e de saídas resultantes. Não há um número fixo de entradas ou saídas que você deva esperar para todas as carteiras, e o saldo total de uma carteira não garante que ele possa participar por inteiro de uma única rodada.

<span id="why-signing-can-stop-a-round" data-ginger-heading="por-que-a-assinatura-pode-interromper-uma-rodada" aria-hidden="true"></span>

## Por que a assinatura pode interromper uma rodada

Antes de concluir a assinatura, o Ginger verifica a transação efetivamente proposta, incluindo se:

- Todas as entradas que esta carteira registrou continuam presentes, sem duplicação de nenhuma delas.
- A transação contém entradas suficientes e, a menos que a configuração permita CoinJoin solo, inclui entradas além das registradas por esta carteira.
- A taxa de mineração por byte virtual efetiva está suficientemente próxima da anunciada para a rodada, considerando diferenças de estimativa.
- As saídas prometidas à carteira estão presentes com valores pelo menos iguais aos esperados.

As configurações de participantes ou taxas de uma rodada oferecida não substituem essas verificações da própria transação. Em particular, uma taxa por byte virtual muito abaixo da anunciada pode falhar nas verificações de assinatura mesmo que o valor descontado da carteira parecesse aceitável. A contagem de entradas é uma contagem de moedas, não uma prova de pessoas independentes; consulte [confiança e limites do CoinJoin](/pt-br/learn-coinjoin/trust-and-limits/).

Se essas verificações falharem, o Ginger não conclui todas as assinaturas das suas entradas. Quando algumas entradas registradas pela carteira continuam na proposta, ele retém a assinatura de uma dessas entradas presentes. Isso importa porque reter a assinatura de uma entrada omitida não impediria a transação proposta. Se nenhuma entrada da carteira permanecer, ele não envia assinaturas. Uma proposta com uma entrada registrada pela carteira duplicada é rejeitada de imediato.

Assim, uma rodada pode chegar à fase de assinatura e ainda falhar ou ser tentada novamente. Mantenha o Ginger disponível até sair da fase crítica e inspecione o estado resultante antes de tentar outra ação com essas moedas. Não altere limites que desconhece apenas para fazer uma rodada rejeitada continuar.

<span id="checks-on-blame-rounds" data-ginger-heading="verificações-das-rodadas-de-responsabilização" aria-hidden="true"></span>

## Verificações das rodadas de responsabilização

Quando uma rodada é interrompida, o Ginger leva adiante apenas suas moedas para as quais foram enviadas assinaturas. Uma rodada de responsabilização deve usar entradas da transação anterior e manter o mesmo valor máximo sugerido para as entradas. O Ginger verifica essa relação antes de registrar saídas, além de verificar a fase da rodada de responsabilização, a contagem mínima de entradas e os limites de taxas.

Essas verificações limitam o que pode mudar em uma nova tentativa. Elas não garantem que uma rodada de responsabilização será concluída, não estabelecem quem controla as outras entradas nem transformam uma rodada malsucedida em prova de um ataque.

<span id="inspect-a-completed-round" data-ginger-heading="inspecione-uma-rodada-concluída" aria-hidden="true"></span>

## Inspecione uma rodada concluída

Expanda uma entrada agrupada de CoinJoin no histórico e abra os detalhes de uma rodada individual. Escolha **View transaction** para inspecionar suas entradas e saídas no visualizador de transações redimensionável. Ele mostra propriedade, rótulos e pontuações de anonimato conhecidas quando disponíveis; valores desconhecidos não estabelecem quem possui as moedas de outro participante. Consulte [o guia do visualizador de transações](/pt-br/payments/coin-control-history/#inspect-inputs-and-outputs) para os detalhes disponíveis e as ações de cópia.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="moedas-privadas-e-outra-carteira-de-destino" aria-hidden="true"></span>

## Moedas privadas e outra carteira de destino

O início normal do CoinJoin recusa uma carteira ou um conjunto de candidatas disponíveis cujas moedas já tenham atingido a meta de privacidade. Selecionar outra carteira de destino não força uma rodada composta apenas por moedas privadas. Confira [as configurações da carteira de destino](/pt-br/coinjoin/settings/) antes de depender de uma rotina de encaminhamento.

Para os cálculos de pontuação e a conciliação completa dos valores, consulte [taxas e progresso da privacidade](/pt-br/using-ginger/annonset/).
