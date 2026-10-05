---
doc_id: "learn-self-custody.security-routine"
title: "Construire une routine de sécurité Bitcoin permettant la récupération"
description: "Construisez une routine de sécurité Bitcoin permettant la récupération et réagissez correctement à l'exposition d'adresses, de xpub, de fichiers de portefeuille, de mots de récupération ou d'appareils."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Gardez la sauvegarde de récupération essentielle disponible ; utilisez les mesures d'incident adaptées aux informations exposées.

Une routine de sécurité utile protège contre les accès non autorisés tout en laissant un chemin compréhensible pour une récupération légitime. Ajouter des secrets sans documenter leurs rôles peut augmenter le risque de perte accidentelle.

<span id="record-the-recovery-plan" data-ginger-heading="consigner-le-plan-de-récupération" aria-hidden="true"></span>

## Consigner le plan de récupération

Conservez un inventaire privé de vos portefeuilles, du type de signataire utilisé par chacun, de l'emplacement des sauvegardes et de la nécessité éventuelle d'une phrase secrète BIP39. Cet inventaire n'a pas besoin de contenir les secrets eux-mêmes. Il doit rester utile après la perte de l'ordinateur ou du téléphone, pas seulement tant que vous vous souvenez de toute la configuration.

Préservez suffisamment d'informations sur les conventions du portefeuille pour reconnaître le bon compte après récupération, surtout avec des appareils matériels ou plusieurs portefeuilles. Conservez les sauvegardes d'étiquettes et de métadonnées lorsqu'elles sont importantes pour vos registres ; la blockchain ne peut pas reconstruire vos notes privées.

Si vous souhaitez qu'une autre personne récupère les fonds après une incapacité ou un décès, organisez un plan d'accès clair, testé et adapté à votre situation. Évitez de partager à la légère tous les secrets dès maintenant ou de supposer que cette personne devinera quel mot de passe vous vouliez dire. Les dispositions successorales et d'accès peuvent avoir des implications juridiques nécessitant un conseil professionnel local ; cette page ne prescrit pas de structure juridique.

<span id="check-before-funding-and-before-signing" data-ginger-heading="vérifier-avant-dalimenter-le-portefeuille-et-avant-de-signer" aria-hidden="true"></span>

## Vérifier avant d'alimenter le portefeuille et avant de signer

Vérifiez le téléchargement de l'application, confirmez que le portefeuille s'ouvre et contrôlez la sauvegarde. Avec un portefeuille matériel, comparez les adresses de réception sur l'appareil et examinez la destination et le montant de chaque paiement avant de signer.

Utilisez un petit montant pour apprendre une nouvelle procédure. Rapprochez ce qui a été envoyé, ce qui est arrivé et les frais payés. Augmenter le montant ne rend pas une procédure inconnue plus facile à diagnostiquer.

Maintenez l'ordinateur et l'appareil de signature à jour via des sources authentifiées. Un avis de mise à jour dans un message privé ne prouve pas qu'un fichier est légitime. N'installez jamais de « logiciel de récupération » et n'autorisez jamais le contrôle à distance simplement parce qu'un inconnu affirme que vos pièces ont besoin d'une synchronisation.

<span id="understand-ginger-2fa" data-ginger-heading="comprendre-la-2fa-de-ginger" aria-hidden="true"></span>

## Comprendre la 2FA de Ginger

La 2FA facultative de Ginger ajoute un chiffrement local des fichiers de portefeuille et une vérification de démarrage auprès d'un service. Elle peut être utile contre certaines formes d'accès aux fichiers locaux, mais introduit une dépendance à l'authentificateur et au service lors du démarrage normal.

Gardez les mots de récupération et la phrase secrète d'origine disponibles de façon indépendante. Ne supposez pas que `2fa_info.gws` est une clé maîtresse de récupération hors ligne. Ne supposez pas non plus que la 2FA arrêtera un attaquant qui possède déjà les mots et la phrase secrète, ou qu'elle empêchera une transaction autorisée depuis une application déverrouillée.

<span id="first-identify-what-was-exposed" data-ginger-heading="identifier-dabord-ce-qui-a-été-exposé" aria-hidden="true"></span>

## Identifier d'abord ce qui a été exposé

Une divulgation d'adresse et une divulgation de mots de récupération exigent des réponses différentes. Évitez de copier les informations suspectes dans une publication publique ou dans un « vérificateur de portefeuille » inconnu pour établir le diagnostic.

| Élément exposé | Ce qu'il peut permettre | Première réponse |
| --- | --- | --- |
| Une adresse de réception ou un identifiant de transaction | Observer cette adresse ou transaction et suivre les liens possibles ; cela ne fournit pas les clés de signature | Arrêtez les réutilisations et divulgations inutiles ; examinez les identités et les paiements qui ont été liés |
| Étiquettes, registres de commandes ou export de l'historique du portefeuille | Associer des transactions autrement séparées à des personnes, des motifs de paiement ou des soldes | Restreignez l'accès, préservez une copie privée si nécessaire et changez la façon de partager les registres |
| Une clé publique étendue, souvent appelée xpub | Surveiller les adresses dans son périmètre de dérivation, y compris potentiellement les futures ; elle n'autorise normalement pas la dépense à elle seule | Identifiez le compte ou la branche concernée et envisagez un nouveau portefeuille si la surveillance continue est inacceptable |
| Un fichier de portefeuille ou une copie complète des données de l'application | L'exposition dépend du chiffrement, des mots de passe disponibles et des autres fichiers copiés ; elle peut inclure des clés et des métadonnées privées | Prenez l'incertitude au sérieux et évaluez l'exposition des clés de signature depuis un environnement de confiance |
| Mots de récupération et toute phrase secrète requise, ou clés privées utilisables | Dépenser les fonds et dériver d'autres clés dans le périmètre compromis | Préparez un nouveau portefeuille avec de nouvelles clés sur un appareil de confiance et déplacez les fonds encore sous votre contrôle |
| Un ordinateur volé, une application déverrouillée ou une session de contrôle à distance | Selon son état, accéder aux données du portefeuille, aux opérations de signature et aux autres comptes | Mettez fin à l'accès non autorisé et utilisez un appareil de confiance pour évaluer et protéger les fonds restants |

Une clé publique étendue ne montre pas nécessairement tous les comptes d'un appareil ; son périmètre de dérivation compte. Toutefois, générer une nouvelle adresse de réception sous une branche publique divulguée n'empêche normalement pas de continuer à surveiller cette branche. [BIP32 décrit ces limites de dérivation des clés publiques](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).

Si seuls les mots de récupération ont été divulgués et que vous utilisiez une phrase secrète séparée, le risque dépend aussi du maintien de son secret et de sa difficulté à deviner. Ne supposez pas qu'une phrase secrète inconnue ou faible rende la sauvegarde exposée sûre indéfiniment. Si les éléments sont incomplets et que l'exposition pourrait autoriser des dépenses, appliquez la réponse à l'exposition de clés.

<span id="respond-to-exposed-signing-keys" data-ginger-heading="réagir-à-lexposition-des-clés-de-signature" aria-hidden="true"></span>

## Réagir à l'exposition des clés de signature

Changer le mot de passe de l'ordinateur, désactiver la 2FA ou réinstaller Ginger ne révoque pas des clés Bitcoin copiées. Renommer un portefeuille laisse également ses clés inchangées. Bitcoin n'a pas de procédure de support qui annule une phrase de récupération copiée.

1. Utilisez un appareil que vous avez des raisons de juger fiable. Si l'ordinateur d'origine peut être compromis, n'y générez pas le portefeuille de remplacement.
2. Créez un portefeuille avec de nouvelles informations de récupération et protégez sa sauvegarde. Ne restaurez pas les mots exposés en considérant que le portefeuille restauré crée une nouvelle frontière de sécurité.
3. Obtenez et vérifiez une adresse de réception. Avec du matériel, vérifiez-la sur l'appareil de signature ; ne saisissez jamais ses nouveaux mots de récupération dans l'ordinateur suspect.
4. Transférez les fonds restants que vous contrôlez encore, en examinant attentivement la destination et les frais. Un attaquant possédant les mêmes clés peut agir avant vous ; évitez d'ajouter une attente CoinJoin facultative avant de protéger les fonds.
5. Vérifiez le résultat dans le portefeuille de confiance et surveillez la confirmation. Remplacez les instructions de dépôt récurrentes et les anciennes coordonnées publiques de réception pour que les paiements futurs cessent d'arriver aux clés compromises.

Déplacer les fonds peut créer un lien observable sur la chaîne. Préserver le contrôle des fonds est prioritaire lors d'une compromission de clés ; la confidentialité peut être réexaminée une fois le problème d'accès immédiat contenu. Une nouvelle destination ne garantit pas que le transfert soit impossible à relier.

Gardez les registres nécessaires privés pendant l'enquête. Ne donnez jamais à un prétendu agent de support vos mots de récupération, la phrase secrète, une copie sans restriction des fichiers du portefeuille ou l'accès à l'appareil de remplacement. Il n'est pas nécessaire de « valider » de nouveaux mots de récupération sur un site web.

<span id="respond-to-a-privacy-only-disclosure" data-ginger-heading="réagir-à-une-divulgation-concernant-seulement-la-confidentialité" aria-hidden="true"></span>

## Réagir à une divulgation concernant seulement la confidentialité

Pour une adresse exposée, décidez si son utilisation continue est acceptable. Vous pouvez recevoir les paiements futurs à de nouvelles adresses et éviter de publier des détails de transaction supplémentaires, mais l'observateur conserve ce qu'il a déjà appris. Il n'est pas automatiquement nécessaire de déplacer toutes les pièces simplement parce qu'une adresse est devenue publique.

Pour une xpub divulguée, déterminez d'abord quel compte elle couvre. Continuer à utiliser ce compte peut exposer les activités futures. Un nouveau portefeuille avec des clés indépendantes établit un autre ensemble d'adresses, même si un transfert direct peut relier visiblement les anciens fonds à cet ensemble. Planifiez le déplacement et les dépenses ultérieures selon les observateurs et ce qu'ils savent. Réinstaller une application de portefeuille ou importer le même compte ailleurs ne supprime pas son exposition.

Pour des registres divulgués, limitez les accès supplémentaires et évaluez ce qu'ils révèlent ensemble. Un identifiant de transaction associé à un nom de client révèle plus que chacun séparément. Ne publiez pas la fuite complète pour démontrer le problème.

<span id="keep-privacy-separate-from-key-protection" data-ginger-heading="distinguer-confidentialité-et-protection-des-clés" aria-hidden="true"></span>

## Distinguer confidentialité et protection des clés

Un observateur qui connaît une transaction ne possède pas nécessairement les clés pour en dépenser les fonds. À l'inverse, un voleur possédant les clés peut dépenser des fonds dont l'historique de transactions était difficile à analyser. Utilisez la protection de la récupération et la vérification des appareils pour le second problème, et les pratiques d'adresses, Tor, la sélection des pièces et un usage réfléchi de CoinJoin pour le premier.

Réexaminez la routine après l'ajout d'un portefeuille, un changement de matériel, l'activation de la 2FA ou le déplacement des sauvegardes. Vérifiez les éléments qui ont changé plutôt que d'exposer à répétition tous les secrets lors d'un exercice complet de récupération inutile.
