---
doc_id: "backup-recovery.backups"
title: "Biztonsági mentés a Ginger-pénztárcádról"
description: "Őrizd meg és ellenőrizd a helyreállító szavakat és az eredeti jelmondatot, amelyekkel a számítógép elvesztése után helyreállíthatod a Ginger szoftverpénztárcáját."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nehézségi szint: Kezdd itt. Először az alapvető lépések következnek; a haladó hivatkozások később, igény szerint olvashatók.

A Ginger szoftverpénztárcájához őrizd meg a helyreállító szavakat és a pontos eredeti jelmondatot, ha használtál ilyet. Ezekkel a számítógép elvesztése után is visszanyerheted a hozzáférést. A hardverpénztárca saját eszközmentési eljárást használ; a szavait ne tartsd a számítógépen.

<span id="the-backup-you-need-first" data-ginger-heading="az-elsőként-szükséges-mentés" aria-hidden="true"></span>

## Az elsőként szükséges mentés

1. Írd le a szavakat a megjelenített sorrendben, és tartsd őket titokban.
2. Jegyezd fel a pontos jelmondatot, vagy azt, hogy a pénztárca jelmondat nélkül jött létre. A Ginger nem tudja visszaállítani.
3. Olyan helyen tartsd a mentést, amelyet a számítógép elvesztése után is elérsz, de mások nem olvashatják el.
4. Ellenőrizd a mentést, amíg még hozzáférsz a pénztárcához.

A pénztárca neve nem helyreállítási titok. Egy hitelesítő kód vagy hardveres PIN nem helyettesíti a szavakat és az eredeti jelmondatot.

<span id="store-recovery-information-safely" data-ginger-heading="a-helyreállítási-adatok-biztonságos-tárolása" aria-hidden="true"></span>

## A helyreállítási adatok biztonságos tárolása

Jól olvashatóan és az eredeti sorrendben írd le a szavakat. Úgy tárold őket, hogy a számítógép elvesztése után visszaszerezhesd, de mások ne olvashassák el. Fontolj meg több tartós példányt, ha tűz, víz vagy egyetlen elérhetetlenné váló hely meghiúsítaná a mentést. Tarts nyilvántartást a példányok helyéről, de a szavakat ne sorold fel egy szokásos felhős jegyzetben.

A nem üres jelmondatot is tedd helyreállíthatóvá. A puszta megjegyzés kudarcot vallhat. A külön tárolás csökkenti annak esélyét, hogy egyetlen felfedezés mindent felfedjen, de az elrendezésnek továbbra is érthetőnek kell maradnia számodra vagy az általad tudatosan felhatalmazott személy számára. Ne találj ki olyan házi módszert, amely a szavakat darabokra bontja, ha nem tudod, hogyan állíthatók helyre.

Az alkalmazás jelszava, az eszköz PIN-je, a hitelesítő kód és a BIP39-jelmondat nem felcserélhető. A mentési utasításokat egyértelműen jelöld, anélkül, hogy a titkokat illetéktelen olvasó elé tárnád.

<span id="choose-something-durable-and-readable" data-ginger-heading="tartós-és-olvasható-megoldást-válassz" aria-hidden="true"></span>

## Tartós és olvasható megoldást válassz

A papírt tűz, víz vagy fakulás károsíthatja. A fém ellenállhat bizonyos károknak, de az elolvasása ellen továbbra is védeni kell. Ellenőrizd, hogy a mentés olvasható és elérhető marad.

A helyreállító szavakhoz kerüld a fényképeket, szokásos felhős jegyzeteket és nyomtatókat: ezek olyan másolatokat hagyhatnak, amelyeket nem te kezelsz. Ha több példányt tartasz, védd és kövesd nyomon mindegyiket. Ne bontsd a szavakat rögtönzött rejtvénnyé, amelyet később esetleg nem tudsz visszaállítani.

<span id="check-the-backup-before-you-need-it" data-ginger-heading="ellenőrizd-a-mentést-mielőtt-szükséged-lenne-rá" aria-hidden="true"></span>

## Ellenőrizd a mentést, mielőtt szükséged lenne rá

Egy megnyitott szoftverpénztárcában használd a **Wallet Settings** → **Tools** → **Verify Recovery Words** menüpontot, majd a **Verify** gombot. A mentésből add meg a szavakat. A sikeres ellenőrzés hasznos bizonyíték arra, hogy a szavak az adott pénztárcához tartoznak. Győződj meg a jelmondat feljegyzésének helyességéről is, és arról, hogy megtalálod a megőrizni kívánt fájlokat.

Ha a szavak ellenőrzése sikertelen, bizalmasan ellenőrizd a helyesírást és a sorrendet. Ha még tudsz költeni, de nem tudsz használható helyreállítási mentést létrehozni, hozz létre új pénztárcát ellenőrzött mentéssel, és körültekintően utald át a pénzt. A vizsgálat közben ne töröld a régi pénztárcát.

Fontos címke- vagy beállításváltozások után készíts új mentést a helyi metaadatokról. Több bitcoin fogadása általában nem igényel új helyreállító szavakat, de egy új pénztárca vagy eltérő jelmondat igen.

<span id="what-about-labels-and-computer-files" data-ginger-heading="mi-a-helyzet-a-címkékkel-és-a-számítógépes-fájlokkal" aria-hidden="true"></span>

## Mi a helyzet a címkékkel és a számítógépes fájlokkal?

A helyreállító szavak nem hozzák vissza minden címkédet, beállításodat vagy szolgáltatói rendelési adatodat. A helyi automatikus mentések ugyanazon a számítógépen vannak, így a teljes számítógép elvesztése ellen nem védenek.

Választható haladó útmutató: [pénztárcafájlok, metaadatok és a jelmondat részletei](/hu/backup-recovery/backup-files/). A fájlmásolatokat és a 2FA-hoz kapcsolódó fájlokat az alapvető szavas mentéstől külön ismerteti.
