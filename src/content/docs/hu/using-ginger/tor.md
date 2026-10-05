---
doc_id: "settings-network.tor-sync"
title: "Tor, szinkronizálás és hálózati adatvédelem"
description: "Értsd meg a Ginger kapcsolatait, a Tor védelmét és a lassú szinkronizálás vizsgálatát a pénztárca tevékenységének felfedése nélkül."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nehézségi szint: Mindennapi használat. Akkor válaszd ezt az útmutatót, amikor az általa bemutatott feladatra van szükséged.

A Gingernek hálózati adatokra van szüksége a tranzakcióid megtalálásához, a fizetések továbbításához és a CoinJoin-részvételhez. A Tor a csomag része, és a szokásos hálózati kapcsolatokhoz alapértelmezetten be van kapcsolva. Segít elkülöníteni az IP-címedet a felkeresett szolgáltatásoktól, de nem rejti el a nyilvános Bitcoin-összegeket és -tranzakciókat.

<span id="tor-settings" data-ginger-heading="tor-beállítások" aria-hidden="true"></span>

## Tor-beállítások

Nyisd meg a **Settings** → **Security** menüt, és keresd a **Network anonymization (Tor)** beállítást. Szokásos adatvédelmi használathoz hagyd bekapcsolva. Ha kéri, indítsd újra az alkalmazást, hogy a futó hálózati konfiguráció megfeleljen a beállításoknak. A Ginger 2FA-funkciójához Tor szükséges, és a felület korlátozza a kikapcsolását, amíg a 2FA be van kapcsolva.

A **Terminate Tor when Ginger shuts down** szabályozza a Tor leállítását. A Tor-folyamat a pénztárca ablakának bezárása után is megmaradhat, mert a pénztárca a háttérben fut, vagy nincs beállítva a Tor leállítása. Az ablak bezárása és az alkalmazásból való kilépés külön műveletek.

A Tor kikapcsolása módosítja, milyen adatok válnak láthatóvá a felkeresett szolgáltatások és hálózati partnerek számára. Nem ártalmatlan teljesítménykapcsoló. Különösen a koordinátorhoz vagy a tranzakciót továbbító partnerhez létrejövő kapcsolat kapcsolható össze a hálózati címeddel. Ne kapcsold ki rutinszerűen egy várakozó CoinJoin miatt.

A Ginger Tor-kapcsolata a külső böngészőt sem alakítja Tor Browserré. A szolgáltatói oldalak, blokkláncböngészők és más hivatkozások a beállított böngészőt használják. Külön ellenőrizd a böngészőt, mielőtt azt feltételeznéd, hogy a kérései öröklik a pénztárca hálózati védelmét.

<span id="what-synchronization-does" data-ginger-heading="mit-végez-a-szinkronizálás" aria-hidden="true"></span>

## Mit végez a szinkronizálás?

A Ginger tömör blokkszűrőkkel találja meg a potenciálisan érintett blokkokat, és a letöltött blokkadatokat helyben dolgozza fel a pénztárcához. Ez csökkenti annak szükségét, hogy minden címed listáját elküldd egy nyilvános pénztárcaszervernek. Továbbra is hálózati szolgáltatásokra és partnerekre támaszkodik az adatokhoz, valamint a helyi szoftver helyes működésére.

Az első használat és a helyreállítás tovább tarthat, mint egy nemrég használt pénztárca újranyitása. A folyamat része lehet a csatlakozás, szűrők beszerzése, blokkok letöltése és a pénztárca feldolgozása. A helyreállított pénztárca átmenetileg hiányos előzményeket mutathat, vagy elrejthet műveleteket a keresés befejezéséig.

A teljes csomópont futtatása és a pénztárca szinkronizálása külön feladatok. A választható teljes csomópont ellenőrzi a blokkláncot; a pénztárcának ezután a saját tranzakcióit is meg kell találnia. A teljes csomópont szinkronizált állapota nem feltétlenül jelenti, hogy egy frissen helyreállított pénztárca végzett a kereséssel.

<span id="when-synchronization-appears-stuck" data-ginger-heading="ha-a-szinkronizálás-elakadni-látszik" aria-hidden="true"></span>

## Ha a szinkronizálás elakadni látszik

1. Nézd meg a pontos állapotot, és hogy változik-e idővel. A nagy helyreállítási keresés eltér az **Awaiting connection** állapottól.
2. Ellenőrizd a számítógép internetelérését, a dátum és idő helyességét és a szabad lemezterületet. Nézd meg, hogy a Ginger írhatja-e az adatait.
3. Ha teljes csomópontot állítottál be, ellenőrizd, hogy elérhető és szinkronizált-e. A beállított végpontot vizsgáld felül, ne a pénztárca hozzáférési adatait módosítsd.
4. Ha a kapcsolat továbbra is elakadt, egyszer szabályosan zárd be és nyisd újra a Gingert. Ha a hiba visszatér, őrizd meg a hiba szövegét és a napló környezetét.

Ha a hálózatodon blokkolják a Tort, nézd meg a [Tor Project kapcsolódási útmutatóját](https://support.torproject.org/). A Ginger kiadott beállításai nem kínálnak dokumentált hídbeállító varázslót. Ne másolj Tor Browser-beállításokat tetszőleges Ginger-konfigurációs mezőkbe azt feltételezve, hogy működni fognak.

A **Wallet Settings** → **Tools** → **Resync** lehetőséget csak akkor használd, ha indokolt a pénztárca adatnézetének újraépítése. Először őrizd meg a mentéseket, és hagyd befejeződni az új keresést. Az adatmappa törlése nem az első hibaelhárítási lépés.

<span id="separate-network-choice-from-real-funds" data-ginger-heading="válaszd-külön-a-hálózatot-a-valódi-pénztől" aria-hidden="true"></span>

## Válaszd külön a hálózatot a valódi pénztől

A kiadott **Settings** → **Bitcoin** hálózatválasztó Main és RegTest lehetőséget kínál. A RegTest elkülönült tesztkörnyezethez való, és nincs valódi bitcoinértéke; ez a kézikönyv nem tárgyalja e környezet üzemeltetését. Ez a kiadás ezen a felületen nem kínál nyilvános testnet-választást. A hálózatváltás nem mozgatja át köztük a pénzt.
