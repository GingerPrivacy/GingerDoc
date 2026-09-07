---
doc_id: "backup-recovery.passphrase"
title: "What Is a Passphrase?"
description: "Understand your Ginger wallet passphrase, what to back up, and why recovery needs the original passphrase even when a different one opens an empty wallet."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: "Passphrase"
prev: false
next: false
---

> Reading level: Start here. This guide covers software wallets in Ginger v2.0.26. For a hardware wallet, follow the device maker's recovery instructions and keep its recovery words off your computer.

A passphrase is an optional secret you choose when creating a wallet. In Ginger, it protects access to the software wallet and is also part of its recovery information. To recover the same wallet, you need the original recovery words and the exact original passphrase, if you used one. Ginger cannot reset a forgotten passphrase.

## Do I have to use a passphrase?

When you create a wallet, Ginger shows **Add Passphrase** after **Confirm Recovery Words**. You can enter and confirm a passphrase, or leave both fields empty to create a wallet without one.

Without a passphrase, someone who obtains your recovery words can recover and spend your bitcoin. A passphrase adds another secret to protect, but forgetting it can leave you unable to recover even when you still have the words. Choose something difficult to guess that you can record and reproduce accurately. Avoid spaces at the beginning or end; Ginger's entry checks reject them.

## Is it the same as recovery words or a 2FA code?

No. Ginger generates twelve **Recovery Words** for a new software wallet. You choose the passphrase separately. Keep it separate from the numbered word list; do not enter it as an extra recovery word.

Your wallet name is only a local label. An authenticator code for two-factor authentication (2FA) is a separate application-startup check. Neither replaces the original words and passphrase when recovering a software wallet.

## What should I back up?

- The recovery words, in the displayed order.
- The exact original passphrase, including capitalization and characters, or a clear note that you created the wallet without one.

Keep this information private and recoverable after losing the computer. Write the words offline; avoid photographs, email and ordinary cloud notes. Keep the passphrase recoverable too. Storing it separately can protect against someone finding both secrets together, but make sure you can locate both when needed. Do not rely only on memory.

Recovery words restore access to bitcoin, but do not restore every label or setting. Keep existing wallet files while investigating a recovery problem. An automatic backup on the same computer does not protect against losing that computer.

## How do I check my backup?

While your software wallet is accessible, open **Wallet Settings** → **Tools**. Find **Verify Recovery Words** and choose **Verify**, then enter the words from your backup and complete the check.

This checks whether those words belong to the wallet. It does not display forgotten words or reset the passphrase. Also make sure your passphrase record is correct. If verification fails, check spelling and word order privately before relying on the backup.

## How do I use the passphrase during recovery?

These steps are for recovering a Ginger software wallet from its words. Preserve any existing wallet files until recovery is confirmed.

1. Open Ginger on a trusted computer. In the add-wallet screen, choose **Recover**.
2. Enter a distinct **Wallet Name** if prompted, so you can distinguish the recovered wallet from existing ones.
3. Enter the original **Recovery Words** in order.
4. At **Enter Passphrase**, enter and confirm the original passphrase. Leave the fields empty only if the original wallet had no passphrase. You are not choosing a new password here.
5. Let recovery and synchronization finish, then check your known transaction history. Synchronization means checking the Bitcoin network for transactions belonging to the wallet.

## Why is my recovered wallet empty?

During recovery from words, a different passphrase produces a different wallet. Ginger can therefore accept a mistyped passphrase and recover an empty wallet without reporting a wrong-passphrase error. This differs from opening an existing protected wallet file, where an incorrect passphrase is rejected.

Check the original passphrase, capitalization, spaces and keyboard layout. Also check that you selected the intended wallet and Bitcoin network, and that recovery has finished. An unfinished scan can show an incomplete balance. An empty balance by itself does not prove that the original bitcoin is gone.

If the expected history is still missing, preserve the originals and seek help through the [official Ginger project's support links](https://gingerwallet.io/). Share only non-secret details such as the application version and error text. Never send support your recovery words, passphrase or wallet files.

## Can I reset or replace a forgotten passphrase?

Ginger cannot reset it. Recovering with the same words and a new passphrase creates access to a different wallet; it does not change the passphrase of the original wallet or move its bitcoin.

If you can still send from the original wallet but cannot establish a usable recovery backup, create a new wallet, verify its backup and carefully transfer the funds while access remains. Preserve the old wallet until the transfer is confirmed. If you have neither spending access nor the necessary recovery information, support cannot recreate the missing secret.
