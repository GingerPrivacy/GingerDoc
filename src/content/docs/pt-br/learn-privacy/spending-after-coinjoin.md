---
doc_id: "learn-privacy.spending-after-coinjoin"
title: "Gastar após CoinJoin: exemplos práticos"
description: "Use exemplos práticos de pagamentos Bitcoin para entender a seleção de moedas, o troco, a consolidação e o que pode ficar visível após CoinJoin."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nível de leitura: guia avançado. Primeiro, entenda o uso de endereços novos para receber e a conferência de pagamentos comuns.

O CoinJoin altera a incerteza sobre os vínculos entre entradas e saídas. A transação seguinte pode acrescentar novas informações. Antes de pagar, decida quais moedas o destinatário ou outro observador já poderia associar a você e o que o pagamento proposto revelaria.

Os exemplos abaixo usam valores fictícios em satoshis. As taxas foram escolhidas para facilitar os cálculos, e não obtidas da rede. Uma moeda é uma saída de transação não gasta, ou UTXO; ela não é o mesmo que uma carteira ou um endereço Bitcoin.

<span id="start-with-the-payment-you-need-to-make" data-ginger-heading="comece-pelo-pagamento-que-você-precisa-fazer" aria-hidden="true"></span>

## Comece pelo pagamento que você precisa fazer

No Ginger, abra **Wallet Coins** para examinar os valores, as etiquetas e as informações de privacidade. Para um pagamento comum, **Send** → **Manual Control** permite escolher moedas candidatas. Selecionar candidatas não substitui a conferência da transação final: examine as entradas realmente usadas, o valor enviado, o troco e a taxa antes de **Confirm**.

A seleção automática e as sugestões do Ginger também podem ajudar. O controle manual é útil quando você sabe algo sobre os fundos que a carteira não pode saber, como qual cliente já reconhece um recebimento. Ele não é, por si só, a melhor escolha para todos os pagamentos.

<span id="example-1-one-coin-covers-a-purchase" data-ginger-heading="exemplo-1-uma-moeda-cobre-uma-compra" aria-hidden="true"></span>

## Exemplo 1: uma moeda cobre uma compra

Alex tem uma moeda de 120,000 satoshis resultante de CoinJoin e quer pagar 70,000 satoshis. Suponha que a taxa seja de 1,000 satoshis.

| Parte da transação | Valor |
| --- | --- |
| Entrada gasta | 120,000 sats |
| O comerciante recebe | 70,000 sats |
| O troco retorna para Alex | 49,000 sats |
| Taxa de mineração | 1,000 sats |

O comerciante conhece seu endereço de pagamento e o valor. Ele pode examinar a transação e deduzir que a outra saída é o troco de Alex. O comerciante não descobre o saldo inteiro da carteira de Alex apenas com essa transação, mas pode ver a entrada e acompanhar os gastos posteriores do provável troco.

Alex não precisa mover esse troco de volta manualmente: ele já pertence à carteira. O ponto útil de conferência é o próximo pagamento que usar esse troco.

<span id="example-2-two-unrelated-receipts-are-combined" data-ginger-heading="exemplo-2-dois-recebimentos-sem-relação-são-combinados" aria-hidden="true"></span>

## Exemplo 2: dois recebimentos sem relação são combinados

Blair tem uma moeda de 90,000 satoshis associada a um trabalho freelancer e uma moeda de 80,000 satoshis associada a um endereço público de doações. Um pagamento de 150,000 satoshis com uma taxa de 2,000 satoshis exige mais do que qualquer uma dessas moedas sozinha; usar ambas devolve 18,000 satoshis de troco.

Um gasto conjunto comum pode sugerir que ambas as entradas têm o mesmo proprietário. Alguém que já reconhece a moeda das doações pode obter uma nova pista sobre a moeda do trabalho freelancer. Essa é uma inferência baseada na transação e em outros conhecimentos, não uma prova automática da identidade de uma pessoa.

Se Blair tiver outra moeda suficiente já associada à mesma atividade, ela pode divulgar menos informações novas. Se a única maneira prática de fazer o pagamento necessário usar ambas as entradas, a escolha envolve custo e privacidade. Não pague uma cobrança com valor menor nem trate “nunca combine moedas” como uma regra absoluta.

O CoinJoin e o PayJoin envolvem colaboração, portanto a suposição de que todas as entradas têm um único proprietário não é válida em todos os casos. Mantenha essa distinção ao interpretar uma transação.

<span id="example-3-change-carries-a-connection-forward" data-ginger-heading="exemplo-3-o-troco-leva-um-vínculo-adiante" aria-hidden="true"></span>

## Exemplo 3: o troco leva um vínculo adiante

Mais tarde, Alex combina o troco de 49,000 satoshis do Exemplo 1 com uma moeda de 60,000 satoshis sem relação com ele para pagar 100,000 satoshis. Com uma taxa presumida de 1,000 satoshis, 8,000 satoshis retornam como novo troco.

O primeiro comerciante pode observar que a provável saída de troco foi gasta com a entrada de 60,000 satoshis. Mesmo que o endereço do novo destinatário seja novo, a associação entre as entradas permanece. Um endereço de saída novo não desfaz a escolha de gastar ambas as entradas juntas.

Use etiquetas para preservar o contexto das decisões futuras. As etiquetas são notas locais; elas não publicam um nome na blockchain nem impedem que um observador faça inferências.

<span id="example-4-moving-the-entire-balance-to-hardware" data-ginger-heading="exemplo-4-mover-o-saldo-inteiro-para-hardware" aria-hidden="true"></span>

## Exemplo 4: mover o saldo inteiro para hardware

Casey tem quatro moedas de 200,000 satoshis cada. Enviar todas as quatro para um único endereço de recebimento de uma carteira de hardware gasta 800,000 satoshis de entradas em uma transação. Com uma taxa presumida de 2,000 satoshis, a carteira de hardware recebe 798,000 satoshis.

A carteira de hardware melhora o isolamento das chaves, mas a transferência expõe um gasto conjunto das quatro entradas. Transferências separadas poderiam evitar essa associação específica, acrescentando taxas e outros padrões observáveis de horários e valores. Receber saídas diretamente em uma carteira de hardware durante um CoinJoin elegível pode evitar uma transferência posterior, mas exige verificações de elegibilidade e destino específicas da versão; não é uma maneira geral de remixar moedas mantidas em hardware.

Não gaste um saldo inteiro apenas porque a lista de moedas parece desorganizada. A consolidação pode reduzir o número de entradas futuras, mas uma taxa baixa por unidade de tamanho só altera o custo; ela não elimina a divulgação de informações.

<span id="other-participants-and-future-observations-matter" data-ginger-heading="outros-participantes-e-observações-futuras-importam" aria-hidden="true"></span>

## Outros participantes e observações futuras importam

Seu próprio comportamento não é a única influência. As transações posteriores de outros participantes podem reduzir as possibilidades consideradas por um observador. Pesquisas sobre a consolidação após CoinJoin estudam esse efeito, reconhecendo os limites para transformar essas observações em identificação utilizável. As medições não representam a probabilidade de um usuário específico ser rastreado. [Gavenda e colegas, 2025](https://arxiv.org/html/2510.17284v1)

Não há um número universal de rodadas nem um período de espera que garanta privacidade. Esperar não apaga informações já divulgadas a um comerciante identificado, uma corretora ou outro serviço de carteira.

<span id="a-short-review-before-confirming" data-ginger-heading="uma-conferência-rápida-antes-de-confirmar" aria-hidden="true"></span>

## Uma conferência rápida antes de confirmar

1. Confirme o destinatário e o valor exigido por um canal confiável.
2. Examine as entradas finais e pergunte quem já sabe sobre cada uma delas.
3. Confira se a seleção combina atividades que você pretendia manter separadas.
4. Examine o troco e lembre-se de seu vínculo ao gastá-lo mais tarde.
5. Aceite apenas uma combinação de taxa e privacidade adequada ao pagamento; confira o histórico antes de repetir um pagamento após um resultado incerto.

Para as escolhas relacionadas à carteira e ao navegador, continue com [hábitos de privacidade](/pt-br/using-ginger/address-reuse/) e [para onde vão as informações da carteira](/pt-br/learn-privacy/information-sharing/).
