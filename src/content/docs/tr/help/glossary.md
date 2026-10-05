---
doc_id: "help.glossary"
title: "Bitcoin ve Ginger Wallet sözlüğü"
description: "Ginger’da kullanılan UTXO, para üstü, parola, CoinJoin, anonimlik puanı, Tor, PSBT ve diğer terimleri anlayın."
lang: tr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Okuma düzeyi: Günlük kullanım. Anlattığı göreve ihtiyacınız olduğunda bu rehberi seçin.

<span id="amounts-and-transactions" data-ginger-heading="tutarlar-ve-işlemler" aria-hidden="true"></span>

## Tutarlar ve işlemler

| Terim | Cüzdan kullanıcısı için anlamı |
| --- | --- |
| Bitcoin / BTC | Ağ ve para birimi. Cüzdan fiziksel coin saklamak yerine anahtarları ve işlemleri yönetir. |
| Satoshi / sat | Bitcoinin yüz milyonda biri: 100 000 000 sats = 1 BTC. |
| Adres | Harcama koşullarından türetilen ödeme hedefi. Her alım için yenisini kullanın. |
| UTXO / coin | Bütün bir girdi olarak harcanmaya hazır harcanmamış işlem çıktısı. |
| Girdi | Harcanan önceki çıktıya referans. Birkaç girdi tek işlemi fonlayabilir. |
| Çıktı | İşlemin oluşturduğu yeni hedef ve değer. |
| Para üstü | Seçili girdiler ödeme artı ücreti aşınca cüzdanınıza dönen değer. |
| İşlem kimliği / txid | İşlemin tanımlayıcısı. Paylaşmak hangi halka açık işlemi konuştuğunuzu açıklar. |
| Mempool | Düğümün onaylanmamış işlem koleksiyonu. Farklı düğümler farklı görünümlere sahip olabilir. |
| Onay | Bloğa dahil olma ve ardından onun üzerine eklenen bloklar. |
| Ücret oranı | İşlem boyutunun sanal baytı başına ödenen satoshi; toplam ücretten farklıdır. |
| vByte | Farklı tanık verili işlemlerin ücret oranlarını karşılaştırmak için kullanılan boyut birimi. |
| RBF | Replace-by-fee: bekleyen işlem düğüm politikası altında, çoğunlukla ücretini artırmak için değiştirilebilir. |
| CPFP | Child-pays-for-parent: çıktıyı yüksek ücretli alt işlemle harcamak, onaylanmamış üst işleminin onayını da teşvik edebilir. |
| Toz | Belirli politika veya maliyet varsayımı altında yararlı olamayacak kadar küçük tutar. Cüzdan eşiği ve ağ politikası mutlaka aynı değildir. |

<span id="the-network-in-context" data-ginger-heading="ağın-bağlamı" aria-hidden="true"></span>

## Ağın bağlamı

| Terim | Cüzdan kullanıcısı için anlamı |
| --- | --- |
| Blok / blok zinciri | İşlem grubu ve önceki geçmişin üzerine eklenen blokların zinciri. |
| Madenci / iş ispatı | Aday blokları oluşturan ve Bitcoin zincir seçim kurallarında kullanılan işi yapan katılımcı. |
| Coinbase işlemi | Bloğun izin verilen madencilik ödülünü oluşturan ilk işlemi; belirli borsa hesabıyla ilgisizdir. Çıktıları harcanmadan önce olgunlaşmalıdır. |
| Mutabakat kuralları | Doğrulayan düğümün blok ve işlemlerin geçerliliğini belirlemek için uyguladığı kurallar. |
| Zorluk | Blok için gereken iş ispatını yöneten ölçü; cüzdan bakiyenizi belirlemez. |
| Mainnet / RegTest | Sırasıyla gerçek Bitcoin ağı ve ayrı yerel test modu. Coinler aralarında taşınmaz. |
| BIP | Önerilen standardı veya süreci belgeleyen Bitcoin İyileştirme Önerisi. Yayımlanmış BIP, her cüzdanın uyguladığı anlamına gelmez. |
| HD cüzdan | Başlangıçtaki gizli veriden ve kurallardan çok sayıda anahtar türeten hiyerarşik deterministik cüzdan. |
| Özet (hash) | Veriden hesaplanan kompakt tanımlayıcı. İşlem kimliği kişinin hesap adını değil, veriyi tanımlar. |
| Değiştirilebilirlik | Birimlerin pratikte birbirinin yerine geçebilmesi; geçerli bitcoin olsalar bile üçüncü taraf geçmiş sınıflandırmaları ele alınmalarını etkileyebilir. |

Lightning, ödeme kanalları, çoklu imza oluşturma, halka açık testnet/Signet kurulumu ve betik iç ayrıntıları bu sürümün belgelenmiş son kullanıcı süreçlerinin dışındadır. Genel Bitcoin sözlüğünde bulunmaları Ginger özelliği kanıtlamaz.

<span id="keys-and-recovery" data-ginger-heading="anahtarlar-ve-kurtarma" aria-hidden="true"></span>

## Anahtarlar ve kurtarma

| Terim | Cüzdan kullanıcısı için anlamı |
| --- | --- |
| Özel anahtar | Harcamayı yetkilendiren gizli bilgi. Destek ekibiyle asla paylaşmayın. |
| Açık anahtar | İmzaları doğrulamak için kullanılan bilgi; harcama sırrı değildir, ancak gizlilik açısından hassas olabilir. |
| Kurtarma kelimeleri / mnemonic / tohum ifadesi | Doğru parola ve cüzdan kurallarıyla anahtarların yeniden oluşturulabildiği sıralı kelime yedeği. |
| BIP39 parolası | Cüzdan türetmek için kurtarma kelimeleriyle kullanılan ek metin. Her farklı parola farklı anahtarlar seçer. |
| Cihaz PIN’i | Donanım cüzdanı erişim kontrolü. BIP39 parolasıyla aynı değildir. |
| 2FA | İkinci kimlik doğrulama faktörü. Ginger başlangıçta kimlik doğrulayıcı ve hizmete bağlı yerel cüzdan dosyası şifrelemesi kullanır. |
| xpub / genişletilmiş açık anahtar | Çok sayıda ilişkili açık adres türetebilen bilgi. Doğrudan imzalayamaz, ancak cüzdan faaliyetini açığa çıkarabilir. |
| Türetme yolu / hesap | Cüzdan anahtarlarının dalını tanımlayan kural. Kurtarma araçları uyumlu kurallar gerektirir. |
| Boşluk sınırı | Kurtarma taramasının dal boyunca aramayı durdurmadan önce tolere ettiği kullanılmamış adres dizisi. |
| Yalnızca izleme cüzdanı | Faaliyeti gözlemleyebilen, ancak yerel imzalama anahtarları olmayan cüzdan kaydı. Donanım cihazı imzalamayı ayrı sağlayabilir. |
| Donanım cüzdanı | Anahtarları korumak ve desteklenen işlemleri onaylamak için tasarlanmış ayrı cihaz. |
| PSBT | Önerilen işlemi ve imzalama bilgisini taşıyan kısmen imzalanmış Bitcoin işlem dosyası. |
| SegWit / Taproot | Bitcoin çıktı ve harcama biçimleri. Yerel ana ağ alım adresleri genellikle sırasıyla `bc1q` ve `bc1p` ile başlar. |

<span id="privacy-and-ginger" data-ginger-heading="gizlilik-ve-ginger" aria-hidden="true"></span>

## Gizlilik ve Ginger

| Terim | Cüzdan kullanıcısı için anlamı |
| --- | --- |
| CoinJoin | Sahiplik bağlantılarının çıkarılmasını zorlaştırmayı amaçlayan, birkaç katılımcının girdilerini içeren ortak işlem. |
| WabiSabi | Ginger CoinJoin koordinasyonunda kullanılan kimlik bilgisi tabanlı protokol. İşlemi blok zincirinden silmez. |
| Koordinatör | Tur düzenleyen hizmet. Normalde katılımcıların özel anahtarlarını tutmadan kullanılabilirliği ve uygunluğu etkileyebilir. |
| Yeniden karıştırma (remix) | Hizmetin yeniden karıştırma koşullarını karşılayan fonlarla ek CoinJoin katılımı; madencilik ücreti yine geçerli olabilir. |
| Anonimlik puanı | Ginger’ın coin gizliliğini sınıflandırmak için kullandığı yerel tahmin; bağımsız kişilerin doğrulanmış sayısı değildir. |
| Anonimlik kümesi | Makul alternatiflerden oluşan kavramsal grup. Cüzdanın hesaplanan puanıyla otomatik aynı değildir. |
| Küme (cluster) | Gözlemcinin birlikte ait olduğunu çıkardığı adresler veya coinler. Bazı ilişkiler gerçektir; diğerleri yanılabilir sezgisel kurallardır. |
| Adresin tekrar kullanımı | Aynı adreste birden fazla alım yapmak ve alımları doğrudan bağlamak. |
| Coin kontrolü | Ödeme için coinlerin bilinçli incelemesi ve seçimi. |
| Tor | Uygulama bağlantılarını kullanıcının IP adresinden ayırmaya yardımcı ağ aktarma sistemi. |
| Blok filtresi | Blokları yerel işlemeden önce cüzdanla ilgili işlemleri içerebilecek blokları belirlemek için kullanılan kompakt özet. |
| Tam düğüm | Bitcoin verisini mutabakat kurallarıyla doğrulayan yazılım. CoinJoin koordinatöründen farklı rolü vardır. |
| PayJoin | Alıcının girdi katkısında bulunabildiği ortak ödeme. Ginger’ın yayımlanan gönderme sürecinde geri dönüş ve uyumluluk sınırları vardır. |
| Discreet Mode | Desteklenen hassas görüntü alanlarını gizlemek; şifreleme veya cüzdan kilidi değildir. |
| KYC | Sağlayıcının kimlik doğrulama süreci. Tor doğrudan gönderilen bilgiyi ondan gizlemez. |
| İtibari para | Teklif veya görüntü tahminlerinde kullanılan, devletin çıkardığı para; zincir üstünde gerçekleşen BTC’den farklıdır. |

“Gizli” ve “güvenli” gibi terimler farklı özellikleri tanımlar. İkisini de koşulsuz garanti saymak yerine neyin, kimden ve hangi koşullarda korunduğunu sorun.
