---
doc_id: "buy-sell.sell-and-orders"
title: "Vendre du bitcoin et résoudre les commandes prestataires"
description: "Terminer une vente Ginger avec montant et adresse exacts du prestataire, suivre l'état et contacter la bonne assistance."
lang: fr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="how-it-works"></span>
<span id="step-1-selecting-your-country"></span>
<span id="step-2-entering-purchase-amount"></span>
<span id="step-3-choosing-an-offer"></span>
<span id="step-4-completing-the-transaction"></span>
<span id="step-5-viewing-transaction-history"></span>
<span id="bitcoin-purchase-faq"></span>
<span id="how-can-i-sell-bitcoin-through-ginger-wallet"></span>
<span id="do-i-need-to-select-my-country-before-selling-bitcoin"></span>
<span id="how-do-i-enter-the-amount-i-want-to-sell"></span>
<span id="are-there-minimum-and-maximum-limits-for-sales"></span>
<span id="how-do-i-choose-the-best-offer-for-my-sale"></span>
<span id="what-happens-after-i-accept-an-offer"></span>
<span id="how-do-i-complete-the-bitcoin-sale-transaction"></span>
<span id="can-i-view-my-past-sales"></span>
<span id="what-does-it-mean-if-a-transaction-is-on-hold"></span>
<span id="can-i-change-the-browser-used-for-redirection"></span>

> Niveau de lecture : utilisation courante. Choisissez ce guide lorsque vous avez besoin de la tâche qu'il décrit.

Une vente échange du bitcoin contre la méthode de paiement offerte par un prestataire. Ginger obtient les offres et prépare l'on-chain, mais le prestataire contrôle le versement fiat et l'examen de commande. Lisez ses exigences avant d'engager les fonds.

<span id="create-and-fund-a-sale" aria-hidden="true"></span>

## Créer et financer une vente

1. Ouvrez un portefeuille synchronisé avec du bitcoin dépensable et choisissez **Sell**. Si absent, vérifiez la progression de récupération et la capacité d'envoi.
2. Sélectionnez pays ou région si demandé. Saisissez le montant à vendre et la devise de réception souhaitée. Vérifiez unités et limites affichées.
3. Choisissez **Continue**, filtrez **Offers** par méthode et comparez versement net et frais.
4. Choisissez **Accept**. Terminez le navigateur jusqu'à destination Bitcoin exacte, montant et éventuelle échéance.
5. Revenez au dialogue de vente Ginger et **Send**. Saisissez ou vérifiez destination et montant exacts fournis. Ne supposez pas que le navigateur a correctement rempli tous les champs.
6. Vérifiez frais et réception avant confirmation. Le montant demandé doit arriver après éventuelle soustraction de frais ; ne confondez pas « tout envoyer » avec payer une facture fixe.
7. Consultez historique et **Previous Orders** pour la progression. Gardez identifiants de commande et transaction.

Le dialogue conserve le contexte sans supprimer votre responsabilité de comparer demande et aperçu. Si le devis expire avant envoi, obtenez une instruction actualisée plutôt que de payer spéculativement une ancienne adresse.

<span id="understand-status" aria-hidden="true"></span>

## Comprendre l'état

| État dans les détails | Que faire |
| --- | --- |
| **Created** | La commande existe ; vérifiez les étapes restantes avant de payer à nouveau. |
| **Pending** | Le traitement continue. Comparez état prestataire et historique. |
| **Your transaction is on hold. Please contact Support.** | Contactez le prestataire choisi avec l'identifiant. Ginger ne peut lever son examen. |
| **Expired** | Ne supposez pas un ancien devis ou adresse encore utilisables. Demandez au prestataire si les fonds ont déjà été envoyés. |
| **Failed** | Vérifiez les transferts de paiement ou bitcoin avant une nouvelle commande. |
| **Refunded** | Confirmez méthode, destination et règlement du remboursement avec le prestataire. |
| **Completed** | Vérifiez réception Bitcoin ou versement fiat attendu dans le portefeuille ou compte concerné. |

Les états reflètent la dernière information de l'intégration et peuvent retarder les événements. Une indication d'attente sur **Buy** ou **Sell** signale une commande nécessitant attention ; pas une clé perdue.

<span id="which-support-channel-to-use" aria-hidden="true"></span>

## Quelle assistance contacter

Pour identité, retard de versement, méthodes acceptées, remboursement ou attente, contactez le prestataire via son site authentifié. Fournissez identifiant et seulement les informations de transaction nécessaires à ce cas. Gardez les détails privés hors des issues GitHub publiques.

Pour crash Ginger, navigateur qui ne s'ouvre pas ou commande mal affichée, signalez version, système, erreur et étapes via les liens officiels. N'incluez pas mots, phrases, secrets 2FA, fichiers ou journaux complets sans en avoir examiné le contenu.

<span id="privacy-and-fees" aria-hidden="true"></span>

## Confidentialité et frais

Le prestataire relie la demande à l'identité ou méthode fournie. Dépenser des fonds CoinJoined ne supprime pas cet enregistrement, et il peut appliquer sa propre politique. Ginger ne garantit pas l'acceptation de tous les historiques par chaque plateforme.

Comparez versement annoncé au bitcoin, frais prestataire et minage séparé de votre paiement. Gardez assez de valeur dépensable pour ce dernier. Solde bas, hausse de frais ou phase CoinJoin critique peut empêcher le paiement immédiat d'une commande valide.
