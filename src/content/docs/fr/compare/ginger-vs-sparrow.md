---
title: "Ginger Wallet et Sparrow Wallet : confidentialité, contrôle et compromis"
description: "Comparer Ginger et Sparrow pour CoinJoin, réseau, matériel, multisig, contrôle des transactions et frais afin de choisir selon vos besoins."
doc_id: "compare.ginger-vs-sparrow"
lang: fr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet et Sparrow Wallet sont des portefeuilles Bitcoin open source pour ordinateur qui vous permettent de détenir vos propres clés. Les deux prennent en charge les paiements ordinaires, les portefeuilles matériels et la sélection réfléchie des coins.

**Ginger propose CoinJoin avec une connexion au coordinateur déjà configurée. Sparrow offre davantage de configurations de portefeuille et d'outils d'inspection et de signature des transactions, dont multisig.** Le choix dépend du parcours dont vous avez besoin et des responsabilités que vous êtes prêt à assumer.

Dernière vérification : **14 septembre 2026**. Versions étudiées : [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) et [Sparrow 2.5.4](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4). Cette comparaison porte sur les parcours documentés de ces versions ; elle ne mesure pas leur vitesse, leur fiabilité ni leur anonymat.

<span id="at-a-glance" data-ginger-heading="en-un-coup-dœil" aria-hidden="true"></span>

## En un coup d'œil

| Question | Ginger Wallet | Sparrow Wallet |
| --- | --- | --- |
| Qui contrôle les clés de signature ? | Vous, dans un portefeuille logiciel ou un appareil matériel compatible. | Vous, via les signataires logiciels ou matériels configurés. |
| Le mixage CoinJoin coordonné est-il intégré ? | Oui, avec une connexion au coordinateur fournie. | Il n'y a plus d'intégration Whirlpool actuelle ; d'autres outils restent disponibles. |
| Comment récupère-t-il l'historique ? | Filtres compacts et traitement local des blocs ; Tor est activé par défaut. | Serveur Electrum public, votre nœud Bitcoin Core ou serveur Electrum privé ; Tor est pris en charge. |
| Puis-je utiliser du matériel ? | Oui, appareils compatibles et parcours PSBT par fichier. | Oui, parcours compatibles USB, QR et carte SD. |
| Puis-je configurer multisig ? | Pas de configuration multisig générale dans l'interface documentée. | Oui, avec plusieurs signataires et un seuil de signature choisi. |
| Puis-je choisir chaque coin ? | Oui, avec Manual Control. | Oui, avec inspection et édition détaillées des transactions. |
| Quels frais prévoir ? | Minage ; CoinJoin peut aussi coûter coordinateur et petits restes. | Minage ; davantage d'entrées ou de sorties peut augmenter les coûts. |

Les sections suivantes expliquent ces différences et renvoient aux guides pertinents.

<span id="privacy-and-coinjoin-different-tools-for-different-links" data-ginger-heading="confidentialité-et-coinjoin--différents-outils-pour-différents-liens" aria-hidden="true"></span>

## Confidentialité et CoinJoin : différents outils pour différents liens

Un solde Bitcoin est composé de coins distincts, aussi appelés UTXO. En dépenser plusieurs ensemble peut associer leurs historiques. CoinJoin combine les entrées de participants dans une transaction pour rendre certains liens de propriété plus difficiles à déduire.

La [configuration publiée de Ginger](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) inclut la connexion au coordinateur. Après avoir sauvegardé un portefeuille logiciel et reçu des fonds confirmés, vous pouvez examiner [les commandes CoinJoin](/fr/using-ginger/coinjoin/) et participer. Le coordinateur organise sans détenir vos clés de signature. Disponibilité, fonds admissibles, frais et participation suffisante influencent toujours l'achèvement du tour.

Sparrow a retiré son client Whirlpool en [version 1.9.0](https://github.com/sparrowwallet/sparrow/releases/tag/1.9.0). Les anciennes instructions de mixage Whirlpool dans Sparrow ne décrivent pas la version actuelle.

Sparrow propose toujours des moyens de rendre les dépenses moins révélatrices. L'option transactionnelle **Privacy** peut construire une Stonewall avec une sortie supplémentaire égale au montant du paiement. Toutes les entrées appartiennent à votre portefeuille : cela crée de l'ambiguïté sans mélanger des fonds avec d'autres participants. Il faut des coins adaptés, assez de fonds et des types d'adresses correspondants ; les entrées et sorties supplémentaires peuvent augmenter le minage. Sparrow prend aussi en charge les codes de paiement BIP47 pour dériver de nouvelles adresses. Consultez [Spending Privately](https://sparrowwallet.com/docs/spending-privately.html).

Les deux prennent aussi en charge l'envoi PayJoin dans des parcours compatibles. PayJoin fait collaborer un destinataire à la construction du paiement, séparément d'un tour de mixage du coordinateur. Ginger exige un portefeuille logiciel pour cela. Consultez [le guide PayJoin Ginger](/fr/payments/payjoin-message-signing/) et [les mises à jour PayJoin Sparrow](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4).

Aucun de ces outils n'efface les registres d'une plateforme ni ne rend la blockchain privée. Combinaisons ultérieures, réutilisation d'adresses et informations partagées peuvent révéler de nouveaux liens. Consultez [confiance et limites CoinJoin](/fr/learn-coinjoin/trust-and-limits/).

<span id="network-privacy-who-learns-about-your-wallet" data-ginger-heading="confidentialité-réseau--qui-apprend-des-informations-sur-votre-portefeuille-" aria-hidden="true"></span>

## Confidentialité réseau : qui apprend des informations sur votre portefeuille ?

Ginger utilise des filtres compacts pour identifier les blocs potentiellement pertinents, puis traite les blocs téléchargés localement. Cela réduit le besoin de divulguer une liste d'adresses à un serveur public. Tor est inclus et activé par défaut pour les connexions ordinaires. Ginger propose aussi [un nœud Bitcoin Core facultatif](/fr/settings-network/full-node-fees/). Lisez [Tor et synchronisation](/fr/using-ginger/tor/) pour le modèle et ses limites.

Sparrow vous laisse choisir un serveur Electrum public, votre nœud Bitcoin Core ou un serveur Electrum privé. Un serveur public est commode, mais son opérateur peut associer les requêtes reçues et apprendre votre activité. Son [guide Quick Start](https://sparrowwallet.com/docs/quick-start.html) explique le compromis ; son [guide Bitcoin Core](https://sparrowwallet.com/docs/connect-node.html) couvre votre propre nœud.

Une infrastructure sous votre contrôle évite de divulguer ces requêtes à un opérateur public sans rapport avec vous. Sparrow prend aussi en charge Tor, y compris une adresse onion de serveur privé. Son [guide Best Practices](https://sparrowwallet.com/docs/best-practices.html) discute ces organisations.

Tor aide à protéger les métadonnées de connexion comme l'IP. Il ne cache pas le contenu au service destinataire. Votre propre nœud ne retire pas non plus les indices de propriété d'une transaction déjà publique. Choisissez ensemble les paramètres réseau et les habitudes de dépense.

<span id="hardware-wallets-and-multisig" data-ginger-heading="portefeuilles-matériels-et-multisig" aria-hidden="true"></span>

## Portefeuilles matériels et multisig

Les deux applications préparent des paiements tandis qu'un appareil compatible conserve les clés. Sparrow documente [les connexions USB](https://sparrowwallet.com/docs/connected-wallet.html), [la signature QR](https://sparrowwallet.com/docs/airgapped-wallet-qr.html) et [la signature par carte SD](https://sparrowwallet.com/docs/airgapped-wallet-sdcard.html). La méthode disponible dépend de l'appareil et du firmware.

Ginger prend en charge les paiements matériels ordinaires et [un parcours PSBT par fichier](/fr/hardware-wallets/psbt/). Un PSBT transporte une proposition et les informations nécessaires à une signature séparée. Sa présence ne prouve pas la compatibilité avec toutes les configurations : [le guide matériel Ginger](/fr/using-ginger/hardware-wallet/) décrit les limites de l'interface publiée.

Sparrow permet de créer des portefeuilles multisig exigeant un nombre choisi de signatures, par exemple deux sur trois. Cela donne de la flexibilité pour répartir le pouvoir de signature, avec davantage de responsabilités de configuration et de sauvegarde. Ginger ne propose pas de configuration générale comparable. Consultez [la création de portefeuille Sparrow](https://sparrowwallet.com/docs/quick-start.html#creating-your-first-wallet) pour les choix de politique.

CoinJoin Ginger utilise un logiciel pour signer les entrées. Un matériel compatible chargé peut plutôt recevoir les sorties. Cela ne signifie pas qu'il signe les entrées ou que les sorties atteignent l'objectif prévu. La destination est réinitialisée au redémarrage. Suivez [le guide de stockage à froid Ginger](/fr/hardware-wallets/exchange-to-cold-storage/) pour les conditions et ne saisissez jamais les mots matériels sur ordinateur pour CoinJoin.

<span id="transaction-control-and-everyday-use" data-ginger-heading="contrôle-des-transactions-et-utilisation-courante" aria-hidden="true"></span>

## Contrôle des transactions et utilisation courante

Les deux permettent d'étiqueter les fonds et de choisir des coins précis. Dans Ginger, **Wallet Coins** montre chaque coin, et **Send** → **Manual Control** permet de sélectionner les fonds et d'examiner le paiement résultant. Consultez [sélection et historique](/fr/payments/coin-control-history/).

Le diagramme et l'éditeur Sparrow exposent entrées, sorties, frais et détails de signature, avec des outils d'inspection avant diffusion. Son [guide des fonctions](https://sparrowwallet.com/features/) décrit ce contrôle. Il peut convenir aux personnes travaillant régulièrement avec des PSBT ou voulant examiner l'assemblage d'un paiement.

Dans les deux, vérifiez destinataire, entrées, monnaie rendue et frais avant autorisation. Même la sélection manuelle peut lier des fonds sans rapport dépensés ensemble.

<span id="fees-and-service-conditions" data-ginger-heading="frais-et-conditions-des-services" aria-hidden="true"></span>

## Frais et conditions des services

Les paiements on-chain ordinaires des deux coûtent des frais de minage. Taille et taux choisis déterminent le coût ; les sorties supplémentaires de confidentialité Sparrow peuvent agrandir le paiement.

Selon [les paramètres documentés de Ginger](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi/WabiSabi/Backend/WabiSabiConfig.cs), une entrée de **0.03 BTC ou moins** est exonérée de coordinateur. Au-dessus, elle paie normalement **0.3 % de sa valeur entière**, avec exonérations de remix admissibles. Le seuil s'applique par entrée, pas au solde total.

Par exemple, une entrée facturable de 0.10 BTC coûte 30,000 satoshis de coordinateur, plus le minage. CoinJoin peut aussi laisser un petit reste non retourné d'allocation. Vérifiez les conditions réelles et [le coût complet](/fr/using-ginger/annonset/) ; ces paramètres ne sont pas un devis futur. Les paiements Sparrow ordinaires n'achètent pas un mixage coordonné équivalent, donc leur minage seul n'est pas une comparaison CoinJoin à service égal.

InvisibleBit LLC, opérateur du coordinateur Ginger, publie des restrictions sur les lieux et la nationalité américains. Les conditions permettent aussi contrôles tiers et refus de coins. Lisez [les conditions actuelles](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt). Garder les clés ne garantit pas l'admission. Avec Sparrow, considérez la confidentialité et la disponibilité du nœud ou serveur utilisé.

<span id="which-fits-your-needs" data-ginger-heading="lequel-correspond-à-vos-besoins-" aria-hidden="true"></span>

## Lequel correspond à vos besoins ?

**Envisagez Ginger si la priorité est CoinJoin avec une connexion au coordinateur fournie**, et si frais et conditions vous conviennent. Commencez par [les premiers pas](/fr/getting-started/) et examinez CoinJoin après avoir établi votre sauvegarde.

**Envisagez Sparrow si la priorité est multisig, un parcours de signature matérielle précis ou un contrôle transactionnel détaillé.** Choisissez sa connexion serveur délibérément et vérifiez votre configuration exacte.

Les deux peuvent aussi servir des rôles différents : Ginger pour CoinJoin et Sparrow pour un portefeuille matériel distinct. Un transfert ordinaire coûte du minage et laisse une transaction visible ; combiner les sorties peut les relier à nouveau. La destination CoinJoin directe doit être compatible et chargée dans Ginger, pas seulement ouverte dans Sparrow. Gardez des sauvegardes indépendantes et lisez [dépenser après CoinJoin](/fr/learn-privacy/spending-after-coinjoin/) avant de combiner les fonds.
