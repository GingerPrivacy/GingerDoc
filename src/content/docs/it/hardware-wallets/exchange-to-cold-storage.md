---
doc_id: "hardware-wallets.exchange-to-cold-storage"
title: "Da un exchange alla conservazione offline con Ginger"
description: "Preleva bitcoin, usa CoinJoin in Ginger e sposta i fondi verso un portafoglio hardware verificato, tenendo conto delle commissioni e preservando la privacy."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Predisponi prima un portafoglio hardware verificato e il suo backup indipendente.

Ginger può aiutarti a separare l'attività bitcoin futura da un prelievo da exchange prima di conservare i fondi su un portafoglio hardware. L'exchange conserva la registrazione del prelievo. Il portafoglio hardware protegge le chiavi di firma; le transazioni e le spese successive determinano comunque cosa gli altri possano dedurre.

Ci sono due percorsi diversi. Scegline uno prima di iniziare, così saprai dove dovrebbero comparire gli output.

| Percorso | Cosa succede | Considerazione principale |
| --- | --- | --- |
| CoinJoin nel portafoglio software, poi un trasferimento ordinario | Gli output restano nel portafoglio software Ginger finché selezioni i fondi e li invii all'hardware | Puoi controllarne prima la privacy; ogni trasferimento successivo costa una commissione ed espone il rapporto tra input e output |
| Ricevere gli output CoinJoin direttamente nel portafoglio hardware | Un portafoglio software ammissibile firma CoinJoin; i suoi output vanno al portafoglio hardware caricato | Evita un trasferimento separato per quegli output, ma essi lasciano l'origine dopo quel round, senza garanzia di raggiungere il tuo obiettivo |

<span id="prepare-both-wallets" data-ginger-heading="prepara-entrambi-i-portafogli" aria-hidden="true"></span>

## Prepara entrambi i portafogli

1. Usa un'installazione Ginger verificata. Crea il portafoglio software e il backup con parole di recupero e passphrase originale. Mantieni in questo portafoglio solo l'importo che intendi elaborare.
2. Inizializza il portafoglio hardware e il suo backup tramite la procedura supportata dal produttore. [Collegalo a Ginger](/it/using-ginger/hardware-wallet/) e lascia sincronizzare il portafoglio.
3. Nel portafoglio hardware, scegli **Receive** e usa **Show on the hardware wallet** quando disponibile. Confronta l'intero indirizzo di ricezione sul dispositivo e sul computer. Completa una piccola prova di ricezione e firma prima di affidarti a una nuova configurazione per un importo maggiore.
4. Dai ai portafogli nomi distinti per riconoscere origine e destinazione. Conserva un backup utilizzabile per il ripristino di ciascuno; il backup del portafoglio software non ripristina un portafoglio hardware con chiavi diverse.

Non digitare mai le parole di recupero del portafoglio hardware in Ginger per far funzionare CoinJoin. Questo darebbe al computer accesso alle chiavi di firma del portafoglio hardware.

<span id="withdraw-from-the-exchange" data-ginger-heading="preleva-dallexchange" aria-hidden="true"></span>

## Preleva dall'exchange

Nel portafoglio software, scegli **Receive**, aggiungi un'etichetta utile e crea un nuovo indirizzo. Copialo nella procedura di prelievo Bitcoin dell'exchange e verifica l'intero indirizzo e la rete prima di autorizzare lì il prelievo. Ginger usa Bitcoin on-chain; una fattura Lightning o la rete di un altro asset non sono intercambiabili.

Registra separatamente la commissione di prelievo dell'exchange. L'importo che arriva in Ginger può essere inferiore a quello addebitato dall'exchange. Attendi che il portafoglio si sincronizzi e che i fondi ricevuti siano confermati prima di aspettarti che partecipino a CoinJoin. Un ID di transazione è utile per verificare i conti, ma evita di pubblicarlo o cercarlo ripetutamente su esploratori pubblici.

<span id="route-a-review-coinjoin-results-then-transfer" data-ginger-heading="percorso-a-controlla-i-risultati-coinjoin-poi-trasferisci" aria-hidden="true"></span>

## Percorso A: controlla i risultati CoinJoin, poi trasferisci

1. In **Coinjoin Settings** del portafoglio di origine, lascia **Coinjoin to this wallet** impostato sull'origine. Controlla l'obiettivo, le preferenze delle commissioni e le monete escluse prima di avviare la partecipazione con il comando di avvio del pannello di controllo CoinJoin.
2. Monitora i round completati e le informazioni di privacy delle monete. Puoi mettere in pausa per controllare commissioni e avanzamento. Se un round è in una fase critica, lascia che Ginger completi il lavoro necessario anziché terminare l'applicazione.
3. Ottieni un nuovo indirizzo di ricezione hardware e verificalo sul dispositivo. Nel portafoglio software, scegli **Send** → **Manual Control** e seleziona i fondi che intendi spostare.
4. Controlla gli input effettivamente selezionati, la destinazione, l'importo del destinatario, il resto e la commissione. Conferma il trasferimento solo quando corrispondono alla tua intenzione.
5. Controlla la cronologia sincronizzata del portafoglio hardware e le monete rimanenti nell'origine. Attendi la conferma del trasferimento prima di considerarlo completato.

Inviare insieme ogni output crea un'associazione visibile tra essi. Spostare singole monete evita quella particolare associazione tra più input, ma costa ulteriori commissioni e rivela comunque una transazione per ogni trasferimento. Importi, tempi e informazioni detenute da un osservatore possono fornire altri collegamenti. Scegli un piano di trasferimento gestibile; non presumere che uno dei due approcci garantisca l'anonimato.

<span id="route-b-choose-hardware-as-the-coinjoin-destination" data-ginger-heading="percorso-b-scegli-lhardware-come-destinazione-coinjoin" aria-hidden="true"></span>

## Percorso B: scegli l'hardware come destinazione CoinJoin

Usa questo percorso mentre il portafoglio software ha ancora fondi ammissibili per CoinJoin. La normale procedura della v2.0.26 rifiuta la partecipazione quando il portafoglio, o tutti i candidati disponibili, sono già privati secondo il suo obiettivo. Selezionare un'altra destinazione non aggira quel controllo. In particolare, escludere ogni moneta non privata non è un modo affidabile di forzare un round aggiuntivo contenente solo monete già elaborate. Usa il Percorso A per quei fondi anziché modificare l'obiettivo solo per aggirare la condizione di arresto.

1. Carica e verifica il portafoglio hardware in Ginger. Arresta la partecipazione CoinJoin nell'origine e attendi che il selettore della destinazione diventi disponibile.
2. Apri **Coinjoin Settings** del portafoglio di origine. Imposta **Coinjoin to this wallet** sul portafoglio hardware previsto. Seleziona solo una destinazione offerta da Ginger.
3. Controlla **Exclude Coins** per i fondi che devono restare fuori da CoinJoin. L'esclusione si applica a monete specifiche e non riserva ogni ricezione futura dalla stessa fonte.
4. Ricontrolla la destinazione selezionata e avvia la partecipazione. Mantieni l'applicazione in esecuzione mentre completa il round.
5. Dopo un round riuscito, esamina entrambi i portafogli. Sono stati spesi solo gli input selezionati e gli output risultanti possono essere divisi in più monete. Il saldo rimanente nell'origine non è necessariamente un errore.

La destinazione riceve gli output del round completato; questa impostazione non attende un evento separato di raggiungimento dell'obiettivo prima di inoltrarli. Controllane le informazioni di privacy risultanti. I fondi detenuti su hardware non possono poi fornire input CoinJoin attraverso la normale procedura hardware di questa versione.

La selezione della destinazione si reimposta dopo il riavvio di Ginger. Ricontrollala prima di ogni sessione. Non puoi cambiarla durante una partecipazione attiva e modificarla dopo che una transazione è stata firmata non può reindirizzare quella transazione. Verifica esplicitamente ogni impostazione di partecipazione automatica anziché presumere un trasferimento permanente in background.

<span id="reconcile-balances-and-plan-the-next-spend" data-ginger-heading="verifica-i-conti-dei-saldi-e-pianifica-la-spesa-successiva" aria-hidden="true"></span>

## Verifica i conti dei saldi e pianifica la spesa successiva

Confronta la diminuzione nell'origine con gli output ricevuti su hardware e i fondi rimanenti nell'origine. La differenza può includere costi CoinJoin. Un saldo di origine pari a zero non significa che i fondi siano persi se la destinazione prevista li ha ricevuti. Viceversa, un round riuscito non significa che ogni moneta dell'origine sia stata spostata o abbia raggiunto l'obiettivo.

Quando in seguito spendi dall'hardware, controlla di nuovo la selezione delle monete. Combinare monete non correlate può rivelare associazioni indipendentemente da dove siano conservate le chiavi di firma. Usa un nuovo indirizzo del destinatario, esamina il resto e conferma il pagamento sul dispositivo. La [procedura PSBT](/it/hardware-wallets/psbt/) offre un percorso di firma tramite file supportato per hardware adatto; non cambia le conseguenze di privacy della transazione che firmi.

Se sospetti che le chiavi di firma siano già compromesse, proteggere i fondi rimanenti ha la priorità rispetto all'attesa di una procedura di privacy. Un nuovo dispositivo contenente la stessa frase seme esposta non la revoca.
