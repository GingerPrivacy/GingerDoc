---
doc_id: "getting-started.install"
title: "Installa Ginger Wallet"
description: "Scegli il download desktop di Ginger Wallet adatto, controlla la compatibilità e installa l'applicazione pubblicata."
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Installa Ginger
prev:
  link: /getting-started/
  label: Inizia qui
next:
  link: /getting-started/first-wallet/
  label: Crea il tuo primo portafoglio
---

> Livello della guida: Per iniziare. I passaggi essenziali vengono prima; i riferimenti avanzati sono approfondimenti facoltativi.

Ginger Wallet è un portafoglio Bitcoin per computer. Tu possiedi le chiavi dei tuoi bitcoin e puoi usare CoinJoin per rendere più difficile tracciare le transazioni. Questa versione non offre un portafoglio mobile, un portafoglio Lightning o il supporto per altre criptovalute.

Questa guida riguarda la versione 2.0.26. Ottieni il software dal [sito ufficiale di Ginger](https://gingerwallet.io/) o dalla [versione su GitHub](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) a cui rimanda. Una pubblicità nei risultati di ricerca, un messaggio privato o un'app mobile dal nome simile non sono fonti affidabili per il download.

<span id="choose-a-download" data-ginger-heading="scegli-un-download" aria-hidden="true"></span>

## Scegli un download

| Computer | Sistema supportato per questa versione | Download |
| --- | --- | --- |
| PC Windows, x64 | Windows 10, versione 1607 o successiva; Windows 11, build 22000 o successiva | `Ginger-2.0.26.msi` |
| Mac con chip Apple | macOS 12 o successivo | `Ginger-2.0.26-arm64.dmg` |
| Mac con processore Intel | macOS 12 o successivo | `Ginger-2.0.26.dmg` |
| Ubuntu o Debian, x64 | Ubuntu 22.04 o successivo; Debian 11 o successivo | `Ginger-2.0.26.deb` |
| Altri sistemi Linux supportati, x64 | La versione elenca anche Fedora 37 o successivo | `Ginger-2.0.26.tar.gz` |

Su un Mac, **About This Mac** identifica il chip o il processore. La versione contiene anche archivi ZIP denominati `win-x64`, `linux-x64`, `macOS-x64` e `macOS-arm64`. Non ci sono pacchetti per Windows ARM o Linux ARM in questa versione. Non presumere che un archivio per un altro processore funzioni.

Ginger richiede una connessione internet e spazio di archiviazione scrivibile per il portafoglio e i dati di sincronizzazione. Il nodo completo facoltativo richiede molto più spazio su disco, larghezza di banda e tempo per la sincronizzazione iniziale rispetto all'uso ordinario del portafoglio. Per iniziare non servono un nodo completo, un'installazione separata di Tor o strumenti per sviluppatori.

<span id="install-the-application" data-ginger-heading="installa-lapplicazione" aria-hidden="true"></span>

## Installa l'applicazione

1. Scarica il pacchetto per il tuo sistema dalla versione ufficiale. Controlla la fonte, la versione e il nome del pacchetto e presta attenzione ai controlli delle firme e della sicurezza del sistema operativo. Per una verifica PGP indipendente, usa il file `.asc` corrispondente e la [guida avanzata alla verifica del download](/it/getting-started/verify-download/) separata prima di aprire il pacchetto.
2. Su Windows, apri il file `.msi` e segui il programma di installazione. Su macOS, apri il file `.dmg` e copia Ginger in Applicazioni. Su Ubuntu o Debian, apri il file `.deb` con il programma di installazione software del sistema. Per l'archivio Linux, estrai l'intero archivio e avvia l'applicazione inclusa; mantieni insieme i file che la accompagnano.
3. Apri Ginger. Attendi la prima connessione e sincronizzazione. Tor è incluso e normalmente si avvia con il portafoglio.
4. Prosegui con [Crea e apri un portafoglio](/it/getting-started/first-wallet/).

Un archivio ZIP o tar evita il normale programma di installazione, ma non rende il portafoglio usa e getta e non evita che lasci dati sul computer. I file del portafoglio sono memorizzati separatamente dall'applicazione. Crea backup prima di spostare o rimuovere gli uni o l'altra.

<span id="if-your-operating-system-displays-a-warning" data-ginger-heading="se-il-sistema-operativo-mostra-un-avviso" aria-hidden="true"></span>

## Se il sistema operativo mostra un avviso

Una nuova versione potrebbe non avere ancora una reputazione consolidata per il download. Un avviso può anche indicare un file danneggiato o non affidabile. Controlla prima la fonte del download, la versione corrispondente e la firma. Se la verifica fallisce, fermati e scarica di nuovo dalla versione ufficiale. Non disattivare l'antivirus o i controlli di sicurezza dell'intero sistema per superare un avviso non spiegato.

Per problemi di accesso ai dispositivi su Linux, consulta le istruzioni del produttore del portafoglio hardware sui permessi USB. Installare un portafoglio non richiede di eseguirlo permanentemente come amministratore.

<span id="updates-and-availability" data-ginger-heading="aggiornamenti-e-disponibilità" aria-hidden="true"></span>

## Aggiornamenti e disponibilità

L'[elenco delle versioni](https://github.com/GingerPrivacy/GingerWallet/releases) mostra le versioni pubblicate e le relative modifiche. In **Settings** → **General**, **Auto download new version** controlla il download degli aggiornamenti. Scaricare un aggiornamento è diverso da installarlo; segui la richiesta di aggiornamento e lascia che Ginger si chiuda normalmente. Tieni disponibile il backup per il ripristino prima di aggiornare. I file dell'applicazione possono essere sostituiti senza eliminare intenzionalmente i dati del portafoglio.

Leggi i termini di servizio attuali presentati da Ginger prima di accettarli, comprese eventuali restrizioni di ammissibilità. Installare l'applicazione non significa essere ammessi a usare ogni servizio collegato.
