---
doc_id: "payments.payjoin-message-signing"
title: "PayJoin and Message Signing"
description: "Send a PayJoin payment request, understand recipient knowledge, wallet fingerprints and fallback, and sign a narrowly scoped address-ownership message."
lang: "en-US"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First understand the normal send preview, recipient amount and fee.

PayJoin and message signing are separate tools. PayJoin changes how a payment transaction is constructed. Message signing proves control of a key for a particular statement without making a payment. Neither feature should be used as a reason to disclose your recovery words.

## Send a PayJoin request

PayJoin is a collaborative payment in which a receiver can contribute an input. This can weaken the assumption that all inputs of an ordinary-looking payment belong to one sender. The receiver must provide a compatible Bitcoin payment URI containing a PayJoin endpoint; an ordinary address alone does not enable it. The protocol is described in [BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki).

1. Use a software wallet with spendable funds. PayJoin supports SegWit and Taproot sender inputs and change. This release rejects PayJoin requests for hardware-wallet sending.
2. Paste the complete payment URI into **Send**, rather than copying only its address. Check the destination and amount through the same trusted channel you would use for any payment.
3. Review the transaction preview and PayJoin indicator, then authorize the payment if the amount and fee settings are acceptable. PayJoin is a single-recipient flow; it cannot be combined with a batch payment or fee deduction from the recipient's amount.
4. Check the resulting transaction in history.

The released implementation can fall back to its ordinary payment transaction if PayJoin construction fails. Therefore, authorizing this flow does not guarantee that the broadcast transaction is a PayJoin. Do not use it where an ordinary-payment fallback would violate your privacy requirement.

For mainnet, a regular internet endpoint must use HTTPS. An HTTP or HTTPS `.onion` endpoint is supported when Tor is enabled, and rejected when Tor is disabled. Other URL schemes are rejected. If the endpoint is unsupported, Ginger ignores the PayJoin endpoint, so check that the preview still identifies the payment as PayJoin before continuing.

This guide covers sending a recipient-provided request. Ginger's ordinary **Receive** flow does not operate a PayJoin receiving server, and this release does not provide a user setup flow for one.

## Negotiated outputs and fees

The payment request can restrict output substitution with `pjos=0`. Ginger forwards that restriction to the receiver and rejects a proposal that replaces the requested payment output or reduces its amount. If substitution is permitted, the receiver can use a different receiving output during negotiation. The receiver's contributed input can also make the on-chain receiving output larger than your payment amount.

Ginger advertises a maximum additional mining-fee contribution, calculated automatically from the original fee rate. It rejects a proposal that makes your wallet contribute more than that advertised limit. This rejection uses the ordinary-payment fallback described above; it does not necessarily cancel the payment.

The preview is built before the final PayJoin negotiation, which takes place after authorization. The negotiated transaction can have a different fee from the original preview. Ginger recalculates the completed transaction's fee information from the final transaction, but does not show a second confirmation preview after negotiation. Check the final transaction in history, and do not treat the initial PayJoin indicator as proof that negotiation succeeded.

## What the recipient and an observer learn

The recipient already knows the payment request, its receiving address and the intended amount. If the request is attached to an identified order, PayJoin does not erase that identity. During negotiation, the receiving service also sees the proposed payment transaction, including the sender's proposed inputs. It should not be treated as someone from whom the payment itself is hidden.

Before sending the negotiation request, Ginger removes wallet key-origin metadata, including Taproot derivation paths and global extended public keys. This reduces unnecessary wallet information sent to the receiver; the proposed transaction's inputs, outputs and amounts are still visible to it.

An outside observer sees the transaction eventually published on Bitcoin. A successful PayJoin can make the usual “all inputs belong to the sender” assumption unreliable. That benefit depends on the transaction and what other information the observer has; it does not guarantee that the transaction is indistinguishable from every ordinary payment.

Keep these audiences separate. A recipient may learn details through the order or negotiation even if an unrelated observer cannot confidently assign the transaction's inputs. A public transaction explorer can create another disclosure if you look up the payment through an identified browser session.

## Wallet fingerprints and the ordinary-payment fallback

Wallets make choices about input address types, transaction structure and signing. Combinations of these choices can leave recognizable patterns. A transaction can therefore lose some ambiguity even when its PayJoin protocol messages are valid. Published [PayJoin fingerprinting examples](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy/) illustrate this problem in particular wallet combinations; they do not establish that Ginger has the same issues or quantify Ginger's privacy.

As a user, choose an updated, compatible receiving service, verify the payment request and review the proposed fee and amount. Do not change unfamiliar transaction options simply to imitate another wallet: a plausible-looking transaction is not proof of a good privacy result.

If you require a collaborative payment, agree on a compatible method with the recipient before authorizing Ginger's sending flow. Its ordinary-payment fallback means that a failed negotiation may still result in a valid payment. After broadcast, do not send again just because the result is unclear; first check the transaction and the recipient's payment status. A failed PayJoin negotiation and a failed Bitcoin payment are different situations.

## Sign a message for an address

Some services ask you to demonstrate that you control a receiving address. Open the wallet's menu and choose **Sign Message**. Enter an address belonging to this wallet and the exact statement you intend to sign. Ginger rejects addresses that do not belong to it. Enter the message, choose **Continue**, and copy the resulting signature for the intended verifier.

For a hardware wallet, follow the device-signing prompt; availability depends on the device and message-signing support. A watch-only wallet without a signing device cannot produce a signature. Address type and the verifier's supported signature format must also be compatible.

Read the message as carefully as an authorization statement. Prefer a narrowly scoped text identifying the recipient, purpose, and date or challenge. Do not sign a blank statement or one whose consequences you do not understand. A signature can be copied and shown to others after you share it.

Message signing does not transfer bitcoin or establish ownership of every address in your wallet. It also creates a link between the signed address and whoever the verifier identifies as you. If an exchange requests it, that disclosure remains even after you later use CoinJoin.
