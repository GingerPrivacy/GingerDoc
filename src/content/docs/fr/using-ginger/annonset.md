---
doc_id: "coinjoin.fees-and-progress"
title: "Frais CoinJoin et progression de la confidentialité"
description: "Prévoir le coût total de CoinJoin, distinguer les exonérations de frais des transactions gratuites et interpréter les scores de confidentialité de Ginger à l'aide d'exemples détaillés."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Familiarisez-vous d'abord avec les commandes habituelles de démarrage et de pause, et avec le fait que les tours terminés entraînent des frais.

CoinJoin a un coût et un objectif de confidentialité. Examinez les deux avant de commencer : une exonération des frais de coordinateur ne rend pas un tour gratuit, et un indicateur de progression ne peut pas mesurer tout ce qu'une autre personne sait de vous.

<span id="coordinator-fee-versus-mining-fee" aria-hidden="true"></span>

## Frais de coordinateur et frais de minage

Avec les paramètres actuels des frais de coordinateur de Ginger, chaque entrée d'une valeur inférieure ou égale à 3,000,000 satoshis (0.03 BTC) ne paie pas de frais de coordinateur. Le seuil inclut exactement 0.03 BTC. Une entrée supérieure à ce seuil paie normalement 0.3% de sa valeur totale, et non uniquement de la partie supérieure à 0.03 BTC. Le taux sous forme décimale est 0.003, et les fractions de satoshi dans le montant calculé des frais sont arrondies à l'entier inférieur.

Le seuil est vérifié séparément pour chaque entrée, et non par rapport au solde total de votre portefeuille ou à la somme des entrées que vous inscrivez au tour. Les remix qui remplissent les conditions requises peuvent également être exonérés ; l'exonération annoncée par Ginger inclut la dépense directe de fonds issus de CoinJoin au moyen d'une seule transaction. Ces exonérations supplémentaires dépendent du tour proposé et de l'admissibilité de l'entrée. Consultez à nouveau les [explications actuelles de Ginger sur les frais](https://gingerwallet.io/) avant de participer.

Pour les entrées qui ne bénéficient d'aucune autre exonération des frais de coordinateur :

| Valeur de l'entrée | Valeur en BTC | Frais de coordinateur |
| --- | --- | --- |
| 2,999,999 satoshis | 0.02999999 BTC | 0 satoshis |
| 3,000,000 satoshis | 0.03 BTC | 0 satoshis |
| 3,000,001 satoshis | 0.03000001 BTC | 9,000 satoshis |
| 4,000,000 satoshis | 0.04 BTC | 12,000 satoshis |

Par exemple, l'entrée de 0.04 BTC paie 0.00012 BTC (12,000 satoshis), et non 0.3% des seuls 0.01 BTC au-dessus du seuil. Les frais de minage s'ajoutent à ce montant, y compris pour les entrées dont les frais de coordinateur sont nuls. Ces exemples expliquent le calcul configuré ; ils ne constituent pas un devis pour un tour futur.

Les frais de minage rémunèrent les mineurs pour l'espace occupé par la transaction. Ils dépendent du taux de frais ainsi que des entrées et des sorties de la transaction. La dépense d'un coin de faible valeur peut coûter un pourcentage important de sa valeur. Des participations répétées à CoinJoin peuvent chacune entraîner de nouveaux frais de minage, même lorsqu'elles bénéficient d'une exonération des frais de coordinateur.

Ne fractionnez pas des coins uniquement pour obtenir une exonération sans comprendre les transactions supplémentaires, les frais et les liens publics que cela crée.

<span id="account-for-the-complete-cost" aria-hidden="true"></span>

## Tenir compte du coût total

Le montant que vous dépensez peut comprendre davantage que le pourcentage de coordinateur annoncé. Un CoinJoin nécessite aussi de l'espace dans une transaction, et les montants de ses sorties peuvent laisser un petit reliquat après que le client a réparti la valeur disponible. Ce reliquat peut contribuer aux recettes du coordinateur ou aux frais de minage de la transaction ; il ne s'agit pas nécessairement d'un poste de frais distinct affiché dans le portefeuille.

Pour un CoinJoin terminé, comparez la valeur totale de vos entrées à la valeur totale de toutes les sorties de cette transaction qui vous appartiennent. Incluez les sorties envoyées à un autre portefeuille de destination. Ne soustrayez pas toutes les sorties de la transaction commune de vos seules entrées : certaines de ces sorties appartiennent aux autres participants.

L'exemple comptable suivant sert d'illustration ; il ne prédit pas les montants des sorties de Ginger et ne reproduit pas un écran de l'application :

| Poste | Satoshis |
| --- | ---: |
| Votre entrée soumise aux frais | 5,000,000 |
| Total de vos sorties dans vos deux portefeuilles | 4,980,800 |
| Différence de valeur | 19,200 |
| Frais de coordinateur supposés pour cet exemple : 0.3% de l'entrée | 15,000 |
| Frais de minage attribués à votre participation dans cet exemple | 3,600 |
| Différence de répartition restante dans cet exemple | 600 |

Ici, 15,000 + 3,600 + 600 = 19,200 satoshis. Les trois dernières lignes expliquent la même différence ; ne rajoutez pas cette différence comme s'il s'agissait de frais supplémentaires. Les frais de minage de l'ensemble du tour ne sont pas non plus des frais que chaque participant paie intégralement. Ne supposez pas qu'un champ de frais particulier ou une ligne de journal représente toutes les composantes de votre différence de valeur.

Si les sorties ont été envoyées à un portefeuille matériel, leur disparition du solde du portefeuille logiciel correspond à un transfert de valeur qui vous appartient toujours. Attendez que les deux portefeuilles soient synchronisés avant de faire le rapprochement. Des transactions non confirmées, des paiements simultanés et des fonds entrants peuvent rendre trompeuse une simple comparaison du solde du portefeuille avant et après.

<span id="budget-for-the-whole-journey" aria-hidden="true"></span>

## Prévoir le coût de l'ensemble du parcours

Incluez les étapes qui entourent CoinJoin lorsque vous décidez si le résultat justifie le coût :

| Étape | Coût à prendre en compte |
| --- | --- |
| Retirer des fonds d'une plateforme d'échange | Ses frais de retrait, qui peuvent différer des frais de minage de sa transaction |
| Participer à un ou plusieurs tours | La différence de valeur réelle pour chaque participation terminée |
| Déplacer les fonds vers un autre portefeuille | De nouveaux frais de minage si vous effectuez un transfert ordinaire |
| Dépenser ensuite les coins obtenus | Les frais liés aux entrées et aux sorties de ce paiement ultérieur |

Par exemple, une participation coûtant 19,200 satoshis suivie d'un transfert coûtant 1,200 satoshis revient à 20,400 satoshis pour ces deux étapes. Un paiement ultérieur constitue une dépense distincte. Un plus grand nombre de sorties peut vous donner de plus petites sommes à dépenser séparément, mais dépenser ces sommes consomme aussi de l'espace dans une transaction. Ce coût futur n'a pas déjà été payé lors de la création des sorties.

Choisissez un montant que vous pouvez vous permettre de consacrer à l'apprentissage et examinez le premier résultat terminé avant de laisser se poursuivre les tours répétés. Fixez-vous un budget personnel pour les frais ; une préférence de délai CoinJoin ou un paramètre de sélection des coins ne garantit pas un plafond pour le coût total de l'ensemble du parcours.

<span id="when-ginger-waits-or-refuses-a-round" aria-hidden="true"></span>

## Lorsque Ginger attend ou refuse un tour

Le client vérifie les conditions proposées avant de participer. Il peut afficher **Mining fee rate was too high**, **Coordination fee rate was too high**, **Min input count was too low** ou **Server did not give remix fee exemption**. Examinez les conditions proposées plutôt que d'augmenter les limites aveuglément.

Les préférences de frais peuvent également entraîner l'affichage de **Awaiting cheaper coinjoins**. Une préférence de délai signifie que le portefeuille attend des conditions relativement moins coûteuses ; ce n'est pas une réservation qui garantit la fin du processus en une journée ou une semaine. Un tour qui échoue avant la diffusion ne crée pas, à lui seul, une nouvelle transaction Bitcoin confirmée.

Dans cette version, le démarrage normal de CoinJoin refuse également un portefeuille dont les fonds atteignent déjà son objectif de confidentialité, ou une sélection contenant uniquement des coins qui atteignent cet objectif. Choisir un autre portefeuille de destination ne contourne pas cette vérification. Si le but est de déplacer des fonds déjà considérés comme privés, examinez la possibilité d'un transfert ordinaire plutôt que de vous attendre à ce que le choix de la destination impose un autre tour.

<span id="what-the-privacy-score-can-tell-you" aria-hidden="true"></span>

## Ce que le score de confidentialité peut vous indiquer

Ginger suit les informations de confidentialité des coins et les compare au score d'anonymat cible du portefeuille. Ce score est une estimation locale fondée sur les transactions connues du portefeuille. Il ne correspond ni à un nombre de personnes vérifiées indépendamment ni à la probabilité qu'un observateur puisse vous identifier.

La progression globale utilise un calcul des scores vers l'objectif, pondéré par les montants. La répartition colorée distincte du solde représente les montants dans différentes catégories de confidentialité. Il s'agit de mesures différentes.

Dans un exemple simplifié, supposons que l'objectif soit de 5 et que le portefeuille contienne uniquement ces deux coins :

| Coin | Valeur | Score local | Atteint l'objectif ? |
| --- | ---: | ---: | --- |
| A | 1,000,000 satoshis | 5 | Oui |
| B | 3,000,000 satoshis | 3 | Non |

Seuls 25% de la valeur atteignent l'objectif. Pour la progression globale, cette version pondère la progression au-dessus du score 1 : le coin A contribue à hauteur de 1,000,000 × 4 et le coin B à hauteur de 3,000,000 × 2, pour un maximum de 4,000,000 × 4. Cela donne 62.5%, affiché sous la forme du nombre entier 62%. Voir des pourcentages différents dans ces deux vues ne constitue donc pas, en soi, une erreur.

Le message **Hurray! All your funds are private!** signifie que le portefeuille considère les fonds comme privés selon son objectif actuel et sa méthode de calcul. Il ne signifie pas que l'historique a disparu, que vous êtes anonyme sur Internet ou qu'un paiement ultérieur ne peut pas créer de lien.

<span id="decide-when-you-have-achieved-your-objective" aria-hidden="true"></span>

## Décider quand vous avez atteint votre objectif

Abaisser un objectif peut modifier les coins qui remplissent les critères sans rien changer à ce qui est déjà publié sur la blockchain. Le relever peut nécessiter davantage de participations et de frais ; cela ne permet pas d'acheter un nombre garanti de personnes anonymes. Recevoir de nouveaux fonds, combiner des coins ou récupérer un portefeuille sans ses métadonnées locales peut également modifier le résultat affiché.

Déterminez à qui vous souhaitez limiter l'accès aux informations : une plateforme d'échange, un bénéficiaire particulier ou une personne qui suit une adresse divulguée. Ces acteurs peuvent connaître des montants, des horaires et des identités que Ginger ne peut pas voir. Évaluez le prochain paiement aussi bien que le score actuel.

Faites une pause pour examiner les tours terminés, rapprocher les mouvements de vos coins et réfléchir à la manière dont vous les dépenserez. Conservez les métadonnées locales lorsque vous changez d'installation si vous souhaitez garder davantage de ce contexte. Consultez les [paramètres CoinJoin](/fr/coinjoin/settings/) pour l'objectif, les préférences de frais et les réglages de destination.
