---
doc_id: "learn-privacy.repeated-payments"
title: "Recevoir des dons et des paiements répétés"
description: "Recevoir des dons Bitcoin et paiements récurrents avec de nouvelles adresses, des étiquettes utiles, des remboursements prudents et une gestion réfléchie des coins."
lang: fr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Niveau de lecture : utilisation courante. Choisissez ce guide lorsque vous avez besoin de la tâche qu'il décrit.

Recevoir publiquement n'exige pas de publier toutes les adresses du portefeuille. Il faut décider ce que chaque payeur ou visiteur verra, puis séparer les réceptions sans rapport lorsque c'est utile. Ginger permet la réception on-chain ordinaire et les étiquettes locales ; ce n'est pas un serveur de facturation ni un service automatique de rotation d'adresses web.

<span id="choose-how-to-give-out-addresses" data-ginger-heading="choisir-comment-communiquer-les-adresses" aria-hidden="true"></span>

## Choisir comment communiquer les adresses

| Approche | Commodité | Ce qui devient visible |
| --- | --- | --- |
| Adresse permanente sur site ou profil | Chacun peut payer sans vous contacter | Réceptions et dépenses ultérieures s'examinent ensemble ; la page lie l'adresse à son propriétaire |
| Nouvelle adresse pour chaque payeur | Destination distincte par demande | Payeur et service de communication peuvent connaître adresse et identité ; les transactions ultérieures peuvent créer des liens |
| Nouvelle adresse pour chaque échéance | Enregistrements privés par paiement | Exige de communiquer la nouvelle instruction ; le payeur peut encore réutiliser une ancienne adresse |

Les réceptions d'une adresse publique ne représentent pas nécessairement le solde total, le revenu ou le nombre de donateurs du propriétaire. On peut s'envoyer du bitcoin, un donateur peut payer plusieurs fois et d'autres adresses peuvent exister. N'en déduisez pas davantage que ce que les transactions établissent.

<span id="receive-and-keep-useful-records" data-ginger-heading="recevoir-et-conserver-des-enregistrements-utiles" aria-hidden="true"></span>

## Recevoir et conserver des enregistrements utiles

1. Ouvrez le portefeuille voulu et **Receive**. Ajoutez une étiquette qui rappelle le but, comme une référence privée de facture ou l'activité concernée.
2. Générez une nouvelle adresse pour ce paiement. Sur matériel, vérifiez-la via **Show on the hardware wallet** si disponible.
3. Partagez adresse et montant Bitcoin on-chain convenu par le canal prévu. Vérifiez ce que vous collez ; ne réutilisez pas une adresse parce qu'elle figure déjà dans l'historique d'un chat.
4. Vérifiez réception réelle et confirmations dans Ginger. Message ou image du payeur n'est pas une confirmation du portefeuille.
5. Préservez le lien entre réception, étiquette et facture ou registre de don privé. Les mots ne reconstituent pas toutes ces notes.

Les étiquettes sont locales ; elles ne sont pas publiées comme noms dans la transaction. Mais quiconque lit fichiers, sauvegardes ou écran partagé peut les voir. Gardez assez de détail pour comprendre les sélections futures sans collecter inutilement des données personnelles sur les donateurs.

<span id="handle-a-permanently-published-address" data-ginger-heading="gérer-une-adresse-publiée-en-permanence" aria-hidden="true"></span>

## Gérer une adresse publiée en permanence

Supposez l'historique d'une adresse permanente consultable. La remplacer sur un site n'efface pas l'ancienne et ne l'empêche pas de recevoir. Gardez ses informations de récupération et assez de contexte pour reconnaître les paiements tardifs.

CoinJoin peut réduire les liens vers les dépenses ultérieures selon ses hypothèses ; il ne fait pas disparaître les dons publics. Regrouper toutes les réceptions dans une transaction ordinaire peut ajouter un lien. Préparez la prochaine dépense aussi soigneusement que la réception.

Pour abonnement ou paiements clients répétés, communiquez si possible une nouvelle destination à chaque échéance. Ginger ne révoque pas l'ancienne adresse et n'oblige pas le payeur à suivre la mise à jour. Rapprochez paiements tardifs et doublons avant de promettre un remboursement.

<span id="refund-the-payer-through-a-verified-destination" data-ginger-heading="rembourser-vers-une-destination-vérifiée" aria-hidden="true"></span>

## Rembourser vers une destination vérifiée

N'envoyez pas automatiquement le remboursement vers une entrée du paiement d'origine. Le payeur peut avoir utilisé retrait de plateforme, service custodial ou transaction collaborative, et ne pas contrôler cette adresse.

1. Confirmez paiement et demande via vos données privées et un canal fiable.
2. Convenez du montant et de qui supporte les frais. Obtenez une nouvelle adresse de remboursement du destinataire voulu et vérifiez-la via ce canal.
3. Utilisez **Send**, vérifiez entrées et frais, et n'autorisez que le paiement convenu.
4. Notez la transaction et vérifiez le résultat avant de réessayer après une erreur réseau.

Un remboursement est un nouveau paiement on-chain. Il n'annule pas la réception ni ses enregistrements. Considérez ce qu'il révèle sur les coins dépensés.

<span id="keep-receipt-handling-deliberate" data-ginger-heading="gérer-les-réceptions-de-façon-réfléchie" aria-hidden="true"></span>

## Gérer les réceptions de façon réfléchie

Ouvrez **Wallet Coins** pour examiner les coins. **Send** → **Manual Control** aide à choisir les fonds associés à l'activité concernée. Vérifiez la transaction finale au lieu de supposer qu'une étiquette impose automatiquement une séparation.

Les petits paiements imprévus n'exigent pas de réponse immédiate. Dépenser une petite sortie peut coûter une forte part de sa valeur et la relier à d'autres entrées. **Exclude Coins** ne concerne que CoinJoin ; cela ne bloque pas une dépense ordinaire. Ne suivez pas des instructions dans un paiement non sollicité ou un contact prétendant devoir envoyer des fonds pour le débloquer.

Si vous dirigez les sorties CoinJoin admissibles vers un autre portefeuille chargé, vérifiez le choix à chaque session. Il est réinitialisé au redémarrage, et le parcours normal ne force pas de tour supplémentaire lorsque tous les fonds admissibles sont déjà privés. Une réception récurrente ne doit pas supposer sans vérification un transfert continu de tout vers le matériel.

Poursuivez avec [dépenser après CoinJoin](/fr/learn-privacy/spending-after-coinjoin/) pour les exemples et [partage d'informations](/fr/learn-privacy/information-sharing/) pour ce que sites, explorateurs et applications peuvent apprendre.
