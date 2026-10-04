---
doc_id: "learn-privacy.habits"
title: "Habitudes de confidentialité Bitcoin avant et après un paiement"
description: "Adopter des habitudes pratiques concernant les adresses de réception, les étiquettes, la sélection des coins, les navigateurs et les demandes d'assistance lors de l'utilisation de Ginger Wallet."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Niveau de lecture : commencez ici. Les étapes essentielles sont présentées en premier ; les références avancées constituent un complément facultatif.

Il est plus facile de préserver les améliorations de confidentialité lorsqu'elles correspondent à votre utilisation réelle de Bitcoin. Avant de modifier un paramètre, déterminez quelles informations vous souhaitez divulguer moins largement et quelle personne ou quel service pourrait les voir.

<span id="before-receiving" data-ginger-heading="avant-de-recevoir" aria-hidden="true"></span>

## Avant de recevoir

Générez une nouvelle adresse pour le paiement concerné et utilisez une étiquette locale qui restera compréhensible plus tard. Évitez d'utiliser une seule adresse publique réutilisable pour des encaissements sans lien entre eux lorsque vous pouvez fournir des demandes de paiement individuelles. Vérifiez les adresses des portefeuilles matériels sur l'appareil.

Pensez aussi au canal de communication. Si vous envoyez une adresse de réception depuis un compte auquel vous vous êtes identifié, le destinataire peut associer cette adresse à vous, même si la blockchain elle-même ne comporte pas de champ pour un nom. Une nouvelle adresse réduit la réutilisation ; elle n'efface pas la conversation dans laquelle vous l'avez partagée.

<span id="before-sending" data-ginger-heading="avant-denvoyer" aria-hidden="true"></span>

## Avant d'envoyer

Examinez l'origine des coins disponibles. Combiner des paiements issus d'activités distinctes peut révéler que leurs entrées ont été dépensées ensemble. Dans Ginger, **Manual Control** peut vous aider à examiner et à choisir les coins, tandis que la sélection automatique et les suggestions de confidentialité peuvent vous aider pour les paiements ordinaires. Vérifiez toujours l'aperçu obtenu.

Demandez une nouvelle adresse de destination et confirmez le montant et l'adresse. Si une suggestion évite la monnaie rendue en modifiant le montant destiné au bénéficiaire, assurez-vous que celui-ci accepte réellement le montant révisé. Envoyer un paiement à la mauvaise personne ou payer une facture avec un montant insuffisant n'améliore pas la confidentialité.

<span id="after-coinjoin" data-ginger-heading="après-coinjoin" aria-hidden="true"></span>

## Après CoinJoin

Considérez les coins obtenus comme des fonds dont l'utilisation future reste importante. Regrouper toutes les sorties dans une seule transaction ultérieure peut créer une nouvelle association. Réutiliser une adresse associée à votre identité ou dépenser par l'intermédiaire d'un prestataire auquel vous vous êtes identifié crée des informations supplémentaires, quel que soit le score affiché par Ginger avant le paiement.

Un analyste peut également comparer les horaires et les montants entre les transactions. Aucun délai d'attente universel ne garantit la sécurité. Prévoyez la manière dont vous comptez dépenser les fonds plutôt que de vous attendre à ce qu'un seul tour ou un délai fixe résolve toutes les formes d'observation.

<span id="on-the-network-and-computer" data-ginger-heading="sur-le-réseau-et-lordinateur" aria-hidden="true"></span>

## Sur le réseau et l'ordinateur

Gardez Tor activé pour utiliser le réseau avec le niveau de confidentialité prévu par le portefeuille. Tor achemine les connexions à travers des relais afin de réduire l'exposition directe de votre adresse IP ; les [explications du projet Tor](https://support.torproject.org/about-tor/introduction/what-is-tor/) décrivent son rôle. Tor ne dissimule pas les informations que vous transmettez explicitement au service à l'autre bout de la connexion.

Vérifiez quel navigateur est utilisé pour ouvrir les liens vers les prestataires et les explorateurs. Votre navigateur habituel peut contenir des comptes connectés et des cookies qui permettent de vous identifier. La préférence de navigateur de Ginger et son propre réglage Tor sont distincts. Privilégiez l'historique local du portefeuille plutôt que de rechercher à répétition vos propres adresses sur des explorateurs publics.

Utilisez **Discreet Mode** pour les champs à l'écran pris en charge lorsque quelqu'un peut voir votre écran, et verrouillez le système d'exploitation lorsque vous vous éloignez. Protégez les supports de sauvegarde et les étiquettes locales. Un portefeuille en lecture seule peut révéler votre activité financière même sans exposer les clés de signature.

<span id="when-asking-for-help" data-ginger-heading="lorsque-vous-demandez-de-laide" aria-hidden="true"></span>

## Lorsque vous demandez de l'aide

Indiquez la version, le système d'exploitation, l'erreur et les étapes non secrètes permettant de reproduire le problème. Partagez uniquement le plus petit extrait de journal pertinent, après l'avoir examiné. Ne publiez pas de xpub, de dossier complet de données de portefeuille, de mots de récupération ou de code QR d'authentification. Transmettre vos secrets dans un canal public n'est pas sûr et ne permet pas à un bénévole de l'assistance de résoudre le problème d'une phrase secrète manquante.

<span id="choose-a-sustainable-routine" data-ginger-heading="choisir-une-routine-durable" aria-hidden="true"></span>

## Choisir une routine durable

Pour un paiement occasionnel, l'utilisation de nouvelles adresses, la vérification attentive des aperçus, la protection des sauvegardes et Tor peuvent être les premières améliorations à mettre en place. Si vous avez besoin de mieux protéger la confidentialité des liens entre transactions, évaluez les frais de CoinJoin, les conditions du service et la manière dont vous dépenserez les fonds après CoinJoin. Une routine compliquée que vous ne pouvez pas reprendre après une perte d'accès ou suivre de façon constante peut créer des risques différents de ceux que vous espériez réduire.

Pour les dons ou les versements échelonnés, consultez le guide courant des [paiements répétés](/fr/learn-privacy/repeated-payments/). Les guides avancés facultatifs traitent des [dépenses après CoinJoin](/fr/learn-privacy/spending-after-coinjoin/), de la [migration de portefeuille](/fr/learn-privacy/wallet-migration/) et des [destinations des informations du portefeuille](/fr/learn-privacy/information-sharing/). Choisissez-en un lorsque vous devez prendre la décision correspondante ; ces guides ne sont pas des étapes obligatoires pour votre premier paiement.
