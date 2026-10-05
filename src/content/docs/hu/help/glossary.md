---
doc_id: "help.glossary"
title: "Bitcoin- és Ginger Wallet-szótár"
description: "Ismerd meg a Ginger kifejezéseit: UTXO, visszajáró, jelmondat, CoinJoin, anonimitási pontszám, Tor, PSBT és más fogalmak."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Nehézségi szint: Mindennapi használat. Akkor válaszd ezt az útmutatót, amikor az általa bemutatott feladatra van szükséged.

<span id="amounts-and-transactions" data-ginger-heading="összegek-és-tranzakciók" aria-hidden="true"></span>

## Összegek és tranzakciók

| Kifejezés | Jelentése a pénztárca használója számára |
| --- | --- |
| Bitcoin / BTC | A hálózat és pénzegysége. A pénztárca kulcsokat és tranzakciókat kezel, nem fizikai érméket tárol. |
| Satoshi / sat | Egy bitcoin százmilliomod része: 100 000 000 sat = 1 BTC. |
| Cím | Költési feltételekből származtatott fizetési cél. Minden fogadáshoz használj újat. |
| UTXO / érme | El nem költött tranzakciókimenet, amely egészében bemenetként költhető el. |
| Bemenet | Hivatkozás egy elköltött korábbi kimenetre. Egy tranzakciót több bemenet is finanszírozhat. |
| Kimenet | Egy tranzakció által létrehozott új cél és érték. |
| Visszajáró | A pénztárcádba visszakerülő érték, ha a kiválasztott bemenetek meghaladják a fizetés és a díj összegét. |
| Tranzakcióazonosító / txid | Egy tranzakció azonosítója. Megosztása felfedi, melyik nyilvános tranzakcióról beszélsz. |
| Mempool | Egy csomópont még nem visszaigazolt tranzakcióinak gyűjteménye. A különböző csomópontok eltérő tranzakciókat láthatnak. |
| Visszaigazolás | A tranzakció blokkba kerülése, majd az arra épülő további blokkok. |
| Díjráta | A tranzakció méretének virtuális bájtjára fizetett satoshik; eltér a teljes díjtól. |
| vByte | A díjráták összehasonlításához használt méretegység eltérő witness-adatokat tartalmazó tranzakcióknál. |
| RBF | Replace-by-fee, azaz díjjal történő helyettesítés: egy függő tranzakció a csomópont szabályzata szerint lecserélhető, általában a díj emelése céljából. |
| CPFP | Child-pays-for-parent: egy kimenet magasabb díjú gyermektranzakcióval történő elköltése az eredeti, még nem visszaigazolt szülőtranzakció visszaigazolását is ösztönözheti. |
| Por | Egy adott szabályzat vagy költségfeltevés szerint túl kicsi összeg ahhoz, hogy hasznos legyen. A pénztárca küszöbe és a hálózati szabályzat nem feltétlenül azonos. |

<span id="the-network-in-context" data-ginger-heading="a-hálózat-összefüggései" aria-hidden="true"></span>

## A hálózat összefüggései

| Kifejezés | Jelentése a pénztárca használója számára |
| --- | --- |
| Blokk / blokklánc | Tranzakciók egy csoportja, illetve a korábbi előzményekre épülő blokkok lánca. |
| Bányász / proof of work | A lehetséges blokkokat összeállító résztvevő, illetve a Bitcoin lánckiválasztási szabályai által használt munkavégzés. |
| Coinbase-tranzakció | Egy blokk első tranzakciója, amely létrehozza az engedélyezett bányászati jutalmat; nincs köze egy adott tőzsdei fiókhoz. Kimenetei csak a szükséges érési idő után költhetők el. |
| Konszenzusszabályok | Az ellenőrző csomópont által alkalmazott szabályok a blokkok és tranzakciók érvényességének eldöntésére. |
| Nehézség | A blokkhoz szükséges proof of work mértékét szabályozó érték; nem határozza meg a pénztárcád egyenlegét. |
| Mainnet / RegTest | A valódi Bitcoin-hálózat, illetve egy elkülönült helyi tesztüzemmód. A bitcoinok nem mozognak a kettő között. |
| BIP | Bitcoin Improvement Proposal: egy javasolt szabványt vagy folyamatot dokumentáló Bitcoin-fejlesztési javaslat. Egy BIP közzététele nem jelenti, hogy minden pénztárca megvalósítja. |
| HD-pénztárca | Hierarchikus determinisztikus pénztárca, amely kezdeti titkos adatokból és meghatározott szabályok szerint sok kulcsot származtat. |
| Hash | Adatokból kiszámított tömör azonosító. A tranzakcióazonosító adatokat azonosít, nem egy személy fióknevét. |
| Helyettesíthetőség | Az egységek gyakorlati felcserélhetősége; harmadik felek előzményalapú besorolásai befolyásolhatják a kezelésüket akkor is, ha érvényes bitcoinról van szó. |

A Lightning, a fizetési csatornák, a többaláírásos megoldások, a nyilvános testnet/Signet beállítása és a szkriptek belső működése nem része e kiadás dokumentált végfelhasználói folyamatainak. Attól, hogy egy általános Bitcoin-szótárban szerepelnek, még nem tekinthetők Ginger-funkciónak.

<span id="keys-and-recovery" data-ginger-heading="kulcsok-és-helyreállítás" aria-hidden="true"></span>

## Kulcsok és helyreállítás

| Kifejezés | Jelentése a pénztárca használója számára |
| --- | --- |
| Privát kulcs | Titkos adat, amely felhatalmazást ad a költésre. Soha ne oszd meg az ügyfélszolgálattal. |
| Nyilvános kulcs | Az aláírások ellenőrzéséhez használt adat; nem költési titok, de adatvédelmi szempontból így is érzékeny lehet. |
| Helyreállító szavak / mnemonikus kód / seedkifejezés | Sorrendbe rendezett szavas mentés, amelyből a megfelelő jelmondattal és pénztárcaszabályokkal újra létrehozhatók a pénztárca kulcsai. |
| BIP39-jelmondat | A helyreállító szavakkal együtt a pénztárca származtatásához használt kiegészítő szöveg. Minden eltérő jelmondat eltérő kulcsokat jelöl ki. |
| Eszköz-PIN | A hardverpénztárca hozzáférési védelme. Nem azonos a BIP39-jelmondattal. |
| 2FA | Második hitelesítési tényező. A Ginger indításkor hitelesítő alkalmazást és szolgáltatástól függő helyi pénztárcafájl-titkosítást használ. |
| xpub / kiterjesztett nyilvános kulcs | Sok kapcsolódó nyilvános cím származtatására alkalmas adat. Közvetlenül nem tud aláírni, de felfedheti a pénztárca tevékenységét. |
| Származtatási útvonal / fiók | A pénztárca kulcsainak egy ágát azonosító szabály. A helyreállító eszközöknek kompatibilis szabályokat kell használniuk. |
| Gap limit | Az egymást követő nem használt címek száma, amelyet a helyreállítási keresés még megenged, mielőtt abbahagyja a keresést egy ágon. |
| Csak megfigyelésre szolgáló pénztárca | Olyan pénztárcabejegyzés, amely megfigyelheti a tevékenységet, de nem rendelkezik helyi aláírókulcsokkal. Egy hardvereszköz külön biztosíthatja az aláírást. |
| Hardverpénztárca | Kulcsok védelmére és támogatott tranzakciók jóváhagyására tervezett külön eszköz. |
| PSBT | Részlegesen aláírt Bitcoin-tranzakció formátumú fájl, amely egy tervezett tranzakciót és aláírási adatokat tartalmaz. |
| SegWit / Taproot | Bitcoin-kimeneti és költési formátumok. A natív mainnet-fogadási címek rendszerint `bc1q`, illetve `bc1p` kezdetűek. |

<span id="privacy-and-ginger" data-ginger-heading="adatvédelem-és-ginger" aria-hidden="true"></span>

## Adatvédelem és Ginger

| Kifejezés | Jelentése a pénztárca használója számára |
| --- | --- |
| CoinJoin | Több résztvevő bemeneteit tartalmazó közös tranzakció, amely megnehezíti a tulajdonosi kapcsolatok kikövetkeztetését. |
| WabiSabi | A Ginger CoinJoin-koordinációja által használt, hitelesítő adatokra épülő protokoll. Nem törli a tranzakciót a blokkláncról. |
| Koordinátor | Egy kört szervező szolgáltatás. Befolyásolhatja az elérhetőséget és a részvételi jogosultságot, miközben általában nem kezeli a résztvevők privát kulcsait. |
| Remix | Újabb CoinJoin-részvétel a szolgáltatás remixfeltételeinek megfelelő pénzzel; a bányászati díjak ettől még alkalmazhatók. |
| Anonimitási pontszám | A Ginger helyi becslése az UTXO-k adatvédelmi besorolásához; nem független személyek ellenőrzött létszáma. |
| Anonimitási halmaz | Lehetséges alternatívák elméleti csoportja. Nem automatikusan azonos a pénztárca által számított pontszámmal. |
| Klaszter | Címek vagy UTXO-k csoportja, amelyeket egy megfigyelő összetartozónak vél. Egyes összefüggések tények; mások tévedésre hajlamos következtetési módszerek. |
| Cím újrahasználata | Egynél több fogadás ugyanazon a címen, ami közvetlenül összekapcsolja ezeket a beérkezéseket. |
| UTXO-k kézi kiválasztása | Egy fizetéshez felhasznált UTXO-k tudatos ellenőrzése és kiválasztása. |
| Tor | Hálózati közvetítőrendszer, amely segít elkülöníteni egy alkalmazás kapcsolatait a felhasználó IP-címétől. |
| Blokkszűrő | Tömör összefoglaló, amellyel azonosíthatók a pénztárcát esetleg érintő tranzakciókat tartalmazó blokkok, mielőtt ezek helyi feldolgozása megtörténik. |
| Teljes csomópont | A Bitcoin adatait a konszenzusszabályok alapján ellenőrző szoftver. Más szerepe van, mint egy CoinJoin-koordinátornak. |
| PayJoin | Közös fizetés, amelyhez a címzett is hozzájárulhat egy bemenettel. A Ginger kiadott küldési folyamatának visszaállási és kompatibilitási korlátai vannak. |
| Discreet Mode | A támogatott érzékeny kijelzett mezők elrejtése, nem titkosítás vagy pénztárcazár. |
| KYC | Egy szolgáltató személyazonosság-ellenőrzési folyamata. A Tor nem rejti el a közvetlenül megadott adatokat a szolgáltató elől. |
| Fiat | Állam által kibocsátott pénznem, amely árajánlatokhoz vagy megjelenített becslésekhez használatos; eltér a blokkláncon elszámolt BTC-től. |

Az olyan kifejezések, mint „privát” és „biztonságos”, eltérő tulajdonságokat írnak le. Vizsgáld meg, mi van védve, ki ellen és milyen feltételek mellett, ahelyett, hogy bármelyik szót feltétlen garanciának tekintenéd.
