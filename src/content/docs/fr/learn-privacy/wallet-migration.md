---
doc_id: "learn-privacy.wallet-migration"
title: "Passer à Ginger sans exposer davantage d'historique"
description: "Comparer la restauration des mêmes clés Bitcoin, la connexion matérielle à une autre application et le transfert vers de nouvelles clés, sans supposer effacées les divulgations passées."
lang: fr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Comprenez d'abord les nouvelles adresses de réception et la vérification ordinaire des paiements.

Changer de logiciel change l'application utilisée. Cela ne change pas nécessairement clés, adresses ou informations déjà connues d'un service. Décidez si vous récupérez l'accès, changez par commodité ou créez une séparation future.

<span id="choose-the-kind-of-move" data-ginger-heading="choisir-le-type-de-migration" aria-hidden="true"></span>

## Choisir le type de migration

| Choix | Ce qui reste identique | Ce qui change |
| --- | --- | --- |
| Restaurer les mêmes mots, phrase secrète et compte compatible | Clés et adresses correspondantes | Application qui les analyse et gère ; notes locales parfois manquantes |
| Connecter le même compte matériel à Ginger | Clés matérielles et adresses du compte | Application ordinateur détenant ses données publiques |
| Créer de nouvelles clés et transférer les fonds | L'historique reste sur la blockchain | Clés/adresses futures ; sauvegarde distincte et transfert on-chain requis |

Restaurer le même portefeuille ne déplace pas le bitcoin, donc ne coûte pas de frais réseau à lui seul. Transférer on-chain vers de nouvelles clés coûte des frais et crée une transaction visible. Ce sont des opérations différentes, même si les deux finissent avec un solde affiché dans Ginger.

<span id="understand-what-an-xpub-exposes" data-ginger-heading="comprendre-ce-quexpose-une-xpub" aria-hidden="true"></span>

## Comprendre ce qu'expose une xpub

Une clé publique étendue, souvent appelée xpub, permet de dériver une branche d'adresses publiques sans disposer de leur pouvoir normal de signature. Une xpub de compte révèle généralement plus d'une adresse de réception, dont les adresses futures dérivées. Sa portée dépend de sa place dans l'arbre ; elle ne révèle pas tous les autres comptes à dérivation renforcée. [BIP32 : portefeuilles déterministes hiérarchiques](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

Une ancienne application de portefeuille, un service de suivi de placements ou un outil de comptabilité a pu recevoir une xpub ou des requêtes d'adresses. Supprimer l'application ne révoque pas les copies ailleurs. Garder le même compte peut permettre à cet observateur de reconnaître aussi l'activité future. Tor peut masquer une connexion IP directe ; il ne peut pas faire oublier au service destinataire les informations de portefeuille que vous lui avez soumises.

Si vous ignorez ce qu'un service a reçu, considérez cela comme incertain. Ne chargez pas une xpub dans un « vérificateur de confidentialité » en ligne pour l'étudier.

<span id="restore-access-to-an-existing-software-wallet" data-ginger-heading="restaurer-un-portefeuille-logiciel-existant" aria-hidden="true"></span>

## Restaurer un portefeuille logiciel existant

1. Préservez sauvegardes et données d'origine avant de changer l'installation. Une migration ne justifie pas de supprimer vos seuls fichiers fonctionnels.
2. Utilisez la récupération Ginger avec mots et phrase exacte d'origine. Confirmez format, types d'adresses et compte compatibles. Un mnémonique valide ne suffit pas.
3. Laissez finir l'analyse. Comparez transactions connues ou adresse de vos données privées avant de conclure qu'un affichage vide signifie une perte.
4. Examinez étiquettes restaurées, paramètres CoinJoin et confidentialité. Les mots récupèrent les clés, pas toutes les notes ni réglages de l'ancienne application.
5. Vérifiez CoinJoin automatique et destination avant de laisser les fonds sans surveillance. Évitez deux applications dépensant les mêmes coins simultanément.

Une phrase incorrecte peut produire un autre portefeuille valide. Ne changez pas les réglages au hasard, n'envoyez pas de fonds tests à un compte vide inexpliqué et ne donnez pas les mots à un inconnu d'assistance pour résoudre le décalage.

<span id="use-the-same-hardware-wallet-in-ginger" data-ginger-heading="utiliser-le-même-matériel-dans-ginger" aria-hidden="true"></span>

## Utiliser le même matériel dans Ginger

Ajoutez l'appareil via **Hardware Wallet**, suivez les demandes PIN/phrase prises en charge et vérifiez une adresse sur son propre écran. Confirmez le bon compte dans Ginger. L'import normal de cette version utilise SegWit natif ; un autre logiciel pouvait afficher un autre compte ou type d'adresse.

La connexion donne à Ginger les données publiques tandis que les clés restent sur l'appareil. Elle n'annule pas les données partagées par l'application compagnon du fabricant. Ouvrir le compte dans une autre application en lecture seule révèle parfois plus d'historique même si aucune ne peut dépenser sans matériel.

N'importez pas les mots de récupération du portefeuille matériel sur l'ordinateur pour contourner une connexion ou un compte non pris en charge. Consultez la procédure prise en charge par l'appareil si le compte ne peut pas être représenté correctement.

<span id="create-a-new-separation-for-future-activity" data-ginger-heading="créer-une-nouvelle-séparation-future" aria-hidden="true"></span>

## Créer une nouvelle séparation future

Si l'objectif exige de nouvelles clés, créez et vérifiez portefeuille et sauvegarde nouveaux. Obtenez une nouvelle destination et testez avec un petit montant si ce n'est pas urgent. Confirmez réception et signature ou récupération avant de déplacer le reste prévu.

Examinez les entrées de chaque transfert. Dépenser tous les anciens coins ensemble peut relier des activités séparées. Un transfert ordinaire relie aussi les historiques des entrées et sorties. De nouvelles clés seules ne cachent pas ce lien ; une procédure CoinJoin réfléchie peut répondre à certains objectifs de confidentialité des liens entre transactions, sous réserve de frais, d'admissibilité et de dépenses ultérieures.

Décidez quand et comment cesser les anciennes adresses. Mettez à jour vos instructions, gardez des données pour les paiements tardifs et ne supposez pas une adresse inactive parce qu'elle a été retirée d'un site. Gardez les informations de récupération des portefeuilles pouvant encore recevoir.

<span id="when-the-move-is-urgent" data-ginger-heading="quand-la-migration-est-urgente" aria-hidden="true"></span>

## Quand la migration est urgente

Une xpub exposée pose surtout un problème de confidentialité. Des secrets de signature exposés posent un problème immédiat de contrôle des fonds. Si un attaquant peut déjà dépenser, privilégiez une destination fiable avec de nouvelles clés plutôt qu'un long processus de confidentialité. Changer le mot de passe de l'application ou placer une seed exposée dans un nouvel appareil ne révoque pas les clés copiées.

Après migration, examinez [les exemples de dépenses](/fr/learn-privacy/spending-after-coinjoin/) et [le partage d'informations](/fr/learn-privacy/information-sharing/). L'objectif durable est de comprendre ce qui reste connu et d'éviter les nouvelles divulgations inutiles.
