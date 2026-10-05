---
doc_id: "buy-sell.sell-and-orders"
title: "Vender bitcoin e resolver pedidos de provedores"
description: "Conclua um pedido de venda do Ginger com o valor e endereço exatos do provedor, acompanhe o estado e contate o serviço de suporte correto."
lang: "pt-BR"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="how-it-works"></span>
<span id="step-1-selecting-your-country"></span>
<span id="step-2-entering-purchase-amount"></span>
<span id="step-3-choosing-an-offer"></span>
<span id="step-4-completing-the-transaction"></span>
<span id="step-5-viewing-transaction-history"></span>
<span id="bitcoin-purchase-faq"></span>
<span id="how-can-i-sell-bitcoin-through-ginger-wallet"></span>
<span id="do-i-need-to-select-my-country-before-selling-bitcoin"></span>
<span id="how-do-i-enter-the-amount-i-want-to-sell"></span>
<span id="are-there-minimum-and-maximum-limits-for-sales"></span>
<span id="how-do-i-choose-the-best-offer-for-my-sale"></span>
<span id="what-happens-after-i-accept-an-offer"></span>
<span id="how-do-i-complete-the-bitcoin-sale-transaction"></span>
<span id="can-i-view-my-past-sales"></span>
<span id="what-does-it-mean-if-a-transaction-is-on-hold"></span>
<span id="can-i-change-the-browser-used-for-redirection"></span>

> Nível de leitura: uso cotidiano. Escolha este guia quando precisar realizar a tarefa descrita nele.

Uma venda troca bitcoin pelo meio de pagamento oferecido por um provedor. O Ginger ajuda a obter ofertas e preparar o pagamento on-chain, mas o provedor controla o pagamento em moeda fiduciária e a análise do pedido. Leia as exigências do provedor antes de comprometer fundos.

<span id="create-and-fund-a-sale" data-ginger-heading="crie-e-pague-uma-venda" aria-hidden="true"></span>

## Crie e pague uma venda

1. Abra uma carteira sincronizada com bitcoin que possa ser gasto e escolha **Sell**. Se a ação estiver ausente, confira o progresso da recuperação e se a carteira consegue enviar.
2. Selecione seu país ou região quando solicitado. Informe o valor a vender e a moeda em que quer receber o pagamento. Confira as unidades e os limites exibidos.
3. Escolha **Continue**, filtre **Offers** por forma de pagamento e compare o pagamento líquido e os encargos do provedor.
4. Escolha **Accept**. Conclua as etapas do provedor no navegador até receber o destino Bitcoin exato, o valor e qualquer prazo para pagamento.
5. Volte ao diálogo de venda do Ginger e escolha **Send**. Informe ou confira o destino e o valor exatos fornecidos pelo provedor. Não presuma que o navegador preencheu automaticamente todos os campos de forma correta.
6. Confira a taxa de transação e o valor destinado ao destinatário antes de confirmar. O valor solicitado pelo provedor precisa chegar após qualquer subtração de taxa; não trate acidentalmente “enviar tudo” como pagamento de uma cobrança de valor fixo.
7. Confira o histórico de transações e **Previous Orders** para acompanhar o progresso. Guarde o ID do pedido do provedor e o ID da transação para seus registros.

O diálogo de venda preserva o contexto do provedor, mas não elimina sua responsabilidade de comparar a solicitação de pagamento com a prévia. Se a cotação expirar antes do envio, obtenha uma instrução atualizada do provedor em vez de pagar um endereço antigo por suposição.

<span id="understand-status" data-ginger-heading="entenda-o-estado" aria-hidden="true"></span>

## Entenda o estado

| Estado nos detalhes do pedido | O que fazer |
| --- | --- |
| **Created** | O pedido existe; confira quais etapas do provedor faltam antes de pagar novamente. |
| **Pending** | O processamento ainda está em andamento. Compare o estado no provedor com o histórico da carteira. |
| **Your transaction is on hold. Please contact Support.** | Entre em contato com o provedor escolhido usando o ID do pedido. O Ginger não pode liberar sua análise. |
| **Expired** | Não presuma que uma cotação ou um endereço de pagamento antigos continuam utilizáveis. Pergunte ao provedor se os fundos já foram enviados. |
| **Failed** | Confira se houve transferência de pagamento ou bitcoin antes de tentar um novo pedido. |
| **Refunded** | Confirme a forma, o destino e a liquidação do reembolso com o provedor. |
| **Completed** | Verifique o recebimento esperado de bitcoin ou o pagamento em moeda fiduciária pela carteira ou conta de pagamento correspondente. |

Os nomes de estado refletem as informações mais recentes da integração com o provedor e podem estar atrasados em relação aos eventos. Um indicador de retenção em **Buy** ou **Sell** aponta para um pedido que precisa de atenção; ele não indica a perda de uma chave da carteira.

<span id="which-support-channel-to-use" data-ginger-heading="qual-canal-de-suporte-usar" aria-hidden="true"></span>

## Qual canal de suporte usar

Para verificações de identidade, atrasos de pagamento, formas de pagamento aceitas, termos de reembolso ou retenção de um pedido, contate o provedor pelo site autenticado dele. Forneça o ID do pedido e apenas as informações de transação necessárias para esse caso específico. Não exponha detalhes privados de conta em issues públicas do GitHub.

Para um travamento do Ginger, falha ao abrir o navegador ou um pedido exibido incorretamente, informe a versão do aplicativo, o sistema operacional, o texto do erro e as etapas pelos links oficiais de suporte do Ginger. Não inclua palavras de recuperação, frases-senha, segredos de 2FA, arquivos da carteira ou logs completos sem revisar seu conteúdo.

<span id="privacy-and-fees" data-ginger-heading="privacidade-e-taxas" aria-hidden="true"></span>

## Privacidade e taxas

O provedor pode vincular sua solicitação de pagamento à identidade ou à forma de pagamento que você fornece. Gastar fundos que passaram por CoinJoin não remove esse registro, e um provedor pode aplicar sua própria política de aceitação. O Ginger não pode garantir que toda corretora aceitará todo histórico de transações.

Compare o pagamento cotado com o valor em bitcoin, a taxa exibida pelo provedor e a taxa de mineração separada do seu pagamento. Mantenha valor disponível suficiente para esta última. Um saldo baixo na carteira, um pico nas taxas ou moedas participando de uma fase crítica de CoinJoin podem impedir o pagamento imediato de um pedido que, de outra forma, é válido.
