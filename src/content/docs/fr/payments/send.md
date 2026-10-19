---
doc_id: "payments.send"
title: "Envoyer des bitcoins et vérifier les frais"
description: "Préparez des paiements Bitcoin individuels ou groupés, vérifiez chaque destinataire et montant final, examinez les frais et la monnaie rendue, puis autorisez la transaction."
lang: "fr"
verified_release: "v2.0.27"
reader_level: "beginner"
prev: false
next: false
---

> Niveau de lecture : premiers pas. Les étapes essentielles viennent d'abord ; les références avancées sont des lectures complémentaires facultatives.

Ginger ne peut pas annuler un paiement Bitcoin confirmé. Avant de confirmer, vérifiez le destinataire par un canal de confiance et examinez la destination complète, le montant et les frais. Commencez par un petit paiement lorsque vous découvrez une nouvelle procédure.

<span id="prepare-a-payment" data-ginger-heading="préparer-un-paiement" aria-hidden="true"></span>

## Préparer un paiement

1. Ouvrez le portefeuille contenant les fonds et choisissez **Send**. Choisissez **Automatic** pour la procédure de paiement ordinaire. Vous pourrez apprendre séparément la sélection manuelle des pièces lorsque vous en aurez besoin.
2. Saisissez l'adresse Bitcoin ou l'URI de paiement du destinataire dans **To:**. Une demande de paiement peut inclure le montant ; vérifiez-le après le collage. Si l'action **Scan QR Code** est disponible sur votre plateforme, vous pouvez utiliser la caméra, puis vérifier la destination décodée.
3. Saisissez le montant et une étiquette informative pour le destinataire. Vérifiez si l'affichage est en BTC ou en monnaie fiduciaire. Une estimation en monnaie fiduciaire varie avec le taux de change et n'est pas le montant transféré par le réseau Bitcoin.
4. Choisissez **Continue** et examinez l'aperçu de la transaction, les fonds sélectionnés, les éventuelles suggestions de confidentialité et la monnaie rendue attendue. Une suggestion qui modifie le montant n'est appropriée que si elle satisfait toujours la demande du destinataire.
5. Vérifiez les frais et le délai de confirmation estimé. Choisissez **Confirm** lorsque les détails sont corrects, puis effectuez toute autorisation requise par phrase secrète ou appareil matériel.
6. Vérifiez dans l'historique la transaction diffusée. Si le résultat est incertain après une erreur réseau, consultez l'historique avant de commencer un autre paiement.

L'envoi de tous les fonds disponibles peut déduire les frais du montant reçu par le destinataire. Les demandes à montant fixe et PayJoin ont des contraintes différentes. L'aperçu est l'endroit où vérifier le montant réellement reçu, plutôt que de supposer que tout le solde du portefeuille arrivera à destination.

<span id="pay-several-recipients-in-one-transaction" data-ginger-heading="payer-plusieurs-destinataires-dans-une-transaction" aria-hidden="true"></span>

## Payer plusieurs destinataires dans une transaction

Choisissez **Pay to multiple recipients** dans l'éditeur d'envoi pour créer un paiement groupé. Le premier paiement conserve l'adresse, le montant et les étiquettes déjà saisis.

1. Saisissez une adresse Bitcoin différente, un montant et une étiquette de destinataire pour chaque paiement. Utilisez des adresses simples dans cet éditeur ; les URI de paiement et Payjoin relèvent de la procédure à destinataire unique. Une demande de paiement à montant fixe ne peut pas être étendue en paiement groupé.
2. Choisissez **Add another payment** pour ajouter des lignes, ou **Delete** à côté d'un paiement pour le supprimer. S'il ne reste qu'un paiement, l'éditeur revient à la disposition à destinataire unique et conserve les détails de ce paiement.
3. Décidez qui supporte les frais de minage. Lorsque **Subtract the transaction fee from the first payment** est sélectionné, le premier destinataire reçoit moins que le montant saisi, tandis que les autres montants restent inchangés. Si l'option est décochée, votre portefeuille paie les frais en plus des montants saisis. Utiliser **Max** dans un paiement groupé active la déduction des frais ; vérifiez ce choix avant de continuer.
4. Choisissez **Continue**. Examinez chaque adresse numérotée, étiquette de destinataire et montant final dans l'aperçu, ainsi que les frais totaux. Vérifiez en particulier que le premier destinataire reçoit toujours le montant convenu si les frais sont déduits.
5. Revenez en arrière pour corriger les paiements si nécessaire. Les lignes saisies et votre choix de déduction des frais sont conservés. Vérifiez à nouveau l'aperçu reconstruit et les frais avant de choisir **Confirm** et d'achever l'autorisation.

Tous les destinataires d'un paiement groupé partagent une transaction publique, ce qui permet de relier les paiements entre eux. Tenez-en compte avant de regrouper des paiements sans rapport. Les étiquettes de destinataires restent des métadonnées locales du portefeuille ; elles ne sont ni envoyées aux destinataires ni publiées sur la blockchain.

<span id="check-the-fee-without-custom-settings" data-ginger-heading="vérifier-les-frais-sans-réglages-personnalisés" aria-hidden="true"></span>

## Vérifier les frais sans réglages personnalisés

Examinez les frais totaux et la préférence de confirmation estimée dans l'aperçu. Les frais paient l'espace occupé par la transaction ; ils ne sont pas simplement un pourcentage du paiement. L'estimation du délai peut changer et n'est pas une garantie.

Utilisez une estimation de frais disponible que vous comprenez. Si aucune estimation n'est disponible et que vous ne savez pas quoi choisir, attendez et renseignez-vous plutôt que de deviner un montant de frais personnalisés très élevé.

Pour examiner les détails avant de confirmer, choisissez **View transaction** dans l'aperçu. Une fenêtre distincte affiche les entrées et les sorties. Consultez [l'examen d'une transaction](/fr/payments/coin-control-history/#inspect-inputs-and-outputs) pour connaître les détails disponibles.

<span id="the-leftover-money-is-change" data-ginger-heading="largent-restant-est-la-monnaie-rendue" aria-hidden="true"></span>

## L'argent restant est la monnaie rendue

Le paiement peut utiliser une portion de bitcoins supérieure au montant du destinataire augmenté des frais. La valeur restante revient dans votre portefeuille comme monnaie rendue, parfois à une adresse que vous n'avez jamais vue. Vous la contrôlez toujours ; il n'y a rien à renvoyer manuellement.

Une suggestion de confidentialité peut modifier le montant proposé pour le destinataire. Acceptez-la seulement si elle satisfait toujours sa demande. En particulier, ne payez pas moins qu'une facture à montant fixe pour éviter la monnaie rendue.

Référence avancée facultative : [taux de frais personnalisés et monnaie rendue](/fr/using-ginger/fee/) ou [contrôle manuel des pièces et historique des transactions](/fr/payments/coin-control-history/).

<span id="when-a-payment-cannot-be-prepared" data-ginger-heading="quand-un-paiement-ne-peut-pas-être-préparé" aria-hidden="true"></span>

## Quand un paiement ne peut pas être préparé

Des fonds insuffisants peuvent signifier qu'il ne reste pas assez de valeur dépensable après les frais, même si le solde total affiché semble suffisant. Les fonds peuvent aussi être non confirmés, immobilisés dans une phase critique de CoinJoin ou appartenir à une chaîne non confirmée qui ne peut pas être prolongée pour le moment.

Il est normal que l'action d'envoi soit absente pendant la récupération. Un portefeuille en lecture seule ne peut pas signer par lui-même. Cette version ne prend pas en charge les adresses ni les factures Lightning ; demandez une adresse de paiement Bitcoin sur la chaîne.
