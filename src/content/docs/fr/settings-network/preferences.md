---
doc_id: "settings-network.preferences"
title: "Apparence, langue et réglages du quotidien"
description: "Modifiez la langue de Ginger, les formats d'affichage, le fonctionnement en arrière-plan, les préférences de navigateur et le mode discret sans les confondre avec la sécurité du portefeuille."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Niveau de lecture : usage quotidien. Choisissez ce guide lorsque vous avez besoin de la tâche qu'il décrit.

Utilisez **Settings** pour les préférences communes à toute l'application et **Wallet Settings** pour le nom, la configuration CoinJoin et les outils du portefeuille sélectionné. La recherche de l'application permet de trouver des actions telles que **Data Folder**, **Wallet Info** et **Discreet Mode** sans dépendre de la position d'une icône.

<span id="language-and-amounts" data-ginger-heading="langue-et-montants" aria-hidden="true"></span>

## Langue et montants

Dans **Settings** → **Appearance**, **Language** sélectionne la langue de l'interface. La version 2.0.26 propose l'anglais, l'espagnol, le hongrois, le français, le chinois, l'allemand, le portugais, le turc et l'italien. Suivez toute demande de redémarrage. Ce manuel conserve les libellés anglais de la version publiée ; les libellés traduits peuvent être différents.

**Dark mode** change l'apparence. **Exchange currency** modifie la monnaie fiduciaire de référence affichée, tandis que les séparateurs décimaux et de groupes, le regroupement des fractions de bitcoin et **Fee display unit** contrôlent la présentation des nombres. Ces réglages ne modifient ni le montant sous-jacent en BTC ni les frais de transaction du réseau. Lisez les exemples des réglages avant de saisir un montant dans un format qui ne vous est pas familier.

<span id="discreet-mode" data-ginger-heading="mode-discret" aria-hidden="true"></span>

## Mode discret

Utilisez **Discreet Mode** lorsque quelqu'un peut voir votre écran. Il masque les champs d'affichage sensibles pris en charge pour limiter l'observation occasionnelle. Vérifiez ce qui est réellement masqué avant de partager votre écran : cette fonction ne garantit pas que tous les dialogues, toutes les adresses ou toutes les applications externes soient cachés.

Le mode discret ne chiffre pas les fichiers, ne verrouille pas le portefeuille, n'arrête pas la signature et ne modifie pas la confidentialité sur la blockchain. Une personne ayant accès à l'ordinateur peut toujours interagir avec l'application. Utilisez le verrouillage de l'écran du système d'exploitation lorsque vous vous éloignez.

<span id="general-settings" data-ginger-heading="réglages-généraux" aria-hidden="true"></span>

## Réglages généraux

| Réglage | Effet pratique |
| --- | --- |
| **Run Ginger when computer starts** | Ouvre Ginger avec la session du système d'exploitation. |
| **Run in background when window closed** | Permet à l'application de rester active après la fermeture de sa fenêtre. CoinJoin et la synchronisation peuvent donc continuer. |
| **Auto copy addresses** | Peut placer automatiquement une adresse affichée dans le presse-papiers. |
| **Auto paste addresses** | Peut utiliser le contenu du presse-papiers dans les procédures de saisie d'adresse. Vérifiez toujours la destination obtenue. |
| **Auto download new version** | Contrôle le téléchargement d'une mise à jour disponible ; suivez séparément la demande d'installation. |
| **Browser used by Ginger** | Choisit le navigateur utilisé pour les pages externes ; l'option personnalisée affiche **Custom browser path**. |

La commodité du presse-papiers n'authentifie pas le destinataire. D'autres applications peuvent lire ou remplacer ses données. Ne placez jamais les mots de récupération dans le presse-papiers pour une réception ou un envoi ordinaire.

Les pages externes utilisent le comportement réseau et de confidentialité du navigateur sélectionné. Un prestataire d'achat ou de vente peut demander des informations d'identification même si Ginger utilise Tor. Modifier une préférence d'affichage ou de navigateur ne change pas les données conservées par le prestataire.

<span id="wallet-information-and-tools" data-ginger-heading="informations-et-outils-du-portefeuille" aria-hidden="true"></span>

## Informations et outils du portefeuille

**Wallet Info** peut afficher les informations de compte et de clé publique étendue. Une clé publique étendue ne permet pas de dépenser directement les coins, mais peut révéler de nombreuses adresses liées. Ne la publiez pas dans une demande de support publique.

Sous **Wallet Settings** → **General**, utilisez la commande de nom pour renommer le portefeuille. Sous **Tools**, **Verify Recovery Words** vérifie la sauvegarde d'un portefeuille logiciel accessible, **Resync** reconstruit sa vue et **Delete Wallet** supprime un portefeuille local via sa procédure de confirmation. La suppression ne détruit pas les bitcoins, ne révoque pas les mots de récupération et ne remplace pas une sauvegarde. Conservez des informations de récupération fonctionnelles avant de supprimer l'accès local.
