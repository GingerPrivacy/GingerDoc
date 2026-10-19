---
doc_id: "coinjoin.round-details"
title: "Tours CoinJoin et admissibilité des pièces"
description: "Comprendre les phases CoinJoin de Ginger, l'admissibilité des pièces et les nouvelles tentatives lorsque les vérifications ordinaires de démarrage, pause et attente ne suffisent pas."
lang: fr
verified_release: "v2.0.27"
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
| Tour de reprise (« blame round »), si nécessaire | Une nouvelle tentative utilise des participants admissibles de la transaction précédente et applique des contrôles de cohérence supplémentaires. |
| Diffusion | La transaction achevée est envoyée aux nœuds Bitcoin, puis attend une confirmation. |

L'application gère ces phases ; vous n'avez pas à échanger des clés ni à vous coordonner manuellement avec des inconnus. Le tour et la sélection des pièces déterminent le nombre d'entrées acceptées et de sorties produites. Il n'existe aucun nombre fixe d'entrées ou de sorties à attendre pour chaque portefeuille, et son solde total ne garantit pas qu'il puisse participer intégralement à un seul tour.

<span id="why-signing-can-stop-a-round" data-ginger-heading="pourquoi-la-signature-peut-arrêter-un-tour" aria-hidden="true"></span>

## Pourquoi la signature peut arrêter un tour

Avant d'achever la signature, Ginger vérifie la transaction réellement proposée, notamment les points suivants :

- Toutes les entrées enregistrées par ce portefeuille sont toujours présentes, sans qu'aucune soit dupliquée.
- La transaction contient suffisamment d'entrées et, sauf si la configuration autorise un CoinJoin en solo, comprend des entrées autres que celles enregistrées par ce portefeuille.
- Le taux effectif des frais de minage est suffisamment proche du taux annoncé pour le tour, en tenant compte des écarts d'estimation.
- Les sorties promises au portefeuille sont présentes avec au moins les montants attendus.

Les paramètres de participants ou de frais d'un tour proposé ne remplacent pas ces vérifications de la transaction elle-même. En particulier, un taux de frais trop inférieur au taux annoncé peut faire échouer les contrôles de signature, même si le montant prélevé sur votre portefeuille semblait acceptable. Le nombre d'entrées compte des pièces et ne prouve pas l'existence de personnes indépendantes ; consultez [la confiance et les limites de CoinJoin](/fr/learn-coinjoin/trust-and-limits/).

Si ces contrôles échouent, Ginger n'achève pas toutes les signatures de ses entrées. Lorsque certaines entrées enregistrées par le portefeuille restent dans la proposition, il retient la signature de l'une de ces entrées présentes. C'est essentiel, car retenir la signature d'une entrée omise n'arrêterait pas la transaction proposée. Si aucune entrée du portefeuille ne reste, il n'envoie aucune signature. Une proposition contenant une entrée enregistrée du portefeuille en double est rejetée immédiatement.

Un tour peut donc atteindre la phase de signature puis échouer ou faire l'objet d'une nouvelle tentative. Gardez Ginger disponible jusqu'à la sortie de la phase critique et examinez l'état obtenu avant toute autre action avec ces pièces. Ne modifiez pas des limites que vous ne comprenez pas simplement pour poursuivre un tour rejeté.

<span id="checks-on-blame-rounds" data-ginger-heading="contrôles-des-tours-de-reprise" aria-hidden="true"></span>

## Contrôles des tours de reprise

Lorsqu'un tour est perturbé, Ginger ne reprend que ses pièces pour lesquelles des signatures ont été transmises. Un tour de reprise doit utiliser des entrées de la transaction précédente et conserver le même montant d'entrée maximal suggéré. Ginger vérifie cette relation avant d'enregistrer les sorties, ainsi que la phase du tour de reprise, son nombre minimal d'entrées et ses limites de frais.

Ces contrôles limitent ce qui peut changer lors d'une nouvelle tentative. Ils ne garantissent pas l'achèvement d'un tour de reprise, ne déterminent pas qui contrôle les autres entrées et ne transforment pas un tour échoué en preuve d'attaque.

<span id="inspect-a-completed-round" data-ginger-heading="examiner-un-tour-achevé" aria-hidden="true"></span>

## Examiner un tour achevé

Développez une entrée CoinJoin regroupée dans l'historique et ouvrez les détails d'un tour individuel. Choisissez **View transaction** pour examiner ses entrées et sorties dans la fenêtre redimensionnable de visualisation des transactions. Elle indique l'appartenance, les étiquettes et les scores d'anonymat connus lorsqu'ils sont disponibles ; des valeurs inconnues ne permettent pas d'établir à qui appartiennent les pièces d'un autre participant. Consultez [le guide de visualisation des transactions](/fr/payments/coin-control-history/#inspect-inputs-and-outputs) pour connaître les détails et les actions de copie disponibles.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="pièces-privées-et-autre-portefeuille-de-sortie" aria-hidden="true"></span>

## Pièces privées et autre portefeuille de sortie

Le démarrage normal refuse un portefeuille ou un ensemble de candidats disponibles dont les pièces satisfont déjà l'objectif de confidentialité. Choisir un autre portefeuille de sortie ne force pas un tour uniquement composé de pièces privées. Vérifiez [les paramètres du portefeuille de sortie](/fr/coinjoin/settings/) avant de compter sur un transfert automatique.

Pour les calculs de score et la réconciliation complète des montants, consultez [les frais et la progression de confidentialité](/fr/using-ginger/annonset/).
