---
doc_id: "coinjoin.round-details"
title: "Rondas de CoinJoin e elegibilidade das entradas"
description: "Compreenda as fases do CoinJoin no Ginger, a elegibilidade das entradas e as novas tentativas quando as verificações comuns de início, pausa e espera não explicarem o resultado."
lang: "pt-PT"
verified_release: "v2.0.26"
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
| Ronda de responsabilização, quando necessária | Uma nova tentativa exclui os participantes que não concluíram as etapas exigidas. |
| Transmissão | A transação concluída é enviada aos nós Bitcoin e aguarda confirmação. |

O programa gere essas fases; não precisa trocar chaves nem se coordenar manualmente com desconhecidos. A ronda e a seleção de moedas determinam o número de entradas aceites e de saídas resultantes. Não há um número fixo de entradas ou saídas que deva esperar para todas as carteiras, e o saldo total de uma carteira não garante que ele possa participar por inteiro de uma única ronda.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="moedas-privadas-e-outra-carteira-de-destino" aria-hidden="true"></span>

## Moedas privadas e outra carteira de destino

O início normal do CoinJoin na v2.0.26 recusa uma carteira ou um conjunto de candidatas disponíveis cujas moedas já tenham atingido a meta de privacidade. Selecionar outra carteira de destino não força uma ronda composta apenas por moedas privadas. Confira [as definições da carteira de destino](/pt-pt/coinjoin/settings/) antes de depender de uma rotina de encaminhamento.

Para os cálculos de pontuação e a conciliação completa dos valores, consulte [taxas e progresso da privacidade](/pt-pt/using-ginger/annonset/).
