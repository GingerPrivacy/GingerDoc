---
doc_id: "learn-privacy.spending-after-coinjoin"
title: "Dépenser après CoinJoin : exemples détaillés"
description: "Comprendre la sélection des coins, la monnaie rendue, la consolidation et les informations visibles après CoinJoin à travers des exemples de paiement Bitcoin."
lang: fr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Comprenez d'abord les nouvelles adresses de réception et la vérification ordinaire des paiements.

CoinJoin change l'incertitude sur les liens entre entrées et sorties. La transaction suivante peut ajouter des informations. Avant de payer, déterminez quels coins le destinataire ou un observateur peut déjà vous associer et ce que le paiement proposé révèle.

Les exemples utilisent des montants fictifs en satoshis. Les frais servent aux calculs, pas de cotation réseau. Un coin est une sortie non dépensée, ou UTXO ; ce n'est ni un portefeuille ni une adresse.

<span id="start-with-the-payment-you-need-to-make" data-ginger-heading="commencer-par-le-paiement-nécessaire" aria-hidden="true"></span>

## Commencer par le paiement nécessaire

Dans Ginger, ouvrez **Wallet Coins** pour voir montants, étiquettes et confidentialité. Pour un paiement ordinaire, **Send** → **Manual Control** choisit les candidats. Cela ne remplace pas la vérification finale : inspectez entrées réellement utilisées, montant envoyé, monnaie rendue et frais avant **Confirm**.

La sélection automatique et les suggestions peuvent aussi aider. Le contrôle manuel est utile lorsque vous savez ce que le portefeuille ignore, comme quel client reconnaît déjà une réception. Il n'est pas intrinsèquement meilleur pour tout paiement.

<span id="example-1-one-coin-covers-a-purchase" data-ginger-heading="exemple-1--un-coin-couvre-un-achat" aria-hidden="true"></span>

## Exemple 1 : un coin couvre un achat

Alex possède un coin de 120 000 satoshis issu de CoinJoin et veut payer 70 000 satoshis. Supposons des frais de 1 000 satoshis.

| Partie de la transaction | Montant |
| --- | --- |
| Entrée dépensée | 120 000 sats |
| Le marchand reçoit | 70 000 sats |
| Monnaie rendue à Alex | 49 000 sats |
| Frais de minage | 1 000 sats |

Le marchand connaît adresse et montant du paiement. Il peut examiner la transaction et déduire que l'autre sortie est la monnaie rendue d'Alex. Il n'apprend pas tout son solde par cette transaction seule, mais voit l'entrée et peut suivre la dépense ultérieure du probable rendu.

Alex n'a pas à renvoyer ce rendu manuellement : il appartient déjà au portefeuille. Le point utile à vérifier est sa prochaine dépense.

<span id="example-2-two-unrelated-receipts-are-combined" data-ginger-heading="exemple-2--deux-réceptions-sans-rapport-sont-combinées" aria-hidden="true"></span>

## Exemple 2 : deux réceptions sans rapport sont combinées

Blair a un coin de 90 000 satoshis lié à son travail indépendant et un de 80 000 lié à une adresse de dons publique. Payer 150 000 avec 2 000 de frais exige plus que chacun seul ; utiliser les deux rend 18 000 satoshis.

Une dépense commune ordinaire peut suggérer que les entrées ont le même propriétaire. Celui qui reconnaît le coin des dons peut obtenir un indice sur celui du travail. C'est une déduction de la transaction et d'autres connaissances, pas une preuve automatique d'identité.

Si Blair a un autre coin suffisant déjà lié à la même activité, il peut révéler moins d'informations nouvelles. Si les deux entrées sont le seul moyen pratique, c'est un compromis coût/confidentialité. Ne sous-payez pas une facture et ne faites pas de « ne jamais combiner » une règle absolue.

CoinJoin et PayJoin sont collaboratifs : supposer un seul propriétaire de toutes les entrées n'est pas universellement valable. Gardez cette distinction en interprétant une transaction.

<span id="example-3-change-carries-a-connection-forward" data-ginger-heading="exemple-3--le-rendu-prolonge-un-lien" aria-hidden="true"></span>

## Exemple 3 : le rendu prolonge un lien

Alex combine ensuite les 49 000 satoshis de l'exemple 1 à un coin sans rapport de 60 000 pour payer 100 000. Avec 1 000 de frais supposés, 8 000 reviennent en nouveau rendu.

Le premier marchand peut observer que la sortie probable de monnaie rendue du premier paiement a été dépensée avec l'entrée de 60 000 satoshis. Même avec une nouvelle adresse destinataire, le lien entre entrées demeure. Une adresse de sortie neuve n'annule pas la dépense commune.

Gardez le contexte par des étiquettes pour vos décisions futures. Ces notes locales ne publient pas un nom dans la blockchain et n'empêchent pas les déductions.

<span id="example-4-moving-the-entire-balance-to-hardware" data-ginger-heading="exemple-4--déplacer-tout-le-solde-vers-le-matériel" aria-hidden="true"></span>

## Exemple 4 : déplacer tout le solde vers le matériel

Casey a quatre coins de 200 000 satoshis chacun. Tous les envoyer à une adresse matérielle dépense 800 000 satoshis d'entrées dans une transaction. Avec 2 000 de frais supposés, le matériel reçoit 798 000.

Le portefeuille matériel isole mieux les clés, mais le transfert expose une dépense commune des quatre entrées. Des transferts séparés pourraient éviter ce lien particulier en ajoutant frais et autres motifs observables de temps/montant. Recevoir directement les sorties d'un CoinJoin admissible dans un portefeuille matériel peut éviter un transfert ultérieur, mais dépend des contrôles d'admissibilité et de destination de la version ; ce n'est pas une méthode générale de remixage des coins détenus sur matériel.

Ne dépensez pas tout simplement parce que la liste paraît désordonnée. La consolidation réduit parfois le nombre d'entrées futures, mais un faible taux de frais change le coût, pas la divulgation.

<span id="other-participants-and-future-observations-matter" data-ginger-heading="les-autres-participants-et-observations-futures-comptent" aria-hidden="true"></span>

## Les autres participants et observations futures comptent

Votre comportement n'est pas la seule influence. Les transactions ultérieures des autres participants peuvent réduire les possibilités pour un observateur. La recherche sur la consolidation post-CoinJoin étudie cet effet en reconnaissant les limites de l'identification exploitable. Ses mesures ne sont pas la probabilité de tracer un utilisateur précis. [Gavenda et collègues, 2025](https://arxiv.org/html/2510.17284v1)

Aucun nombre universel de tours ni délai ne garantit la confidentialité. Attendre n'efface pas les informations divulguées à un marchand identifié, une plateforme ou un autre service de portefeuille.

<span id="a-short-review-before-confirming" data-ginger-heading="vérification-courte-avant-confirmation" aria-hidden="true"></span>

## Vérification courte avant confirmation

1. Confirmez destinataire et montant requis via un canal fiable.
2. Inspectez les entrées finales et demandez-vous qui connaît chacune.
3. Vérifiez si la sélection combine des activités à garder séparées.
4. Inspectez le rendu et rappelez-vous son lien lors d'une dépense ultérieure.
5. Acceptez seulement un compromis de frais/confidentialité adapté ; vérifiez l'historique avant de répéter un paiement au résultat incertain.

Pour les choix de portefeuille et navigateur, poursuivez avec [habitudes de confidentialité](/fr/using-ginger/address-reuse/) et [où vont les informations](/fr/learn-privacy/information-sharing/).
