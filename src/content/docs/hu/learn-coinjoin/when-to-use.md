---
doc_id: "learn-coinjoin.when-to-use"
title: "Mikor van értelme a CoinJoinnak?"
description: "Mérlegeld, hogy a CoinJoin kezeli-e a Bitcoin-adatvédelmi aggályodat, mibe kerül, és hogyan tervezd az utána következő költést."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nehézségi szint: Mindennapi használat. Akkor válaszd ezt az útmutatót, amikor az általa bemutatott feladatra van szükséged.

A CoinJoin akkor hasznos, ha a tranzakciós kapcsolatok adatainak csökkentése valódi aggályodat kezeli. Kevésbé hasznos, ha a fő probléma ellopott helyreállító szavak, feltört számítógép vagy olyan adat, amelyet épp közvetlenül készülsz megadni egy szolgáltatónak.

<span id="start-with-a-concrete-objective" data-ginger-heading="konkrét-célból-indulj-ki" aria-hidden="true"></span>

## Konkrét célból indulj ki

Például azt szeretnéd, hogy egy jövőbeli címzett kevésbé lássa közvetlenül egy korábban azonosított beérkezés előzményeit. Írd le, ki ismeri már ezt a beérkezést, és mit fed fel a következő fizetés. A CoinJoin módosíthatja a köztes tranzakciós kapcsolatok problémáját, de az első adatközlést nem vonhatja vissza, és a másodikat nem akadályozhatja meg.

Ha a célod egyszerűen a bitcoin tartása közbeni kulcsvédelem, a helyreállítható mentés és megfelelő hardverpénztárcás folyamat közvetlenebbül kezeli ezt. Ha a gondod egy minden számlához újrahasznált nyilvános fogadási cím, először szüntesd meg az újrahasználatot; az utólagos CoinJoin nem teszi priváttá a régi beérkezéseket.

<span id="compare-the-tradeoffs" data-ginger-heading="hasonlítsd-össze-a-kompromisszumokat" aria-hidden="true"></span>

## Hasonlítsd össze a kompromisszumokat

| Helyzet | Mérlegelendő döntés |
| --- | --- |
| Sok kis UTXO magas bányászati díjak mellett | A részvétel az összeg jelentős részét emésztheti fel; ellenőrizd a díjkörülményeket, és fontold meg a várakozást |
| Azonnal esedékes fizetés | A CoinJoin befejezése nem ütemezett; pontos határidőhöz ne hagyatkozz egy körre |
| Hosszú távú költés azonosított forrásból | Mérlegeld a CoinJoin, külön fogadási címek és későbbi UTXO-kiválasztás együttműködését |
| A szolgáltató személyazonosság- és címigazolást kér | A közvetlen adatközlés megmarad; ellenőrizd, hogy a CoinJoin megváltoztatja-e a számodra fontos adatot |
| A cél hardverpénztárca | Ellenőrizd a fogadási fiókot és a kiadott célválasztási folyamatot; ne importáld a hardver helyreállító szavait egy online szoftverpénztárcába |
| Nem tudod elérhetően tartani az asztali gépet | Az automatikus részvétel a kör alatt kapcsolatot és feloldott aláírási képességet igényel |

Ezek kompromisszumok, nem egy adott összeg mozgatására szóló ajánlás vagy pénzügyi eredmény ígérete. Kis, kezelhető összeggel tanuld a folyamatot, és egyeztesd a díjakat, mielőtt növeled a kitettséget.

<span id="set-a-cost-and-attention-budget" data-ginger-heading="szabj-költség--és-figyelmi-keretet" aria-hidden="true"></span>

## Szabj költség- és figyelmi keretet

Nézd át mindkét díjösszetevőt és az ismételt körök működését. Döntsd el, mennyit költenél a kívánt adatvédelmi javulásra, és milyen gyakran ellenőrzöd az eredményt. A helyi anonimitási cél vezérlőparaméter, nem díjajánlat vagy mérhető garancia egy ellenféllel szemben.

A Ginger leállítási küszöbe megakadályozhat bizonyos gazdaságtalan automatikus részvételeket. Az időpreferencia és díjküszöb csökkentheti a részvételt drága időszakokban. Ezek nem általános korlátok a sok kör alatt elkölthető teljes összegre.

<span id="plan-the-next-spend" data-ginger-heading="tervezd-meg-a-következő-költést" aria-hidden="true"></span>

## Tervezd meg a következő költést

Kérj új célt, tarts hasznos helyi címkéket, és ellenőrizd a kiválasztott bemeneteket. Kerüld minden eredményül kapott kimenet reflexszerű összevonását pusztán a pénztárca egyszerűsítése érdekében. Ha a kereskedő vagy tőzsde megtudja a személyazonosságodat, fizetés előtt értsd meg ezt az adatközlést.

Ne kezeld más szolgáltató hirdetett elfogadását állandónak. Egy szolgáltatás módosíthatja a szabályzatát, vagy kérdéseket tehet fel az átutalásról. A Ginger nem igazolhatja egy tranzakció jövőbeli elfogadását, és nem garantálhatja minden előzménykapcsolat CoinJoin általi eltávolítását.

<span id="try-the-released-workflow-deliberately" data-ginger-heading="tudatosan-próbáld-ki-a-kiadott-folyamatot" aria-hidden="true"></span>

## Tudatosan próbáld ki a kiadott folyamatot

Ha világos a cél, a mentés és a költség, nyiss meg szinkronizált szoftverpénztárcát, nézd át a **Coinjoin Settings** beállításait, és dönts a kézi indítás és az **Automatically start coinjoin** között. Figyeld az állapotot, és vizsgálj meg egy befejezett kört az előzményekben. Ha a működés vagy egyenlegváltozás eltér a várttól, szüneteltesd, és folytatás előtt vizsgáld meg.

A döntés feltételezéseihez olvasd el, [miben bízol CoinJoin közben](/hu/learn-coinjoin/trust-and-limits/). Elkülöníti a kulcsok kezelését, a tranzakciós adatvédelmet, a szolgáltatás elérhetőségét és a futtatott szoftverbe vetett bizalmat.
