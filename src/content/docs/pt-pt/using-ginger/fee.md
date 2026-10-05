---
doc_id: "payments.fees-and-change"
title: "Taxas de transação, taxas por byte virtual personalizadas e troco"
description: "Compreenda as taxas em satoshis por byte virtual, a inserção manual de taxas, as saídas de troco e as sugestões de privacidade que alteram o valor no Ginger."
lang: "pt-PT"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-mining-fee"></span>
<span id="what-does-the-mining-fee-depend-on"></span>
<span id="what-is-coordinator-fee"></span>

> Nível de leitura: guia avançado. Primeiro, compreenda a pré-visualização de um envio comum, o valor destinado ao destinatário e a taxa.

Para as etapas de um pagamento comum, comece por [Enviar bitcoin](/pt-pt/payments/send/). Esta referência explica os controlos de taxa e o troco com mais detalhes; não é necessário escolher uma taxa por byte virtual personalizada para cada pagamento.

<span id="understand-the-fee" data-ginger-heading="compreenda-a-taxa" aria-hidden="true"></span>

## Compreenda a taxa

A taxa por unidade de tamanho é medida em satoshis por byte virtual e aparece como **Fee Rate (sat/vByte)**. A taxa total de mineração é essa taxa multiplicada pelo tamanho virtual da transação. Ela não é uma percentagem do valor do pagamento. Gastar várias moedas pequenas pode custar mais do que gastar uma única moeda maior com o mesmo valor total.

Use o controlo de taxa da pré-visualização para alterar a preferência de confirmação desejada ou inserir uma **Custom Fee Rate**. O prazo estimado não é uma garantia: novas transações disputam espaço e os blocos chegam em intervalos irregulares. O controlo de inserção manual desta versão rejeita taxas abaixo de 1 sat/vByte; a política do nó pode exigir mais do que o mínimo permitido pelo campo.

Quando as estimativas automáticas não estão disponíveis, o Ginger ainda pode oferecer a inserção manual de uma taxa por byte virtual. Se não tem certeza de qual taxa por byte virtual usar, é preferível esperar as estimativas voltarem a funcionar a arriscar um número muito alto. As taxas de transações comuns e as taxas do coordenador de CoinJoin são distintas.

<span id="change-is-still-your-bitcoin" data-ginger-heading="o-troco-continua-a-ser-o-seu-bitcoin" aria-hidden="true"></span>

## O troco continua a ser o seu bitcoin

O Bitcoin gasta moedas inteiras, também chamadas de UTXOs. Se as entradas selecionadas ultrapassarem o valor destinado ao destinatário mais a taxa, o excedente geralmente retorna para um novo endereço de troco na sua carteira. Por exemplo, uma entrada de 100 000 satoshis que financia um pagamento de 60 000 satoshis com uma taxa de 1 000 satoshis deixa 39 000 satoshis de troco.

O endereço de troco pode ser diferente dos endereços de receção que já mostrou a alguém. Não precisa copiá-lo nem enviar o troco de volta manualmente. A análise de transações pode vincular o troco ao pagamento, o que importa quando o combina mais tarde com outros fundos.

As sugestões de privacidade do Ginger podem oferecer um pagamento sem troco ao ajustar a seleção de moedas ou o valor destinado ao destinatário. Confira o resultado com cuidado. Uma cobrança de valor fixo não deve ser paga com um valor menor apenas para eliminar o troco.

Para selecionar moedas específicas ou lidar com uma transação pendente, consulte [controlo de moedas e histórico](/pt-pt/payments/coin-control-history/).
