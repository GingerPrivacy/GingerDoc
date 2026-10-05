---
doc_id: "hardware-wallets.exchange-to-cold-storage"
title: "Tőzsdétől hidegtárolásig a Gingerrel"
description: "Utald ki a bitcoint, használd a Ginger CoinJoint, és mozgasd a pénzt ellenőrzött hardverpénztárcába a díjak elszámolásával és az adatvédelem megőrzésével."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Először állíts be ellenőrzött hardverpénztárcát és független mentést.

A Ginger segíthet elkülöníteni a jövőbeli bitcointevékenységet a tőzsdei kiutalástól, mielőtt hardverpénztárcában tárolod. A tőzsde megtartja a kiutalási nyilvántartást. A hardverpénztárca az aláírókulcsokat védi; a tranzakciók és későbbi költés továbbra is meghatározzák mások következtetéseit.

Két külön út van. Indítás előtt válassz, hogy tudd, hol kell a kimeneteknek megjelenniük.

| Út | Mi történik? | Fő szempont |
| --- | --- | --- |
| CoinJoin a szoftverpénztárcában, majd szokásos átutalás | A kimenetek a Ginger szoftverpénztárcájában maradnak, amíg kiválasztod és hardverre küldöd őket | Előbb ellenőrizheted az adatvédelmüket; minden későbbi átutalás díjas, és felfedi bemenet–kimenet kapcsolatát |
| CoinJoin-kimenetek közvetlen fogadása hardverpénztárcában | Alkalmas szoftverpénztárca írja alá a CoinJoint; kimenetei a betöltött hardverpénztárcába érkeznek | Elkerüli e kimenetek külön átutalását, de az adott kör után elhagyják a forrást, a célod teljesítésének garanciája nélkül |

<span id="prepare-both-wallets" data-ginger-heading="mindkét-pénztárca-előkészítése" aria-hidden="true"></span>

## Mindkét pénztárca előkészítése

1. Ellenőrzött Ginger-telepítést használj. Hozd létre és mentsd a szoftverpénztárcát a helyreállító szavaival és eredeti jelmondatával. Csak a feldolgozni kívánt összeget tartsd benne.
2. A gyártó támogatott eljárásával inicializáld és mentsd a hardverpénztárcát. [Csatlakoztasd a Gingerhez](/hu/using-ginger/hardware-wallet/), és hagyd szinkronizálni.
3. A hardverpénztárcában válaszd a **Receive** lehetőséget és, ha elérhető, a **Show on the hardware wallet** műveletet. Hasonlítsd össze a teljes címet az eszközön és gépen. Kis fogadási és aláírási próbát végezz, mielőtt nagyobb összeget bízol új elrendezésre.
4. Külön nevet adj a pénztárcáknak a forrás és cél felismeréséhez. Mindkettőhöz őrizz helyreállítható mentést; a szoftverpénztárca mentése nem állít helyre eltérő kulcsú hardverpénztárcát.

Soha ne gépeld a hardverpénztárca helyreállító szavait a Gingerbe a CoinJoin működtetéséhez. Ezzel a számítógép hozzáférne a hardverpénztárca aláírókulcsaihoz.

<span id="withdraw-from-the-exchange" data-ginger-heading="kiutalás-a-tőzsdéről" aria-hidden="true"></span>

## Kiutalás a tőzsdéről

A szoftverpénztárcában válaszd a **Receive** lehetőséget, adj hasznos címkét, és hozz létre új címet. Másold a tőzsde Bitcoin-kiutalási folyamatába, és ottani jóváhagyás előtt ellenőrizd a teljes címet és hálózatot. A Ginger blokkláncos Bitcoint használ; Lightning-számla vagy más eszköz hálózata nem felcserélhető vele.

A tőzsde kiutalási díját külön rögzítsd. A Gingerbe érkező összeg kisebb lehet a tőzsdén levontnál. Várd meg a szinkronizálást és a fogadott pénz visszaigazolását, mielőtt CoinJoin-részvételt vársz. Az azonosító hasznos az egyeztetéshez, de ne tedd közzé, és ne keresd ismételten nyilvános blokkláncböngészőkben.

<span id="route-a-review-coinjoin-results-then-transfer" data-ginger-heading="a-út-coinjoin-eredmények-ellenőrzése-majd-átutalás" aria-hidden="true"></span>

## A út: CoinJoin-eredmények ellenőrzése, majd átutalás

1. A forrás **Coinjoin Settings** alatt hagyd a **Coinjoin to this wallet** célt a forráson. A vezérlőpanel indítógombjával való kezdés előtt nézd át a célt, díjbeállításokat és kizárt UTXO-kat.
2. Figyeld a kész köröket és az UTXO-k adatvédelmi adatait. Szüneteltethetsz a díjak és előrehaladás áttekintésére. Kritikus körszakasznál hagyd a Gingert elvégezni a szükséges munkát az alkalmazás megszakítása helyett.
3. Kérj új hardveres fogadási címet, és az eszközön ellenőrizd. A szoftverpénztárcában válaszd a **Send** → **Manual Control** lehetőséget, és a mozgatni kívánt pénzt.
4. Ellenőrizd a tényleges bemeneteket, célt, címzetti összeget, visszajárót és díjat. Csak szándékodnak megfelelő adatoknál hagyd jóvá az átutalást.
5. Ellenőrizd a hardverpénztárca szinkronizált előzményeit és a forrás megmaradt UTXO-it. Befejezettként kezelés előtt várd meg a visszaigazolást.

Minden kimenet közös küldése látható kapcsolatot teremt köztük. Egyedi UTXO-k mozgatása elkerüli ezt a többbemenetes kapcsolatot, de több díjas, külön látható tranzakciót jelent. Összegek, időzítés és a megfigyelő ismerete más kapcsolatokat adhat. Kezelhető átutalási tervet válassz; egyikről se feltételezz garantált névtelenséget.

<span id="route-b-choose-hardware-as-the-coinjoin-destination" data-ginger-heading="b-út-hardver-választása-coinjoin-célnak" aria-hidden="true"></span>

## B út: hardver választása CoinJoin-célnak

Ezt az utat addig használd, amíg a szoftverpénztárcának van CoinJoinra alkalmas pénze. A szokásos v2.0.26 folyamat elutasítja a részvételt, ha a pénztárca vagy minden elérhető jelölt már privát a célja szerint. Másik cél választása nem kerüli meg az ellenőrzést. Különösen nem megbízható mód extra, csak kész UTXO-s kör kikényszerítésére minden nem privát UTXO kizárása. Ezekhez az A utat használd, ne a célt változtasd a leállítási feltétel kijátszására.

1. Töltsd be és ellenőrizd a hardverpénztárcát a Gingerben. Állítsd le a forrás CoinJoin-részvételét, és várj a célválasztó elérhetőségére.
2. Nyisd meg a forrás **Coinjoin Settings** beállításait. A **Coinjoin to this wallet** célt állítsd a kívánt hardverpénztárcára. Csak a Ginger által kínált célt válassz.
3. Az **Exclude Coins** alatt nézd át a CoinJoinon kívül tartandó pénzt. A kizárás konkrét UTXO-kra vonatkozik, nem tart fenn minden jövőbeli beérkezést ugyanabból a forrásból.
4. Ellenőrizd újra a célt, és indíts részvételt. Tartsd futva az alkalmazást a kör befejezéséig.
5. Sikeres kör után mindkét pénztárcát vizsgáld meg. Csak a választott bemenetek fogytak el, a kimenetek több UTXO-ra is oszolhatnak. A megmaradó forrásegyenleg nem feltétlenül hiba.

A cél a befejezett kör kimeneteit kapja; e beállítás nem vár külön adatvédelmi cél-elérési eseményre a továbbítás előtt. Ellenőrizd az eredő adatvédelmi adatokat. Hardveren tartott pénz e kiadás szokásos hardverpénztárca-folyamatán keresztül később nem adhat CoinJoin-bemenetet.

A célválasztás újraindítás után alaphelyzetbe áll. Minden munkamenet előtt ellenőrizd. Aktív részvételnél nem módosítható, és aláírás után nem irányíthatja át a tranzakciót. Az automatikus részvételt külön ellenőrizd, ne feltételezz állandó háttérátutalási rendszert.

<span id="reconcile-balances-and-plan-the-next-spend" data-ginger-heading="egyenlegek-egyeztetése-és-következő-költés-tervezése" aria-hidden="true"></span>

## Egyenlegek egyeztetése és következő költés tervezése

Vesd össze a forrás csökkenését a hardverre érkezett kimenetekkel és a forrás megmaradt pénzével. A különbség CoinJoin-költséget is tartalmazhat. A nulla forrásegyenleg nem pénzvesztés, ha a kívánt cél megkapta. Fordítva, a sikeres kör nem jelenti minden forrás-UTXO mozgatását vagy célértékének elérését.

Későbbi hardveres költéskor újra nézd át az UTXO-kiválasztást. Nem összetartozó UTXO-k kombinálása az aláírókulcsok helyétől függetlenül kapcsolatokat fedhet fel. Új címzetti címet használj, nézd át a visszajárót, és az eszközön hagyd jóvá. A [PSBT-folyamat](/hu/hardware-wallets/psbt/) támogatott fájlos aláírást kínál megfelelő hardverhez; nem módosítja az aláírt tranzakció adatvédelmi következményeit.

Ha az aláírókulcsok már sérülhettek, a megmaradt pénz védelme fontosabb, mint egy adatvédelmi folyamat kivárása. Azonos kiszivárgott seedet tartalmazó új eszköz nem vonja vissza a seedet.
