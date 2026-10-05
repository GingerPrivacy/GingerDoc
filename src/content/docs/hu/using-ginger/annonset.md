---
doc_id: "coinjoin.fees-and-progress"
title: "CoinJoin-díjak és adatvédelmi előrehaladás"
description: "Tervezd meg a CoinJoin teljes költségét, különítsd el a díjmentességet az ingyenes tranzakcióktól, és példák alapján értelmezd a Ginger adatvédelmi pontszámait."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Először értsd meg a szokásos indítási és szüneteltetési vezérlőket és azt, hogy a befejezett körök díjakkal járnak.

A CoinJoinnak költsége és adatvédelmi célja van. Mindkettőt nézd át indítás előtt: a koordinátori díj alóli mentesség nem teszi ingyenessé a kört, az előrehaladási jelző pedig nem mérhet mindent, amit más tud rólad.

<span id="coordinator-fee-versus-mining-fee" data-ginger-heading="koordinátori-díj-és-bányászati-díj" aria-hidden="true"></span>

## Koordinátori díj és bányászati díj

A Ginger jelenlegi koordinátoridíj-beállításai szerint minden 3 000 000 satoshi (0.03 BTC) vagy kisebb bemenet koordinátori díja nulla. Pontosan 0.03 BTC is a küszöbhöz tartozik. E fölött a bemenet általában teljes értékének 0.3%-át fizeti, nem csupán a 0.03 BTC feletti részt. A díjráta tizedes alakban 0.003, a számított díj törtsatoshijai lefelé kerekítődnek.

A küszöb bemenetenként külön ellenőrzött, nem a teljes egyenlegre vagy a regisztrált bemenetek összegére. Megfelelő remixelések is mentesülhetnek; a Ginger hirdetett mentessége a CoinJoinból származó pénz egy tranzakción keresztüli közvetlen költésére is kiterjed. E további mentességek a kínált körtől és bemeneti alkalmasságtól függenek. Részvétel előtt ellenőrizd újra a [Ginger aktuális díjmagyarázatát](https://gingerwallet.io/).

Más koordinátoridíj-mentesség nélküli bemeneteknél:

| Bemeneti érték | BTC-érték | Koordinátori díj |
| --- | --- | --- |
| 2 999 999 satoshi | 0.02999999 BTC | 0 satoshi |
| 3 000 000 satoshi | 0.03 BTC | 0 satoshi |
| 3 000 001 satoshi | 0.03000001 BTC | 9 000 satoshi |
| 4 000 000 satoshi | 0.04 BTC | 12 000 satoshi |

Például a 0.04 BTC-s bemenet 0.00012 BTC-t (12 000 satoshit) fizet, nem csak a küszöb feletti 0.01 BTC 0.3%-át. A bányászati díj ehhez hozzáadódik, nulla koordinátori díjú bemenetnél is. A példák a beállított számítást magyarázzák, nem jövőbeli körre adott ajánlatok.

A bányászati díj a tranzakciós helyért fizet a bányászoknak. A díjrátától és a bemenetektől és kimenetektől függ. Kis értékű UTXO költése az értéke nagy százalékába kerülhet. Minden ismételt CoinJoin további bányászati költséget hozhat, koordinátoridíj-mentesség mellett is.

Ne bonts szét UTXO-kat pusztán mentességért az extra tranzakciók, díjak és nyilvános kapcsolatok megértése nélkül.

<span id="account-for-the-complete-cost" data-ginger-heading="a-teljes-költség-elszámolása" aria-hidden="true"></span>

## A teljes költség elszámolása

Az elköltött összeg több lehet a hirdetett koordinátori százaléknál. A CoinJoin tranzakciós helyet igényel, és a kimeneti összegek a kliens értékelosztása után kis maradékot hagyhatnak. E maradék a koordinátor bevételét vagy a bányászati díjat növelheti; nem feltétlenül külön díjsor a pénztárcában.

Egy befejezett CoinJoinnál hasonlítsd össze a saját bemenetek teljes értékét a tranzakció összes saját kimenetének értékével. A másik kimeneti pénztárcába küldötteket is számold bele. Ne vond ki a közös tranzakció minden kimenetét csupán a saját bemeneteidből: egyes kimenetek más résztvevőké.

Az alábbi szemléltető elszámolási példa, nem Ginger-kimenetek előrejelzése vagy alkalmazásképernyő:

| Tétel | Satoshi |
| --- | ---: |
| Saját díjköteles bemenet | 5 000 000 |
| Saját kimenetek összege a két pénztárcádban | 4 980 800 |
| Értékkülönbség | 19 200 |
| Feltételezett koordinátori díj: a bemenet 0.3%-a | 15 000 |
| A példában a részvételedhez rendelt bányászati költség | 3 600 |
| A példa fennmaradó elosztási különbsége | 600 |

Itt 15 000 + 3 600 + 600 = 19 200 satoshi. Az utolsó három sor ugyanazt a különbséget magyarázza; ne add hozzá még egyszer új díjként. A teljes kör bányászati díját sem fizeti minden résztvevő egészében. Egy díjmezőről vagy naplósorról ne feltételezd, hogy az értékkülönbség minden összetevőjét jelenti.

Ha hardverpénztárcába mentek a kimenetek, eltűnésük a szoftverpénztárca egyenlegéből a továbbra is saját értéked átutalása. Egyeztetés előtt várd meg mindkét pénztárca szinkronizálását. Még nem visszaigazolt tranzakciók, párhuzamos fizetések és bejövő pénz félrevezetővé tehetik az egyszerű előtte–utána egyenleg-összehasonlítást.

<span id="budget-for-the-whole-journey" data-ginger-heading="a-teljes-út-költségvetése" aria-hidden="true"></span>

## A teljes út költségvetése

A CoinJoin körüli lépéseket is számold bele annak eldöntésébe, hogy megéri-e az eredmény:

| Lépés | Mérlegelendő költség |
| --- | --- |
| Kiutalás tőzsdéről | A kiutalási díja, amely eltérhet tranzakciója bányászati díjától |
| Egy vagy több kör | Minden befejezett részvétel tényleges értékkülönbsége |
| Pénz másik pénztárcába mozgatása | Szokásos átutalásnál újabb bányászati díj |
| Kapott UTXO-k későbbi költése | A későbbi fizetés bemeneteinek és kimeneteinek díja |

Például 19 200 satoshis részvétel és azt követő 1 200 satoshis átutalás e két lépésre 20 400 satoshi. A későbbi fizetés külön költség. Több kimenet kisebb, külön költhető részeket adhat, de költésük is tranzakciós helyet fogyaszt. E jövőbeli költséget a kimenetek létrehozása még nem fizette ki.

Tanuláshoz megengedhető összeget válassz, és az első kész eredményt ellenőrizd, mielőtt ismételt köröket hagysz folytatódni. Tarts személyes költségkeretet; a CoinJoin-időpreferencia vagy UTXO-kiválasztás nem garantált korlát a teljes út költségére.

<span id="when-ginger-waits-or-refuses-a-round" data-ginger-heading="ha-a-ginger-vár-vagy-elutasít-egy-kört" aria-hidden="true"></span>

## Ha a Ginger vár vagy elutasít egy kört

A kliens részvétel előtt ellenőrzi a javasolt feltételeket. Jelezheti: **Mining fee rate was too high**, **Coordination fee rate was too high**, **Min input count was too low**, **Server did not give remix fee exemption**. Vizsgáld a kínált feltételeket a korlátok vak emelése helyett.

A díjbeállítások **Awaiting cheaper coinjoins** állapotot is okozhatnak. Az időpreferencia viszonylag olcsóbb feltételekre várás, nem egy napon vagy héten belüli befejezésre szóló foglalás. A továbbítás előtt sikertelen kör önmagában nem hoz létre új visszaigazolt Bitcoin-tranzakciót.

E kiadás szokásos CoinJoin-indítása elutasítja a már célt teljesítő pénztárcát és a csak ilyen UTXO-kat tartalmazó választást is. Másik kimeneti pénztárca ezt nem kerüli meg. Ha már privát pénzt mozgatnál, szokásos átutalást mérlegelj, ne várd, hogy a célválasztás új kört kényszerít ki.

<span id="what-the-privacy-score-can-tell-you" data-ginger-heading="mit-mondhat-el-az-adatvédelmi-pontszám" aria-hidden="true"></span>

## Mit mondhat el az adatvédelmi pontszám?

A Ginger nyilvántartja az UTXO-k adatvédelmi adatait, és összeveti a pénztárca anonimitási célpontszámával. A pontszám helyi becslés a pénztárca tranzakcióismerete alapján. Nem függetlenül ellenőrzött emberek száma, és nem az azonosíthatóságod valószínűsége.

Az összesített előrehaladás az összegekkel súlyozza a pontszámok célhoz közeledését. A külön színes egyenlegfelosztás adatvédelmi kategóriák összegeit mutatja. Eltérő mérések.

Egyszerűsített példában a cél legyen 5, és a pénztárcában csak ez a két UTXO legyen:

| UTXO | Érték | Helyi pontszám | Teljesíti a célt? |
| --- | ---: | ---: | --- |
| A | 1 000 000 satoshi | 5 | Igen |
| B | 3 000 000 satoshi | 3 | Nem |

Az érték csak 25%-a teljesíti a célt. Az összesített előrehaladásnál e kiadás az 1-es pontszám feletti előrehaladást súlyozza: A hozzájárulása 1 000 000 × 4, B-é 3 000 000 × 2, a maximum 4 000 000 × 4. Ez 62.5%, egész számként 62% kijelzéssel. E két nézet eltérő százaléka ezért önmagában nem hiba.

A **Hurray! All your funds are private!** azt jelenti, hogy a pénztárca az aktuális cél és elszámolás szerint privátnak tekinti a pénzt. Nem jelenti az előzmények eltűnését, az internetes névtelenségedet vagy azt, hogy későbbi fizetés nem teremthet kapcsolatot.

<span id="decide-when-you-have-achieved-your-objective" data-ginger-heading="döntsd-el-mikor-érted-el-a-célodat" aria-hidden="true"></span>

## Döntsd el, mikor érted el a célodat

A cél csökkentése módosíthatja az alkalmas UTXO-k körét a blokkláncon közzétett adatok változása nélkül. Emelése több részvételt és díjat igényelhet; nem vásárol garantált számú névtelen embert. Új pénz fogadása, UTXO-k összevonása vagy pénztárca helyreállítása helyi metaadat nélkül is módosíthatja a kijelzett eredményt.

Döntsd el, kinek az ismeretét korlátoznád: tőzsde, adott címzett vagy megosztott címet követő személy. Ismerhetnek a Ginger számára láthatatlan összegeket, időpontokat és identitásokat. A következő fizetést és a jelenlegi pontszámot is értékeld.

Szüneteltess a kész körök áttekintéséhez, az UTXO-k egyeztetéséhez és a költés megtervezéséhez. Telepítésváltásnál őrizd meg a helyi metaadatot, ha több összefüggést megtartanál. A célhoz, díjbeállításokhoz és célvezérlőkhöz lásd a [CoinJoin-beállításokat](/hu/coinjoin/settings/).
