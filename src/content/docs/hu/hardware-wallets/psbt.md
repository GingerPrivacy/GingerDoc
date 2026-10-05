---
doc_id: "hardware-wallets.psbt"
title: "A PSBT-folyamat használata"
description: "Készíts elő Bitcoin-tranzakciót a Gingerben, fájlon keresztül írd alá hardverpénztárcával, majd importáld az eredményt a hálózatra továbbításhoz."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Nehézségi szint: Haladó útmutató. Először állíts be ellenőrzött hardverpénztárcát és független mentést.

A részlegesen aláírt Bitcoin-tranzakció (PSBT) egy tranzakciót és az aláíróhoz szükséges adatokat hordozó fájl. Elkülöníti a számítógépes előkészítést a hardveres aláírástól. A PSBT címeket, összegeket és pénztárcaadatokat fedhet fel, ezért akkor is kezeld bizalmasan, mielőtt bármit elkölthetne.

<span id="prepare-the-wallet-connection" data-ginger-heading="a-pénztárcakapcsolat-előkészítése" aria-hidden="true"></span>

## A pénztárcakapcsolat előkészítése

A Gingerben kompatibilis hardverpénztárca-bejegyzés kell, amely az aláíróeszköz kulcsaihoz kapcsolódik. Támogatott Coldcard JSON-pénztárcaexportnál az **Import File** lehetőséggel add hozzá a fájlt. Az adott firmware-hez való aktuális gyártói exportutasítást használd; a PSBT-tranzakciófájl nem pénztárcaimport-fájl.

Az export nyilvános fiókadatokat és eszközujjlenyomatot tartalmaz, nem helyreállító szavakat. Mielőtt bitcoint küldenél rá, ellenőrizd, hogy a Ginger fogadási címe egyezik az eszközével. Eltérő származtatási útvonalú vagy jelmondatú importált fiók azonos eszköz mellett is másik pénztárca lehet.

<span id="export-a-transaction" data-ginger-heading="tranzakció-exportálása" aria-hidden="true"></span>

## Tranzakció exportálása

1. Nyisd meg a hardverpénztárcát a Gingerben. A **Wallet Settings** → **General** alatt kapcsold be a **PSBT workflow** lehetőséget.
2. Válaszd a **Send** lehetőséget, és szokásosan készítsd elő a célt és összeget. Ellenőrizd a kiválasztott bemeneteket, visszajárót és díjat.
3. Az előnézetben válaszd a **Save PSBT file** lehetőséget, és mentsd a tervezetet. A **Send Now** alternatíva a fájlos mentés helyett azonnali aláírást használ.
4. Az eszköz által támogatott módon, például cserélhető adathordozóval vidd át a fájlt az aláíróeszközre. Kövesd az utasításait, és megbízható kijelzőjén nézd át a célt, összeget, díjat és visszajárót.
5. Mentsd az aláírt eredményt úgy, hogy ne keverd össze az eredeti aláíratlan tervezettel.

Ne hagyj jóvá tranzakciót pusztán azért, mert a Ginger készítette elő. Az eszköznek a szándékolt fizetést kell jóváhagynia. A helyreállító szavakat tartsd távol a PSBT-fájltól és a számítógéptől is.

<span id="import-and-broadcast" data-ginger-heading="importálás-és-továbbítás" aria-hidden="true"></span>

## Importálás és továbbítás

Térj vissza a hardverpénztárcához a Gingerben, és válaszd a PSBT-folyamatnál látható **Broadcast** lehetőséget. Az **Import Transaction** fájlablak támogatott tranzakciófájlokat, például PSBT- és tranzakciófájlokat fogad. Válaszd az aláírt eredményt, és hálózatra küldés előtt ellenőrizd a továbbítási képernyőt.

Aláíratlan vagy hiányosan aláírt PSBT nem továbbítható érvényes fizetésként. A sikeres aláírás sem garantálja az elfogadást, ha a bemeneteket már elköltötték, vagy a díj már nem felel meg a hálózati körülményeknek. Tartsd elérhetően az eredeti pénztárcát, szinkronizálj, és új fizetés létrehozása előtt ellenőrizd az előzményeket.

A hálózatra továbbítás után az aláíróeszköznek nem kell csatlakoztatva maradnia a visszaigazoláshoz. Ellenőrizd a végső előzménybejegyzést és a visszaigazolásokat a Gingerben. Az aláírt fájl törlése nem töröl olyan tranzakciót, amelyet más már továbbíthat.

<span id="handle-files-carefully" data-ginger-heading="gondosan-kezeld-a-fájlokat" aria-hidden="true"></span>

## Gondosan kezeld a fájlokat

Megkülönböztethető fájlneveket használj a tervezetekhez és aláírt eredményekhez. Saját tranzakció vizsgálatához ne küldj PSBT-t e-mailben, és ne töltsd fel online dekódolóba. Védd az érzékeny fiókexportokat is: a kiterjesztett nyilvános kulcs sok címet fedhet fel, bár közvetlenül nem írhat alá költést.

Ez a folyamat a kiadott hardverpénztárca-felületet dokumentálja. Nem igazol általános többaláírásos koordinátort, fejlesztői aláíró API-t vagy kompatibilitást minden más alkalmazás PSBT-formátumával.
