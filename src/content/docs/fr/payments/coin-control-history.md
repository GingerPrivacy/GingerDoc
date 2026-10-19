---
doc_id: "payments.coin-control-history"
title: "Contrôle des pièces, historique et transactions bloquées"
description: "Examinez les UTXO de Ginger, les entrées et sorties des transactions et l’historique des paiements ; choisissez délibérément les pièces et gérez les paiements non confirmés."
lang: "fr"
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Comprenez d'abord l'aperçu d'envoi ordinaire, le montant reçu par le destinataire et les frais.

Le solde total du portefeuille peut contenir de nombreuses pièces distinctes, avec des origines, des états de confirmation et des historiques de confidentialité différents. Le contrôle des pièces vous aide à choisir lesquelles dépenser. Il facilite aussi l'association accidentelle de fonds auparavant séparés ; utilisez-le donc dans un but précis.

<span id="inspect-and-select-coins" data-ginger-heading="examiner-et-sélectionner-les-pièces" aria-hidden="true"></span>

## Examiner et sélectionner les pièces

Ouvrez le menu du portefeuille et choisissez **Wallet Coins**. Examinez le montant, les étiquettes, les informations de confirmation et les données de confidentialité des pièces que vous possédez. Une transaction peut créer plusieurs pièces, et une adresse peut recevoir plusieurs paiements distincts ; ni une ligne ni une adresse ne représente nécessairement un portefeuille entier.

Choisissez **Send** → **Manual Control** pour travailler avec des pièces individuelles pendant le paiement. Sélectionnez une valeur suffisante pour le paiement et les frais. Examinez les entrées et la monnaie rendue résultantes avant de confirmer. La sélection rend les pièces disponibles pour le constructeur de transaction ; consultez l'aperçu final pour voir lesquelles sont réellement utilisées.

Conservez des étiquettes expliquant l'origine des fonds ou les personnes qui les connaissent déjà. Payer avec des pièces déjà associées au même destinataire peut révéler moins d'informations nouvelles que de combiner des sources sans rapport. Une étiquette ne garantit pas en elle-même l'anonymat et n'empêche pas l'analyse de la blockchain par autrui.

<span id="consolidation-and-small-coins" data-ginger-heading="consolidation-et-petites-pièces" aria-hidden="true"></span>

## Consolidation et petites pièces

La consolidation dépense plusieurs petites pièces pour produire moins de sorties, généralement vers un portefeuille que vous contrôlez. Elle coûte des frais maintenant et peut réduire le nombre d'entrées nécessaire pour un paiement ultérieur. Elle associe aussi publiquement les entrées sélectionnées. Des frais bas peuvent rendre la consolidation moins chère, mais n'éliminent pas ce compromis de confidentialité.

Ne combinez pas automatiquement des pièces sans rapport simplement pour obtenir une liste bien rangée. De très petites sorties reçues peuvent coûter trop cher à dépenser. Le seuil de poussière de Ginger et les exclusions de CoinJoin répondent à des situations différentes ; exclure une pièce de CoinJoin ne vous empêche pas de la sélectionner pour un paiement ordinaire.

Envoyer des fonds vers votre portefeuille matériel est une transaction ordinaire sur la chaîne si vous utilisez **Send**. Obtenez et vérifiez une nouvelle adresse de réception du portefeuille matériel, puis examinez les frais et les pièces sélectionnées dans le portefeuille logiciel. Le transfert lui-même reste visible sur la blockchain.

<span id="read-transaction-history" data-ginger-heading="lire-lhistorique-des-transactions" aria-hidden="true"></span>

## Lire l'historique des transactions

L'écran d'accueil du portefeuille affiche les réceptions, les envois et l'activité CoinJoin. Développez les entrées CoinJoin regroupées lorsque vous devez examiner des tours individuels. Les commandes de tri permettent de comparer la date, le montant, les étiquettes et l'état. Ouvrez les détails d'une transaction pour consulter son identifiant et les informations disponibles sur les confirmations ou les frais.

Utilisez **Copy Transaction ID** pour identifier une transaction précise. Gardez les identifiants de transaction privés lorsque c'est possible : en partager un peut révéler des adresses, des montants et des liens avec d'autres activités. Un explorateur public apprend également les recherches que vous effectuez. L'historique local de Ginger est le premier endroit où vérifier vos propres paiements.

Vous pouvez examiner, trier et regrouper l'historique, et copier les identifiants de transaction. Cette version ne propose pas de commande de recherche de transactions ni d'exportation CSV dans cette procédure d'historique.

<span id="inspect-inputs-and-outputs" data-ginger-heading="examiner-les-entrées-et-les-sorties" aria-hidden="true"></span>

## Examiner les entrées et les sorties

Choisissez **View transaction** dans l'aperçu d'un envoi ou dans les détails d'une transaction pour ouvrir la fenêtre de visualisation des transactions. Pour une entrée CoinJoin regroupée dans l'historique, développez le groupe et ouvrez les détails d'un CoinJoin individuel pour trouver la même action. La fenêtre s'ouvre séparément et peut être redimensionnée ; faites glisser ses séparateurs pour donner plus de place au diagramme, aux détails de la sélection ou au récapitulatif.

Le côté gauche répertorie les entrées et le côté droit, les sorties. Faites défiler les transactions longues, puis sélectionnez une entrée ou une sortie pour consulter son montant, son estimation actuelle en monnaie fiduciaire, son adresse, son outpoint, son type de script, ses étiquettes et son score d'anonymat connu. L'appartenance est indiquée par **Own wallet**, **External** ou **Change**, selon le cas. Un outpoint identifie une sortie précise par l'identifiant de sa transaction et son index de sortie.

Utilisez les boutons de copie pour copier l'identifiant de transaction, l'adresse ou l'outpoint de la pièce sélectionnée. Le récapitulatif indique les totaux des entrées et sorties, les frais de minage et leur taux, la taille virtuelle, la date et l'état de la transaction : aperçu, en attente ou confirmée. Consulter un aperçu ne le signe pas et ne le diffuse pas.

Certaines informations sur les entrées externes ne sont pas connues du portefeuille. Un montant d'entrée inconnu peut aussi rendre inconnus le total des entrées et les frais. Un score d'anonymat n'est affiché que si Ginger connaît celui de cette pièce du portefeuille ; les nouvelles sorties d'un aperçu d'envoi n'ont pas encore de score. **Unknown** ou un tiret ne signifie pas un score nul. Les montants en monnaie fiduciaire utilisent le taux de change actuel, même lors de l'examen d'une ancienne transaction.

**Discreet Mode** masque les données de la transaction et désactive les actions de copie de la fenêtre. Désactivez-le lorsque vous pouvez examiner les détails en privé. Ouvrir cette fenêtre locale n'exige pas de partager la transaction avec un explorateur public.

<span id="speed-up-an-unconfirmed-transaction" data-ginger-heading="accélérer-une-transaction-non-confirmée" aria-hidden="true"></span>

## Accélérer une transaction non confirmée

Lorsque Ginger propose **Speed Up Transaction** pour une entrée de l'historique, ouvrez cette action et examinez les frais supplémentaires avant de confirmer. Selon la transaction et les sorties disponibles, l'accélération peut remplacer la transaction par une version aux frais plus élevés ou dépenser une sortie dans une transaction enfant qui paie suffisamment pour les deux.

Votre portefeuille ne peut pas accélérer toutes les transactions. Il a besoin d'une structure de transaction prise en charge et d'un accès aux clés et aux fonds concernés. Des frais plus élevés augmentent l'incitation des mineurs ; ils ne garantissent pas une confirmation immédiate. Un remplacement peut changer l'identifiant de la transaction ; vérifiez donc l'historique actualisé lorsque vous vous coordonnez avec un destinataire.

<span id="cancel-an-unconfirmed-transaction" data-ginger-heading="annuler-une-transaction-non-confirmée" aria-hidden="true"></span>

## Annuler une transaction non confirmée

**Cancel Transaction**, lorsque cette action est proposée, tente de remplacer le paiement en attente par une transaction qui remet les fonds concernés sous votre contrôle et paie des frais. C'est une course contre la confirmation du paiement original, pas une commande d'annulation acceptée par tous les nœuds.

Lisez le dialogue d'annulation et les frais, confirmez uniquement si telle est votre intention et surveillez ce qui est réellement confirmé. Si la transaction originale est confirmée en premier, l'annulation ne peut pas la renverser. Une fois le paiement confirmé, demandez au destinataire un remboursement distinct si cela convient ; Ginger ne peut pas récupérer les fonds.

Ne lancez pas un second paiement et ne promettez pas de remboursement avant de savoir quelle transaction a été confirmée. Un explorateur et votre portefeuille peuvent afficher temporairement des informations de mempool différentes parce qu'ils voient des nœuds différents.
