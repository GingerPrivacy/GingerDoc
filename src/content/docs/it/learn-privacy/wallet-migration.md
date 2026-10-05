---
doc_id: "learn-privacy.wallet-migration"
title: "Passare a Ginger senza esporre altra cronologia del portafoglio"
description: "Confronta il ripristino delle stesse chiavi Bitcoin, il collegamento hardware a un'altra app e lo spostamento dei fondi verso nuove chiavi senza presumere che le divulgazioni passate scompaiano."
lang: "it"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Livello della guida: Avanzato. Comprendi prima l'uso di nuovi indirizzi di ricezione e il controllo dei pagamenti ordinari.

Cambiare software del portafoglio cambia l'applicazione che usi. Non cambia necessariamente le chiavi Bitcoin, gli indirizzi o le informazioni già conosciute da un servizio precedente. Decidi se stai recuperando l'accesso, cambiando software per comodità o creando una nuova separazione per l'attività futura.

<span id="choose-the-kind-of-move" data-ginger-heading="scegli-il-tipo-di-trasferimento" aria-hidden="true"></span>

## Scegli il tipo di trasferimento

| Scelta | Cosa resta uguale | Cosa cambia |
| --- | --- | --- |
| Ripristinare le stesse parole di recupero, passphrase e account supportato | Le chiavi e gli indirizzi corrispondenti | L'applicazione che li cerca e gestisce; le note locali possono mancare |
| Collegare lo stesso account hardware a Ginger | Le chiavi detenute sull'hardware e gli indirizzi di quell'account | L'applicazione desktop che conserva le informazioni pubbliche dell'account |
| Creare un nuovo portafoglio con nuove chiavi e trasferire i fondi | La cronologia esistente resta sulla blockchain | Chiavi e indirizzi futuri; servono un backup separato e un trasferimento on-chain |

Ripristinare lo stesso portafoglio non sposta i suoi bitcoin, quindi non c'è una commissione di rete per il solo ripristino. Un trasferimento on-chain verso nuove chiavi costa invece una commissione e crea una transazione visibile. Sono operazioni diverse anche se entrambe terminano con un saldo visualizzato in Ginger.

<span id="understand-what-an-xpub-exposes" data-ginger-heading="comprendi-cosa-espone-un-xpub" aria-hidden="true"></span>

## Comprendi cosa espone un xpub

Una chiave pubblica estesa, spesso chiamata xpub, consente al software di derivare un ramo di indirizzi pubblici senza possedere la loro normale autorità di firma. Un xpub di account rivela tipicamente più di un indirizzo di ricezione, compresi indirizzi futuri derivati da quell'account. Il suo ambito dipende da dove si trova nell'albero delle chiavi; non rivela ogni altro account con derivazione hardened. [BIP32: portafogli deterministici gerarchici](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

Una precedente app per portafogli, un servizio di monitoraggio del portafoglio finanziario o uno strumento contabile possono aver ricevuto un xpub o ricerche di indirizzi. Rimuovere quell'app non revoca le copie detenute altrove. Continuare a usare lo stesso account può consentire a quell'osservatore di riconoscere anche attività successive. Tor può nascondere una connessione IP diretta; non può far dimenticare al servizio destinatario le informazioni del portafoglio che hai inviato.

Se non sai cosa abbia ricevuto un servizio, considera questa un'incertezza. Non caricare un xpub su un «controllo privacy» online per indagare.

<span id="restore-access-to-an-existing-software-wallet" data-ginger-heading="ripristina-laccesso-a-un-portafoglio-software-esistente" aria-hidden="true"></span>

## Ripristina l'accesso a un portafoglio software esistente

1. Conserva i backup e le registrazioni originali prima di cambiare installazione. Una migrazione non è un motivo per eliminare gli unici file funzionanti del portafoglio.
2. Usa la procedura di ripristino di Ginger con le parole originali del portafoglio e la passphrase originale esatta. Conferma che il formato del portafoglio, i tipi di indirizzo e l'account siano supportati. Una frase mnemonica valida da sola non stabilisce la compatibilità.
3. Lascia terminare la scansione. Confronta transazioni conosciute o un indirizzo di ricezione dalle registrazioni private prima di concludere che una schermata vuota significhi che il denaro sia perso.
4. Controlla le etichette ripristinate, le impostazioni CoinJoin e le informazioni di privacy. Le parole di recupero recuperano chiavi; non ricreano ogni nota o impostazione memorizzata dall'applicazione precedente.
5. Controlla CoinJoin automatico e la selezione della destinazione prima di lasciare i fondi incustoditi con l'applicazione in esecuzione. Evita di usare due applicazioni per spendere le stesse monete contemporaneamente.

Una passphrase errata può produrre un portafoglio diverso e valido. Non alternare impostazioni casuali, non inviare fondi di prova a un account vuoto senza spiegazione e non dare le parole di recupero a uno sconosciuto dell'assistenza per risolvere la discrepanza.

<span id="use-the-same-hardware-wallet-in-ginger" data-ginger-heading="usa-lo-stesso-portafoglio-hardware-in-ginger" aria-hidden="true"></span>

## Usa lo stesso portafoglio hardware in Ginger

Aggiungi il dispositivo tramite **Hardware Wallet**, segui le richieste PIN/passphrase supportate e verifica un indirizzo di ricezione sul suo schermo. Conferma che Ginger mostri l'account previsto. La normale importazione del dispositivo in questa versione usa SegWit nativo; altro software potrebbe aver mostrato un altro account o tipo di indirizzo.

Collegare l'hardware consente a Ginger di conservare le informazioni pubbliche del portafoglio mentre le chiavi di firma restano sul dispositivo. Non annulla le informazioni già condivise dall'app del produttore. Aprire lo stesso account in un'altra app in sola visualizzazione può divulgare altra cronologia anche se nessuna delle due applicazioni può spendere senza l'hardware.

Non importare le parole di recupero hardware nel computer per aggirare una connessione o un account non supportati. Consulta la procedura supportata del dispositivo se l'account non può essere rappresentato correttamente.

<span id="create-a-new-separation-for-future-activity" data-ginger-heading="crea-una-nuova-separazione-per-lattività-futura" aria-hidden="true"></span>

## Crea una nuova separazione per l'attività futura

Se il tuo obiettivo richiede chiavi diverse, crea e verifica un nuovo portafoglio e backup. Ottieni una nuova destinazione e usa una piccola prova quando la situazione non è urgente. Conferma che il nuovo portafoglio possa ricevere e che tu abbia un percorso di firma o ripristino funzionante prima di spostare il resto previsto.

Controlla gli input di ogni trasferimento. Inviare insieme tutte le vecchie monete può associare attività precedentemente separate. Un normale trasferimento collega anche la cronologia delle transazioni dei suoi input e output. Nuove chiavi da sole non nascondono quel collegamento; una procedura CoinJoin valutata con attenzione può affrontare alcuni obiettivi di privacy dei collegamenti, con limiti di commissioni, ammissibilità e spese successive.

Scegli quando e come smettere di usare i vecchi indirizzi di ricezione. Aggiorna le istruzioni di pagamento che controlli, conserva registrazioni sufficienti a riconoscere pagamenti tardivi e non presumere che un indirizzo precedentemente condiviso smetta di funzionare perché lo hai rimosso da un sito. Conserva il materiale di ripristino dei portafogli che potrebbero ancora ricevere denaro.

<span id="when-the-move-is-urgent" data-ginger-heading="quando-il-passaggio-è-urgente" aria-hidden="true"></span>

## Quando il passaggio è urgente

Un xpub esposto solleva principalmente un problema di privacy. Segreti di firma esposti sollevano un problema immediato di controllo dei fondi. Se un aggressore può già spendere i fondi, dai priorità a una destinazione affidabile con nuove chiavi anziché attendere un processo di privacy elaborato. Cambiare una password dell'applicazione o mettere una frase seme esposta su un nuovo dispositivo hardware non revoca le chiavi copiate.

Dopo il passaggio, controlla gli [esempi di spesa](/it/learn-privacy/spending-after-coinjoin/) e la [condivisione delle informazioni](/it/learn-privacy/information-sharing/). L'obiettivo sostenibile è capire cosa rimane conosciuto ed evitare nuove divulgazioni inutili.
