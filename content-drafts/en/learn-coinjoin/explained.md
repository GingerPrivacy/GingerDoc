---
doc_id: "learn-coinjoin.explained"
title: "What Is CoinJoin? Benefits, Costs, and Limitations"
description: "Understand collaborative Bitcoin transactions, what CoinJoin can improve, and why fees, timing, and later spending still matter."
lang: "en-US"
verified_release: "v2.0.26"
---

# What Is CoinJoin? Benefits, Costs, and Limitations

CoinJoin lets several participants contribute to one Bitcoin transaction. Instead of every input obviously belonging to one payer, the transaction contains several people's spending and receiving activity. This can make it harder to infer which new outputs correspond to a particular participant's inputs.

It is still a public Bitcoin transaction. CoinJoin does not encrypt the blockchain, hide all amounts, or turn bitcoin into another asset. Its benefit is uncertainty about ownership links, whose strength depends on the transaction, protocol, participants, and information held by the observer.

## A simple example

Imagine three people each contributing funds to a shared transaction, which creates several similar-looking outputs. An outside reader can see those inputs and outputs but may have more than one plausible way to associate them. An ordinary payment's assumption that one sender owns every input no longer describes the transaction accurately.

Real rounds can be more complex. Ginger uses WabiSabi-based coordination, which supports flexibility in input and output amounts rather than requiring every participant to receive one identical fixed-size coin. Similar-looking outputs help only when the surrounding information leaves plausible alternatives. The [WabiSabi protocol source](https://github.com/WalletWasabi/WabiSabi/blob/master/protocol.md) is available for readers wanting the underlying specification.

## Who holds the money?

In Ginger's normal CoinJoin flow, your wallet retains its keys and verifies a proposed transaction before signing its own inputs. You do not first deposit bitcoin into a coordinator's custodial account. Other participants need to complete their signing steps for the shared transaction to succeed.

The coordinator still organizes the round and influences availability and eligibility. A service can be offline, reject an input, or fail to complete a round. Non-custodial construction limits one class of trust; it does not remove implementation bugs, endpoint observations, malicious participants, or the need for backups.

## Benefits and limits

| CoinJoin can help with | CoinJoin does not guarantee |
| --- | --- |
| Weakening simple input-to-output ownership guesses | That no analyst can make a useful inference |
| Making future spending less directly associated with a known receipt | Erasure of the original exchange, invoice, or withdrawal record |
| Increasing plausible interpretations of a transaction | A verified number of independent people behind a wallet score |
| Providing privacy without handing a coordinator the spending keys | Freedom from software, device, or service failures |
| Combining privacy work into a collaborative transaction | Acceptance of the resulting funds by every provider |

An observer who controls other participants or has additional off-chain information may have fewer uncertainties than the public. The number of outputs is therefore not an automatic count of independent anonymity partners. Later combining coins can reveal associations that the CoinJoin alone left ambiguous.

## Costs and waiting

A successful round pays Bitcoin mining fees and may charge a coordinator fee. Remixes or small-input exemptions can remove the coordinator component under the offered policy while leaving mining costs. Multiple rounds can mean multiple costs.

The wallet waits for suitable rounds, confirmations, fee conditions, and other participants. There is no fixed completion time that applies to every balance. Privacy settings can extend that wait. A failed attempt before broadcast is different from a completed transaction that has already incurred on-chain fees.

In Ginger, review **Coinjoin Settings**, the output destination, and the player's status before enabling unattended participation. Then monitor the resulting history and costs. Continue with [Decide whether CoinJoin fits your use](when-to-use.md) to connect the mechanism with an actual spending plan.
