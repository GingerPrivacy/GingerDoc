---
doc_id: "settings-network.secret-hunt"
title: "Secret Hunt dans Ginger Wallet"
description: "Consultez les résultats des événements Secret Hunt de Ginger, contrôlez la participation du portefeuille et comprenez les informations reçues par le service d'événements."
lang: "fr"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Niveau de lecture : usage quotidien. Choisissez ce guide lorsque vous avez besoin de la tâche qu'il décrit.

**Secret Hunt** est une fonction de Ginger qui affiche les secrets d'événements associés à une activité CoinJoin admissible. Elle est distincte du score de confidentialité du portefeuille et de la procédure ordinaire de réception ou de dépense de bitcoins. La disponibilité des événements dépend du service ; la présence de la fonction ne promet pas un événement en cours, un prix ou une récompense.

<span id="view-and-control-participation" data-ginger-heading="consulter-et-contrôler-la-participation" aria-hidden="true"></span>

## Consulter et contrôler la participation

Ouvrez le menu d'un portefeuille logiciel et choisissez **Secret Hunt**. Le dialogue présente les résultats d'événements sous forme d'arborescence, notamment les mots ou phrases découverts et un secret supplémentaire lorsque les secrets requis par l'événement ont été collectés. Développez un événement pour examiner ses entrées.

Utilisez **Enable/disable the use of this wallet for Secret Hunt.** pour contrôler la participation de ce portefeuille. Elle est activée par défaut dans la version publiée. La désactivation efface l'arborescence affichée pour la vue désactivée et empêche le mécanisme de mise à jour de sélectionner ce portefeuille pour les contrôles d'admissibilité aux événements. Elle n'annule pas CoinJoin, ne supprime pas les transactions de la blockchain et n'efface pas les informations déjà envoyées à un service.

Cette entrée n'est pas proposée pour les portefeuilles en lecture seule. Ce n'est pas une fonction de CoinJoin pour portefeuille matériel, et elle n'exige pas de saisir des mots de récupération sur un site d'événement.

<span id="what-is-shared" data-ginger-heading="informations-partagées" aria-hidden="true"></span>

## Informations partagées

Le client récupère les informations d'événements auprès du service de Ginger. Pour un contrôle d'admissibilité, il peut envoyer un identifiant de transaction CoinJoin, une référence d'entrée sélectionnée et une preuve cryptographique de propriété. Cette preuve démontre le contrôle pour la demande d'événement sans envoyer la clé privée. Ce sont des divulgations supplémentaires au niveau de l'application, même lorsque la connexion utilise Tor.

Tor répond à l'exposition au niveau du réseau ; il ne retire pas le contenu d'une demande de la vue de son destinataire. Si vous ne voulez pas qu'un portefeuille soit utilisé pour ces contrôles, désactivez sa participation à Secret Hunt. Les demandes de liste d'événements et l'activité réseau ordinaire du portefeuille sont distinctes de cette option propre à chaque portefeuille.

<span id="missing-or-incomplete-results" data-ginger-heading="résultats-absents-ou-incomplets" aria-hidden="true"></span>

## Résultats absents ou incomplets

Les résultats dépendent des dates de l'événement, de l'activité confirmée admissible, de la disponibilité du service et des mises à jour périodiques. Un tour peut se terminer avec succès sans révéler de nouveau secret. Attendre des résultats n'est pas une preuve de bitcoins manquants.

Ne générez pas de transactions supplémentaires payantes en supposant qu'une récompense compensera les frais. Lisez les conditions réelles d'un événement auprès d'une source authentifiée avant de décider de participer. Ignorez les demandes de téléversement d'un fichier de portefeuille ou d'envoi de « frais de réclamation » séparés vers une adresse de support non sollicitée.
