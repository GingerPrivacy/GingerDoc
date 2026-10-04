---
doc_id: "help.faq"
title: "FAQ Ginger Wallet : commencez ici"
description: "Réponses courtes sur fonds manquants, sauvegardes, récupération, attentes et frais CoinJoin, paiements en attente, matériel et assistance sûre."
lang: fr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Niveau de lecture : commencez ici. Les réponses courtes et les premiers contrôles viennent avant les références avancées facultatives.

Commencez par la question la plus proche de ce que vous voyez. Ces réponses couvrent l'usage ordinaire et les premiers contrôles sûrs ; la [FAQ avancée](/fr/help/advanced-faq/) est une suite facultative pour les paramètres personnalisés et les cas particuliers.

- [Commencer ici](#start-here)
- [Récupération et fonds manquants](#recovery-and-missing-funds)
- [Connexion et mises à jour](#connection-and-updates)
- [Les bases de CoinJoin](#coinjoin-basics)
- [Paiements et matériel](#payments-and-hardware)
- [Obtenir de l'aide en sécurité](#getting-help-safely)

<span id="start-here" aria-hidden="true"></span>

## Commencer ici

<span id="what-is-ginger-and-does-it-hold-my-bitcoin" aria-hidden="true"></span>

### Qu'est-ce que Ginger, et détient-il mon bitcoin ?

Ginger est une application pour ordinateur permettant de recevoir et d'envoyer du Bitcoin on-chain, avec des fonctions CoinJoin facultatives. Vous contrôlez les clés autorisant les dépenses ; participer à un tour ne confie pas la garde au coordinateur. Protégez l'ordinateur et la sauvegarde, car le contrôle des clés ne supprime pas les risques de vol, d'erreurs ou de perte d'accès.

<span id="is-there-an-official-mobile-or-web-wallet" aria-hidden="true"></span>

### Existe-t-il un portefeuille mobile ou web officiel ?

La v2.0.26 fournit un logiciel pour les ordinateurs Windows, macOS et Linux compatibles. Elle ne propose ni Android, ni iOS, ni navigateur, ni paiements Lightning, ni autres cryptomonnaies. Partez du [site Ginger officiel](https://gingerwallet.io/) et de ses liens de versions ; ne saisissez pas les mots dans une application ou un site simplement parce qu'il porte le nom Ginger.

<span id="do-i-need-an-account-my-own-node-or-a-hardware-wallet" aria-hidden="true"></span>

### Ai-je besoin d'un compte, d'un nœud personnel ou d'un portefeuille matériel ?

Non. La création logicielle normale utilise des informations de récupération locales et n'exige ni compte client, ni votre propre nœud Bitcoin, ni appareil matériel. La 2FA facultative utilise un service, et les prestataires d'achat/vente peuvent demander un compte ou l'identité ; ces fonctions ont donc des exigences supplémentaires.

<span id="do-i-have-to-use-coinjoin-before-receiving-or-sending" aria-hidden="true"></span>

### Dois-je utiliser CoinJoin avant de recevoir ou d'envoyer ?

Non. Réception, envoi ordinaire et CoinJoin sont des actions séparées. Examinez **Automatically start coinjoin** dans **Coinjoin Settings** si vous ne voulez pas une participation sans surveillance pendant l'apprentissage ; si un tour est actif, mettez en pause et laissez le travail critique se terminer.

<span id="can-i-buy-bitcoin-in-ginger-or-receive-an-exchange-withdrawal" aria-hidden="true"></span>

### Puis-je acheter dans Ginger ou recevoir un retrait de plateforme ?

Vous pouvez utiliser une nouvelle adresse **Receive** pour un retrait Bitcoin on-chain, en vérifiant adresse et réseau avant de l'autoriser sur la plateforme. Ginger propose aussi **Buy** et **Sell** lorsque disponibles. Vérifiez les conditions actuelles, le devis et l'état du prestataire choisi ; sa confirmation d'achat n'est pas une réception Bitcoin confirmée.

<span id="recovery-and-missing-funds" aria-hidden="true"></span>

## Récupération et fonds manquants

<span id="what-do-i-need-to-back-up" aria-hidden="true"></span>

### Que dois-je sauvegarder ?

Conservez les mots dans l'ordre d'origine et la phrase secrète exacte si utilisée. Notez qu'elle était vide si le portefeuille a été créé sans phrase. Ils récupèrent l'accès aux clés ; les étiquettes et certaines données locales nécessitent une sauvegarde de fichiers séparée.

<span id="is-my-passphrase-just-a-password-i-can-reset" aria-hidden="true"></span>

### Ma phrase secrète est-elle simplement un mot de passe réinitialisable ?

Non. Pour le logiciel Ginger, elle détermine les clés Bitcoin récupérées en plus de protéger le secret enregistré. Des mots ou une phrase différents peuvent conduire à un autre portefeuille valide. Le nom, le PIN matériel et le code d'authentification ne les remplacent pas.

<span id="i-have-the-words-but-forgot-the-passphrase-can-ginger-reset-it" aria-hidden="true"></span>

### J'ai les mots mais oublié la phrase. Ginger peut-il la réinitialiser ?

Ginger ne peut pas réinitialiser l'original en conservant les mêmes clés. Vérifiez vos sauvegardes privées et préservez toute installation encore capable de dépenser. Si vous pouvez dépenser mais pas établir une sauvegarde complète, créez et vérifiez une nouvelle sauvegarde puis transférez soigneusement les fonds ; n'envoyez jamais les mots à une prétendue aide à la récupération.

<span id="can-ginger-show-my-recovery-words-again" aria-hidden="true"></span>

### Ginger peut-il réafficher mes mots ?

Le parcours de création avertit qu'ils ne seront plus affichés ensuite. **Wallet Settings** → **Tools** → **Verify Recovery Words** vérifie les mots fournis ; il ne révèle pas une sauvegarde oubliée. Si l'accès reste mais la sauvegarde est perdue, établissez et vérifiez une sauvegarde de nouveau portefeuille avant de déplacer les fonds avec soin.

<span id="why-is-my-recovered-wallet-empty-or-missing-transactions" aria-hidden="true"></span>

### Pourquoi mon portefeuille récupéré est-il vide ou incomplet ?

Vérifiez portefeuille choisi, mots d'origine, phrase exacte et fin de synchronisation et récupération. Une faute dans la phrase peut ouvrir un autre portefeuille valide sans erreur de mot de passe. Gardez les anciens fichiers et comparez une transaction connue avant de changer les paramètres ; [le dépannage de récupération](/fr/help/troubleshooting/#balance-recovery-and-receiving) donne les premiers contrôles.

<span id="the-sender-says-paid-why-have-i-received-nothing" aria-hidden="true"></span>

### L'expéditeur dit avoir payé. Pourquoi n'ai-je rien reçu ?

Demandez l'identifiant Bitcoin et vérifiez l'adresse de réception prévue et le réseau. Un service peut marquer une commande payée avant de diffuser sa transaction, et Ginger doit aussi se synchroniser pour l'afficher. Vérifiez transaction et progression locale avant de demander un autre paiement ; voyez [le dépannage de réception](/fr/help/troubleshooting/#balance-recovery-and-receiving).

<span id="will-changing-the-network-make-missing-bitcoin-appear" aria-hidden="true"></span>

### Changer de réseau fera-t-il apparaître le bitcoin manquant ?

Utilisez Main pour le véritable Bitcoin on-chain. Un autre réseau a d'autres coins ; le sélectionner ne déplace ni ne récupère les fonds mainnet. Vérifiez le bon portefeuille et la synchronisation plutôt que de changer de réseau pour améliorer un indicateur de connexion.

<span id="why-has-a-receiving-address-disappeared-does-it-expire" aria-hidden="true"></span>

### Pourquoi une adresse a-t-elle disparu ? Expire-t-elle ?

Une adresse peut quitter la liste d'attente après paiement ou masquage ; cela n'invalide pas ses clés. Une ancienne adresse peut encore recevoir, donc préservez sa sauvegarde. Utilisez une adresse neuve par nouveau paiement pour éviter le regroupement direct à une adresse publique.

<span id="why-are-receive-or-send-missing" aria-hidden="true"></span>

### Pourquoi Receive ou Send n'apparaissent-ils pas ?

La récupération peut encore analyser et masquer les actions ordinaires jusqu'à son achèvement. Un portefeuille en lecture seule a aussi besoin de son appareil signataire ou d'une autre voie compatible pour dépenser. Vérifiez type et progression avant de réinstaller ou créer des mots de remplacement.

<span id="i-lost-my-authenticator-or-my-2fa-code-is-rejected-what-now" aria-hidden="true"></span>

### Authentificateur perdu ou code rejeté : que faire ?

Vérifiez l'entrée correcte, l'heure du téléphone et la connexion Tor/service de Ginger. Préservez les fichiers de portefeuille et 2FA ; réinstaller ne recrée pas le secret d'authentification perdu. Mots et phrase exacte offrent une récupération indépendante des clés ; utilisez [le dépannage 2FA](/fr/help/troubleshooting/#2fa-and-hardware) avant de modifier les fichiers.

<span id="connection-and-updates" aria-hidden="true"></span>

## Connexion et mises à jour

<span id="do-i-need-tor-browser-or-a-vpn-to-make-ginger-work" aria-hidden="true"></span>

### Ai-je besoin de Tor Browser ou d'un VPN ?

Ginger inclut Tor pour ses connexions ordinaires ; installer Tor Browser n'est pas nécessaire pour l'exécuter. Un navigateur ou VPN séparé ne répare pas automatiquement la synchronisation et ne masque pas les informations envoyées à un prestataire. Gardez Tor normal activé pendant [les contrôles de connexion](/fr/help/troubleshooting/#connection-or-synchronization).

<span id="why-is-ginger-still-connecting-or-synchronizing" aria-hidden="true"></span>

### Pourquoi Ginger est-il toujours en connexion ou synchronisation ?

Une première analyse ou un portefeuille récupéré peut demander du temps, tandis qu'un blocage peut indiquer un problème de connexion ou local. Vérifiez internet, horloge, stockage libre et nœud configuré ; notez l'état exact si la progression s'arrête. Suivez [le dépannage de connexion](/fr/help/troubleshooting/#connection-or-synchronization) plutôt que de redémarrer ou supprimer les données répétitivement.

<span id="why-did-reinstalling-not-reset-a-broken-setting" aria-hidden="true"></span>

### Pourquoi la réinstallation n'a-t-elle pas réinitialisé un paramètre cassé ?

Les fichiers d'application et les données sont séparés : une réinstallation ordinaire peut conserver la même configuration et les mêmes portefeuilles. Préservez les sauvegardes et diagnostiquez l'erreur réelle avant de modifier les données. Ne supprimez pas le dossier entier comme réparation générale de fonds absents ou d'un état d'attente.

<span id="coinjoin-basics" aria-hidden="true"></span>

## Les bases de CoinJoin

<span id="why-is-coinjoin-waiting-instead-of-starting" aria-hidden="true"></span>

### Pourquoi CoinJoin attend-il au lieu de démarrer ?

Lisez l'état : confirmations, frais acceptables, autres participants, connexion ou coins admissibles peuvent manquer. L'attente seule ne signifie pas perte des fonds. Le [tableau de dépannage CoinJoin](/fr/help/troubleshooting/#coinjoin-does-not-start) explique les messages de cette version et la première action pour chacun.

<span id="what-is-the-minimum-amount-and-why-are-some-coins-left-behind" aria-hidden="true"></span>

### Quel est le minimum, et pourquoi des coins restent-ils ?

Aucun solde total ne garantit une participation. Chaque coin disponible doit satisfaire les conditions du tour et les contrôles d'admissibilité et de coût ; certains petits coins, non confirmés ou exclus peuvent rester hors du tour. Ne combinez ou ajoutez pas des fonds simplement pour atteindre un minimum d'un ancien guide.

<span id="how-long-will-it-take-and-how-many-rounds-do-i-need" aria-hidden="true"></span>

### Combien de temps et combien de tours faut-il ?

Il n'y a ni durée garantie ni nombre universel de tours. Confirmations, frais, participants disponibles, coins et objectif choisi comptent. Vérifiez l'état réel et les coûts terminés plutôt que d'interpréter une préférence temporelle comme une échéance promise.

<span id="why-did-my-balance-decrease-if-coinjoin-was-described-as-free" aria-hidden="true"></span>

### Pourquoi mon solde baisse-t-il si CoinJoin était dit gratuit ?

L'exonération du coordinateur ne supprime pas le minage Bitcoin, et chaque tour terminé répété peut coûter. Vérifiez aussi si les sorties vont à un autre portefeuille et si les deux sont synchronisés. Mettez en pause et rapprochez les transactions si la variation reste inexpliquée ; ne supposez pas que toute baisse inattendue est un frais normal.

<span id="what-coordinator-fee-does-ginger-currently-advertise" aria-hidden="true"></span>

### Quels frais de coordinateur Ginger annonce-t-il actuellement ?

Avec les réglages actuels, chaque entrée de 0.03 BTC (3,000,000 satoshis) ou moins est exonérée, seuil exact compris. Au-dessus, les frais sont 0.3 % de toute la valeur sauf autre exonération, comme un remix admissible. Le seuil s'applique séparément par entrée, pas au solde total. Le minage reste dû. Revérifiez [l'explication actuelle Ginger](https://gingerwallet.io/) et le tour proposé avant participation.

<span id="can-i-stop-coinjoin-or-turn-off-the-computer" aria-hidden="true"></span>

### Puis-je arrêter CoinJoin ou éteindre l'ordinateur ?

Utilisez la pause pour arrêter la suite et laissez finir la phase critique. Veille, connexion perdue ou fermeture forcée peut interrompre le tour actif ; utilisez la sortie normale et laissez finir la procédure. Une transaction déjà diffusée continue sur Bitcoin après fermeture.

<span id="why-is-there-a-transaction-when-i-never-pressed-send" aria-hidden="true"></span>

### Pourquoi une transaction alors que je n'ai jamais appuyé sur Send ?

CoinJoin automatique peut créer des transactions communes après activation, sans paiement ordinaire **Send** à chaque fois. Examinez la transaction, vos sorties, les frais et toute destination de sortie au lieu de supposer un CoinJoin pour toute dépense inexpliquée. Si elle reste inexplicable ou si les clés sont potentiellement exposées, gardez les preuves et protégez les fonds restants.

<span id="can-i-spend-at-99-and-does-100-mean-i-am-anonymous" aria-hidden="true"></span>

### Puis-je dépenser à 99 %, et 100 % signifie-t-il anonyme ?

Un paiement ordinaire est possible si les fonds sont dépensables et l'envoi disponible ; le pourcentage n'est pas une exigence Bitcoin. C'est une estimation locale selon l'objectif choisi, pas une garantie des connaissances d'autrui. Paiement, réutilisation ou plateforme identifiée peut encore créer un lien.

<span id="why-is-the-play-control-missing-when-all-funds-are-private" aria-hidden="true"></span>

### Pourquoi la lecture manque-t-elle lorsque tous les fonds sont privés ?

Le lecteur manuel peut masquer lecture lorsque tous atteignent l'objectif. Le démarrage normal rejette aussi un ensemble disponible uniquement privé : une autre destination ne force pas un tour. Si vous voulez seulement déplacer ces fonds, examinez plutôt un paiement ordinaire.

<span id="payments-and-hardware" aria-hidden="true"></span>

## Paiements et matériel

<span id="why-is-a-payment-still-pending-after-the-estimated-time" aria-hidden="true"></span>

### Pourquoi un paiement reste-t-il en attente après l'estimation ?

Ce n'est pas une échéance : concurrence et blocs irréguliers influent sur la confirmation. Consultez l'historique ; si **Speed Up Transaction** est proposé, vérifiez les frais supplémentaires. Erreur de connexion ou retard ne justifie pas un deuxième paiement.

<span id="can-i-cancel-a-payment-or-recover-one-sent-to-the-wrong-address" aria-hidden="true"></span>

### Puis-je annuler ou récupérer un paiement vers une mauvaise adresse ?

Ginger ne peut renverser un paiement confirmé. Avant confirmation, **Cancel Transaction** peut être proposé pour une transaction adaptée, mais c'est un remplacement tenté qui peut perdre la course. Ne promettez pas l'annulation au destinataire avant d'en établir le résultat.

<span id="why-are-there-insufficient-funds-when-my-balance-looks-large-enough" aria-hidden="true"></span>

### Pourquoi les fonds sont-ils insuffisants malgré un solde apparemment assez élevé ?

Le total n'est pas toujours disponible : fonds non confirmés, temporairement en CoinJoin ou insuffisants après frais. Vérifiez portefeuille, montant et aperçu final. Envoyer tout peut réduire l'arrivée ; comparez le montant reçu à la facture fixe éventuelle.

<span id="why-did-my-payment-create-another-address-or-leave-change" aria-hidden="true"></span>

### Pourquoi mon paiement crée-t-il une autre adresse ou du rendu ?

Il peut dépenser un morceau plus grand et retourner l'excès comme monnaie rendue. Une adresse de rendu neuve est normale et ne signifie pas un envoi à un inconnu. Rien à renvoyer manuellement ; vérifiez la transaction complète si un montant reste inexpliqué.

<span id="can-i-use-a-hardware-wallet-including-after-coinjoin" aria-hidden="true"></span>

### Puis-je utiliser du matériel, y compris après CoinJoin ?

Ginger prend en charge les parcours documentés de réception et signature pour matériel compatible. Gardez ses mots dans sa voie de récupération matérielle, pas l'ordinateur. Le matériel reçoit éventuellement les sorties admissibles sans être source signataire du CoinJoin ordinaire ; ce routage facultatif est [une question avancée](/fr/help/advanced-faq/#can-coinjoin-send-directly-to-my-hardware-wallet).

<span id="will-an-exchange-accept-my-bitcoin-after-coinjoin" aria-hidden="true"></span>

### Une plateforme acceptera-t-elle mon bitcoin après CoinJoin ?

Ginger prépare un paiement ordinaire sans garantir acceptation ou politique de compte d'un prestataire. Vérifiez ses exigences actuelles avant envoi ou vente. Un score élevé n'est pas un certificat d'acceptation, et aucune opération supplémentaire ne peut la promettre.

<span id="getting-help-safely" aria-hidden="true"></span>

## Obtenir de l'aide en sécurité

<span id="what-can-i-share-with-support-and-where-do-i-report-a-bug" aria-hidden="true"></span>

### Que partager avec l'assistance et où signaler un bug ?

Utilisez les liens du [dépôt Ginger officiel](https://github.com/GingerPrivacy/GingerWallet/issues), avec version, système, erreur exacte et étapes non secrètes. Examinez l'extrait de journal avant partage ; jamais mots, phrases, codes ou dossier complet. L'assistance ne nécessite ni validation web ni paiement d'activation ; voyez [signaler utilement](/fr/help/troubleshooting/#report-a-useful-issue).

<span id="about-this-manual" aria-hidden="true"></span>

## À propos de ce manuel

Ce manuel décrit Ginger v2.0.26 et conserve les libellés anglais de son interface. Documentation et traductions peuvent contenir des erreurs. Ginger n'en garantit pas l'exactitude ; vérifiez les détails critiques dans l'application avant de poursuivre. [Signalez une erreur au dépôt documentaire](https://github.com/GingerPrivacy/GingerDoc/issues) sans secrets de portefeuille.
