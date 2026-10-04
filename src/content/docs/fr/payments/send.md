---
doc_id: "payments.send"
title: "Envoyer des bitcoins et vérifier les frais"
description: "Préparez un paiement Ginger, vérifiez le destinataire et le montant, comprenez les taux de frais et la monnaie rendue, puis autorisez la transaction."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Niveau de lecture : premiers pas. Les étapes essentielles viennent d'abord ; les références avancées sont des lectures complémentaires facultatives.

Ginger ne peut pas annuler un paiement Bitcoin confirmé. Avant de confirmer, vérifiez le destinataire par un canal de confiance et examinez la destination complète, le montant et les frais. Commencez par un petit paiement lorsque vous découvrez une nouvelle procédure.

<span id="prepare-a-payment" aria-hidden="true"></span>

## Préparer un paiement

1. Ouvrez le portefeuille contenant les fonds et choisissez **Send**. Choisissez **Automatic** pour la procédure de paiement ordinaire. Vous pourrez apprendre séparément la sélection manuelle des coins lorsque vous en aurez besoin.
2. Saisissez l'adresse Bitcoin ou l'URI de paiement du destinataire dans **To:**. Une demande de paiement peut inclure le montant ; vérifiez-le après le collage. Si l'action **Scan QR Code** est disponible sur votre plateforme, vous pouvez utiliser la caméra, puis vérifier la destination décodée.
3. Saisissez le montant et une étiquette informative pour le destinataire. Vérifiez si l'affichage est en BTC ou en monnaie fiduciaire. Une estimation en monnaie fiduciaire varie avec le taux de change et n'est pas le montant transféré par le réseau Bitcoin.
4. Choisissez **Continue** et examinez l'aperçu de la transaction, les fonds sélectionnés, les éventuelles suggestions de confidentialité et la monnaie rendue attendue. Une suggestion qui modifie le montant n'est appropriée que si elle satisfait toujours la demande du destinataire.
5. Vérifiez les frais et le délai de confirmation estimé. Choisissez **Confirm** lorsque les détails sont corrects, puis effectuez toute autorisation requise par phrase secrète ou appareil matériel.
6. Vérifiez dans l'historique la transaction diffusée. Si le résultat est incertain après une erreur réseau, consultez l'historique avant de commencer un autre paiement.

L'envoi de tous les fonds disponibles peut déduire les frais du montant reçu par le destinataire. Les demandes à montant fixe et PayJoin ont des contraintes différentes. L'aperçu est l'endroit où vérifier le montant réellement reçu, plutôt que de supposer que tout le solde du portefeuille arrivera à destination.

<span id="check-the-fee-without-custom-settings" aria-hidden="true"></span>

## Vérifier les frais sans réglages personnalisés

Examinez les frais totaux et la préférence de confirmation estimée dans l'aperçu. Les frais paient l'espace occupé par la transaction ; ils ne sont pas simplement un pourcentage du paiement. L'estimation du délai peut changer et n'est pas une garantie.

Utilisez une estimation de frais disponible que vous comprenez. Si aucune estimation n'est disponible et que vous ne savez pas quoi choisir, attendez et renseignez-vous plutôt que de deviner un montant de frais personnalisés très élevé.

<span id="the-leftover-money-is-change" aria-hidden="true"></span>

## L'argent restant est la monnaie rendue

Le paiement peut utiliser une portion de bitcoins supérieure au montant du destinataire augmenté des frais. La valeur restante revient dans votre portefeuille comme monnaie rendue, parfois à une adresse que vous n'avez jamais vue. Vous la contrôlez toujours ; il n'y a rien à renvoyer manuellement.

Une suggestion de confidentialité peut modifier le montant proposé pour le destinataire. Acceptez-la seulement si elle satisfait toujours sa demande. En particulier, ne payez pas moins qu'une facture à montant fixe pour éviter la monnaie rendue.

Référence avancée facultative : [taux de frais personnalisés et monnaie rendue](/fr/using-ginger/fee/) ou [contrôle manuel des coins et historique des transactions](/fr/payments/coin-control-history/).

<span id="when-a-payment-cannot-be-prepared" aria-hidden="true"></span>

## Quand un paiement ne peut pas être préparé

Des fonds insuffisants peuvent signifier qu'il ne reste pas assez de valeur dépensable après les frais, même si le solde total affiché semble suffisant. Les fonds peuvent aussi être non confirmés, immobilisés dans une phase critique de CoinJoin ou appartenir à une chaîne non confirmée qui ne peut pas être prolongée pour le moment.

Il est normal que l'action d'envoi soit absente pendant la récupération. Un portefeuille en lecture seule ne peut pas signer par lui-même. Cette version ne prend pas en charge les adresses ni les factures Lightning ; demandez une adresse de paiement Bitcoin sur la chaîne.
