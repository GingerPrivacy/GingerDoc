---
doc_id: "getting-started.install"
title: "Installer Ginger Wallet"
description: "Choisir le bon téléchargement de Ginger Wallet pour ordinateur, vérifier la compatibilité et installer la version publiée."
lang: fr
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Installer Ginger
prev:
  link: /fr/getting-started/
  label: Commencer ici
next:
  link: /fr/getting-started/first-wallet/
  label: Créer votre premier portefeuille
---

> Niveau de lecture : commencez ici. Les étapes essentielles viennent d'abord ; les références avancées sont facultatives.

Ginger Wallet est un portefeuille Bitcoin pour ordinateur. Vous détenez les clés et pouvez utiliser CoinJoin pour compliquer le suivi des transactions. Cette version ne propose ni portefeuille mobile, ni Lightning, ni autres cryptomonnaies.

Ce guide concerne la version 2.0.26. Obtenez le logiciel sur [le site officiel Ginger](https://gingerwallet.io/) ou [sa version GitHub liée](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26). Une publicité de recherche, un message privé ou une application mobile au nom similaire ne sont pas des sources fiables.

<span id="choose-a-download" data-ginger-heading="choisir-un-téléchargement" aria-hidden="true"></span>

## Choisir un téléchargement

| Ordinateur | Système pris en charge pour cette version | Téléchargement |
| --- | --- | --- |
| PC Windows, x64 | Windows 10 version 1607 ou ultérieure ; Windows 11 build 22000 ou ultérieur | `Ginger-2.0.26.msi` |
| Mac avec Apple silicon | macOS 12 ou ultérieur | `Ginger-2.0.26-arm64.dmg` |
| Mac avec processeur Intel | macOS 12 ou ultérieur | `Ginger-2.0.26.dmg` |
| Ubuntu ou Debian, x64 | Ubuntu 22.04 ou ultérieur ; Debian 11 ou ultérieur | `Ginger-2.0.26.deb` |
| Autre Linux pris en charge, x64 | La version indique aussi Fedora 37 ou ultérieur | `Ginger-2.0.26.tar.gz` |

Sur Mac, **About This Mac** indique la puce ou le processeur. La version contient aussi des archives ZIP `win-x64`, `linux-x64`, `macOS-x64` et `macOS-arm64`. Elle ne contient aucun paquet Windows ARM ou Linux ARM. Ne supposez pas qu'une archive pour un autre processeur fonctionnera.

Ginger nécessite une connexion internet et du stockage accessible en écriture pour ses données de portefeuille et de synchronisation. Le nœud complet facultatif nécessite beaucoup plus d'espace disque, de bande passante et de temps de synchronisation initiale que l'utilisation ordinaire. Vous n'avez besoin ni d'un nœud complet, ni de Tor séparé, ni d'outils de développement pour commencer.

<span id="install-the-application" data-ginger-heading="installer-lapplication" aria-hidden="true"></span>

## Installer l'application

1. Téléchargez le paquet de votre système depuis la version officielle. Vérifiez source, version et nom du paquet, et respectez les contrôles de signature et de sécurité du système. Pour une vérification PGP indépendante, utilisez le fichier `.asc` correspondant et [le guide avancé de vérification](/fr/getting-started/verify-download/) avant d'ouvrir le paquet.
2. Sous Windows, ouvrez le `.msi` et suivez l'installateur. Sous macOS, ouvrez le `.dmg` et copiez Ginger dans Applications. Sous Ubuntu ou Debian, ouvrez le `.deb` avec l'installateur logiciel du système. Pour l'archive Linux, extrayez toute l'archive et lancez l'application incluse ; gardez ses fichiers associés ensemble.
3. Ouvrez Ginger. Laissez du temps pour la première connexion et synchronisation. Tor est inclus et démarre normalement avec le portefeuille.
4. Passez à [Créer et ouvrir un portefeuille](/fr/getting-started/first-wallet/).

Une archive ZIP ou tar évite l'installateur habituel, mais ne rend pas votre portefeuille jetable et ne garantit pas l'absence de données sur l'ordinateur. Les fichiers du portefeuille sont stockés séparément de l'application. Gardez des sauvegardes avant de déplacer ou supprimer l'un ou l'autre.

<span id="if-your-operating-system-displays-a-warning" data-ginger-heading="si-votre-système-affiche-un-avertissement" aria-hidden="true"></span>

## Si votre système affiche un avertissement

Une nouvelle version peut ne pas encore avoir une forte réputation de téléchargement. Un avertissement peut aussi signaler un fichier endommagé ou non fiable. Vérifiez d'abord source, version correspondante et signature. Si la vérification échoue, arrêtez et téléchargez à nouveau depuis la version officielle. Ne désactivez pas l'antivirus ni les contrôles de sécurité globaux pour contourner un avertissement inexpliqué.

Pour les problèmes d'accès aux appareils Linux, consultez les instructions USB du fabricant du portefeuille matériel. Installer un portefeuille ne nécessite pas de l'exécuter en permanence comme administrateur.

<span id="updates-and-availability" data-ginger-heading="mises-à-jour-et-disponibilité" aria-hidden="true"></span>

## Mises à jour et disponibilité

La [liste des versions](https://github.com/GingerPrivacy/GingerWallet/releases) montre les versions publiées et leurs changements. Dans **Settings** → **General**, **Auto download new version** contrôle le téléchargement des mises à jour. Télécharger n'est pas installer ; suivez l'invite de mise à jour et laissez Ginger se fermer normalement. Gardez votre sauvegarde de récupération disponible. Les fichiers de l'application peuvent être remplacés sans supprimer intentionnellement les données du portefeuille.

Lisez les conditions de service actuelles présentées par Ginger avant de les accepter, y compris les restrictions d'admissibilité. Installer l'application ne vous rend pas admissible à tous les services connectés.
