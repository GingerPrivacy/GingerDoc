---
doc_id: "settings-network.tor-sync"
title: "Tor, synchronisation et confidentialité réseau"
description: "Comprendre les connexions Ginger, la protection Tor et le diagnostic d'une synchronisation lente sans exposer l'activité du portefeuille."
lang: fr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Niveau de lecture : utilisation courante. Choisissez ce guide lorsque vous avez besoin de la tâche qu'il décrit.

Ginger a besoin de données réseau pour découvrir vos transactions, diffuser les paiements et participer à CoinJoin. Tor est inclus et activé par défaut pour ses connexions ordinaires. Il aide à séparer votre adresse IP des services contactés, mais ne cache pas les montants et transactions Bitcoin publics.

<span id="tor-settings" data-ginger-heading="paramètres-tor" aria-hidden="true"></span>

## Paramètres Tor

Ouvrez **Settings** → **Security** et trouvez **Network anonymization (Tor)**. Gardez-le activé pour l'usage privé normal. Redémarrez si demandé pour que la configuration réseau active corresponde aux paramètres. La 2FA Ginger exige Tor et l'interface limite sa désactivation lorsque la 2FA est active.

**Terminate Tor when Ginger shuts down** contrôle l'arrêt de Tor. Son processus peut rester après la fermeture de la fenêtre parce que Ginger fonctionne en arrière-plan ou parce que Tor n'est pas configuré pour s'arrêter. Fermer une fenêtre et quitter l'application sont deux actions différentes.

Désactiver Tor change les informations exposées aux services et pairs contactés. Ce n'est pas un réglage de performance inoffensif. En particulier, les connexions au coordinateur ou au pair de diffusion peuvent être associées à votre adresse réseau. Ne le désactivez pas systématiquement en réponse à une attente CoinJoin.

La connexion Tor de Ginger ne transforme pas non plus le navigateur externe en Tor Browser. Prestataires, explorateurs et autres liens utilisent le navigateur configuré. Examinez-le séparément avant de supposer que ses demandes héritent de la protection du portefeuille.

<span id="what-synchronization-does" data-ginger-heading="ce-que-fait-la-synchronisation" aria-hidden="true"></span>

## Ce que fait la synchronisation

Ginger utilise des filtres de blocs compacts pour repérer les blocs potentiellement pertinents, puis traite localement les blocs téléchargés pour son portefeuille. Cela réduit le besoin d'envoyer toutes vos adresses à un serveur public de portefeuille. Il dépend toujours des services et pairs pour les données et du bon fonctionnement de son logiciel local.

La première utilisation et la récupération peuvent prendre davantage de temps que la réouverture récente. La progression peut comprendre connexion, obtention des filtres, téléchargement des blocs et traitement du portefeuille. Un portefeuille récupéré peut temporairement montrer un historique incomplet ou masquer des actions jusqu'à la fin de l'analyse.

Exécuter un nœud complet et synchroniser un portefeuille sont deux tâches distinctes. Le nœud facultatif valide la blockchain ; le portefeuille doit ensuite trouver ses transactions. L'état synchronisé du nœud ne signifie pas nécessairement que l'analyse du nouveau portefeuille récupéré est achevée.

<span id="when-synchronization-appears-stuck" data-ginger-heading="quand-la-synchronisation-semble-bloquée" aria-hidden="true"></span>

## Quand la synchronisation semble bloquée

1. Vérifiez l'état exact et s'il évolue avec le temps. Une grande analyse de récupération diffère de **Awaiting connection**.
2. Vérifiez internet, date et heure correctes, et espace disque. Ginger doit avoir l'autorisation d'écrire ses données.
3. Si un nœud complet est configuré, vérifiez qu'il est joignable et synchronisé. Examinez l'endpoint plutôt que de changer les identifiants du portefeuille.
4. Fermez Ginger normalement et rouvrez-le une fois si la connexion reste bloquée. Gardez l'erreur et le contexte de journal si le problème revient.

Si Tor est bloqué sur votre réseau, consultez [les conseils du projet Tor](https://support.torproject.org/). Les paramètres de cette version Ginger n'exposent pas d'assistant documenté de configuration des bridges. Ne copiez pas les paramètres Tor Browser dans des champs Ginger arbitraires en supposant qu'ils fonctionneront.

Utilisez **Wallet Settings** → **Tools** → **Resync** uniquement si vous avez une raison de reconstruire la vue du portefeuille. Préservez les sauvegardes d'abord et laissez la nouvelle analyse se terminer. Supprimer le dossier de données n'est pas la première étape de dépannage.

<span id="separate-network-choice-from-real-funds" data-ginger-heading="séparer-le-choix-réseau-des-fonds-réels" aria-hidden="true"></span>

## Séparer le choix réseau des fonds réels

Le sélecteur **Settings** → **Bitcoin** de cette version propose Main et RegTest. RegTest est destiné à un test isolé et n'a aucune valeur Bitcoin réelle ; ce manuel ne couvre pas son exploitation. Cette interface ne propose pas de testnet public. Changer de réseau ne déplace pas les fonds entre eux.
