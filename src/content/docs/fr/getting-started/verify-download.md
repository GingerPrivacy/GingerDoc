---
doc_id: "getting-started.verify-download"
title: "Vérifier un téléchargement Ginger Wallet"
description: "Vérifier la signature d'une version Ginger Wallet et l'empreinte de sa clé de signature avant l'installation."
lang: fr
verified_release: "v2.0.26"
reader_level: "advanced"
sidebar:
  label: Vérifier un téléchargement
  badge:
    text: Avancé
    variant: caution
prev: false
next: false
---

> Niveau de lecture : guide avancé. Utilisez [le guide d'installation](/fr/getting-started/install/) pour identifier le téléchargement officiel et le paquet de votre ordinateur.

Une signature détachée aide à établir que le fichier téléchargé a été signé par le détenteur d'une clé précise et n'a pas changé depuis. Elle ne prouve pas que le logiciel est sans bugs. Vous devez aussi établir que cette clé est celle à laquelle vous vouliez faire confiance.

<span id="collect-the-matching-files" aria-hidden="true"></span>

## Rassembler les fichiers correspondants

Depuis [la version v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), téléchargez votre installateur ou archive ainsi que le fichier portant le même nom suivi de `.asc`. Gardez-les dans un même dossier. Par exemple, sous Windows : `Ginger-2.0.26.msi` et `Ginger-2.0.26.msi.asc`. Une signature pour un DMG, ZIP ou une autre version ne vérifie pas ce MSI.

Obtenez la clé publique via le lien PGP du [site officiel](https://gingerwallet.io/). Enregistrez-la sous `PGP.txt`. Utilisez une application OpenPGP fiable, comme GnuPG, pour l'examiner et l'importer. Si GnuPG manque, obtenez-le sur [sa page officielle](https://gnupg.org/download/).

<span id="check-the-fingerprint" aria-hidden="true"></span>

## Vérifier l'empreinte

L'empreinte publiée par Ginger pour cette version est :

```text
FA0B 017A 3E75 CE65 CBF7 838F A8FF 3767 EDF5 DCE9
```

Dans un terminal ouvert dans le dossier de téléchargement, examinez la clé avant de l'importer :

```sh
gpg --show-keys --with-fingerprint PGP.txt
gpg --import PGP.txt
```

Comparez l'empreinte entière, pas seulement un identifiant court ou le nom affiché. Si possible, corroborez-la avec une copie déjà fiable ou un autre canal Ginger établi. Obtenir une clé et une signature depuis une même source compromise ne suffit pas à établir l'authenticité. Si Ginger annonce un changement de clé, vérifiez l'annonce avant de faire confiance à la nouvelle empreinte.

<span id="verify-the-actual-download" aria-hidden="true"></span>

## Vérifier le téléchargement réel

Pour l'installateur Windows, exécutez :

```sh
gpg --verify Ginger-2.0.26.msi.asc Ginger-2.0.26.msi
```

Pour une autre plateforme, remplacez les deux noms exacts. Une vérification réussie doit indiquer une bonne signature de la clé voulue. GnuPG peut aussi avertir que la clé n'est pas certifiée par une signature fiable : cela concerne votre authentification de la clé et ne doit pas être confondu avec une mauvaise signature du fichier.

Si le résultat indique **BAD signature**, si la clé manque, si l'empreinte diffère ou si la vérification ne se termine pas, n'ouvrez pas encore le téléchargement. Vérifiez la paire de noms, recommencez le téléchargement et demandez de l'aide via les liens officiels si le problème persiste. Ne déclarez pas une clé inconnue fiable simplement pour supprimer un avertissement.

<span id="checksums-and-platform-signatures" aria-hidden="true"></span>

## Sommes de contrôle et signatures de plateforme

Comparer une somme de contrôle peut détecter une erreur de téléchargement. Une somme provenant d'une page non fiable ne peut pas authentifier un logiciel : un attaquant peut remplacer le fichier et sa somme. La version fournit aussi des informations de sommes de contrôle ; la procédure de signature détachée ci-dessus suffit à vérifier un paquet choisi.

La signature de code Windows et la signature ou notarisation macOS ajoutent des contrôles de plateforme. Elles complètent la vérification de la version téléchargée ; elles ne remplacent pas la protection de vos mots et la vérification des transactions.

Après une vérification réussie, revenez à [Installer l'application](/fr/getting-started/install/#install-the-application).
