---
doc_id: "coinjoin.round-details"
title: "CoinJoin Rounds and Input Eligibility"
description: "Understand Ginger CoinJoin phases, input eligibility and retry behavior when ordinary start, pause and waiting-state checks do not explain the result."
lang: "en-US"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First understand the ordinary start-and-pause controls and the fact that completed rounds cost fees.

Start with [the ordinary CoinJoin guide](/using-ginger/coinjoin/). Ginger manages the protocol automatically; this reference is for understanding a specific status or limitation.

## Why a balance may not be eligible

There is no fixed waiting time or universal minimum balance that guarantees participation. Eligibility depends on the round's parameters, coin sizes, confirmation status, fees, exclusions, and your wallet settings. A balance can be larger than the minimum input value while still containing no economical eligible coin.

## What happens during a round

| Phase | What your wallet is waiting for |
| --- | --- |
| Input registration | Eligible coins are proposed for the shared transaction. |
| Connection confirmation | Registered participants confirm that they remain available. |
| Output registration | Participants arrange the outputs they should receive through the protocol. |
| Signing | Wallets check the proposal and sign their own inputs. Keep Ginger available through this critical phase. |
| Blame round, when needed | A retry uses eligible participants from the previous transaction and applies additional consistency checks. |
| Broadcast | The completed transaction is submitted to Bitcoin nodes, then awaits confirmation. |

These phases are managed by the application; you do not need to exchange keys or coordinate manually with strangers. The number of accepted inputs and resulting outputs is determined by the round and coin selection. There is no fixed input count or output count that you should expect for every wallet, and a wallet's total balance is not a promise that it can all join one round.

## Why signing can stop a round

Before completing signing, Ginger checks the actual proposed transaction, including whether:

- All inputs that this wallet registered are still present, with none of those inputs duplicated.
- The transaction contains enough inputs and, unless solo CoinJoin is allowed in the configuration, includes inputs beyond this wallet's own registration.
- The effective mining fee rate is sufficiently close to the round's advertised rate, allowing for estimation differences.
- The outputs promised to the wallet are present with at least the expected amounts.

An offered round's participant or fee settings do not replace these checks on the transaction itself. In particular, a fee rate that falls too far below the advertised rate can fail signing checks even if the amount deducted from your wallet looked acceptable. Input counts are counts of coins, not proof of independent people; see [CoinJoin trust and limits](/learn-coinjoin/trust-and-limits/).

If these checks fail, Ginger does not complete all signatures for its inputs. When some registered wallet inputs remain in the proposal, it withholds a signature for one of those present inputs. This matters because withholding a signature for an omitted input would not stop the proposed transaction. If none of the wallet's inputs remain, it sends no signatures. A proposal containing a duplicated registered wallet input is rejected outright.

A round can therefore reach the signing phase and still fail or retry. Keep Ginger available until it leaves the critical phase, and inspect the resulting status before attempting another action with those coins. Do not change unfamiliar limits merely to make a rejected round continue.

## Checks on blame rounds

When a round is disrupted, Ginger only carries forward its coins for which signatures were submitted. A blame round must use inputs from the previous transaction and keep the same maximum suggested input amount. Ginger checks this relationship before registering outputs, as well as checking the blame round's phase, minimum input count and fee limits.

These checks limit what can change during a retry. They do not promise that a blame round will complete, establish who controls the other inputs, or turn a failed round into proof of an attack.

## Inspect a completed round

Expand a grouped CoinJoin entry in history and open an individual round's details. Choose **View transaction** to inspect its inputs and outputs in the resizable transaction viewer. It shows ownership, labels and known anonymity scores where available; unknown values do not establish who owns another participant's coins. See [the transaction viewer guide](/payments/coin-control-history/#inspect-inputs-and-outputs) for the available details and copy actions.

## Private coins and another output wallet

Normal startup refuses a wallet or available candidate set whose coins already meet its privacy target. Selecting another output wallet does not force a private-only round. Check [the output-wallet settings](/coinjoin/settings/) before relying on a forwarding routine.

For score calculations and complete value reconciliation, use [fees and privacy progress](/using-ginger/annonset/).
