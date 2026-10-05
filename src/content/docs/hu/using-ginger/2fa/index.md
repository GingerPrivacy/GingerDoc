---
doc_id: "backup-recovery.two-factor-authentication"
title: "Kétfaktoros hitelesítés használata a Gingerben"
description: "Állítsd be a Ginger kétfaktoros hitelesítését, és értsd meg a pénztárcafájl-titkosítást, a Tor követelményét és a helyreállítás korlátait."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-the-default-2fa-state-of-gingerwallet"></span>
<span id="how-do-i-enable-2fa-in-gingerwallet"></span>
<span id="how-do-i-set-up-2fa-using-an-authenticator-app"></span>
<span id="what-is-the-purpose-of-the-2fagws-file"></span>
<span id="do-i-need-to-restart-the-application-after-enabling-2fa"></span>
<span id="how-does-the-login-process-change-after-enabling-2fa"></span>
<span id="how-do-i-disable-2fa"></span>
<span id="what-should-i-do-if-i-change-devices-or-lose-data"></span>
<span id="what-are-the-security-best-practices-for-using-gingerwallet"></span>
<span id="does-gingerwallet-store-any-personal-information"></span>
<span id="what-happens-if-i-lose-access-to-my-authenticator-app"></span>
<span id="how-does-gingerwallet-ensure-security-with-2fa"></span>
<span id="how-can-i-recover-my-labels-and-extra-options-for-my-wallet-if-ive-lost-the-2fa-key"></span>
<span id="why-does-ginger-wallet-require-an-8-digit-2fa-code"></span>
<span id="what-should-i-do-if-my-authenticator-app-only-provides-6-digit-codes"></span>

> Nehézségi szint: Haladó útmutató. Őrizd meg az eredeti helyreállítási adatokat és pénztárcafájlokat, mielőtt módosítod a helyreállítás vagy a fájlok beállításait.

A Ginger választható kétfaktoros hitelesítése (2FA) alkalmazásindítási ellenőrzést és a helyi pénztárcafájlok titkosítását adja hozzá. Elkülönül az egyes pénztárcák jelmondatától. Nem olyan Bitcoin-szabály, amely minden költéshez második aláírást követel, és nem védi a helyreállítószó-mentést olyan személytől, aki a jelmondatát is ismeri.

<span id="understand-the-dependency-first" data-ginger-heading="először-értsd-meg-a-függőséget" aria-hidden="true"></span>

## Először értsd meg a függőséget

A Ginger a 2FA-szolgáltatásával ellenőrzi a hitelesítő kódot, és megszerzi a védett pénztárcafájlok visszafejtéséhez szükséges titkot. A szokásos 2FA-indításhoz ezért működő kapcsolat szükséges ehhez a szolgáltatáshoz. A funkció használatához a Tornak bekapcsolva kell lennie.

A helyi `2fa_info.gws` fájl egy kliens/szerver-azonosítót tárol. Nem a helyreállító szavak titkosított másolata, és nem önálló helyreállító kulcs. Csak ennek a fájlnak a másolása nem állít helyre pénztárcát. Sem a pénztárca jelmondata, sem a 2FA bekapcsolása nem jelenti, hogy minden címke, napló vagy kísérőfájl ugyanilyen titkosítást kap. Védd a teljes adatmappát és a mentéseit.

A 2FA bekapcsolása előtt ellenőrizd, hogy minden helyreállítani kívánt szoftverpénztárca helyreállító szavai és pontos eredeti jelmondata megvan-e. A pénztárca- és metaadatfájlokról is tarts védett másolatokat.

<span id="enable-2fa" data-ginger-heading="a-2fa-bekapcsolása" aria-hidden="true"></span>

## A 2FA bekapcsolása

1. Nyisd meg a **Settings** → **Security** menüt. Szükség esetén kapcsold be a **Network anonymization (Tor)** lehetőséget, és a kérésre indítsd újra, hogy a Tor aktív legyen.
2. Kapcsold be a **Two-factor authentication** lehetőséget. A beállítási ablak hitelesítő alkalmazásnak szánt QR-kódot jelenít meg.
3. Bizalmasan add hozzá a QR-kódot a hitelesítődhöz. Titkot tartalmaz, ezért ne oszd meg. A Ginger beállítása SHA256-tal és nyolcjegyű kódokkal kompatibilis hitelesítőt igényel; a kézzel létrehozott alapértelmezett hatjegyű bejegyzés nem egyenértékű.
4. Add meg az aktuális kódot, és válaszd a **Verify** lehetőséget. Ha sikertelen, ellenőrizd a telefon időszinkronizálását és azt, hogy a bejegyzés ebből a beállításból származik-e.
5. Az utasítás szerint indítsd újra a Gingert. Teljesítsd az indítási 2FA-kérést. Sikeres hitelesített indításkor a Ginger megszerzi a titkosítási titkot, és gondoskodik a pénztárca és az automatikus JSON-pénztárcamentések titkosításáról.

Ne feltételezd, hogy a beállítás vagy a hitelesített újraindítás előtt másolt fájlok megkapták az új védelmet. A régebbi mentéseket külön védd. A kapcsoló bekapcsolása nem ok az egyetlen biztosan jó helyreállítási anyag törlésére.

<span id="everyday-use-and-disabling" data-ginger-heading="mindennapi-használat-és-kikapcsolás" aria-hidden="true"></span>

## Mindennapi használat és kikapcsolás

Indításkor add meg az aktuális hitelesítő kódot. Az alkalmazás betöltése után az egyes pénztárcák jelmondatának és a hardveres jóváhagyásoknak továbbra is saját szerepük van. A már feloldott számítógép továbbra is biztonsági kockázat.

Ha hozzáférsz, a 2FA kikapcsolásához nyisd meg a **Settings** → **Security** menüt, és kapcsold ki a **Two-factor authentication** lehetőséget. A Ginger eltávolítja a kiegészítő pénztárcafájl-titkosítást és a helyi 2FA-kapcsolatot. A szokásos szoftverpénztárca jelmondatvédelme különálló és továbbra is fontos. Készíts mentést az eredményül kapott fájlokról, ha a mentési eljárásod az aktuális titkosítási állapotuktól függ.

<span id="lost-phone-missing-file-or-unavailable-service" data-ginger-heading="elveszett-telefon-hiányzó-fájl-vagy-elérhetetlen-szolgáltatás" aria-hidden="true"></span>

## Elveszett telefon, hiányzó fájl vagy elérhetetlen szolgáltatás

Az elveszett hitelesítő vagy a szolgáltatás kiesése megakadályozhatja a szokásos indítást. Először őrizd meg a meglévő adatmappát. Elutasított kódnál ellenőrizd az időt és a kapcsolatot; ugyanazokra az adatokra történő ismételt telepítés nem hozza újra létre az elveszett hitelesítő titkot.

A szoftverpénztárca pénzéhez külön megbízható telepítésen vagy tiszta alkalmazáskörnyezetben állíts helyre az eredeti szavakból és jelmondatból. A régi fájlok módosítása előtt ellenőrizd az ismert előzményeket és a hozzáférést. A helyreállított kulcsok nem függenek a régi 2FA-beállítás megőrzésétől, de a Ginger letöltéséhez és szinkronizálásához továbbra is szükségesek a szokásos hálózati szolgáltatásai. Kompatibilis helyreállító szoftver is lehetőség lehet, ha támogatja az eredeti fióktípusokat.

A címkék és más helyi tulajdonságok nem állíthatók újra elő a szavakból. Őrizd meg a `.attr` mentéseiket a metaadat-helyreállítás vizsgálata előtt. A 2FA beállításakor és hibaelhárításakor őrizd meg a meglévő pénztárcaadatokat.

Ha a helyreállítási anyag kiszivárgott, új pénztárca létrehozása és a megmaradt pénz átutalása változtatja meg, mely kulcsok rendelkeznek vele. A 2FA kikapcsolása vagy az alkalmazás újratelepítése nem érvényteleníti a régi helyreállító szavakat.
