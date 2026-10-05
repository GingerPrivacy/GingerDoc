---
doc_id: "getting-started.first-wallet"
title: "Créer et ouvrir votre premier portefeuille Ginger"
description: "Créer un portefeuille Bitcoin, noter ses mots de récupération et sa phrase secrète, et comprendre la première synchronisation et les paramètres CoinJoin."
lang: fr
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Créer votre premier portefeuille
prev:
  link: /getting-started/install/
  label: Installer Ginger Wallet
next: false
---

> Niveau de lecture : commencez ici. Les étapes essentielles viennent d'abord ; les références avancées sont facultatives.

Un portefeuille Ginger contient les informations nécessaires pour reconnaître et dépenser votre bitcoin. Le bitcoin lui-même est enregistré sur le réseau Bitcoin. La perte de l'ordinateur est récupérable avec la bonne sauvegarde ; la perte simultanée du portefeuille et de ses informations de récupération peut ne pas l'être.

<span id="create-a-software-wallet" data-ginger-heading="créer-un-portefeuille-logiciel" aria-hidden="true"></span>

## Créer un portefeuille logiciel

1. Ouvrez l'écran d'ajout de portefeuille et choisissez **New**. Si **Wallet Name** apparaît, choisissez un nom distinct. Le premier portefeuille peut recevoir automatiquement un nom sans afficher cette étape.
2. Ginger affiche douze **Recovery Words** en anglais. Écrivez-les dans l'ordre affiché et gardez-les hors ligne. Ne les photographiez pas, ne les mettez pas dans un e-mail et ne les communiquez pas à l'assistance. Ginger ne les affichera plus après la création.
3. Passez à **Confirm Recovery Words** et sélectionnez les mots demandés depuis votre sauvegarde écrite. Cela vérifie que vous avez noté l'ordre, plutôt que simplement reconnu les mots à l'écran.
4. À **Add Passphrase**, saisissez et confirmez une phrase secrète, ou laissez les deux champs vides si vous choisissez délibérément un portefeuille sans phrase secrète. Notez si vous en avez utilisé une. Une phrase non vide est nécessaire pour la récupération comme pour ouvrir le portefeuille protégé ; ce n'est pas un mot de passe que Ginger peut réinitialiser.
5. Acceptez, le cas échéant, les conditions de service présentées. Laissez le portefeuille se connecter et se synchroniser avant de vous fier au solde.

Le nom du portefeuille est une étiquette locale. Il n'est pas un identifiant de récupération et ne change pas les clés. Renommer un portefeuille ne revient pas à en créer un nouveau.

<span id="decide-how-to-use-coinjoin" data-ginger-heading="décider-comment-utiliser-coinjoin" aria-hidden="true"></span>

## Décider comment utiliser CoinJoin

Ginger peut vous inviter à personnaliser les paramètres CoinJoin. Examinez les paramètres et les frais avant de laisser des fonds disponibles pour un CoinJoin automatique. Dans **Coinjoin Settings**, **Automatically start coinjoin** détermine si le portefeuille démarre sans appuyer sur lecture. Vérifiez l'interrupteur réel de votre portefeuille ; un portefeuille importé ou précédemment configuré peut avoir d'autres paramètres.

CoinJoin coûte des frais de transaction et peut prendre du temps. Recevoir du bitcoin, envoyer un paiement normal et utiliser CoinJoin sont des actions distinctes. Vous pouvez d'abord apprendre la réception et l'envoi avec un petit montant dont la perte resterait supportable.

<span id="open-an-existing-wallet" data-ginger-heading="ouvrir-un-portefeuille-existant" aria-hidden="true"></span>

## Ouvrir un portefeuille existant

Sélectionnez son nom dans la liste de Ginger. Saisissez la phrase secrète d'origine si elle est demandée. Si vous avez activé l'authentification à deux facteurs de l'application, terminez cette étape au démarrage avant d'ouvrir les portefeuilles individuels. Un portefeuille matériel utilise l'autorisation de son appareil plutôt qu'un secret logiciel sur l'ordinateur.

Pour ajouter un portefeuille depuis ses mots, choisissez **Recover** dans l'écran d'ajout. Pour charger une sauvegarde JSON compatible ou un export matériel pris en charge, choisissez **Import File**. Ne collez pas de mots dans un dialogue d'importation de fichier et n'importez pas les mots d'un portefeuille matériel simplement pour connecter l'appareil.

<span id="know-when-the-wallet-is-ready" data-ginger-heading="savoir-quand-le-portefeuille-est-prêt" aria-hidden="true"></span>

## Savoir quand le portefeuille est prêt

La synchronisation trouve les transactions de votre portefeuille. Tant qu'elle n'est pas terminée, le solde ou l'historique peut être incomplet. Un portefeuille récupéré peut masquer les actions normales de réception ou d'envoi pendant sa recherche. Un paiement entrant non confirmé a été détecté mais pas encore inclus dans un bloc.

Avant de recevoir un montant important, vérifiez que le portefeuille s'ouvre, que la sauvegarde est lisible et que vous comprenez votre choix de phrase secrète. Utilisez **Wallet Settings** → **Tools** → **Verify Recovery Words**, avec **Verify**, pour vérifier les mots d'un portefeuille logiciel accessible. Cela vérifie une sauvegarde ; cela ne révèle pas des mots oubliés.

<span id="close-safely" data-ginger-heading="fermer-en-sécurité" aria-hidden="true"></span>

## Fermer en sécurité

Fermer la fenêtre peut laisser Ginger actif si **Run in background when window closed** est activé dans **Settings** → **General**. Utilisez la sortie normale de l'application quand elle doit s'arrêter. Pendant une phase CoinJoin critique, laissez Ginger terminer sa procédure de fermeture. Le forcer à fermer peut interrompre la participation.

<span id="next-receive-and-send" data-ginger-heading="ensuite--recevoir-et-envoyer" aria-hidden="true"></span>

## Ensuite : recevoir et envoyer

Une fois la sauvegarde vérifiée et la synchronisation terminée, revenez à [Recevoir un premier petit paiement](/fr/getting-started/#3-receive-a-small-first-payment). La section suivante y explique votre premier envoi.
