---
doc_id: "learn-privacy.information-sharing"
title: "Où vont les informations de votre portefeuille"
description: "Comprendre ce que synchronisation, CoinJoin, prestataires, explorateurs, 2FA, Secret Hunt et autres applications peuvent révéler, et ce que Tor change."
lang: fr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Comprenez d'abord les nouvelles adresses de réception et la vérification ordinaire des paiements.

Les actions du portefeuille divulguent des informations différentes. Consulter des filtres de blocs publics, soumettre une entrée CoinJoin et ouvrir une page d'achat ne sont pas le même événement de confidentialité. Consultez cette référence avant de partager quelque chose que vous ne pourrez pas retirer.

Tor réduit l'exposition directe de l'IP pour les connexions qui le traversent. Il ne masque pas une requête à son destinataire, ne retire pas une transaction de la blockchain, ne protège pas un ordinateur déverrouillé et ne modifie pas automatiquement votre navigateur externe. Un nœud local configuré constitue une connexion distincte à une machine que vous contrôlez.

<span id="synchronization-and-bitcoin-network-activity" aria-hidden="true"></span>

## Synchronisation et activité réseau Bitcoin

| Action et destinataire | Informations concernées | Votre choix |
| --- | --- | --- |
| Télécharger les données de synchronisation depuis le backend Ginger | Le client demande les filtres publics depuis sa position de synchronisation. Il compare les scripts du portefeuille localement sans envoyer une xpub de compte dans cette requête. Le service voit néanmoins les requêtes et leurs horaires. | Gardez Tor activé ; laissez finir la synchronisation sans supposer le backend aveugle à toute utilisation. |
| Télécharger un bloc correspondant depuis une source de blocs | La source apprend quel bloc complet est demandé. Une correspondance peut être un faux positif ; demander un bloc ne prouve pas la propriété d'une transaction qu'il contient. | Un nœud personnel correctement configuré peut fournir les blocs. Ce réglage ne remplace pas tous les autres services de Ginger. |
| Demander des estimations de frais | Le prestataire configuré reçoit une demande d'informations publiques sur les frais. Elle diffère d'une recherche de votre transaction ou solde. | Dans **Fee Rate Provider**, choisissez une source disponible adaptée ; l'option nœud personnel exige un nœud configuré opérationnel. |
| Diffuser un paiement | Un pair ou service de diffusion de secours reçoit la transaction signée. Entrées, sorties et montants deviennent visibles pendant la propagation. | Vérifiez avant signature. Tor change l'exposition de connexion, pas le contenu. Ginger peut utiliser des voies de secours après un échec. |

Pour votre nœud Bitcoin, protégez l'accès à la machine et aux connexions distantes. Son opérateur peut observer les demandes : un serveur simplement appelé « votre nœud » n'est pas nécessairement privé s'il est administré par un tiers. Accès internet normal, découverte des pairs et disponibilité comptent toujours.

<span id="coinjoin-and-optional-services" aria-hidden="true"></span>

## CoinJoin et services facultatifs

| Action et destinataire | Informations concernées | Votre choix |
| --- | --- | --- |
| Participer avec un coordinateur CoinJoin | Entrées soumises et preuves de propriété, enregistrements des sorties, messages et horaires. WabiSabi vise à masquer les correspondances selon ses hypothèses. | Vérifiez participation, coûts et destination ; gardez Tor. Ne confondez pas absence de garde par un tiers et protection contre tout observateur actif. |
| Demander des offres d'achat/vente et valider une adresse | Les paramètres incluent pays, devise, montant et méthode de paiement selon le cas. La validation envoie l'adresse proposée au service avant la finalisation d'une commande. | Considérez la divulgation avant de poursuivre, même si vous abandonnez ensuite. |
| Créer ou poursuivre une commande d'achat/vente | L'intégration envoie les détails et une adresse de réception ou remboursement, puis ouvre le parcours prestataire. Celui-ci peut demander paiement, coordonnées ou identité selon ses conditions. | Lisez ses conditions actuelles et ne donnez que ce que vous souhaitez. Ginger ne rend pas anonyme un achat identifié. |
| Utiliser la 2FA Ginger facultative | La vérification normale au démarrage envoie un code d'authentification et un identifiant d'installation. Le service renvoie la clé de la couche de chiffrement supplémentaire des fichiers. | Décidez si cette protection et dépendance conviennent. Gardez mots et phrase secrète d'origine indépendamment disponibles. |
| Participer aux vérifications Secret Hunt | Les contrôles d'événements admissibles peuvent envoyer identifiant de tour, identifiant de transaction, outpoint d'entrée et preuve de contrôle. Un outpoint identifie une sortie précise d'une transaction précédente. | Ouvrez **Secret Hunt** et examinez l'interrupteur décrit comme **Enable/disable the use of this wallet for Secret Hunt.** Il est activé par défaut, même si les événements pertinents ne sont pas nécessairement actifs. Le désactiver ne retire pas les demandes antérieures. |

Tor ne cache pas au service destinataire une adresse soumise pour validation, les détails d'une commande, un identifiant 2FA ou une preuve Secret Hunt. Ces observations ne signifient pas non plus que voir un identifiant de transaction donne au service les mots de récupération ou le pouvoir de dépenser.

L'identifiant 2FA peut relier les tentatives normales de démarrage auprès de ce service. La clé de chiffrement renvoyée fait partie d'une protection supplémentaire des fichiers locaux, pas d'une nouvelle clé Bitcoin remplaçant mots et phrase secrète. N'envoyez ni ces secrets ni vos codes d'authentification aux contacts d'assistance.

<span id="browsers-other-applications-and-people" aria-hidden="true"></span>

## Navigateurs, autres applications et personnes

| Action | Divulgation possible | Habitude utile |
| --- | --- | --- |
| Ouvrir un explorateur public | Transaction/adresse recherchée et informations réseau et de session du navigateur | Commencez par l'historique local ; n'ouvrez un explorateur que pour des informations supplémentaires nécessaires. |
| Utiliser un site prestataire | Détails de commande, connexion/paiement, cookies et observations propres au site | Traitez la session navigateur séparément du réglage Tor de Ginger. |
| Importer une xpub ou utiliser le compte dans une autre application | Branche d'adresses publiques ou requêtes dérivées, selon l'application | Vérifiez sa synchronisation et ses partages avant l'import. « Lecture seule » décrit le pouvoir de dépenser, pas la confidentialité. |
| Partager une adresse par message ou publication | Lien entre adresse et personne ou compte expéditeur | Donnez une nouvelle adresse au payeur voulu via un canal fiable. |
| Partager journaux, fichiers ou écran | Selon le contenu : chemins, étiquettes, adresses, identifiants de transactions/tours et éventuellement secrets | Partagez le plus petit extrait pertinent et vérifié. N'envoyez jamais toutes les données ou secrets simplement parce qu'on les demande. |

La recherche sur les paiements web montre pourquoi observations du navigateur et blockchain doivent être considérées ensemble. Elle n'établit pas la politique actuelle d'un prestataire Ginger précis. [Goldfeder et collègues, When the Cookie Meets the Blockchain](https://arxiv.org/abs/1708.04748)

<span id="local-information-also-needs-protection" aria-hidden="true"></span>

## Les informations locales doivent aussi être protégées

Étiquettes, comptabilité de confidentialité et commandes peuvent résider dans les métadonnées. Elles servent aux décisions futures et à la récupération, mais ne sont pas toutes protégées comme les clés de signature. Protégez ordinateur, sauvegardes et comptes qui y accèdent. **Discreet Mode** aide pour les champs d'écran pris en charge ; le verrouillage du système protège plus largement un accès sans surveillance.

Restaurer depuis les mots récupère les clés sans toutes les notes privées. Supprimer ces notes n'efface pas ce qu'un destinataire ou service sait déjà. Avant de changer d'installation, lisez [la migration de portefeuille](/fr/learn-privacy/wallet-migration/) ; avant de payer, vérifiez [les habitudes de confidentialité](/fr/using-ginger/address-reuse/).
