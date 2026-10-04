---
doc_id: "hardware-wallets.exchange-to-cold-storage"
title: "D'une plateforme d'échange au stockage à froid avec Ginger"
description: "Retirer du bitcoin, utiliser CoinJoin dans Ginger et déplacer les fonds vers un portefeuille matériel vérifié en tenant compte des frais et de la confidentialité."
lang: fr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Configurez d'abord un portefeuille matériel vérifié et sa sauvegarde indépendante.

Ginger peut aider à séparer votre activité Bitcoin future d'un retrait de plateforme avant de stocker les fonds dans un portefeuille matériel. La plateforme conserve l'enregistrement du retrait. Le portefeuille matériel protège les clés de signature ; les transactions et les dépenses ultérieures déterminent toujours ce que les autres peuvent déduire.

Deux parcours différents existent. Choisissez-en un avant de commencer pour savoir où les sorties doivent apparaître.

| Parcours | Ce qui se passe | Point principal |
| --- | --- | --- |
| CoinJoin dans le portefeuille logiciel, puis transfert ordinaire | Les sorties restent dans le portefeuille logiciel Ginger jusqu'à leur sélection et leur envoi vers le matériel | Vous pouvez vérifier leur confidentialité d'abord ; chaque transfert ultérieur coûte des frais et expose la relation entre ses entrées et sorties |
| Réception directe des sorties CoinJoin dans le portefeuille matériel | Un portefeuille logiciel admissible signe CoinJoin ; ses sorties vont au portefeuille matériel chargé | Évite un transfert séparé, mais les sorties quittent la source après ce tour, sans garantie d'atteindre votre objectif |

<span id="prepare-both-wallets" data-ginger-heading="préparer-les-deux-portefeuilles" aria-hidden="true"></span>

## Préparer les deux portefeuilles

1. Utilisez une installation Ginger vérifiée. Créez et sauvegardez le portefeuille logiciel avec ses mots et sa phrase secrète d'origine. N'y conservez que le montant à traiter.
2. Initialisez et sauvegardez le portefeuille matériel selon la procédure prise en charge par son fabricant. [Connectez-le à Ginger](/fr/using-ginger/hardware-wallet/) et laissez-le se synchroniser.
3. Dans le portefeuille matériel, choisissez **Receive** et utilisez **Show on the hardware wallet** si disponible. Comparez l'adresse entière sur l'appareil et l'ordinateur. Effectuez un petit test de réception et de signature avant de confier un montant plus élevé à une nouvelle configuration.
4. Donnez des noms distincts aux portefeuilles pour reconnaître source et destination. Gardez une sauvegarde récupérable pour chacun ; sauvegarder le logiciel ne récupère pas un portefeuille matériel utilisant d'autres clés.

Ne saisissez jamais les mots du portefeuille matériel dans Ginger pour faire fonctionner CoinJoin. Cela donnerait à l'ordinateur accès à ses clés de signature.

<span id="withdraw-from-the-exchange" data-ginger-heading="retirer-depuis-la-plateforme" aria-hidden="true"></span>

## Retirer depuis la plateforme

Dans le portefeuille logiciel, choisissez **Receive**, ajoutez une étiquette utile et créez une nouvelle adresse. Copiez-la dans le retrait Bitcoin de la plateforme et vérifiez adresse complète et réseau avant d'y autoriser le retrait. Ginger utilise Bitcoin on-chain ; une facture Lightning ou le réseau d'un autre actif n'est pas interchangeable.

Notez séparément les frais de retrait. Le montant reçu dans Ginger peut être inférieur au montant débité par la plateforme. Attendez la synchronisation et la confirmation des fonds avant de les attendre dans CoinJoin. Un identifiant de transaction aide à rapprocher les montants, mais évitez de le publier ou de le rechercher répétitivement dans des explorateurs publics.

<span id="route-a-review-coinjoin-results-then-transfer" data-ginger-heading="parcours-a--examiner-coinjoin-puis-transférer" aria-hidden="true"></span>

## Parcours A : examiner CoinJoin, puis transférer

1. Dans **Coinjoin Settings** de la source, laissez **Coinjoin to this wallet** sur la source. Examinez objectif, préférences de frais et coins exclus avant de démarrer par la commande lecture.
2. Surveillez les tours terminés et les informations de confidentialité. Vous pouvez mettre en pause pour examiner frais et progression. Dans une phase critique, laissez Ginger finir le travail requis au lieu de terminer l'application.
3. Obtenez une nouvelle adresse matérielle et vérifiez-la sur l'appareil. Dans le logiciel, choisissez **Send** → **Manual Control** et les fonds à déplacer.
4. Vérifiez entrées réellement sélectionnées, destination, montant reçu, monnaie rendue et frais. Confirmez uniquement si tout correspond à votre intention.
5. Vérifiez l'historique synchronisé du matériel et les coins restants de la source. Attendez la confirmation avant de considérer le transfert terminé.

Envoyer toutes les sorties ensemble crée un lien visible entre elles. Déplacer les coins individuellement évite ce lien particulier à plusieurs entrées, mais coûte davantage de frais et révèle toujours une transaction par transfert. Montants, horaires et informations détenues par un observateur peuvent fournir d'autres liens. Choisissez un plan réalisable ; aucune des deux approches ne garantit l'anonymat.

<span id="route-b-choose-hardware-as-the-coinjoin-destination" data-ginger-heading="parcours-b--choisir-le-matériel-comme-destination-coinjoin" aria-hidden="true"></span>

## Parcours B : choisir le matériel comme destination CoinJoin

Utilisez ce parcours tant que le logiciel contient encore des fonds admissibles. Le parcours normal v2.0.26 rejette la participation si le portefeuille ou tous les candidats disponibles sont déjà privés selon son objectif. Une autre destination ne contourne pas cette vérification. En particulier, exclure tous les coins non privés n'est pas un moyen fiable de forcer un tour supplémentaire contenant uniquement des coins déjà traités. Utilisez le parcours A pour ces fonds au lieu de changer l'objectif pour contourner l'arrêt.

1. Chargez et vérifiez le portefeuille matériel dans Ginger. Arrêtez la participation de la source et attendez la disponibilité du sélecteur de destination.
2. Ouvrez **Coinjoin Settings** de la source. Réglez **Coinjoin to this wallet** sur le matériel voulu. Ne choisissez qu'une destination proposée par Ginger.
3. Examinez **Exclude Coins** pour les fonds qui doivent rester hors CoinJoin. L'exclusion vise des coins précis et ne réserve pas toute réception future de la même source.
4. Revérifiez la destination et démarrez. Gardez l'application active pendant le tour.
5. Après un tour réussi, examinez les deux portefeuilles. Seules les entrées sélectionnées ont été dépensées et les sorties peuvent être réparties sur plusieurs coins. Un solde restant à la source n'est pas nécessairement un échec.

La destination reçoit les sorties du tour terminé ; ce réglage n'attend pas un événement distinct d'atteinte de l'objectif avant de les transmettre. Examinez leur confidentialité résultante. Les fonds détenus par le matériel ne peuvent pas ensuite fournir d'entrées CoinJoin via le parcours matériel normal de cette version.

La sélection de destination est réinitialisée au redémarrage. Vérifiez-la à chaque session. Vous ne pouvez pas la modifier pendant la participation, et la modifier après signature ne redirige pas une transaction. Vérifiez explicitement les réglages automatiques au lieu de supposer un transfert permanent en arrière-plan.

<span id="reconcile-balances-and-plan-the-next-spend" data-ginger-heading="rapprocher-les-soldes-et-préparer-la-dépense-suivante" aria-hidden="true"></span>

## Rapprocher les soldes et préparer la dépense suivante

Comparez la diminution de la source aux sorties reçues dans le matériel et aux fonds restants. La différence peut inclure les coûts CoinJoin. Un solde source nul ne signifie pas une perte si la destination prévue les a reçus. Inversement, un tour réussi ne signifie pas que tous les coins ont été déplacés ou ont atteint l'objectif.

Lors d'une dépense ultérieure depuis le matériel, vérifiez à nouveau la sélection. Combiner des coins sans rapport peut révéler des liens quel que soit le stockage des clés. Utilisez une nouvelle adresse destinataire, examinez la monnaie rendue et confirmez sur l'appareil. Le [parcours PSBT](/fr/hardware-wallets/psbt/) permet une signature par fichier sur du matériel adapté ; il ne change pas les conséquences de confidentialité de la transaction signée.

Si vous soupçonnez les clés déjà compromises, protéger les fonds restants prime sur l'attente d'un parcours de confidentialité. Un nouvel appareil contenant la même seed exposée ne révoque pas celle-ci.
