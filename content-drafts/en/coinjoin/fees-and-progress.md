---
doc_id: "coinjoin.fees-and-progress"
title: "CoinJoin Fees and Privacy Progress"
description: "Separate coordinator fees from mining fees, understand fee exemptions, and interpret Ginger privacy progress without anonymity guarantees."
lang: "en-US"
verified_release: "v2.0.26"
---

# CoinJoin Fees and Privacy Progress

CoinJoin can charge a coordinator fee and always needs Bitcoin transaction fees for a successful on-chain transaction. A coordinator-fee exemption does not make the round free. Check current terms and wallet messages before starting, especially when using small coins or allowing repeated rounds.

## Coordinator fee versus mining fee

Ginger currently advertises a 0.3% coordinator fee on new inputs larger than 0.03 BTC. Inputs of 0.03 BTC or less and qualifying remixes are advertised as exempt; the advertised exemption also covers the direct spend of CoinJoined funds through one transaction. This is an input-based policy, not a threshold on your total wallet balance. Round parameters and eligibility checks determine what the client can actually use. [Ginger's fee explanation](https://gingerwallet.io/)

For illustration, a chargeable input of 0.04 BTC at 0.3% has a coordinator fee of 0.00012 BTC, or 12,000 satoshis, before mining fees. An eligible 0.02 BTC input under the advertised policy has no coordinator fee, but still contributes mining fees. These examples describe the arithmetic, not a quote for a particular round.

Mining fees compensate miners for transaction space. They depend on the fee rate and the transaction's inputs and outputs. A small-value coin can cost a large percentage of its value to spend. Repeated CoinJoins can each create further mining costs even if they qualify for a coordinator-fee exemption.

Do not split coins solely to chase an exemption without understanding the extra transactions, fees, and public links this would create. The economical decision depends on your actual coins and purpose.

## How Ginger responds to unacceptable conditions

The client checks the proposed round before participating. It can show **Mining fee rate was too high**, **Coordination fee rate was too high**, **Min input count was too low**, or **Server did not give remix fee exemption**. These are reasons to wait or investigate the offered conditions. Do not blindly raise limits to make a message disappear.

The user's fee preferences can also cause **Awaiting cheaper coinjoins**. A time preference means waiting for relatively cheaper conditions, not a reservation guaranteeing completion within a day or a week. A failed pre-broadcast round does not itself create a new confirmed Bitcoin transaction, although waiting still has an opportunity cost.

## Privacy progress is an estimate

Ginger tracks privacy information for coins and compares it with the wallet's anonymity-score target. Its overall progress uses an amount-weighted calculation of scores toward that target. The separate colored balance breakdown represents amounts in privacy categories; it is not the same calculation as the overall progress number. That view is local to Ginger's knowledge and settings. It cannot measure every fact held by a payment recipient, exchange, coordinator, or blockchain analyst.

The message **Hurray! All your funds are private!** means that the wallet considers the funds private under its current target and accounting. It does not mean the transaction history vanished, that you are anonymous on the internet, or that a later transaction cannot create a link.

Changing the target, receiving new non-private funds, combining coins, or recovering a wallet without its local history can affect what the interface shows. Preserve local metadata when moving installations if you want to retain more of that context.

## Judge progress by your objective

You might want to reduce what one recipient can infer about your other payments, or separate future spending from a publicly disclosed address. Decide what information is already public and who you want to disclose less to. Then consider the expected cost, wait, and spending behavior required afterward.

Use the wallet's history to inspect completed CoinJoin transactions and their fees. An apparent balance reduction should be reconciled with fees, outputs sent to another wallet, and pending transactions before you assume funds are lost. Pausing participation gives you time to review without changing the transaction history.
