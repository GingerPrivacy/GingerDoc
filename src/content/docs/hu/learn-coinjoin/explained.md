---
doc_id: "learn-coinjoin.explained"
title: "Mi az a CoinJoin? Egyszerű magyarázat"
description: "Ismerd meg közérthetően, hogyan segíthet a közös Bitcoin-tranzakció az adatvédelemben, mennyibe kerül, és mit nem rejthet el."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nehézségi szint: Kezdd itt. Először az alapvető lépések következnek; a haladó hivatkozások később, igény szerint olvashatók.

A CoinJoin több ember Bitcoin-műveleteit egy közös tranzakcióba helyezi. Ez megnehezítheti, hogy a nyilvános előzményeket olvasó személy megmondja, melyik eredményül kapott UTXO melyik emberhez tartozik.

Képzeld el, hogy több ember közös tranzakcióba fizet be, majd új bitcoinrészeket kap vissza. A nyilvánosság látja a mozgó összegeket. Kevésbé lehet világos, hogy kinek a pénzéből melyik rész lett. Ez csak szemléltetés: a valódi körök eltérő összegekkel és összetettebb részletekkel működnek.

<span id="do-i-hand-my-bitcoin-to-someone-else" data-ginger-heading="átadom-a-bitcoinomat-valaki-másnak" aria-hidden="true"></span>

## Átadom a bitcoinomat valaki másnak?

A Ginger pénztárcája megtartja a költés jóváhagyásához használt adatokat, és aláírás előtt ellenőrzi a javasolt tranzakciót. Nem kell először egy keverőszolgáltatás által kezelt egyenlegre befizetned.

Továbbra is megbízható telepítésre, védett számítógépre és helyreállítási mentésre van szükséged. A kört szervező szolgáltatásnak is elérhetőnek kell lennie. A kulcsok megtartása nem jelenti minden más probléma megszűnését.

<span id="why-might-i-use-it" data-ginger-heading="miért-használnám" aria-hidden="true"></span>

## Miért használnám?

Lehet, hogy azt szeretnéd, hogy a fizetés címzettje kevesebbet tudjon más fizetéseidről. Vagy hogy a későbbi költés kevésbé kapcsolódjon közvetlenül egy korábban közzétett címedhez.

A CoinJoin segíthet ezeknél a kapcsolatoknál. Nem törölheti a tőzsde kiutalási nyilvántartását, és nem feledtetheti el a kereskedővel, ki rendelt. A blokklánc nyilvános marad, és egy későbbi fizetés új kapcsolatot fedhet fel.

<span id="what-will-it-cost" data-ginger-heading="mennyibe-kerül" aria-hidden="true"></span>

## Mennyibe kerül?

A sikeres kör Bitcoin-bányászati díjakat fizet, és koordinátori díjat is felszámíthat. A koordinátori díj alóli mentesség nem szünteti meg a bányászati költséget. Több kör több költséget jelenthet.

Nincs rögzített befejezési idő. A Ginger visszaigazolásokra, elfogadható díjakra vagy más résztvevőkre várhat. Olvasd el az állapotot, és nézd át az eredményt, mielőtt az ismételt részvételt felügyelet nélkül hagyod.

<span id="do-i-need-it-before-my-first-payment" data-ginger-heading="szükségem-van-rá-az-első-fizetés-előtt" aria-hidden="true"></span>

## Szükségem van rá az első fizetés előtt?

Nem. A fogadás, küldés és CoinJoin külön műveletek. Először megtanulhatod a szokásos fizetéseket, majd eldöntheted, milyen adatvédelmi problémát szeretnél kezelni.

Ehhez olvasd el, [mikor hasznos a CoinJoin](/hu/learn-coinjoin/when-to-use/). Választható haladó olvasmány: [bizalom és korlátok](/hu/learn-coinjoin/trust-and-limits/), benne a különböző megfigyelők által megszerezhető adatokkal. A szokásos indítási és szüneteltetési vezérlőkhöz nem kell tanulmányoznod a protokollt.
