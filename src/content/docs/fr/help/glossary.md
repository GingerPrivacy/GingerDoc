---
doc_id: "help.glossary"
title: "Glossaire Bitcoin et Ginger Wallet"
description: "Comprendre les termes de Ginger : UTXO, rendu, phrase secrète, CoinJoin, score d'anonymat, Tor, PSBT et autres."
lang: fr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Niveau de lecture : utilisation courante. Choisissez ce guide lorsque vous avez besoin de la tâche qu'il décrit.

<span id="amounts-and-transactions" aria-hidden="true"></span>

## Montants et transactions

| Terme | Signification pour l'utilisateur d'un portefeuille |
| --- | --- |
| Bitcoin /fr/ BTC | Le réseau et son unité monétaire. Un portefeuille gère clés et transactions plutôt que des pièces physiques. |
| Satoshi /fr/ sat | Un cent millionième de bitcoin : 100,000,000 sats = 1 BTC. |
| Adresse | Une destination de paiement dérivée des conditions de dépense. Utilisez-en une nouvelle à chaque réception. |
| UTXO /fr/ coin | Une sortie non dépensée disponible pour être dépensée comme entrée entière. |
| Entrée | Une référence à une sortie antérieure que l'on dépense. Plusieurs entrées peuvent financer une transaction. |
| Sortie | Une nouvelle destination et valeur créées par une transaction. |
| Monnaie rendue | La valeur retournée au portefeuille lorsque les entrées choisies dépassent le paiement et les frais. |
| Identifiant de transaction /fr/ txid | L'identifiant d'une transaction. Le partager révèle quelle transaction publique vous discutez. |
| Mempool | L'ensemble des transactions non confirmées d'un nœud. Différents nœuds peuvent avoir différentes vues. |
| Confirmation | L'inclusion dans un bloc, suivie de blocs supplémentaires construits au-dessus. |
| Taux de frais | Les satoshis payés par octet virtuel de taille transactionnelle ; ce n'est pas le total des frais. |
| vByte | L'unité de taille permettant de comparer les taux pour des transactions avec différentes données de témoin. |
| RBF | Replace-by-fee : une transaction en attente peut être remplacée selon la politique des nœuds, souvent pour augmenter ses frais. |
| CPFP | Child-pays-for-parent : dépenser une sortie dans une transaction enfant à frais élevés peut encourager aussi la confirmation de son parent non confirmé. |
| Poussière | Un montant trop petit pour être utile selon une politique ou hypothèse de coût donnée. Seuil du portefeuille et politique réseau ne sont pas nécessairement identiques. |

<span id="the-network-in-context" aria-hidden="true"></span>

## Le réseau en contexte

| Terme | Signification pour l'utilisateur d'un portefeuille |
| --- | --- |
| Bloc /fr/ blockchain | Un lot de transactions et la chaîne de blocs construite sur l'historique antérieur. |
| Mineur /fr/ preuve de travail | Un participant assemblant des blocs candidats et réalisant le travail utilisé par les règles Bitcoin de sélection de chaîne. |
| Transaction coinbase | La première transaction d'un bloc, créant sa récompense de minage autorisée ; sans rapport avec un compte sur une plateforme particulière. Ses sorties exigent une maturité avant dépense. |
| Règles de consensus | Les règles qu'un nœud validateur applique pour juger valides les blocs et transactions. |
| Difficulté | Une mesure régissant la preuve de travail nécessaire pour un bloc ; elle ne détermine pas votre solde. |
| Mainnet /fr/ RegTest | Respectivement le véritable réseau Bitcoin et un mode local de test séparé. Les coins ne se déplacent pas entre eux. |
| BIP | Une proposition d'amélioration Bitcoin documentant un standard ou processus proposé. Sa publication ne signifie pas que chaque portefeuille l'implémente. |
| Portefeuille HD | Un portefeuille déterministe hiérarchique dérivant de nombreuses clés depuis les secrets initiaux et des conventions. |
| Hash | Un identifiant compact calculé à partir de données. Le txid identifie des données, pas le nom d'un compte personnel. |
| Fongibilité | L'interchangeabilité pratique des unités ; des classements historiques tiers peuvent changer leur traitement même s'il s'agit de bitcoin valide. |

Lightning, canaux de paiement, construction multisignature, configuration testnet public/Signet et fonctionnement interne des scripts sortent des parcours utilisateur documentés de cette version. Leur présence dans un glossaire Bitcoin général ne démontre pas une fonction Ginger.

<span id="keys-and-recovery" aria-hidden="true"></span>

## Clés et récupération

| Terme | Signification pour l'utilisateur d'un portefeuille |
| --- | --- |
| Clé privée | Une information secrète autorisant les dépenses. Ne la partagez jamais avec l'assistance. |
| Clé publique | Une information vérifiant les signatures ; ce n'est pas un secret de dépense, mais elle peut rester sensible pour la confidentialité. |
| Mots de récupération /fr/ mnémonique /fr/ seed phrase | La sauvegarde ordonnée permettant de recréer les clés avec la bonne phrase secrète et les conventions du portefeuille. |
| Phrase secrète BIP39 | Un texte supplémentaire utilisé avec les mots pour dériver un portefeuille. Chaque phrase différente sélectionne d'autres clés. |
| PIN d'appareil | Un contrôle d'accès au matériel. Ce n'est pas la même chose qu'une phrase BIP39. |
| 2FA | Un second facteur d'authentification. Ginger utilise au démarrage un authentificateur et un chiffrement des fichiers locaux dépendant d'un service. |
| xpub /fr/ clé publique étendue | Une information dérivant de nombreuses adresses liées. Elle ne signe pas directement, mais peut exposer l'activité du portefeuille. |
| Chemin de dérivation /fr/ compte | Une convention identifiant une branche de clés. Les outils de récupération ont besoin de conventions compatibles. |
| Gap limit | La série d'adresses inutilisées tolérée par l'analyse avant d'arrêter la recherche sur une branche. |
| Portefeuille en lecture seule | Un enregistrement observant l'activité mais sans clés locales de signature. Un appareil matériel peut fournir la signature séparément. |
| Portefeuille matériel | Un appareil séparé conçu pour protéger les clés et approuver les transactions prises en charge. |
| PSBT | Un fichier de transaction Bitcoin partiellement signée contenant une proposition et les informations de signature. |
| SegWit /fr/ Taproot | Des formats de sorties et de dépenses Bitcoin. Sur mainnet, les adresses natives commencent souvent par `bc1q` et `bc1p`, respectivement. |

<span id="privacy-and-ginger" aria-hidden="true"></span>

## Confidentialité et Ginger

| Terme | Signification pour l'utilisateur d'un portefeuille |
| --- | --- |
| CoinJoin | Une transaction collaborative avec des entrées de plusieurs participants, destinée à compliquer les déductions de propriété. |
| WabiSabi | Le protocole à justificatifs utilisé pour coordonner CoinJoin dans Ginger. Il ne supprime pas la transaction de la blockchain. |
| Coordinateur | Un service organisant un tour. Il peut influencer disponibilité et admissibilité sans normalement détenir les clés privées des participants. |
| Remix | Une nouvelle participation CoinJoin utilisant des fonds répondant aux conditions du service ; des frais de minage peuvent rester dus. |
| Score d'anonymat | L'estimation locale de Ginger pour classer la confidentialité des coins, pas un recensement vérifié de personnes indépendantes. |
| Ensemble d'anonymat | Un groupe conceptuel d'alternatives plausibles. Il n'est pas automatiquement identique au score calculé du portefeuille. |
| Cluster | Des adresses ou coins qu'un observateur suppose associés. Certains liens sont des faits ; d'autres sont des heuristiques faillibles. |
| Réutilisation d'adresse | Recevoir plusieurs fois à la même adresse, liant directement ces réceptions. |
| Sélection des coins | L'examen et le choix délibérés des coins pour un paiement. |
| Tor | Un système de relais aidant à séparer les connexions d'une application de l'IP de l'utilisateur. |
| Filtre de bloc | Un résumé compact identifiant les blocs potentiellement pertinents avant leur traitement local. |
| Nœud complet | Un logiciel validant les données Bitcoin selon le consensus. Son rôle diffère de celui du coordinateur CoinJoin. |
| PayJoin | Un paiement collaboratif où le destinataire contribue une entrée. L'envoi Ginger publié comporte des limites de repli et de compatibilité. |
| Discreet Mode | Le masquage de champs d'affichage sensibles pris en charge, sans chiffrement ni verrouillage. |
| KYC | Le processus de vérification d'identité d'un prestataire. Tor ne cache pas les informations directement soumises. |
| Fiat | Une monnaie émise par un gouvernement, pour devis ou estimations ; distincte des BTC réglés on-chain. |

« Privé » et « sécurisé » décrivent différentes propriétés. Demandez ce qui est protégé, contre qui et sous quelles conditions plutôt que de traiter l'un ou l'autre comme une garantie inconditionnelle.
