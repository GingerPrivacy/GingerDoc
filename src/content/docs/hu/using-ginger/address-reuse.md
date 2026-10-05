---
doc_id: "learn-privacy.habits"
title: "Bitcoin-adatvédelmi szokások fizetés előtt és után"
description: "Használj gyakorlati szokásokat a fogadási címek, címkék, UTXO-kiválasztás, böngészők és segítségkérések terén a Ginger Walletben."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nehézségi szint: Kezdd itt. Először az alapvető lépések következnek; a haladó hivatkozások később, igény szerint olvashatók.

Az adatvédelmi javításokat akkor a legkönnyebb fenntartani, ha illenek a bitcoin tényleges használatához. Beállítás módosítása előtt azonosítsd a kevésbé széles körben közölni kívánt adatot és az azt esetleg látó személyt vagy szolgáltatást.

<span id="before-receiving" data-ginger-heading="fogadás-előtt" aria-hidden="true"></span>

## Fogadás előtt

Hozz létre új címet az adott fizetéshez, és adj hozzá később is érthető helyi címkét. Ha egyedi fizetési kéréseket adhatsz, kerüld egyetlen újrahasználható nyilvános cím használatát nem összetartozó beérkezésekhez. A hardverpénztárca címeit az eszközön ellenőrizd.

Gondolj a kommunikációs csatornára is. Ha azonosított fiókból küldesz fogadási címet, a címzett hozzád kapcsolhatja akkor is, ha a blokkláncon nincs névmező. Az új cím csökkenti az újrahasználatot; nem törli a beszélgetést, amelyben megosztottad.

<span id="before-sending" data-ginger-heading="küldés-előtt" aria-hidden="true"></span>

## Küldés előtt

Nézd át az elérhető UTXO-k eredetét. Külön tevékenységek fizetéseinek összevonása felfedheti, hogy a bemeneteiket együtt költötték el. A Ginger **Manual Control** lehetősége segíthet az UTXO-k vizsgálatában és kiválasztásában, az automatikus választás és adatvédelmi javaslatok pedig a szokásos fizetéseknél segíthetnek. Mindig nézd át az eredményül kapott előnézetet.

Kérj új célt, és erősítsd meg az összeget és a címet. Ha egy javaslat a címzett összegének módosításával elkerüli a visszajárót, győződj meg róla, hogy a címzett elfogadja a módosított összeget. Nem javul az adatvédelem attól, hogy rossz személynek fizetsz vagy nem fizeted ki a teljes számlát.

<span id="after-coinjoin" data-ginger-heading="coinjoin-után" aria-hidden="true"></span>

## CoinJoin után

Az eredményül kapott UTXO-kat úgy kezeld, hogy a későbbi használatuk továbbra is számít. Az összes kimenet egyetlen későbbi tranzakcióba összevonása új kapcsolatot hozhat létre. Az azonosított cím újrahasználata vagy azonosított szolgáltatón keresztüli költés további adatokat hoz létre, függetlenül a Ginger által fizetés előtt kijelzett pontszámtól.

Egy elemző a tranzakciók időzítését és összegeit is összevetheti. Nincs általános várakozási idő, amely biztonságot garantál. Tervezd meg a költést ahelyett, hogy egyetlen körtől vagy rögzített késleltetéstől várnád minden megfigyelési mód megoldását.

<span id="on-the-network-and-computer" data-ginger-heading="a-hálózaton-és-a-számítógépen" aria-hidden="true"></span>

## A hálózaton és a számítógépen

Hagyd bekapcsolva a Tort a pénztárca tervezett privát hálózati használatához. Közvetítőkön vezeti át a kapcsolatokat az IP-cím közvetlen láthatóságának csökkentésére; a [Tor Project magyarázata](https://support.torproject.org/about-tor/introduction/what-is-tor/) ismerteti a szerepét. A Tor nem rejti el azt, amit kifejezetten elküldesz a másik végén lévő szolgáltatásnak.

Ellenőrizd a szolgáltatói és blokkláncböngészős hivatkozásokhoz használt böngészőt. A szokásos böngésződ bejelentkezett fiókokat és azonosító sütiket hordozhat. A Ginger böngészőbeállítása és saját Tor-beállítása különálló. Saját címek ismételt nyilvános lekérdezése helyett részesítsd előnyben a helyi pénztárcaelőzményeket.

Használd a **Discreet Mode** módot a támogatott képernyőmezőkhöz, ha valaki láthatja a kijelzőt, és az operációs rendszer zárolását, ha elmész a géptől. Védd a mentési adathordozókat és helyi címkéket. A csak megfigyelésre szolgáló pénztárca aláírókulcsok felfedése nélkül is kiszivárogtathat pénzügyi tevékenységet.

<span id="when-asking-for-help" data-ginger-heading="segítségkéréskor" aria-hidden="true"></span>

## Segítségkéréskor

Írd le a verziót, operációs rendszert, hibát és a nem titkos reprodukciós lépéseket. Csak a legkisebb szükséges, átnézett naplórészletet oszd meg. Ne tegyél közzé xpubot, teljes pénztárca-adatmappát, helyreállító szavakat vagy hitelesítő QR-kódot. Egy önkéntes segítő nem tud hiányzó jelmondatot javítani azzal, hogy a titkaidat nyilvános csatornán „biztonságosan” fogadja.

<span id="choose-a-sustainable-routine" data-ginger-heading="fenntartható-rutint-válassz" aria-hidden="true"></span>

## Fenntartható rutint válassz

Alkalmi fizetésnél az új címek, gondos előnézetek, védett mentések és Tor lehetnek az első bevezetendő javítások. Ha erősebb védelem kell a tranzakciós kapcsolatok ellen, mérlegeld a CoinJoin díjait, szolgáltatási feltételeit és az utána következő költési szokásokat. Az olyan bonyolult rutin, amelyből nem tudsz helyreállni vagy amelyet nem tudsz következetesen követni, új kockázatokat teremthet a csökkenteni kívántak helyett.

Adományokhoz és részletekben történő fizetéshez lásd az [ismétlődő fizetések](/hu/learn-privacy/repeated-payments/) mindennapi útmutatóját. A választható haladó útmutatók tárgyalják a [CoinJoin utáni költést](/hu/learn-privacy/spending-after-coinjoin/), [pénztárcaváltást](/hu/learn-privacy/wallet-migration/) és azt, [hová kerülnek a pénztárca adatai](/hu/learn-privacy/information-sharing/). Akkor válassz egyet, amikor az adott döntésre van szükséged; ezek nem kötelező lépések az első fizetéshez.
