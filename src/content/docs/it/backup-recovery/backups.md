---
doc_id: "backup-recovery.backups"
title: "Crea un backup del portafoglio Ginger"
description: "Conserva e verifica le parole di recupero e la passphrase originale necessarie a ripristinare un portafoglio software Ginger dopo la perdita del computer."
lang: "it"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Livello della guida: Per iniziare. I passaggi essenziali vengono prima; i riferimenti avanzati sono approfondimenti facoltativi.

Per un portafoglio software Ginger, conserva le parole di recupero e la passphrase originale esatta, se ne hai usata una. Questi dati consentono di recuperare l'accesso dopo aver perso il computer. Un portafoglio hardware usa la propria procedura di backup del dispositivo; mantieni le sue parole fuori dal computer.

<span id="the-backup-you-need-first" data-ginger-heading="il-backup-necessario-per-iniziare" aria-hidden="true"></span>

## Il backup necessario per iniziare

1. Annota le parole nell'ordine visualizzato e mantienile private.
2. Annota la passphrase esatta oppure il fatto che il portafoglio sia stato creato senza passphrase. Ginger non può reimpostarla.
3. Conserva il backup in un luogo raggiungibile dopo la perdita del computer, impedendo agli altri di leggerlo.
4. Verifica il backup mentre il portafoglio è ancora accessibile.

Il nome del portafoglio non è un segreto di ripristino. Un codice dell'autenticatore o un PIN hardware non sostituiscono le parole e la passphrase originale.

<span id="store-recovery-information-safely" data-ginger-heading="conserva-le-informazioni-di-ripristino-in-sicurezza" aria-hidden="true"></span>

## Conserva le informazioni di ripristino in sicurezza

Scrivi le parole chiaramente e nell'ordine originale. Conservale dove potrai recuperarle dopo aver perso il computer, impedendo ad altre persone di leggerle. Valuta più di una copia resistente se un incendio, l'acqua o un unico luogo inaccessibile renderebbero inutile il backup. Tieni un inventario dei luoghi in cui si trovano le copie, senza elencare le parole in una normale nota nel cloud.

Rendi recuperabile anche una passphrase non vuota. Affidarsi solo alla memoria può fallire. Conservarla separatamente riduce il rischio che un'unica scoperta riveli tutto, ma l'organizzazione deve restare comprensibile a te o a una persona che autorizzi intenzionalmente. Non inventare un sistema fatto in casa che divida le parole in frammenti senza sapere come ricostruirlo.

Una password dell'applicazione, un PIN del dispositivo, un codice dell'autenticatore e una passphrase BIP39 non sono intercambiabili. Etichetta chiaramente le istruzioni del backup senza rivelare i segreti a un lettore non autorizzato.

<span id="choose-something-durable-and-readable" data-ginger-heading="scegli-un-supporto-resistente-e-leggibile" aria-hidden="true"></span>

## Scegli un supporto resistente e leggibile

La carta può essere danneggiata da fuoco, acqua o scolorimento. Il metallo può resistere ad alcuni danni, ma richiede comunque protezione da chi potrebbe leggerlo. Controlla che il backup resti leggibile e accessibile.

Evita fotografie, normali note nel cloud e stampanti per le parole di recupero: possono lasciare copie che non controlli. Se conservi più di una copia, proteggi e tieni traccia di ciascuna. Non dividere le parole in un rompicapo improvvisato che potresti non riuscire a ricostruire.

<span id="check-the-backup-before-you-need-it" data-ginger-heading="controlla-il-backup-prima-che-ti-serva" aria-hidden="true"></span>

## Controlla il backup prima che ti serva

Per un portafoglio software aperto, usa **Wallet Settings** → **Tools** → **Verify Recovery Words**, poi **Verify**. Inserisci le parole dal backup. Un controllo riuscito è un elemento utile per verificare che le parole appartengano a quel portafoglio. Assicurati anche che la passphrase annotata sia corretta e di poter trovare i file che intendi conservare.

Se le parole non superano la verifica, controlla privatamente ortografia e ordine. Se puoi ancora spendere ma non riesci a ottenere un backup utilizzabile per il ripristino, crea un nuovo portafoglio con un backup verificato e trasferisci i fondi con attenzione. Non eliminare il vecchio portafoglio durante l'indagine.

Crea nuovamente un backup dei metadati locali dopo modifiche importanti alle etichette o alle impostazioni. Ricevere altri bitcoin normalmente non richiede nuove parole di recupero, mentre un nuovo portafoglio o una passphrase diversa sì.

<span id="what-about-labels-and-computer-files" data-ginger-heading="e-le-etichette-e-i-file-sul-computer" aria-hidden="true"></span>

## E le etichette e i file sul computer?

Le parole di recupero non ripristinano tutte le etichette, le impostazioni o le registrazioni degli ordini presso i fornitori. I backup automatici locali si trovano sullo stesso computer, quindi non proteggono dalla perdita dell'intero computer.

Riferimento avanzato facoltativo: [file del portafoglio, metadati e dettagli della passphrase](/it/backup-recovery/backup-files/). Spiega le copie dei file e i file relativi alla 2FA separatamente dal backup essenziale delle parole.
