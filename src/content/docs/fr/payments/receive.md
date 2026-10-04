---
doc_id: "payments.receive"
title: "Recevoir des bitcoins et gérer les adresses"
description: "Générez une adresse de réception Ginger, choisissez SegWit ou Taproot lorsque cela est pris en charge, ajoutez des étiquettes aux paiements et vérifiez les confirmations."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Niveau de lecture : premiers pas. Les étapes essentielles viennent d'abord ; les références avancées sont des lectures complémentaires facultatives.

Utilisez une nouvelle adresse de réception pour chaque paiement. L'adresse indique au payeur où envoyer les bitcoins ; elle ne révèle pas vos mots de récupération. En revanche, sa réutilisation permet aux observateurs de relier les paiements à cette même destination.

<span id="request-a-payment" data-ginger-heading="demander-un-paiement" aria-hidden="true"></span>

## Demander un paiement

1. Ouvrez le portefeuille souhaité et attendez la fin de la récupération ou de la synchronisation.
2. Choisissez **Receive**. Ajoutez une étiquette décrivant le payeur ou l'objet du paiement, par exemple « Facture de juin ». Donnez assez de détails pour le reconnaître plus tard, sans enregistrer de données personnelles inutiles.
3. Choisissez **Generate**. L'action normale crée une adresse SegWit native. Si le portefeuille prend en charge Taproot, l'action alternative propose **Taproot**, indiqué par **TR** ; utilisez-la uniquement si le payeur accepte ce type d'adresse.
4. Copiez l'adresse ou partagez le code QR de réception. Avec un portefeuille matériel, utilisez **Show on the hardware wallet** et comparez l'adresse complète sur l'appareil avant de la communiquer au payeur.
5. Vérifiez la destination après l'avoir collée dans une autre application. Un logiciel malveillant ciblant le presse-papiers peut remplacer une adresse même si le code QR d'origine ou l'affichage du portefeuille était correct.

Sur le réseau principal Bitcoin, les adresses de réception SegWit natives commencent normalement par `bc1q` ; les adresses Taproot commencent par `bc1p`. Les adresses des réseaux de test sont différentes. Si un service refuse une adresse Bitcoin prise en charge, vérifiez auprès de ce service le réseau et les types d'adresses qu'il accepte, au lieu de modifier les caractères de l'adresse.

<span id="labels-and-unused-addresses" data-ginger-heading="étiquettes-et-adresses-inutilisées" aria-hidden="true"></span>

## Étiquettes et adresses inutilisées

**Addresses Awaiting Payment** affiche les adresses de réception qui n'ont pas encore reçu de paiement et qui restent proposées dans cette liste. Les actions disponibles permettent de consulter leurs codes QR, de les copier, de modifier leurs étiquettes ou de masquer une adresse.

Masquer une adresse ne la révoque pas sur Bitcoin. Un paiement vers une adresse générée auparavant appartient toujours au portefeuille si vous contrôlez ses clés. Les adresses utilisées peuvent disparaître de la liste des paiements attendus par conception ; cela encourage l'utilisation de nouvelles adresses plutôt que de signaler la suppression des anciennes clés.

Les étiquettes sont des métadonnées locales du portefeuille, pas des messages inscrits dans la blockchain ou transmis automatiquement au payeur. Elles peuvent néanmoins être exposées par des sauvegardes, des journaux, des exportations ou un partage d'écran. Conservez une sauvegarde des fichiers si les étiquettes sont importantes pour vous : les mots de récupération ne permettent pas de les reconstruire.

<span id="know-when-you-have-been-paid" data-ginger-heading="savoir-quand-vous-avez-été-payé" aria-hidden="true"></span>

## Savoir quand vous avez été payé

La diffusion d'une transaction par l'expéditeur, sa détection par Ginger comme non confirmée et son inclusion dans un bloc par un mineur sont des événements différents. Vérifiez l'historique du portefeuille et les détails de la transaction. Un paiement non confirmé peut être remplacé ou ne jamais être confirmé ; déterminez le niveau de certitude nécessaire dans votre situation avant de fournir quelque chose d'irréversible en échange.

Ginger peut recevoir lorsque l'application est fermée. Le payeur a besoin d'une adresse valide, pas d'un portefeuille en ligne. À la réouverture, la synchronisation retrouve la transaction. Un CoinJoin ou un paiement envoyé à un autre portefeuille chargé n'apparaîtra que dans le portefeuille qui contrôle ses sorties.

<span id="if-the-payment-is-missing" data-ginger-heading="si-le-paiement-est-introuvable" aria-hidden="true"></span>

## Si le paiement est introuvable

Demandez à l'expéditeur l'identifiant de la transaction et vérifiez la destination par votre canal de communication habituel. Vérifiez le portefeuille sélectionné, le réseau principal ou de test, l'état de la synchronisation et si l'expéditeur a réellement diffusé une transaction. Évitez de coller toutes les adresses dans un explorateur public : l'explorateur apprend ce que vous consultez.

Si vous avez restauré à partir des mots et généré beaucoup d'adresses inutilisées par le passé, la limite d'adresses inutilisées de la récupération peut compter. Une nouvelle demande de réception ne corrige pas, à elle seule, une recherche historique incomplète. Préservez les sauvegardes avant de tenter une nouvelle analyse ou une récupération.
