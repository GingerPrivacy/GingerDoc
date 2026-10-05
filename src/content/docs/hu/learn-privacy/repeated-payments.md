---
doc_id: "learn-privacy.repeated-payments"
title: "Adományok és ismétlődő fizetések fogadása"
description: "Fogadj Bitcoin-adományokat és ismétlődő fizetéseket új címekkel, hasznos címkékkel, gondos visszatérítéssel és a kapott UTXO-k tudatos kezelésével."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nehézségi szint: Mindennapi használat. Akkor válaszd ezt az útmutatót, amikor az általa bemutatott feladatra van szükséged.

A nyilvános bitcoinfogadás nem igényli a pénztárcád minden címének közzétételét. Azt viszont el kell döntened, mit lát az egyes fizető vagy weboldallátogató, majd szükség szerint külön kell tartanod a nem összetartozó beérkezéseket. A Ginger támogatja a szokásos blokkláncos fogadást és helyi címkéket; nem számlázószerver vagy automatikus weboldali címforgató szolgáltatás.

<span id="choose-how-to-give-out-addresses" data-ginger-heading="válaszd-meg-a-címek-kiosztását" aria-hidden="true"></span>

## Válaszd meg a címek kiosztását

| Megközelítés | Mit tesz kényelmessé? | Mi válik láthatóvá? |
| --- | --- | --- |
| Egy állandó cím weboldalon vagy profilon | Bárki fizethet kapcsolatfelvétel nélkül | A cím beérkezései és későbbi költése együtt vizsgálható; az oldal tulajdonoshoz kapcsolja a címet |
| Új cím minden fizetőnek | Minden fizetési kérés külön célt kap | A fizető és kommunikációs szolgáltatás ismerheti a címet és személyazonosságodat; későbbi tranzakciók kapcsolatokat teremthetnek |
| Új cím minden ismétlődő részlethez | Fizetésenként privát nyilvántartást vezethetsz | Az új utasítást közölni kell; a fizető továbbra is használhat régi címet |

Egy nyilvános cím beérkezései nem feltétlenül jelentik a tulajdonos teljes egyenlegét, bevételét vagy adományozóinak számát. Valaki saját magának is küldhet, az adományozók ismételten fizethetnek, és más címek is létezhetnek. Ne vonj le a látható tranzakciók által alátámasztottnál erősebb következtetést.

<span id="receive-and-keep-useful-records" data-ginger-heading="fogadás-és-hasznos-nyilvántartás" aria-hidden="true"></span>

## Fogadás és hasznos nyilvántartás

1. Nyisd meg a kívánt pénztárcát, és válaszd a **Receive** lehetőséget. Adj későbbi felismerést segítő címkét, például privát számlahivatkozást vagy az érintett tevékenységet.
2. Hozz létre új fogadási címet ehhez a fizetéshez. Hardvernél ellenőrizd az eszközön a **Show on the hardware wallet** lehetőséggel, ha elérhető.
3. A kívánt csatornán oszd meg a címet és a megállapodott blokkláncos Bitcoin-összeget. Ellenőrizd a beillesztést; ne használj újra címet pusztán azért, mert már szerepel a beszélgetésben.
4. Ellenőrizd a tényleges beérkezést és visszaigazolásokat a Gingerben. A fizető üzenete vagy fizetési képernyőképe nem a pénztárca igazolása a pénz megérkezéséről.
5. Őrizd meg a beérkezés, címke és privát számla- vagy adományadat kapcsolatát. A helyreállító szavak nem hozzák újra létre e jegyzeteket.

A címkék a helyi nyilvántartásba valók; nem kerülnek névként a Bitcoin-tranzakcióba. A helyi fájlokat, mentést vagy megosztott képernyőt olvasó személy azonban láthatja őket. Legyenek elég részletesek a későbbi UTXO-kiválasztás megértéséhez, felesleges adományozói személyes adatok gyűjtése nélkül.

<span id="handle-a-permanently-published-address" data-ginger-heading="állandóan-közzétett-cím-kezelése" aria-hidden="true"></span>

## Állandóan közzétett cím kezelése

Állandó adománycímnél feltételezd, hogy a beérkezési előzményei vizsgálhatók. A weboldalon történő címcsere nem törli a korábbi címet, és nem akadályozza meg a későbbi fizetések fogadását. Őrizd meg a helyreállítási anyagát és a késői beérkezések felismeréséhez szükséges összefüggéseket.

A CoinJoin feltételezései mellett csökkentheti a későbbi költéshez vezető kapcsolatokat; nem tünteti el a nyilvános cím adományait. Minden beérkezés egy szokásos tranzakcióban történő mozgatása új kapcsolatot teremthet. A következő költést a kezdeti fogadáshoz hasonló gondossággal tervezd.

Előfizetéshez vagy ismételt ügyfélfizetéshez lehetőség szerint minden részlethez új célt közölj. A Ginger nem von vissza régi címet, és nem kényszeríti a fizetőt a frissített kérés követésére. Visszatérítés ígérése előtt egyeztesd a késői és dupla fizetéseket.

<span id="refund-the-payer-through-a-verified-destination" data-ginger-heading="visszatérítés-ellenőrzött-célra" aria-hidden="true"></span>

## Visszatérítés ellenőrzött célra

Ne küldj automatikusan visszatérítést az eredeti fizetés egyik bemeneti címére. A fizető tőzsdei kiutalást, letétkezelő szolgáltatást vagy közös tranzakciót használhatott, és lehet, hogy nem rendelkezik azzal a címmel.

1. Privát nyilvántartásod és megbízható kapcsolati csatorna segítségével ellenőrizd az eredeti fizetést és visszatérítési kérést.
2. Állapodjatok meg az összegről és a tranzakciós díj viselőjéről. Kérj új Bitcoin-visszatérítési címet a kívánt címzettől, és azon a csatornán ellenőrizd.
3. Használd a **Send** lehetőséget, ellenőrizd a kiválasztott bemeneteket és díjat, és csak a megállapodott fizetést hagyd jóvá.
4. Rögzítsd a visszatérítési tranzakciót, és hálózati hiba után az újrapróbálkozás előtt ellenőrizd az eredményét.

A visszatérítés új blokkláncos fizetés. Nem vonja vissza az eredeti beérkezést, és nem törli a nyilvántartását. Mérlegeld, mit árul el a választott UTXO-król a visszatérítési tranzakció.

<span id="keep-receipt-handling-deliberate" data-ginger-heading="tudatosan-kezeld-a-beérkezéseket" aria-hidden="true"></span>

## Tudatosan kezeld a beérkezéseket

A létrejött UTXO-k vizsgálatához nyisd meg a **Wallet Coins** lehetőséget. A **Send** → **Manual Control** segíthet az érintett tevékenységhez már kapcsolódó pénz választásában. A végső tranzakciót ellenőrizd, ne feltételezd, hogy a címke automatikusan elkülönítést kényszerít ki.

A váratlan apró fizetések nem igényelnek azonnali választ. A kis kimenet elköltése az értéke nagy százalékába kerülhet, és más kiválasztott bemenetekhez kapcsolhatja. Az **Exclude Coins** csak a CoinJoin-részvételt érinti; nem zárol UTXO-t szokásos költés ellen. Ne kövesd a kéretlen fizetésbe foglalt utasításokat vagy olyan megkeresést, amely szerint pénzt kell küldened a feloldásához.

Ha alkalmas CoinJoin-kimeneteket másik betöltött pénztárcába irányítasz tárolásra, minden munkamenet előtt ellenőrizd a választást. Újraindítás után alaphelyzetbe áll, és a szokásos kiadott folyamat nem kényszerít újabb kört, ha minden alkalmas pénz már privát. Az ismétlődő fogadás ne épüljön arra az ellenőrizetlen feltételezésre, hogy minden folyamatosan hardverre továbbítódik.

Konkrét példákhoz folytasd a [CoinJoin utáni költéssel](/hu/learn-privacy/spending-after-coinjoin/), a weboldalak, blokkláncböngészők és más alkalmazások által megismerhető adatokhoz pedig az [adatmegosztással](/hu/learn-privacy/information-sharing/).
