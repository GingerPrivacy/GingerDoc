# Getting Started

## Whats the officially supported operating systems?
- Windows 10 1607+
- Windows 11 22000+
- macOS 12.0+
- Ubuntu 22.04+
- Fedora 37+
- Debian 11+


## Is there an android/ios version?
No. Ginger’s features, like coinjoin, require considerable computational power, which are currently not replicable on a smartphone.

## Does ginger support altcoins?
There are countless reasons why it is the only logical choice to be bitcoin-only. With Bitcoin we have a once in a lifetime opportunity to manifest libre sound money. If we succeed, then an utmost beautiful agora of sovereign individuals may emerge. If we fail, then this will conjure up the most horrific Orwellian nightmare. There is no room for wasted time and energy, this great work requires our full attention. Any line of code written to support a random shitcoin takes away scarce developer time to work on real problems.


## What are the minimal requirements to run ginger?
Ginger runs in most operating systems with 64-bit architecture.

## Do i need to run tor?
All Ginger network traffic goes via Tor by default -there's no need to set up Tor by yourself. If you do already have Tor, and it is running, then Ginger will try to use that first.
You can turn off Tor in the Settings. Note that in this case you are still private, except when you coinjoin and when you broadcast a transaction. In the first case, the coordinator would know the links between your inputs and outputs based on your IP address. In the second case, if you happen to broadcast a transaction of yours to a full node that is spying on you, it will know the link between your transaction and your IP address.


## Why is it important to use a new address for every payment?
Addresses being used more than once is very damaging to privacy because that links together more blockchain transactions with proof that they were created by the same entity. The most private and secure way to use bitcoin is to send a brand new address to each person who pays you. After an address has received a coin, it should never be used again. Also, a brand new bitcoin address should be demanded from the recipient when sending bitcoin. Ginger has a user interface which discourages address reuse by removing from the GUI addresses which have received a coin.
It has been argued that the phrase "bitcoin address" was a bad name for this object because it implies it can be reused like an email address. A better name would be something like "bitcoin invoice".
Bitcoin isn't anonymous but pseudonymous, and the pseudonyms are bitcoin addresses. Avoiding address reuse is like throwing away a pseudonym after it has been used.


## What is the password used for?
The password you set is used as a 13th seed word (as described in BIP 39) and to encrypt the private key of the extended private key (as described in BIP 38) to get an encrypted secret which is stored on the computer.
Ginger Wallet stores only the BIP38 encrypted blob, so you'll need to type in the password to spend or coinjoin from the wallet.
The password will unlock your bitcoin to anyone who has access to the recovery words backup or the computer! If your backup gets compromised, this password is the only thing protecting your precious sats.
It is important to use a random and long password.
