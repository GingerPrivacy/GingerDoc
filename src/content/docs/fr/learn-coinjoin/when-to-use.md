---
doc_id: "learn-coinjoin.when-to-use"
title: "Quand CoinJoin est-il pertinent ?"
description: "Évaluer si CoinJoin répond à votre besoin de confidentialité Bitcoin, ses coûts et la préparation des dépenses ultérieures."
lang: fr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Niveau de lecture : utilisation courante. Choisissez ce guide lorsque vous avez besoin de la tâche qu'il décrit.

CoinJoin est utile lorsque réduire les informations sur les liens entre transactions répond à une préoccupation réelle. Il l'est moins si le problème principal est une phrase de récupération volée, un ordinateur compromis ou une information que vous allez divulguer directement à un prestataire.

<span id="start-with-a-concrete-objective" data-ginger-heading="commencer-par-un-objectif-concret" aria-hidden="true"></span>

## Commencer par un objectif concret

Vous pouvez vouloir qu'un futur destinataire voie moins directement l'historique d'une réception déjà identifiée. Notez qui connaît cette réception et ce que le prochain paiement révélera. CoinJoin peut modifier le problème de liens entre les deux, mais ne peut annuler la première divulgation ni empêcher la seconde.

Si votre objectif est simplement de protéger les clés pendant la détention de bitcoin, une sauvegarde permettant la récupération et une procédure adaptée à un portefeuille matériel y répondent plus directement. Si votre souci est une adresse publique réutilisée pour chaque facture, arrêtez d'abord la réutilisation ; CoinJoin ultérieur ne rend pas les anciennes réceptions privées.

<span id="compare-the-tradeoffs" data-ginger-heading="comparer-les-compromis" aria-hidden="true"></span>

## Comparer les compromis

| Situation | Décision à envisager |
| --- | --- |
| Beaucoup de petits coins et frais de minage élevés | La participation peut consommer une forte part relative ; vérifiez les frais et envisagez d'attendre |
| Un paiement est dû immédiatement | L'achèvement CoinJoin n'est pas programmé ; évitez de compter sur un tour pour une échéance exacte |
| Dépenses à long terme depuis une source identifiée | Examinez l'articulation entre CoinJoin, adresses distinctes et sélection ultérieure |
| Un prestataire exige identité et preuve d'adresse | Cette divulgation directe reste ; vérifiez si CoinJoin change les informations qui vous importent |
| La destination est un portefeuille matériel | Vérifiez le compte de réception et la procédure de destination de la version publiée ; n'importez pas les mots de récupération du portefeuille matériel dans un portefeuille chaud |
| Vous ne pouvez garder l'ordinateur disponible | La participation automatique exige connexion et capacité de signature déverrouillée pendant le tour |

Ce sont des compromis, pas une recommandation de déplacer un montant précis ni une assurance financière. Apprenez avec un montant petit et gérable et rapprochez les frais avant d'accroître votre exposition.

<span id="set-a-cost-and-attention-budget" data-ginger-heading="définir-un-budget-de-coût-et-dattention" aria-hidden="true"></span>

## Définir un budget de coût et d'attention

Examinez les deux composantes des frais et les tours répétés. Décidez combien dépenser pour l'amélioration voulue et à quelle fréquence vérifier le résultat. Un objectif local d'anonymat est un paramètre de contrôle, pas un devis ou une garantie mesurable face à un adversaire.

Le seuil d'arrêt de Ginger peut empêcher certaines participations automatiques non économiques. La préférence temporelle et le seuil de frais réduisent la participation lorsque les conditions sont coûteuses. Ces réglages ne plafonnent pas universellement le total dépensé sur plusieurs tours.

<span id="plan-the-next-spend" data-ginger-heading="préparer-la-prochaine-dépense" aria-hidden="true"></span>

## Préparer la prochaine dépense

Demandez une nouvelle destination, conservez des étiquettes locales utiles et vérifiez les entrées. Évitez de consolider instinctivement toutes les sorties simplement pour simplifier l'apparence du portefeuille. Si marchand ou plateforme apprend votre identité, comprenez cette divulgation avant de payer.

Ne considérez pas l'acceptation annoncée d'un prestataire comme permanente. Un service peut changer sa politique ou poser des questions sur un transfert. Ginger ne peut certifier l'acceptation future ni garantir que CoinJoin supprime tous les liens historiques.

<span id="try-the-released-workflow-deliberately" data-ginger-heading="essayer-délibérément-le-parcours-publié" aria-hidden="true"></span>

## Essayer délibérément le parcours publié

Lorsque objectif, sauvegarde et coûts sont clairs, ouvrez un portefeuille logiciel synchronisé, examinez **Coinjoin Settings** et choisissez entre démarrage manuel et **Automatically start coinjoin**. Surveillez l'état et examinez un tour terminé dans l'historique. Mettez en pause si le comportement ou la variation du solde diffère de vos attentes, et examinez avant de continuer.

Pour les hypothèses sous-jacentes, lisez [à quoi vous faites confiance avec CoinJoin](/fr/learn-coinjoin/trust-and-limits/). Le guide distingue contrôle des clés, confidentialité transactionnelle, disponibilité du service et confiance dans le logiciel.
