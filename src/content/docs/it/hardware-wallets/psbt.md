---
doc_id: "hardware-wallets.psbt"
title: "Usa la procedura PSBT"
description: "Prepara una transazione Bitcoin in Ginger, firmala con un portafoglio hardware tramite un file e importa il risultato per trasmetterlo."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Predisponi prima un portafoglio hardware verificato e il suo backup indipendente.

Una transazione Bitcoin parzialmente firmata (PSBT) è un file che contiene una transazione e le informazioni necessarie a un firmatario. Consente di separare la preparazione sul computer dalla firma su un portafoglio hardware. Una PSBT può divulgare indirizzi, importi e informazioni del portafoglio, quindi trattala come privata anche prima che possa spendere qualcosa.

<span id="prepare-the-wallet-connection" data-ginger-heading="prepara-il-collegamento-del-portafoglio" aria-hidden="true"></span>

## Prepara il collegamento del portafoglio

Serve un portafoglio hardware compatibile registrato in Ginger, collegato alle chiavi sul dispositivo di firma. Per un'esportazione JSON di portafoglio Coldcard supportata, aggiungi il file con **Import File**. Usa le istruzioni attuali di esportazione del produttore per quel firmware; un file di transazione PSBT non è un file di importazione del portafoglio.

L'esportazione contiene informazioni pubbliche dell'account e un'impronta del dispositivo, non le parole di recupero. Verifica che l'indirizzo di ricezione in Ginger corrisponda al dispositivo prima di depositare fondi. Un account importato con un percorso di derivazione o una passphrase diversi può essere un portafoglio diverso anche quando il dispositivo è lo stesso.

<span id="export-a-transaction" data-ginger-heading="esporta-una-transazione" aria-hidden="true"></span>

## Esporta una transazione

1. Apri il portafoglio hardware in Ginger. In **Wallet Settings** → **General**, attiva **PSBT workflow**.
2. Scegli **Send** e prepara destinazione e importo come al solito. Controlla gli input selezionati, il resto e la commissione.
3. Nell'anteprima, scegli **Save PSBT file** e salva la transazione proposta. L'alternativa **Send Now** segue la firma immediata anziché il salvataggio per la procedura tramite file.
4. Trasferisci il file al dispositivo di firma tramite il metodo supportato, come un supporto rimovibile. Segui le istruzioni del dispositivo ed esamina destinazione, importo, commissione e resto sul suo schermo affidabile.
5. Salva il risultato firmato senza confonderlo con la proposta originale non firmata.

Non approvare una transazione solo perché Ginger l'ha preparata. Il dispositivo deve autorizzare il pagamento previsto. Mantieni le parole di recupero fuori sia dal file PSBT sia dal computer.

<span id="import-and-broadcast" data-ginger-heading="importa-e-trasmetti" aria-hidden="true"></span>

## Importa e trasmetti

Torna al portafoglio hardware in Ginger e scegli **Broadcast**, visibile con la procedura PSBT. La finestra di file **Import Transaction** accetta file di transazione supportati, compresi file PSBT e di transazione. Seleziona il risultato firmato ed esamina la schermata di trasmissione prima di inviarlo alla rete.

Una PSBT non firmata o firmata incompletamente non può essere trasmessa come pagamento valido. Una firma riuscita non garantisce neppure l'accettazione se gli input sono già stati spesi o la commissione non soddisfa più le condizioni della rete. Mantieni disponibile il portafoglio originale, sincronizza e controlla la cronologia prima di creare un altro pagamento.

Una volta trasmessa la transazione, il dispositivo di firma non deve più restare collegato affinché venga confermata. Controlla la voce finale della cronologia e le conferme in Ginger. Eliminare un file firmato non annulla una transazione che un'altra parte potrebbe già trasmettere.

<span id="handle-files-carefully" data-ginger-heading="gestisci-i-file-con-attenzione" aria-hidden="true"></span>

## Gestisci i file con attenzione

Usa nomi distinguibili per proposte e risultati firmati. Non inviare PSBT per email e non caricarle su un decodificatore online per esaminare la tua transazione. Proteggi anche le esportazioni sensibili degli account: una chiave pubblica estesa può rivelare molti indirizzi anche se non può firmare direttamente una spesa.

Questa procedura documenta l'interfaccia del portafoglio hardware pubblicata. Non stabilisce un coordinatore generale multifirma, un'API di firma per sviluppatori o la compatibilità con ogni formato PSBT prodotto da altre applicazioni.
