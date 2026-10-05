---
doc_id: "backup-recovery.passphrase"
title: "Cos'è una passphrase?"
description: "Comprendi la passphrase del portafoglio Ginger, cosa includere nel backup e perché il ripristino richiede la passphrase originale anche quando una diversa apre un portafoglio vuoto."
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: "Passphrase"
prev: false
next: false
---

> Livello della guida: Per iniziare. Questa guida tratta i portafogli software in Ginger v2.0.26. Per un portafoglio hardware, segui le istruzioni di ripristino del produttore e mantieni le sue parole di recupero fuori dal computer.

Una passphrase è un segreto facoltativo che scegli quando crei un portafoglio. In Ginger protegge l'accesso al portafoglio software ed è anche parte delle informazioni di ripristino. Per ripristinare lo stesso portafoglio servono le parole di recupero originali e la passphrase originale esatta, se ne hai usata una. Ginger non può reimpostare una passphrase dimenticata.

<span id="do-i-have-to-use-a-passphrase" data-ginger-heading="devo-usare-una-passphrase" aria-hidden="true"></span>

## Devo usare una passphrase?

Quando crei un portafoglio, Ginger mostra **Add Passphrase** dopo **Confirm Recovery Words**. Puoi inserire e confermare una passphrase oppure lasciare vuoti entrambi i campi per creare un portafoglio senza passphrase.

Senza passphrase, chi ottiene le parole di recupero può ripristinare e spendere i tuoi bitcoin. Una passphrase aggiunge un altro segreto da proteggere, ma dimenticarla può impedirti il ripristino anche se hai ancora le parole. Scegli qualcosa difficile da indovinare che puoi annotare e riprodurre accuratamente. Evita spazi all'inizio o alla fine; i controlli di inserimento di Ginger li rifiutano.

<span id="is-it-the-same-as-recovery-words-or-a-2fa-code" data-ginger-heading="è-la-stessa-cosa-delle-parole-di-recupero-o-di-un-codice-2fa" aria-hidden="true"></span>

## È la stessa cosa delle parole di recupero o di un codice 2FA?

No. Ginger genera dodici **Recovery Words** per un nuovo portafoglio software. Tu scegli la passphrase separatamente. Mantienila separata dall'elenco numerato delle parole; non inserirla come una parola di recupero aggiuntiva.

Il nome del portafoglio è solo un'etichetta locale. Un codice dell'autenticatore per l'autenticazione a due fattori (2FA) è un controllo separato all'avvio dell'applicazione. Nessuno dei due sostituisce parole e passphrase originali nel ripristino di un portafoglio software.

<span id="what-should-i-back-up" data-ginger-heading="cosa-devo-includere-nel-backup" aria-hidden="true"></span>

## Cosa devo includere nel backup?

- Le parole di recupero, nell'ordine visualizzato.
- La passphrase originale esatta, comprese maiuscole e caratteri, oppure una nota chiara che hai creato il portafoglio senza passphrase.

Mantieni queste informazioni private e recuperabili dopo la perdita del computer. Scrivi le parole offline; evita fotografie, email e normali note nel cloud. Mantieni recuperabile anche la passphrase. Conservarla separatamente può proteggere da chi trova entrambi i segreti insieme, ma assicurati di poter trovare entrambi quando servono. Non affidarti solo alla memoria.

Le parole di recupero ripristinano l'accesso ai bitcoin, ma non tutte le etichette o impostazioni. Conserva i file esistenti del portafoglio mentre indaghi un problema di ripristino. Un backup automatico sullo stesso computer non protegge dalla perdita di quel computer.

<span id="how-do-i-check-my-backup" data-ginger-heading="come-controllo-il-backup" aria-hidden="true"></span>

## Come controllo il backup?

Mentre il portafoglio software è accessibile, apri **Wallet Settings** → **Tools**. Trova **Verify Recovery Words** e scegli **Verify**, poi inserisci le parole dal backup e completa il controllo.

Questo controlla se quelle parole appartengano al portafoglio. Non mostra parole dimenticate e non reimposta la passphrase. Assicurati anche che la passphrase annotata sia corretta. Se la verifica fallisce, controlla privatamente ortografia e ordine delle parole prima di fare affidamento sul backup.

<span id="how-do-i-use-the-passphrase-during-recovery" data-ginger-heading="come-uso-la-passphrase-durante-il-ripristino" aria-hidden="true"></span>

## Come uso la passphrase durante il ripristino?

Questi passaggi servono a ripristinare un portafoglio software Ginger dalle sue parole. Conserva ogni file esistente del portafoglio finché il ripristino non è confermato.

1. Apri Ginger su un computer affidabile. Nella schermata per aggiungere un portafoglio, scegli **Recover**.
2. Inserisci un **Wallet Name** distinto se richiesto, per distinguere il portafoglio ripristinato da quelli esistenti.
3. Inserisci le **Recovery Words** originali nell'ordine corretto.
4. Alla schermata **Enter Passphrase**, inserisci e conferma la passphrase originale. Lascia vuoti i campi solo se il portafoglio originale non aveva una passphrase. Qui non stai scegliendo una nuova password.
5. Lascia terminare ripristino e sincronizzazione, poi controlla la cronologia delle transazioni conosciute. Sincronizzazione significa controllare la rete Bitcoin alla ricerca di transazioni appartenenti al portafoglio.

<span id="why-is-my-recovered-wallet-empty" data-ginger-heading="perché-il-portafoglio-ripristinato-è-vuoto" aria-hidden="true"></span>

## Perché il portafoglio ripristinato è vuoto?

Durante il ripristino dalle parole, una passphrase diversa produce un portafoglio diverso. Ginger può quindi accettare una passphrase digitata male e ripristinare un portafoglio vuoto senza segnalare un errore di passphrase errata. Questo è diverso dall'apertura di un file di portafoglio protetto esistente, dove una passphrase errata viene rifiutata.

Controlla la passphrase originale, maiuscole, spazi e disposizione della tastiera. Controlla anche di aver selezionato il portafoglio e la rete Bitcoin previsti e che il ripristino sia terminato. Una scansione incompleta può mostrare un saldo incompleto. Un saldo vuoto da solo non prova che i bitcoin originali siano scomparsi.

Se manca ancora la cronologia attesa, conserva gli originali e cerca aiuto attraverso i [collegamenti di assistenza ufficiali del progetto Ginger](https://gingerwallet.io/). Condividi solo dettagli non segreti come la versione dell'applicazione e il testo dell'errore. Non inviare mai all'assistenza parole di recupero, passphrase o file del portafoglio.

<span id="can-i-reset-or-replace-a-forgotten-passphrase" data-ginger-heading="posso-reimpostare-o-sostituire-una-passphrase-dimenticata" aria-hidden="true"></span>

## Posso reimpostare o sostituire una passphrase dimenticata?

Ginger non può reimpostarla. Ripristinare con le stesse parole e una nuova passphrase crea accesso a un portafoglio diverso; non cambia la passphrase del portafoglio originale e non sposta i suoi bitcoin.

Se puoi ancora inviare dal portafoglio originale ma non riesci a ottenere un backup utilizzabile per il ripristino, crea un nuovo portafoglio, verificane il backup e trasferisci attentamente i fondi finché hai accesso. Conserva il vecchio portafoglio finché il trasferimento non è confermato. Se non hai né accesso alla spesa né le informazioni necessarie al ripristino, l'assistenza non può ricreare il segreto mancante.
