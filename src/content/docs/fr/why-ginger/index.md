---
title: "Pourquoi utiliser Ginger Wallet ?"
description: "Choisir les outils de confidentialité Bitcoin de Ginger selon les informations à protéger, tout en comprenant leurs limites."
doc_id: "learn-privacy.why-ginger"
lang: fr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger est un portefeuille open source pour les transactions Bitcoin sur la blockchain, utilisable sur ordinateur. Vous contrôlez les clés, pouvez recevoir à de nouvelles adresses et vérifier les paiements avant signature. CoinJoin, facultatif, aide à rendre plus difficile la déduction des liens entre transactions et propriétaires, tandis que Tor intégré aide à réduire l'exposition directe de l'adresse IP pour les connexions qui le traversent.

<span id="start-with-what-you-want-to-protect" data-ginger-heading="commencer-par-ce-que-vous-voulez-protéger" aria-hidden="true"></span>

## Commencer par ce que vous voulez protéger

- **Vos clés de dépense :** gardez une sauvegarde complète de récupération et protégez l'ordinateur utilisé pour signer. Un portefeuille matériel compatible peut conserver les clés de signature sur un appareil séparé.
- **Votre historique de paiements :** utilisez de nouvelles adresses, des étiquettes locales utiles et examinez quelles pièces sont dépensées. [Découvrez ce que révèle une transaction Bitcoin](/fr/using-ginger/privacy/).
- **Vos connexions :** gardez la protection Tor normale. Le navigateur externe a son propre comportement réseau, ses cookies et ses comptes.

Réception, envoi et CoinJoin sont distincts. Vous pouvez apprendre les paiements ordinaires d'abord et décider ensuite si CoinJoin répond à une préoccupation. Les tours achevés coûtent des frais et n'ont pas de délai garanti.

<span id="understand-the-limits" data-ginger-heading="comprendre-les-limites" aria-hidden="true"></span>

## Comprendre les limites

Les transactions restent publiques. Tor ne cache pas au service les informations soumises. Un prestataire d'achat peut associer commande et identité, et un score ne garantit ni anonymat ni acceptation par une plateforme.

Les services facultatifs ont aussi leurs flux spécifiques : commandes achat/vente divulguent les détails requis, 2FA utilise un service au démarrage et Secret Hunt peut envoyer références de transactions et preuves de propriété. [Où vont les informations du portefeuille](/fr/learn-privacy/information-sharing/) est une référence avancée facultative pour ces choix.

Commencez par [les habitudes quotidiennes de confidentialité](/fr/using-ginger/address-reuse/) et une routine compréhensible et récupérable. L'open source permet l'inspection ; il ne garantit pas l'absence de bugs dans chaque installation ni la sûreté d'un ordinateur compromis.
