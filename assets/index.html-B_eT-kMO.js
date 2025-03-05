import{_ as t,c as s,a,o as i}from"./app-CSNMAX7Q.js";const n={};function r(o,e){return i(),s("div",null,e[0]||(e[0]=[a('<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h1><h2 id="whats-the-officially-supported-operating-systems" tabindex="-1"><a class="header-anchor" href="#whats-the-officially-supported-operating-systems"><span>Whats the officially supported operating systems?</span></a></h2><ul><li>Windows 10 1607+</li><li>Windows 11 22000+</li><li>macOS 12.0+</li><li>Ubuntu 22.04+</li><li>Fedora 37+</li><li>Debian 11+</li></ul><h2 id="is-there-an-android-ios-version" tabindex="-1"><a class="header-anchor" href="#is-there-an-android-ios-version"><span>Is there an android/ios version?</span></a></h2><p>No. Ginger’s features, like coinjoin, require considerable computational power, which are currently not replicable on a smartphone.</p><h2 id="does-ginger-support-altcoins" tabindex="-1"><a class="header-anchor" href="#does-ginger-support-altcoins"><span>Does ginger support altcoins?</span></a></h2><p>There are countless reasons why it is the only logical choice to be bitcoin-only. With Bitcoin we have a once in a lifetime opportunity to manifest libre sound money. If we succeed, then an utmost beautiful agora of sovereign individuals may emerge. If we fail, then this will conjure up the most horrific Orwellian nightmare. There is no room for wasted time and energy, this great work requires our full attention. Any line of code written to support a random shitcoin takes away scarce developer time to work on real problems.</p><h2 id="what-are-the-minimal-requirements-to-run-ginger" tabindex="-1"><a class="header-anchor" href="#what-are-the-minimal-requirements-to-run-ginger"><span>What are the minimal requirements to run ginger?</span></a></h2><p>Ginger runs in most operating systems with 64-bit architecture.</p><h2 id="do-i-need-to-run-tor" tabindex="-1"><a class="header-anchor" href="#do-i-need-to-run-tor"><span>Do i need to run tor?</span></a></h2><p>All Ginger network traffic goes via Tor by default -there&#39;s no need to set up Tor by yourself. If you do already have Tor, and it is running, then Ginger will try to use that first. You can turn off Tor in the Settings. Note that in this case you are still private, except when you coinjoin and when you broadcast a transaction. In the first case, the coordinator would know the links between your inputs and outputs based on your IP address. In the second case, if you happen to broadcast a transaction of yours to a full node that is spying on you, it will know the link between your transaction and your IP address.</p><h2 id="why-is-it-important-to-use-a-new-address-for-every-payment" tabindex="-1"><a class="header-anchor" href="#why-is-it-important-to-use-a-new-address-for-every-payment"><span>Why is it important to use a new address for every payment?</span></a></h2><p>Addresses being used more than once is very damaging to privacy because that links together more blockchain transactions with proof that they were created by the same entity. The most private and secure way to use bitcoin is to send a brand new address to each person who pays you. After an address has received a coin, it should never be used again. Also, a brand new bitcoin address should be demanded from the recipient when sending bitcoin. Ginger has a user interface which discourages address reuse by removing from the GUI addresses which have received a coin. It has been argued that the phrase &quot;bitcoin address&quot; was a bad name for this object because it implies it can be reused like an email address. A better name would be something like &quot;bitcoin invoice&quot;. Bitcoin isn&#39;t anonymous but pseudonymous, and the pseudonyms are bitcoin addresses. Avoiding address reuse is like throwing away a pseudonym after it has been used.</p><h2 id="what-is-the-password-used-for" tabindex="-1"><a class="header-anchor" href="#what-is-the-password-used-for"><span>What is the password used for?</span></a></h2><p>The password you set is used as a 13th seed word (as described in BIP 39) and to encrypt the private key of the extended private key (as described in BIP 38) to get an encrypted secret which is stored on the computer. Ginger Wallet stores only the BIP38 encrypted blob, so you&#39;ll need to type in the password to spend or coinjoin from the wallet. The password will unlock your bitcoin to anyone who has access to the recovery words backup or the computer! If your backup gets compromised, this password is the only thing protecting your precious sats. It is important to use a random and long password.</p>',15)]))}const h=t(n,[["render",r],["__file","index.html.vue"]]),l=JSON.parse('{"path":"/getting-started/","title":"Getting Started","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Whats the officially supported operating systems?","slug":"whats-the-officially-supported-operating-systems","link":"#whats-the-officially-supported-operating-systems","children":[]},{"level":2,"title":"Is there an android/ios version?","slug":"is-there-an-android-ios-version","link":"#is-there-an-android-ios-version","children":[]},{"level":2,"title":"Does ginger support altcoins?","slug":"does-ginger-support-altcoins","link":"#does-ginger-support-altcoins","children":[]},{"level":2,"title":"What are the minimal requirements to run ginger?","slug":"what-are-the-minimal-requirements-to-run-ginger","link":"#what-are-the-minimal-requirements-to-run-ginger","children":[]},{"level":2,"title":"Do i need to run tor?","slug":"do-i-need-to-run-tor","link":"#do-i-need-to-run-tor","children":[]},{"level":2,"title":"Why is it important to use a new address for every payment?","slug":"why-is-it-important-to-use-a-new-address-for-every-payment","link":"#why-is-it-important-to-use-a-new-address-for-every-payment","children":[]},{"level":2,"title":"What is the password used for?","slug":"what-is-the-password-used-for","link":"#what-is-the-password-used-for","children":[]}],"git":{},"filePathRelative":"getting-started/README.md"}');export{h as comp,l as data};
