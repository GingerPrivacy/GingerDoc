---
doc_id: "backup-recovery.backup-files"
title: "File del portafoglio, metadati e dettagli della passphrase"
description: "Conserva i file JSON e ATTR del portafoglio Ginger, comprendi la dipendenza del file dalla 2FA e mantieni una passphrase recuperabile senza sostituire il backup di base delle parole."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Conserva le informazioni di ripristino originali e i file del portafoglio prima di modificare la configurazione del ripristino o dei file.

Usa questo riferimento quando copi i dati locali del portafoglio o esamini cosa conserva un backup. Inizia dalla [guida di base al backup](/it/backup-recovery/backups/) per le informazioni di ripristino necessarie a ogni portafoglio software.

<span id="what-to-keep" data-ginger-heading="cosa-conservare" aria-hidden="true"></span>

## Cosa conservare

| Elemento del backup | Scopo | Limite importante |
| --- | --- | --- |
| Parole di recupero, in ordine | Ricreare le chiavi del portafoglio | Serve la passphrase originale quando ne è stata usata una |
| Passphrase originale, comprese maiuscole e caratteri | Selezionare il portafoglio BIP39 corretto e sbloccare il suo segreto protetto | Ginger non può reimpostarla |
| File `.json` del portafoglio | Conservare le informazioni memorizzate sulle chiavi e sulla sincronizzazione | Un file cifrato richiede comunque le sue credenziali; la 2FA può aggiungere una dipendenza da un servizio |
| File `.attr` corrispondente | Conservare le etichette locali e gli attributi specifici del portafoglio | Contiene metadati sensibili; le parole di recupero non lo ripristinano |
| Backup per il ripristino del dispositivo hardware | Recuperare le chiavi usando la procedura del produttore hardware | Mantenerlo fuori dal computer desktop |

La cartella dei backup automatici locali si trova sullo stesso computer. Può aiutare dopo il danneggiamento di un file del portafoglio, ma non protegge dalla perdita dell'intero disco, da un furto o da ransomware.

<span id="make-a-file-backup" data-ginger-heading="crea-un-backup-dei-file" aria-hidden="true"></span>

## Crea un backup dei file

Usa la ricerca di Ginger per aprire **Data Folder**. Annota il percorso, poi chiudi Ginger normalmente prima di copiare i file. In una normale cartella dati mainnet, `Wallets` contiene i file `.json` dei portafogli e i file `.attr` associati, mentre `WalletBackups` contiene i backup automatici dei portafogli. Le altre reti usano sottocartelle separate.

Copia i file pertinenti su un supporto di backup protetto, mantenendo i nomi e l'associazione tra ogni file JSON e ATTR. Una copia della cartella dati è sensibile per la privacy anche se hai impostato una passphrase: indirizzi, etichette, log, configurazione e metadati degli ordini possono rivelare attività. Non caricarla in un sistema di segnalazione dei problemi e non inviarla per email all'assistenza.

Con la 2FA attiva, conserva anche `2fa_info.gws`, ma non considerarlo una chiave di ripristino indipendente. Registra un identificatore usato con il servizio 2FA di Ginger. Le parole di recupero e la passphrase originale restano il percorso che non dipende dalla decifratura di quello specifico file locale del portafoglio.

<span id="choose-and-preserve-a-passphrase" data-ginger-heading="scegli-e-conserva-una-passphrase" aria-hidden="true"></span>

## Scegli e conserva una passphrase

Usa una passphrase difficile da indovinare per un'altra persona e che tu possa riprodurre esattamente. Parole scelte casualmente da un elenco definito o una password robusta generata da un gestore di password affidabile possono evitare la prevedibilità di nomi, date, citazioni e frasi ordinarie. Le sostituzioni scelte da una persona per sembrare casuali sono spesso meno imprevedibili di quanto appaiano.

L'entropia descrive l'imprevedibilità in uno specifico processo di generazione; la sola lunghezza non la determina. Sei parole scelte uniformemente da un elenco ampio e sei parole selezionate da un testo di canzone preferito non hanno la stessa resistenza ai tentativi di indovinare. Questo manuale non promette che un determinato numero di caratteri sconfigga ogni attacco.

Annota accuratamente il risultato generato e conferma che il piano di ripristino lo conservi. Evita spazi iniziali o finali: la convalida dell'inserimento di Ginger può rimuoverli o rifiutarli. Un gestore di password può aiutare a conservare una passphrase robusta, ma pianifica come accedere a quel gestore dopo aver perso lo stesso computer. Conservare insieme parole e passphrase crea un unico punto di compromissione; separarle crea un'ulteriore dipendenza per il ripristino. Scegli un'organizzazione che tu possa davvero mantenere.

Per un portafoglio software Ginger, la passphrase protegge anche il segreto cifrato memorizzato. Per questo non va dato per scontato che chi ruba un file o tenta un ripristino possa riuscirci senza passphrase. Non cambiare con leggerezza la passphrase in un'altra applicazione: una passphrase BIP39 diversa seleziona chiavi diverse, anziché limitarsi a rinominare la password di accesso del vecchio portafoglio.

Per la compatibilità degli account, l'importazione di file o una scansione che non ha trovato alcuni indirizzi, usa le [opzioni avanzate di ripristino](/it/backup-recovery/recovery-options/).

<span id="a-single-private-key-is-not-the-full-recovery-backup" data-ginger-heading="una-singola-chiave-privata-non-è-il-backup-completo-per-il-ripristino" aria-hidden="true"></span>

## Una singola chiave privata non è il backup completo per il ripristino

Una moneta fisica precaricata il cui produttore ha generato la chiave richiede fiducia nel fatto che il produttore non l'abbia conservata. Una singola chiave privata stampata o un segreto del produttore non costituiscono il backup completo delle parole di recupero di Ginger. Conserva le parole e la passphrase originale del portafoglio software anziché presumere che una chiave esportata copra tutti i suoi indirizzi.
