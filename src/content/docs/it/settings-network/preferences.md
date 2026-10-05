---
doc_id: "settings-network.preferences"
title: "Aspetto, lingua e impostazioni quotidiane"
description: "Cambia lingua di Ginger, formati di visualizzazione, comportamento in background, preferenze del browser e modalità discreta senza confonderli con la sicurezza del portafoglio."
lang: "it"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Livello della guida: Uso quotidiano. Scegli questa guida quando ti serve eseguire l'attività descritta.

Usa **Settings** per le preferenze dell'intera applicazione e **Wallet Settings** per il nome, la configurazione CoinJoin e gli strumenti del portafoglio selezionato. La ricerca dell'applicazione può trovare azioni come **Data Folder**, **Wallet Info** e **Discreet Mode** senza dipendere dalla posizione di un'icona.

<span id="language-and-amounts" data-ginger-heading="lingua-e-importi" aria-hidden="true"></span>

## Lingua e importi

In **Settings** → **Appearance**, **Language** seleziona la lingua dell'interfaccia. La versione 2.0.26 offre inglese, spagnolo, ungherese, francese, cinese, tedesco, portoghese, turco e italiano. Segui eventuali richieste di riavvio. Il manuale inglese usa le etichette inglesi pubblicate, mantenute anche in questa traduzione; le etichette tradotte nell'app possono differire.

**Dark mode** cambia l'aspetto. **Exchange currency** cambia la valuta fiat di riferimento visualizzata, mentre separatori decimali e delle migliaia, raggruppamento delle frazioni di bitcoin e **Fee display unit** controllano la presentazione dei numeri. Non cambiano l'importo BTC sottostante o la commissione di transazione della rete. Leggi gli esempi nelle impostazioni prima di inserire un importo in un formato sconosciuto.

<span id="discreet-mode" data-ginger-heading="modalità-discreta" aria-hidden="true"></span>

## Modalità discreta

Usa **Discreet Mode** quando qualcuno può vedere lo schermo. Nasconde i campi sensibili supportati per ridurre l'osservazione casuale. Controlla cosa è effettivamente nascosto prima di condividere lo schermo: la funzione non garantisce che ogni finestra, indirizzo o applicazione esterna sia nascosta.

La modalità discreta non cifra i file, non blocca il portafoglio, non interrompe la firma e non cambia la privacy della blockchain. Una persona con accesso al computer può ancora interagire con l'applicazione. Usa il blocco schermo del sistema operativo quando ti allontani.

<span id="general-settings" data-ginger-heading="impostazioni-generali" aria-hidden="true"></span>

## Impostazioni generali

| Impostazione | Effetto pratico |
| --- | --- |
| **Run Ginger when computer starts** | Apre Ginger insieme alla sessione del sistema operativo. |
| **Run in background when window closed** | Consente all'applicazione di restare attiva dopo la chiusura della finestra. CoinJoin e sincronizzazione possono quindi continuare. |
| **Auto copy addresses** | Può inserire automaticamente negli appunti un indirizzo visualizzato. |
| **Auto paste addresses** | Può usare il contenuto degli appunti nelle procedure di inserimento degli indirizzi. Controlla sempre la destinazione risultante. |
| **Auto download new version** | Controlla il download di un aggiornamento disponibile; segui separatamente la richiesta di installazione. |
| **Browser used by Ginger** | Sceglie il browser usato per le pagine esterne; l'opzione personalizzata espone **Custom browser path**. |

La comodità degli appunti non autentica il destinatario. Altre applicazioni possono leggere o sostituire i dati degli appunti. Non inserire mai le parole di recupero negli appunti durante la normale ricezione o l'invio.

Le pagine esterne usano il comportamento di rete e privacy del browser selezionato. Un fornitore di acquisto/vendita può chiedere informazioni identificative anche se Ginger usa Tor. Cambiare una preferenza di visualizzazione o del browser non modifica le registrazioni del fornitore.

<span id="wallet-information-and-tools" data-ginger-heading="informazioni-e-strumenti-del-portafoglio" aria-hidden="true"></span>

## Informazioni e strumenti del portafoglio

**Wallet Info** può mostrare informazioni dell'account e della chiave pubblica estesa. Una chiave pubblica estesa non può spendere direttamente monete, ma può rivelare molti indirizzi correlati. Non pubblicarla in una richiesta pubblica di assistenza.

In **Wallet Settings** → **General**, usa il controllo del nome per rinominare il portafoglio. In **Tools**, **Verify Recovery Words** controlla il backup di un portafoglio software accessibile, **Resync** ricostruisce la sua vista e **Delete Wallet** rimuove un portafoglio locale attraverso la procedura di conferma. L'eliminazione non distrugge i bitcoin, non revoca le parole di recupero e non sostituisce un backup. Conserva informazioni di ripristino funzionanti prima di rimuovere l'accesso locale.
