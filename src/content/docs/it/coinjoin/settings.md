---
doc_id: "coinjoin.settings"
title: "Configura CoinJoin e i portafogli di destinazione"
description: "Comprendi le impostazioni di privacy e costo di CoinJoin in Ginger, le monete escluse e l'invio degli output CoinJoin a un altro portafoglio caricato."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Comprendi prima i normali comandi di avvio e pausa e il fatto che i round completati costano commissioni.

**Coinjoin Settings** si applica al portafoglio selezionato. Cambia un'impostazione alla volta e osservane l'effetto. Impostazioni più aggressive possono aumentare le commissioni o il tempo di attesa senza migliorare la privacy che conta nella tua situazione.

<span id="automatic-participation-and-cost-preferences" data-ginger-heading="partecipazione-automatica-e-preferenze-di-costo" aria-hidden="true"></span>

## Partecipazione automatica e preferenze di costo

| Impostazione | Cosa controlla |
| --- | --- |
| **Automatically start coinjoin** | Avvia la partecipazione quando il portafoglio e fondi adatti sono disponibili. |
| **Stop coinjoin threshold** | Arresta CoinJoin automatico quando il saldo del portafoglio è inferiore all'importo BTC selezionato. È una regola di arresto a livello di portafoglio. Non imposta la soglia di esenzione dalla commissione del coordinatore né l'input minimo accettato. |
| **Coinjoin time preference** | Confronta le commissioni di mining attuali con la mediana del periodo selezionato. Influisce su quando partecipare, non su una scadenza di completamento promessa. |
| **Ignore coinjoin time preference below** | Consente la partecipazione sotto questa soglia della tariffa di commissione anche quando il confronto della preferenza temporale farebbe attendere. |
| **Random Skip** | Seleziona quanto spesso vengono saltati round adatti. Le scelte sono **Disabled**, **Rarely**, **Sometimes** e **Often**. Saltarne di più generalmente significa attendere di più. |

Quando il pannello di controllo CoinJoin segnala un saldo antieconomico, premere avvio può aggirare la soglia di arresto. Questo non elimina le commissioni di transazione. Considera gli importi delle monete disponibili e i costi previsti prima di ignorarla.

<span id="privacy-settings" data-ginger-heading="impostazioni-di-privacy" aria-hidden="true"></span>

## Impostazioni di privacy

**Anonymity score target** è il punteggio interno minimo perché Ginger consideri privata una moneta. L'editor pubblicato accetta numeri interi da 2 a 1000. Alzare l'obiettivo può comportare più attività CoinJoin; non acquista la garanzia che esattamente quel numero di persone indipendenti possa possedere la moneta.

**Single non-private coin restriction** consente solo una moneta con punteggio di anonimato 1 in una registrazione. Questo può ridurre l'associazione diretta creata registrando insieme più monete prima non private, ma può anche rallentare l'avanzamento in un portafoglio con molte di queste monete.

Abbassare l'obiettivo può cambiare immediatamente ciò che l'interfaccia chiama privato senza modificare la blockchain. Tratta gli indicatori di privacy come stime e impostazioni di criterio, non come prova che un osservatore esterno abbia perso ogni informazione.

<span id="exclude-specific-coins" data-ginger-heading="escludi-monete-specifiche" aria-hidden="true"></span>

## Escludi monete specifiche

Apri **Exclude Coins** dal menu del pannello di controllo CoinJoin. Controlla l'elenco e contrassegna le monete che vuoi escludere da CoinJoin. Torna a questo elenco per renderle nuovamente ammissibili. L'esclusione si applica a quelle monete; non è una regola permanente per ogni pagamento futuro allo stesso indirizzo.

Escludere una moneta da CoinJoin non ne blocca la spesa ordinaria e non sostituisce la conservazione su hardware. Se tutte le monete disponibili sono escluse, il pannello di controllo CoinJoin può mostrare **Only excluded funds are available**. Controlla l'elenco prima di cambiare le impostazioni di commissioni o privacy.

<span id="receive-outputs-in-another-wallet" data-ginger-heading="ricevi-gli-output-in-un-altro-portafoglio" aria-hidden="true"></span>

## Ricevi gli output in un altro portafoglio

**Coinjoin to this wallet** sceglie dove vengono ricevuti gli output CoinJoin del portafoglio di origine. Per impostazione predefinita, è lo stesso portafoglio di origine.

1. Carica in Ginger il portafoglio di destinazione previsto. Creane un backup e verifica di controllarne gli indirizzi di ricezione.
2. Senza CoinJoin in corso, apri **Coinjoin Settings** del portafoglio di origine e scegli la destinazione in **Coinjoin to this wallet**.
3. Controlla il nome selezionato prima di avviare. Compaiono solo portafogli caricati e ammissibili; non presumere che un portafoglio semplicemente elencato sul disco sia caricato.
4. Dopo una transazione riuscita, controlla la cronologia sincronizzata del portafoglio di destinazione oltre al saldo di quello di origine.

La destinazione non può essere cambiata durante un CoinJoin attivo. **Questa selezione si reimposta dopo il riavvio di Ginger**, quindi ricontrollala prima di ogni sessione in cui la destinazione è importante. Evita di configurare due portafogli perché si inviino reciprocamente output CoinJoin; le scelte disponibili limitano le configurazioni ricorsive.

La selezione della destinazione pubblicata può includere un portafoglio hardware caricato. L'origine resta il portafoglio software che firma CoinJoin; una destinazione hardware non rende quell'origine un portafoglio offline e non abilita il portafoglio hardware a eseguire CoinJoin autonomamente. Usa solo una destinazione effettivamente offerta dall'applicazione e verificane il backup e il controllo degli indirizzi prima di affidarti a questo percorso.

<span id="experimental-coin-selection" data-ginger-heading="selezione-sperimentale-delle-monete" aria-hidden="true"></span>

## Selezione sperimentale delle monete

La versione espone **(EXPERIMENTAL) Improved Coin Selection**. La sua configurazione è un'interfaccia di regolazione avanzata, non un prerequisito per CoinJoin. I controlli disponibili sono:

| Controllo | Effetto previsto |
| --- | --- |
| **Force to use low privacy coins** | Richiede che la selezione includa una moneta del gruppo con la privacy più bassa. |
| **Can select already private coins** | Consente al selettore di usare monete già sopra l'obiettivo di privacy. Questa partecipazione può comunque comportare commissioni di mining. |
| **Coin privacy difference normalization for score calculation** | Valori più bassi favoriscono selezioni con punteggi di privacy più vicini tra loro. |
| **Amount loss normalization for score calculation** | Valori più bassi favoriscono selezioni con una perdita relativa di importo inferiore. |
| **Target coin number per wallet bucket** | Influisce sulla selezione dai gruppi di importi di monete sovrarappresentati. |
| **Use the Old Coin Selector for fallback** | Confronta i risultati di selezione vecchio e nuovo e sceglie tra essi. |

Mantieni i valori iniziali se non comprendi il compromesso che stai modificando. Sono preferenze di selezione; non sono un limite esatto alle commissioni totali né una promessa sul numero di output prodotti da un round.

<span id="when-another-round-cannot-start" data-ginger-heading="quando-un-altro-round-non-può-iniziare" aria-hidden="true"></span>

## Quando un altro round non può iniziare

In questa versione, il normale avvio di CoinJoin rifiuta un portafoglio i cui fondi soddisfano già l'obiettivo di privacy e rifiuta anche una selezione disponibile composta solo da monete private. Selezionare un diverso portafoglio di destinazione non aggira questa regola. Il pannello di controllo CoinJoin può nascondere il comando di avvio manuale quando tutti i fondi sono privati. Non fare affidamento sull'esclusione di ogni moneta non privata per poi forzare un round al solo scopo di inoltrare le monete private rimanenti.

Scegli la destinazione prima di avviare una partecipazione ammissibile oppure valuta un trasferimento ordinario di fondi già privati. Abbassare i requisiti di privacy o includere fondi non correlati solo per avviare un round può cambiare il risultato di privacy e il costo.
