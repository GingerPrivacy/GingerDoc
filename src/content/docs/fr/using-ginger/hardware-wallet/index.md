---
doc_id: "hardware-wallets.connect"
title: "Connecter et utiliser un portefeuille matériel"
description: "Connecter un portefeuille matériel compatible à Ginger, vérifier les adresses de réception sur l'appareil et approuver les paiements en sécurité."
lang: fr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="does-ginger-support-hardware-wallets"></span>

> Niveau de lecture : utilisation courante. Choisissez ce guide lorsque vous avez besoin de la tâche qu'il décrit.

Un portefeuille matériel conserve les clés sur un appareil séparé. Ginger peut afficher le solde et préparer les transactions, tandis que l'appareil autorise les signatures prises en charge. L'ordinateur gère toujours des données publiques sensibles ; le stockage matériel ne rend pas l'activité anonyme.

<span id="compatibility-in-this-release" data-ginger-heading="compatibilité-de-cette-version" aria-hidden="true"></span>

## Compatibilité de cette version

Ginger 2.0.26 intègre Hardware Wallet Interface (HWI) 3.2.0. La reconnaissance inclut Coldcard, Ledger Nano S, Nano S Plus, Nano X, Trezor One, Model T, Safe 3, Safe 5, BitBox01, BitBox02, KeepKey et Blockstream Jade. La reconnaissance ne garantit pas le fonctionnement de chaque appareil, firmware, parcours de phrase secrète ou type d'adresse dans l'interface graphique.

La [matrice HWI 3.2.0](https://github.com/bitcoin-core/HWI/blob/3.2.0/docs/devices/index.rst) décrit les capacités du transport sous-jacent. Ginger en expose un sous-ensemble : sa connexion normale importe par exemple le compte SegWit natif. HWI compatible multisig ou Taproot ne crée pas à lui seul un parcours Ginger correspondant.

Avant de déplacer des fonds importants, vérifiez que votre appareil exact se connecte, affiche une adresse de réception et signe un petit paiement test. Si Ginger ne peut terminer la méthode de saisie du PIN ou de la phrase secrète, terminez le parcours compatible sur l'appareil ou consultez son fabricant. Ne saisissez pas les mots de récupération de l'appareil dans Ginger comme contournement.

<span id="add-the-device" data-ginger-heading="ajouter-lappareil" aria-hidden="true"></span>

## Ajouter l'appareil

1. Initialisez et sauvegardez le matériel selon les instructions du fabricant. Utilisez un firmware fiable et un câble USB capable de transmettre les données.
2. Connectez un seul appareil à la fois, déverrouillez-le et ouvrez son application Bitcoin si nécessaire. Fermez les applications pouvant occuper la connexion USB.
3. Dans l'écran d'ajout Ginger, choisissez **Hardware Wallet** et un nom si demandé.
4. Suivez détection et demandes de l'appareil. Ginger peut reconnaître un portefeuille déjà ajouté et proposer de l'ouvrir au lieu de créer un doublon.
5. Laissez synchroniser et confirmez que réseau et compte sélectionnés sont ceux prévus.

Ginger peut conserver un enregistrement public sur l'ordinateur sans matériel connecté. Il permet observation et génération d'adresses ; dépenser exige toujours l'appareil signataire ou une récupération valide de ses clés.

<span id="receive-and-verify" data-ginger-heading="recevoir-et-vérifier" aria-hidden="true"></span>

## Recevoir et vérifier

Choisissez **Receive**, ajoutez une étiquette et générez une adresse. Utilisez **Show on the hardware wallet** si disponible. Comparez l'adresse complète affichée par l'appareil à Ginger avant partage. Si elles diffèrent, arrêtez : approuver une autre adresse peut envoyer hors de votre portefeuille.

Un ordinateur compromis peut afficher une adresse crédible. L'écran matériel apporte une vérification distincte avec ses propres clés. Utilisez une adresse neuve par paiement pour éviter de lier des réceptions sans rapport.

<span id="send-and-approve" data-ginger-heading="envoyer-et-approuver" aria-hidden="true"></span>

## Envoyer et approuver

Préparez le paiement dans Ginger et vérifiez destinataire, montant, rendu et frais. Inspectez la demande de signature sur le matériel. Rejetez-la si destination ou montant diffèrent, ou si une condition de sortie ou de rendu reste inexplicable.

Gardez l'appareil connecté jusqu'à la fin de la signature. Vérifiez ensuite diffusion et confirmation dans l'historique. Retirer l'appareil n'annule pas une transaction déjà diffusée.

<span id="coinjoin-and-other-limits" data-ginger-heading="coinjoin-et-autres-limites" aria-hidden="true"></span>

## CoinJoin et autres limites

Un portefeuille matériel ne peut être le portefeuille source signataire du CoinJoin automatique de Ginger. Lorsqu'il est chargé, il peut apparaître comme destination des sorties CoinJoin d'un portefeuille logiciel : c'est un rôle de réception, et la sélection de cette destination est réinitialisée au redémarrage. Utilisez uniquement la destination réellement proposée et vérifiez que vous la contrôlez avant de compter dessus.

Le [parcours plateforme vers stockage à froid](/fr/hardware-wallets/exchange-to-cold-storage/) compare réception directe de sorties admissibles et transfert ultérieur. Il comprend la restriction empêchant le démarrage avec uniquement des coins privés et les contrôles de rapprochement des deux portefeuilles.

L'envoi PayJoin depuis un portefeuille matériel est rejeté dans cette version. La signature de message dépend de la compatibilité appareil/vérificateur. Ni l'appareil ni Ginger ne peut annuler un paiement confirmé. Pour la signature par fichier, lisez [le parcours PSBT](/fr/hardware-wallets/psbt/).

<span id="connection-problems" data-ginger-heading="problèmes-de-connexion" aria-hidden="true"></span>

## Problèmes de connexion

Essayez un câble de données connu, un port USB direct et un seul appareil déverrouillé. Sous Linux, suivez les permissions udev/USB du fabricant et reconnectez ensuite. Évitez root comme solution permanente. Si une autre phrase ouvre un compte vide inattendu, vérifiez la phrase d'origine de l'appareil plutôt que de le réinitialiser.
