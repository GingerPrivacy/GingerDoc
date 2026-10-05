---
doc_id: "help.troubleshooting"
title: "Dépanner Ginger Wallet"
description: "Diagnostiquer les soldes manquants, problèmes de connexion, attentes CoinJoin, échecs 2FA et problèmes matériels en préservant les données de récupération."
lang: fr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Niveau de lecture : utilisation courante. Choisissez ce guide lorsque vous avez besoin de la tâche qu'il décrit.

Commencez par l'erreur exacte, le portefeuille choisi, le réseau et la version. Préservez les informations de récupération et les fichiers avant de modifier les données. Réinstaller, supprimer des dossiers ou créer de nouveaux mots est rarement la première étape pour un problème de connexion ou d'affichage.

<span id="balance-recovery-and-receiving" data-ginger-heading="solde-récupération-et-réception" aria-hidden="true"></span>

## Solde, récupération et réception

| Symptôme | Premier contrôle | Étape suivante |
| --- | --- | --- |
| Portefeuille récupéré vide | Mots d'origine, phrase exacte, réseau et progression | Comparez adresses ou historique connus après synchronisation ; utilisez les contrôles avancés seulement si les contrôles ordinaires ne suffisent pas |
| Paiement entrant manquant | Adresse correcte, identifiant de transaction fourni par l'expéditeur, portefeuille choisi | Vérifiez diffusion et confirmation, puis synchronisation locale |
| Receive ou Send absent | Récupération encore active ? Portefeuille en lecture seule ? | Attendez la récupération ou utilisez le signataire nécessaire |
| Ancienne adresse disparue de la liste | A-t-elle été payée ou masquée ? | Vérifiez l'historique ; sa visibilité n'invalide pas les clés |
| Seul un très petit paiement manque | Seuil de poussière et synchronisation | Comparez le seuil configuré avant de supposer un vol |
| Étiquettes perdues après récupération | Le fichier ATTR correspondant a-t-il été sauvegardé ? | Préservez-le ; la blockchain ne reconstruit pas les étiquettes |

Ne saisissez pas les mots sur un site pour « resynchroniser » un portefeuille. N'utilisez que le parcours de récupération installé et vérifié sur un ordinateur fiable.

<span id="connection-or-synchronization" data-ginger-heading="connexion-ou-synchronisation" aria-hidden="true"></span>

## Connexion ou synchronisation

Vérifiez connexion, horloge, stockage libre et état du nœud configuré. Une première analyse peut simplement prendre du temps. Si aucun progrès ne se produit, fermez Ginger normalement et rouvrez une fois. Notez le résultat plutôt que de redémarrer répétitivement l'analyse.

**Awaiting connection** peut bloquer CoinJoin et d'autres services même si l'historique est en cache. Considérez le solde déconnecté comme potentiellement incomplet. Gardez Tor pendant l'examen. P2P du nœud et estimations RPC sont séparés ; l'un fonctionnel ne prouve pas l'autre.

Si vous utilisez **Wallet Settings** → **Tools** → **Resync**, sauvegardez d'abord et prévoyez une nouvelle analyse. Ne supprimez pas `Wallets`, `WalletBackups` ou les fichiers 2FA simplement pour effacer un message.

<span id="coinjoin-does-not-start" data-ginger-heading="coinjoin-ne-démarre-pas" aria-hidden="true"></span>

## CoinJoin ne démarre pas

| Message ou condition | Action probable |
| --- | --- |
| **Insufficient funds eligible for coinjoin** | Examinez les confirmations, les montants des pièces, les frais et les exclusions ; le total ne suffit pas à établir l'admissibilité |
| **Only excluded funds are available** | Examinez **Exclude Coins** si vous souhaitez faire participer certaines pièces |
| **Only immature funds are available** | Attendez le nombre requis de confirmations ; les sorties nouvellement minées ont des règles de dépense spéciales |
| **Some funds are rejected from coinjoining** | Lisez la raison et les conditions actuelles ; le refus ne transfère pas la propriété |
| **Awaiting cheaper coinjoins** | Examinez les préférences de coût et décidez si attendre correspond au but |
| **Coinjoin may be uneconomical** | Examinez seuil d'arrêt et coûts relatifs avant de contourner manuellement |
| **Awaiting the blame round** | Attendez la reprise ; ce n'est pas une instruction d'accuser quelqu'un |
| **Awaiting closure of send dialog** | Terminez ou fermez le parcours d'envoi |
| **Mining fee rate was too high** ou **Coordination fee rate was too high** | Attendez ou examinez les conditions ; n'augmentez pas aveuglément les limites |
| Source matérielle | La signature automatique exige un portefeuille logiciel admissible |

Des participants peuvent ne pas terminer, ou une pièce devenir temporairement indisponible après interruption. Réessais, imports répétés et tentatives de contourner un refus ne constituent pas une réparation. Utilisez raison et état actuel pour décider d'attendre ou de contacter l'assistance officielle.

<span id="payment-or-fee-problems" data-ginger-heading="problèmes-de-paiement-ou-de-frais" aria-hidden="true"></span>

## Problèmes de paiement ou de frais

Si les estimations manquent, attendez, réparez la connexion prestataire/nœud ou utilisez un taux manuel que vous comprenez. Le montant final plus les frais doit tenir dans les fonds dépensables. Une longue chaîne non confirmée peut exiger d'attendre les confirmations antérieures.

Utilisez **Speed Up Transaction** ou **Cancel Transaction** seulement si proposé et après vérification des frais. L'annulation tente de remplacer un paiement en attente ; elle ne peut pas annuler un paiement confirmé. Après une diffusion incertaine, vérifiez l'historique avant un double paiement.

<span id="2fa-and-hardware" data-ginger-heading="2fa-et-matériel" aria-hidden="true"></span>

## 2FA et matériel

Pour un code d'authentification rejeté, vérifiez l'heure du téléphone, l'entrée choisie, la compatibilité de l'authentificateur avec Ginger et la connexion à Tor et au service. Préservez les fichiers du portefeuille et de 2FA existants. Si le démarrage normal ne revient pas, les mots de récupération et la phrase secrète d'origine constituent la sauvegarde indépendante des clés ; réinstaller sur les mêmes données ne recrée pas l'authentificateur perdu. La [FAQ avancée](/fr/help/advanced-faq/#does-the-2fa-file-recover-the-wallet-without-the-service) explique la dépendance.

Pour la détection, utilisez un seul matériel déverrouillé, un câble de données et un port direct, avec applications concurrentes fermées. Terminez les étapes requises de Bitcoin, PIN ou phrase sur l'appareil. Sous Linux, vérifiez les permissions du fabricant. Gardez la seed hors ordinateur.

<span id="report-a-useful-issue" data-ginger-heading="signaler-un-problème-utilement" aria-hidden="true"></span>

## Signaler un problème utilement

Utilisez les liens du [dépôt Ginger officiel](https://github.com/GingerPrivacy/GingerWallet/issues). Indiquez version, système et processeur, erreur exacte, résultat attendu et reproduction non secrète minimale. Mentionnez modèle et firmware si pertinent.

L'action **Logs** de recherche ouvre les journaux. Examinez-les et expurgez avant partage : chemins, adresses, identifiants, étiquettes et commandes peuvent être sensibles. Partagez un extrait minimal pertinent, pas tout le dossier. Une issue publique est publique ; aucune assistance ne devrait nécessiter mots ou phrase secrète.
