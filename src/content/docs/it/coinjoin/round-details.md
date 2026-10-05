---
doc_id: "coinjoin.round-details"
title: "Round CoinJoin e ammissibilità degli input"
description: "Comprendi le fasi di CoinJoin in Ginger, l'ammissibilità degli input e i nuovi tentativi quando i normali controlli di avvio, pausa e attesa non spiegano il risultato."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Comprendi prima i normali comandi di avvio e pausa e il fatto che i round completati costano commissioni.

Inizia dalla [guida ordinaria a CoinJoin](/it/using-ginger/coinjoin/). Ginger gestisce automaticamente il protocollo; questo riferimento serve a comprendere uno stato o un limite specifico.

<span id="why-a-balance-may-not-be-eligible" data-ginger-heading="perché-un-saldo-può-non-essere-ammissibile" aria-hidden="true"></span>

## Perché un saldo può non essere ammissibile

Non esistono un tempo di attesa fisso o un saldo minimo universale che garantiscano la partecipazione. L'ammissibilità dipende dai parametri del round, dagli importi delle monete, dallo stato delle conferme, dalle commissioni, dalle esclusioni e dalle impostazioni del portafoglio. Un saldo può superare il valore minimo dell'input senza contenere alcuna moneta ammissibile ed economica da usare.

<span id="what-happens-during-a-round" data-ginger-heading="cosa-succede-durante-un-round" aria-hidden="true"></span>

## Cosa succede durante un round

| Fase | Cosa attende il portafoglio |
| --- | --- |
| Registrazione degli input | Le monete ammissibili vengono proposte per la transazione condivisa. |
| Conferma della connessione | I partecipanti registrati confermano di essere ancora disponibili. |
| Registrazione degli output | I partecipanti definiscono tramite il protocollo gli output che dovrebbero ricevere. |
| Firma | I portafogli controllano la proposta e firmano i propri input. Mantieni Ginger disponibile durante questa fase critica. |
| Blame round, quando necessario | Un nuovo tentativo esclude i partecipanti che non hanno completato i passaggi richiesti. |
| Trasmissione | La transazione completata viene inviata ai nodi Bitcoin, poi attende una conferma. |

Queste fasi sono gestite dall'applicazione; non devi scambiare chiavi o coordinarti manualmente con sconosciuti. Il numero di input accettati e output risultanti è determinato dal round e dalla selezione delle monete. Non esiste un numero fisso di input o output da aspettarsi per ogni portafoglio e il saldo totale non promette che tutto possa partecipare a un solo round.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="monete-private-e-un-altro-portafoglio-di-destinazione" aria-hidden="true"></span>

## Monete private e un altro portafoglio di destinazione

Il normale avvio della v2.0.26 rifiuta un portafoglio o un insieme di candidati disponibili le cui monete soddisfano già l'obiettivo di privacy. Selezionare un altro portafoglio di destinazione non forza un round con sole monete private. Controlla le [impostazioni del portafoglio di destinazione](/it/coinjoin/settings/) prima di fare affidamento su una procedura di inoltro.

Per i calcoli dei punteggi e il conto completo dei valori, usa [commissioni e avanzamento della privacy](/it/using-ginger/annonset/).
