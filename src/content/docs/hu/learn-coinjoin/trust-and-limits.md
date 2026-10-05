---
doc_id: "learn-coinjoin.trust-and-limits"
title: "Miben bízol CoinJoin közben?"
description: "Különítsd el a Bitcoin-kulcsok kezelését, a CoinJoin adatvédelmi feltételezéseit, a koordinátor elérhetőségét, a résztvevők függetlenségét és a szoftver ellenőrzését."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Először olvasd el a CoinJoin egyszerű magyarázatát.

A Gingerrel megtartod a Bitcoin-aláírási jogosultságot ahelyett, hogy keverő által kezelt egyenlegre fizetnél be. Ez fontos kulcskezelési kérdésre válaszol. Az adatvédelem, elérhetőség és a szoftver sértetlensége további kérdéseket vet fel.

Részvétel előtt azonosítsd a célodat: esetleg azt szeretnéd, hogy a címzett kevesebbet tudjon más fizetéseidről, vagy csökkentenéd a jövőbeli költés és egy nyilvánosan ismert beérkezés kapcsolatát. A CoinJoin segíthet a kapcsolati adatvédelemben, de nem távolíthatja el a címzett által már megszerzett adatokat.

<span id="four-separate-questions" data-ginger-heading="négy-külön-kérdés" aria-hidden="true"></span>

## Négy külön kérdés

| Kérdés | Védelem és feltételezés | Mit nem igazol? |
| --- | --- | --- |
| Ki költhet? | A pénztárcád a tervezet ellenőrzése után aláírja a bemeneteit. A koordinátornak nem kellenek a helyreállító szavaid. | Védelem ellopott kulcsok, kártevő vagy tudatosan rossz célra jóváhagyott tranzakció ellen |
| Ki kapcsolhatja össze a bemeneteket és kimeneteket? | A WabiSabi névtelen hitelesítő adatokat használ a regisztrációk kapcsolatainak elhomályosítására. A nyilvános tranzakcióadatok és más megfigyelések megmaradnak. | Feltétlen garancia rosszindulatú koordinátor, összejátszó résztvevők vagy külső adatok ellen |
| Ki állíthatja meg az előrehaladást? | A sikerhez a koordinátornak, hálózatnak és elég együttműködő résztvevőnek teljesítenie kell a kört. | Fenntartott befejezési idő vagy minden kínált körben való részvételi jog |
| Milyen szoftvert futtatok? | A nyílt forráskód vizsgálható; a letöltés ellenőrzése segít megállapítani a megszerzett fájl eredetét és sértetlenségét. | Bizonyíték minden build hibátlanságára, a számítógép sértetlenségére vagy arra, hogy a távoli szolgáltatás pontosan a közzétett kódot futtatja |

A [WabiSabi-tanulmány 7. szakasza](https://cryptoeconomicsystems.pubpub.org/pub/ficsor-wabisabi-coordinated/release/3) külön kezeli az adatvédelmet, aktív támadásokat és a lopás megelőzését. Ez az útmutató e különbséget alkalmazza felhasználói döntésekre; nem egy telepített pénztárca vagy koordinátor biztonsági auditja.

<span id="consider-the-observer" data-ginger-heading="mérlegeld-a-megfigyelőt" aria-hidden="true"></span>

## Mérlegeld a megfigyelőt

A passzív blokkláncmegfigyelő látja a bemeneteket, kimeneteket, összegeket és későbbi költést. Következtetési módszereket alkalmazhat, és máshonnan megszerzett adatokkal kombinálhatja őket. A kereskedőnek saját számlájáról és ügyfeléről további ismerete van. A tőzsde ismeri a feldolgozott be- vagy kiutalást.

A résztvevő ismeri saját bemeneteit és kimeneteit, ami kizár egyes lehetőségeket. A koordinátor regisztrációkat kezel és protokollidőzítést figyelhet; egy aktívan rosszindulatú koordinátor befolyásolhatja a részvételt vagy a körök befejezését. Ezek eltérő képességek, ezért a csak nyilvános láncmegfigyelést kezelő állítás nem olvasható mindegyikük elleni védelemként.

<span id="apparent-participants-are-not-independent-people" data-ginger-heading="a-látszólagos-résztvevők-nem-független-emberek" aria-hidden="true"></span>

## A látszólagos résztvevők nem független emberek

A Sybil-támadás azt jelenti, hogy egy szereplő több résztvevőként jelenik meg. Ha a támadó a célpont körüli tevékenység nagy részét kezeli, saját UTXO-it kizárhatja a mérlegelt lehetőségekből. A tranzakció forgalmasnak tűnhet, miközben e megfigyelő számára kisebb bizonytalanságot ad, mint amit egy tájékozatlan megfigyelő látna.

A valódi bemenetek és bányászati költségek gazdasági korlátokat jelentenek. Nem teszik lehetővé az átlagos felhasználónak minden résztvevő független személyazonosságának ellenőrzését. A bemenetszám, kimenetszám, tranzakcióvolumen és a pénztárca anonimitási pontszáma ezért nem független emberek népszámlálása.

A nagyobb körök több lehetőséget adhatnak, de az összegek, a résztvevők ismerete és későbbi tranzakciók továbbra is számítanak. Nincs körszám vagy célérték, amely bizonyítja, hogy a támadó semmit nem tudott meg.

<span id="when-the-coordinator-or-connection-is-unavailable" data-ginger-heading="ha-a-koordinátor-vagy-kapcsolat-elérhetetlen" aria-hidden="true"></span>

## Ha a koordinátor vagy kapcsolat elérhetetlen

A kulcsaiddal már kezelt UTXO-k nem válnak a koordinátor által neked tartozott egyenleggé. A továbbítás előtti sikertelen próbálkozás önmagában nem utalja őket a koordinátornak. Aktív kör alatt azonban a Gingernek kritikus munkát kellhet befejeznie, mielőtt a pénz más művelethez elérhető; használd a szüneteltetést, és kövesd az aktuális állapotot.

Ha a CoinJoin nem folytatható, szüneteltesd és vizsgáld az okát. A szokásos küldés továbbra is elérhető aláírási utat, elkölthető UTXO-kat, szinkronizált adatokat és továbbítási módot igényel. A koordinátor kiesése önmagában nem ok a mentések eldobására vagy a szavak feltöltésére helyettesítő szolgáltatáshoz. A választható Ginger 2FA saját szokásos indítási szolgáltatásfüggőséggel rendelkezik, ezért a szavak és eredeti jelmondat függetlenül legyenek helyreállíthatók.

Az elutasítás vagy sikertelen kör önmagában nem támadás bizonyítéka vagy az identitásod megítélése. Fordítva, a sikeres kör nem igazolja a koordinátor becsületességét. Őrizd meg a kapcsolódó privát nyilvántartást, ha konkrét problémát kell vizsgálni.

<span id="decisions-you-can-make" data-ginger-heading="meghozható-döntések" aria-hidden="true"></span>

## Meghozható döntések

1. Hivatalos forrásból szerezd be a Gingert, és ellenőrizd a letöltést. Hitelesített frissítést használj, és védd az aláíró gépet.
2. Hagyd bekapcsolva a Tort a tervezett hálózati adatvédelemhez. Nem rejti el a kifejezetten beküldött adatokat a fogadó szolgáltatás elől.
3. Ellenőrizd a kiválasztott pénztárcát, kimeneti célt, alkalmas UTXO-kat és költségbeállításokat. Ne emelj korlátokat pusztán egy megmagyarázatlan hiba elhallgattatására.
4. Őrizz független helyreállítási anyagot. Kör „feloldásához” soha ne adj koordinátornak vagy segítőnek szavakat, jelmondatot vagy privát kulcsokat.
5. Ellenőrizd az eredményt és a későbbi költést. Az új cím és magas pontszám nem von vissza új adatközlést egy azonosított címzettnek.

A saját Bitcoin-csomópont a tényleges szerepeiben hasznos, például megfelelő beállítás mellett blokkok vagy díjbecslések biztosítására. Nem helyettesíti a CoinJoin-koordinátort, és nem igazolja a résztvevők függetlenségét. A hardverpénztárca elkülöníti a kulcsokat, de nem teszi priváttá a tranzakciógráfot.

Az alapvető tranzakciómodellhez olvasd el a [CoinJoin magyarázatát](/hu/learn-coinjoin/explained/). Adott célra való alkalmasságához olvasd el, [mikor hasznos a CoinJoin](/hu/learn-coinjoin/when-to-use/). Az erős termékállításokat vizsgálandó kérdésként kezeld: mely megfigyelő, milyen feltételezések, mely szoftververzió és milyen bizonyíték?
