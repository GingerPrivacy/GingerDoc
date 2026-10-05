---
doc_id: "learn-privacy.information-sharing"
title: "Hová kerülnek a pénztárcád adatai?"
description: "Értsd meg, mit fedhet fel a Ginger szinkronizálása, CoinJoinja, szolgáltatói, blokkláncböngészői, 2FA-ja, Secret Huntja és más pénztárcaalkalmazások, és min változtat a Tor."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Először értsd meg az új fogadási címeket és a szokásos fizetés ellenőrzését.

A különböző pénztárcaműveletek eltérő adatokat közölnek. Nyilvános blokkszűrők ellenőrzése, CoinJoin-bemenet beküldése és vásárlási oldal megnyitása nem azonos adatvédelmi esemény. Ezt az útmutatót használd, mielőtt olyasmit osztasz meg, amit nem tudsz visszavonni.

A Tor csökkenti az IP-cím közvetlen láthatóságát az azon keresztül vezetett kapcsolatoknál. Nem rejti el a kérést a fogadó szolgáltatás elől, nem távolít el tranzakciót a blokkláncról, nem véd feloldott számítógépet, és nem változtatja meg automatikusan a külső böngészőt. A beállított helyi csomópont külön kapcsolat egy általad kezelt géphez.

<span id="synchronization-and-bitcoin-network-activity" data-ginger-heading="szinkronizálás-és-bitcoin-hálózati-tevékenység" aria-hidden="true"></span>

## Szinkronizálás és Bitcoin-hálózati tevékenység

| Művelet és fogadó fél | Érintett adatok | Választási lehetőséged |
| --- | --- | --- |
| Szinkronizálási adatok letöltése a Ginger háttérszolgáltatásától | A kliens nyilvános szűrőket kér az aktuális szinkronizálási pozíciójától. A pénztárcaszkripteket helyben egyezteti, nem küldi be a fiók xpubját ebben a kérésben. A szolgáltatás továbbra is látja a kéréseket és időzítésüket. | Hagyd bekapcsolva a Tort; várd meg a szinkronizálást anélkül, hogy a háttérszolgáltatást minden használatra vaknak tekintenéd. |
| Egy megfelelő blokk letöltése blokkforrásból | A forrás megtudja, mely teljes blokkot kérted. Az egyezés lehet téves találat; egy blokk kérése nem bizonyítja egy adott benne lévő tranzakció birtoklását. | Megfelelően beállított saját csomópont biztosíthat blokkokat. A csomópontbeállítás nem helyettesíti a Ginger minden más szolgáltatását. |
| Díjbecslések kérése | A beállított szolgáltató nyilvános díjinformáció iránti kérést kap. Ez eltér a tranzakciód vagy pénztárcaegyenleged lekérdezésétől. | A **Fee Rate Provider** alatt igény szerint válassz a kiadott források közül; a saját csomópontos lehetőség működő, beállított csomópontot igényel. |
| Fizetés hálózatra továbbítása | Egy partner vagy tartalék továbbító szolgáltatás megkapja az aláírt tranzakciót. Bemenetei, kimenetei és összegei terjedés közben láthatóvá válnak. | Aláírás előtt ellenőrizd. A Tor a kapcsolat láthatóságát módosítja, nem a fizetés tartalmát. A Ginger tartalék továbbítási utakat használhat, ha egy korábbi próbálkozás sikertelen. |

Az általad üzemeltetett Bitcoin-csomópontnál védd a géphez és távoli kapcsolatokhoz való hozzáférést. Üzemeltetője megfigyelheti a kéréseket, ezért egy pusztán „saját csomópontnak” nevezett szerver nem feltétlenül privát, ha más kezeli. A szokásos internetelérés, partnerfelderítés és szolgáltatás-elérhetőség továbbra is fontos.

<span id="coinjoin-and-optional-services" data-ginger-heading="coinjoin-és-választható-szolgáltatások" aria-hidden="true"></span>

## CoinJoin és választható szolgáltatások

| Művelet és fogadó fél | Érintett adatok | Választási lehetőséged |
| --- | --- | --- |
| Részvétel CoinJoin-koordinátorral | Beküldött bemenetek és tulajdonosi igazolások, kimenetregisztrációk, protokollüzenetek és időzítés. A WabiSabi feltételezései mellett a bemenetek és kimenetek megfeleltetését igyekszik elhomályosítani. | Ellenőrizd a részvételt, költséget és célt; hagyd bekapcsolva a Tort. A saját kulcskezelést ne tekintsd minden aktív megfigyelő elleni védelemnek. |
| Vételi/eladási ajánlatok kérése és cím ellenőrzése | Az ajánlatparaméterek tartalmazzák a választott országot, pénznemet, összeget és adott esetben fizetési módot. A címellenőrzés már a rendelés befejezése előtt elküldi a javasolt címet a vételi/eladási szolgáltatásnak. | Folytatás előtt mérlegeld ezt az adatközlést akkor is, ha később elállsz a vételtől vagy eladástól. |
| Vételi/eladási rendelés létrehozása vagy folytatása | Az integráció beküldi a rendelési adatokat és a fogadási vagy visszatérítési címet, majd megnyitja a szolgáltatói folyamatot. A szolgáltató saját feltételei szerint fizetési, kapcsolati vagy személyazonossági adatot kérhet. | Olvasd el a választott szolgáltató aktuális feltételeit, és csak a szándékodnak megfelelő adatot add meg. A Ginger nem tesz névtelenné egy azonosított vásárlást. |
| A Ginger választható 2FA-jának használata | A szokásos indítási ellenőrzés hitelesítő kódot és telepítési azonosítót küld. A szolgáltatás visszaadja a kiegészítő pénztárcafájl-titkosítás kulcsát. | Döntsd el, megfelelő-e ez a hozzáférésvédelem és szolgáltatásfüggőség. A helyreállító szavak és eredeti jelmondat ettől függetlenül legyenek elérhetők. |
| Részvétel Secret Hunt-ellenőrzésekben | Az alkalmas eseményellenőrzések körazonosítót, tranzakcióazonosítót, bemeneti outpointot és a bemenet feletti rendelkezés igazolását küldhetik be. Az outpoint egy korábbi tranzakció adott kimenetét azonosítja. | Nyisd meg a **Secret Hunt** lehetőséget, és nézd át az **Enable/disable the use of this wallet for Secret Hunt.** kapcsolót. Alapértelmezetten bekapcsolt, bár nem feltétlenül aktívak az érintett események. Kikapcsolása nem vonja vissza a korábbi kéréseket. |

A Tor nem rejti el az ellenőrzésre beküldött címet, a rendelés részleteit, a 2FA-azonosítót vagy Secret Hunt-tulajdonosi igazolást a fogadó szolgáltatás elől. E megfigyelések nem jelentik azt sem, hogy a szolgáltatás helyreállító szavakat vagy költési jogosultságot kap pusztán egy tranzakcióazonosító látásától.

A 2FA-azonosító összekapcsolhatja a szokásos indítási próbálkozásokat a szolgáltatásnál. A visszaadott titkosítási kulcs kiegészítő helyi fájlvédelem része, nem új Bitcoin-kulcs, amely helyettesíti a helyreállító szavakat és jelmondatot. Sem ezeket a titkokat, sem hitelesítő kódokat ne küldj segítőknek.

<span id="browsers-other-applications-and-people" data-ginger-heading="böngészők-más-alkalmazások-és-emberek" aria-hidden="true"></span>

## Böngészők, más alkalmazások és emberek

| Művelet | Mi kerülhet nyilvánosságra? | Hasznos szokás |
| --- | --- | --- |
| Nyilvános blokkláncböngésző megnyitása | A lekérdezett tranzakció/cím és a böngésző hálózati és munkamenet-adatai | Kezdd a Ginger helyi előzményeivel; csak akkor nyiss böngészőt, ha szükséged van a többletinformációjára. |
| Szolgáltatói weboldal használata | Rendelési részletek, bejelentkezési/fizetési adatok, sütik és oldalspecifikus böngészőmegfigyelések | A böngésző munkamenetét a Ginger Tor-beállításától külön kezeld. |
| xpub importálása vagy azonos fiók más alkalmazásban használata | Nyilvános címág vagy pénztárcából származtatott lekérdezések, az alkalmazástól függően | Importálás előtt ellenőrizd a szinkronizálási és adatmegosztási viselkedését. A „csak megfigyelésre” költési jogosultságot ír le, nem bizalmasságot. |
| Cím megosztása üzenetben vagy nyilvános bejegyzésben | Kapcsolat a cím és a küldő személy vagy fiók között | Új címet ossz meg a kívánt fizetővel megbízható csatornán. |
| Naplók, pénztárcafájlok vagy képernyőtartalom megosztása | Anyagtól függően: útvonalak, címkék, címek, tranzakció-/körazonosítók és esetleg titkok | A legkisebb szükséges, átnézett részletet oszd meg. Soha ne küldj teljes pénztárcaadatot vagy helyreállítási titkokat csupán kérésre. |

A webes fizetési kutatás megmutatja, miért kell a böngészőmegfigyeléseket és blokkláncadatokat együtt mérlegelni. Nem állapítja meg egy adott Ginger-szolgáltató aktuális követési szabályzatát. [Goldfeder és munkatársai, When the Cookie Meets the Blockchain](https://arxiv.org/abs/1708.04748)

<span id="local-information-also-needs-protection" data-ginger-heading="a-helyi-adatokat-is-védeni-kell" aria-hidden="true"></span>

## A helyi adatokat is védeni kell

Címkék, adatvédelmi nyilvántartások és szolgáltatói rendelések adatai élhetnek a pénztárca metaadataiban. Hasznosak a későbbi döntésekhez és helyreállításhoz, de nem mind kap az aláírókulcsokkal azonos védelmet. Védd a számítógépet, mentéseket és a hozzájuk hozzáférő fiókokat. A **Discreet Mode** a támogatott képernyőmezőknél segít; az operációs rendszer képernyőzárja szélesebb körben véd a felügyelet nélküli hozzáféréstől.

A szavakból történő helyreállítás elkölthető kulcsokat állíthat helyre minden privát jegyzet visszaállítása nélkül. E jegyzetek törlése nem törli a címzett vagy szolgáltatás által már birtokolt adatokat. Telepítésváltás előtt olvasd el a [pénztárcaváltást](/hu/learn-privacy/wallet-migration/); fizetés előtt nézd át az [adatvédelmi szokásokat](/hu/using-ginger/address-reuse/).
