---
doc_id: "backup-recovery.two-factor-authentication"
title: "Usa l'autenticazione a due fattori in Ginger"
description: "Configura l'autenticazione a due fattori di Ginger e comprendi la cifratura dei file del portafoglio, il requisito di Tor e i limiti del ripristino."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-the-default-2fa-state-of-gingerwallet"></span>
<span id="how-do-i-enable-2fa-in-gingerwallet"></span>
<span id="how-do-i-set-up-2fa-using-an-authenticator-app"></span>
<span id="what-is-the-purpose-of-the-2fagws-file"></span>
<span id="do-i-need-to-restart-the-application-after-enabling-2fa"></span>
<span id="how-does-the-login-process-change-after-enabling-2fa"></span>
<span id="how-do-i-disable-2fa"></span>
<span id="what-should-i-do-if-i-change-devices-or-lose-data"></span>
<span id="what-are-the-security-best-practices-for-using-gingerwallet"></span>
<span id="does-gingerwallet-store-any-personal-information"></span>
<span id="what-happens-if-i-lose-access-to-my-authenticator-app"></span>
<span id="how-does-gingerwallet-ensure-security-with-2fa"></span>
<span id="how-can-i-recover-my-labels-and-extra-options-for-my-wallet-if-ive-lost-the-2fa-key"></span>
<span id="why-does-ginger-wallet-require-an-8-digit-2fa-code"></span>
<span id="what-should-i-do-if-my-authenticator-app-only-provides-6-digit-codes"></span>

> Livello della guida: Avanzato. Conserva le informazioni di ripristino originali e i file del portafoglio prima di modificare la configurazione del ripristino o dei file.

L'autenticazione a due fattori (2FA) facoltativa di Ginger aggiunge un controllo all'avvio dell'applicazione e la cifratura dei file locali del portafoglio. È separata dalla passphrase di ogni portafoglio. Non è una regola Bitcoin che richieda una seconda firma per ogni spesa e non protegge un backup delle parole di recupero da chi conosce anche la sua passphrase.

<span id="understand-the-dependency-first" data-ginger-heading="comprendi-prima-la-dipendenza" aria-hidden="true"></span>

## Comprendi prima la dipendenza

Ginger verifica il codice dell'autenticatore con il proprio servizio 2FA e ottiene il segreto necessario a decifrare i file protetti del portafoglio. Una connessione funzionante a quel servizio è quindi necessaria per la normale procedura di avvio 2FA. Tor deve essere attivo per usare questa funzione.

Il file locale `2fa_info.gws` memorizza un identificatore client/server. Non è una copia cifrata delle parole di recupero o una chiave di ripristino autosufficiente. Copiare solo quel file non ripristina un portafoglio. Né una passphrase del portafoglio né l'attivazione della 2FA significano che ogni etichetta, log o file associato riceva la stessa cifratura. Proteggi l'intera cartella dati e i suoi backup.

Prima di attivare la 2FA, controlla di avere le parole di recupero e la passphrase originale esatta per ogni portafoglio software che devi ripristinare. Conserva anche copie protette dei file dei portafogli e dei metadati.

<span id="enable-2fa" data-ginger-heading="attiva-la-2fa" aria-hidden="true"></span>

## Attiva la 2FA

1. Apri **Settings** → **Security**. Attiva **Network anonymization (Tor)** se necessario e riavvia quando richiesto affinché Tor sia attivo.
2. Attiva **Two-factor authentication**. La finestra di configurazione mostra un codice QR per un autenticatore.
3. Aggiungi privatamente quel codice QR all'autenticatore. Contiene un segreto, quindi non condividerlo. La configurazione Ginger richiede un autenticatore compatibile con SHA256 e codici a otto cifre; una voce predefinita a sei cifre creata manualmente non è equivalente.
4. Inserisci il codice attuale e scegli **Verify**. Se la verifica fallisce, controlla la sincronizzazione dell'ora sul telefono e che la voce provenga da questa configurazione.
5. Riavvia Ginger come indicato. Completa la richiesta 2FA all'avvio. Dopo un avvio autenticato riuscito, Ginger ottiene il segreto di cifratura e assicura che siano cifrati i file JSON del portafoglio e dei backup automatici del portafoglio.

Non presumere che i file copiati prima della configurazione o prima del riavvio autenticato abbiano acquisito la nuova protezione. Mantieni protetti in modo indipendente quei vecchi backup. Attivare l'interruttore non è un motivo per cancellare l'unico materiale di ripristino di cui conosci la validità.

<span id="everyday-use-and-disabling" data-ginger-heading="uso-quotidiano-e-disattivazione" aria-hidden="true"></span>

## Uso quotidiano e disattivazione

All'avvio, inserisci il codice attuale dell'autenticatore. Una volta caricata l'applicazione, le passphrase dei singoli portafogli e le approvazioni dei dispositivi hardware mantengono i propri ruoli. Un computer già sbloccato resta una preoccupazione di sicurezza.

Per disattivare la 2FA mentre hai accesso, apri **Settings** → **Security** e disattiva **Two-factor authentication**. Ginger rimuove la cifratura aggiuntiva dei file del portafoglio e l'associazione 2FA locale. La normale protezione con passphrase del portafoglio software è separata e resta rilevante. Crea un backup dei file risultanti se la procedura di backup dipende dal loro attuale stato di cifratura.

<span id="lost-phone-missing-file-or-unavailable-service" data-ginger-heading="telefono-perso-file-mancante-o-servizio-non-disponibile" aria-hidden="true"></span>

## Telefono perso, file mancante o servizio non disponibile

Un autenticatore perso o un'interruzione del servizio possono impedire il normale avvio. Conserva prima la cartella dati esistente. Controlla ora e connettività per un codice rifiutato; reinstallare ripetutamente sugli stessi dati non ricrea un segreto dell'autenticatore perso.

Per i fondi di un portafoglio software, usa un'installazione affidabile separata o un ambiente pulito dell'applicazione per ripristinare dalle parole e dalla passphrase originali. Verifica cronologia conosciuta e accesso prima di cambiare i vecchi file. Le chiavi ripristinate non dipendono dal mantenimento della vecchia configurazione 2FA, ma scaricare e sincronizzare Ginger richiede ancora i suoi normali servizi di rete. Software di ripristino compatibile può essere un'opzione se supporta i tipi di account originali.

Le etichette e altri attributi locali non sono ricostruiti dalle parole. Conserva i loro backup `.attr` prima di esaminare il ripristino dei metadati. Conserva i dati esistenti del portafoglio quando configuri la 2FA o ne risolvi i problemi.

Se il materiale di ripristino è stato esposto, creare un nuovo portafoglio e trasferire i fondi rimanenti cambia quali chiavi li controllano. Disattivare la 2FA o reinstallare l'applicazione non invalida le vecchie parole di recupero.
