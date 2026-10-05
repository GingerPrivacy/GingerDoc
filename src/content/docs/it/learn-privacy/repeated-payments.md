---
doc_id: "learn-privacy.repeated-payments"
title: "Ricevere donazioni e pagamenti ripetuti"
description: "Ricevi donazioni e pagamenti ricorrenti in Bitcoin con nuovi indirizzi, etichette utili, rimborsi attenti e gestione consapevole delle monete risultanti."
lang: "it"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Livello della guida: Uso quotidiano. Scegli questa guida quando ti serve eseguire l'attività descritta.

Ricevere bitcoin pubblicamente non richiede di pubblicare ogni indirizzo del portafoglio. Richiede però di decidere cosa vedrà ogni pagatore o visitatore del sito e di mantenere separate le ricezioni non correlate quando utile. Ginger supporta la normale ricezione on-chain e le etichette locali; non è un server di fatturazione o un servizio automatico di rotazione degli indirizzi per siti web.

<span id="choose-how-to-give-out-addresses" data-ginger-heading="scegli-come-distribuire-gli-indirizzi" aria-hidden="true"></span>

## Scegli come distribuire gli indirizzi

| Approccio | Cosa rende comodo | Cosa diventa visibile |
| --- | --- | --- |
| Un indirizzo permanente su un sito o profilo | Chiunque può pagare senza contattarti | Le ricezioni su quell'indirizzo e le spese successive possono essere esaminate insieme; la pagina collega l'indirizzo al proprietario |
| Un nuovo indirizzo fornito a ogni pagatore | Ogni richiesta di pagamento ha una destinazione separata | Il pagatore e il servizio di comunicazione possono conoscere l'indirizzo e la tua identità; transazioni successive possono creare collegamenti |
| Un nuovo indirizzo per ogni rata ricorrente | Puoi mantenere registrazioni private per pagamento | Richiede di comunicare le nuove istruzioni; chi paga può comunque riutilizzare un vecchio indirizzo |

Le ricezioni di un indirizzo pubblico non rappresentano necessariamente l'intero saldo, il reddito o il numero di donatori del proprietario. Una persona può inviare bitcoin a sé stessa, i donatori possono pagare ripetutamente e possono esistere altri indirizzi. Evita conclusioni più forti di quanto supportato dalle transazioni visibili.

<span id="receive-and-keep-useful-records" data-ginger-heading="ricevi-e-conserva-registrazioni-utili" aria-hidden="true"></span>

## Ricevi e conserva registrazioni utili

1. Apri il portafoglio previsto e scegli **Receive**. Aggiungi un'etichetta che ti aiuti a riconoscere lo scopo in seguito, come un riferimento privato della fattura o l'attività pertinente.
2. Genera un nuovo indirizzo di ricezione per quel pagamento. Per hardware, verificalo sul dispositivo con **Show on the hardware wallet** quando disponibile.
3. Condividi l'indirizzo e l'importo Bitcoin on-chain concordato tramite il canale previsto. Verifica cosa hai incollato; non riutilizzare un indirizzo solo perché è già nella cronologia di una chat.
4. Controlla l'effettiva ricezione e le conferme in Ginger. Un messaggio del pagatore o un'immagine della schermata di pagamento non sono la conferma del portafoglio che i fondi siano arrivati.
5. Conserva l'associazione tra ricezione, etichetta ed eventuale registrazione privata della fattura o donazione. Le parole di recupero non ricostruiscono tutte queste note.

Le etichette appartengono alle registrazioni locali; non vengono pubblicate come nomi nella transazione Bitcoin. Tuttavia, chi legge i file locali, il backup o lo schermo condiviso può vederle. Usa dettagli sufficienti a rendere comprensibile la futura selezione delle monete senza raccogliere informazioni personali superflue sui donatori.

<span id="handle-a-permanently-published-address" data-ginger-heading="gestisci-un-indirizzo-pubblicato-permanentemente" aria-hidden="true"></span>

## Gestisci un indirizzo pubblicato permanentemente

Se usi un indirizzo permanente per le donazioni, considera esaminabile la sua cronologia delle ricezioni. Sostituire l'indirizzo su un sito non cancella quello precedente e non gli impedisce di ricevere pagamenti futuri. Conserva il suo materiale di ripristino e abbastanza contesto da riconoscere ricezioni tardive.

CoinJoin può aiutare a ridurre i collegamenti con spese successive secondo le proprie ipotesi; non fa sparire le donazioni a quell'indirizzo pubblico. Spostare insieme tutte le ricezioni in una normale transazione può aggiungere una nuova associazione. Pianifica la spesa successiva con la stessa cura della ricezione iniziale.

Per un abbonamento o un pagamento ripetuto di un cliente, comunica una nuova destinazione per ogni rata quando possibile. Ginger non revoca un vecchio indirizzo e non obbliga chi paga a seguire la richiesta aggiornata. Verifica i conti dei pagamenti tardivi e duplicati prima di promettere un rimborso.

<span id="refund-the-payer-through-a-verified-destination" data-ginger-heading="rimborsa-chi-paga-verso-una-destinazione-verificata" aria-hidden="true"></span>

## Rimborsa chi paga verso una destinazione verificata

Non inviare automaticamente un rimborso a uno degli indirizzi degli input del pagamento originale. Chi paga potrebbe aver usato un prelievo da exchange, un servizio di custodia o una transazione collaborativa e potrebbe non controllare quell'indirizzo di input.

1. Conferma il pagamento originale e la richiesta di rimborso usando le registrazioni private e un canale di contatto affidabile.
2. Concorda l'importo del rimborso e chi sostiene la commissione di transazione. Ottieni un nuovo indirizzo Bitcoin di rimborso dal destinatario previsto e verificalo tramite quel canale.
3. Usa **Send**, esamina gli input selezionati e la commissione e autorizza solo il pagamento concordato.
4. Registra la transazione di rimborso e controllane l'esito prima di riprovare dopo un errore di rete.

Un rimborso è un nuovo pagamento on-chain. Non annulla la ricezione originale e non ne elimina le registrazioni. Considera cosa rivela la transazione di rimborso sulle monete che hai scelto di spendere.

<span id="keep-receipt-handling-deliberate" data-ginger-heading="gestisci-consapevolmente-le-ricezioni" aria-hidden="true"></span>

## Gestisci consapevolmente le ricezioni

Apri **Wallet Coins** per esaminare le monete risultanti. **Send** → **Manual Control** può aiutare a selezionare fondi già associati all'attività pertinente. Controlla la transazione finale anziché presumere che un'etichetta imponga automaticamente la separazione.

Piccoli pagamenti inattesi non richiedono una risposta immediata. Spendere un piccolo output può costare una percentuale elevata del suo valore e associarlo ad altri input selezionati. **Exclude Coins** influisce solo sulla partecipazione a CoinJoin; non blocca la spesa ordinaria di una moneta. Non seguire istruzioni inserite in un pagamento non richiesto o un contatto che sostiene di dover inviare fondi per sbloccarlo.

Se indirizzi gli output di CoinJoin ammissibili a un altro portafoglio caricato per conservarli, controlla quella scelta prima di ogni sessione. Si reimposta dopo il riavvio e la normale procedura della versione non forza un round aggiuntivo quando tutti i fondi ammissibili sono già privati. Una configurazione di ricezioni ricorrenti non dovrebbe affidarsi all'ipotesi non verificata che tutto venga continuamente inoltrato all'hardware.

Prosegui con [spendere dopo CoinJoin](/it/learn-privacy/spending-after-coinjoin/) per esempi concreti e [condivisione delle informazioni](/it/learn-privacy/information-sharing/) per ciò che possono scoprire siti web, esploratori e altre app.
