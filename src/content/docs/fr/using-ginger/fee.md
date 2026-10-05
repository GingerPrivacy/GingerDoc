---
doc_id: "payments.fees-and-change"
title: "Frais de transaction, taux personnalisés et monnaie rendue"
description: "Comprendre les taux de frais en satoshis par octet virtuel, la saisie manuelle des frais, les sorties de monnaie rendue et les suggestions de confidentialité qui modifient le montant dans Ginger."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-mining-fee"></span>
<span id="what-does-the-mining-fee-depend-on"></span>
<span id="what-is-coordinator-fee"></span>

> Niveau de lecture : guide avancé. Familiarisez-vous d'abord avec l'aperçu d'envoi habituel, le montant destiné au bénéficiaire et les frais.

Pour les étapes d'un paiement ordinaire, commencez par [Envoyer des bitcoins](/fr/payments/send/). Cette référence explique plus en détail les réglages des frais et la monnaie rendue ; il n'est pas nécessaire de choisir un taux personnalisé pour chaque paiement.

<span id="understand-the-fee" data-ginger-heading="comprendre-les-frais" aria-hidden="true"></span>

## Comprendre les frais

Un taux de frais se mesure en satoshis par octet virtuel et s'affiche sous **Fee Rate (sat/vByte)**. Le total des frais de minage correspond au taux de frais multiplié par la taille virtuelle de la transaction. Il ne s'agit pas d'un pourcentage du montant du paiement. Dépenser de nombreuses petites pièces peut coûter plus cher que de dépenser une seule pièce plus importante de même valeur totale.

Utilisez le réglage des frais dans l'aperçu pour modifier le délai de confirmation souhaité ou saisir un **Custom Fee Rate**. Un délai estimé n'est pas une garantie : les nouvelles transactions se disputent l'espace disponible et les blocs arrivent à intervalles irréguliers. Le champ de saisie manuelle de cette version refuse les taux inférieurs à 1 sat/vByte ; la politique des nœuds peut exiger un taux supérieur au minimum accepté par le champ.

Lorsque les estimations automatiques sont indisponibles, Ginger peut tout de même proposer une saisie manuelle des frais. Si vous ne savez pas quel taux convient, il est préférable d'attendre le retour des estimations plutôt que de choisir au hasard un nombre très élevé. Les frais de transaction ordinaires et les frais de coordinateur CoinJoin sont distincts.

<span id="change-is-still-your-bitcoin" data-ginger-heading="la-monnaie-rendue-reste-vos-bitcoins" aria-hidden="true"></span>

## La monnaie rendue reste vos bitcoins

Bitcoin dépense des pièces entières, également appelées UTXO. Si les entrées sélectionnées dépassent le montant destiné au bénéficiaire plus les frais, l'excédent revient généralement à une nouvelle adresse de monnaie rendue dans votre portefeuille. Par exemple, une entrée de 100 000 satoshis qui finance un paiement de 60 000 satoshis avec des frais de 1 000 satoshis laisse 39 000 satoshis de monnaie rendue.

L'adresse de monnaie rendue peut être différente des adresses de réception que vous avez déjà montrées à quelqu'un. Vous n'avez pas besoin de la copier ailleurs ni de renvoyer manuellement les fonds à votre portefeuille. L'analyse des transactions peut établir un lien entre la monnaie rendue et le paiement, ce qui importe lorsque vous la combinez ensuite avec d'autres fonds.

Les suggestions de confidentialité de Ginger peuvent proposer un paiement sans monnaie rendue en ajustant la sélection des pièces ou le montant destiné au bénéficiaire. Examinez soigneusement le résultat. Ne payez pas une facture dont le montant est fixé avec un montant insuffisant dans le seul but d'éliminer la monnaie rendue.

Pour sélectionner des pièces précises ou gérer une transaction en attente, consultez [le contrôle des pièces et l'historique](/fr/payments/coin-control-history/).
