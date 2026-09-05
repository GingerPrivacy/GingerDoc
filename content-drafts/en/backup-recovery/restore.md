---
doc_id: "backup-recovery.restore"
title: "Recover a Wallet or Missing Balance"
description: "Restore a Ginger wallet with recovery words and its original passphrase, or import a compatible wallet file without overwriting your only backup."
lang: "en-US"
verified_release: "v2.0.26"
---

# Recover a Wallet or Missing Balance

Recovery is a search for keys and their transaction history. Before starting, preserve the old computer's wallet files if you can access them. Work on copies and keep the originals until you have verified the recovered wallet.

## Recover from words

1. Install and verify Ginger on a trusted computer. In the add-wallet screen, choose **Recover**.
2. Provide a **Wallet Name** if requested. Use a distinct name to avoid confusing it with an existing wallet.
3. Enter the original recovery words in order. Ginger accepts valid English BIP39 sets of 12, 15, 18, 21, or 24 words. It checks the word set and checksum. A list of plausible words is not necessarily a valid backup.
4. At **Enter Passphrase**, enter the passphrase used to create the original wallet. Leave it empty only if the original had no passphrase. You are not setting a replacement password.
5. Let synchronization and recovery finish. Check known transactions and receiving addresses, not only the displayed fiat value. Some normal wallet actions are hidden during recovery.

Different passphrases derive different valid wallets. A typing mistake can therefore produce an empty wallet without a “wrong passphrase” error during seed recovery. Check capitalization, spaces, keyboard layout, and the original backup before concluding that funds disappeared.

## An apparently empty recovered wallet

First check that you selected the intended wallet and network. Mainnet and test networks have separate coins. Then check connection and recovery progress. If the application is still searching, an incomplete balance is not a final result.

If you used an unusually large number of unused receiving addresses before a paid address, **Advanced Recovery Options** offers **Minimum Gap Limit:**. The released recovery screen defaults to 114. Increasing it can extend the search, at the cost of more work and time; it does not repair wrong words, a wrong passphrase, or an incompatible wallet format. Use a larger value only when your address history gives a reason.

A wallet originally created by another application can use different address types, accounts, or derivation paths. BIP39 words alone do not guarantee that every wallet will discover every account. For Ginger's standard mainnet accounts, native SegWit uses `m/84'/0'/0'` and Taproot uses `m/86'/0'/0'`. Advanced recovery in another application must support the relevant account and address type. Keep hardware recovery on a hardware device whenever possible.

Ginger does not offer SLIP39 share recovery in this release. Do not enter a collection of recovery shares as if it were one BIP39 word list.

## Import a file

Choose **Import File** in the add-wallet screen and select a compatible `.json` file. Ginger may ask for a different name when one is already in use. A random JSON file, a transaction PSBT, or an arbitrary xpub pasted into a text file is not a compatible wallet backup.

Use the original passphrase to open a protected imported software wallet. A file encrypted through 2FA is not equivalent to an unencrypted portable backup. Preserve its related files and credentials, or recover from words and the original passphrase instead. Importing a hardware export creates a wallet that still depends on the device for signing.

## What recovery does not restore

The blockchain cannot restore private labels, all application settings, or provider order metadata. Preserve the matching `.attr` file when those matter. Do not overwrite newly recovered files with old metadata while Ginger is running. If you need help restoring sidecar data, work from copies and describe the file names and version without sharing their contents publicly.

## If something is missing

| What you still have | Practical next step |
| --- | --- |
| Words and the original passphrase | Recover on a trusted installation |
| Accessible wallet, but missing or invalid words | Create a new backed-up wallet and transfer funds while access remains |
| Wallet file and its original credentials | Try importing a copy; preserve all accompanying files |
| Words but a forgotten non-empty passphrase | Ginger cannot reset it; do not confuse an empty recovered wallet with recovery success |
| Hardware device but no reliable backup | Follow the device maker's backup-check process before risking the device |
| Neither spending access nor usable recovery information | Support cannot manufacture the missing keys |

Never give a “recovery helper” your words, passphrase, private keys, or wallet file. A legitimate diagnosis starts with non-secret details such as application version, network, and error text.
