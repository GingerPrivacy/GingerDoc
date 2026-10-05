---
title: "Ginger Wallet e Sparrow Wallet: privacy, controllo e compromessi"
description: "Confronta Ginger e Sparrow per CoinJoin, privacy di rete, portafogli hardware, multifirma, controllo delle transazioni e commissioni per scegliere ciò che fa per te."
doc_id: "compare.ginger-vs-sparrow"
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet e Sparrow Wallet sono portafogli desktop Bitcoin a codice aperto che consentono di detenere le proprie chiavi. Entrambi supportano pagamenti ordinari, portafogli hardware e selezione consapevole delle monete.

**Ginger offre CoinJoin con una connessione al coordinatore già configurata. Sparrow offre una gamma più ampia di configurazioni del portafoglio e strumenti per esaminare e firmare transazioni, compresa la multifirma.** La scelta dipende dalla procedura necessaria e dalle responsabilità che sei disposto ad assumere.

Ultimo controllo: **14 settembre 2026**. Versioni considerate: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) e [Sparrow 2.5.4](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4). Questo confronto riguarda le procedure documentate di queste versioni; non misura velocità, affidabilità o anonimato.

<span id="at-a-glance" data-ginger-heading="a-colpo-docchio" aria-hidden="true"></span>

## A colpo d'occhio

| Domanda | Ginger Wallet | Sparrow Wallet |
| --- | --- | --- |
| Chi controlla le chiavi di firma? | Tu, in un portafoglio software o dispositivo hardware supportato. | Tu, tramite i firmatari software o hardware che configuri. |
| Il mixing CoinJoin coordinato è integrato? | Sì, con una connessione al coordinatore fornita. | Nessuna integrazione attuale di mixing Whirlpool; restano altri strumenti di privacy. |
| Come ottiene la cronologia del portafoglio? | Filtri compatti e blocchi elaborati localmente; Tor è attivo per impostazione predefinita. | Server Electrum pubblico, tuo nodo Bitcoin Core o server Electrum privato; Tor è supportato. |
| Posso usare un portafoglio hardware? | Sì, con dispositivi supportati e una procedura PSBT tramite file. | Sì, con procedure supportate USB, codici QR e schede SD. |
| Posso configurare la multifirma? | Nessuna configurazione generale multifirma nell'interfaccia documentata. | Sì, con più firmatari e una soglia di firma scelta. |
| Posso scegliere singole monete? | Sì, tramite Manual Control. | Sì, con esame e modifica dettagliati della transazione. |
| Quali commissioni dovrei aspettarmi? | Commissioni di mining; CoinJoin può comportare anche commissioni del coordinatore e piccoli residui. | Commissioni di mining; input o output aggiuntivi possono aumentare i costi. |

Le sezioni seguenti spiegano queste differenze e rimandano alle guide pertinenti.

<span id="privacy-and-coinjoin-different-tools-for-different-links" data-ginger-heading="privacy-e-coinjoin-strumenti-diversi-per-collegamenti-diversi" aria-hidden="true"></span>

## Privacy e CoinJoin: strumenti diversi per collegamenti diversi

Un saldo bitcoin individuale consiste in monete separate, chiamate anche UTXO. Spenderne più insieme può associare le loro storie. CoinJoin combina input dei partecipanti in una transazione per rendere più difficile dedurre alcuni legami di proprietà.

La [configurazione pubblicata](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) di Ginger include la connessione al proprio coordinatore. Dopo aver creato il backup di un portafoglio software e ricevuto fondi confermati, puoi controllare i [comandi CoinJoin](/it/using-ginger/coinjoin/) e avviare la partecipazione. Il coordinatore organizza round senza detenere le tue chiavi di firma. Disponibilità, fondi ammissibili, commissioni e partecipazione sufficiente influiscono comunque sul completamento di un round.

Sparrow ha rimosso il proprio client Whirlpool nella [versione 1.9.0](https://github.com/sparrowwallet/sparrow/releases/tag/1.9.0). Le vecchie istruzioni per il mixing tramite Whirlpool dentro Sparrow non descrivono la versione attuale.

Sparrow offre ancora modi per rendere meno rivelatrice la spesa. L'opzione di transazione **Privacy** può costruire una transazione Stonewall con un output aggiuntivo pari all'importo del pagamento. Tutti gli input appartengono al tuo portafoglio, quindi questo crea ambiguità senza mescolare fondi con altri partecipanti. Richiede monete adatte, fondi sufficienti e tipi di indirizzo corrispondenti; input e output aggiuntivi possono aumentare le commissioni di mining. Sparrow supporta anche codici di pagamento BIP47 per derivare nuovi indirizzi di pagamento. Consulta [Spending Privately](https://sparrowwallet.com/docs/spending-privately.html).

Entrambi i portafogli supportano anche l'invio PayJoin in procedure compatibili. PayJoin coinvolge un destinatario compatibile nella costruzione di un pagamento, separatamente dal round di mixing di un coordinatore. Ginger richiede un portafoglio software per questo. Consulta la [guida PayJoin di Ginger](/it/payments/payjoin-message-signing/) e gli [aggiornamenti PayJoin di Sparrow](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4).

Nessuno di questi strumenti cancella le registrazioni di un exchange o rende privata la blockchain. Combinazioni successive di monete, riutilizzo degli indirizzi o informazioni condivise con un destinatario possono rivelare nuovi collegamenti. Consulta [fiducia e limiti di CoinJoin](/it/learn-coinjoin/trust-and-limits/).

<span id="network-privacy-who-learns-about-your-wallet" data-ginger-heading="privacy-di-rete-chi-scopre-informazioni-sul-portafoglio" aria-hidden="true"></span>

## Privacy di rete: chi scopre informazioni sul portafoglio?

Ginger usa filtri compatti dei blocchi per identificare blocchi potenzialmente pertinenti, poi elabora localmente i dati scaricati dei blocchi. Questo riduce la necessità di divulgare un elenco di indirizzi del portafoglio a un server pubblico. Tor è incluso e attivo per impostazione predefinita per le normali connessioni di rete. Ginger offre anche un [nodo Bitcoin Core facoltativo](/it/settings-network/full-node-fees/). Leggi [Tor e sincronizzazione](/it/using-ginger/tor/) per il modello di connessione e i suoi limiti.

Sparrow consente di scegliere un server Electrum pubblico, un tuo nodo Bitcoin Core o un server Electrum privato. Un server pubblico è comodo, ma il suo operatore può associare le ricerche del portafoglio che riceve e conoscere la tua attività. La [guida introduttiva](https://sparrowwallet.com/docs/quick-start.html) di Sparrow spiega questo compromesso; la [guida Bitcoin Core](https://sparrowwallet.com/docs/connect-node.html) tratta il collegamento del proprio nodo.

Usare un'infrastruttura che controlli evita di divulgare quelle ricerche a un operatore estraneo di un server pubblico. Sparrow supporta anche connessioni Tor, anche verso l'indirizzo onion di un server privato. La [guida alle buone pratiche](https://sparrowwallet.com/docs/best-practices.html) tratta queste configurazioni.

Tor aiuta a proteggere metadati di connessione come l'indirizzo IP. Non nasconde i contenuti delle richieste al servizio che le riceve. Eseguire un tuo nodo non rimuove neppure gli indizi di proprietà da una transazione già sulla blockchain. Scegli insieme impostazioni di rete e pratiche di spesa.

<span id="hardware-wallets-and-multisig" data-ginger-heading="portafogli-hardware-e-multifirma" aria-hidden="true"></span>

## Portafogli hardware e multifirma

Entrambe le applicazioni possono preparare pagamenti mentre un dispositivo hardware supportato conserva le chiavi di firma. Sparrow documenta [portafogli hardware collegati via USB](https://sparrowwallet.com/docs/connected-wallet.html), [firma tramite codici QR](https://sparrowwallet.com/docs/airgapped-wallet-qr.html) e [firma tramite schede SD](https://sparrowwallet.com/docs/airgapped-wallet-sdcard.html). Il metodo disponibile dipende da dispositivo e firmware.

Ginger supporta normali pagamenti hardware e una [procedura tramite file PSBT](/it/hardware-wallets/psbt/). Una PSBT contiene una transazione proposta e le informazioni necessarie a firmarla separatamente. La sua presenza non stabilisce il supporto per ogni configurazione di portafoglio: la [guida hardware](/it/using-ginger/hardware-wallet/) di Ginger descrive i limiti dell'interfaccia pubblicata.

Sparrow consente di creare portafogli multifirma, in cui la spesa richiede un numero scelto di firme, per esempio due su tre. Questo aggiunge flessibilità nella distribuzione dell'autorità di firma, insieme a maggiori responsabilità di configurazione e backup. Ginger non offre una configurazione generale multifirma comparabile. Per le scelte di politica del portafoglio di Sparrow, consulta la [guida alla creazione del portafoglio](https://sparrowwallet.com/docs/quick-start.html#creating-your-first-wallet).

CoinJoin di Ginger usa un portafoglio software per firmare gli input partecipanti. Un portafoglio hardware supportato e caricato in Ginger può invece ricevere gli output. Non significa che il suo dispositivo abbia firmato gli input o che gli output abbiano raggiunto il tuo obiettivo di privacy. La selezione della destinazione si reimposta al riavvio. Segui la [guida alla conservazione offline di Ginger](/it/hardware-wallets/exchange-to-cold-storage/) per le condizioni e non inserire mai le parole di recupero hardware sul computer per abilitare CoinJoin.

<span id="transaction-control-and-everyday-use" data-ginger-heading="controllo-delle-transazioni-e-uso-quotidiano" aria-hidden="true"></span>

## Controllo delle transazioni e uso quotidiano

Entrambi i portafogli consentono di etichettare fondi e scegliere monete particolari per un pagamento. In Ginger, **Wallet Coins** mostra singole monete, mentre **Send** → **Manual Control** consente di selezionare fondi ed esaminare il pagamento risultante. Consulta [controllo delle monete e cronologia](/it/payments/coin-control-history/).

Il diagramma e l'editor delle transazioni di Sparrow espongono input, output, commissioni e dettagli di firma, con strumenti per esaminare la transazione prima di trasmetterla. La [guida alle funzioni](https://sparrowwallet.com/features/) descrive questo livello di controllo. Può essere adatto a chi lavora regolarmente con PSBT o vuole esaminare come viene assemblato un pagamento.

In entrambi i portafogli, controlla destinatario, input selezionati, resto e commissione prima di autorizzare un pagamento. La selezione manuale può comunque collegare fondi non correlati se li spendi insieme.

<span id="fees-and-service-conditions" data-ginger-heading="commissioni-e-condizioni-del-servizio" aria-hidden="true"></span>

## Commissioni e condizioni del servizio

I normali pagamenti on-chain in entrambi i portafogli hanno commissioni di mining. Dimensione della transazione e tariffa scelta influiscono sul costo; usare gli output di privacy aggiuntivi di Sparrow può rendere più grande un pagamento.

Secondo le [impostazioni documentate del coordinatore](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi/WabiSabi/Backend/WabiSabiConfig.cs) di Ginger, un input pari o inferiore a **0.03 BTC** è esente dalla commissione del coordinatore. Un input maggiore paga normalmente lo **0.3% dell'intero valore**, con esenzioni per remix idonei. La soglia si applica per input, anziché al saldo totale del portafoglio.

Per esempio, un input soggetto a commissione di 0.10 BTC comporta una commissione del coordinatore di 30 000 satoshi, più costi di mining. CoinJoin può anche lasciare un piccolo residuo non restituito nell'allocare gli output. Controlla le condizioni effettive del round e la [spiegazione dei costi completi](/it/using-ginger/annonset/); queste impostazioni non sono una quotazione per round futuri. I pagamenti ordinari di Sparrow non acquistano un servizio equivalente di mixing coordinato, quindi le sole commissioni di mining non sono un confronto equivalente del prezzo di CoinJoin.

L'operatore del coordinatore Ginger, InvisibleBit LLC, pubblica restrizioni riguardanti localizzazione negli Stati Uniti e nazionalità. I suoi termini permettono anche controlli degli input da parte di terzi e rifiuto di monete particolari. Controlla i [termini attuali del servizio](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt). Conservare le chiavi non garantisce l'ammissione a un round. Con Sparrow, considera privacy e disponibilità del nodo o server usato.

<span id="which-fits-your-needs" data-ginger-heading="quale-risponde-alle-tue-esigenze" aria-hidden="true"></span>

## Quale risponde alle tue esigenze?

**Ginger merita considerazione se la priorità è CoinJoin con una connessione al coordinatore fornita**, e commissioni e condizioni del servizio rispondono alle tue esigenze. Parti da [per iniziare](/it/getting-started/) e controlla le impostazioni CoinJoin dopo aver predisposto il backup.

**Sparrow merita considerazione se la priorità è la multifirma, una particolare procedura di firma hardware o il controllo dettagliato delle transazioni.** Scegli consapevolmente la connessione al server e verifica il supporto della tua configurazione esatta del portafoglio.

I due possono anche svolgere ruoli diversi. Potresti usare Ginger per CoinJoin e Sparrow per gestire un portafoglio hardware separato. Un trasferimento ordinario tra essi costa una commissione di mining e lascia una transazione visibile; combinare gli output può collegarli nuovamente. La destinazione diretta degli output CoinJoin di Ginger deve essere un portafoglio supportato e caricato in Ginger, non semplicemente uno aperto in Sparrow. Conserva backup indipendenti e controlla [spendere dopo CoinJoin](/it/learn-privacy/spending-after-coinjoin/) prima di combinare fondi.
