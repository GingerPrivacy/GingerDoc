---
doc_id: "settings-network.preferences"
title: "Megjelenés, nyelv és mindennapi beállítások"
description: "Módosítsd a Ginger nyelvét, kijelzési formátumait, háttérműködését, böngészőjét és diszkrét módját a pénztárcabiztonsággal való összekeverés nélkül."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nehézségi szint: Mindennapi használat. Akkor válaszd ezt az útmutatót, amikor az általa bemutatott feladatra van szükséged.

Az alkalmazásszintű beállításokhoz használd a **Settings**, a kiválasztott pénztárca nevéhez, CoinJoin-konfigurációjához és eszközeihez a **Wallet Settings** menüt. Az alkalmazás keresője megtalálhatja például a **Data Folder**, **Wallet Info** és **Discreet Mode** műveleteket az ikon helyétől függetlenül.

<span id="language-and-amounts" data-ginger-heading="nyelv-és-összegek" aria-hidden="true"></span>

## Nyelv és összegek

A **Settings** → **Appearance** alatt a **Language** választja a felület nyelvét. A 2.0.26 verzió angol, spanyol, magyar, francia, kínai, német, portugál, török és olasz nyelvet kínál. Kövesd az esetleges újraindítási kérést. Az angol kézikönyv a kiadott angol feliratokat használja; a lefordított feliratok eltérhetnek.

A **Dark mode** a megjelenést módosítja. Az **Exchange currency** a referencia fiatkijelzést, míg a tizedes- és csoportelválasztók, Bitcoin-törtértékek csoportosítása és **Fee display unit** a számok megjelenítését szabályozzák. Nem módosítják a mögöttes BTC-összeget vagy a hálózati tranzakciós díjat. Ismeretlen formátumú összeg megadása előtt olvasd el a beállítások példáit.

## Discreet Mode

Használd a **Discreet Mode** módot, ha valaki láthatja a képernyődet. A támogatott érzékeny kijelzett mezőket rejti el az alkalmi megfigyelés csökkentésére. Megosztás előtt ellenőrizd, mi rejtett ténylegesen: a funkció nem garantálja minden ablak, cím vagy külső alkalmazás elrejtését.

A Discreet Mode nem titkosít fájlokat, nem zárja a pénztárcát, nem állítja le az aláírást és nem változtatja a blokkláncos adatvédelmet. A géphez hozzáférő személy továbbra is kezelheti az alkalmazást. Távozáskor használd az operációs rendszer képernyőzárját.

<span id="general-settings" data-ginger-heading="általános-beállítások" aria-hidden="true"></span>

## Általános beállítások

| Beállítás | Gyakorlati hatás |
| --- | --- |
| **Run Ginger when computer starts** | Az operációs rendszer munkamenetével megnyitja a Gingert. |
| **Run in background when window closed** | Engedi az alkalmazás aktivitását az ablak bezárása után. A CoinJoin és szinkronizálás így folytatódhat. |
| **Auto copy addresses** | Automatikusan a vágólapra teheti a kijelzett címet. |
| **Auto paste addresses** | Használhatja a vágólapot címbevitelnél. Mindig ellenőrizd az eredményül kapott célt. |
| **Auto download new version** | Szabályozza az elérhető frissítés letöltését; külön kövesd a telepítési kérést. |
| **Browser used by Ginger** | Kiválasztja a külső oldalak böngészőjét; az egyedi lehetőség **Custom browser path** mezőt kínál. |

A vágólap kényelme nem hitelesíti a címzettet. Más alkalmazások olvashatják vagy lecserélhetik az adatait. Szokásos fogadásnál és küldésnél soha ne tegyél helyreállító szavakat a vágólapra.

A külső oldalak a kiválasztott böngésző saját hálózati és adatvédelmi működését használják. A vételi/eladási szolgáltató akkor is kérhet azonosító adatot, ha a Ginger Tort használ. Megjelenítési vagy böngészőbeállítás módosítása nem változtatja meg a szolgáltató nyilvántartását.

<span id="wallet-information-and-tools" data-ginger-heading="pénztárcaadatok-és-eszközök" aria-hidden="true"></span>

## Pénztárcaadatok és eszközök

A **Wallet Info** fiók- és kiterjesztett nyilvánoskulcs-adatokat jeleníthet meg. A kiterjesztett nyilvános kulcs közvetlenül nem költhet UTXO-kat, de sok kapcsolódó címet fedhet fel. Ne tedd közzé nyilvános segítségkérésben.

A **Wallet Settings** → **General** alatt a névvezérlővel nevezheted át a pénztárcát. A **Tools** alatt a **Verify Recovery Words** egy hozzáférhető szoftverpénztárca mentését ellenőrzi, a **Resync** újraépíti az adatnézetét, a **Delete Wallet** pedig jóváhagyási folyamatával eltávolít helyi pénztárcát. A törlés nem semmisíti meg a bitcoint, nem vonja vissza a helyreállító szavakat, és nem helyettesít mentést. A helyi hozzáférés eltávolítása előtt őrizz működő helyreállítási adatokat.
