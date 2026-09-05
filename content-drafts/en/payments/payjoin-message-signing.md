---
doc_id: "payments.payjoin-message-signing"
title: "PayJoin and Message Signing"
description: "Use Ginger payment-request PayJoin support and sign an address-ownership message, with the released limitations clearly explained."
lang: "en-US"
verified_release: "v2.0.26"
---

# PayJoin and Message Signing

PayJoin and message signing are separate tools. PayJoin changes how a payment transaction is constructed. Message signing proves control of a key for a particular statement without making a payment. Neither feature should be used as a reason to disclose your recovery words.

## Send a PayJoin request

PayJoin is a collaborative payment in which a receiver can contribute an input. This can weaken the assumption that all inputs of an ordinary-looking payment belong to one sender. The receiver must provide a compatible Bitcoin payment URI containing a PayJoin endpoint; an ordinary address alone does not enable it. The protocol is described in [BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki).

1. Use a software wallet with spendable funds. This release rejects PayJoin requests for hardware-wallet sending.
2. Paste the complete payment URI into **Send**, rather than copying only its address. Check the destination and amount through the same trusted channel you would use for any payment.
3. Review the transaction preview and PayJoin indicator, then authorize the payment if the amount and fees are acceptable.
4. Check the resulting transaction in history.

The released implementation can fall back to its ordinary payment transaction if PayJoin construction fails. Therefore, authorizing this flow does not guarantee that the broadcast transaction is a PayJoin. Do not use it where an ordinary-payment fallback would violate your privacy requirement.

Use a compatible HTTPS endpoint for mainnet. In v2.0.26 the endpoint checks reject onion endpoints while Tor is enabled; an onion-only request should not be treated as a supported path. Keep Tor enabled and ask the recipient for a compatible alternative rather than disabling network privacy to force the request through.

This guide covers sending a recipient-provided request. Ginger's ordinary **Receive** flow does not operate a PayJoin receiving server, and this release does not provide a user setup flow for one.

## Sign a message for an address

Some services ask you to demonstrate that you control a receiving address. Open the wallet's menu and choose **Sign Message**. Enter an address belonging to this wallet and the exact statement you intend to sign. Ginger rejects addresses that do not belong to it. Enter the message, choose **Continue**, and copy the resulting signature for the intended verifier.

For a hardware wallet, follow the device-signing prompt; availability depends on the device and message-signing support. A watch-only wallet without a signing device cannot produce a signature. Address type and the verifier's supported signature format must also be compatible.

Read the message as carefully as an authorization statement. Prefer a narrowly scoped text identifying the recipient, purpose, and date or challenge. Do not sign a blank statement or one whose consequences you do not understand. A signature can be copied and shown to others after you share it.

Message signing does not transfer bitcoin or establish ownership of every address in your wallet. It also creates a link between the signed address and whoever the verifier identifies as you. If an exchange requests it, that disclosure remains even after you later use CoinJoin.
