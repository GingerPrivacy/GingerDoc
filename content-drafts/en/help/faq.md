---
doc_id: "help.faq"
title: "Ginger Wallet Frequently Asked Questions"
description: "Find clear answers about Ginger custody, recovery, fees, privacy, hardware wallets, and supported released features."
lang: "en-US"
verified_release: "v2.0.26"
---

# Ginger Wallet Frequently Asked Questions

## Does Ginger hold my bitcoin?

For an ordinary software wallet, you control its keys and recovery backup. A coordinator does not receive custody of your funds merely because you participate in CoinJoin. However, software defects, a compromised computer, lost backups, and misleading payment requests remain possible risks. “Non-custodial” describes key control, not freedom from every dependency.

## How is Ginger related to Wasabi?

Ginger began as a Wasabi fork in 2024 and has its own releases and service configuration. The projects share history and some wallet concepts, but a feature or instruction in current Wasabi documentation may not exist in Ginger. Use documentation checked against your installed Ginger release. The official website links the project's source, downloads, and public channels.

## Can I request a feature or report a bug?

Use the issue links from the official repository and check for an existing report first. Describe the user problem and current release behavior without including secrets. A proposal or a merged development change is not proof that a feature is available in a published release.

## Do I need an account or my own full node?

Normal wallet creation uses local recovery information rather than a customer account. You do not need your own full node. Optional 2FA relies on its service, and buy/sell providers can require account or identity information. Do not extend the ordinary-wallet claim to every integrated feature.

## Is there a mobile, Lightning, or altcoin version?

The v2.0.26 release is a desktop on-chain Bitcoin wallet. It does not provide an Android or iOS wallet, Lightning invoice handling, or other cryptocurrency networks. Check official release links before trusting another app using a similar name.

## Can I send before the privacy bar reaches 100%?

Yes, when spendable funds and the normal send workflow are available. The privacy target is not a Bitcoin spending requirement. Review the payment's privacy implications. A hidden send action during recovery, a watch-only wallet, or unavailable inputs has a different cause.

## Is every coin with a high score anonymous?

No. The score reflects Ginger's local estimate, not complete knowledge of an analyst's observations. Address reuse, identity-linked purchases, input combinations, and later disclosures can create links. Lowering the target changes a classification without changing the blockchain.

## Why did my balance drop after CoinJoin?

Check mining and any coordinator fees, outputs routed to another wallet, and synchronization. CoinJoin can continue across several rounds, each with costs. Pause to inspect completed transactions if you do not understand the change.

## Does “no coordinator fee” mean free CoinJoin?

No. Successful on-chain transactions still have mining fees. Exemption depends on the input and round policy. It is not a promise that a whole wallet or every future transaction is free to CoinJoin.

## Can I choose exactly which coins join a round?

Ginger selects eligible inputs according to its CoinJoin settings. You can exclude coins and adjust the released selection preferences. Manual selection for a normal **Send** is a different workflow and does not guarantee an exact CoinJoin input set.

## Can several wallets be used?

You can add and load multiple wallets. Check which one is selected before receiving, sending, or changing CoinJoin settings. Suitable loaded wallets can be offered as CoinJoin destinations, but output routing resets after restart. Several wallets sharing a computer or later spending together are not automatically independent privacy identities.

## Can I choose a different coordinator in a discovery screen?

This manual covers Ginger's configured default service. It does not describe Wasabi's Nostr coordinator discovery or a coordinator-management screen, because that user workflow is not present in the released Ginger interface. Current service conditions can affect availability and accepted inputs.

## Will every exchange accept CoinJoined funds?

Ginger cannot guarantee another service's decision. Providers can apply their own policies, request information, or reject a transfer. Check the relevant provider's current policy before committing to a deposit or sale; a privacy score is not an acceptance certificate.

## Is my passphrase just a local login password?

For a Ginger software wallet, the original passphrase participates in BIP39 key derivation and protects its stored secret. Words recovered with a different passphrase describe a different wallet. Ginger cannot reset a forgotten passphrase without changing which keys you can recover.

## Can I see the recovery words again?

The creation screen warns that it will not show them again afterward. **Verify Recovery Words** checks the words you supply for an accessible wallet. It does not reveal a forgotten backup. If spending access remains but the backup is lost, create and verify a new wallet backup and transfer funds carefully.

## Does reinstalling remove 2FA or recover funds?

Reinstalling application files usually leaves separate wallet data in place. It does not recover a lost 2FA secret or forgotten passphrase. Preserve the data and recover with the original words and passphrase in a separate trusted environment if needed.

## Do receiving addresses expire?

A Bitcoin address does not expire because Ginger hides it or removes it from the awaiting-payment list. Its keys still matter. Use a new address for each payment to avoid linking receipts, and preserve your backup.

## Are labels or an xpub safe to post?

Labels can disclose private context. An extended public key can reveal many wallet addresses even though it cannot directly spend. Neither belongs in a routine public support report. A transaction ID also points to public amounts and addresses.

## Does Tor hide amounts? Does a hardware wallet hide transactions?

Neither hides the blockchain. Tor reduces network-address exposure; a hardware wallet separates signing keys from the desktop. CoinJoin addresses transaction-link analysis. Each tool has a different purpose, and later disclosures still matter.

## Are Silent Payments, multisig setup, or SLIP39 recovery supported here?

This release does not provide the user workflows documented for those features in newer or other wallets. Do not infer Ginger support from Wasabi documentation or from a bundled library's capabilities. Ordinary native SegWit receiving, optional Taproot receiving where offered, BIP39 recovery, and the documented hardware workflows are the relevant released paths.

## Where is my data and how do I delete a wallet?

Use the **Data Folder** search action to locate the actual directory. For local wallet removal, use **Wallet Settings** → **Tools** → **Delete Wallet** and read the confirmation. Back up first. Local deletion does not erase blockchain records, invalidate recovery words, or revoke already signed transactions.
