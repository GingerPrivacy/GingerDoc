---
doc_id: "payments.coin-control-history"
title: "Contrôle des coins, historique et transactions bloquées"
description: "Examinez les UTXO et l'historique des paiements Ginger, sélectionnez les coins de façon délibérée et comprenez quand une accélération ou une annulation est possible."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Comprenez d'abord l'aperçu d'envoi ordinaire, le montant reçu par le destinataire et les frais.

Le solde total du portefeuille peut contenir de nombreux coins distincts, avec des origines, des états de confirmation et des historiques de confidentialité différents. Le contrôle des coins vous aide à choisir lesquels dépenser. Il facilite aussi l'association accidentelle de fonds auparavant séparés ; utilisez-le donc dans un but précis.

<span id="inspect-and-select-coins" data-ginger-heading="examiner-et-sélectionner-les-coins" aria-hidden="true"></span>

## Examiner et sélectionner les coins

Ouvrez le menu du portefeuille et choisissez **Wallet Coins**. Examinez le montant, les étiquettes, les informations de confirmation et les données de confidentialité des coins que vous possédez. Une transaction peut créer plusieurs coins, et une adresse peut recevoir plusieurs paiements distincts ; ni une ligne ni une adresse ne représente nécessairement un portefeuille entier.

Choisissez **Send** → **Manual Control** pour travailler avec des coins individuels pendant le paiement. Sélectionnez une valeur suffisante pour le paiement et les frais. Examinez les entrées et la monnaie rendue résultantes avant de confirmer. La sélection rend les coins disponibles pour le constructeur de transaction ; consultez l'aperçu final pour voir lesquels sont réellement utilisés.

Conservez des étiquettes expliquant l'origine des fonds ou les personnes qui les connaissent déjà. Payer avec des coins déjà associés au même destinataire peut révéler moins d'informations nouvelles que de combiner des sources sans rapport. Une étiquette ne garantit pas en elle-même l'anonymat et n'empêche pas l'analyse de la blockchain par autrui.

<span id="consolidation-and-small-coins" data-ginger-heading="consolidation-et-petits-coins" aria-hidden="true"></span>

## Consolidation et petits coins

La consolidation dépense plusieurs petits coins pour produire moins de sorties, généralement vers un portefeuille que vous contrôlez. Elle coûte des frais maintenant et peut réduire le nombre d'entrées nécessaire pour un paiement ultérieur. Elle associe aussi publiquement les entrées sélectionnées. Des frais bas peuvent rendre la consolidation moins chère, mais n'éliminent pas ce compromis de confidentialité.

Ne combinez pas automatiquement des coins sans rapport simplement pour obtenir une liste bien rangée. De très petites sorties reçues peuvent coûter trop cher à dépenser. Le seuil de poussière de Ginger et les exclusions de CoinJoin répondent à des situations différentes ; exclure un coin de CoinJoin ne vous empêche pas de le sélectionner pour un paiement ordinaire.

Envoyer des fonds vers votre portefeuille matériel est une transaction ordinaire sur la chaîne si vous utilisez **Send**. Obtenez et vérifiez une nouvelle adresse de réception du portefeuille matériel, puis examinez les frais et les coins sélectionnés dans le portefeuille logiciel. Le transfert lui-même reste visible sur la blockchain.

<span id="read-transaction-history" data-ginger-heading="lire-lhistorique-des-transactions" aria-hidden="true"></span>

## Lire l'historique des transactions

L'écran d'accueil du portefeuille affiche les réceptions, les envois et l'activité CoinJoin. Développez les entrées CoinJoin regroupées lorsque vous devez examiner des tours individuels. Les commandes de tri permettent de comparer la date, le montant, les étiquettes et l'état. Ouvrez les détails d'une transaction pour consulter son identifiant et les informations disponibles sur les confirmations ou les frais.

Utilisez **Copy Transaction ID** pour identifier une transaction précise. Gardez les identifiants de transaction privés lorsque c'est possible : en partager un peut révéler des adresses, des montants et des liens avec d'autres activités. Un explorateur public apprend également les recherches que vous effectuez. L'historique local de Ginger est le premier endroit où vérifier vos propres paiements.

Vous pouvez examiner, trier et regrouper l'historique, et copier les identifiants de transaction. Cette version ne propose pas de commande de recherche de transactions ni d'exportation CSV dans cette procédure d'historique.

<span id="speed-up-an-unconfirmed-transaction" data-ginger-heading="accélérer-une-transaction-non-confirmée" aria-hidden="true"></span>

## Accélérer une transaction non confirmée

Lorsque Ginger propose **Speed Up Transaction** pour une entrée de l'historique, ouvrez cette action et examinez les frais supplémentaires avant de confirmer. Selon la transaction et les sorties disponibles, l'accélération peut remplacer la transaction par une version aux frais plus élevés ou dépenser une sortie dans une transaction enfant qui paie suffisamment pour les deux.

Votre portefeuille ne peut pas accélérer toutes les transactions. Il a besoin d'une structure de transaction prise en charge et d'un accès aux clés et aux fonds concernés. Des frais plus élevés augmentent l'incitation des mineurs ; ils ne garantissent pas une confirmation immédiate. Un remplacement peut changer l'identifiant de la transaction ; vérifiez donc l'historique actualisé lorsque vous vous coordonnez avec un destinataire.

<span id="cancel-an-unconfirmed-transaction" data-ginger-heading="annuler-une-transaction-non-confirmée" aria-hidden="true"></span>

## Annuler une transaction non confirmée

**Cancel Transaction**, lorsque cette action est proposée, tente de remplacer le paiement en attente par une transaction qui remet les fonds concernés sous votre contrôle et paie des frais. C'est une course contre la confirmation du paiement original, pas une commande d'annulation acceptée par tous les nœuds.

Lisez le dialogue d'annulation et les frais, confirmez uniquement si telle est votre intention et surveillez ce qui est réellement confirmé. Si la transaction originale est confirmée en premier, l'annulation ne peut pas la renverser. Une fois le paiement confirmé, demandez au destinataire un remboursement distinct si cela convient ; Ginger ne peut pas récupérer les fonds.

Ne lancez pas un second paiement et ne promettez pas de remboursement avant de savoir quelle transaction a été confirmée. Un explorateur et votre portefeuille peuvent afficher temporairement des informations de mempool différentes parce qu'ils voient des nœuds différents.
