---
title: "Ginger Wallet et Wasabi Wallet : configuration, frais et compromis"
description: "Comparer la configuration des coordinateurs, les coûts CoinJoin, les parcours des portefeuilles matériels et les limites de confidentialité pour choisir selon vos besoins."
doc_id: "compare.ginger-vs-wasabi"
lang: fr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet et Wasabi Wallet sont des portefeuilles Bitcoin open source pour ordinateur qui vous permettent de détenir vos propres clés et d'utiliser CoinJoin. Pour une personne qui commence à utiliser CoinJoin, les principales différences pratiques concernent la configuration du coordinateur et ses frais.

**Ginger fournit une connexion à son coordinateur déjà configurée. Wasabi vous demande de configurer un coordinateur avant de démarrer CoinJoin.** Le coordinateur de Ginger facture normalement 0.3 % sur les entrées admissibles supérieures à 0.03 BTC, avec les exonérations décrites ci-dessous. La version actuelle de Wasabi n'accepte que les tours sans frais de coordinateur. Les deux entraînent des coûts de minage.

Dernière vérification : **7 septembre 2026**. Versions étudiées : [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) et [Wasabi v2.8.2](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.8.2). Cette comparaison porte sur les parcours documentés, pas sur des mesures de vitesse, de fiabilité ou d'anonymat.

<span id="at-a-glance" aria-hidden="true"></span>

## En un coup d'œil

| Question | Ginger Wallet | Wasabi Wallet |
| --- | --- | --- |
| Qui contrôle les clés de signature ? | Vous ; le coordinateur ne détient pas pour vous un solde dans un portefeuille custodial. | Vous ; le parcours CoinJoin conserve la garde de vos clés. |
| Que dois-je configurer pour CoinJoin ? | La connexion au coordinateur est incluse ; examinez les paramètres du portefeuille avant de commencer. | Choisissez et configurez un coordinateur compatible, puis examinez les paramètres du portefeuille. |
| Y a-t-il des frais de coordinateur ? | Normalement 0.3 % de la valeur entière de chaque entrée facturable ; les entrées de 0.03 BTC ou moins et les remix admissibles sont exonérés. | Le client actuel accepte les tours sans frais de coordinateur. |
| Peut-il rester d'autres coûts ? | Oui : des frais de minage et éventuellement de petits restes non retournés. | Oui : des frais de minage et éventuellement de petits restes non retournés. |
| Les clés détenues sur matériel peuvent-elles signer les entrées CoinJoin ? | Pas dans le parcours matériel ordinaire de cette version. | Pas dans le parcours matériel actuel. |
| Les sorties CoinJoin peuvent-elles aller vers le matériel ? | Oui, via un portefeuille matériel pris en charge et chargé comme destination de sortie. | Oui, via CoinJoin-to-wallet avec un portefeuille compatible chargé. |

Les sections suivantes expliquent les conditions de ces différences et renvoient à la documentation correspondante.

<span id="coordinator-setup-one-less-decision-with-ginger" aria-hidden="true"></span>

## Configuration du coordinateur : une décision en moins avec Ginger

Un coordinateur organise un tour CoinJoin entre les portefeuilles participants. C'est un service distinct de l'application de portefeuille, qui n'a pas besoin de vos mots de récupération ni de vos clés privées.

La [configuration publiée de Ginger](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) fournit une connexion au coordinateur. Après avoir créé et sauvegardé un portefeuille logiciel, vous pouvez examiner les paramètres CoinJoin et commencer sans rechercher d'abord une adresse de coordinateur. Consultez [utiliser CoinJoin dans Ginger](/fr/using-ginger/coinjoin/).

Le [guide CoinJoin de Wasabi](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html) exige un coordinateur configuré avant la participation. Il permet le démarrage manuel et la participation automatique facultative. Choisir un coordinateur implique aussi d'examiner la disponibilité et les politiques de cet opérateur.

L'avantage pratique de Ginger est ici un parcours de configuration plus court. Une connexion fournie ne garantit pas un tour immédiat : il faut toujours des fonds confirmés, des frais acceptables, un service disponible et assez d'entrées participantes.

<span id="privacy-with-future-use-in-mind" aria-hidden="true"></span>

## La confidentialité en tenant compte des usages futurs

Vous pouvez vouloir améliorer aujourd'hui votre confidentialité Bitcoin et utiliser plus tard une plateforme d'échange. Dans un CoinJoin, vos coins partagent une transaction avec les entrées d'autres participants. Ces liens peuvent compter lorsqu'un service custodial examine votre dépôt.

Le coordinateur de Ginger contrôle les entrées participantes et exclut celles qui échouent à ses vérifications de risque. L'objectif est de limiter l'exposition aux entrées signalées d'autres participants, une source possible d'examen supplémentaire lorsque vous utiliserez ensuite votre bitcoin.

Avec Wasabi, l'application de contrôles comparables dépend du coordinateur choisi. Chaque service destinataire prend toujours ses propres décisions d'acceptation.

<span id="fees-compare-the-complete-cost" aria-hidden="true"></span>

## Frais : comparer le coût complet

<span id="gingers-coordinator-fee" aria-hidden="true"></span>

### Les frais de coordinateur de Ginger

Le seuil d'exonération est **par entrée**, aussi appelée coin ou UTXO. Ce n'est pas une limite sur le solde de votre portefeuille ni sur le montant total que vous enregistrez.

Avec les paramètres actuels du coordinateur :

- Une entrée de **0.03 BTC ou moins** ne paie pas de frais de coordinateur.
- Une entrée supérieure paie normalement **0.3 % de sa valeur entière**.
- Les remix admissibles peuvent aussi être exonérés, selon l'admissibilité de l'entrée et le tour proposé.

Pour une entrée sans autre exonération :

| Valeur de l'entrée | Frais de coordinateur | Frais de minage |
| --- | --- | --- |
| 0.03 BTC | 0 satoshi | Supplémentaires |
| 0.10 BTC | 0.0003 BTC, soit 30,000 satoshis | Supplémentaires |

Ces exemples expliquent le calcul ; ce ne sont pas des devis pour des tours futurs. Les règles complètes et d'autres exemples figurent dans [frais CoinJoin et progression de confidentialité](/fr/using-ginger/annonset/).

<span id="wasabis-coordinator-fee-policy" aria-hidden="true"></span>

### La politique de frais de coordinateur de Wasabi

Depuis la version 2.2.0.0, Wasabi n'accepte que les tours sans frais de coordinateur. Les frais de minage restent dus. Sa documentation décrit aussi de rares restes d'allocation de sorties pouvant atteindre 10,000 satoshis par CoinJoin, qui reviennent au coordinateur. Consultez [l'explication des frais de Wasabi](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html#fees).

<span id="budget-beyond-the-headline-percentage" aria-hidden="true"></span>

### Budgéter au-delà du pourcentage annoncé

Ginger peut aussi laisser un petit reste lors de l'allocation des montants des sorties. Pour chaque portefeuille, comparez la valeur de vos entrées participantes à **toutes les sorties que vous possédez** dans la transaction terminée, y compris celles reçues dans un autre portefeuille. Les tours répétés et les transferts ultérieurs peuvent ajouter des coûts.

Des frais de coordinateur nuls ne constituent qu'une composante de la comparaison. La taille des transactions, les taux de minage, l'allocation des sorties et le nombre de tours terminés influencent la dépense finale. Le [guide des coûts Ginger](/fr/using-ginger/annonset/) explique comment rapprocher ces montants.

<span id="hardware-wallets-signing-inputs-and-receiving-outputs-are-different" aria-hidden="true"></span>

## Matériel : signer les entrées et recevoir les sorties sont deux opérations différentes

Les deux applications prennent en charge des portefeuilles matériels pour la réception ordinaire et la signature de paiements. Leurs parcours CoinJoin documentés nécessitent un portefeuille logiciel pour signer les entrées participantes ; l'appareil matériel ne peut pas servir de source de signature. Consultez [le matériel dans Ginger](/fr/using-ginger/hardware-wallet/) et [le guide matériel de Wasabi](https://docs.wasabiwallet.io/using-wasabi/ColdWasabi.html).

Recevoir les coins résultants est une opération distincte. Les deux permettent de sélectionner un autre portefeuille compatible chargé comme destination des sorties CoinJoin, y compris un portefeuille matériel. Cela peut éviter un transfert séparé après le tour. Cela ne signifie **pas** que l'appareil a signé les entrées CoinJoin, ni que les sorties ont nécessairement atteint votre objectif de confidentialité avant d'y arriver.

Dans Ginger, vérifiez à nouveau la destination après un redémarrage, car la sélection est réinitialisée. Gardez des sauvegardes séparées pour la source logicielle et la destination matérielle. Ne saisissez jamais les mots de récupération du matériel dans l'application ordinateur pour activer CoinJoin.

Suivez [le guide de stockage à froid Ginger](/fr/hardware-wallets/exchange-to-cold-storage/) ou [l'explication CoinJoin-to-wallet de Wasabi](https://docs.wasabiwallet.io/FAQ/FAQ-UseWasabi.html#can-i-coinjoin-to-another-wallet) pour le parcours pris en charge et ses conditions.

<span id="privacy-and-service-policies" aria-hidden="true"></span>

## Confidentialité et politiques des services

La garde de vos propres clés répond à la question de qui peut autoriser la dépense. Elle ne résout pas toutes les questions de confidentialité ou de disponibilité. CoinJoin complique certains liens de propriété, mais les transactions restent publiques. Une plateforme conserve ses registres ; combinaisons ultérieures, réutilisation d'adresses ou divulgations à un destinataire peuvent créer de nouveaux liens. Le score de confidentialité ne garantit ni anonymat ni acceptation. Consultez [confiance et limites CoinJoin](/fr/learn-coinjoin/trust-and-limits/).

L'opérateur de Ginger, InvisibleBit LLC, publie des restrictions de service, notamment concernant les lieux et la nationalité américains. Ses conditions autorisent aussi des contrôles tiers et le refus de certaines entrées. Lisez [les conditions actuelles de Ginger](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt) avant utilisation. Avec Wasabi, examinez les politiques du coordinateur configuré ; la politique de frais du portefeuille n'établit pas les pratiques d'admission ou de traitement des données de cet opérateur.

<span id="which-fits-your-needs" aria-hidden="true"></span>

## Lequel correspond à vos besoins ?

**Envisagez Ginger si vous souhaitez une connexion au coordinateur fournie** et si sa structure de frais et ses politiques répondent à vos besoins. Commencez par [les premiers pas](/fr/getting-started/), établissez votre sauvegarde et examinez [les commandes CoinJoin](/fr/using-ginger/coinjoin/) avant de participer.

**Envisagez Wasabi si vous préférez choisir un coordinateur et exigez des tours sans frais de coordinateur.** Vérifiez l'opérateur et le coût complet des transactions avant de commencer.

Si vous voulez surtout recevoir, conserver et envoyer avec un portefeuille matériel, comparez d'abord les appareils compatibles et les parcours de paiement ordinaires. CoinJoin reste facultatif ; son utilité dépend des informations à protéger et de la manière dont vous dépenserez les coins résultants.
