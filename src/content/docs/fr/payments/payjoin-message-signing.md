---
doc_id: "payments.payjoin-message-signing"
title: "PayJoin et signature de messages"
description: "Envoyez une demande de paiement PayJoin, comprenez ce que sait le destinataire, les empreintes de portefeuille et le repli, puis signez un message précis prouvant le contrôle d'une adresse."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Comprenez d'abord l'aperçu d'envoi ordinaire, le montant reçu par le destinataire et les frais.

PayJoin et la signature de messages sont deux outils distincts. PayJoin modifie la construction d'une transaction de paiement. La signature d'un message prouve le contrôle d'une clé pour une déclaration précise, sans effectuer de paiement. Aucune de ces fonctions ne doit servir de prétexte pour divulguer vos mots de récupération.

<span id="send-a-payjoin-request" data-ginger-heading="envoyer-une-demande-payjoin" aria-hidden="true"></span>

## Envoyer une demande PayJoin

PayJoin est un paiement collaboratif auquel le destinataire peut contribuer une entrée. Cela peut affaiblir l'hypothèse selon laquelle toutes les entrées d'un paiement d'apparence ordinaire appartiennent à un seul expéditeur. Le destinataire doit fournir une URI de paiement Bitcoin compatible contenant un point de terminaison PayJoin ; une adresse ordinaire ne suffit pas à l'activer. Le protocole est décrit dans [BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki).

1. Utilisez un portefeuille logiciel contenant des fonds dépensables. Cette version refuse les demandes PayJoin pour les envois depuis un portefeuille matériel.
2. Collez l'URI de paiement complète dans **Send**, au lieu de ne copier que son adresse. Vérifiez la destination et le montant par le même canal de confiance que pour tout autre paiement.
3. Examinez l'aperçu de la transaction et l'indicateur PayJoin, puis autorisez le paiement si le montant et les frais vous conviennent.
4. Vérifiez la transaction résultante dans l'historique.

L'implémentation publiée peut se replier sur sa transaction de paiement ordinaire si la construction PayJoin échoue. Autoriser cette procédure ne garantit donc pas que la transaction diffusée soit un PayJoin. Ne l'utilisez pas si un repli sur un paiement ordinaire enfreindrait vos exigences de confidentialité.

Utilisez un point de terminaison HTTPS compatible pour le réseau principal. Dans la version v2.0.26, les contrôles refusent les points de terminaison onion lorsque Tor est activé ; une demande proposant uniquement onion ne doit pas être considérée comme une procédure prise en charge. Gardez Tor activé et demandez au destinataire une solution compatible au lieu de désactiver la confidentialité réseau pour forcer la demande.

Ce guide couvre l'envoi d'une demande fournie par le destinataire. La procédure ordinaire **Receive** de Ginger n'exploite pas de serveur de réception PayJoin, et cette version ne fournit pas de procédure permettant à l'utilisateur d'en configurer un.

<span id="what-the-recipient-and-an-observer-learn" data-ginger-heading="ce-quapprennent-le-destinataire-et-un-observateur" aria-hidden="true"></span>

## Ce qu'apprennent le destinataire et un observateur

Le destinataire connaît déjà la demande de paiement, son adresse de réception et le montant prévu. Si la demande est rattachée à une commande identifiée, PayJoin n'efface pas cette identité. Pendant la négociation, le service de réception voit également la transaction de paiement proposée, y compris les entrées proposées par l'expéditeur. Il ne faut pas le considérer comme quelqu'un à qui le paiement lui-même serait caché.

Un observateur extérieur voit la transaction finalement publiée sur Bitcoin. Un PayJoin réussi peut rendre peu fiable l'hypothèse habituelle selon laquelle « toutes les entrées appartiennent à l'expéditeur ». Cet avantage dépend de la transaction et des autres informations dont dispose l'observateur ; il ne garantit pas que la transaction soit impossible à distinguer de tout paiement ordinaire.

Distinguez ces publics. Un destinataire peut apprendre des détails grâce à la commande ou à la négociation même si un observateur sans rapport ne peut pas attribuer avec certitude les entrées de la transaction. Un explorateur public de transactions peut entraîner une divulgation supplémentaire si vous consultez le paiement depuis une session de navigateur identifiée.

<span id="wallet-fingerprints-and-the-ordinary-payment-fallback" data-ginger-heading="empreintes-de-portefeuille-et-repli-sur-un-paiement-ordinaire" aria-hidden="true"></span>

## Empreintes de portefeuille et repli sur un paiement ordinaire

Les portefeuilles font des choix concernant les types d'adresses des entrées, la structure de la transaction et la signature. La combinaison de ces choix peut laisser des motifs reconnaissables. Une transaction peut donc perdre une partie de son ambiguïté même lorsque ses messages du protocole PayJoin sont valides. Des [exemples publiés d'empreintes de portefeuille dans PayJoin](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy/) illustrent ce problème pour certaines combinaisons de portefeuilles ; ils ne démontrent pas que Ginger présente les mêmes problèmes et ne quantifient pas sa confidentialité.

En tant qu'utilisateur, choisissez un service de réception à jour et compatible, vérifiez la demande de paiement et examinez les frais et le montant proposés. Ne changez pas des options de transaction mal connues simplement pour imiter un autre portefeuille : une transaction d'apparence plausible ne prouve pas un bon résultat de confidentialité.

Si vous exigez un paiement collaboratif, convenez d'une méthode compatible avec le destinataire avant d'autoriser l'envoi dans Ginger. Son repli sur un paiement ordinaire signifie qu'une négociation échouée peut quand même produire un paiement valide. Après la diffusion, n'envoyez pas à nouveau simplement parce que le résultat est incertain ; vérifiez d'abord la transaction et l'état du paiement auprès du destinataire. Un échec de négociation PayJoin et un échec de paiement Bitcoin sont des situations différentes.

<span id="sign-a-message-for-an-address" data-ginger-heading="signer-un-message-pour-une-adresse" aria-hidden="true"></span>

## Signer un message pour une adresse

Certains services vous demandent de démontrer que vous contrôlez une adresse de réception. Ouvrez le menu du portefeuille et choisissez **Sign Message**. Saisissez une adresse appartenant à ce portefeuille et la déclaration exacte que vous souhaitez signer. Ginger refuse les adresses qui ne lui appartiennent pas. Saisissez le message, choisissez **Continue** et copiez la signature obtenue pour le vérificateur prévu.

Avec un portefeuille matériel, suivez la demande de signature de l'appareil ; la disponibilité dépend de l'appareil et de sa prise en charge de la signature de messages. Un portefeuille en lecture seule sans appareil de signature ne peut pas produire de signature. Le type d'adresse et le format de signature accepté par le vérificateur doivent également être compatibles.

Lisez le message aussi attentivement qu'une déclaration d'autorisation. Préférez un texte au périmètre précis indiquant le destinataire, l'objet et la date ou le défi de vérification. Ne signez pas une déclaration vide ou dont vous ne comprenez pas les conséquences. Une signature peut être copiée et montrée à d'autres après son partage.

La signature d'un message ne transfère pas de bitcoins et ne démontre pas que vous possédez toutes les adresses du portefeuille. Elle crée également un lien entre l'adresse signée et la personne que le vérificateur identifie comme vous. Si une plateforme d'échange la demande, cette divulgation demeure même après une utilisation ultérieure de CoinJoin.
