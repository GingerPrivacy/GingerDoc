---
doc_id: "coinjoin.fees-and-progress"
title: "Commissioni CoinJoin e avanzamento della privacy"
description: "Pianifica il costo completo di CoinJoin, distingui le esenzioni dalle commissioni dalle transazioni gratuite e interpreta i punteggi di privacy Ginger con esempi pratici."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Comprendi prima i normali comandi di avvio e pausa e il fatto che i round completati costano commissioni.

CoinJoin ha un costo e un obiettivo di privacy. Controlla entrambi prima di iniziare: un'esenzione dalla commissione del coordinatore non rende gratuito un round e un indicatore di avanzamento non può misurare tutto ciò che un'altra persona sa di te.

<span id="coordinator-fee-versus-mining-fee" data-ginger-heading="commissione-del-coordinatore-e-commissione-di-mining" aria-hidden="true"></span>

## Commissione del coordinatore e commissione di mining

Con le attuali impostazioni delle commissioni del coordinatore Ginger, ogni input pari o inferiore a 3 000 000 satoshi (0.03 BTC) non paga la commissione del coordinatore. La soglia include esattamente 0.03 BTC. Un input sopra quella soglia paga normalmente lo 0.3% dell'intero valore, non solo della parte oltre 0.03 BTC. La tariffa è 0.003 in forma decimale e le frazioni di satoshi nella commissione calcolata vengono arrotondate per difetto.

La soglia viene controllata separatamente per ogni input, non rispetto al saldo totale del portafoglio o alla somma degli input registrati. Anche i remix idonei possono essere esenti; l'esenzione pubblicizzata da Ginger comprende la spesa diretta di fondi passati attraverso CoinJoin tramite una transazione. Queste ulteriori esenzioni dipendono dal round offerto e dall'ammissibilità dell'input. Ricontrolla la [spiegazione attuale delle commissioni Ginger](https://gingerwallet.io/) prima di partecipare.

Per input senza un'altra esenzione dalla commissione del coordinatore:

| Valore dell'input | Valore in BTC | Commissione del coordinatore |
| --- | --- | --- |
| 2 999 999 satoshi | 0.02999999 BTC | 0 satoshi |
| 3 000 000 satoshi | 0.03 BTC | 0 satoshi |
| 3 000 001 satoshi | 0.03000001 BTC | 9 000 satoshi |
| 4 000 000 satoshi | 0.04 BTC | 12 000 satoshi |

Per esempio, l'input di 0.04 BTC paga 0.00012 BTC (12 000 satoshi), non lo 0.3% del solo 0.01 BTC sopra la soglia. Le commissioni di mining sono aggiuntive, anche per input con commissione del coordinatore pari a zero. Questi esempi spiegano il calcolo configurato, non una quotazione per un round futuro.

Le commissioni di mining compensano i miner per lo spazio della transazione. Dipendono dalla tariffa di commissione e dagli input e output della transazione. Spendere una moneta di piccolo valore può costare una percentuale elevata del suo valore. CoinJoin ripetuti possono creare ciascuno ulteriori costi di mining anche se sono idonei all'esenzione dalla commissione del coordinatore.

Non dividere le monete solo per inseguire un'esenzione senza comprendere le transazioni aggiuntive, le commissioni e i collegamenti pubblici creati.

<span id="account-for-the-complete-cost" data-ginger-heading="tieni-conto-del-costo-completo" aria-hidden="true"></span>

## Tieni conto del costo completo

L'importo speso può includere più della percentuale del coordinatore pubblicizzata. Un CoinJoin richiede anche spazio di transazione e gli importi degli output possono lasciare un piccolo residuo dopo che il client ha allocato il valore disponibile. Quel residuo può contribuire ai proventi del coordinatore o alla commissione di mining della transazione; non è necessariamente una voce di commissione separata mostrata nel portafoglio.

Per un CoinJoin completato, confronta il valore totale dei tuoi input con il valore totale di tutti gli output che possiedi da quella transazione. Includi gli output inviati a un diverso portafoglio di destinazione. Non sottrarre ogni output della transazione condivisa dai soli tuoi input: alcuni di quegli output appartengono agli altri partecipanti.

Il seguente è un esempio illustrativo di conteggio, non una previsione degli importi degli output Ginger o una schermata dell'applicazione:

| Voce | Satoshi |
| --- | ---: |
| Il tuo input soggetto a commissione | 5 000 000 |
| I tuoi output, sommati nei tuoi due portafogli | 4 980 800 |
| Differenza di valore | 19 200 |
| Commissione del coordinatore ipotizzata per questo esempio: 0.3% dell'input | 15 000 |
| Costi di mining attribuiti alla tua partecipazione in questo esempio | 3 600 |
| Differenza residua di allocazione in questo esempio | 600 |

Qui, 15 000 + 3 600 + 600 = 19 200 satoshi. Le ultime tre righe spiegano la stessa differenza; non aggiungere di nuovo quella differenza come altro addebito. Anche la commissione di mining dell'intero round non è una commissione che ogni partecipante paga per intero. Non va dato per scontato che un singolo campo di commissione o una riga di log rappresentino ogni componente della tua differenza di valore.

Se gli output sono andati a un portafoglio hardware, la loro scomparsa dal saldo del portafoglio software è un trasferimento di valore che possiedi ancora. Attendi la sincronizzazione di entrambi i portafogli prima di verificarne i conti. Transazioni non confermate, pagamenti contemporanei e fondi in entrata possono rendere fuorviante un semplice confronto del saldo prima e dopo.

<span id="budget-for-the-whole-journey" data-ginger-heading="pianifica-il-costo-dellintero-percorso" aria-hidden="true"></span>

## Pianifica il costo dell'intero percorso

Includi i passaggi attorno a CoinJoin quando decidi se il risultato valga il costo:

| Passaggio | Costo da considerare |
| --- | --- |
| Prelevare da un exchange | Il suo addebito per il prelievo, che può differire dalla commissione di mining della sua transazione |
| Partecipare a uno o più round | La differenza di valore effettiva per ogni partecipazione completata |
| Spostare fondi a un altro portafoglio | Un'altra commissione di mining se effettui un trasferimento ordinario |
| Spendere in seguito le monete risultanti | Commissioni per input e output di quel pagamento successivo |

Per esempio, una partecipazione che costa 19 200 satoshi seguita da un trasferimento con commissione di 1 200 satoshi costa 20 400 satoshi per quei due passaggi. Un pagamento successivo è una spesa separata. Più output possono darti porzioni più piccole da spendere separatamente, ma spendere quelle porzioni consuma anch'esso spazio di transazione. Quel costo futuro non è già stato pagato creando gli output.

Scegli un importo che puoi permetterti di usare per imparare e controlla il primo risultato completato prima di lasciare continuare round ripetuti. Mantieni un budget personale dei costi; una preferenza temporale CoinJoin o un'impostazione di selezione delle monete non sono un limite garantito al costo totale dell'intero percorso.

<span id="when-ginger-waits-or-refuses-a-round" data-ginger-heading="quando-ginger-attende-o-rifiuta-un-round" aria-hidden="true"></span>

## Quando Ginger attende o rifiuta un round

Il client controlla le condizioni proposte prima di partecipare. Può mostrare **Mining fee rate was too high**, **Coordination fee rate was too high**, **Min input count was too low** o **Server did not give remix fee exemption**. Esamina le condizioni offerte anziché aumentare ciecamente i limiti.

Le preferenze delle commissioni possono anche causare **Awaiting cheaper coinjoins**. Una preferenza temporale significa aspettare condizioni relativamente più economiche, non una prenotazione che garantisca il completamento in un giorno o una settimana. Un round fallito prima della trasmissione non crea di per sé una nuova transazione Bitcoin confermata.

Il normale avvio di CoinJoin in questa versione rifiuta anche un portafoglio i cui fondi soddisfano già l'obiettivo di privacy o una selezione composta solo da monete che lo soddisfano. Scegliere un altro portafoglio di destinazione non aggira questo controllo. Se lo scopo è spostare fondi già privati, valuta un trasferimento ordinario anziché aspettarti che la selezione della destinazione forzi un altro round.

<span id="what-the-privacy-score-can-tell-you" data-ginger-heading="cosa-può-dirti-il-punteggio-di-privacy" aria-hidden="true"></span>

## Cosa può dirti il punteggio di privacy

Ginger tiene traccia delle informazioni di privacy delle monete e le confronta con l'obiettivo del punteggio di anonimato del portafoglio. Il punteggio è una stima locale basata sulle conoscenze delle transazioni del portafoglio. Non è un conteggio di persone verificate indipendentemente né la probabilità che un osservatore possa identificarti.

L'avanzamento complessivo usa un calcolo dei punteggi verso l'obiettivo ponderato per importo. La suddivisione colorata separata del saldo rappresenta invece gli importi nelle categorie di privacy. Sono misure diverse.

Per un esempio semplificato, supponiamo che l'obiettivo sia 5 e il portafoglio abbia solo queste due monete:

| Moneta | Valore | Punteggio locale | Raggiunge l'obiettivo? |
| --- | ---: | ---: | --- |
| A | 1 000 000 satoshi | 5 | Sì |
| B | 3 000 000 satoshi | 3 | No |

Solo il 25% del valore raggiunge l'obiettivo. Per l'avanzamento complessivo, questa versione pondera l'avanzamento oltre il punteggio 1: la moneta A contribuisce con 1 000 000 × 4 e la moneta B con 3 000 000 × 2, rispetto a un massimo di 4 000 000 × 4. Il risultato è 62.5%, mostrato come valore intero 62%. Vedere percentuali diverse in queste due viste non è quindi, da solo, un errore.

Il messaggio **Hurray! All your funds are private!** significa che il portafoglio considera privati i fondi secondo l'obiettivo e i conteggi attuali. Non significa che la cronologia sia scomparsa, che tu sia anonimo su internet o che un pagamento successivo non possa creare un collegamento.

<span id="decide-when-you-have-achieved-your-objective" data-ginger-heading="decidi-quando-hai-raggiunto-il-tuo-obiettivo" aria-hidden="true"></span>

## Decidi quando hai raggiunto il tuo obiettivo

Abbassare un obiettivo può cambiare quali monete siano idonee senza modificare nulla di già pubblicato sulla blockchain. Alzarlo può richiedere più partecipazione e commissioni; non acquista un numero garantito di persone anonime. Ricevere nuovi fondi, combinare monete o ripristinare un portafoglio senza i metadati locali può anche cambiare il risultato visualizzato.

Decidi di chi vuoi limitare le conoscenze: un exchange, un particolare destinatario o qualcuno che segue un indirizzo divulgato. Possono conoscere importi, tempi e identità che Ginger non può vedere. Valuta il prossimo pagamento oltre al punteggio attuale.

Metti in pausa per controllare i round completati, verificare i conti delle monete e valutare come le spenderai. Conserva i metadati locali quando cambi installazione se vuoi mantenere più di quel contesto. Consulta le [impostazioni CoinJoin](/it/coinjoin/settings/) per obiettivo, preferenze delle commissioni e controlli della destinazione.
