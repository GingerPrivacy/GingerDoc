---
doc_id: "getting-started.verify-download"
title: "A Ginger Wallet letöltésének ellenőrzése"
description: "Telepítés előtt ellenőrizd a Ginger Wallet-kiadás aláírását és az aláírókulcs ujjlenyomatát."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
sidebar:
  label: A letöltés ellenőrzése
  badge:
    text: Haladó
    variant: caution
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. A [telepítési útmutatóban](/hu/getting-started/install/) találod a hivatalos letöltést és a számítógépedhez való csomagot.

A különálló aláírás segít megállapítani, hogy a letöltött fájlt egy adott aláírókulcs birtokosa írta alá, és az aláírás óta nem változott. Nem bizonyítja, hogy a szoftver hibátlan. Arról is meg kell győződnöd, hogy az aláírókulcs valóban az, amelyben meg kívántál bízni.

<span id="collect-the-matching-files" data-ginger-heading="a-megfelelő-fájlpár-beszerzése" aria-hidden="true"></span>

## A megfelelő fájlpár beszerzése

A [v2.0.26 kiadásból](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) töltsd le a telepítőt vagy archívumot és a vele azonos nevű, `.asc` végződésű fájlt. Tartsd őket egy mappában. Például a Windows-fájlpár `Ginger-2.0.26.msi` és `Ginger-2.0.26.msi.asc`. Egy DMG, ZIP vagy más verzió aláírása nem ellenőrzi ezt az MSI-fájlt.

A nyilvános aláírókulcsot a [hivatalos weboldal](https://gingerwallet.io/) PGP-hivatkozásán keresztül szerezd be. Mentsd a kulcsot `PGP.txt` néven. Megbízható OpenPGP-alkalmazással, például GnuPG-vel vizsgáld meg és importáld. Ha a GnuPG nincs telepítve, szerezd be a [GnuPG hivatalos letöltési oldaláról](https://gnupg.org/download/).

<span id="check-the-fingerprint" data-ginger-heading="az-ujjlenyomat-ellenőrzése" aria-hidden="true"></span>

## Az ujjlenyomat ellenőrzése

A Ginger által ehhez a kiadáshoz közzétett ujjlenyomat:

```text
FA0B 017A 3E75 CE65 CBF7 838F A8FF 3767 EDF5 DCE9
```

A letöltési mappában megnyitott terminálban importálás előtt vizsgáld meg a kulcsot:

```sh
gpg --show-keys --with-fingerprint PGP.txt
gpg --import PGP.txt
```

A teljes ujjlenyomatot hasonlítsd össze, ne csupán egy rövid kulcsazonosítót vagy a megjelenített nevet. Ha lehetséges, erősítsd meg egy korábban megbízhatónak tekintett példánnyal vagy más bevett Ginger-csatornán keresztül. Ha a kulcsot és az aláírást ugyanabból a feltört forrásból szerzed be, az önmagában nem igazolja a hitelességet. Ha a Ginger kulcscserét jelent be, ellenőrizd a bejelentést, mielőtt megbízol az új ujjlenyomatban.

<span id="verify-the-actual-download" data-ginger-heading="a-tényleges-letöltés-ellenőrzése" aria-hidden="true"></span>

## A tényleges letöltés ellenőrzése

A Windows-telepítőhöz futtasd:

```sh
gpg --verify Ginger-2.0.26.msi.asc Ginger-2.0.26.msi
```

Más platform esetén mindkét fájlnevet cseréld a megfelelő pontos névre. A sikeres ellenőrzésnek a kívánt kulcstól származó érvényes aláírást kell jeleznie. A GnuPG arra is figyelmeztethet, hogy a kulcsot nem hitelesíti megbízható aláírás: ez a kulcs hitelesítésének módjára vonatkozik, és nem keverendő össze a hibás fájlaláírással.

Ha az eredmény **BAD signature**, hiányzik a kulcs, eltér az ujjlenyomat, vagy az ellenőrzés nem fejeződik be, még ne nyisd meg a letöltést. Ellenőrizd a fájlpárt, ismételd meg a letöltést, és ha a probléma fennmarad, kérj segítséget a projekt hivatalos hivatkozásain keresztül. Ne jelölj megbízhatónak ismeretlen kulcsot pusztán azért, hogy eltűnjön a figyelmeztetés.

<span id="checksums-and-platform-signatures" data-ginger-heading="ellenőrzőösszegek-és-platformaláírások" aria-hidden="true"></span>

## Ellenőrzőösszegek és platformaláírások

Az ellenőrzőösszegek összehasonlítása kimutathatja a letöltési hibát. Egy nem megbízható oldalról származó ellenőrzőösszeg nem hitelesíti a szoftvert, mert egy támadó a letöltést és annak ellenőrzőösszegét is lecserélheti. A kiadás ellenőrzőösszegekhez kapcsolódó fájlokat is tartalmaz; a fenti különálló aláírásos eljárás elegendő egy kiválasztott csomag ellenőrzéséhez.

A Windows kódaláírása és a macOS aláírása vagy notarizációja további platformszintű ellenőrzéseket biztosít. Kiegészítik a letöltött kiadás ellenőrzését; nem helyettesítik a helyreállító szavak védelmét és a tranzakciók átnézését.

Sikeres ellenőrzés után térj vissza [az alkalmazás telepítéséhez](/hu/getting-started/install/#install-the-application).
