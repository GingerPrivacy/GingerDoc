---
doc_id: "backup-recovery.two-factor-authentication"
title: "Utiliser l'authentification à deux facteurs dans Ginger"
description: "Configurer l'authentification à deux facteurs de Ginger et comprendre le chiffrement des fichiers de portefeuille, la nécessité de Tor et les limites de la récupération."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-the-default-2fa-state-of-gingerwallet"></span>
<span id="how-do-i-enable-2fa-in-gingerwallet"></span>
<span id="how-do-i-set-up-2fa-using-an-authenticator-app"></span>
<span id="what-is-the-purpose-of-the-2fagws-file"></span>
<span id="do-i-need-to-restart-the-application-after-enabling-2fa"></span>
<span id="how-does-the-login-process-change-after-enabling-2fa"></span>
<span id="how-do-i-disable-2fa"></span>
<span id="what-should-i-do-if-i-change-devices-or-lose-data"></span>
<span id="what-are-the-security-best-practices-for-using-gingerwallet"></span>
<span id="does-gingerwallet-store-any-personal-information"></span>
<span id="what-happens-if-i-lose-access-to-my-authenticator-app"></span>
<span id="how-does-gingerwallet-ensure-security-with-2fa"></span>
<span id="how-can-i-recover-my-labels-and-extra-options-for-my-wallet-if-ive-lost-the-2fa-key"></span>
<span id="why-does-ginger-wallet-require-an-8-digit-2fa-code"></span>
<span id="what-should-i-do-if-my-authenticator-app-only-provides-6-digit-codes"></span>

> Niveau de lecture : guide avancé. Conservez les informations de récupération d'origine et les fichiers de portefeuille avant de modifier la configuration de récupération ou des fichiers.

L'authentification à deux facteurs (2FA), facultative dans Ginger, ajoute une vérification au démarrage de l'application et un chiffrement des fichiers de portefeuille locaux. Elle est distincte de la phrase secrète de chaque portefeuille. Il ne s'agit pas d'une règle Bitcoin qui exige une deuxième signature pour chaque dépense, et elle ne protège pas une sauvegarde des mots de récupération contre une personne qui connaît également sa phrase secrète.

<span id="understand-the-dependency-first" data-ginger-heading="comprendre-dabord-la-dépendance-au-service" aria-hidden="true"></span>

## Comprendre d'abord la dépendance au service

Ginger vérifie le code de l'application d'authentification auprès de son service 2FA et obtient le secret nécessaire au déchiffrement des fichiers de portefeuille protégés. Une connexion fonctionnelle à ce service est donc nécessaire pour le démarrage normal avec la 2FA. Tor doit être activé pour utiliser cette fonctionnalité.

Le fichier local `2fa_info.gws` stocke un identifiant client/serveur. Il ne contient ni une copie chiffrée de vos mots de récupération ni une clé de récupération autonome. Copier uniquement ce fichier ne permet pas de récupérer un portefeuille. Ni l'utilisation d'une phrase secrète pour un portefeuille ni l'activation de la 2FA ne signifie que toutes les étiquettes, tous les journaux ou tous les fichiers annexes bénéficient du même chiffrement. Protégez l'ensemble du dossier de données et ses sauvegardes.

Avant d'activer la 2FA, vérifiez que vous disposez des mots de récupération et de la phrase secrète d'origine exacte pour chaque portefeuille logiciel que vous devez pouvoir récupérer. Conservez également des copies protégées des fichiers de portefeuille et de métadonnées.

<span id="enable-2fa" data-ginger-heading="activer-la-2fa" aria-hidden="true"></span>

## Activer la 2FA

1. Ouvrez **Settings** → **Security**. Activez **Network anonymization (Tor)** si nécessaire et redémarrez l'application lorsqu'elle vous le demande pour que Tor soit actif.
2. Activez **Two-factor authentication**. La boîte de dialogue de configuration affiche un code QR destiné à une application d'authentification.
3. Ajoutez ce code QR à votre application d'authentification en privé. Il contient un secret : ne le partagez pas. La configuration de Ginger nécessite une application d'authentification compatible avec SHA256 et les codes à huit chiffres ; une entrée créée manuellement avec le réglage par défaut à six chiffres n'est pas équivalente.
4. Saisissez le code actuel et choisissez **Verify**. Si la vérification échoue, vérifiez la synchronisation de l'heure de votre téléphone et assurez-vous que l'entrée a bien été créée à partir de cette configuration.
5. Redémarrez Ginger comme indiqué. Répondez à la demande de code 2FA au démarrage. Lorsque le démarrage authentifié réussit, Ginger obtient le secret de chiffrement et s'assure que les fichiers JSON des portefeuilles et de leurs sauvegardes automatiques sont chiffrés.

Ne supposez pas que les fichiers copiés avant la configuration ou avant le redémarrage authentifié ont acquis la nouvelle protection. Protégez ces anciennes sauvegardes indépendamment. Activer l'option n'est pas une raison d'effacer vos seules informations de récupération dont vous savez qu'elles fonctionnent.

<span id="everyday-use-and-disabling" data-ginger-heading="utilisation-quotidienne-et-désactivation" aria-hidden="true"></span>

## Utilisation quotidienne et désactivation

Au démarrage, saisissez le code actuel de votre application d'authentification. Une fois l'application chargée, les phrases secrètes de chaque portefeuille et les approbations sur les appareils matériels conservent leurs rôles respectifs. Un ordinateur déjà déverrouillé reste un risque pour la sécurité.

Pour désactiver la 2FA tant que vous avez accès à l'application, ouvrez **Settings** → **Security** et désactivez **Two-factor authentication**. Ginger retire le chiffrement supplémentaire des fichiers de portefeuille et son association locale à la 2FA. La protection habituelle des portefeuilles logiciels par phrase secrète est distincte et reste pertinente. Sauvegardez les fichiers obtenus si votre procédure de sauvegarde dépend de leur état de chiffrement actuel.

<span id="lost-phone-missing-file-or-unavailable-service" data-ginger-heading="téléphone-perdu-fichier-manquant-ou-service-indisponible" aria-hidden="true"></span>

## Téléphone perdu, fichier manquant ou service indisponible

La perte de l'application d'authentification ou une panne du service peut empêcher le démarrage normal. Commencez par conserver le dossier de données existant. Si un code est refusé, vérifiez l'heure et la connexion ; réinstaller plusieurs fois l'application en conservant les mêmes données ne recrée pas un secret d'authentification perdu.

Pour les fonds d'un portefeuille logiciel, utilisez une installation distincte de confiance ou un environnement d'application vierge pour effectuer la récupération à partir des mots et de la phrase secrète d'origine. Vérifiez l'historique connu et votre accès avant de modifier les anciens fichiers. Les clés récupérées ne dépendent pas de la conservation de l'ancienne configuration 2FA, mais le téléchargement et la synchronisation de Ginger nécessitent toujours ses services réseau habituels. Un logiciel de récupération compatible peut être une option s'il prend en charge les types de comptes d'origine.

Les étiquettes et les autres attributs locaux ne sont pas reconstitués à partir des mots. Conservez leurs sauvegardes `.attr` avant d'examiner les possibilités de récupération des métadonnées. Préservez les données de portefeuille existantes lorsque vous configurez la 2FA ou résolvez un problème qui la concerne.

Si les informations de récupération ont été exposées, créer un nouveau portefeuille et y transférer les fonds restants change les clés qui contrôlent ces fonds. Désactiver la 2FA ou réinstaller l'application n'invalide pas les anciens mots de récupération.
