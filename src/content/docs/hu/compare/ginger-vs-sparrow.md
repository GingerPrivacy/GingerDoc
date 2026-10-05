---
title: "Ginger Wallet és Sparrow Wallet: adatvédelem, vezérlés és kompromisszumok"
description: "Hasonlítsd össze a Gingert és Sparrow-t CoinJoin, hálózati adatvédelem, hardverpénztárcák, többaláírásos megoldások, tranzakcióvezérlés és díjak alapján."
doc_id: "compare.ginger-vs-sparrow"
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

A Ginger Wallet és Sparrow Wallet nyílt forráskódú asztali Bitcoin-pénztárcák saját kulcskezeléssel. Mindkettő támogat szokásos fizetést, hardverpénztárcát és tudatos UTXO-kiválasztást.

**A Ginger előre beállított koordinátorkapcsolattal kínál CoinJoint. A Sparrow többféle pénztárcabeállítást és tranzakcióvizsgáló, aláíró eszközt kínál, köztük többaláírásos megoldásokat.** A választás a szükséges folyamattól és a vállalt felelősségektől függ.

Utoljára ellenőrizve: **2026. szeptember 14.** Verziók: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) és [Sparrow 2.5.4](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4). E kiadások dokumentált folyamatait hasonlítjuk össze; nem mérjük sebességüket, megbízhatóságukat vagy anonimitásukat.

<span id="at-a-glance" data-ginger-heading="gyors-áttekintés" aria-hidden="true"></span>

## Gyors áttekintés

| Kérdés | Ginger Wallet | Sparrow Wallet |
| --- | --- | --- |
| Ki kezeli az aláírókulcsokat? | Te, szoftverpénztárcában vagy támogatott hardvereszközön. | Te, a beállított szoftveres vagy hardveres aláírókon keresztül. |
| Beépített a koordinált CoinJoin-keverés? | Igen, adott koordinátorkapcsolattal. | Jelenleg nincs Whirlpool-keverési integráció; más adatvédelmi eszközök megmaradtak. |
| Hogyan szerzi be a pénztárcaelőzményt? | Tömör szűrőkkel és helyben feldolgozott blokkokkal; Tor alapértelmezetten bekapcsolt. | Nyilvános Electrum-szerver, saját Bitcoin Core-csomópont vagy privát Electrum-szerver; Tor támogatott. |
| Használhatok hardverpénztárcát? | Igen, támogatott eszközökkel és fájlos PSBT-folyamattal. | Igen, támogatott USB-, QR-kód- és SD-kártyás folyamatokkal. |
| Beállíthatok többaláírásos pénztárcát? | Nincs általános beállítás a dokumentált felületen. | Igen, több aláíróval és választott aláírási küszöbbel. |
| Választhatok egyedi UTXO-kat? | Igen, Manual Control alatt. | Igen, részletes tranzakcióvizsgálattal és szerkesztéssel. |
| Milyen díjak várhatók? | Bányászati díjak; CoinJoinnál koordinátori díj és kis maradék is lehet. | Bányászati díjak; extra bemenet vagy kimenet növelheti a költséget. |

Az alábbi szakaszok a különbségeket magyarázzák, és hivatkoznak a kapcsolódó útmutatókra.

<span id="privacy-and-coinjoin-different-tools-for-different-links" data-ginger-heading="adatvédelem-és-coinjoin-más-eszközök-más-kapcsolatokhoz" aria-hidden="true"></span>

## Adatvédelem és CoinJoin: más eszközök más kapcsolatokhoz

Egy bitcoin-egyenleg külön UTXO-kból, más néven érmékből áll. Több közös költése összekapcsolhatja előzményeiket. A CoinJoin résztvevők bemeneteit kombinálja egy tranzakcióban, nehezítve egyes tulajdonosi kapcsolatok kikövetkeztetését.

A Ginger [kiadott konfigurációja](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) tartalmazza koordinátorkapcsolatát. Szoftverpénztárca mentése és visszaigazolt pénz fogadása után áttekintheted a [CoinJoin-vezérlőket](/hu/using-ginger/coinjoin/), és indulhatsz. A koordinátor az aláírókulcsaid kezelése nélkül szervez köröket. Elérhetőség, alkalmas pénz, díjak és elég részvétel továbbra is befolyásolja a befejezést.

A Sparrow az [1.9.0 verzióban](https://github.com/sparrowwallet/sparrow/releases/tag/1.9.0) eltávolította Whirlpool-kliensét. A Sparrow-n belüli Whirlpool-keverés régi utasításai nem a jelenlegi kiadást írják le.

A Sparrow továbbra is kínál kevésbé árulkodó költési módokat. A **Privacy** tranzakciós opció Stonewall-tranzakciót építhet a fizetési összeggel azonos további kimenettel. Minden bemenet saját pénztárcához tartozik, ezért más résztvevők pénzének keverése nélkül teremt bizonytalanságot. Megfelelő UTXO-k, elég pénz és egyező címtípusok kellenek; a többletbemenet és -kimenet növelheti a bányászati díjat. BIP47-fizetési kódokat is támogat új fizetési címek származtatásához. Lásd a [Spending Privately](https://sparrowwallet.com/docs/spending-privately.html) útmutatót.

Mindkettő támogat PayJoin-küldést kompatibilis folyamatban. A PayJoin kompatibilis címzettet von be a fizetés felépítésébe, a koordinátor keverési körétől külön. Ehhez a Ginger szoftverpénztárcát igényel. Lásd a [Ginger PayJoin-útmutatóját](/hu/payments/payjoin-message-signing/) és [a Sparrow PayJoin-frissítéseit](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4).

Egyik eszköz sem törli a tőzsde nyilvántartását vagy teszi priváttá a blokkláncot. Későbbi összevonás, címújrahasználat vagy címzetti adatközlés új kapcsolatot fedhet fel. Lásd a [CoinJoin-bizalmat és korlátokat](/hu/learn-coinjoin/trust-and-limits/).

<span id="network-privacy-who-learns-about-your-wallet" data-ginger-heading="hálózati-adatvédelem-ki-szerez-tudomást-a-pénztárcádról" aria-hidden="true"></span>

## Hálózati adatvédelem: ki szerez tudomást a pénztárcádról?

A Ginger tömör blokkszűrőkkel azonosít potenciálisan érintett blokkokat, majd a letöltött adatokat helyben dolgozza fel. Ez csökkenti a címlista nyilvános pénztárcaszerverrel közlésének szükségét. A Tor beépített és szokásos kapcsolatokhoz alapértelmezetten bekapcsolt. A Ginger [választható Bitcoin Core-csomópontot](/hu/settings-network/full-node-fees/) is kínál. A modellhez és korlátaihoz olvasd a [Tort és szinkronizálást](/hu/using-ginger/tor/).

A Sparrow nyilvános Electrum-szervert, saját Bitcoin Core-csomópontot vagy privát Electrum-szervert enged választani. A nyilvános szerver kényelmes, de üzemeltetője összekapcsolhatja a kapott pénztárcalekérdezéseket, és megismerheti a tevékenységet. A [Quick Start](https://sparrowwallet.com/docs/quick-start.html) magyarázza ezt a kompromisszumot; a [Bitcoin Core-útmutató](https://sparrowwallet.com/docs/connect-node.html) saját csomópont csatlakoztatását tárgyalja.

Saját infrastruktúra használata elkerüli e lekérdezések közlését független nyilvános szerverüzemeltetővel. A Sparrow Tor-kapcsolatot is támogat, privát szerver onion-címéhez is. A [Best Practices](https://sparrowwallet.com/docs/best-practices.html) tárgyalja e megoldásokat.

A Tor kapcsolati metaadatot, például IP-címet véd. A kéréstartalmat nem rejti el a fogadó szolgáltatás elől. A saját csomópont sem távolítja el a blokkláncon már lévő tulajdonosi nyomokat. Hálózati beállítást és költési gyakorlatot együtt válassz.

<span id="hardware-wallets-and-multisig" data-ginger-heading="hardverpénztárcák-és-többaláírásos-megoldások" aria-hidden="true"></span>

## Hardverpénztárcák és többaláírásos megoldások

Mindkét alkalmazás készíthet fizetést, míg támogatott hardvereszköz tartja a kulcsokat. A Sparrow dokumentál [USB-s hardverpénztárcákat](https://sparrowwallet.com/docs/connected-wallet.html), [QR-kódos aláírást](https://sparrowwallet.com/docs/airgapped-wallet-qr.html) és [SD-kártyás aláírást](https://sparrowwallet.com/docs/airgapped-wallet-sdcard.html). Az elérhető módszer eszköz- és firmware-függő.

A Ginger támogat szokásos hardveres fizetést és [PSBT-fájlos folyamatot](/hu/hardware-wallets/psbt/). A PSBT tervezett tranzakciót és a külön aláíráshoz kellő adatokat hordoz. Jelenléte nem igazol minden pénztárcaelrendezést: a [hardverútmutató](/hu/using-ginger/hardware-wallet/) írja le a kiadott felület korlátait.

A Sparrow többaláírásos pénztárcát enged létrehozni, ahol választott számú, például háromból két aláírás kell költéshez. Rugalmasabbá teszi az aláírási jogosultság elosztását több beállítási és mentési felelősséggel együtt. A Ginger nem kínál hasonló általános beállítást. A Sparrow pénztárcaszabályaihoz lásd a [létrehozási útmutatót](https://sparrowwallet.com/docs/quick-start.html#creating-your-first-wallet).

A Ginger CoinJoin szoftverpénztárcával írja alá a részt vevő bemeneteket. Támogatott betöltött hardverpénztárca helyette a kimeneteket fogadhatja. Ez nem jelenti a bemenetek hardveres aláírását vagy az adatvédelmi cél elérését. A cél újraindításkor alaphelyzetbe áll. Kövesd a [hidegtárolási útmutatót](/hu/hardware-wallets/exchange-to-cold-storage/) a feltételekhez, és CoinJoinhoz soha ne gépeld a hardver helyreállító szavait az asztali alkalmazásba.

<span id="transaction-control-and-everyday-use" data-ginger-heading="tranzakcióvezérlés-és-mindennapi-használat" aria-hidden="true"></span>

## Tranzakcióvezérlés és mindennapi használat

Mindkettő enged címkézést és konkrét UTXO-k választását fizetéshez. A Ginger **Wallet Coins** egyedi UTXO-kat mutat, a **Send** → **Manual Control** pedig a pénz kiválasztását és az eredmény vizsgálatát engedi. Lásd az [UTXO-kiválasztást és előzményeket](/hu/payments/coin-control-history/).

A Sparrow tranzakciódiagramja és szerkesztője bemeneteket, kimeneteket, díjakat és aláírásrészleteket tár fel, eszközökkel a továbbítás előtti vizsgálathoz. A [funkcióútmutató](https://sparrowwallet.com/features/) írja le e vezérlést. Illhet ahhoz, aki rendszeresen dolgozik PSBT-vel, vagy vizsgálná a fizetés összeállítását.

Mindkét pénztárcában jóváhagyás előtt ellenőrizd a címzettet, bemeneteket, visszajárót és díjat. A kézi kiválasztás is összekapcsolhat nem összetartozó pénzt közös költésnél.

<span id="fees-and-service-conditions" data-ginger-heading="díjak-és-szolgáltatási-feltételek" aria-hidden="true"></span>

## Díjak és szolgáltatási feltételek

Mindkét pénztárca szokásos blokkláncos fizetései bányászati díjasak. A méret és választott díjráta befolyásolja a költséget; a Sparrow extra adatvédelmi kimenetei növelhetik a fizetés méretét.

A Ginger [dokumentált koordinátorbeállításainál](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi/WabiSabi/Backend/WabiSabiConfig.cs) a **0.03 BTC vagy kisebb** bemenet mentes a koordinátori díjtól. A nagyobb általában **teljes értékének 0.3%-át** fizeti, megfelelő remixelési mentességekkel. A küszöb bemenetenként érvényes, nem a teljes egyenlegre.

Például egy díjköteles 0.10 BTC-s bemenet koordinátori díja 30 000 satoshi plusz bányászat. A CoinJoin kis vissza nem adott maradékot is hagyhat a kimenetelosztáskor. Ellenőrizd a tényleges körfeltételeket és [teljes költségmagyarázatot](/hu/using-ginger/annonset/); a beállítások nem jövőbeli ajánlatok. A Sparrow szokásos fizetései nem vásárolnak egyenértékű koordinált keverést, ezért puszta bányászati díjuk nem azonos szolgáltatás CoinJoin-árának összehasonlítása.

A Ginger koordinátorüzemeltetője, az InvisibleBit LLC amerikai helyszínre és állampolgárságra vonatkozó korlátozásokat tesz közzé. Feltételei harmadik fél bemenetellenőrzését és UTXO-k elutasítását is engedik. Nézd át az [aktuális szolgáltatási feltételeket](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt). A kulcsok megtartása nem garantál körbe jutást. Sparrow-nál a használt csomópont vagy szerver adatvédelmét és elérhetőségét mérlegeld.

<span id="which-fits-your-needs" data-ginger-heading="melyik-illik-az-igényeidhez" aria-hidden="true"></span>

## Melyik illik az igényeidhez?

**A Ginger megfontolandó, ha a CoinJoin az elsődleges előre adott koordinátorkapcsolattal**, és a díjak és feltételek megfelelőek. Kezdd az [első lépésekkel](/hu/getting-started/), és mentés után nézd át a CoinJoin-beállításokat.

**A Sparrow megfontolandó, ha a többaláírásos megoldás, adott hardveres aláírási folyamat vagy részletes tranzakcióvezérlés elsődleges.** Tudatosan válassz szerverkapcsolatot, és ellenőrizd a pontos elrendezésed támogatását.

A kettő eltérő szerepeket is szolgálhat. Használhatod a Gingert CoinJoinra, a Sparrow-t külön hardverpénztárca kezelésére. A szokásos átutalás közöttük bányászati díjas és látható; a kimenetek kombinálása újra összekapcsolhatja őket. A Ginger közvetlen CoinJoin-céljának támogatott, Gingerbe betöltött pénztárcának kell lennie, nem pusztán Sparrow-ban megnyitottnak. Független mentéseket tarts, és összevonás előtt nézd át a [CoinJoin utáni költést](/hu/learn-privacy/spending-after-coinjoin/).
