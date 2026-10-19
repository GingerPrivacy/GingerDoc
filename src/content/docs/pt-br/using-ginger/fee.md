---
doc_id: "payments.fees-and-change"
title: "Taxas de transação, taxas por byte virtual personalizadas e troco"
description: "Entenda taxas por byte virtual, taxas personalizadas a partir de 0.1 sat/vB, limites de retransmissão, desconto de taxas, saídas de troco e sugestões de privacidade no Ginger."
lang: "pt-BR"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-mining-fee"></span>
<span id="what-does-the-mining-fee-depend-on"></span>
<span id="what-is-coordinator-fee"></span>

> Nível de leitura: guia avançado. Primeiro, entenda a prévia de um envio comum, o valor destinado ao destinatário e a taxa.

Para as etapas de um pagamento comum, comece por [Enviar bitcoin](/pt-br/payments/send/). Esta referência explica os controles de taxa e o troco com mais detalhes; não é necessário escolher uma taxa por byte virtual personalizada para cada pagamento.

<span id="understand-the-fee" data-ginger-heading="entenda-a-taxa" aria-hidden="true"></span>

## Entenda a taxa

A taxa por unidade de tamanho é medida em satoshis por byte virtual e aparece como **Fee Rate (sat/vByte)**. A taxa total de mineração é essa taxa multiplicada pelo tamanho virtual da transação. Ela não é uma porcentagem do valor do pagamento. Gastar várias moedas pequenas pode custar mais do que gastar uma única moeda maior com o mesmo valor total.

Use o controle de taxa da prévia para alterar a preferência de confirmação desejada ou inserir uma **Custom Fee Rate**. O Ginger aceita taxas por byte virtual a partir de **0.1 sat/vB**, e suas estimativas e gráfico de taxas preservam valores fracionários. O prazo estimado não é uma garantia: novas transações disputam espaço e os blocos chegam em intervalos irregulares.

O mínimo do editor não garante que uma transação seja retransmitida ou aceita na mempool de um nó. Os nós podem exigir uma taxa por byte virtual maior por causa da sua política ou das condições atuais da mempool. Ao transmitir aos pares, o Ginger ignora aqueles cujo mínimo anunciado supera a taxa por byte virtual da transação. Assim, uma taxa personalizada baixa pode impedir a transmissão ou deixar a transação sem confirmação; avalie as condições da rede e a urgência do pagamento antes de usá-la.

Quando as estimativas automáticas não estão disponíveis, o Ginger ainda pode oferecer a inserção manual de uma taxa por byte virtual. Se você não tem certeza de qual taxa por byte virtual usar, é preferível esperar as estimativas voltarem a funcionar a arriscar um número muito alto. As taxas de transações comuns e as taxas do coordenador de CoinJoin são distintas.

<span id="check-who-pays-the-fee" data-ginger-heading="confira-quem-paga-a-taxa" aria-hidden="true"></span>

## Confira quem paga a taxa

Em um [pagamento em lote](/pt-br/payments/send/#pay-several-recipients-in-one-transaction), **Subtract the transaction fee from the first payment** reduz apenas o valor do primeiro destinatário. Os demais valores inseridos permanecem inalterados. Se a opção estiver desmarcada, é preciso ter fundos suficientes para todos os valores dos pagamentos mais a taxa. Usar **Max** no editor de lotes ativa o desconto da taxa.

Confira sempre os valores finais na prévia, especialmente após alterar a taxa por byte virtual. Se um destinatário precisar receber um valor exato, descontar a taxa desse pagamento pode fazer com que receba menos que o solicitado. A prévia lista separadamente o valor final de cada destinatário do lote.

<span id="change-is-still-your-bitcoin" data-ginger-heading="o-troco-continua-sendo-seu-bitcoin" aria-hidden="true"></span>

## O troco continua sendo seu bitcoin

O Bitcoin gasta moedas inteiras, também chamadas de UTXOs. Se as entradas selecionadas ultrapassarem o valor destinado ao destinatário mais a taxa, o excedente geralmente retorna para um novo endereço de troco na sua carteira. Por exemplo, uma entrada de 100 000 satoshis que financia um pagamento de 60 000 satoshis com uma taxa de 1 000 satoshis deixa 39 000 satoshis de troco.

O endereço de troco pode ser diferente dos endereços de recebimento que você já mostrou a alguém. Você não precisa copiá-lo nem enviar o troco de volta manualmente. A análise de transações pode vincular o troco ao pagamento, o que importa quando você o combina mais tarde com outros fundos.

As sugestões de privacidade do Ginger podem oferecer um pagamento sem troco ao ajustar a seleção de moedas ou o valor destinado ao destinatário. Confira o resultado com cuidado. Uma cobrança de valor fixo não deve ser paga com um valor menor apenas para eliminar o troco.

Para selecionar moedas específicas ou lidar com uma transação pendente, consulte [controle de moedas e histórico](/pt-br/payments/coin-control-history/).
