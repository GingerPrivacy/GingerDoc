---
doc_id: "backup-recovery.passphrase"
title: "Mi az a jelmondat?"
description: "Értsd meg a Ginger-pénztárca jelmondatát, a szükséges mentést és azt, miért kell az eredeti jelmondat a helyreállításhoz akkor is, ha egy másik üres pénztárcát nyit meg."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: Jelmondat
prev: false
next: false
---

> Nehézségi szint: Kezdd itt. Ez az útmutató a Ginger v2.0.26 szoftverpénztárcáiról szól. Hardverpénztárcához kövesd a gyártó helyreállítási utasításait, és ne tartsd a helyreállító szavait a számítógépen.

A jelmondat egy választható titok, amelyet a pénztárca létrehozásakor választasz. A Gingerben védi a szoftverpénztárcához való hozzáférést, és a helyreállítási adatok része is. Ugyanazon pénztárca helyreállításához az eredeti helyreállító szavak és a pontos eredeti jelmondat szükséges, ha használtál ilyet. A Ginger nem tudja visszaállítani az elfelejtett jelmondatot.

<span id="do-i-have-to-use-a-passphrase" data-ginger-heading="kötelező-jelmondatot-használni" aria-hidden="true"></span>

## Kötelező jelmondatot használni?

Pénztárca létrehozásakor a Ginger a **Confirm Recovery Words** után mutatja az **Add Passphrase** lépést. Megadhatsz és megerősíthetsz egy jelmondatot, vagy mindkét mezőt üresen hagyhatod jelmondat nélküli pénztárcához.

Jelmondat nélkül aki megszerzi a helyreállító szavaidat, helyreállíthatja és elköltheti a bitcoinjaidat. A jelmondat egy újabb megvédendő titkot ad hozzá, de elfelejtése akkor is meghiúsíthatja a helyreállítást, ha megvannak a szavak. Nehezen kitalálható, pontosan feljegyezhető és megismételhető értéket válassz. Kerüld az elején és végén a szóközöket; a Ginger beviteli ellenőrzése elutasítja őket.

<span id="is-it-the-same-as-recovery-words-or-a-2fa-code" data-ginger-heading="ugyanaz-mint-a-helyreállító-szavak-vagy-egy-2fa-kód" aria-hidden="true"></span>

## Ugyanaz, mint a helyreállító szavak vagy egy 2FA-kód?

Nem. A Ginger egy új szoftverpénztárcához tizenkét **Recovery Words** szót hoz létre. A jelmondatot külön választod. Tartsd külön a számozott szólistától; ne add meg plusz helyreállító szóként.

A pénztárca neve csupán helyi címke. A kétfaktoros hitelesítés (2FA) hitelesítő kódja külön, alkalmazásindítási ellenőrzés. Egyik sem helyettesíti az eredeti szavakat és jelmondatot a szoftverpénztárca helyreállításakor.

<span id="what-should-i-back-up" data-ginger-heading="miről-készítsek-mentést" aria-hidden="true"></span>

## Miről készítsek mentést?

- A helyreállító szavakról, a megjelenített sorrendben.
- A pontos eredeti jelmondatról, a kis- és nagybetűkkel és karakterekkel együtt, vagy egyértelmű feljegyzésről, hogy jelmondat nélkül hoztad létre a pénztárcát.

Tartsd ezeket titokban, és a számítógép elvesztése után is elérhetően. Offline írd le a szavakat; kerüld a fényképeket, e-mailt és szokásos felhős jegyzeteket. A jelmondatot is őrizd meg helyreállíthatóan. A külön tárolás védhet az ellen, hogy valaki együtt találja meg mindkét titkot, de győződj meg róla, hogy szükség esetén mindkettőt megtalálod. Ne hagyatkozz csupán a memóriádra.

A helyreállító szavak visszaállítják a bitcoinhoz való hozzáférést, de nem állítanak helyre minden címkét és beállítást. Helyreállítási probléma vizsgálatakor őrizd meg a meglévő pénztárcafájlokat. Az ugyanazon számítógépen lévő automatikus mentés nem véd a számítógép elvesztése ellen.

<span id="how-do-i-check-my-backup" data-ginger-heading="hogyan-ellenőrizzem-a-mentésemet" aria-hidden="true"></span>

## Hogyan ellenőrizzem a mentésemet?

Amíg hozzáférsz a szoftverpénztárcához, nyisd meg a **Wallet Settings** → **Tools** menüt. Keresd a **Verify Recovery Words** lehetőséget, válaszd a **Verify** gombot, majd a mentésből add meg a szavakat, és fejezd be az ellenőrzést.

Ez azt ellenőrzi, hogy a szavak a pénztárcához tartoznak-e. Nem mutatja meg az elfelejtett szavakat, és nem állítja vissza a jelmondatot. Győződj meg a jelmondat feljegyzésének helyességéről is. Ha az ellenőrzés sikertelen, bizalmasan ellenőrizd a helyesírást és a szósorrendet, mielőtt a mentésre hagyatkoznál.

<span id="how-do-i-use-the-passphrase-during-recovery" data-ginger-heading="hogyan-használjam-a-jelmondatot-helyreállításkor" aria-hidden="true"></span>

## Hogyan használjam a jelmondatot helyreállításkor?

Ezek a lépések Ginger-szoftverpénztárca szavakból történő helyreállításához valók. Őrizd meg az esetleges meglévő pénztárcafájlokat a helyreállítás ellenőrzéséig.

1. Nyisd meg a Gingert megbízható számítógépen. A pénztárca hozzáadására szolgáló képernyőn válaszd a **Recover** lehetőséget.
2. Ha kéri, adj meg külön **Wallet Name** nevet, hogy megkülönböztesd a helyreállított pénztárcát a meglévőktől.
3. Add meg sorrendben az eredeti **Recovery Words** szavakat.
4. Az **Enter Passphrase** lépésnél add meg és erősítsd meg az eredeti jelmondatot. Csak akkor hagyd üresen a mezőket, ha az eredeti pénztárcának nem volt jelmondata. Itt nem új jelszót választasz.
5. Várd meg a helyreállítás és a szinkronizálás befejezését, majd nézd meg az ismert tranzakciós előzményeket. A szinkronizálás a pénztárcához tartozó tranzakciók keresése a Bitcoin-hálózaton.

<span id="why-is-my-recovered-wallet-empty" data-ginger-heading="miért-üres-a-helyreállított-pénztárcám" aria-hidden="true"></span>

## Miért üres a helyreállított pénztárcám?

Szavakból történő helyreállításkor az eltérő jelmondat eltérő pénztárcát hoz létre. A Ginger ezért elfogadhat egy elgépelt jelmondatot, és üres pénztárcát állíthat helyre anélkül, hogy hibás jelmondatra figyelmeztetne. Ez eltér a meglévő védett pénztárcafájl megnyitásától, ahol a hibás jelmondatot elutasítja.

Ellenőrizd az eredeti jelmondatot, a kis- és nagybetűket, szóközöket és billentyűzetkiosztást. Nézd meg azt is, hogy a kívánt pénztárcát és Bitcoin-hálózatot választottad-e, és befejeződött-e a helyreállítás. A befejezetlen keresés hiányos egyenleget mutathat. Az üres egyenleg önmagában nem bizonyítja az eredeti bitcoin elvesztését.

Ha a várt előzmények továbbra is hiányoznak, őrizd meg az eredetieket, és kérj segítséget [a hivatalos Ginger-projekt támogatási hivatkozásain keresztül](https://gingerwallet.io/). Csak nem titkos adatokat ossz meg, például az alkalmazás verzióját és a hiba szövegét. Soha ne küldd el az ügyfélszolgálatnak a helyreállító szavakat, jelmondatot vagy pénztárcafájlokat.

<span id="can-i-reset-or-replace-a-forgotten-passphrase" data-ginger-heading="visszaállíthatom-vagy-lecserélhetem-az-elfelejtett-jelmondatot" aria-hidden="true"></span>

## Visszaállíthatom vagy lecserélhetem az elfelejtett jelmondatot?

A Ginger nem tudja visszaállítani. Ugyanazokkal a szavakkal és új jelmondattal történő helyreállítás másik pénztárcához ad hozzáférést; nem módosítja az eredeti pénztárca jelmondatát, és nem mozgatja át a bitcoinját.

Ha még tudsz küldeni az eredeti pénztárcából, de nem tudsz használható helyreállítási mentést biztosítani, hozz létre új pénztárcát, ellenőrizd a mentését, és gondosan utald át a pénzt, amíg még hozzáférsz. Őrizd meg a régi pénztárcát az átutalás visszaigazolásáig. Ha nincs sem költési hozzáférésed, sem szükséges helyreállítási adatod, az ügyfélszolgálat nem tudja újralétrehozni a hiányzó titkot.
