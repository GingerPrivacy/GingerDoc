---
title: "Ginger Wallet és Wasabi Wallet: beállítás, díjak és kompromisszumok"
description: "Hasonlítsd össze a Ginger és Wasabi koordinátorbeállítását, CoinJoin-költségeit, hardverpénztárcás folyamatait és adatvédelmi korlátait a megfelelő választáshoz."
doc_id: "compare.ginger-vs-wasabi"
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

A Ginger Wallet és Wasabi Wallet nyílt forráskódú asztali Bitcoin-pénztárcák, amelyek saját kulcskezelést és CoinJoint tesznek lehetővé. CoinJoinnal kezdőknek a fő gyakorlati különbség a koordinátor beállítása és díja.

**A Ginger előre beállított koordinátorkapcsolattal érkezik. A Wasabiban CoinJoin előtt koordinátort kell beállítanod.** A Ginger koordinátora általában 0.3%-ot számít fel a 0.03 BTC feletti díjköteles bemenetekre, az alábbi mentességekkel. A jelenlegi Wasabi csak koordinátori díj nélküli köröket fogad. Mindkettőnél vannak bányászati költségek.

Utoljára ellenőrizve: **2026. szeptember 7.** Verziók: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) és [Wasabi v2.8.2](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.8.2). Ez az összehasonlítás dokumentált folyamatokról szól, nem sebesség-, megbízhatósági vagy anonimitásmérés.

<span id="at-a-glance" data-ginger-heading="gyors-áttekintés" aria-hidden="true"></span>

## Gyors áttekintés

| Kérdés | Ginger Wallet | Wasabi Wallet |
| --- | --- | --- |
| Ki kezeli az aláírókulcsokat? | Te; a koordinátor nem tart neked letétkezelt pénztárcaegyenleget. | Te; a CoinJoin saját kulcskezelésű folyamat. |
| Mit kell beállítani CoinJoinhoz? | A koordinátorkapcsolat adott; indítás előtt nézd át a pénztárcabeállításokat. | Válassz és állíts be kompatibilis koordinátort, majd nézd át a pénztárcabeállításokat. |
| Van koordinátori díj? | Általában a díjköteles bemenet teljes értékének 0.3%-a; a legfeljebb 0.03 BTC-s bemenetek és megfelelő remixelések mentesek. | A jelenlegi kliens díj nélküli köröket fogad. |
| Lehet más költség? | Igen: bányászati díj és esetleg vissza nem adott kis maradék. | Igen: bányászati díj és esetleg vissza nem adott kis maradék. |
| Hardveren tartott kulcs aláírhat CoinJoin-bemenetet? | E kiadás szokásos hardveres folyamatán keresztül nem. | A jelenlegi hardveres folyamaton keresztül nem. |
| Mehetnek CoinJoin-kimenetek hardveres tárolásra? | Igen, kimeneti célként betöltött támogatott hardverpénztárcával. | Igen, CoinJoin-to-wallet funkcióval, támogatott betöltött pénztárcával. |

Az alábbi szakaszok a különbségek feltételeit magyarázzák, és hivatkoznak a kapcsolódó dokumentációra.

<span id="coordinator-setup-one-less-decision-with-ginger" data-ginger-heading="koordinátorbeállítás-egy-döntéssel-kevesebb-a-gingerben" aria-hidden="true"></span>

## Koordinátorbeállítás: egy döntéssel kevesebb a Gingerben

A koordinátor a résztvevő pénztárcák között CoinJoin-kört szervez. A pénztárcaalkalmazástól külön szolgáltatás, és nincs szüksége a helyreállító szavaidra vagy privát kulcsaidra.

A Ginger [kiadott konfigurációja](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) koordinátorkapcsolatot ad. Szoftverpénztárca létrehozása és mentése után áttekintheted a CoinJoin-beállításokat, és koordinátorcím keresése nélkül indulhatsz. Lásd a [CoinJoin használatát a Gingerben](/hu/using-ginger/coinjoin/).

A Wasabi [CoinJoin-útmutatója](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html) beállított koordinátort igényel részvétel előtt. Támogat kézi indítást és választható automatikus részvételt. Koordinátorválasztáskor az üzemeltető elérhetőségét és szabályzatait is mérlegelni kell.

A Ginger gyakorlati előnye itt a rövidebb beállítási út. Az adott kapcsolat nem garantál azonnali kört: továbbra is kell visszaigazolt pénz, elfogadható díj, elérhető szolgáltatás és elég részt vevő bemenet.

<span id="privacy-with-future-use-in-mind" data-ginger-heading="adatvédelem-a-jövőbeli-használatra-gondolva" aria-hidden="true"></span>

## Adatvédelem a jövőbeli használatra gondolva

Lehet, hogy ma javítanád a Bitcoin-adatvédelmet, később pedig tőzsdét használnál. CoinJoinban az UTXO-id más résztvevők bemeneteivel közös tranzakcióban vannak. E kapcsolatok számíthatnak, amikor egy letétkezelő szolgáltatás vizsgálja a befizetésedet.

A Ginger koordinátora szűri a részt vevő bemeneteket, és kizárja a kockázati ellenőrzésein elbukókat. A cél a más résztvevők megjelölt bemeneteihez kapcsolódó kitettség korlátozása; ez a bitcoin későbbi használatakor felmerülő további vizsgálat egyik lehetséges forrása.

Wasabinál a választott koordinátortól függ, alkalmaz-e hasonló szűrést. Minden fogadó szolgáltatás saját elfogadási döntést hoz.

<span id="fees-compare-the-complete-cost" data-ginger-heading="díjak-a-teljes-költséget-hasonlítsd-össze" aria-hidden="true"></span>

## Díjak: a teljes költséget hasonlítsd össze

<span id="gingers-coordinator-fee" data-ginger-heading="a-ginger-koordinátori-díja" aria-hidden="true"></span>

### A Ginger koordinátori díja

A mentességi küszöb **bemenetenként** érvényes; a bemenetet érmének vagy UTXO-nak is nevezik. Nem a pénztárcaegyenleg vagy a regisztrált összeg korlátja.

A jelenlegi koordinátorbeállítások szerint:

- A **0.03 BTC vagy kisebb** bemenet nem fizet koordinátori díjat.
- A nagyobb bemenet általában **teljes értékének 0.3%-át** fizeti.
- A megfelelő remixelések is mentesülhetnek a bemeneti alkalmasság és a kínált kör függvényében.

Más mentesség nélküli bemenetnél:

| Bemeneti érték | Koordinátori díj | Bányászati díj |
| --- | --- | --- |
| 0.03 BTC | 0 satoshi | Hozzáadódik |
| 0.10 BTC | 0.0003 BTC, azaz 30 000 satoshi | Hozzáadódik |

A példák a számítást magyarázzák, nem jövőbeli körök ajánlatai. A teljes szabályok és további példák a [CoinJoin-díjak és adatvédelmi előrehaladás](/hu/using-ginger/annonset/) útmutatóban vannak.

<span id="wasabis-coordinator-fee-policy" data-ginger-heading="a-wasabi-koordinátoridíj-szabályzata" aria-hidden="true"></span>

### A Wasabi koordinátoridíj-szabályzata

A Wasabi a 2.2.0.0 verzió óta csak koordinátori díj nélküli köröket fogad. A bányászati díj továbbra is fizetendő. Dokumentációja ritka, CoinJoinonként legfeljebb 10 000 satoshis kimenetelosztási maradékot is leír, amely a koordinátorhoz kerül. Lásd [a Wasabi díjmagyarázatát](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html#fees).

<span id="budget-beyond-the-headline-percentage" data-ginger-heading="a-kiemelt-százalékon-túl-is-tervezz" aria-hidden="true"></span>

### A kiemelt százalékon túl is tervezz

A Ginger is hagyhat kis maradékot a kimeneti összegek elosztásakor. Mindkét pénztárcánál a részt vevő bemenetek értékét a kész tranzakció **összes saját kimenetével** vesd össze, más pénztárcába fogadottakkal is. Ismételt körök és későbbi átutalások további költséget adhatnak.

A nulla koordinátori díj az összehasonlítás egy eleme. A méret, bányászati díjráta, kimenetelosztás és kész körök száma befolyásolja a tényleges költést. A Ginger [költségútmutatója](/hu/using-ginger/annonset/) magyarázza az összegek egyeztetését.

<span id="hardware-wallets-signing-inputs-and-receiving-outputs-are-different" data-ginger-heading="hardverpénztárcák-eltérő-a-bemenetaláírás-és-kimenetfogadás" aria-hidden="true"></span>

## Hardverpénztárcák: eltérő a bemenetaláírás és kimenetfogadás

Mindkét alkalmazás támogat hardverpénztárcát szokásos fogadáshoz és fizetésaláíráshoz. Dokumentált CoinJoin-folyamataik szoftverpénztárcát igényelnek a részt vevő bemenetek aláírására; a hardvereszköz nem lehet ez az aláíró forrás. Lásd a [Ginger hardvertámogatását](/hu/using-ginger/hardware-wallet/) és [a Wasabi hardverútmutatóját](https://docs.wasabiwallet.io/using-wasabi/ColdWasabi.html).

A kapott UTXO-k fogadása külön művelet. Mindkettő enged másik támogatott, betöltött pénztárcát kimeneti célként, hardverpénztárcát is. Ezzel elkerülhető a kör utáni külön átutalás. Ez **nem** jelenti a hardvereszköz bemenetaláírását vagy azt, hogy érkezés előtt a kimenetek szükségképpen elérték a kívánt adatvédelmi célt.

A Gingerben újraindítás után ellenőrizd újra a célt, mert a választás alaphelyzetbe áll. Külön mentést tarts a szoftveres forráshoz és hardveres célhoz. CoinJoin bekapcsolásához soha ne add meg a hardver helyreállító szavait az asztali alkalmazásban.

Kövesd [a Ginger hidegtárolási útmutatóját](/hu/hardware-wallets/exchange-to-cold-storage/) vagy [a Wasabi CoinJoin-to-wallet magyarázatát](https://docs.wasabiwallet.io/FAQ/FAQ-UseWasabi.html#can-i-coinjoin-to-another-wallet) a támogatott folyamathoz és feltételeihez.

<span id="privacy-and-service-policies" data-ginger-heading="adatvédelem-és-szolgáltatási-szabályzatok" aria-hidden="true"></span>

## Adatvédelem és szolgáltatási szabályzatok

A saját kulcskezelés arra válaszol, ki hagyhat jóvá költést. Nem dönt el minden adatvédelmi vagy elérhetőségi kérdést. A CoinJoin nehezíti egyes tulajdonosi kapcsolatok következtetését, de a tranzakciók nyilvánosak maradnak. A tőzsde megtartja nyilvántartását; későbbi összevonás, címújrahasználat vagy címzetti adatközlés új kapcsolatot teremthet. A pontszám nem anonimitási vagy tőzsdei elfogadási garancia. Lásd a [CoinJoin-bizalmat és korlátokat](/hu/learn-coinjoin/trust-and-limits/).

A Ginger üzemeltetője, az InvisibleBit LLC szolgáltatási korlátozásokat tesz közzé, köztük amerikai helyszínre és állampolgárságra vonatkozókat. Feltételei harmadik fél általi ellenőrzést és egyes bemenetek elutasítását is engedik. Használat előtt nézd át az [aktuális Ginger-feltételeket](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt). Wasabinál a beállított koordinátor szabályzatát nézd át; a pénztárca díjszabályzata nem igazolja az üzemeltető beléptetési vagy adatkezelési gyakorlatát.

<span id="which-fits-your-needs" data-ginger-heading="melyik-illik-az-igényeidhez" aria-hidden="true"></span>

## Melyik illik az igényeidhez?

**A Ginger megfontolandó, ha előre adott koordinátorkapcsolatot szeretnél**, és díjai és szabályzatai megfelelnek. Kezdd az [első lépésekkel](/hu/getting-started/), biztosíts mentést, és részvétel előtt nézd át a [CoinJoin-vezérlőket](/hu/using-ginger/coinjoin/).

**A Wasabi megfontolandó, ha magad választanál koordinátort, és koordinátori díj nélküli köröket igényelsz.** Indítás előtt ellenőrizd az üzemeltetőt és a teljes tranzakciós költséget.

Ha főként fogadni, tartani és küldeni szeretnél bitcoint hardverpénztárcával, először a támogatott eszközöket és szokásos fizetéseket hasonlítsd össze. A CoinJoin választható; haszna a védeni kívánt adattól és a kapott UTXO-k későbbi költésétől függ.
