---
doc_id: "payments.send"
title: "Send Bitcoin and Review Fees"
description: "Prepare a Ginger payment, verify the recipient and amount, understand fee rates and change, and authorize the transaction."
lang: "en-US"
verified_release: "v2.0.26"
---

# Send Bitcoin and Review Fees

A confirmed Bitcoin payment cannot be recalled by Ginger. Before confirming, check the recipient through a trusted channel and review the complete destination, amount, and fee. Start with a small payment when learning a new workflow.

## Prepare a payment

1. Open the wallet holding the funds and choose **Send**. The send action offers **Automatic** and **Manual Control**; automatic selection is suitable when you do not need to select individual coins.
2. Put the recipient's Bitcoin address or payment URI in **To:**. A URI can include an amount and PayJoin information. If the **Scan QR Code** action is available on your platform, you can use the camera, then review the decoded destination.
3. Enter the amount and an informative recipient label. Check whether the display is in BTC or fiat. A fiat estimate changes with the exchange rate and is not the amount the Bitcoin network transfers.
4. Choose **Continue** and review the transaction preview, its selected funds, any privacy suggestions, and the expected change. A suggestion that changes the amount is appropriate only if it still satisfies the recipient's request.
5. Review the fee and estimated confirmation time. Choose **Confirm** when the details are correct, then complete any passphrase or hardware-device authorization.
6. Check history for the broadcast transaction. If the result is uncertain after a network error, inspect history before starting another payment.

Sending all available funds can deduct the fee from what the recipient receives. Fixed-amount requests and PayJoin have different constraints. The preview is the place to check the actual recipient amount rather than assuming that the wallet balance can all arrive at the destination.

## Understand the fee

A fee rate is measured in satoshis per virtual byte, shown as **Fee Rate (sat/vByte)**. The total mining fee is the fee rate multiplied by the transaction's virtual size. It is not a percentage of the payment amount. Spending many small coins can cost more than spending one larger coin of the same total value.

Use the preview's fee control to change the desired confirmation preference or enter a **Custom Fee Rate**. An estimated time is not a guarantee: new transactions compete for space and blocks arrive at irregular intervals. The released manual-entry control rejects rates below 1 sat/vByte; node policy can require more than the editor's minimum.

When automatic estimates are unavailable, Ginger can still offer manual fee entry. If you are unsure what rate is appropriate, waiting for estimates to recover is preferable to guessing a very high number. Ordinary transaction fees and CoinJoin coordinator fees are separate.

## Change is still your bitcoin

Bitcoin spends whole coins, also called UTXOs. If selected inputs exceed the recipient amount plus fee, the excess generally returns to a new change address in your wallet. For example, a 100,000-satoshi input funding a 60,000-satoshi payment with a 1,000-satoshi fee leaves 39,000 satoshis of change.

The change address can differ from receiving addresses you have already shown someone. You do not need to copy it out or send it back manually. Change can be linked to the payment through transaction analysis, which matters when you later combine it with other funds.

Ginger's privacy suggestions may offer a payment without change by adjusting coin selection or the recipient amount. Review the result carefully. A fixed invoice should not be underpaid merely to remove change.

## When a payment cannot be prepared

Insufficient funds can mean there is not enough spendable value after fees, even if the displayed total balance looks sufficient. Funds can also be unconfirmed, tied up in a critical CoinJoin phase, or part of an unconfirmed chain that cannot currently be extended.

A missing send action during recovery is expected. A watch-only wallet cannot sign on its own. Lightning addresses and invoices are not supported by this release; request an on-chain Bitcoin payment address.
