---
doc_id: "coinjoin.use-coinjoin"
title: "Utiliser CoinJoin dans Ginger Wallet"
description: "Démarrer, mettre en pause et surveiller CoinJoin dans Ginger, comprendre quels fonds sont admissibles et éviter d'interrompre un tour en cours."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

<span id="what-is-a-coinjoin"></span>
<span id="what-are-the-fees-for-coinjoins"></span>
<span id="do-i-need-to-trust-ginger-with-my-coins"></span>

> Niveau de lecture : commencez ici. Les étapes essentielles sont présentées en premier ; les références avancées constituent un complément facultatif.

CoinJoin crée une transaction Bitcoin avec d'autres participants afin de rendre les liens entre ses entrées et ses sorties plus difficiles à déduire. Ginger signe uniquement les entrées de votre portefeuille ; vous ne versez aucun dépôt sur un compte contrôlé par un coordinateur. Les tours réussis entraînent tout de même des frais et ne garantissent pas l'anonymat.

<span id="before-starting" data-ginger-heading="avant-de-commencer" aria-hidden="true"></span>

## Avant de commencer

Ouvrez un portefeuille logiciel dont vous avez sauvegardé les informations de récupération et laissez-le se synchroniser. Assurez-vous de disposer de bitcoins confirmés, gardez l'ordinateur connecté et examinez le coût prévu avant de commencer. Les tours réussis entraînent des frais de minage et peuvent également entraîner des frais de coordinateur ; participer à plusieurs tours peut augmenter les coûts. La [référence avancée sur les coûts](/fr/using-ginger/annonset/), facultative, explique le calcul. Un portefeuille matériel peut recevoir et envoyer des paiements ordinaires, mais il ne peut pas servir à signer les transactions du processus CoinJoin automatique de Ginger.

Les frais de coordinateur sont vérifiés pour chaque coin utilisé comme entrée dans le tour. Les coins d'une valeur inférieure ou égale à 0.03 BTC (3,000,000 satoshis) ne paient pas de frais de coordinateur. Les coins de plus grande valeur paient normalement 0.3% de leur valeur totale, bien que les remix qui remplissent les conditions requises puissent également être exonérés. Les frais de minage restent applicables, même lorsque les frais de coordinateur sont nuls.

Le portefeuille doit disposer de fonds confirmés et utilisables, et les conditions du tour doivent être appropriées. Aucun solde ni aucun délai d'attente ne garantit un démarrage immédiat. Lisez l'état actuel avant de modifier les paramètres.

<span id="start-and-pause" data-ginger-heading="démarrer-et-mettre-en-pause" aria-hidden="true"></span>

## Démarrer et mettre en pause

1. Ouvrez **Coinjoin Settings** depuis le menu du lecteur CoinJoin, ou trouvez cette option avec la recherche de Ginger lorsque le portefeuille est ouvert.
2. Examinez les préférences de coût du portefeuille et laissez ce portefeuille comme destination des sorties pour une utilisation ordinaire. Le guide facultatif sur les paramètres avancés traite des objectifs personnalisés et de l'acheminement des sorties.
3. Activez **Automatically start coinjoin** si vous souhaitez participer sans intervention lorsque les conditions le permettent. Pour démarrer manuellement, utilisez le bouton de lecture du lecteur. Lorsque le lecteur est arrêté, il peut afficher **Press Play to start**.
4. Surveillez l'état affiché sous le lecteur. Le portefeuille peut attendre des confirmations, un tour approprié ou des frais moins élevés avant de participer.
5. Utilisez le bouton de pause du lecteur lorsque vous souhaitez arrêter les participations suivantes. Laissez toute phase critique de la transaction se terminer. Désactiver le démarrage automatique modifie le comportement futur ; cela n'annule pas une transaction déjà diffusée.

N'envoyez pas de bitcoins à une adresse fournie par quelqu'un qui prétend « activer » CoinJoin. Il n'existe aucun paiement d'activation distinct à verser à un agent d'assistance.

<span id="read-the-status" data-ginger-heading="comprendre-létat-affiché" aria-hidden="true"></span>

## Comprendre l'état affiché

| Message | Signification et étape suivante |
| --- | --- |
| **Awaiting auto-start of coinjoin** | Le délai précédant le démarrage automatique est en cours. Gardez le portefeuille ouvert. |
| **Awaiting confirmed funds** | Attendez que les fonds entrants admissibles soient confirmés. |
| **Awaiting cheaper coinjoins** | Vos préférences de coût empêchent le portefeuille de participer aux tours actuels. Vérifiez les paramètres avant d'assouplir ces préférences. |
| **Skipping a round for better privacy** | Le mécanisme qui ignore certains tours de manière aléatoire est actif. Il ne s'agit pas d'un problème de connexion. |
| **Awaiting other participants** | L'inscription est en cours. Les autres participants doivent eux aussi terminer leurs étapes. |
| **Awaiting the blame round** | La tentative précédente n'a pas pu aboutir ; le protocole effectue une nouvelle tentative avec les participants admissibles. Ce message ne vous demande pas d'identifier quelqu'un. |
| **Insufficient participants, retrying...** | La tentative n'a pas réuni le nombre de participants requis. Attendez un autre tour. |
| **Awaiting closure of send dialog** | Terminez ou fermez la procédure de paiement avant de vous attendre à ce que CoinJoin reprenne. |
| **Coinjoin may be uneconomical** | Le seuil d'arrêt entre en jeu. Ajouter des fonds ou passer outre ce seuil manuellement est un choix qui entraîne des coûts, et non une réparation obligatoire. |
| **Coinjoin successful! Continuing...** | Un tour a réussi. D'autres tours peuvent suivre si le portefeuille a encore du travail à effectuer. |

Pour les messages de refus, de connexion ou d'admissibilité, conservez le texte exact de l'erreur. Réinstaller Ginger ou créer de nouveaux mots de récupération n'est pas une réponse normale à un état d'attente.

<span id="keep-the-wallet-available" data-ginger-heading="garder-le-portefeuille-disponible" aria-hidden="true"></span>

## Garder le portefeuille disponible

Le portefeuille doit avoir accès aux clés pendant sa participation. Un portefeuille logiciel protégé par une phrase secrète doit être ouvert avant de pouvoir signer. L'authentification à deux facteurs protège le démarrage ; elle ne demande pas à votre application d'authentification d'approuver chaque tour.

La mise en veille, une perte de connexion à Internet ou un arrêt forcé peuvent interrompre un tour. Si une transaction a déjà été diffusée, fermer l'application ne l'annule pas. Rouvrez Ginger, laissez-le se synchroniser et vérifiez l'historique avant de conclure à un échec ou de répéter une action. N'envoyez jamais un deuxième paiement simplement parce que l'application s'est fermée pendant le premier.

Selon les paramètres généraux, la fenêtre peut se fermer tandis que Ginger continue de fonctionner en arrière-plan. Pour arrêter complètement l'application, utilisez la commande de fermeture habituelle et laissez toute phase critique se terminer.

<span id="spend-after-coinjoin" data-ginger-heading="dépenser-après-coinjoin" aria-hidden="true"></span>

## Dépenser après CoinJoin

Une fois que les coins obtenus sont utilisables, vous pouvez les dépenser comme les autres bitcoins. La transaction CoinJoin reste publique. Combiner des coins privés et non privés sans lien entre eux, réutiliser une adresse ou divulguer une transaction à un service auquel vous vous êtes identifié peut créer de nouveaux liens. Examinez les coins sélectionnés et la monnaie rendue lorsque vous effectuez un paiement ; une participation antérieure à CoinJoin ne rend pas toutes vos actions futures privées.

<span id="you-do-not-need-to-manage-the-protocol" data-ginger-heading="vous-navez-pas-besoin-de-gérer-le-protocole" aria-hidden="true"></span>

## Vous n'avez pas besoin de gérer le protocole

Ginger gère l'inscription, la signature et les nouvelles tentatives. Si les vérifications de base de l'état n'expliquent pas ce que vous voyez, consultez les références avancées facultatives : [détails des tours](/fr/coinjoin/round-details/), [paramètres personnalisés](/fr/coinjoin/settings/) et [frais et progression de la confidentialité](/fr/using-ginger/annonset/).
