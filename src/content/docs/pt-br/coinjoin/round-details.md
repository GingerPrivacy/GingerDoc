---
doc_id: "coinjoin.round-details"
title: "Rodadas de CoinJoin e elegibilidade das entradas"
description: "Entenda as fases do CoinJoin no Ginger, a elegibilidade das entradas e as novas tentativas quando as verificações comuns de início, pausa e espera não explicarem o resultado."
lang: "pt-BR"
verified_release: "v2.0.26"
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
| Rodada de responsabilização, quando necessária | Uma nova tentativa exclui os participantes que não concluíram as etapas exigidas. |
| Transmissão | A transação concluída é enviada aos nós Bitcoin e aguarda confirmação. |

O aplicativo gerencia essas fases; você não precisa trocar chaves nem se coordenar manualmente com desconhecidos. A rodada e a seleção de moedas determinam o número de entradas aceitas e de saídas resultantes. Não há um número fixo de entradas ou saídas que você deva esperar para todas as carteiras, e o saldo total de uma carteira não garante que ele possa participar por inteiro de uma única rodada.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="moedas-privadas-e-outra-carteira-de-saída" aria-hidden="true"></span>

## Moedas privadas e outra carteira de saída

O início normal do CoinJoin na v2.0.26 recusa uma carteira ou um conjunto de candidatas disponíveis cujas moedas já tenham atingido a meta de privacidade. Selecionar outra carteira de saída não força uma rodada composta apenas por moedas privadas. Confira [as configurações da carteira de saída](/pt-br/coinjoin/settings/) antes de depender de uma rotina de encaminhamento.

Para os cálculos de pontuação e a conciliação completa dos valores, consulte [taxas e progresso da privacidade](/pt-br/using-ginger/annonset/).
