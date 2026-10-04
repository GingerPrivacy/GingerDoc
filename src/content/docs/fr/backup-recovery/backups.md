---
doc_id: "backup-recovery.backups"
title: "Sauvegarder votre portefeuille Ginger"
description: "Conserver et vérifier les mots de récupération et la phrase secrète d'origine nécessaires pour récupérer un portefeuille logiciel Ginger après la perte de l'ordinateur."
lang: fr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Niveau de lecture : commencez ici. Les étapes essentielles viennent d'abord ; les références avancées sont facultatives.

Pour un portefeuille logiciel Ginger, conservez les mots de récupération et la phrase secrète d'origine exacte, si vous en avez utilisé une. Ils permettent de retrouver l'accès après la perte de l'ordinateur. Un portefeuille matériel utilise la procédure de sauvegarde de son appareil ; gardez ses mots hors de l'ordinateur.

<span id="the-backup-you-need-first" aria-hidden="true"></span>

## La sauvegarde dont vous avez besoin en premier

1. Notez les mots dans l'ordre affiché et gardez-les privés.
2. Notez la phrase secrète exacte, ou indiquez que le portefeuille a été créé sans phrase secrète. Ginger ne peut pas la réinitialiser.
3. Conservez la sauvegarde dans un endroit accessible après la perte de l'ordinateur, en empêchant les autres de la lire.
4. Vérifiez la sauvegarde tant que le portefeuille reste accessible.

Le nom du portefeuille n'est pas un secret de récupération. Un code d'authentification ou un PIN matériel ne remplace pas les mots et la phrase secrète d'origine.

<span id="store-recovery-information-safely" aria-hidden="true"></span>

## Stocker les informations de récupération en sécurité

Écrivez clairement les mots, dans leur ordre d'origine. Rangez-les de façon à pouvoir les récupérer après la perte de l'ordinateur, tout en empêchant d'autres personnes de les lire. Envisagez plusieurs copies durables si un incendie, l'eau ou un seul emplacement inaccessible peut rendre la sauvegarde inutile. Tenez un inventaire des emplacements, sans inscrire les mots dans une note ordinaire sur le cloud.

Assurez aussi la récupération d'une phrase secrète non vide. La mémorisation seule peut échouer. Un stockage séparé réduit le risque qu'une seule découverte expose tout, mais son organisation doit rester compréhensible pour vous ou une personne que vous autorisez intentionnellement. N'inventez pas un système artisanal divisant les mots en fragments sans savoir comment le reconstituer.

Un mot de passe d'application, un PIN d'appareil, un code d'authentification et une phrase secrète BIP39 ne sont pas interchangeables. Étiquetez clairement vos instructions de sauvegarde sans révéler les secrets à un lecteur non autorisé.

<span id="choose-something-durable-and-readable" aria-hidden="true"></span>

## Choisir un support durable et lisible

Le papier peut être endommagé par le feu, l'eau ou la décoloration. Le métal résiste à certains dommages, mais doit toujours être protégé des regards. Vérifiez que la sauvegarde reste lisible et accessible.

Évitez les photographies, les notes cloud ordinaires et les imprimantes pour les mots de récupération : elles peuvent laisser des copies hors de votre contrôle. Si vous conservez plusieurs copies, protégez-les et suivez chacune d'elles. Ne divisez pas les mots en une énigme improvisée que vous pourriez être incapable de reconstituer.

<span id="check-the-backup-before-you-need-it" aria-hidden="true"></span>

## Vérifier la sauvegarde avant d'en avoir besoin

Dans un portefeuille logiciel ouvert, utilisez **Wallet Settings** → **Tools** → **Verify Recovery Words**, puis **Verify**. Saisissez les mots depuis la sauvegarde. Une vérification réussie constitue un indice utile que ces mots appartiennent à ce portefeuille. Assurez-vous aussi que la phrase secrète enregistrée est correcte et que vous retrouvez les fichiers à préserver.

Si les mots ne sont pas validés, vérifiez leur orthographe et leur ordre en privé. Si vous pouvez encore dépenser mais ne pouvez pas établir une sauvegarde de récupération utilisable, créez un nouveau portefeuille avec une sauvegarde vérifiée et transférez les fonds avec soin. Ne supprimez pas l'ancien portefeuille pendant vos recherches.

Sauvegardez à nouveau les métadonnées locales après des changements importants d'étiquettes ou de paramètres. Recevoir davantage de bitcoin ne nécessite normalement pas un nouvel ensemble de mots ; un nouveau portefeuille ou une phrase secrète différente, si.

<span id="what-about-labels-and-computer-files" aria-hidden="true"></span>

## Et les étiquettes et les fichiers de l'ordinateur ?

Les mots de récupération ne restaurent pas toutes les étiquettes, tous les paramètres ni tous les enregistrements de commandes auprès des prestataires. Les sauvegardes automatiques locales sont sur le même ordinateur et ne protègent donc pas contre sa perte complète.

Référence avancée facultative : [fichiers du portefeuille, métadonnées et phrase secrète](/fr/backup-recovery/backup-files/). Elle explique les copies de fichiers et les fichiers liés à la 2FA séparément de la sauvegarde essentielle des mots.
