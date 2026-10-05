---
doc_id: "coinjoin.round-details"
title: "Tours CoinJoin et admissibilité des pièces"
description: "Comprendre les phases CoinJoin de Ginger, l'admissibilité des pièces et les nouvelles tentatives lorsque les vérifications ordinaires de démarrage, pause et attente ne suffisent pas."
lang: fr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Niveau de lecture : guide avancé. Comprenez d'abord les commandes normales de démarrage et de pause, et le fait que les tours terminés coûtent des frais.

Commencez par [le guide CoinJoin courant](/fr/using-ginger/coinjoin/). Ginger gère automatiquement le protocole ; cette référence sert à comprendre un état ou une limite particulière.

<span id="why-a-balance-may-not-be-eligible" data-ginger-heading="pourquoi-un-solde-peut-ne-pas-être-admissible" aria-hidden="true"></span>

## Pourquoi un solde peut ne pas être admissible

Aucun délai fixe ni solde minimum universel ne garantit la participation. L'admissibilité dépend des paramètres du tour, des montants des pièces, des confirmations, des frais, des exclusions et des paramètres du portefeuille. Un solde peut dépasser la valeur minimale d'une entrée tout en ne contenant aucune pièce admissible économiquement.

<span id="what-happens-during-a-round" data-ginger-heading="ce-qui-se-passe-pendant-un-tour" aria-hidden="true"></span>

## Ce qui se passe pendant un tour

| Phase | Ce que votre portefeuille attend |
| --- | --- |
| Enregistrement des entrées | Des pièces admissibles sont proposées pour la transaction commune. |
| Confirmation de connexion | Les participants enregistrés confirment leur disponibilité. |
| Enregistrement des sorties | Les participants organisent, via le protocole, les sorties qu'ils doivent recevoir. |
| Signature | Les portefeuilles vérifient la proposition et signent leurs propres entrées. Gardez Ginger disponible pendant cette phase critique. |
| Tour de reprise (« blame round »), si nécessaire | Une nouvelle tentative exclut les participants qui n'ont pas achevé les étapes requises. |
| Diffusion | La transaction achevée est envoyée aux nœuds Bitcoin, puis attend une confirmation. |

L'application gère ces phases ; vous n'avez pas à échanger des clés ni à vous coordonner manuellement avec des inconnus. Le tour et la sélection des pièces déterminent le nombre d'entrées acceptées et de sorties produites. Il n'existe aucun nombre fixe d'entrées ou de sorties à attendre pour chaque portefeuille, et son solde total ne garantit pas qu'il puisse participer intégralement à un seul tour.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="pièces-privées-et-autre-portefeuille-de-sortie" aria-hidden="true"></span>

## Pièces privées et autre portefeuille de sortie

Le démarrage normal de la v2.0.26 refuse un portefeuille ou un ensemble de candidats disponibles dont les pièces satisfont déjà l'objectif de confidentialité. Choisir un autre portefeuille de sortie ne force pas un tour uniquement composé de pièces privées. Vérifiez [les paramètres du portefeuille de sortie](/fr/coinjoin/settings/) avant de compter sur un transfert automatique.

Pour les calculs de score et la réconciliation complète des montants, consultez [les frais et la progression de confidentialité](/fr/using-ginger/annonset/).
