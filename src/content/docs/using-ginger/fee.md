---
doc_id: "payments.fees-and-change"
title: "Transaction Fees, Custom Rates and Change"
description: "Understand fee rates, custom rates down to 0.1 sat/vB, relay limits, fee deduction, change outputs and privacy suggestions in Ginger."
lang: "en-US"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-mining-fee"></span>
<span id="what-does-the-mining-fee-depend-on"></span>
<span id="what-is-coordinator-fee"></span>

> Reading level: Advanced guide. First understand the normal send preview, recipient amount and fee.

For the ordinary payment steps, start with [Send Bitcoin](/payments/send/). This reference explains the fee controls and change in more detail; it is not necessary to choose a custom rate for every payment.

## Understand the fee

A fee rate is measured in satoshis per virtual byte, shown as **Fee Rate (sat/vByte)**. The total mining fee is the fee rate multiplied by the transaction's virtual size. It is not a percentage of the payment amount. Spending many small coins can cost more than spending one larger coin of the same total value.

Use the preview's fee control to change the desired confirmation preference or enter a **Custom Fee Rate**. Ginger accepts rates down to **0.1 sat/vB**, and its estimates and fee chart retain fractional rates. An estimated time is not a guarantee: new transactions compete for space and blocks arrive at irregular intervals.

The editor's minimum does not guarantee that a transaction will be relayed or accepted into a node's mempool. Nodes can require a higher rate because of their policy or current mempool conditions. When broadcasting to peers, Ginger skips peers whose advertised minimum is above the transaction's fee rate. A low custom rate may therefore fail to broadcast or remain unconfirmed; review the network conditions and the payment's urgency before using it.

When automatic estimates are unavailable, Ginger can still offer manual fee entry. If you are unsure what rate is appropriate, waiting for estimates to recover is preferable to guessing a very high number. Ordinary transaction fees and CoinJoin coordinator fees are separate.

## Check who pays the fee

In a [batch payment](/payments/send/#pay-several-recipients-in-one-transaction), **Subtract the transaction fee from the first payment** reduces only the first recipient's amount. The other entered payment amounts stay unchanged. If the option is cleared, you need enough funds for all payment amounts plus the fee. Using **Max** in the batch editor enables fee subtraction.

Always check the final amounts in the preview, especially after changing the fee rate. If a recipient must receive an exact amount, deducting a fee from that payment can underpay the request. The preview lists each batch recipient's final amount separately.

## Change is still your bitcoin

Bitcoin spends whole coins, also called UTXOs. If selected inputs exceed the recipient amount plus fee, the excess generally returns to a new change address in your wallet. For example, a 100,000-satoshi input funding a 60,000-satoshi payment with a 1,000-satoshi fee leaves 39,000 satoshis of change.

The change address can differ from receiving addresses you have already shown someone. You do not need to copy it out or send it back manually. Change can be linked to the payment through transaction analysis, which matters when you later combine it with other funds.

Ginger's privacy suggestions may offer a payment without change by adjusting coin selection or the recipient amount. Review the result carefully. A fixed invoice should not be underpaid merely to remove change.

For selecting specific coins or handling a pending transaction, see [coin control and history](/payments/coin-control-history/).
