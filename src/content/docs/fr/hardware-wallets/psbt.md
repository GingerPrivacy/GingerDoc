---
doc_id: "hardware-wallets.psbt"
title: "Utiliser le parcours PSBT"
description: "Préparer une transaction Bitcoin dans Ginger, la signer avec un portefeuille matériel via un fichier et importer le résultat pour diffusion."
lang: fr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Configurez d'abord un portefeuille matériel vérifié et sa sauvegarde indépendante.

Une transaction Bitcoin partiellement signée (PSBT) est un fichier contenant une transaction et les informations nécessaires au signataire. Elle sépare la préparation sur ordinateur de la signature matérielle. Un PSBT peut divulguer adresses, montants et informations du portefeuille ; traitez-le comme privé avant même qu'il puisse dépenser quoi que ce soit.

<span id="prepare-the-wallet-connection" data-ginger-heading="préparer-la-connexion-du-portefeuille" aria-hidden="true"></span>

## Préparer la connexion du portefeuille

Il faut dans Ginger un enregistrement matériel compatible, lié aux clés de l'appareil signataire. Pour un export JSON Coldcard pris en charge, ajoutez le fichier avec **Import File**. Suivez les instructions actuelles du fabricant pour ce firmware ; un fichier de transaction PSBT n'est pas un fichier d'importation de portefeuille.

L'export contient les informations publiques du compte et l'empreinte de l'appareil, pas les mots de récupération. Vérifiez la correspondance des adresses sur Ginger et l'appareil avant de financer le portefeuille. Un compte importé avec un autre chemin de dérivation ou une autre phrase secrète peut être un autre portefeuille malgré le même appareil.

<span id="export-a-transaction" data-ginger-heading="exporter-une-transaction" aria-hidden="true"></span>

## Exporter une transaction

1. Ouvrez le portefeuille matériel dans Ginger. Dans **Wallet Settings** → **General**, activez **PSBT workflow**.
2. Choisissez **Send** et préparez destination et montant normalement. Vérifiez entrées, monnaie rendue et frais.
3. Dans l'aperçu, choisissez **Save PSBT file** et enregistrez la proposition. **Send Now** utilise la signature immédiate au lieu du parcours par fichier.
4. Transférez le fichier à l'appareil via sa méthode prise en charge, par exemple un support amovible. Suivez ses instructions et vérifiez destination, montant, frais et monnaie rendue sur son écran fiable.
5. Enregistrez le résultat signé sans le confondre avec la proposition initiale non signée.

N'approuvez pas uniquement parce que Ginger a préparé la transaction. L'appareil doit autoriser le paiement voulu. Gardez les mots hors du fichier PSBT et de l'ordinateur.

<span id="import-and-broadcast" data-ginger-heading="importer-et-diffuser" aria-hidden="true"></span>

## Importer et diffuser

Revenez au portefeuille matériel dans Ginger et choisissez **Broadcast**, visible avec le parcours PSBT. Le dialogue **Import Transaction** accepte les fichiers de transaction pris en charge, dont PSBT et fichiers de transaction. Sélectionnez le résultat signé et examinez l'écran de diffusion avant de l'envoyer au réseau.

Un PSBT non signé ou incomplètement signé ne peut pas être diffusé comme paiement valide. Une signature réussie ne garantit pas non plus l'acceptation si les entrées ont été dépensées ou si les frais ne conviennent plus au réseau. Gardez le portefeuille d'origine disponible, synchronisez et vérifiez l'historique avant de créer un autre paiement.

Une fois la transaction diffusée, l'appareil n'a plus besoin de rester connecté pour la confirmation. Vérifiez l'entrée finale et les confirmations dans Ginger. Supprimer un fichier signé n'annule pas une transaction qu'un tiers peut déjà diffuser.

<span id="handle-files-carefully" data-ginger-heading="manipuler-les-fichiers-avec-soin" aria-hidden="true"></span>

## Manipuler les fichiers avec soin

Utilisez des noms distincts pour propositions et résultats signés. N'envoyez pas de PSBT par e-mail et ne les chargez pas dans un décodeur en ligne pour examiner votre transaction. Protégez aussi les exports de compte : une clé publique étendue révèle de nombreuses adresses même si elle ne peut pas directement signer une dépense.

Ce parcours décrit l'interface matérielle publiée. Il n'établit ni coordinateur multisignature général, ni API de signature pour développeurs, ni compatibilité avec tous les formats PSBT d'autres applications.
