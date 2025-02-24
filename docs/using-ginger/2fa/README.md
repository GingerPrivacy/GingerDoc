# 2FA

## What is the default 2FA state of Gingerwallet?
By default, GingerWallet operates without 2FA (Two-Factor Authentication), allowing users to use the wallet anonymously.


## How do i enable 2FA in Gingerwallet?
To enable 2FA:
- Go to Settings -> Security
- Toggle the 2FA switch to "On"
- A QR code will appear in a pop-up window for the next steps.

To use 2FA features in GingerWallet, you need to enable Tor. Since GingerWallet now operates with a new working folder, it's recommended to delete the old Wasabi working folder if it's no longer in use, as the files stored there are unencrypted.

**Important: Delete your old working folder only if the GingerWallet folder is in the same location and your updated app is functioning properly.**

**To delete old working folder on different systems:**
- Windows: /Users/{your username}/AppData/Roaming/WalletWasabi/Client
- Linux: /home/{your username}/.walletwasabi/client
- macOS: /Users/{your username}/.walletwasabi/client

You cannot manually add 2FA to your auth folder using only a QR code.

## How do i set up 2FA using an authenticator app?

**Once the QR code appears:**
- Scan it using a mobile authenticator app like Google Authenticator, 2FAS Auth, Aegis Authenticator, FreeOTP.
- Make sure your authenticator app supports sha256 and 8 digit authentication if your are not using any from the previous examples
- Enter the current PIN code displayed in your authenticator app into the input field below the QR code.
- After verifying the PIN code, 2FA will be activated.


## What is the purpose of the 2FA.gws file?
The **2fa_info.gws file** is an encrypted file that ensures the security of your wallet. Once 2FA is activated, this file is created on your device, and all existing and future wallets will be encrypted automatically.


## Do i need to restart the application after enabling 2FA?
Yes, after activating 2FA, GingerWallet must be restarted for the changes to take effect.


## How does the login process change after enabling 2FA?
**After restarting the application:**
A pop-up window will request the current PIN code from your authenticator app at startup.
Enter the PIN code, and upon successful verification, the system will decode and load your wallet files.


## How do i disable 2FA?
**To disable 2FA:**
- Navigate to Settings -> Security
- Toggle the 2FA switch to "Off."
- The system will deactivate 2FA and decode all wallet files.


## What should i do if i change devices or lose data?
**In case of a device change or data loss:**
- Reinstall GingerWallet on the new device.
- Restore your wallets using the securely stored seed words.
- You will need to set up 2FA again (if desired).


## What are the security best practices for using Gingerwallet?
- Always store your seed words in a secure, offline location.
- If you lose your phone or suspect unauthorized access, immediately create a new wallet.
- Transfer your assets to the new wallet and invalidate the old wallet's seed words.


## Does Gingerwallet store any personal information?
No, GingerWallet operates anonymously. There is no user account or personal data storage. All security operations, including encryption, are performed locally on your device.


## What happens if i lose access to my authenticator app?
If you lose access to your authenticator app, you will need to restore your wallet using the seed words and set up a new 2FA process. Ensure your seed words are securely stored to avoid losing access to your funds.


## How does Gingerwallet ensure security with 2FA?
The combination of the encrypted **2fa_info.gws file** and the PIN code from the authenticator app ensures that your wallet remains secure. Proper storage of seed words is critical for recovering your wallet in case of device loss or reinstallation.

## How can i recover my labels and extra options for my wallet if i've lost the 2fa key?
If you've lost your 2FA key, you can still recover your labels and extra options with minimal manual work. Follow these steps:

1. **Move the attr file:** First, locate the attr file and move it to a separate folder for safekeeping, as you’ll need it later.
2. **Recover the wallet:** Use the recovery process in the application to restore your wallet.
3. **Close the application:** Once the recovery process is complete, close the wallet application.
4. **Copy back the attr file:** Replace the newly created attr file with the one you saved earlier by copying it back into its original location.
5. **Restart the application:** Reopen the wallet application, and your wallet should be fully restored, even without the 2FA key.

This process allows you to recover the labels, extra options, and other settings.

## Why does Ginger Wallet require an 8-digit 2FA code?
Ginger Wallet requires an 8-digit 2FA code for enhanced security. An 8-digit code is significantly harder to crack compared to shorter codes, providing better protection against unauthorized access.

## What should I do if my authenticator app only provides 6-digit codes?
If your authenticator app only provides 6-digit codes, you need to switch to an authenticator that supports 8-digit codes, as required by Ginger Wallet for security reasons.
