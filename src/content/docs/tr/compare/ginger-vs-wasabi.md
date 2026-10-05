---
title: "Ginger Wallet ve Wasabi Wallet: kurulum, ücretler ve ödünleşimler"
description: "Size uygun olanı seçmek için Ginger ve Wasabi koordinatör kurulumunu, CoinJoin maliyetlerini, donanım cüzdanı süreçlerini ve gizlilik sınırlarını karşılaştırın."
doc_id: "compare.ginger-vs-wasabi"
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet ve Wasabi Wallet, kendi anahtarlarınızı tutmanıza ve CoinJoin kullanmanıza izin veren açık kaynak Bitcoin masaüstü cüzdanlarıdır. CoinJoin’e başlayan biri için temel pratik farklar koordinatör kurulumu ve koordinatör ücretleridir.

**Ginger koordinatör bağlantısı yapılandırılmış olarak gelir. Wasabi CoinJoin başlamadan önce koordinatör yapılandırmanızı gerektirir.** Ginger koordinatörü, aşağıdaki muafiyetlerle 0.03 BTC üzerindeki uygun girdilerden normalde 0.3% alır. Güncel Wasabi yalnızca koordinatör ücreti olmayan turları kabul eder. İkisinde de madencilik maliyetleri vardır.

Son kontrol: **7 Eylül 2026**. Sürüm kapsamı: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) ve [Wasabi v2.8.2](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.8.2). Karşılaştırma belgelenmiş süreçlerini kapsar; hız, güvenilirlik veya anonimlik karşılaştırma testi değildir.

<span id="at-a-glance" data-ginger-heading="bir-bakışta" aria-hidden="true"></span>

## Bir bakışta

| Soru | Ginger Wallet | Wasabi Wallet |
| --- | --- | --- |
| İmzalama anahtarlarını kim kontrol eder? | Siz; koordinatör sizin için saklamalı cüzdan bakiyesi tutmaz. | Siz; CoinJoin anahtarların kullanıcıda kaldığı süreçtir. |
| CoinJoin için ne kurmalıyım? | Koordinatör bağlantısı dahildir; başlamadan cüzdan ayarlarını inceleyin. | Uyumlu koordinatör seçip yapılandırın, ardından cüzdan ayarlarını inceleyin. |
| Koordinatör ücreti var mı? | Normalde ücrete tabi her girdinin tam değerinin 0.3% kadarı; 0.03 BTC veya altındaki girdiler ve uygun yeniden karıştırmalar muaftır. | Güncel istemci koordinatör ücreti olmayan turları kabul eder. |
| Başka maliyetler olabilir mi? | Evet: madencilik ücretleri ve olası geri dönmeyen küçük artıklar. | Evet: madencilik ücretleri ve olası geri dönmeyen küçük artıklar. |
| Donanımdaki anahtarlar CoinJoin girdilerini imzalayabilir mi? | Bu sürümün normal donanım cüzdanı sürecinde hayır. | Güncel donanım cüzdanı sürecinde hayır. |
| CoinJoin çıktıları donanımda saklanabilir mi? | Evet, çıktı hedefi olarak yüklü desteklenen donanım cüzdanı üzerinden. | Evet, desteklenen yüklü cüzdanla CoinJoin-to-wallet özelliği üzerinden. |

Aşağıdaki bölümler farkların koşullarını açıklar ve ilgili belgelere bağlanır.

<span id="coordinator-setup-one-less-decision-with-ginger" data-ginger-heading="koordinatör-kurulumu-ginger-ile-bir-karar-daha-az" aria-hidden="true"></span>

## Koordinatör kurulumu: Ginger ile bir karar daha az

Koordinatör katılan cüzdanlar arasında CoinJoin turu düzenler. Cüzdan uygulamasından ayrı hizmettir; kurtarma kelimelerinize veya özel anahtarlara ihtiyaç duymaz.

Ginger’ın [yayımlanan yapılandırması](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) koordinatör bağlantısı sağlar. Yazılım cüzdanı oluşturup yedekledikten sonra önce koordinatör adresi bulmadan CoinJoin ayarlarını inceleyip başlayabilirsiniz. [Ginger’da CoinJoin kullanmaya](/tr/using-ginger/coinjoin/) bakın.

Wasabi’nin [CoinJoin rehberi](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html) katılımdan önce yapılandırılmış koordinatör gerektirir. Elle başlatmayı ve isteğe bağlı otomatik katılımı destekler. Koordinatör seçmek, işleticisinin kullanılabilirliğini ve politikalarını incelemek demektir.

Ginger’ın buradaki pratik avantajı daha kısa kurulum yoludur. Hazır bağlantı anında tur garantilemez: onaylanmış fon, uygun ücret, kullanılabilir hizmet ve yeterli katılan girdi hâlâ gerekir.

<span id="privacy-with-future-use-in-mind" data-ginger-heading="gelecekteki-kullanımı-düşünerek-gizlilik" aria-hidden="true"></span>

## Gelecekteki kullanımı düşünerek gizlilik

Bugün Bitcoin gizliliğini iyileştirip sonra borsa kullanmak isteyebilirsiniz. CoinJoin’de coinleriniz diğer katılımcıların girdileriyle aynı işlemi paylaşır. Saklama hizmeti yatırmanızı incelerken bu bağlantılar önemli olabilir.

Ginger koordinatörü katılan girdileri tarar ve risk kontrollerini geçemeyenleri dışlar. Amaç, diğer katılımcıların işaretlenmiş girdilerine maruziyeti sınırlamaktır; bu, bitcoini sonra kullandığınızda ek incelemenin olası kaynaklarından biridir.

Wasabi’de benzer taramanın uygulanması seçtiğiniz koordinatöre bağlıdır. Her alım hizmeti yine kendi kabul kararlarını verir.

<span id="fees-compare-the-complete-cost" data-ginger-heading="ücretler-tam-maliyeti-karşılaştırın" aria-hidden="true"></span>

## Ücretler: tam maliyeti karşılaştırın

<span id="gingers-coordinator-fee" data-ginger-heading="gingerın-koordinatör-ücreti" aria-hidden="true"></span>

### Ginger’ın koordinatör ücreti

Muafiyet eşiği coin veya UTXO da denen **girdi başınadır**. Cüzdan bakiyenizin veya tura kaydettiğiniz girdilerin toplam tutarının sınırı değildir.

Güncel koordinatör ayarları altında:

- **0.03 BTC veya daha az** değerli girdi koordinatör ücreti ödemez.
- Büyük girdi normalde **tüm değerinin 0.3% kadarını** öder.
- Uygun yeniden karıştırmalar, girdi uygunluğuna ve sunulan tura bağlı olarak muaf olabilir.

Başka muafiyeti olmayan girdi için:

| Girdi değeri | Koordinatör ücreti | Madencilik ücreti |
| --- | --- | --- |
| 0.03 BTC | 0 satoshi | Eklenir |
| 0.10 BTC | 0.0003 BTC veya 30 000 satoshi | Eklenir |

Örnekler hesaplamayı açıklar; gelecekteki turlar için teklif değildir. Tam kurallar ve diğer örnekler [CoinJoin ücretleri ve gizlilik ilerlemesindedir](/tr/using-ginger/annonset/).

<span id="wasabis-coordinator-fee-policy" data-ginger-heading="wasabinin-koordinatör-ücreti-politikası" aria-hidden="true"></span>

### Wasabi’nin koordinatör ücreti politikası

Wasabi 2.2.0.0 sürümünden beri yalnızca koordinatör ücreti olmayan turları kabul eder. Madencilik ücretleri yine ödenir. Belgeleri ayrıca CoinJoin başına en fazla 10 000 satoshi olan, koordinatöre giden nadir çıktı dağıtım artıklarını açıklar. [Wasabi ücret açıklamasına](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html#fees) bakın.

<span id="budget-beyond-the-headline-percentage" data-ginger-heading="duyurulan-yüzdenin-ötesini-bütçeleyin" aria-hidden="true"></span>

### Duyurulan yüzdenin ötesini bütçeleyin

Ginger da çıktı tutarlarını dağıtırken küçük artık bırakabilir. Her iki cüzdanda tamamlanan işlemde katılan girdilerinizin değerini başka cüzdanda alınanlar dahil **sahip olduğunuz tüm çıktılarla** karşılaştırın. Tekrarlanan turlar ve sonraki aktarımlar maliyet ekleyebilir.

Sıfır koordinatör ücreti karşılaştırmanın bir bileşenidir. İşlem boyutu, madencilik ücret oranları, çıktı dağıtımı ve tamamlanan tur sayısı son harcamanızı etkiler. Ginger’ın [maliyet rehberi](/tr/using-ginger/annonset/) bu tutarları uzlaştırmayı açıklar.

<span id="hardware-wallets-signing-inputs-and-receiving-outputs-are-different" data-ginger-heading="donanım-cüzdanları-girdileri-imzalamak-ve-çıktıları-almak-farklıdır" aria-hidden="true"></span>

## Donanım cüzdanları: girdileri imzalamak ve çıktıları almak farklıdır

İki uygulama da normal alım ve ödeme imzalama için donanım cüzdanlarını destekler. Belgelenmiş CoinJoin süreçleri katılan girdileri yazılım cüzdanının imzalamasını gerektirir; donanım cihazı imzalama kaynağı olamaz. [Ginger donanım cüzdanı desteğine](/tr/using-ginger/hardware-wallet/) ve [Wasabi donanım cüzdanı rehberine](https://docs.wasabiwallet.io/using-wasabi/ColdWasabi.html) bakın.

Oluşan coinleri almak ayrı işlemdir. İkisi de donanım dahil başka desteklenen yüklü cüzdanı CoinJoin çıktı hedefi olarak seçmenize izin verir. Bu, tur sonrası ayrı aktarımı önleyebilir. Donanım cihazının CoinJoin girdilerini imzaladığı veya çıktılar oraya ulaşmadan amaçlanan gizlilik hedefinize mutlaka ulaştığı anlamına **gelmez**.

Ginger’da seçim sıfırlandığı için yeniden başlatmadan sonra hedefi tekrar inceleyin. Yazılım kaynağı ve donanım hedefi için ayrı yedekler tutun. CoinJoin’i etkinleştirmek için donanım kurtarma kelimelerini masaüstü uygulamaya asla girmeyin.

Desteklenen süreç ve koşulları için [Ginger soğuk depolama rehberini](/tr/hardware-wallets/exchange-to-cold-storage/) veya [Wasabi CoinJoin-to-wallet açıklamasını](https://docs.wasabiwallet.io/FAQ/FAQ-UseWasabi.html#can-i-coinjoin-to-another-wallet) izleyin.

<span id="privacy-and-service-policies" data-ginger-heading="gizlilik-ve-hizmet-politikaları" aria-hidden="true"></span>

## Gizlilik ve hizmet politikaları

Anahtarları kendiniz saklamak harcamayı kimin yetkilendirebildiğini yanıtlar. Gizlilik veya hizmet kullanılabilirliği hakkında her soruyu çözmez. CoinJoin bazı sahiplik bağlantılarının çıkarılmasını zorlaştırır, ancak işlemler halka açık kalır. Borsa kendi kayıtlarını tutar; sonraki coin birleşimleri, adres tekrar kullanımı veya alıcıya açıklamalar yeni bağlantılar oluşturabilir. Cüzdan gizlilik puanı anonimlik veya borsa kabulü garantisi değildir. [CoinJoin güven ve sınırlarına](/tr/learn-coinjoin/trust-and-limits/) bakın.

Ginger işleticisi InvisibleBit LLC, ABD konumları ve uyruğuna ilişkin kısıtlamalar dahil hizmet kısıtları yayımlar. Koşulları üçüncü taraf kontrollerine ve belirli girdilerin reddine de izin verir. Hizmeti kullanmadan önce [güncel Ginger koşullarını](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt) inceleyin. Wasabi’de yapılandırdığınız koordinatörün politikalarını inceleyin; cüzdanın ücret politikası işleticinin kabul veya veri işleme uygulamalarını belirlemez.

<span id="which-fits-your-needs" data-ginger-heading="hangisi-ihtiyaçlarınıza-uygun" aria-hidden="true"></span>

## Hangisi ihtiyaçlarınıza uygun?

**Hazır koordinatör bağlantısı istiyorsanız Ginger düşünülebilir**; ücret yapısı ve hizmet politikaları ihtiyaçlarınıza uymalıdır. [Başlangıçla](/tr/getting-started/) başlayın, yedeğinizi oluşturun ve katılmadan önce [CoinJoin kontrollerini](/tr/using-ginger/coinjoin/) inceleyin.

**Koordinatör seçmeyi tercih ediyor ve koordinatör ücreti olmayan turlar istiyorsanız Wasabi düşünülebilir.** Başlamadan işletici ve tam işlem maliyetlerini kontrol edin.

Başlıca ihtiyacınız donanım cüzdanıyla bitcoin almak, tutmak ve göndermekse önce desteklenen cihazları ve normal ödeme süreçlerini karşılaştırın. CoinJoin isteğe bağlıdır; yardımcı olması korumak istediğiniz bilgilere ve oluşan coinleri nasıl harcayacağınıza bağlıdır.
