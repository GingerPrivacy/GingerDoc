---
doc_id: "help.advanced-faq"
title: "FAQ avancée de Ginger Wallet"
description: "Trouver les réponses de la version publiée sur récupération, métadonnées, xpubs, sélection des coins, progression, coûts complets CoinJoin, destinations et partage des données."
lang: fr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Commencez par la FAQ de base si vous configurez ou utilisez un portefeuille pour la première fois.

Ces questions couvrent les paramètres personnalisés, les choix de confidentialité plus approfondis et les cas particuliers de récupération. Pour les questions ordinaires de première utilisation, revenez à [la FAQ de base](/fr/help/).

- [Récupération et données locales](#recovery-and-local-data)
- [Sélection des coins et dépenses](#coin-selection-and-spending)
- [Coûts CoinJoin et progression](#coinjoin-costs-and-progress)
- [Matériel et limites de confidentialité](#hardware-and-privacy-boundaries)

<span id="recovery-and-local-data" aria-hidden="true"></span>

## Récupération et données locales

<span id="why-can-the-same-words-produce-a-different-wallet" aria-hidden="true"></span>

### Pourquoi les mêmes mots peuvent-ils produire un portefeuille différent ?

La phrase secrète d'origine participe à la dérivation des clés, et une autre application peut utiliser un compte ou un type d'adresse différent. Un ensemble de mots valide ne suffit pas à établir que les applications affichent le même compte. Vérifiez d'abord la phrase secrète d'origine et la progression de l'analyse ; n'examinez la compatibilité des comptes qu'après les contrôles ordinaires de récupération.

<span id="when-should-i-increase-the-recovery-gap-limit" aria-hidden="true"></span>

### Quand dois-je augmenter la limite d'adresses inutilisées de récupération ?

Envisagez-le si vous avez des preuves de nombreuses adresses inutilisées avant une adresse payée, par exemple des adresses générées dans une autre application. **Advanced Recovery Options** → **Minimum Gap Limit:** étend l'analyse et peut augmenter le travail et sa durée ; l'écran de récupération v2.0.26 commence à 114. Cela ne corrige ni des mots erronés, ni une phrase secrète incorrecte, ni un compte incompatible.

<span id="why-did-labels-or-privacy-information-change-after-recovery" aria-hidden="true"></span>

### Pourquoi les étiquettes ou les informations de confidentialité ont-elles changé après récupération ?

Les mots restaurent les clés, pas toutes les notes privées ni chaque élément d'analyse locale des transactions. Le JSON du portefeuille et les données ATTR correspondantes ont des rôles différents ; préservez les fichiers d'origine et utilisez des copies pendant vos recherches. Des étiquettes manquantes ou un score local modifié ne prouvent pas à eux seuls qu'une transaction Bitcoin ou son historique public a changé.

<span id="can-i-use-the-same-recovery-words-in-two-wallet-applications" aria-hidden="true"></span>

### Puis-je utiliser les mêmes mots dans deux applications ?

Des applications compatibles peuvent contrôler les mêmes clés, mais cela ne crée pas un nouveau portefeuille ni ne révoque les informations partagées avec l'ancienne application. La seconde peut divulguer les adresses ou une clé publique étendue à ses services, et les dépenses simultanées peuvent créer une confusion sur les coins disponibles. Ne saisissez pas les mots matériels sur l'ordinateur simplement pour connecter un appareil.

<span id="what-does-an-exposed-address-or-xpub-allow-someone-to-do" aria-hidden="true"></span>

### Que permet une adresse ou une xpub exposée ?

Une adresse désigne une partie précise de l'historique public. Une clé publique étendue peut révéler de nombreuses adresses, dont des adresses futures dans sa portée de dérivation, mais ne donne normalement pas le pouvoir de dépenser à elle seule. De nouvelles adresses sous la même branche exposée ne révoquent pas cette surveillance ; des secrets de signature exposés exigent une autre réponse, avec de nouvelles clés.

<span id="does-the-2fa-file-recover-the-wallet-without-the-service" aria-hidden="true"></span>

### Le fichier 2FA récupère-t-il le portefeuille sans le service ?

Ne considérez pas `2fa_info.gws` comme une clé de récupération hors ligne indépendante. Le démarrage normal 2FA utilise un identifiant d'installation et une vérification d'authentificateur auprès d'un service pour obtenir le secret supplémentaire de chiffrement des fichiers. Préservez indépendamment les mots et la phrase d'origine ; activer la 2FA ne révoque pas une clé déjà copiée.

<span id="how-do-i-delete-a-local-wallet-without-confusing-deletion-with-revocation" aria-hidden="true"></span>

### Comment supprimer localement sans confondre suppression et révocation ?

Sauvegardez d'abord, puis utilisez **Wallet Settings** → **Tools** → **Delete Wallet** et lisez la confirmation. Retirer les données locales n'efface pas les transactions Bitcoin et n'invalide pas les copies des mots. Si les clés de signature ont été exposées, supprimer simplement le portefeuille n'empêche pas une autre personne de les utiliser pour dépenser.

<span id="coin-selection-and-spending" aria-hidden="true"></span>

## Sélection des coins et dépenses

<span id="what-is-the-difference-between-a-coin-an-address-and-a-wallet" aria-hidden="true"></span>

### Quelle différence entre coin, adresse et portefeuille ?

Un coin, ou UTXO, est une sortie non dépensée d'une transaction antérieure. Une adresse peut recevoir plusieurs coins, et un portefeuille gérer de nombreuses adresses et coins. Les décisions de dépense et de CoinJoin concernent les coins disponibles, pas seulement le solde total ; le [glossaire](/fr/help/glossary/) explique ces termes.

<span id="does-combining-coinjoined-coins-always-destroy-all-privacy" aria-hidden="true"></span>

### Combiner des coins CoinJoined détruit-il toujours toute confidentialité ?

Aucune règle unique ne décrit tous les observateurs ou paiements. Une dépense commune ordinaire peut associer ses entrées, surtout si l'une est déjà liée à une identité, mais ne révèle pas automatiquement tous les liens de propriété antérieurs. Examinez les entrées et le rendu du paiement réellement nécessaire plutôt que de considérer « toujours combiner » ou « ne jamais combiner » comme une garantie.

<span id="does-a-reused-address-automatically-publish-my-entire-wallet" aria-hidden="true"></span>

### Une adresse réutilisée publie-t-elle automatiquement tout le portefeuille ?

Non, mais les réceptions à cette adresse peuvent être examinées ensemble et liées à la personne qui l'a publiée ou fournie. Une dépense commune ultérieure et les informations détenues ailleurs peuvent révéler davantage. Les étiquettes aident vos décisions locales ; elles n'imposent pas une séparation publique et ne prouvent pas que la sélection automatique préservera la limite souhaitée.

<span id="does-manual-control-force-exactly-those-inputs-into-the-final-payment" aria-hidden="true"></span>

### Manual Control impose-t-il ces entrées exactes dans le paiement final ?

**Manual Control** sélectionne des coins candidats pour un paiement ordinaire. Examinez les entrées réellement utilisées dans l'aperçu final, le montant reçu, le rendu et les frais avant autorisation. Cela est distinct de la sélection d'entrées CoinJoin et ne fixe pas une liste exacte pour un futur tour.

<span id="should-i-consolidate-many-small-coins-while-fees-are-low" aria-hidden="true"></span>

### Dois-je consolider de petits coins lorsque les frais sont bas ?

La consolidation peut réduire le nombre d'entrées nécessaires plus tard, mais la transaction de regroupement coûte des frais et peut associer des activités auparavant séparées. Un taux inférieur change ce coût, pas la divulgation. Considérez le but, la valeur et l'historique connu des coins avant de les combiner.

<span id="why-is-a-tiny-payment-missing-and-does-exclude-coins-freeze-it" aria-hidden="true"></span>

### Pourquoi un petit paiement manque-t-il, et Exclude Coins le bloque-t-il ?

Vérifiez la synchronisation et le seuil de poussière configuré avant de conclure à la perte d'une petite sortie. **Exclude Coins** affecte CoinJoin, pas les dépenses ordinaires, et ne gèle pas un coin. Les petites réceptions imprévues n'exigent pas de réponse immédiate ; évaluez leur coût de dépense et les associations possibles avant de les inclure dans un paiement.

<span id="can-i-set-any-custom-fee-rate-or-guarantee-a-confirmation-time" aria-hidden="true"></span>

### Puis-je définir n'importe quel taux ou garantir un délai de confirmation ?

Non. L'éditeur manuel de cette version rejette les taux inférieurs à 1 sat/vByte, et la politique réseau peut exiger davantage. Un taux personnalisé reste en concurrence avec les autres transactions et ne réserve pas une échéance. Vérifiez les frais totaux, pas seulement le taux, avant de confirmer.

<span id="coinjoin-costs-and-progress" aria-hidden="true"></span>

## Coûts CoinJoin et progression

<span id="why-can-the-private-balance-percentage-differ-from-overall-progress" aria-hidden="true"></span>

### Pourquoi le pourcentage de solde privé diffère-t-il de la progression globale ?

Ce sont des mesures locales différentes. La progression pondère le score de chaque coin vers l'objectif par sa valeur, tandis que le solde privé coloré compte la valeur atteignant déjà cet objectif. Aucun n'est une probabilité mesurée d'identification par un observateur. Les deux affichages peuvent différer même si les deux soldes sont corrects.

<span id="why-can-progress-fall-or-change-when-i-adjust-the-target" aria-hidden="true"></span>

### Pourquoi la progression baisse-t-elle ou change-t-elle avec l'objectif ?

Recevoir des fonds, dépenser des coins ensemble, restaurer sans analyse locale ou changer l'objectif peut modifier l'affichage. Abaisser l'objectif peut reclasser des coins sans changer leur historique publié. Examinez les transactions et paramètres concernés plutôt que de supposer qu'un changement de score prouve un vol ou garantit un nouveau résultat de confidentialité.

<span id="can-i-choose-exactly-which-coins-join-a-round" aria-hidden="true"></span>

### Puis-je choisir exactement les coins d'un tour ?

Le client sélectionne les entrées admissibles selon les paramètres CoinJoin publiés. Vous pouvez exclure certains coins et ajuster les préférences, mais la sélection manuelle d'envoi n'impose pas une liste CoinJoin. L'exclusion est attachée à ces coins ; elle ne réserve pas chaque réception future à la même adresse.

<span id="what-do-rejected-coins-or-a-blame-round-mean" aria-hidden="true"></span>

### Que signifient les coins refusés ou un blame round ?

Un blame round est une reprise du protocole après une tentative inachevée ; ce n'est pas une instruction d'identifier ou d'accuser quelqu'un. Un refus ou une indisponibilité temporaire exige d'examiner sa raison exacte et l'état actuel. Aucun message ne transfère à lui seul le contrôle au coordinateur ; consultez [le tableau des états](/fr/help/troubleshooting/#coinjoin-does-not-start).

<span id="how-do-i-reconcile-the-full-cost-of-a-round" aria-hidden="true"></span>

### Comment rapprocher le coût complet d'un tour ?

Additionnez vos entrées dépensées et soustrayez toutes vos sorties de cette transaction, dont celles envoyées dans un autre portefeuille. La différence peut inclure coordinateur, minage et un reste d'allocation de sorties. Ne comptez pas les sorties d'autrui comme les vôtres et ne supposez pas qu'un seul libellé de frais couvre toute la différence.

<span id="is-a-remix-exemption-permanent-or-applied-to-my-entire-balance" aria-hidden="true"></span>

### L'exonération remix est-elle permanente ou appliquée au solde entier ?

Non. C'est une règle d'admissibilité d'entrée selon la politique du tour proposé, pas un droit perpétuel pour toutes les transactions. La politique annoncée inclut remix admissibles et dépense directe via une transaction ; le minage reste dû. Revérifiez les conditions au lieu de diviser ou déplacer des coins uniquement pour une exonération supposée.

<span id="hardware-and-privacy-boundaries" aria-hidden="true"></span>

## Matériel et limites de confidentialité

<span id="can-coinjoin-send-directly-to-my-hardware-wallet" aria-hidden="true"></span>

### CoinJoin peut-il envoyer directement à mon portefeuille matériel ?

Un logiciel admissible peut sélectionner un matériel proposé et chargé dans **Coinjoin to this wallet**. La destination reçoit les sorties du tour sans attendre un événement distinct d'atteinte d'objectif ; le démarrage normal ne force pas un tour de candidats déjà privés. Vérifiez après chaque redémarrage, car la sélection est réinitialisée, et n'importez jamais la seed matérielle sur ordinateur pour cela.

<span id="does-an-own-node-replace-every-ginger-service-or-make-tor-unnecessary" aria-hidden="true"></span>

### Un nœud personnel remplace-t-il tous les services ou rend-il Tor inutile ?

Non. Un nœud configuré remplit des rôles précis, comme fournir blocs ou estimations de frais, tandis que CoinJoin et les parcours prestataires ou 2FA peuvent encore contacter leurs services. Tor réduit l'exposition de connexion ; le destinataire voit toujours le contenu soumis. Examinez le flux précis plutôt que de supposer aucune requête externe grâce au nœud.

<span id="does-payjoin-hide-my-payment-from-its-recipient" aria-hidden="true"></span>

### PayJoin cache-t-il le paiement à son destinataire ?

Non. Le destinataire connaît sa demande et voit la proposition pendant négociation. Une collaboration réussie peut affaiblir les hypothèses de propriété d'un tiers, mais motifs transactionnels et autres données limitent le bénéfice. Ginger peut revenir à un paiement ordinaire si la construction échoue : l'autorisation seule ne garantit pas PayJoin final.

<span id="how-do-i-prove-control-of-an-address-without-paying" aria-hidden="true"></span>

### Comment prouver une adresse sans payer ?

Utilisez **Sign Message** pour une adresse du portefeuille, lisez la déclaration exacte et partagez la signature seulement avec le vérificateur prévu. Compatibilité appareil, type d'adresse et vérificateur restent importants. Cela ne transfère pas de bitcoin ni ne prouve toutes les adresses ; cela peut lier l'adresse à l'identité connue du vérificateur.

<span id="what-information-do-secret-hunt-and-buysell-services-receive" aria-hidden="true"></span>

### Quelles informations reçoivent Secret Hunt et les services d'achat/vente ?

Les contrôles Secret Hunt pertinents peuvent soumettre identifiants de tour et transaction, outpoint d'entrée et preuve de contrôle. Validation d'adresse et commandes achat/vente envoient adresse et détails requis ; les sites des prestataires ont leurs propres divulgations d'identité et de navigateur. Ce sont des parcours facultatifs distincts : la confidentialité de la synchronisation ordinaire ne doit pas être généralisée à tous.
