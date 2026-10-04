---
doc_id: "backup-recovery.passphrase"
title: "Qu'est-ce qu'une phrase secrète ?"
description: "Comprendre la phrase secrète de votre portefeuille Ginger, les informations à sauvegarder et pourquoi la récupération nécessite la phrase d'origine même si une autre ouvre un portefeuille vide."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: "Phrase secrète"
prev: false
next: false
---

> Niveau de lecture : commencez ici. Ce guide concerne les portefeuilles logiciels dans Ginger v2.0.26. Pour un portefeuille matériel, suivez les instructions de récupération du fabricant de l'appareil et gardez ses mots de récupération hors de votre ordinateur.

Une phrase secrète est un secret facultatif que vous choisissez lors de la création d'un portefeuille. Dans Ginger, elle protège l'accès au portefeuille logiciel et fait également partie des informations nécessaires à sa récupération. Pour récupérer le même portefeuille, vous avez besoin des mots de récupération d'origine et de la phrase secrète d'origine exacte, si vous en avez utilisé une. Ginger ne peut pas réinitialiser une phrase secrète oubliée.

<span id="do-i-have-to-use-a-passphrase" data-ginger-heading="dois-je-utiliser-une-phrase-secrète-" aria-hidden="true"></span>

## Dois-je utiliser une phrase secrète ?

Lorsque vous créez un portefeuille, Ginger affiche **Add Passphrase** après **Confirm Recovery Words**. Vous pouvez saisir et confirmer une phrase secrète, ou laisser les deux champs vides pour créer un portefeuille sans phrase secrète.

Sans phrase secrète, une personne qui obtient vos mots de récupération peut récupérer et dépenser vos bitcoins. Une phrase secrète ajoute un autre secret à protéger, mais l'oublier peut vous empêcher de récupérer votre portefeuille même si vous disposez encore des mots. Choisissez une phrase difficile à deviner que vous pouvez consigner et reproduire avec exactitude. Évitez les espaces au début ou à la fin ; les contrôles de saisie de Ginger les refusent.

<span id="is-it-the-same-as-recovery-words-or-a-2fa-code" data-ginger-heading="est-ce-la-même-chose-que-les-mots-de-récupération-ou-un-code-2fa-" aria-hidden="true"></span>

## Est-ce la même chose que les mots de récupération ou un code 2FA ?

Non. Ginger génère douze **Recovery Words** pour un nouveau portefeuille logiciel. Vous choisissez la phrase secrète séparément. Gardez-la à part de la liste numérotée des mots ; ne la saisissez pas comme un mot de récupération supplémentaire.

Le nom de votre portefeuille est uniquement une étiquette locale. Un code fourni par une application d'authentification pour l'authentification à deux facteurs (2FA) correspond à une vérification distincte au démarrage de l'application. Ni l'un ni l'autre ne remplace les mots et la phrase secrète d'origine lors de la récupération d'un portefeuille logiciel.

<span id="what-should-i-back-up" data-ginger-heading="que-dois-je-sauvegarder-" aria-hidden="true"></span>

## Que dois-je sauvegarder ?

- Les mots de récupération, dans l'ordre affiché.
- La phrase secrète d'origine exacte, y compris les majuscules, les minuscules et les caractères, ou une note indiquant clairement que vous avez créé le portefeuille sans phrase secrète.

Gardez ces informations confidentielles et accessibles même après la perte de l'ordinateur. Écrivez les mots hors ligne ; évitez les photographies, les e-mails et les notes ordinaires stockées dans le cloud. Veillez également à pouvoir retrouver la phrase secrète. La conserver séparément peut vous protéger contre quelqu'un qui trouverait les deux secrets ensemble, mais assurez-vous de pouvoir retrouver les deux lorsque vous en avez besoin. Ne comptez pas uniquement sur votre mémoire.

Les mots de récupération rétablissent l'accès aux bitcoins, mais ne restaurent pas toutes les étiquettes ni tous les paramètres. Conservez les fichiers de portefeuille existants pendant que vous examinez un problème de récupération. Une sauvegarde automatique sur le même ordinateur ne protège pas contre la perte de cet ordinateur.

<span id="how-do-i-check-my-backup" data-ginger-heading="comment-vérifier-ma-sauvegarde-" aria-hidden="true"></span>

## Comment vérifier ma sauvegarde ?

Tant que votre portefeuille logiciel est accessible, ouvrez **Wallet Settings** → **Tools**. Trouvez **Verify Recovery Words** et choisissez **Verify**, puis saisissez les mots de votre sauvegarde et terminez la vérification.

Cela vérifie si ces mots appartiennent au portefeuille. Cette procédure n'affiche pas les mots oubliés et ne réinitialise pas la phrase secrète. Assurez-vous également que la phrase secrète que vous avez consignée est correcte. Si la vérification échoue, vérifiez l'orthographe et l'ordre des mots en privé avant de vous fier à la sauvegarde.

<span id="how-do-i-use-the-passphrase-during-recovery" data-ginger-heading="comment-utiliser-la-phrase-secrète-pendant-la-récupération-" aria-hidden="true"></span>

## Comment utiliser la phrase secrète pendant la récupération ?

Ces étapes permettent de récupérer un portefeuille logiciel Ginger à partir de ses mots. Conservez tous les fichiers de portefeuille existants jusqu'à ce que la récupération soit confirmée.

1. Ouvrez Ginger sur un ordinateur de confiance. Sur l'écran d'ajout de portefeuille, choisissez **Recover**.
2. Saisissez un **Wallet Name** distinct si cela vous est demandé, afin de pouvoir distinguer le portefeuille récupéré des portefeuilles existants.
3. Saisissez les **Recovery Words** d'origine dans l'ordre.
4. À l'étape **Enter Passphrase**, saisissez et confirmez la phrase secrète d'origine. Laissez les champs vides uniquement si le portefeuille d'origine n'avait pas de phrase secrète. Vous ne choisissez pas un nouveau mot de passe à cette étape.
5. Laissez la récupération et la synchronisation se terminer, puis vérifiez l'historique des transactions que vous connaissez. La synchronisation consiste à vérifier sur le réseau Bitcoin les transactions appartenant au portefeuille.

<span id="why-is-my-recovered-wallet-empty" data-ginger-heading="pourquoi-mon-portefeuille-récupéré-est-il-vide-" aria-hidden="true"></span>

## Pourquoi mon portefeuille récupéré est-il vide ?

Lors de la récupération à partir des mots, une phrase secrète différente produit un portefeuille différent. Ginger peut donc accepter une phrase secrète mal saisie et récupérer un portefeuille vide sans signaler d'erreur de phrase secrète. Cela diffère de l'ouverture d'un fichier de portefeuille protégé existant, où une phrase secrète incorrecte est refusée.

Vérifiez la phrase secrète d'origine, les majuscules et les minuscules, les espaces et la disposition du clavier. Vérifiez également que vous avez sélectionné le portefeuille et le réseau Bitcoin voulus, et que la récupération est terminée. Une analyse inachevée peut afficher un solde incomplet. Un solde vide ne prouve pas à lui seul que les bitcoins d'origine ont disparu.

Si l'historique attendu est toujours absent, conservez les fichiers et informations d'origine et demandez de l'aide via les [liens d'assistance officiels du projet Ginger](https://gingerwallet.io/). Partagez uniquement des détails non secrets, tels que la version de l'application et le texte de l'erreur. N'envoyez jamais vos mots de récupération, votre phrase secrète ou vos fichiers de portefeuille à l'assistance.

<span id="can-i-reset-or-replace-a-forgotten-passphrase" data-ginger-heading="puis-je-réinitialiser-ou-remplacer-une-phrase-secrète-oubliée-" aria-hidden="true"></span>

## Puis-je réinitialiser ou remplacer une phrase secrète oubliée ?

Ginger ne peut pas la réinitialiser. Une récupération avec les mêmes mots et une nouvelle phrase secrète donne accès à un portefeuille différent ; elle ne modifie pas la phrase secrète du portefeuille d'origine et ne déplace pas ses bitcoins.

Si vous pouvez encore envoyer des fonds depuis le portefeuille d'origine mais ne pouvez pas constituer une sauvegarde de récupération utilisable, créez un nouveau portefeuille, vérifiez sa sauvegarde et transférez soigneusement les fonds tant que vous avez encore accès au portefeuille d'origine. Conservez l'ancien portefeuille jusqu'à la confirmation du transfert. Si vous ne disposez ni de l'accès permettant de dépenser les fonds ni des informations de récupération nécessaires, l'assistance ne peut pas recréer le secret manquant.
