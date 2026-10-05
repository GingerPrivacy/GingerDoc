---
doc_id: "learn-privacy.who-can-see"
title: "Ki láthatja a Bitcoin-tranzakcióimat?"
description: "Ismerd meg, mit árul el egy Bitcoin-cím, hogyan kapcsolódhat össze az identitás és a tranzakció, és hol segíthetnek a Ginger adatvédelmi eszközei."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nehézségi szint: Kezdd itt. Először az alapvető lépések következnek; a haladó hivatkozások később, igény szerint olvashatók.

A Bitcoin-tranzakciók nyilvánosak, de a pénztárca tulajdonosának neve nem kerül automatikusan minden cím mellé. A gyakorlati kérdés az, hogy ki tud egy címet vagy tranzakciót hozzád kapcsolni, és mi mást következtethet ki ebből.

Egy ügyfél ismerheti a számlához megadott címet. Egy tőzsde ismerheti a kiutalási címedet és az ellenőrzött személyazonosságodat. A nyilvános adománycímet követő személy megfigyelheti a beérkezéseit. Ezek a megfigyelők eltérő adatokból indulnak ki, ezért hasznosabb az adatvédelmet az adatközlés szabályozásaként szemlélni, mint egyetlen névtelen/nem névtelen kapcsolóként.

<span id="what-the-blockchain-reveals" data-ginger-heading="mit-árul-el-a-blokklánc" aria-hidden="true"></span>

## Mit árul el a blokklánc?

A tranzakciók megmutatják a bemeneteket, kimeneteket, értékeket és a költés révén létrejövő kapcsolataikat. Egy másik tranzakcióval később elköltött kimenet nyilvános kapcsolatot hoz létre. Ez nem bizonyítja automatikusan, kié minden kimenet: a tranzakció lehet fizetés, saját pénztárcák közötti átutalás vagy több tulajdonos közös tranzakciója. Az eredeti [Bitcoin-tanulmány adatvédelmi része](https://bitcoin.org/bitcoin.pdf) tárgyalja a nyilvános tranzakciók és identitások elkülönítését és a kulcsok összekapcsolásának problémáját.

Ha valaki egy címet személyhez kapcsol, vizsgálhatja az összefüggő tevékenységet. Egyes kapcsolatok közvetlenek, például az ismételt fizetés egy címre. Mások a bemenetek közös tulajdonosára vagy a visszajárókimenetre vonatkozó feltételezéseken alapulnak. Ezek tévesek is lehetnek, de mégis befolyásolhatják a szolgáltatások tranzakcióbesorolását.

<span id="who-can-learn-what" data-ginger-heading="ki-mit-tudhat-meg" aria-hidden="true"></span>

## Ki mit tudhat meg?

| Megfigyelő | Kezdetben rendelkezésére álló adatok | Amit szabályozhatsz |
| --- | --- | --- |
| Fizető | Az általad megadott cím és a saját fizetése | Minden fogadáshoz új címet adhatsz |
| Fizetés címzettje | A fizetési tranzakciód és a vásárlás adatai | Ellenőrizheted a kiválasztott bemeneteket, és kerülheted a szükségtelen azonosító adatok közlését |
| Tőzsde vagy vásárlási szolgáltató | Fiókadatok, fizetési részletek, be- és kiutalási címek | Használat előtt megismerheted a szolgáltató nyilvántartásait |
| Nyilvános blokkláncelemző | Tranzakcióadatok és máshonnan beszerzett címkék | Kerülheted a könnyű kapcsolatok létrehozását; mérlegelheted a CoinJoint és az azt követő költési szokásokat |
| Felkeresett hálózati szolgáltatás | Kérések tartalma és esetleg kapcsolati metaadatok | Ahol támogatott, bekapcsolva tarthatod a Tort, és megértheted a funkciók saját adatközlését |
| A számítógépedhez vagy mentéseidhez hozzáférő személy | Pénztárcafájlok, címkék, címek, naplók, esetleg kulcsok | Védheted az eszközt, a helyreállítási mentést és a helyi metaadatokat |

Egyetlen pénztárcabeállítás sem kezeli az összes sort. A hardverpénztárca segít a kulcsok védelmében, de nem rejti el a nyilvános címet. A Tor segít a kapcsolati metaadatoknál, de nem rejti el a szolgáltatói űrlapba beírt adatokat.

<span id="why-this-matters-in-ordinary-life" data-ginger-heading="miért-számít-ez-a-hétköznapokban" aria-hidden="true"></span>

## Miért számít ez a hétköznapokban?

Ha több ügyfélnek ugyanarra a címre számlázol, minden ügyfél láthatja a címre érkező összegeket, más ügyfelek fizetéseit is. Az új cím elkerüli ezt a közös közvetlen azonosítót. Nem akadályozza meg automatikusan a későbbi összekapcsolást, ha minden beérkezést együtt költesz el.

Ha nyilvános adománygyűjtéshez kapcsolódó pénzből fizetsz valakinek, a tranzakció a fizetési összegnél több összefüggést is elárulhat. Ha nyilvántartod, mely UTXO-k mely tevékenységhez tartoznak, tájékozottan dönthetsz költés előtt.

A pénzügyi magánszféra védheti az ügyfelek bizalmas adatait, üzleti információkat, személyes kapcsolatokat és a testi biztonságot. E határok igénye nem feltételez helytelen cselekedetet. Az a kérdés, hogy szüksége van-e a másik személynek az adatokhoz való hozzáférésre az ügylet teljesítéséhez.

<span id="privacy-and-fungibility" data-ginger-heading="adatvédelem-és-helyettesíthetőség" aria-hidden="true"></span>

## Adatvédelem és helyettesíthetőség

A helyettesíthetőség azt jelenti, hogy az egységek azonos feltételekkel felcserélhetők. A Bitcoin tranzakciós szabályai értékekkel számolnak, de emberek és szolgáltatások a látszólagos előzmények alapján eltérően osztályozhatják a kimeneteket. Ezek az ítéletek akkor is akadályokat teremthetnek, ha a kimenet a Bitcoin szabályai szerint érvényes.

Az adatvédelmi eszközök megnehezíthetik egyes előzményalapú besorolások magabiztos megállapítását. Nem kötelezhetnek szolgáltatót az átutalás elfogadására, és nem törölhetik a már meglévő nyilvántartását. Óvatosan kezeld a „tiszta” bitcoinokról vagy garantált elfogadásról szóló állításokat: a pénztárca adatvédelmi becslése és egy szolgáltatás szabályzata külön dolog.

<span id="where-ginger-fits" data-ginger-heading="hol-segít-a-ginger" aria-hidden="true"></span>

## Hol segít a Ginger?

A Ginger új címes fogadást, helyi címkéket, kézi UTXO-kiválasztást, Tor-integrációt, tömör blokkszűrős szinkronizálást és CoinJoint kínál. Ezekkel csökkentheted az egyes adatközléseket, és jóváhagyás előtt ellenőrizheted a fizetést. Az asztali alkalmazás hardverpénztárcás folyamatokat is támogat a kulcsok védelméhez.

Kezdd az új címre történő fogadással és a meglévő UTXO-id megértésével. Ha fontos a tranzakciós kapcsolatok adatvédelme, az automatikus körök bekapcsolása előtt tanuld meg, mit tud és mit nem tud megváltoztatni a CoinJoin. A mindennapi döntésekhez folytasd az [adatvédelmi szokások fizetés előtt és után](/hu/using-ginger/address-reuse/) útmutatóval.

A cél a helyzetedhez illő tudatos javulás. A Ginger nem törölheti a tőzsde által már gyűjtött adatokat, nem ígérheti minden szolgáltatás elfogadását, és nem akadályozhatja meg, hogy egy későbbi önkéntes adatközlés új kapcsolatot hozzon létre.
