---
doc_id: "learn-self-custody.basics"
title: "Autocustodia Bitcoin: backup, passphrase e portafogli hardware"
description: "Scopri chi può spendere i tuoi bitcoin, cosa rende completo un backup per il ripristino e come differiscono i portafogli software e hardware in Ginger."
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Livello della guida: Per iniziare. I passaggi essenziali vengono prima; i riferimenti avanzati sono approfondimenti facoltativi.

Autocustodia significa che possiedi le informazioni necessarie a spendere i tuoi bitcoin. Approvi un pagamento senza chiedere a un fornitore di account di rilasciare il denaro. In cambio, devi proteggere quelle informazioni, conservare un backup utilizzabile e controllare attentamente ogni pagamento.

<span id="keys-records-and-recovery" data-ginger-heading="chiavi-registrazioni-e-ripristino" aria-hidden="true"></span>

## Chiavi, registrazioni e ripristino

La rete Bitcoin mantiene un registro pubblico delle transazioni. Il portafoglio usa chiavi segrete per autorizzare la spesa delle porzioni che controlli. Installare l'applicazione su un computer sostitutivo non ricrea quei segreti; per questo conta il backup per il ripristino.

Per un portafoglio software Ginger, le parole di recupero e la passphrase originale ricreano le chiavi. I file locali del portafoglio possono conservare contesto aggiuntivo come etichette e impostazioni. Un autenticatore, il PIN di un dispositivo hardware e un file copiato dal computer hanno scopi diversi; nessuno va considerato un sostituto del backup delle parole.

<span id="the-passphrase-changes-the-wallet" data-ginger-heading="la-passphrase-cambia-il-portafoglio" aria-hidden="true"></span>

## La passphrase cambia il portafoglio

Ginger usa una passphrase BIP39 insieme alle parole di recupero. Una passphrase diversa produce chiavi diverse. Per questo un ripristino può completarsi con successo e mostrare comunque un portafoglio vuoto se hai digitato male la passphrase originale. Il [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) definisce questo rapporto.

Annota se ne hai usata una e conservala accuratamente. Scegli una protezione che puoi recuperare, anziché un segreto complesso che esiste solo nella memoria. Conserva istruzioni di ripristino che consentano al tuo io futuro di distinguere la passphrase del portafoglio dall'accesso al computer o dal codice dell'autenticatore.

<span id="software-versus-hardware" data-ginger-heading="software-e-hardware" aria-hidden="true"></span>

## Software e hardware

| Configurazione | Dove avviene la firma | Responsabilità pratica |
| --- | --- | --- |
| Portafoglio software Ginger | Sul computer usando il segreto disponibile | Proteggere il computer e le informazioni di ripristino; deve poter firmare per CoinJoin automatico |
| Portafoglio hardware usato tramite Ginger | Sul dispositivo per le operazioni supportate | Verificare i dettagli sul dispositivo e conservare il backup per il ripristino previsto dal produttore |
| Portafoglio in sola visualizzazione senza un firmatario | Non può autorizzare autonomamente una spesa | Proteggere i suoi dati pubblici sensibili per la privacy e mantenere l'accesso a un firmatario separato |

Un portafoglio hardware può ridurre l'esposizione delle chiavi al malware del computer, ma puoi comunque autorizzare un pagamento malevolo se non controlli lo schermo del dispositivo. Importare la sua frase seme in un portafoglio sul computer cambia la configurazione di sicurezza: quelle chiavi ora sono esposte a quel computer.

<span id="recovery-is-part-of-the-setup" data-ginger-heading="il-ripristino-fa-parte-della-configurazione" aria-hidden="true"></span>

## Il ripristino fa parte della configurazione

Prima di fare affidamento su un portafoglio, assicurati di poter trovare e comprendere il suo backup. Per un portafoglio software Ginger accessibile, **Verify Recovery Words** controlla le parole che fornisci. Mantieni disponibile anche la passphrase originale. Per un portafoglio hardware, usa l'apposita procedura di controllo del backup del produttore senza digitare la frase seme sul computer.

Conserva più dei file dell'applicazione. I programmi di installazione scaricati possono essere ottenuti di nuovo; un segreto mancante non può essere recuperato dal sito del progetto. Pensa a guasti del disco, perdita del dispositivo e accesso al luogo del backup. Le [indicazioni sulla sicurezza del portafoglio](https://bitcoin.org/en/secure-your-wallet) di Bitcoin.org trattano backup e protezione dei dispositivi come pratiche complementari.

<span id="evaluate-a-wallet-with-evidence" data-ginger-heading="valuta-un-portafoglio-con-elementi-verificabili" aria-hidden="true"></span>

## Valuta un portafoglio con elementi verificabili

Usa versioni ufficiali, verifica le firme e leggi i limiti delle funzioni che intendi usare. Il codice aperto rende possibile l'ispezione; non dimostra che ogni file binario o dipendenza sia stato sottoposto ad audit. Elenchi esterni come la [voce di Ginger su Bitcoin.org](https://bitcoin.org/en/wallets/desktop/windows/ginger/) e la [pagina Ginger di WalletScrutiny](https://walletscrutiny.com/desktop/gingerwallet/) offrono ulteriore contesto. Controllane ambito e date anziché considerarli una garanzia sulla versione installata.

Ginger riunisce ripristino del portafoglio software, integrazione hardware e strumenti di privacy in una procedura desktop. Approfondimento avanzato facoltativo: [crea una routine di sicurezza che consenta il ripristino](/it/learn-self-custody/security-routine/), comprese le risposte all'esposizione di indirizzi, dati del portafoglio o chiavi.
