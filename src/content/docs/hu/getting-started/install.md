---
doc_id: "getting-started.install"
title: "A Ginger Wallet telepítése"
description: "Válaszd ki a megfelelő asztali Ginger Wallet-csomagot, ellenőrizd a kompatibilitást, és telepítsd a kiadott alkalmazást."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: A Ginger telepítése
prev:
  link: /getting-started/
  label: Kezdd itt
next:
  link: /getting-started/first-wallet/
  label: Az első pénztárcád létrehozása
---

> Nehézségi szint: Kezdd itt. Először az alapvető lépések következnek; a haladó hivatkozások később, igény szerint olvashatók.

A Ginger Wallet egy asztali Bitcoin-pénztárca. Te kezeled a bitcoinjaid kulcsait, és a CoinJoinnal megnehezítheted a tranzakciók követését. Ez a kiadás nem kínál mobilpénztárcát, Lightning-pénztárcát vagy támogatást más kriptovalutákhoz.

Ez az útmutató a 2.0.26 verzióról szól. A szoftvert [a Ginger hivatalos weboldaláról](https://gingerwallet.io/) vagy az ott hivatkozott [GitHub-kiadásból](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) szerezd be. Egy keresési hirdetés, privát üzenet vagy hasonló nevű mobilalkalmazás nem megbízható letöltési forrás.

<span id="choose-a-download" data-ginger-heading="letöltési-csomag-kiválasztása" aria-hidden="true"></span>

## Letöltési csomag kiválasztása

| Számítógép | A kiadás által támogatott rendszer | Letöltés |
| --- | --- | --- |
| Windows PC, x64 | Windows 10, 1607 vagy újabb verzió; Windows 11, 22000 vagy újabb build | `Ginger-2.0.26.msi` |
| Apple silicon processzoros Mac | macOS 12 vagy újabb | `Ginger-2.0.26-arm64.dmg` |
| Intel processzoros Mac | macOS 12 vagy újabb | `Ginger-2.0.26.dmg` |
| Ubuntu vagy Debian, x64 | Ubuntu 22.04 vagy újabb; Debian 11 vagy újabb | `Ginger-2.0.26.deb` |
| Más támogatott Linux, x64 | A kiadás Fedora 37 vagy újabb rendszert is felsorol | `Ginger-2.0.26.tar.gz` |

Macen az **About This Mac** mutatja a chipet vagy processzort. A kiadás `win-x64`, `linux-x64`, `macOS-x64` és `macOS-arm64` jelölésű ZIP-archívumokat is tartalmaz. Ebben a kiadásban nincs Windows ARM- vagy Linux ARM-csomag. Ne feltételezd, hogy a más processzorhoz készült archívum működni fog.

A Gingernek internetkapcsolatra és írható tárhelyre van szüksége a pénztárca- és szinkronizálási adatokhoz. A választható teljes csomópont lényegesen több lemezterületet, sávszélességet és kezdeti szinkronizálási időt igényel, mint a szokásos pénztárcahasználat. Az induláshoz nincs szükséged teljes csomópontra, külön Tor-telepítésre vagy fejlesztői eszközökre.

<span id="install-the-application" data-ginger-heading="az-alkalmazás-telepítése" aria-hidden="true"></span>

## Az alkalmazás telepítése

1. Töltsd le a rendszeredhez való csomagot a hivatalos kiadásból. Ellenőrizd a forrást, a verziót és a csomag nevét, és figyelj az operációs rendszer aláírás- és biztonsági ellenőrzéseire. Független PGP-ellenőrzéshez használd a hozzá tartozó `.asc` fájlt és a külön [haladó letöltés-ellenőrzési útmutatót](/hu/getting-started/verify-download/), mielőtt megnyitod a csomagot.
2. Windowson nyisd meg a `.msi` fájlt, és kövesd a telepítő utasításait. macOS-en nyisd meg a `.dmg` fájlt, és másold a Gingert az Applications mappába. Ubuntun vagy Debianon nyisd meg a `.deb` fájlt a rendszer szoftvertelepítőjével. A Linux-archívumot teljes egészében bontsd ki, és indítsd el a benne lévő alkalmazást; a kísérőfájlokat tartsd együtt.
3. Nyisd meg a Gingert. Hagyj időt az első csatlakozásra és szinkronizálásra. A Tor a csomag része, és rendszerint a pénztárcával együtt indul.
4. Folytasd [egy pénztárca létrehozásával és megnyitásával](/hu/getting-started/first-wallet/).

A ZIP- vagy tar-archívum használatával elkerülhető a szokásos telepítő, de ettől a pénztárca nem lesz eldobható, és nem működik nyomtalanul a számítógépen. A pénztárcafájlok az alkalmazástól külön vannak tárolva. Készíts mentést, mielőtt bármelyiket áthelyezed vagy eltávolítod.

<span id="if-your-operating-system-displays-a-warning" data-ginger-heading="ha-az-operációs-rendszer-figyelmeztetést-jelenít-meg" aria-hidden="true"></span>

## Ha az operációs rendszer figyelmeztetést jelenít meg

Egy új kiadásnak még nem feltétlenül alakult ki jó letöltési hírneve. A figyelmeztetés sérült vagy nem megbízható fájlt is jelezhet. Először ellenőrizd a letöltés forrását, a verzió egyezését és az aláírást. Ha az ellenőrzés sikertelen, állj meg, és töltsd le újra a hivatalos kiadásból. Ne kapcsold ki a vírusvédelmet vagy a rendszerszintű biztonsági ellenőrzéseket egy megmagyarázatlan figyelmeztetés megkerüléséhez.

Linuxos eszközhozzáférési problémák esetén nézd meg a hardverpénztárca gyártójának USB-jogosultságokra vonatkozó útmutatóját. A pénztárca telepítése nem teszi szükségessé, hogy folyamatosan rendszergazdaként futtasd.

<span id="updates-and-availability" data-ginger-heading="frissítések-és-elérhetőség" aria-hidden="true"></span>

## Frissítések és elérhetőség

A [kiadások listája](https://github.com/GingerPrivacy/GingerWallet/releases) mutatja a közzétett verziókat és a változásaikat. A **Settings** → **General** alatt az **Auto download new version** szabályozza a frissítések letöltését. A frissítés letöltése nem ugyanaz, mint a telepítése; kövesd a frissítési értesítés utasításait, és hagyd a Gingert szabályosan bezáródni. Frissítés előtt legyen kéznél a helyreállítási mentésed. Az alkalmazás fájljai lecserélhetők a pénztárcaadatok szándékos törlése nélkül.

Elfogadás előtt olvasd el a Gingerben megjelenő aktuális szolgáltatási feltételeket, beleértve a használati jogosultságra vonatkozó korlátozásokat. Az alkalmazás telepítése nem jelent jogosultságot minden kapcsolódó szolgáltatás használatára.
