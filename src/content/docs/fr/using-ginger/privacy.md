---
doc_id: "learn-privacy.who-can-see"
title: "Qui peut voir mes transactions Bitcoin ?"
description: "Comprendre ce qu'une adresse révèle, comment identité et liens transactionnels se combinent et l'aide possible des outils Ginger."
lang: fr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Niveau de lecture : commencez ici. Les étapes essentielles viennent d'abord ; les références avancées sont facultatives.

Les transactions Bitcoin sont publiques, mais le nom du propriétaire n'est pas automatiquement écrit près de chaque adresse. La question pratique est qui peut relier une adresse ou transaction à vous, et quelles autres déductions ce lien permet.

Un client peut connaître l'adresse de facture fournie. Une plateforme peut connaître votre adresse de retrait et votre identité vérifiée. Un observateur d'une adresse de dons publique voit ses réceptions. Ces personnes partent d'informations différentes ; pensez à une divulgation contrôlée plutôt qu'à un seul interrupteur anonyme/non anonyme.

<span id="what-the-blockchain-reveals" data-ginger-heading="ce-que-révèle-la-blockchain" aria-hidden="true"></span>

## Ce que révèle la blockchain

Les transactions montrent entrées, sorties, valeurs et relations de dépense. Une sortie dépensée plus tard crée un lien public. Cela ne prouve pas automatiquement chaque propriétaire : paiement, transfert entre vos portefeuilles ou collaboration à plusieurs sont possibles. La [section confidentialité de l'article Bitcoin](https://bitcoin.org/bitcoin.pdf) discute la séparation des transactions publiques et des identités, ainsi que le problème des liens entre clés.

Une fois l'adresse associée à une personne, l'activité reliée peut être étudiée. Certains liens sont directs, comme les paiements répétés à une adresse. D'autres supposent propriété commune des entrées ou identification du rendu. Ces hypothèses peuvent être erronées mais influencer la classification par les services.

<span id="who-can-learn-what" data-ginger-heading="qui-peut-apprendre-quoi-" aria-hidden="true"></span>

## Qui peut apprendre quoi ?

| Observateur | Informations initiales possibles | Ce que vous contrôlez |
| --- | --- | --- |
| Payeur | Adresse fournie et son paiement | Donnez une adresse neuve à chaque réception |
| Destinataire | Transaction et informations de l'achat | Examinez les entrées et évitez de divulguer inutilement votre identité |
| Plateforme ou prestataire d'achat | Compte, détails de paiement, adresses de dépôt/retrait | Comprenez ses registres avant utilisation |
| Analyste de la blockchain publique | Transactions et étiquettes obtenues ailleurs | Évitez les liens faciles ; évaluez CoinJoin et les dépenses ultérieures |
| Service réseau contacté | Contenu des requêtes et parfois métadonnées de connexion | Gardez Tor si pris en charge et comprenez les divulgations de chaque fonction |
| Personne accédant à l'ordinateur ou sauvegardes | Fichiers, étiquettes, adresses, journaux et parfois clés | Protégez appareil, sauvegarde et métadonnées |

Aucun paramètre unique ne traite toutes les lignes. Un portefeuille matériel aide à protéger les clés sans cacher une adresse publique. Tor aide à protéger les métadonnées de connexion sans cacher ce que vous saisissez dans le formulaire d'un prestataire.

<span id="why-this-matters-in-ordinary-life" data-ginger-heading="pourquoi-cela-compte-dans-la-vie-courante" aria-hidden="true"></span>

## Pourquoi cela compte dans la vie courante

Si plusieurs clients sont facturés à une même adresse, chacun peut voir les réceptions à cette adresse, dont les paiements des autres. Une adresse neuve évite cet identifiant commun direct. Elle n'empêche pas automatiquement les liens ultérieurs si toutes les réceptions sont dépensées ensemble.

Payer depuis des fonds associés à une campagne publique de dons peut révéler plus de contexte que le seul montant. Conserver le contexte des coins par activité permet un choix informé avant dépense.

La confidentialité financière peut protéger les clients, les informations commerciales, les relations personnelles et la sécurité physique. Vouloir ces limites ne nécessite pas d'avoir mal agi. La question pertinente est de savoir si l'autre personne a besoin des informations pour terminer l'interaction.

<span id="privacy-and-fungibility" data-ginger-heading="confidentialité-et-fongibilité" aria-hidden="true"></span>

## Confidentialité et fongibilité

La fongibilité signifie échanger les unités selon des conditions équivalentes. Les règles Bitcoin comptabilisent les valeurs, mais les personnes et services peuvent classer différemment les sorties selon leurs historiques apparents. Ces jugements créent parfois des frictions même si une sortie est valide selon Bitcoin.

Les outils de confidentialité peuvent rendre certaines classifications historiques plus difficiles à établir avec certitude. Ils ne peuvent imposer l'acceptation ou effacer les registres déjà détenus. Prudence avec les « coins propres » ou l'acceptation garantie : estimation du portefeuille et politique du service sont deux choses distinctes.

<span id="where-ginger-fits" data-ginger-heading="la-place-de-ginger" aria-hidden="true"></span>

## La place de Ginger

Ginger propose réception à de nouvelles adresses, étiquettes locales, sélection des coins, Tor, synchronisation par filtres compacts et CoinJoin. Ces outils réduisent certaines divulgations et permettent l'examen avant autorisation. Il propose aussi des parcours matériels pour protéger les clés.

Commencez par une adresse neuve et la compréhension des coins existants. Si les liens transactionnels vous préoccupent, apprenez les possibilités et limites de CoinJoin avant d'activer les tours automatiques. Pour les choix courants, continuez avec [les habitudes avant et après paiement](/fr/using-ginger/address-reuse/).

L'objectif est une amélioration délibérée adaptée à votre situation. Ginger ne peut effacer les informations déjà collectées par une plateforme, promettre l'acceptation universelle ou empêcher une divulgation volontaire ultérieure de créer un lien.
