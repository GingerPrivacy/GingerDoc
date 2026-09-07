---
doc_id: "getting-started.start-here"
title: "Start Here: Your First Steps with Ginger"
description: "Learn what Ginger does, protect your recovery backup, and follow a simple first receive-and-send path before exploring optional advanced features."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Start here
prev: false
next:
  link: /getting-started/install/
  label: Install Ginger Wallet
---

> Reading level: Start here. The essential steps come first; advanced references are optional follow-up.

Ginger is an application for receiving and sending bitcoin on your computer. You control the information that allows your bitcoin to be spent. Ginger can also help make payment history harder to follow through an optional feature called CoinJoin.

You can learn the ordinary wallet workflow first. You do not need your own Bitcoin node, a hardware device or advanced CoinJoin settings to create a software wallet.

<!-- Preserve links to the questions previously published on this page. -->
<span id="whats-the-officially-supported-operating-systems" aria-hidden="true"></span>
<span id="is-there-an-androidios-version" aria-hidden="true"></span>
<span id="does-ginger-support-altcoins" aria-hidden="true"></span>
<span id="what-are-the-minimal-requirements-to-run-ginger" aria-hidden="true"></span>
<span id="do-i-need-to-run-tor" aria-hidden="true"></span>

## 1. Install the real application

Follow [Install Ginger Wallet](/getting-started/install/) and use its official download links. Choose the download for your computer. Do not install a similarly named phone app or software sent by a stranger offering support.

Ginger supports Windows, macOS and Linux; the installation guide lists the supported versions and processors. This release is Bitcoin-only and has no Android or iOS app. You need an internet connection and writable storage. Tor is included, so you do not need to install it separately.

Keep the download checks in that guide. The separate [advanced signature-verification reference](/getting-started/verify-download/) explains the command-line checks when you need them.

<span id="what-is-the-password-used-for" aria-hidden="true"></span>

## 2. Create a wallet and make its backup

Follow [Create your first wallet](/getting-started/first-wallet/). Choose **New**, record the twelve **Recovery Words** in order, and complete **Confirm Recovery Words**. Keep the written backup private and available even if the computer is lost.

At **Add Passphrase**, understand the choice before continuing. If you use a passphrase, the original words and that exact passphrase are both needed for recovery. The passphrase also protects access to the wallet on your computer. Ginger cannot reset it. Leaving the fields empty creates a wallet without that extra passphrase; record which choice you made.

Do not continue with a meaningful balance until the backup is readable and you can open the intended wallet. Never share the words or passphrase with support.

<span id="why-is-it-important-to-use-a-new-address-for-every-payment" aria-hidden="true"></span>

## 3. Receive a small first payment

Wait for the wallet to finish synchronizing: this means checking the Bitcoin network for your transactions. Choose **Receive**, add a useful label and generate a receiving address. Share it with the intended payer, or use it in an exchange's on-chain Bitcoin withdrawal flow.

Generate a fresh address for each payment. Reusing an address makes separate payments easier to link on the public Bitcoin ledger.

Check the whole address and the network before the payment is authorized. Ginger receives on-chain Bitcoin; another asset's network or a Lightning invoice is not interchangeable. A confirmation means the transaction was included in a Bitcoin block. A payer's screenshot alone is not confirmation.

## 4. Make a small first payment

Choose **Send** and use **Automatic** selection for the ordinary workflow. Enter the recipient's address and amount, choose **Continue**, and review the destination, the amount the recipient will receive and the fee. Choose **Confirm** only when these are correct.

The fee pays for Bitcoin transaction space. If part of the selected money is left over, it returns to your wallet as change. You do not need to send that change back manually. A confirmed payment cannot be reversed by Ginger.

After a connection error, check history before trying to pay again. This helps avoid paying twice when the first transaction was already sent.

## 5. Decide whether to use CoinJoin

CoinJoin combines several people's activity into a shared Bitcoin transaction to make ownership links harder to infer. Your wallet keeps its signing keys. It costs fees, can take time, and cannot erase information a recipient or exchange already knows.

Review **Automatically start coinjoin** in **Coinjoin Settings** for the selected wallet. Turn automatic participation off while you learn if you do not want it to start unattended. If a round is already active, use the player's pause control and allow critical work to finish.

You can receive and make ordinary payments without waiting for a privacy indicator to reach 100%. You also do not need to tune every advanced setting to start using the wallet.

## You have finished the first-use path

Your essential checks are a recoverable backup, the intended wallet, the right payment network, the recipient and the actual fee. Keep using fresh receiving addresses and review each payment.

Return to this guide whenever you need the receive-and-send checklist. The **Advanced use** section is separate from this first-use path. For example, [Verify a Ginger Wallet Download](/getting-started/verify-download/) explains command-line signature checks in detail.
