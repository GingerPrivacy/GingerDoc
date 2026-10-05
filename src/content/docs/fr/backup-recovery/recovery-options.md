---
doc_id: "backup-recovery.recovery-options"
title: "Récupération avancée : comptes, analyse des adresses et fichiers"
description: "Examiner la compatibilité de récupération de Ginger, la limite d'adresses inutilisées, les imports JSON et les métadonnées manquantes après avoir vérifié les mots et la phrase secrète d'origine."
lang: fr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Conservez les informations de récupération et les fichiers originaux avant de modifier la récupération ou l'organisation des fichiers.

Effectuez d'abord [les vérifications normales de récupération](/fr/backup-recovery/restore/) : portefeuille voulu, mots et phrase secrète d'origine exacts, connexion et progression de l'analyse. Cette page traite des raisons précises pour lesquelles elles peuvent ne pas suffire.

<span id="address-scanning-and-account-compatibility" data-ginger-heading="analyse-des-adresses-et-compatibilité-des-comptes" aria-hidden="true"></span>

## Analyse des adresses et compatibilité des comptes

L'écran de récupération accepte des ensembles valides de 12, 15, 18, 21 ou 24 mots anglais et vérifie leur somme de contrôle. Des mots valides ne suffisent pas à établir la compatibilité du compte d'une autre application.

Si vous avez utilisé un nombre inhabituellement élevé d'adresses de réception inutilisées avant une adresse payée, **Advanced Recovery Options** propose **Minimum Gap Limit:**. L'écran de récupération de cette version utilise 114 par défaut. Augmenter cette valeur peut étendre la recherche, au prix de davantage de travail et de temps ; cela ne corrige ni des mots erronés, ni une mauvaise phrase secrète, ni un format incompatible. Utilisez une valeur supérieure uniquement si votre historique d'adresses le justifie.

Un portefeuille créé dans une autre application peut employer d'autres types d'adresses, comptes ou chemins de dérivation. Les mots BIP39 seuls ne garantissent pas que chaque portefeuille découvre tous les comptes. Pour les comptes mainnet standard de Ginger, SegWit natif utilise `m/84'/0'/0'` et Taproot `m/86'/0'/0'`. Une récupération avancée dans une autre application doit prendre en charge le compte et le type d'adresse concernés. Effectuez la récupération d'un portefeuille matériel sur un appareil matériel autant que possible.

Ginger ne propose pas la récupération par parts SLIP39 dans cette version. Ne saisissez pas un ensemble de parts comme s'il s'agissait d'une liste de mots BIP39 unique.

<span id="import-a-file" data-ginger-heading="importer-un-fichier" aria-hidden="true"></span>

## Importer un fichier

Choisissez **Import File** dans l'écran d'ajout de portefeuille et sélectionnez un fichier `.json` compatible. Ginger peut demander un autre nom si celui-ci est déjà utilisé. Un fichier JSON quelconque, une transaction PSBT ou une xpub arbitraire collée dans un fichier texte ne constitue pas une sauvegarde compatible.

Utilisez la phrase secrète d'origine pour ouvrir un portefeuille logiciel importé protégé. Un fichier chiffré par 2FA n'équivaut pas à une sauvegarde portable non chiffrée. Conservez ses fichiers et identifiants associés, ou récupérez plutôt depuis les mots et la phrase secrète d'origine. L'importation d'un export matériel crée un portefeuille qui dépend toujours de l'appareil pour signer.

<span id="what-recovery-does-not-restore" data-ginger-heading="ce-que-la-récupération-ne-restaure-pas" aria-hidden="true"></span>

## Ce que la récupération ne restaure pas

La blockchain ne peut pas restaurer les étiquettes privées, tous les paramètres de l'application ni les métadonnées de commandes des prestataires. Conservez le fichier `.attr` correspondant si elles comptent. N'écrasez pas les fichiers nouvellement récupérés avec d'anciennes métadonnées pendant que Ginger fonctionne. Pour obtenir de l'aide sur les données annexes, travaillez sur des copies et décrivez les noms de fichiers et la version sans publier leur contenu.

Gardez les originaux et travaillez sur des copies. Consultez [les sauvegardes des fichiers du portefeuille](/fr/backup-recovery/backup-files/) avant de manipuler les données locales.
