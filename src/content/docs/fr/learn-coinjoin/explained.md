---
doc_id: "learn-coinjoin.explained"
title: "Qu'est-ce que CoinJoin ? Une explication simple"
description: "Comprendre simplement comment une transaction Bitcoin commune peut aider la confidentialité, ce qu'elle coûte et ce qu'elle ne peut pas cacher."
lang: fr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Niveau de lecture : commencez ici. Les étapes essentielles viennent d'abord ; les références avancées sont facultatives.

CoinJoin réunit l'activité Bitcoin de plusieurs personnes dans une transaction commune. Cela peut compliquer, pour un lecteur de l'historique public, l'identification du propriétaire de chaque coin résultant.

Imaginez plusieurs personnes versant dans une transaction commune et recevant de nouveaux morceaux de bitcoin. Le public voit les montants déplacés. Ce qui devient moins clair est quel argent est devenu quel morceau. Ce n'est qu'une illustration : les vrais tours ont des montants différents et des détails plus complexes.

<span id="do-i-hand-my-bitcoin-to-someone-else" data-ginger-heading="est-ce-que-je-confie-mon-bitcoin-à-quelquun-" aria-hidden="true"></span>

## Est-ce que je confie mon bitcoin à quelqu'un ?

Le portefeuille Ginger conserve les informations servant à approuver les dépenses et vérifie la proposition avant de signer. Vous ne déposez pas d'abord dans un solde contrôlé par un service de mixage.

Il faut toujours une installation fiable, un ordinateur protégé et une sauvegarde récupérable. Le service organisant le tour doit aussi être disponible. Garder le contrôle des clés ne fait pas disparaître les autres problèmes.

<span id="why-might-i-use-it" data-ginger-heading="pourquoi-lutiliser-" aria-hidden="true"></span>

## Pourquoi l'utiliser ?

Vous pouvez souhaiter que votre destinataire en sache moins sur vos autres paiements, ou que vos dépenses futures soient moins directement liées à une adresse publiée auparavant.

CoinJoin peut aider sur ces liens. Il ne supprime pas le registre de retrait d'une plateforme et ne fait pas oublier à un marchand qui a commandé. La blockchain reste publique et un paiement ultérieur peut révéler un nouveau lien.

<span id="what-will-it-cost" data-ginger-heading="combien-cela-coûte-t-il-" aria-hidden="true"></span>

## Combien cela coûte-t-il ?

Un tour réussi paie des frais de minage Bitcoin et peut aussi facturer des frais de coordinateur. Une exonération du coordinateur ne supprime pas les coûts de minage. Plusieurs tours peuvent entraîner plusieurs coûts.

Il n'y a pas de délai fixe. Ginger peut attendre confirmations, frais acceptables ou autres participants. Lisez l'état et examinez le résultat avant de laisser des participations répétées sans surveillance.

<span id="do-i-need-it-before-my-first-payment" data-ginger-heading="en-ai-je-besoin-avant-mon-premier-paiement-" aria-hidden="true"></span>

## En ai-je besoin avant mon premier paiement ?

Non. Réception, envoi et CoinJoin sont distincts. Vous pouvez apprendre les paiements ordinaires puis décider quel problème de confidentialité résoudre.

Pour cette décision, lisez [quand CoinJoin est utile](/fr/learn-coinjoin/when-to-use/). Lecture avancée facultative : [confiance et limites](/fr/learn-coinjoin/trust-and-limits/), dont ce que différents observateurs peuvent apprendre. Il n'est pas nécessaire d'étudier le protocole pour utiliser démarrage et pause ordinaires.
