---
doc_id: "backup-recovery.restore"
title: "Récupérer un portefeuille ou un solde manquant"
description: "Récupérer un portefeuille Ginger avec ses mots et sa phrase secrète d'origine, puis vérifier le portefeuille sélectionné et la progression de l'analyse avant d'examiner les cas particuliers."
lang: fr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Niveau de lecture : utilisation courante. Choisissez ce guide lorsque vous avez besoin de la tâche qu'il décrit.

La récupération recherche les clés et leur historique de transactions. Avant de commencer, préservez les fichiers du portefeuille de l'ancien ordinateur si vous y avez accès. Travaillez sur des copies et conservez les originaux jusqu'à avoir vérifié le portefeuille récupéré.

<span id="recover-from-words" aria-hidden="true"></span>

## Récupérer depuis les mots

1. Installez et vérifiez Ginger sur un ordinateur fiable. Dans l'écran d'ajout de portefeuille, choisissez **Recover**.
2. Indiquez un **Wallet Name** si demandé. Choisissez un nom distinct pour éviter la confusion avec un portefeuille existant.
3. Saisissez les mots d'origine dans l'ordre. Utilisez la véritable sauvegarde, pas un nouvel ensemble de mots générés.
4. À **Enter Passphrase**, saisissez la phrase secrète utilisée pour créer le portefeuille d'origine. Laissez-la vide uniquement si celui-ci n'en avait pas. Vous ne définissez pas un mot de passe de remplacement.
5. Laissez la synchronisation et la récupération se terminer. Vérifiez les transactions et adresses connues, pas seulement la valeur affichée en monnaie fiduciaire. Certaines actions normales sont masquées pendant la récupération.

Des phrases secrètes différentes dérivent des portefeuilles valides différents. Une faute de frappe peut donc produire un portefeuille vide sans erreur « mauvaise phrase secrète » lors de la récupération depuis la seed. Vérifiez majuscules, espaces, disposition du clavier et sauvegarde d'origine avant de conclure à la disparition des fonds.

<span id="an-apparently-empty-recovered-wallet" aria-hidden="true"></span>

## Un portefeuille récupéré apparemment vide

Vérifiez d'abord le portefeuille et le réseau sélectionnés. Mainnet et réseaux de test ont des coins distincts. Vérifiez ensuite la connexion et la progression de la récupération. Si l'application cherche encore, un solde incomplet n'est pas un résultat définitif.

Si ces vérifications sont correctes mais que les transactions connues restent absentes, cessez de changer les paramètres au hasard. Un portefeuille créé dans une autre application ou un grand nombre d'adresses inutilisées peut nécessiter un examen plus précis.

Référence avancée facultative : [comptes, analyse des adresses et importation de fichiers](/fr/backup-recovery/recovery-options/). Elle couvre ces cas sans intégrer les paramètres personnalisés aux étapes normales de récupération depuis les mots.

La récupération depuis les mots rétablit l'accès aux clés correspondantes. Les étiquettes privées et autres données locales peuvent nécessiter une sauvegarde de fichiers distincte.

<span id="if-something-is-missing" aria-hidden="true"></span>

## Si quelque chose manque

| Ce qu'il vous reste | Étape pratique suivante |
| --- | --- |
| Mots et phrase secrète d'origine | Récupérer dans une installation fiable |
| Portefeuille accessible, mais mots absents ou invalides | Créer un nouveau portefeuille sauvegardé et transférer les fonds tant que l'accès existe |
| Fichier du portefeuille et identifiants d'origine | Essayer d'importer une copie ; préserver tous les fichiers associés |
| Mots mais phrase secrète non vide oubliée | Ginger ne peut pas la réinitialiser ; ne pas confondre un portefeuille vide avec une récupération réussie |
| Appareil matériel mais aucune sauvegarde fiable | Suivre la procédure de vérification du fabricant avant de risquer l'appareil |
| Ni accès aux dépenses ni informations de récupération utilisables | L'assistance ne peut pas fabriquer les clés manquantes |

Ne donnez jamais à une personne proposant une « aide à la récupération » vos mots, phrase secrète, clés privées ou fichier du portefeuille. Un diagnostic légitime commence par des détails non secrets comme la version, le réseau et le texte de l'erreur.
