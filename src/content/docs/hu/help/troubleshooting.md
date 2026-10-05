---
doc_id: "help.troubleshooting"
title: "Ginger Wallet-hibaelhárítás"
description: "Vizsgáld a hiányzó egyenleget, kapcsolati problémát, CoinJoin-várakozást, 2FA-hibát és hardvergondot a helyreállítási adatok megőrzésével."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nehézségi szint: Mindennapi használat. Akkor válaszd ezt az útmutatót, amikor az általa bemutatott feladatra van szükséged.

A pontos hibából, kiválasztott pénztárcából, hálózatból és alkalmazásverzióból indulj ki. Adatmódosítás előtt őrizd meg a helyreállítási adatokat és fájlokat. Újratelepítés, mappatörlés vagy új szavak létrehozása ritkán az első lépés kapcsolati vagy kijelzési problémánál.

<span id="balance-recovery-and-receiving" data-ginger-heading="egyenleg-helyreállítás-és-fogadás" aria-hidden="true"></span>

## Egyenleg, helyreállítás és fogadás

| Tünet | Először ellenőrizd | Következő lépés |
| --- | --- | --- |
| A helyreállított pénztárca üres | Eredeti szavak, pontos jelmondat, hálózat, keresési állapot | Szinkronizálás után vess össze ismert címeket vagy előzményeket; haladó helyreállítás csak akkor kell, ha e szokásos ellenőrzések nem magyarázzák |
| Hiányzik a bejövő fizetés | Helyes cím, küldő tranzakcióazonosítója, kiválasztott pénztárca | Ellenőrizd a továbbítást, visszaigazolást, majd helyi szinkronizálást |
| Hiányzik a Receive vagy Send | Aktív még a helyreállítás? Csak megfigyelésre szolgál a pénztárca? | Várd meg a helyreállítást, vagy használd a szükséges aláíróeszközt |
| Régi cím eltűnt a fogadási listából | Fizettek rá vagy elrejtették? | Nézd az előzményeket; a lista láthatósága nem érvénytelenít kulcsokat |
| Csak apró fizetés hiányzik | Porküszöb és szinkronizálás | Ellenőrizd a küszöböt lopás feltételezése előtt |
| Seedből helyreállítás után eltűnt címkék | Mentetted a megfelelő ATTR-fájlt? | Őrizd meg a fájlt; a címkék nem állíthatók elő a blokkláncból |

Pénztárca „újraszinkronizálásához” ne adj szavakat weboldalon. Csak telepített, ellenőrzött pénztárca helyreállítási folyamatát használd megbízható gépen.

<span id="connection-or-synchronization" data-ginger-heading="kapcsolat-vagy-szinkronizálás" aria-hidden="true"></span>

## Kapcsolat vagy szinkronizálás

Ellenőrizd a kapcsolatot, gépórát, szabad tárhelyet és beállított teljes csomópont állapotát. Az első keresésnek egyszerűen idő kellhet. Ha soha nem változik az előrehaladás, egyszer szabályosan zárd be és nyisd újra a Gingert. Jegyezd fel az eseményeket ismételt keresésújraindítás helyett.

Az **Awaiting connection** gyorsítótárazott előzmények mellett is megakadályozhatja a CoinJoint és más szolgáltatásokat. A leválasztott egyenleget potenciálisan hiányosnak tekintsd. Vizsgálat közben hagyd bekapcsolva a Tort. A csomópont P2P-kapcsolata és RPC-díjbecslése különálló; egyik működése nem igazolja a másikét.

A **Wallet Settings** → **Tools** → **Resync** előtt őrizd meg a mentéseket, és számíts új keresésre. Pusztán állapotüzenet eltüntetésére ne töröld a `Wallets`, `WalletBackups` vagy 2FA-fájlokat.

<span id="coinjoin-does-not-start" data-ginger-heading="a-coinjoin-nem-indul" aria-hidden="true"></span>

## A CoinJoin nem indul

| Üzenet vagy feltétel | Valószínű teendő |
| --- | --- |
| **Insufficient funds eligible for coinjoin** | Nézd át a visszaigazolást, UTXO-értékeket, díjakat és kizárásokat; a teljes egyenleg önmagában nem igazol alkalmasságot |
| **Only excluded funds are available** | Ha szeretnél részvételt, nézd át az **Exclude Coins** listát |
| **Only immature funds are available** | Várd meg a szükséges érettséget; újonnan bányászott kimenetekre külön költési szabályok vonatkoznak |
| **Some funds are rejected from coinjoining** | Olvasd a kapcsolódó okot és aktuális feltételeket; az elutasítás nem utalja át a pénzed tulajdonjogát |
| **Awaiting cheaper coinjoins** | Nézd át a költségbeállításokat, és mérlegeld a célhoz illő várakozást |
| **Coinjoin may be uneconomical** | Kézi felülbírálás előtt nézd a leállítási küszöböt és relatív költséget |
| **Awaiting the blame round** | Várj a protokoll újrapróbálkozására; nem kell másik felhasználót hibáztatnod |
| **Awaiting closure of send dialog** | Fejezd be vagy zárd be a küldést |
| **Mining fee rate was too high** vagy **Coordination fee rate was too high** | Várj vagy vizsgáld a feltételeket; ne emelj vakon korlátokat |
| Hardveres forráspénztárca | Automatikus CoinJoin-aláíráshoz alkalmas szoftverpénztárca kell |

Résztvevők nem fejezhetik be a kört, vagy megszakadt részvétel után UTXO átmenetileg elérhetetlenné válhat. Ismételt próbálkozás, import vagy a koordinátor elutasításának kijátszása nem javítás. Az ok és állapot alapján dönts várásról vagy hivatalos segítségkérésről.

<span id="payment-or-fee-problems" data-ginger-heading="fizetési-vagy-díjproblémák" aria-hidden="true"></span>

## Fizetési vagy díjproblémák

Elérhetetlen díjbecslésnél várj, javítsd a szolgáltató/csomópont kapcsolatát, vagy használj megértett kézi díjrátát. A végső összeg és díj férjen bele az elkölthető pénzbe. Hosszú még nem visszaigazolt láncnál korábbi visszaigazolásokat kellhet várni.

A **Speed Up Transaction** vagy **Cancel Transaction** lehetőséget csak Ginger-ajánláskor és díjellenőrzés után használd. A visszavonás függő fizetés helyettesítési kísérlete, nem visszaigazolt fizetés visszafordítása. Bizonytalan továbbítás után ellenőrizd az előzményeket dupla fizetés előtt.

<span id="2fa-and-hardware" data-ginger-heading="2fa-és-hardver" aria-hidden="true"></span>

## 2FA és hardver

Elutasított kódnál nézd a telefon idejét, választott bejegyzést, Ginger-kompatibilitást és Tor-/szolgáltatáskapcsolatot. Őrizd meg a pénztárca- és 2FA-fájlokat. Ha a szokásos indulás nem állítható helyre, a szavak és eredeti jelmondat a független kulcsmentés; azonos adatokra újratelepítés nem hozza újra az elveszett hitelesítőt. A [haladó GYIK](/hu/help/advanced-faq/#does-the-2fa-file-recover-the-wallet-without-the-service) magyarázza a fájlfüggőséget.

Eszközfelismeréshez egy feloldott hardverpénztárcát, adatkábelt és közvetlen USB-portot használj, zárt versengő eszközalkalmazásokkal. Végezd el az eszköz Bitcoin-alkalmazás-, PIN- vagy jelmondatlépéseit. Linuxon nézd meg a gyártói USB-jogosultságokat. A seedet tartsd távol a géptől.

<span id="report-a-useful-issue" data-ginger-heading="hasznos-hibajelentés" aria-hidden="true"></span>

## Hasznos hibajelentés

A [hivatalos Ginger-repository](https://github.com/GingerPrivacy/GingerWallet/issues) hivatkozásait használd. Add meg a kiadás verzióját, rendszert és processzort, pontos hibát, várt eredményt és a legrövidebb nem titkos reprodukciós lépéseket. Szükség esetén a hardvermodellt és firmware-t is.

A Ginger **Logs** keresőművelete diagnosztikai naplókat nyit. Megosztás előtt vizsgáld és takard ki: útvonalak, címek, azonosítók, címkék és rendelési adatok érzékenyek lehetnek. Minimális releváns részletet ossz meg, ne teljes adatmappát. A nyilvános hibajegy nyilvános; segítségkéréshez nem kellhet helyreállító szó vagy jelmondat.
