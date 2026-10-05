---
doc_id: "hardware-wallets.connect"
title: "Collega e usa un portafoglio hardware"
description: "Collega un portafoglio hardware supportato a Ginger, verifica gli indirizzi di ricezione sul dispositivo e approva i pagamenti in sicurezza."
lang: "it"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="does-ginger-support-hardware-wallets"></span>

> Livello della guida: Uso quotidiano. Scegli questa guida quando ti serve eseguire l'attività descritta.

Un portafoglio hardware conserva le chiavi di firma su un dispositivo separato. Ginger può mostrarne il saldo e preparare transazioni, mentre il dispositivo autorizza le operazioni di firma supportate. Il computer gestisce comunque informazioni pubbliche sensibili, quindi la conservazione su hardware non rende anonima l'attività del portafoglio.

<span id="compatibility-in-this-release" data-ginger-heading="compatibilità-in-questa-versione" aria-hidden="true"></span>

## Compatibilità in questa versione

Ginger 2.0.26 include Hardware Wallet Interface (HWI) 3.2.0. Il riconoscimento dei dispositivi in Ginger comprende Coldcard, Ledger Nano S, Nano S Plus e Nano X, Trezor One, Model T, Safe 3 e Safe 5, BitBox01, BitBox02, KeepKey e Blockstream Jade. Il riconoscimento non garantisce che ogni dispositivo, firmware, procedura di passphrase e tipo di indirizzo funzionino nell'interfaccia grafica.

La [matrice dei dispositivi HWI 3.2.0](https://github.com/bitcoin-core/HWI/blob/3.2.0/docs/devices/index.rst) descrive le capacità del trasporto sottostante. Ginger ne espone un sottoinsieme: per esempio, la normale connessione del dispositivo importa l'account SegWit nativo. Il supporto HWI per multifirma o Taproot non crea da solo una corrispondente procedura di configurazione del portafoglio Ginger.

Prima di spostare fondi significativi, conferma che il tuo dispositivo esatto possa collegarsi, mostrare un indirizzo di ricezione e firmare un piccolo pagamento di prova. Se un dispositivo richiede un metodo di inserimento di PIN o passphrase che Ginger non può completare, termina la procedura supportata sul dispositivo o consulta il produttore. Non digitare le parole di recupero del dispositivo in Ginger per aggirare il problema.

<span id="add-the-device" data-ginger-heading="aggiungi-il-dispositivo" aria-hidden="true"></span>

## Aggiungi il dispositivo

1. Inizializza il portafoglio hardware e creane un backup seguendo le istruzioni del produttore. Usa firmware affidabile e un cavo USB capace di trasferire dati.
2. Collega un solo dispositivo alla volta, sbloccalo e apri la sua applicazione Bitcoin se richiesta. Chiudi altre applicazioni per portafogli che potrebbero occupare la connessione USB.
3. Nella schermata per aggiungere un portafoglio di Ginger, scegli **Hardware Wallet** e fornisci un nome se richiesto.
4. Segui il rilevamento e le richieste del dispositivo. Ginger può riconoscere un portafoglio già aggiunto e offrire di aprirlo anziché creare un duplicato.
5. Lascia sincronizzare Ginger. Conferma che rete e account selezionati siano quelli previsti.

Ginger può conservare sul computer una registrazione pubblica del portafoglio senza l'hardware collegato. Questa consente l'osservazione e la generazione di indirizzi; la spesa richiede ancora il dispositivo di firma o un ripristino valido delle sue chiavi.

<span id="receive-and-verify" data-ginger-heading="ricevi-e-verifica" aria-hidden="true"></span>

## Ricevi e verifica

Scegli **Receive**, aggiungi un'etichetta e genera un indirizzo. Usa **Show on the hardware wallet** quando disponibile. Confronta l'intero indirizzo mostrato sul dispositivo con quello di Ginger prima di condividerlo. Se dispositivo e computer non concordano, fermati: approvare un indirizzo diverso può inviare fondi fuori dal portafoglio.

Il computer può mostrare un indirizzo credibile anche se è compromesso. Lo schermo del dispositivo è utile perché fornisce un controllo separato rispetto alle chiavi del dispositivo stesso. Usa un nuovo indirizzo per ogni pagamento per evitare di collegare ricezioni non correlate.

<span id="send-and-approve" data-ginger-heading="invia-e-approva" aria-hidden="true"></span>

## Invia e approva

Prepara un pagamento in Ginger e controlla destinatario, importo, resto e commissione. Sul portafoglio hardware, esamina cosa ti chiede di firmare. Rifiuta la richiesta se destinazione o importo differiscono dalla tua intenzione o se il dispositivo segnala una condizione di resto/output che non sai spiegare.

Mantieni il dispositivo collegato fino al termine della firma. Poi controlla nella cronologia di Ginger trasmissione e conferma. Rimuovere un dispositivo non annulla una transazione già trasmessa.

<span id="coinjoin-and-other-limits" data-ginger-heading="coinjoin-e-altri-limiti" aria-hidden="true"></span>

## CoinJoin e altri limiti

Un portafoglio hardware non può essere il portafoglio di origine che firma CoinJoin automatico di Ginger. Un portafoglio hardware caricato può comparire come destinazione degli output CoinJoin di un portafoglio software; è un ruolo di ricezione e la selezione si reimposta al riavvio. Usa solo la destinazione effettivamente offerta da Ginger e verificane il controllo prima di affidarti a essa.

La [guida dall'exchange alla conservazione offline](/it/hardware-wallets/exchange-to-cold-storage/) confronta la ricezione diretta di output CoinJoin ammissibili con un successivo trasferimento ordinario. Comprende il limite di avvio con sole monete private e i controlli per verificare i conti dei due portafogli.

L'invio PayJoin viene rifiutato per i portafogli hardware in questa versione. La firma dei messaggi dipende dalla compatibilità di dispositivo e verificatore. Né il dispositivo né Ginger possono annullare un pagamento confermato. Per la firma tramite file, leggi [Usa la procedura PSBT](/it/hardware-wallets/psbt/).

<span id="connection-problems" data-ginger-heading="problemi-di-connessione" aria-hidden="true"></span>

## Problemi di connessione

Prova un cavo dati di cui conosci il funzionamento, una porta USB diretta e un singolo dispositivo sbloccato. Su Linux, segui le istruzioni applicabili del produttore sui permessi udev/USB e ricollega dopo. Evita di eseguire il portafoglio come root come soluzione permanente. Se una passphrase diversa apre un account vuoto inatteso, controlla la passphrase originale del dispositivo anziché reimpostarlo.
