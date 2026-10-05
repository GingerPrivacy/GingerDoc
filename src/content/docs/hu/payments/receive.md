---
doc_id: "payments.receive"
title: "Bitcoin fogadása és címek kezelése"
description: "Hozz létre Ginger-fogadási címet, válassz SegWit vagy Taproot típust, ahol támogatott, címkézd a fizetéseket, és ellenőrizd a visszaigazolásokat."
lang: "hu"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Nehézségi szint: Kezdd itt. Először az alapvető lépések következnek; a haladó hivatkozások később, igény szerint olvashatók.

Minden fizetéshez használj új fogadási címet. A cím megmondja a fizetőnek, hová küldje a bitcoint; nem fedi fel a helyreállító szavaidat. Újrahasználata viszont lehetővé teszi a megfigyelőknek az azonos célra érkező fizetések összekapcsolását.

<span id="request-a-payment" data-ginger-heading="fizetés-kérése" aria-hidden="true"></span>

## Fizetés kérése

1. Nyisd meg a kívánt pénztárcát, és várd meg a helyreállítás vagy szinkronizálás végét.
2. Válaszd a **Receive** lehetőséget. Adj meg a fizetőt vagy célt leíró címkét, például „Júniusi számla”. Legyen elég részletes a későbbi felismeréshez, de ne rögzíts szükségtelen személyes adatokat.
3. Válaszd a **Generate** lehetőséget. A szokásos művelet natív SegWit-címet hoz létre. Ha a pénztárca támogatja a Taprootot, az alternatív művelet **Taproot** lehetőséget kínál **TR** jelöléssel; ezt csak akkor használd, ha a fizető támogatja ezt a címtípust.
4. Másold a címet, vagy oszd meg a fogadási QR-kódot. Hardverpénztárcánál használd a **Show on the hardware wallet** lehetőséget, és az eszközön hasonlítsd össze a teljes címet, mielőtt átadod a fizetőnek.
5. Más alkalmazásba illesztés után ellenőrizd a célt. A vágólapot figyelő kártevő akkor is lecserélheti a címet, ha az eredeti QR-kód vagy a pénztárca kijelzése helyes volt.

A Bitcoin mainneten a natív SegWit-fogadási címek rendszerint `bc1q`, a Taproot-címek `bc1p` kezdetűek. A teszthálózati címek eltérnek. Ha egy szolgáltatás elutasít egy támogatott Bitcoin-címet, a hálózati és címtípus-támogatását ellenőrizd a szolgáltatónál, ne változtasd meg a cím karaktereit.

<span id="labels-and-unused-addresses" data-ginger-heading="címkék-és-nem-használt-címek" aria-hidden="true"></span>

## Címkék és nem használt címek

Az **Addresses Awaiting Payment** azokat a fogadási címeket mutatja, amelyekre még nem érkezett fizetés, és amelyek még szerepelnek ebben a listában. Megtekintheted a QR-kódjukat, másolhatod őket, megváltoztathatod a címkéjüket vagy elrejtheted őket az elérhető műveletekkel.

A cím elrejtése nem vonja vissza a címet a Bitcoinon. A korábban létrehozott címre küldött fizetés továbbra is a pénztárcához tartozik, ha te rendelkezel a kulcsaival. A használt címek szándékosan eltűnhetnek a fizetésre várók listájából; ez új címek használatára ösztönöz, és nem azt jelzi, hogy a régi kulcsokat törölték.

A címkék helyi pénztárca-metaadatok, nem a blokkláncba írt vagy a fizetőnek automatikusan elküldött üzenetek. Mentéseken, naplókon, exportokon vagy képernyőmegosztáson keresztül így is kiszivároghatnak. Ha fontosak a címkék, készíts fájlmentést: a helyreállító szavak nem tudják újralétrehozni őket.

<span id="know-when-you-have-been-paid" data-ginger-heading="tudd-mikor-fizettek" aria-hidden="true"></span>

## Tudd, mikor fizettek

A tranzakció hálózatra továbbítása, a még nem visszaigazolt tranzakció észlelése a Gingerben és a bányász általi blokkba foglalás külön események. Ellenőrizd a pénztárca előzményeit és a tranzakció részleteit. A még nem visszaigazolt fizetés lecserélhető vagy visszaigazolás nélkül maradhat; döntsd el, mennyi visszaigazolási bizonyosságot igényel a helyzet, mielőtt visszafordíthatatlan dolgot adnál cserébe.

A Ginger bezárt alkalmazással is tud fogadni. A fizetőnek érvényes cím kell, nem online pénztárca. Újranyitáskor a szinkronizálás megtalálja a tranzakciót. Egy CoinJoin vagy másik betöltött pénztárcába küldött fizetés csak a kimeneteit kezelő pénztárcában jelenik meg.

<span id="if-the-payment-is-missing" data-ginger-heading="ha-hiányzik-a-fizetés" aria-hidden="true"></span>

## Ha hiányzik a fizetés

Kérd el a küldőtől a tranzakcióazonosítót, és a meglévő kommunikációs csatornátokon ellenőrizd a célt. Nézd meg a kiválasztott pénztárcát, a mainnet vagy testnet hálózatot, a szinkronizálás állapotát és azt, hogy a küldő valóban továbbított-e tranzakciót a hálózatra. Ne illessz minden címet nyilvános blokkláncböngészőbe: a böngésző megtudja, mit kérdezel le.

Ha szavakból állítottad helyre a pénztárcát, és korábban sok nem használt címet hoztál létre, a helyreállítás gap limitje számíthat. Egy új fogadási kérés önmagában nem javítja a hiányos előzménykeresést. Új keresés vagy helyreállítás előtt őrizd meg a mentéseket.
