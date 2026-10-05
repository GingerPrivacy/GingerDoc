---
doc_id: "settings-network.secret-hunt"
title: "Secret Hunt in Ginger Wallet"
description: "Trova i risultati degli eventi Secret Hunt di Ginger, controlla la partecipazione del portafoglio e comprendi le informazioni ricevute dal servizio dell'evento."
lang: "it"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Livello della guida: Uso quotidiano. Scegli questa guida quando ti serve eseguire l'attività descritta.

**Secret Hunt** è una funzione di Ginger che mostra segreti degli eventi associati ad attività CoinJoin ammissibile. È separata dal punteggio di privacy del portafoglio e dalla normale procedura di ricezione o spesa di bitcoin. La disponibilità degli eventi dipende dal servizio; la presenza della funzione non promette un evento attuale, un premio o una ricompensa.

<span id="view-and-control-participation" data-ginger-heading="visualizza-e-controlla-la-partecipazione" aria-hidden="true"></span>

## Visualizza e controlla la partecipazione

Apri il menu di un portafoglio software e scegli **Secret Hunt**. La finestra mostra i risultati degli eventi in un albero, comprese parole o frasi scoperte e un segreto aggiuntivo quando sono stati raccolti i segreti richiesti dall'evento. Espandi un evento per esaminarne le voci.

Usa **Enable/disable the use of this wallet for Secret Hunt.** per controllare la partecipazione di quel portafoglio. Il valore predefinito della versione è attivo. Disattivarlo svuota l'albero visualizzato nella vista disabilitata e impedisce al processo di aggiornamento di selezionare quel portafoglio per i controlli di ammissibilità agli eventi. Non annulla CoinJoin, non elimina transazioni dalla blockchain e non cancella informazioni già inviate a un servizio.

La voce non è offerta per portafogli in sola visualizzazione. Non è una funzione CoinJoin dei portafogli hardware e non richiede di inserire le parole di recupero nel sito di un evento.

<span id="what-is-shared" data-ginger-heading="cosa-viene-condiviso" aria-hidden="true"></span>

## Cosa viene condiviso

Il client recupera informazioni sugli eventi dal servizio di Ginger. Per un controllo di ammissibilità, può inviare un ID di transazione CoinJoin, un riferimento a un input selezionato e una prova crittografica di proprietà. La prova dimostra il controllo per la richiesta dell'evento senza inviare la chiave privata. Sono divulgazioni aggiuntive a livello di applicazione anche quando la connessione usa Tor.

Tor affronta l'esposizione a livello di rete; non elimina il contenuto di una richiesta per il suo destinatario. Se non vuoi che un portafoglio venga usato per questi controlli degli eventi, disattiva la sua partecipazione Secret Hunt. Le richieste dell'elenco degli eventi e la normale attività di rete del portafoglio sono separate da questo interruttore specifico del portafoglio.

<span id="missing-or-incomplete-results" data-ginger-heading="risultati-mancanti-o-incompleti" aria-hidden="true"></span>

## Risultati mancanti o incompleti

I risultati dipendono dalle date degli eventi, dall'attività confermata idonea, dalla disponibilità del servizio e dagli aggiornamenti periodici. Un round può completarsi con successo senza rivelare un nuovo segreto. Attendere risultati non è una prova che manchino bitcoin.

Non generare transazioni aggiuntive a pagamento presumendo che una ricompensa ti compensi. Leggi i termini effettivi dell'evento attraverso una fonte autenticata prima di decidere se partecipare. Ignora richieste di caricare un file del portafoglio o inviare una «commissione di riscossione» separata a un indirizzo di assistenza non richiesto.
