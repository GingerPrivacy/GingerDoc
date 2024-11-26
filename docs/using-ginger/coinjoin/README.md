# Coinjoin

## What is a CoinJoin?
A coinjoin is a collaborative transaction between multiple peers.
Usually, but not necessarily, it consists of some standard output denominations that participants should break their coins in to. This makes it difficult for outside parties to trace where a particular coin was sent to (as opposed to regular bitcoin transactions, where there is usually one sender and one receiver). Coinjoins can be done with non-custodial software like Ginger Wallet, that eliminates the risk of funds disappearing or being stolen. The funds will always be in a bitcoin address that the user controls and not even developers can alter the transaction or redirect the funds. Coinjoin basically means: “when you want to make a transaction, find someone else who also wants to make a transaction and make a joint transaction together”.


## What are the fees for coinjoins?
Coinjoining coins with a value above 0.01 BTC costs 0.3% as a coordinator fee + mining fees. Inputs of 0.01 BTC or below don't pay coordinator fees, nor do remixes, even after one transaction. Thus, a payment made with coinjoined funds allows the sender and the recipient to remix their coins without paying any coordinator fees.

## Do i need to trust ginger with my coins?
No, Ginger’s coinjoin implementation is trustless by design. The participants do not need to trust each other or the coordinator. Since only the user knows the private keys, only he can sign the transaction, which will only be done after verifying that everything is alright. Nobody can neither steal your coins, nor figure out which outputs belong to which inputs.
