---
doc_id: "learn-coinjoin.trust-and-limits"
title: "À quoi faites-vous confiance avec CoinJoin ?"
description: "Distinguer le contrôle des clés Bitcoin, les hypothèses de confidentialité CoinJoin, la disponibilité du coordinateur, l'indépendance des participants et la vérification du logiciel."
lang: fr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Lisez d'abord l'explication simple de CoinJoin.

Avec Ginger, vous gardez l'autorité de signature au lieu de déposer les fonds dans un solde contrôlé par un mixeur. Cela répond à une question essentielle de garde. Confidentialité, disponibilité et intégrité du logiciel soulèvent d'autres questions.

Avant de participer, définissez l'objectif : qu'un destinataire sache moins sur vos autres paiements, ou réduire les liens entre dépenses futures et réception connue publiquement. CoinJoin aide la confidentialité des liens transactionnels, mais ne supprime pas les informations déjà obtenues auprès de vous.

<span id="four-separate-questions" data-ginger-heading="quatre-questions-distinctes" aria-hidden="true"></span>

## Quatre questions distinctes

| Question | Protection et hypothèse | Ce qu'elle n'établit pas |
| --- | --- | --- |
| Qui peut dépenser ? | Votre portefeuille signe ses entrées après vérification de la transaction proposée. Le coordinateur n'a pas besoin de vos mots de récupération. | Protection contre les clés volées, logiciels malveillants ou transaction autorisée volontairement vers une mauvaise destination |
| Qui peut relier entrées et sorties ? | WabiSabi utilise des justificatifs anonymes pour masquer les relations entre enregistrements. Les données publiques et autres observations restent. | Garantie inconditionnelle contre un coordinateur malveillant, des participants complices ou des informations extérieures |
| Qui peut empêcher la progression ? | Une participation réussie exige coordinateur, réseau et assez de participants coopératifs pour terminer. | Heure d'achèvement réservée ou droit de participer à chaque tour proposé |
| Quel logiciel est-ce que j'utilise ? | L'open source permet l'inspection ; vérifier le téléchargement aide à établir origine et intégrité du fichier obtenu. | Preuve que chaque compilation est sans bugs, que l'ordinateur n'est pas compromis ou qu'un service distant exécute exactement le code publié |

L'[article WabiSabi, section 7](https://cryptoeconomicsystems.pubpub.org/pub/ficsor-wabisabi-coordinated/release/3) distingue confidentialité, attaques actives et prévention du vol. Ce guide applique cette distinction aux décisions utilisateur ; ce n'est pas un audit de sécurité du portefeuille ou coordinateur installé.

<span id="consider-the-observer" data-ginger-heading="considérer-lobservateur" aria-hidden="true"></span>

## Considérer l'observateur

Un observateur passif de blockchain voit entrées, sorties, montants et dépenses ultérieures. Il peut appliquer des heuristiques et combiner ces données avec d'autres informations. Un marchand connaît aussi sa facture et son client. Une plateforme connaît le retrait ou dépôt qu'elle traite.

Un participant connaît ses propres entrées et sorties, éliminant certaines possibilités. Un coordinateur traite les enregistrements et peut observer la chronologie des échanges du protocole ; s'il est activement malveillant, il peut influencer qui participe et si les tours aboutissent. Ce sont des capacités différentes : une protection limitée à l'observation de la chaîne publique ne protège pas nécessairement contre toutes.

<span id="apparent-participants-are-not-independent-people" data-ginger-heading="les-participants-apparents-ne-sont-pas-des-personnes-indépendantes" aria-hidden="true"></span>

## Les participants apparents ne sont pas des personnes indépendantes

Une attaque Sybil signifie qu'un acteur apparaît comme plusieurs participants. S'il contrôle la majorité de l'activité autour d'une cible, il peut exclure ses propres coins des possibilités considérées. Une transaction peut sembler active tout en apportant moins d'incertitude à cet observateur qu'à un observateur non informé.

De vraies entrées et les frais de minage créent des contraintes économiques. Ils ne permettent pas à un utilisateur normal de vérifier l'identité indépendante de chaque participant. Nombres d'entrées ou sorties, volume et score d'anonymat ne constituent donc pas un recensement de personnes indépendantes.

Les grands tours peuvent offrir plus de possibilités, mais montants, connaissances des participants et transactions ultérieures comptent toujours. Aucun nombre de tours ni objectif ne prouve qu'un attaquant n'a rien appris.

<span id="when-the-coordinator-or-connection-is-unavailable" data-ginger-heading="quand-le-coordinateur-ou-la-connexion-manque" aria-hidden="true"></span>

## Quand le coordinateur ou la connexion manque

Les coins contrôlés par vos clés ne deviennent pas une dette du coordinateur envers vous. Une tentative échouée avant diffusion ne les lui transfère pas à elle seule. Pendant un tour actif, Ginger peut cependant devoir finir un travail critique avant de rendre les coins disponibles pour une autre action ; utilisez pause et suivez l'état actuel.

Si CoinJoin ne peut continuer, mettez en pause et examinez la cause. Un envoi ordinaire exige toujours un moyen de signature disponible, des coins dépensables, des informations synchronisées et un moyen de diffuser. Une panne du coordinateur ne justifie pas de jeter les sauvegardes ou d'envoyer les mots de récupération à un service de remplacement. La 2FA facultative de Ginger a sa propre dépendance au service au démarrage normal ; conservez les mots de récupération et la phrase secrète d'origine de façon à pouvoir les récupérer indépendamment du service.

Un refus ou un tour échoué n'est pas en soi une preuve d'attaque ou un jugement sur votre identité. Inversement, un tour réussi ne certifie pas l'honnêteté du coordinateur. Préservez les données privées pertinentes si un problème concret doit être étudié.

<span id="decisions-you-can-make" data-ginger-heading="décisions-possibles" aria-hidden="true"></span>

## Décisions possibles

1. Obtenez Ginger depuis sa distribution officielle et vérifiez le téléchargement. Utilisez des mises à jour authentifiées et protégez la machine signataire.
2. Gardez Tor activé pour la confidentialité réseau prévue. Il ne masque pas les informations que vous soumettez explicitement au service destinataire.
3. Vérifiez portefeuille, destination des sorties, coins admissibles et coûts. N'augmentez pas les limites simplement pour faire taire une erreur inexpliquée.
4. Gardez des informations de récupération indépendantes. Ne donnez jamais mots, phrase secrète ou clés privées au coordinateur ou à l'assistance pour « débloquer » un tour.
5. Examinez résultat et dépenses ultérieures. Une adresse neuve et un score élevé ne peuvent pas annuler une nouvelle divulgation à un destinataire identifié.

Votre propre nœud Bitcoin est utile pour ses véritables rôles, comme fournir des blocs ou estimations de frais lorsqu'il est configuré. Il ne remplace pas le coordinateur CoinJoin et n'établit pas l'indépendance des participants. Un portefeuille matériel isole les clés mais ne privatise pas le graphe transactionnel.

Pour le modèle de transaction essentiel, lisez [CoinJoin expliqué](/fr/learn-coinjoin/explained/). Pour son adéquation à un but précis, lisez [quand CoinJoin est utile](/fr/learn-coinjoin/when-to-use/). Transformez les affirmations fortes en questions à examiner : quel observateur, quelles hypothèses, quelle version et quelles preuves ?
