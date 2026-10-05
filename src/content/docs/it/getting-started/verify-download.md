---
doc_id: "getting-started.verify-download"
title: "Verifica un download di Ginger Wallet"
description: "Controlla la firma di una versione di Ginger Wallet e l'impronta della chiave di firma prima di installare l'applicazione."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
sidebar:
  label: Verifica un download
  badge:
    text: Avanzato
    variant: caution
prev: false
next: false
---

> Livello della guida: Avanzato. Usa la [guida all'installazione](/it/getting-started/install/) per identificare il download ufficiale e il pacchetto per il tuo computer.

Una firma separata aiuta a stabilire che il file scaricato sia stato firmato dal titolare di una determinata chiave di firma e non sia cambiato da allora. Non dimostra che il software sia privo di errori. Devi anche accertare che la chiave di firma sia quella di cui intendevi fidarti.

<span id="collect-the-matching-files" data-ginger-heading="raccogli-i-file-corrispondenti" aria-hidden="true"></span>

## Raccogli i file corrispondenti

Dalla [versione v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), scarica il programma di installazione o l'archivio e il file con lo stesso nome seguito da `.asc`. Conservali nella stessa cartella. Per esempio, la coppia Windows è `Ginger-2.0.26.msi` e `Ginger-2.0.26.msi.asc`. Una firma per un DMG, uno ZIP o un'altra versione non verifica quell'MSI.

Ottieni la chiave pubblica di firma dal collegamento PGP sul [sito ufficiale](https://gingerwallet.io/). Salva la chiave come `PGP.txt`. Usa un'applicazione OpenPGP affidabile, come GnuPG, per esaminarla e importarla. Se GnuPG non è installato, ottienilo dalla [pagina ufficiale di download di GnuPG](https://gnupg.org/download/).

<span id="check-the-fingerprint" data-ginger-heading="controlla-limpronta" aria-hidden="true"></span>

## Controlla l'impronta

L'impronta pubblicata da Ginger per questa versione è:

```text
FA0B 017A 3E75 CE65 CBF7 838F A8FF 3767 EDF5 DCE9
```

In un terminale aperto nella cartella del download, esamina la chiave prima di importarla:

```sh
gpg --show-keys --with-fingerprint PGP.txt
gpg --import PGP.txt
```

Confronta l'intera impronta, non solo un ID breve della chiave o il nome visualizzato. Se possibile, confermala attraverso una copia già considerata affidabile o un altro canale consolidato di Ginger. Ottenere chiave e firma dalla stessa fonte compromessa non stabilirebbe, da solo, l'autenticità. Se Ginger annuncia un cambio di chiave, verifica quell'annuncio prima di fidarti della nuova impronta.

<span id="verify-the-actual-download" data-ginger-heading="verifica-il-download-effettivo" aria-hidden="true"></span>

## Verifica il download effettivo

Per il programma di installazione Windows, esegui:

```sh
gpg --verify Ginger-2.0.26.msi.asc Ginger-2.0.26.msi
```

Per un'altra piattaforma, sostituisci entrambi i nomi esatti dei file. Una verifica riuscita dovrebbe indicare una firma valida della chiave prevista. GnuPG può anche avvisare che la chiave non è certificata da una firma affidabile: riguarda il modo in cui hai autenticato la chiave e non va confuso con una firma del file non valida.

Se il risultato indica **BAD signature**, la chiave manca, l'impronta differisce o la verifica non può terminare, non aprire ancora il download. Controlla la coppia di nomi, ripeti il download e chiedi aiuto attraverso i collegamenti ufficiali del progetto se il problema persiste. Non contrassegnare una chiave sconosciuta come affidabile solo per eliminare un avviso.

<span id="checksums-and-platform-signatures" data-ginger-heading="checksum-e-firme-della-piattaforma" aria-hidden="true"></span>

## Checksum e firme della piattaforma

Un confronto dei checksum può rilevare un errore di download. Un checksum preso da una pagina non affidabile non può autenticare il software, perché un aggressore può sostituire sia il download sia il suo checksum. La versione fornisce anche materiale relativo ai checksum; la procedura con firma separata descritta sopra è sufficiente per verificare un singolo pacchetto scelto.

La firma del codice su Windows e la firma o autenticazione notarile su macOS forniscono ulteriori controlli della piattaforma. Completano la verifica della versione scaricata; non sostituiscono la necessità di proteggere le parole di recupero e controllare le transazioni.

Dopo una verifica riuscita, torna a [Installa l'applicazione](/it/getting-started/install/#install-the-application).
