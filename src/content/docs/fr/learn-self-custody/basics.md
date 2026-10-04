---
doc_id: "learn-self-custody.basics"
title: "Garder ses clés Bitcoin : sauvegardes, phrases secrètes et matériel"
description: "Comprendre qui peut dépenser votre bitcoin, ce qui rend une sauvegarde complète et les différences entre les portefeuilles logiciels et matériels Ginger."
lang: fr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Niveau de lecture : commencez ici. Les étapes essentielles viennent d'abord ; les références avancées sont facultatives.

La garde de vos propres clés signifie détenir les informations nécessaires pour dépenser votre bitcoin. Vous approuvez sans demander à un fournisseur de compte de libérer l'argent. En contrepartie, protégez ces informations, gardez une sauvegarde utilisable et vérifiez chaque paiement.

<span id="keys-records-and-recovery" aria-hidden="true"></span>

## Clés, enregistrements et récupération

Le réseau Bitcoin conserve un registre public des transactions. Votre portefeuille utilise des clés secrètes pour autoriser les dépenses des parts que vous contrôlez. Installer l'application sur un ordinateur de remplacement ne recrée pas ces secrets ; d'où l'importance de la sauvegarde.

Pour un portefeuille logiciel Ginger, mots et phrase d'origine recréent les clés. Les fichiers locaux préservent aussi le contexte, comme étiquettes et paramètres. Authentificateur, PIN matériel et fichier copié ont des rôles différents ; aucun ne doit être supposé remplacer les mots.

<span id="the-passphrase-changes-the-wallet" aria-hidden="true"></span>

## La phrase secrète change le portefeuille

Ginger utilise une phrase secrète BIP39 avec les mots. Une phrase différente produit d'autres clés. Une récupération peut donc réussir tout en affichant un portefeuille vide après une faute de frappe. [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) définit cette relation.

Notez si vous en avez utilisé une et conservez-la exactement. Choisissez une protection récupérable plutôt qu'un secret complexe seulement mémorisé. Rangez les instructions pour pouvoir distinguer plus tard la phrase du portefeuille de la connexion ordinateur ou du code d'authentification.

<span id="software-versus-hardware" aria-hidden="true"></span>

## Logiciel ou matériel

| Configuration | Lieu de signature | Responsabilité pratique |
| --- | --- | --- |
| Portefeuille logiciel Ginger | Sur l'ordinateur avec son secret disponible | Protéger ordinateur et récupération ; la signature doit être disponible pour CoinJoin automatique |
| Portefeuille matériel via Ginger | Sur l'appareil pour les opérations prises en charge | Vérifier les détails sur l'appareil et préserver sa sauvegarde fabricant |
| Enregistrement en lecture seule sans signataire | Ne peut autoriser seul une dépense | Protéger les données publiques sensibles et garder accès à un signataire distinct |

Le matériel réduit l'exposition aux logiciels malveillants de l'ordinateur, mais vous pouvez approuver un paiement malveillant sans vérifier son écran. Importer sa seed sur ordinateur change la sécurité : les clés y sont désormais exposées.

<span id="recovery-is-part-of-the-setup" aria-hidden="true"></span>

## La récupération fait partie de la configuration

Avant de compter sur le portefeuille, vérifiez que vous trouvez et comprenez sa sauvegarde. Pour un logiciel Ginger accessible, **Verify Recovery Words** vérifie les mots fournis. Gardez aussi la phrase d'origine. Sur matériel, utilisez la vérification appropriée du fabricant sans saisir la seed sur l'ordinateur.

Gardez davantage que les fichiers de l'application. L'installateur se télécharge à nouveau ; un secret manquant ne se retrouve pas sur le site du projet. Envisagez panne de disque, appareil perdu et accès au lieu de sauvegarde. Les [conseils de sécurité de Bitcoin.org](https://bitcoin.org/en/secure-your-wallet) traitent sauvegarde et protection d'appareil comme complémentaires.

<span id="evaluate-a-wallet-with-evidence" aria-hidden="true"></span>

## Évaluer un portefeuille avec des preuves

Utilisez les versions officielles, vérifiez les signatures et lisez les limites des fonctions prévues. L'open source permet l'inspection ; il ne prouve pas l'audit de chaque binaire ou dépendance. Des listes externes comme [Ginger sur Bitcoin.org](https://bitcoin.org/en/wallets/desktop/windows/ginger/) et [WalletScrutiny](https://walletscrutiny.com/desktop/gingerwallet/) apportent du contexte. Vérifiez leur portée et date au lieu d'en faire une garantie de votre version.

Ginger réunit récupération logicielle, intégration matérielle et confidentialité sur ordinateur. Lecture avancée facultative : [établir une routine de sécurité récupérable](/fr/learn-self-custody/security-routine/), dont les réponses aux adresses, données ou clés exposées.
