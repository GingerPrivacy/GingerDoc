---
doc_id: "backup-recovery.backup-files"
title: "Fichiers du portefeuille, métadonnées et phrase secrète"
description: "Conserver les fichiers JSON et ATTR de Ginger, comprendre la dépendance du fichier 2FA et préserver une phrase secrète récupérable, sans remplacer la sauvegarde essentielle des mots."
lang: fr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Conservez les informations de récupération et les fichiers originaux avant de modifier la récupération ou l'organisation des fichiers.

Utilisez cette référence pour copier les données locales du portefeuille ou examiner ce qu'une sauvegarde préserve. Commencez par [le guide de sauvegarde essentiel](/fr/backup-recovery/backups/) pour les informations de récupération nécessaires à tout portefeuille logiciel.

<span id="what-to-keep" aria-hidden="true"></span>

## Que conserver

| Élément de sauvegarde | Rôle | Limite importante |
| --- | --- | --- |
| Mots de récupération, dans l'ordre | Recréer les clés du portefeuille | La phrase secrète d'origine est nécessaire si elle a été utilisée |
| Phrase secrète d'origine, majuscules et caractères compris | Sélectionner le bon portefeuille BIP39 et déverrouiller son secret protégé | Ginger ne peut pas la réinitialiser |
| Fichier `.json` du portefeuille | Préserver les informations de clés et de synchronisation enregistrées | Un fichier chiffré nécessite toujours ses identifiants ; la 2FA peut ajouter une dépendance à un service |
| Fichier `.attr` correspondant | Préserver les étiquettes locales et les attributs propres au portefeuille | Contient des métadonnées sensibles ; les mots de récupération ne le restaurent pas |
| Sauvegarde de récupération de l'appareil matériel | Récupérer les clés selon la procédure du fabricant | La conserver hors de l'ordinateur de bureau |

Le dossier de sauvegarde automatique locale se trouve sur le même ordinateur. Il peut aider après la corruption d'un fichier, mais ne protège pas contre la perte du disque entier, le vol ou les rançongiciels.

<span id="make-a-file-backup" aria-hidden="true"></span>

## Sauvegarder les fichiers

Utilisez la recherche de Ginger pour ouvrir **Data Folder**. Notez son emplacement, puis fermez Ginger normalement avant de copier les fichiers. Dans un dossier de données mainnet normal, `Wallets` contient les fichiers `.json` des portefeuilles et leurs fichiers `.attr` associés, et `WalletBackups` contient les sauvegardes automatiques. Les autres réseaux utilisent des sous-dossiers distincts.

Copiez les fichiers concernés vers un stockage de sauvegarde protégé, en conservant leurs noms et l'association entre chaque fichier JSON et ATTR. Une copie du dossier de données est sensible pour la confidentialité même si vous avez défini une phrase secrète : adresses, étiquettes, journaux, configuration et métadonnées de commandes peuvent révéler votre activité. Ne l'envoyez pas sur un outil de suivi des problèmes ni par e-mail à l'assistance.

Avec la 2FA activée, conservez aussi `2fa_info.gws`, mais ne le confondez pas avec une clé de récupération indépendante. Il enregistre un identifiant utilisé avec le service 2FA de Ginger. Les mots de récupération et la phrase secrète d'origine restent la voie qui ne dépend pas du déchiffrement de ce fichier local particulier.

<span id="choose-and-preserve-a-passphrase" aria-hidden="true"></span>

## Choisir et conserver une phrase secrète

Choisissez une phrase secrète difficile à deviner et que vous pouvez reproduire exactement. Des mots tirés au hasard dans une liste définie, ou un mot de passe fort généré par un gestionnaire fiable, évitent la prévisibilité des noms, dates, citations et phrases courantes. Les substitutions choisies par une personne pour « paraître aléatoires » sont souvent moins imprévisibles qu'elles ne semblent.

L'entropie décrit l'imprévisibilité d'un processus de génération donné ; la longueur seule ne la détermine pas. Six mots choisis uniformément dans une grande liste et six mots issus de paroles préférées n'offrent pas la même résistance aux tentatives de devinette. Ce manuel ne promet pas qu'un nombre précis de caractères résiste à toutes les attaques.

Notez fidèlement le résultat généré et vérifiez que votre plan de récupération le préserve. Évitez les espaces au début ou à la fin : la validation de saisie de Ginger peut les supprimer ou les rejeter. Un gestionnaire de mots de passe peut conserver une phrase secrète forte, mais prévoyez comment y accéder après la perte du même ordinateur. Stocker les mots et la phrase secrète ensemble crée un point unique de compromission ; les séparer crée une dépendance supplémentaire pour la récupération. Choisissez une organisation que vous pouvez réellement maintenir.

Pour un portefeuille logiciel Ginger, la phrase secrète protège aussi le secret chiffré enregistré. C'est pourquoi ni le vol d'un fichier ni une tentative de récupération ne doivent être supposés réussir sans elle. Ne changez pas la phrase secrète à la légère dans une autre application : une phrase secrète BIP39 différente sélectionne des clés différentes, au lieu de simplement renommer le mot de passe de connexion de l'ancien portefeuille.

Pour la compatibilité des comptes, l'importation de fichiers ou une analyse ayant manqué des adresses, consultez [les options de récupération avancées](/fr/backup-recovery/recovery-options/).

<span id="a-single-private-key-is-not-the-full-recovery-backup" aria-hidden="true"></span>

## Une seule clé privée ne constitue pas une sauvegarde complète

Une pièce physique préfinancée dont le fabricant a généré la clé exige de lui faire confiance pour ne pas l'avoir conservée. Une clé privée unique imprimée ou le secret d'un fabricant ne constitue pas la sauvegarde complète des mots de récupération de Ginger. Conservez les mots et la phrase secrète d'origine du portefeuille logiciel au lieu de supposer qu'une clé exportée couvre toutes ses adresses.
