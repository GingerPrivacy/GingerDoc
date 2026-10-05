---
doc_id: "coinjoin.settings"
title: "Configurer CoinJoin et les portefeuilles de sortie"
description: "Comprendre les paramètres de confidentialité et de coût CoinJoin, les coins exclus et l'envoi des sorties vers un autre portefeuille chargé."
lang: fr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Comprenez d'abord les commandes normales de démarrage et de pause, et le fait que les tours terminés coûtent des frais.

**Coinjoin Settings** s'applique au portefeuille sélectionné. Modifiez un seul paramètre à la fois et observez son effet. Des réglages plus exigeants peuvent augmenter les frais ou l'attente sans améliorer la confidentialité pertinente dans votre situation.

<span id="automatic-participation-and-cost-preferences" data-ginger-heading="participation-automatique-et-préférences-de-coût" aria-hidden="true"></span>

## Participation automatique et préférences de coût

| Paramètre | Ce qu'il contrôle |
| --- | --- |
| **Automatically start coinjoin** | Démarre la participation lorsque le portefeuille et des fonds adaptés sont disponibles. |
| **Stop coinjoin threshold** | Arrête CoinJoin automatique lorsque le solde est inférieur au montant en BTC choisi. C'est une règle d'arrêt au niveau du portefeuille. Elle ne définit ni le seuil d'exonération des frais du coordinateur ni l'entrée minimale acceptée. |
| **Coinjoin time preference** | Compare les frais de minage actuels à la médiane sur la période choisie. Influe sur le moment de participation, sans promettre un délai d'achèvement. |
| **Ignore coinjoin time preference below** | Autorise la participation sous ce seuil de taux de frais même si la comparaison de préférence temporelle imposerait sinon d'attendre. |
| **Random Skip** | Définit la fréquence de tours adaptés ignorés. Les choix sont **Disabled**, **Rarely**, **Sometimes** et **Often**. Davantage de tours ignorés signifie généralement davantage d'attente. |

Lorsque le lecteur signale un solde non économique, appuyer sur lecture peut contourner le seuil d'arrêt. Cela ne supprime pas les frais de transaction. Évaluez la taille des coins disponibles et les coûts attendus avant de le contourner.

<span id="privacy-settings" data-ginger-heading="paramètres-de-confidentialité" aria-hidden="true"></span>

## Paramètres de confidentialité

**Anonymity score target** est le score interne minimum pour que Ginger considère un coin comme privé. L'éditeur de cette version accepte des entiers de 2 à 1000. Augmenter l'objectif peut entraîner davantage d'activité CoinJoin ; cela n'achète pas la garantie qu'exactement autant de personnes indépendantes puissent posséder le coin.

**Single non-private coin restriction** n'autorise qu'un coin de score d'anonymat 1 par enregistrement. Cela peut réduire le lien direct créé en enregistrant ensemble plusieurs coins auparavant non privés, mais aussi ralentir la progression d'un portefeuille qui en contient beaucoup.

Abaisser l'objectif peut immédiatement modifier ce que l'interface appelle privé sans changer la blockchain. Traitez les indicateurs comme des estimations et des règles, pas comme la preuve qu'un observateur extérieur a perdu toute information.

<span id="exclude-specific-coins" data-ginger-heading="exclure-certains-coins" aria-hidden="true"></span>

## Exclure certains coins

Ouvrez **Exclude Coins** dans le menu du lecteur CoinJoin. Examinez la liste et marquez les coins à exclure de CoinJoin. Revenez dans cette liste pour les rendre à nouveau admissibles. L'exclusion s'applique à ces coins ; ce n'est pas une règle permanente pour chaque paiement futur à la même adresse.

Exclure un coin de CoinJoin ne bloque pas sa dépense ordinaire et ne remplace pas la conservation dans un portefeuille matériel. Si tous les coins disponibles sont exclus, le lecteur peut afficher **Only excluded funds are available**. Vérifiez cette liste avant de changer les frais ou les paramètres de confidentialité.

<span id="receive-outputs-in-another-wallet" data-ginger-heading="recevoir-les-sorties-dans-un-autre-portefeuille" aria-hidden="true"></span>

## Recevoir les sorties dans un autre portefeuille

**Coinjoin to this wallet** choisit où sont reçues les sorties CoinJoin du portefeuille source. Par défaut, il s'agit du portefeuille source lui-même.

1. Chargez le portefeuille de destination voulu dans Ginger. Sauvegardez-le et vérifiez que vous contrôlez ses adresses de réception.
2. Sans CoinJoin en cours, ouvrez **Coinjoin Settings** du portefeuille source et choisissez la destination dans **Coinjoin to this wallet**.
3. Vérifiez le nom sélectionné avant de démarrer. Seuls les portefeuilles chargés et admissibles apparaissent ; ne supposez pas qu'un portefeuille simplement présent sur le disque est chargé.
4. Après une transaction réussie, vérifiez l'historique synchronisé de la destination ainsi que le solde de la source.

La destination ne peut pas être changée pendant un CoinJoin actif. **Cette sélection est réinitialisée après le redémarrage de Ginger**, donc vérifiez-la avant chaque session où la destination compte. Évitez de configurer deux portefeuilles pour qu'ils s'envoient mutuellement leurs sorties CoinJoin ; les choix disponibles limitent ces configurations récursives.

La sélection de destination de cette version peut inclure un portefeuille matériel chargé. La source reste le portefeuille logiciel qui signe CoinJoin ; une destination matérielle ne transforme pas cette source en portefeuille froid et ne permet pas au portefeuille matériel d'exécuter lui-même CoinJoin. Utilisez uniquement une destination réellement proposée par l'application, et vérifiez sa sauvegarde ainsi que le contrôle des adresses avant de compter sur cette voie.

<span id="experimental-coin-selection" data-ginger-heading="sélection-expérimentale-des-coins" aria-hidden="true"></span>

## Sélection expérimentale des coins

Cette version propose **(EXPERIMENTAL) Improved Coin Selection**. Sa configuration est une interface de réglage avancée, pas un préalable à CoinJoin. Les commandes disponibles sont :

| Commande | Effet recherché |
| --- | --- |
| **Force to use low privacy coins** | Exige d'inclure un coin du groupe le moins privé. |
| **Can select already private coins** | Autorise le sélecteur à utiliser des coins déjà au-dessus de l'objectif de confidentialité. Cette participation peut toujours entraîner des frais de minage. |
| **Coin privacy difference normalization for score calculation** | Des valeurs faibles favorisent les sélections dont les scores sont plus proches. |
| **Amount loss normalization for score calculation** | Des valeurs faibles favorisent une perte relative de montant plus faible. |
| **Target coin number per wallet bucket** | Influe sur la sélection dans les groupes de tailles de coins surreprésentés. |
| **Use the Old Coin Selector for fallback** | Compare les résultats de l'ancien et du nouveau sélecteur et choisit entre eux. |

Gardez les valeurs initiales à moins de comprendre le compromis que vous modifiez. Ce sont des préférences de sélection ; elles ne sont ni un plafond exact des frais totaux ni une promesse sur le nombre de sorties d'un tour.

<span id="when-another-round-cannot-start" data-ginger-heading="quand-un-autre-tour-ne-peut-pas-démarrer" aria-hidden="true"></span>

## Quand un autre tour ne peut pas démarrer

Dans cette version, le démarrage normal refuse un portefeuille dont les fonds satisfont déjà l'objectif de confidentialité, ainsi qu'une sélection disponible constituée uniquement de coins privés. Choisir un autre portefeuille de sortie ne contourne pas cette règle. Le lecteur peut masquer la commande de lecture manuelle lorsque tous les fonds sont privés. Ne comptez pas sur l'exclusion de tous les coins non privés pour forcer ensuite un tour uniquement destiné à transférer les coins privés restants.

Choisissez la destination avant de démarrer une participation admissible, ou examinez un transfert ordinaire de fonds déjà privés. Abaisser les exigences de confidentialité ou inclure des fonds sans rapport pour lancer un tour peut modifier le résultat et le coût.
