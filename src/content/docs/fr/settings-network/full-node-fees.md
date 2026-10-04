---
doc_id: "settings-network.full-node-fees"
title: "Utiliser votre propre nœud Bitcoin et choisir les estimations de frais"
description: "Configurez le téléchargement des blocs Ginger depuis un nœud que vous contrôlez, examinez la fonction Bitcoin Core intégrée facultative et choisissez un fournisseur de taux de frais."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Vérifiez d'abord l'état ordinaire de la connexion et de la synchronisation.

Utiliser votre propre nœud Bitcoin peut réduire la dépendance aux pairs publics pour les données de blocs. Cela ajoute aussi des responsabilités de stockage, de bande passante, de disponibilité et de maintenance. Vous pouvez utiliser Ginger sans activer le nœud complet facultatif.

<span id="start-the-bundled-node" data-ginger-heading="démarrer-le-nœud-intégré" aria-hidden="true"></span>

## Démarrer le nœud intégré

Dans **Settings** → **Bitcoin**, l'option s'appelle **(EXPERIMENTAL) Run Bitcoin Core on startup**. La version 2.0.26 intègre Bitcoin Core 31. Utilisez des instructions adaptées à ce nœud intégré et à votre version installée.

1. Choisissez un **Bitcoin Core Data Folder** disposant de suffisamment d'espace et d'un stockage fiable. Ne désignez pas un dossier sans rapport et ne laissez pas deux processus de nœud gérer simultanément le même répertoire.
2. Activez **(EXPERIMENTAL) Run Bitcoin Core on startup** et redémarrez Ginger lorsque cela vous est demandé.
3. Laissez la synchronisation initiale du nœud se poursuivre. Surveillez l'état de la connexion et du téléchargement ; la première synchronisation peut prendre beaucoup de temps.
4. Réglez **Stop Bitcoin Core on shutdown** selon que vous souhaitez ou non laisser le nœud fonctionner après la fermeture de Ginger.

N'activez pas cette option uniquement pour corriger un solde de portefeuille manquant. Un nœud ne peut pas récupérer une phrase secrète inconnue ni restaurer les étiquettes. Un répertoire de nœud existant peut contenir une configuration précieuse et ses propres portefeuilles ; préservez sa sauvegarde avant de changer l'application qui le gère.

Le nœud complet peut vérifier les blocs localement, mais cela ne supprime pas les dépendances de Ginger au coordinateur, à la 2FA, aux services d'achat et de vente ou à d'autres services. Cela ne cache pas non plus une transaction que vous divulguez volontairement à une plateforme d'échange.

<span id="connect-to-an-existing-node" data-ginger-heading="se-connecter-à-un-nœud-existant" aria-hidden="true"></span>

## Se connecter à un nœud existant

Lorsque l'option de démarrage du nœud intégré est désactivée, **Bitcoin P2P Endpoint** permet d'indiquer un nœud que vous contrôlez pour télécharger les blocs. Saisissez son hôte joignable et son port P2P. Pour un nœud Bitcoin Core du réseau principal sur le même ordinateur, le point de terminaison habituel est `127.0.0.1:8333`, à condition que votre nœud y écoute réellement. Ce champ attend un point de terminaison de pair Bitcoin, pas une URL d'explorateur de blocs ou des identifiants RPC.

Assurez-vous que le nœud autorise la connexion de votre portefeuille et possède les données de blocs nécessaires. Un nœud élagué peut ne pas conserver les anciens blocs dont a besoin un portefeuille récupéré. Si une analyse historique se bloque, vérifiez la disponibilité des données au lieu de supposer que toutes les configurations de nœud sont interchangeables.

Une connexion à un nœud distant a sa propre exposition réseau. Utilisez un nœud et un transport que vous comprenez ; définir simplement un point de terminaison ne prouve pas que toutes les connexions vers lui sont privées. Évitez d'ouvrir l'accès RPC d'administration à l'Internet public pour faire fonctionner une connexion de portefeuille.

<span id="choose-fee-estimates-separately" data-ginger-heading="choisir-séparément-les-estimations-de-frais" aria-hidden="true"></span>

## Choisir séparément les estimations de frais

**Fee Rate Provider** propose **Mempool Space**, **Blockstream Info** et **Full Node**. Les fournisseurs publics donnent des estimations à partir de leur vision des conditions du réseau. Le choix du nœud complet exige une intégration nœud/RPC fonctionnelle dans Ginger ; saisir seulement un point de terminaison P2P ne prouve pas que l'estimation des frais par RPC est configurée.

Lorsque **Full Node** est sélectionné mais que le nœud est indisponible, la version v2.0.26 signale que l'estimation des frais est indisponible et permet encore une saisie manuelle pendant le paiement. Vous pouvez attendre le nœud, sélectionner un fournisseur d'estimations fonctionnel ou saisir un taux que vous avez des raisons de juger fiable. N'utilisez pas des frais énormes comme solution générique à un problème de connexion.

Les estimations de frais sont des prévisions, pas des réservations d'espace dans un bloc. Une différence entre fournisseurs peut refléter des observations différentes de la mempool. Examinez les frais totaux de la transaction ainsi que le taux affiché.

<span id="dust-threshold" data-ginger-heading="seuil-de-poussière" aria-hidden="true"></span>

## Seuil de poussière

**Dust Threshold**, également sous **Settings** → **Bitcoin**, contrôle le traitement par le portefeuille des très petits montants reçus. Il est distinct de la politique de relais du réseau, du seuil d'arrêt CoinJoin et du montant minimal d'entrée d'un coordinateur. L'augmenter peut modifier les petits paiements traités par le portefeuille ; cela ne supprime pas leurs sorties sur la blockchain et n'empêche pas quelqu'un de les envoyer. Préservez votre réglage précédent lorsque vous cherchez pourquoi un petit paiement est introuvable de façon inattendue.
