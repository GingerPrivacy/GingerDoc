---
doc_id: "getting-started.start-here"
title: "Commencer ici : vos premiers pas avec Ginger"
description: "Comprendre Ginger, protéger votre sauvegarde de récupération et suivre un parcours simple de réception et d'envoi avant les fonctions avancées facultatives."
lang: fr
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Commencer ici
prev: false
next:
  link: /fr/getting-started/install/
  label: Installer Ginger Wallet
---

> Niveau de lecture : commencez ici. Les étapes essentielles viennent d'abord ; les références avancées sont facultatives.

Ginger permet de recevoir et d'envoyer du bitcoin sur votre ordinateur. Vous contrôlez les informations permettant de le dépenser. Ginger peut aussi rendre l'historique des paiements plus difficile à suivre grâce à une fonction facultative appelée CoinJoin.

Apprenez d'abord le fonctionnement ordinaire du portefeuille. Vous n'avez besoin ni de votre propre nœud Bitcoin, ni d'un appareil matériel, ni de paramètres CoinJoin avancés pour créer un portefeuille logiciel.

<!-- Préserver les liens vers les questions auparavant publiées sur cette page. -->
<span id="whats-the-officially-supported-operating-systems" aria-hidden="true"></span>
<span id="is-there-an-androidios-version" aria-hidden="true"></span>
<span id="does-ginger-support-altcoins" aria-hidden="true"></span>
<span id="what-are-the-minimal-requirements-to-run-ginger" aria-hidden="true"></span>
<span id="do-i-need-to-run-tor" aria-hidden="true"></span>

<span id="1-install-the-real-application" aria-hidden="true"></span>

## 1. Installer la véritable application

Suivez [Installer Ginger Wallet](/fr/getting-started/install/) et utilisez ses liens officiels. Choisissez le téléchargement pour votre ordinateur. N'installez pas une application mobile au nom similaire ou un logiciel envoyé par un inconnu proposant de l'aide.

Ginger prend en charge Windows, macOS et Linux ; le guide d'installation précise versions et processeurs. Cette version est exclusivement Bitcoin, sans application Android ou iOS. Il vous faut une connexion internet et du stockage accessible en écriture. Tor est inclus et ne nécessite pas d'installation séparée.

Conservez les vérifications de téléchargement de ce guide. La [référence avancée de vérification des signatures](/fr/getting-started/verify-download/) explique séparément les commandes lorsque vous en avez besoin.

<span id="what-is-the-password-used-for" aria-hidden="true"></span>

<span id="2-create-a-wallet-and-make-its-backup" aria-hidden="true"></span>

## 2. Créer un portefeuille et sa sauvegarde

Suivez [Créer votre premier portefeuille](/fr/getting-started/first-wallet/). Choisissez **New**, notez les douze **Recovery Words** dans l'ordre et terminez **Confirm Recovery Words**. Gardez la sauvegarde écrite privée et accessible même après la perte de l'ordinateur.

À **Add Passphrase**, comprenez votre choix avant de continuer. Si vous utilisez une phrase secrète, les mots d'origine et cette phrase exacte sont tous deux nécessaires à la récupération. Elle protège aussi l'accès au portefeuille sur l'ordinateur. Ginger ne peut pas la réinitialiser. Laisser les champs vides crée un portefeuille sans cette phrase supplémentaire ; notez votre choix.

N'y conservez pas un solde significatif avant que la sauvegarde soit lisible et que vous puissiez ouvrir le portefeuille voulu. Ne communiquez jamais les mots ou la phrase secrète à l'assistance.

<span id="why-is-it-important-to-use-a-new-address-for-every-payment" aria-hidden="true"></span>

<span id="3-receive-a-small-first-payment" aria-hidden="true"></span>

## 3. Recevoir un premier petit paiement

Attendez la fin de la synchronisation : le portefeuille consulte le réseau Bitcoin pour trouver vos transactions. Choisissez **Receive**, ajoutez une étiquette utile et générez une adresse de réception. Communiquez-la au payeur prévu, ou utilisez-la dans le retrait Bitcoin on-chain d'une plateforme d'échange.

Générez une nouvelle adresse pour chaque paiement. Réutiliser une adresse facilite le rapprochement de paiements distincts sur le registre public Bitcoin.

Vérifiez l'adresse entière et le réseau avant l'autorisation du paiement. Ginger reçoit du Bitcoin on-chain ; le réseau d'un autre actif ou une facture Lightning ne sont pas interchangeables. Une confirmation signifie que la transaction a été incluse dans un bloc Bitcoin. Une capture d'écran du payeur ne suffit pas.

<span id="4-make-a-small-first-payment" aria-hidden="true"></span>

## 4. Effectuer un premier petit paiement

Choisissez **Send** et la sélection **Automatic** pour le parcours ordinaire. Saisissez l'adresse du destinataire et le montant, choisissez **Continue**, puis vérifiez la destination, le montant reçu et les frais. Choisissez **Confirm** uniquement si tout est correct.

Les frais paient l'espace de transaction Bitcoin. Si une partie de l'argent sélectionné reste inutilisée, elle revient dans votre portefeuille comme monnaie rendue. Vous n'avez pas à la renvoyer manuellement. Ginger ne peut pas annuler un paiement confirmé.

Après une erreur de connexion, vérifiez l'historique avant de réessayer. Cela aide à éviter un double paiement si la première transaction a déjà été envoyée.

<span id="5-decide-whether-to-use-coinjoin" aria-hidden="true"></span>

## 5. Décider d'utiliser CoinJoin

CoinJoin combine l'activité de plusieurs personnes dans une transaction Bitcoin commune afin de rendre les liens de propriété plus difficiles à déduire. Votre portefeuille conserve ses clés de signature. Cela coûte des frais, peut prendre du temps et ne peut pas effacer les informations déjà connues d'un destinataire ou d'une plateforme.

Vérifiez **Automatically start coinjoin** dans **Coinjoin Settings** du portefeuille sélectionné. Désactivez la participation automatique pendant votre apprentissage si vous ne souhaitez pas un démarrage sans surveillance. Si un tour est actif, utilisez pause et laissez les tâches critiques se terminer.

Vous pouvez recevoir et effectuer des paiements ordinaires sans attendre un indicateur de confidentialité à 100 %. Vous n'avez pas non plus à régler tous les paramètres avancés pour commencer.

<span id="you-have-finished-the-first-use-path" aria-hidden="true"></span>

## Vous avez terminé le parcours initial

Les vérifications essentielles sont une sauvegarde récupérable, le portefeuille voulu, le bon réseau de paiement, le destinataire et les frais réels. Continuez à utiliser de nouvelles adresses et à vérifier chaque paiement.

Revenez ici pour retrouver la liste de réception et d'envoi. La section **Advanced use** est distincte du parcours initial. Par exemple, [Vérifier un téléchargement Ginger Wallet](/fr/getting-started/verify-download/) explique en détail les commandes de vérification de signature.
