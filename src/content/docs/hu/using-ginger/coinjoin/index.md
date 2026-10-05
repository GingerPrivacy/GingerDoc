---
doc_id: "coinjoin.use-coinjoin"
title: "CoinJoin használata a Ginger Walletben"
description: "Indítsd, szüneteltesd és figyeld a Ginger CoinJoint, ismerd meg a használható pénzt, és kerüld az aktív kör megszakítását."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

<span id="what-is-a-coinjoin"></span>
<span id="what-are-the-fees-for-coinjoins"></span>
<span id="do-i-need-to-trust-ginger-with-my-coins"></span>

> Nehézségi szint: Kezdd itt. Először az alapvető lépések következnek; a haladó hivatkozások később, igény szerint olvashatók.

A CoinJoin más résztvevőkkel közös Bitcoin-tranzakciót hoz létre, hogy megnehezítse a bemenetek és kimenetek közötti kapcsolatok kikövetkeztetését. A Ginger csak a pénztárcád bemeneteihez ír alá; nem utalsz letétet koordinátor által kezelt számlára. A sikeres körök így is díjakkal járnak, és nem garantálnak névtelenséget.

<span id="before-starting" data-ginger-heading="indítás-előtt" aria-hidden="true"></span>

## Indítás előtt

Nyiss meg egy mentett szoftverpénztárcát, és várd meg a szinkronizálását. Legyen elérhető visszaigazolt bitcoin, tartsd a számítógépet hálózaton, és indítás előtt nézd át a várható költséget. A sikeres körök bányászati díjjal, esetenként koordinátori díjjal is járnak; az ismételt körök további költséget jelenthetnek. A választható [haladó költségútmutató](/hu/using-ginger/annonset/) ismerteti a számítást. A hardverpénztárca fogadhat és küldhet szokásos fizetéseket, de nem lehet a Ginger automatikus CoinJoin-folyamatának aláírója.

A koordinátori díjat a kör minden bemeneti UTXO-jára külön ellenőrzik. A 0.03 BTC (3 000 000 satoshi) vagy annál kisebb értékű UTXO-k nem fizetnek koordinátori díjat. A nagyobbak általában a teljes értékük 0.3%-át fizetik, bár a megfelelő remixelések is mentesülhetnek. Bányászati díj akkor is van, ha a koordinátori díj nulla.

A pénztárcának visszaigazolt, használható pénzre és megfelelő körfeltételekre van szüksége. Nincs olyan egyenleg vagy várakozási idő, amely azonnali indulást garantál. Beállításváltoztatás előtt olvasd el az aktuális állapotot.

<span id="start-and-pause" data-ginger-heading="indítás-és-szüneteltetés" aria-hidden="true"></span>

## Indítás és szüneteltetés

1. Nyisd meg a **Coinjoin Settings** lehetőséget a CoinJoin-vezérlőpanel menüjéből, vagy keresd meg a Ginger keresőjével nyitott pénztárcánál.
2. Nézd át a pénztárca költségbeállításait, és a szokásos folyamathoz hagyd a kimeneti célt ezen a pénztárcán. Az egyedi célokat és kimenetirányítást a választható haladó beállítási útmutató tárgyalja.
3. Kapcsold be az **Automatically start coinjoin** lehetőséget, ha felügyelet nélküli részvételt szeretnél megfelelő feltételek mellett. Kézi indításhoz használd a vezérlőpanel indítógombját. A leállított vezérlőpanel **Press Play to start** üzenetet mutathat.
4. Figyeld a vezérlőpanel alatti állapotot. A pénztárca visszaigazolásokra, megfelelő körre vagy olcsóbb díjakra várhat a részvétel előtt.
5. A további részvétel leállításához használd a vezérlőpanel szüneteltető gombját. Hagyd befejeződni az esetleges kritikus tranzakciós szakaszt. Az automatikus indulás kikapcsolása a jövőbeli működést módosítja; nem fordít vissza már továbbított tranzakciót.

Ne küldj bitcoint olyan címre, amelyet valaki a CoinJoin „aktiválására” ad meg. Nincs külön aktiválási fizetés egy ügyfélszolgálatosnak.

<span id="read-the-status" data-ginger-heading="az-állapot-értelmezése" aria-hidden="true"></span>

## Az állapot értelmezése

| Üzenet | Jelentés és következő lépés |
| --- | --- |
| **Awaiting auto-start of coinjoin** | Az automatikus indulás késleltetése fut. Tartsd nyitva a pénztárcát. |
| **Awaiting confirmed funds** | Várj a megfelelő bejövő pénz visszaigazolására. |
| **Awaiting cheaper coinjoins** | A költségbeállításaid távol tartják a pénztárcát a jelenlegi köröktől. Enyhítés előtt ellenőrizd őket. |
| **Skipping a round for better privacy** | Aktív a véletlenszerű kihagyás. Ez nem kapcsolati hiba. |
| **Awaiting other participants** | Folyamatban van a regisztráció. A többi résztvevőnek is teljesítenie kell a lépéseit. |
| **Awaiting the blame round** | Az előző próbálkozás nem fejeződött be; a protokoll a jogosult résztvevőkkel újra próbálkozik. Nem kér arra, hogy bárkit azonosíts. |
| **Insufficient participants, retrying...** | A próbálkozás nem érte el a szükséges részvételt. Várj újabb körre. |
| **Awaiting closure of send dialog** | Fejezd be vagy zárd be a fizetési folyamatot, mielőtt a CoinJoin folytatását várod. |
| **Coinjoin may be uneconomical** | A leállítási küszöb számít. Pénz hozzáadása vagy kézi felülbírálás költséges választás, nem kötelező javítás. |
| **Coinjoin successful! Continuing...** | Egy kör sikerült. További körök jöhetnek, ha a pénztárcának még van feladata. |

Elutasítási, kapcsolati vagy jogosultsági üzenetnél őrizd meg a pontos hibaszöveget. Várakozó állapot miatt nem szokásos lépés a Ginger újratelepítése vagy új helyreállító szavak létrehozása.

<span id="keep-the-wallet-available" data-ginger-heading="tartsd-elérhetően-a-pénztárcát" aria-hidden="true"></span>

## Tartsd elérhetően a pénztárcát

Részvétel közben a pénztárcának hozzá kell férnie a kulcsokhoz. A jelmondattal védett szoftverpénztárcát aláírás előtt meg kell nyitni. A kétfaktoros hitelesítés az indítást védi; nem kéri a hitelesítőt minden kör jóváhagyására.

Az alvó állapot, az internetkapcsolat elvesztése vagy kényszerített leállítás megszakíthat egy kört. Ha a tranzakciót már továbbították, az alkalmazás bezárása nem vonja vissza. Nyisd újra a Gingert, várd meg a szinkronizálást, és nézd meg az előzményeket, mielőtt hibát feltételezel vagy megismételsz egy műveletet. Soha ne küldj második fizetést pusztán azért, mert az alkalmazás az első közben bezárult.

Az általános beállításoktól függően az ablak bezáródhat úgy, hogy a Ginger a háttérben marad. Teljes leállításhoz használd a szokásos kilépést, és hagyd befejeződni a kritikus szakaszt.

<span id="spend-after-coinjoin" data-ginger-heading="költés-coinjoin-után" aria-hidden="true"></span>

## Költés CoinJoin után

Ha az eredményül kapott UTXO-k használhatóvá válnak, más bitcoinhoz hasonlóan elköltheted őket. A CoinJoin-tranzakció nyilvános marad. Nem összetartozó privát és nem privát UTXO-k összevonása, cím újrahasználata vagy tranzakció közlése egy azonosított szolgáltatással új kapcsolatokat hozhat létre. Fizetéskor ellenőrizd a kiválasztott UTXO-kat és a visszajárót; egy korábbi CoinJoin nem tesz minden későbbi műveletet priváttá.

<span id="you-do-not-need-to-manage-the-protocol" data-ginger-heading="nem-kell-a-protokollt-irányítanod" aria-hidden="true"></span>

## Nem kell a protokollt irányítanod

A Ginger kezeli a regisztrációt, aláírást és újrapróbálkozásokat. Ha az alapvető állapotellenőrzések nem magyarázzák a látottakat, használd a választható haladó útmutatókat: [körök részletei](/hu/coinjoin/round-details/), [egyedi beállítások](/hu/coinjoin/settings/) és [díjak és adatvédelmi előrehaladás](/hu/using-ginger/annonset/).
