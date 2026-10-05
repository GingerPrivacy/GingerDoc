---
title: "Ginger Wallet ve Sparrow Wallet: gizlilik, kontrol ve ödünleşimler"
description: "Size uygun olanı seçmek için Ginger ve Sparrow’u CoinJoin, ağ gizliliği, donanım cüzdanları, çoklu imza, işlem kontrolü ve ücretler açısından karşılaştırın."
doc_id: "compare.ginger-vs-sparrow"
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet ve Sparrow Wallet kendi anahtarlarınızı tutmanıza izin veren açık kaynak Bitcoin masaüstü cüzdanlarıdır. İkisi de normal ödemeleri, donanım cüzdanlarını ve bilinçli coin seçimini destekler.

**Ginger koordinatör bağlantısı zaten yapılandırılmış CoinJoin sağlar. Sparrow çoklu imza dahil daha geniş cüzdan düzenleri ve işlem inceleme ve imzalama araçları sunar.** Seçim ihtiyaç duyduğunuz sürece ve üstlenmeye hazır olduğunuz sorumluluklara bağlıdır.

Son kontrol: **14 Eylül 2026**. Sürüm kapsamı: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) ve [Sparrow 2.5.4](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4). Karşılaştırma bu sürümlerdeki belgelenmiş süreçleri kapsar; hız, güvenilirlik veya anonimliği ölçmez.

<span id="at-a-glance" data-ginger-heading="bir-bakışta" aria-hidden="true"></span>

## Bir bakışta

| Soru | Ginger Wallet | Sparrow Wallet |
| --- | --- | --- |
| İmzalama anahtarlarını kim kontrol eder? | Siz, yazılım cüzdanında veya desteklenen donanım cihazında. | Siz, yapılandırdığınız yazılım veya donanım imzalayanlarıyla. |
| Koordineli CoinJoin karıştırma dahili mi? | Evet, hazır koordinatör bağlantısıyla. | Güncel Whirlpool karıştırma entegrasyonu yok; diğer gizlilik araçları kalır. |
| Cüzdan geçmişini nasıl alır? | Kompakt filtreler ve yerel işlenen bloklar; Tor varsayılan açık. | Halka açık Electrum sunucusu, Bitcoin Core düğümünüz veya özel Electrum sunucusu; Tor desteklenir. |
| Donanım cüzdanı kullanabilir miyim? | Evet, desteklenen cihazlar ve dosyayla PSBT süreciyle. | Evet, desteklenen USB, QR kod ve SD kart süreçleriyle. |
| Çoklu imza kurabilir miyim? | Belgelenen arayüzde genel çoklu imza kurulumu yok. | Evet, birden fazla imzalayan ve seçili imza eşiğiyle. |
| Tek tek coinleri seçebilir miyim? | Evet, Manual Control üzerinden. | Evet, ayrıntılı işlem inceleme ve düzenlemeyle. |
| Hangi ücretleri beklemeliyim? | Madencilik ücretleri; CoinJoin koordinatör ücretleri ve küçük artıklar da doğurabilir. | Madencilik ücretleri; ek girdi veya çıktılar maliyet artırabilir. |

Aşağıdaki bölümler farkları açıklar ve ilgili rehberlere bağlanır.

<span id="privacy-and-coinjoin-different-tools-for-different-links" data-ginger-heading="gizlilik-ve-coinjoin-farklı-bağlantılar-için-farklı-araçlar" aria-hidden="true"></span>

## Gizlilik ve CoinJoin: farklı bağlantılar için farklı araçlar

Bir bitcoin bakiyesi, UTXO da denen ayrı coinlerden oluşur. Birkaçını birlikte harcamak geçmişlerini ilişkilendirebilir. CoinJoin bazı sahiplik bağlantılarının çıkarılmasını zorlaştırmak için katılımcı girdilerini tek işlemde birleştirir.

Ginger’ın [yayımlanan yapılandırması](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) koordinatör bağlantısını içerir. Yazılım cüzdanını yedekleyip onaylanmış fon aldıktan sonra [CoinJoin kontrollerini](/tr/using-ginger/coinjoin/) inceleyip katılımı başlatabilirsiniz. Koordinatör imzalama anahtarlarınızı tutmadan turları düzenler. Kullanılabilirlik, uygun fonlar, ücretler ve yeterli katılım turun bitmesini yine etkiler.

Sparrow Whirlpool istemcisini [1.9.0 sürümünde](https://github.com/sparrowwallet/sparrow/releases/tag/1.9.0) kaldırdı. Sparrow içinde Whirlpool karıştırmasına ilişkin eski talimatlar güncel sürümü anlatmaz.

Sparrow harcamayı daha az açıklayıcı yapacak yollar sunmaya devam eder. **Privacy** işlem seçeneği ödeme tutarıyla eşleşen ek çıktıyla Stonewall işlemi oluşturabilir. Tüm girdiler cüzdanınıza aittir; diğer katılımcıların fonlarını karıştırmadan belirsizlik yaratır. Uygun coinler, yeterli fonlar ve eşleşen adres türleri gerekir; ek girdiler ve çıktılar madencilik ücretini artırabilir. Sparrow yeni ödeme adresleri türetmek için BIP47 ödeme kodlarını da destekler. [Gizli harcamaya](https://sparrowwallet.com/docs/spending-privately.html) bakın.

İki cüzdan uyumlu süreçlerde PayJoin gönderimini de destekler. PayJoin, koordinatörün karıştırma turundan ayrı olarak uyumlu alıcıyı ödeme oluşturulmasına katar. Ginger bunun için yazılım cüzdanı gerektirir. [Ginger PayJoin rehberine](/tr/payments/payjoin-message-signing/) ve [Sparrow PayJoin güncellemelerine](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.4) bakın.

Bu araçların hiçbiri borsa kayıtlarını silmez veya blok zincirini gizli yapmaz. Sonraki coin birleşimleri, adres tekrar kullanımı veya alıcıyla bilgi paylaşımı yeni bağlantıları açıklayabilir. [CoinJoin güven ve sınırlarına](/tr/learn-coinjoin/trust-and-limits/) bakın.

<span id="network-privacy-who-learns-about-your-wallet" data-ginger-heading="ağ-gizliliği-cüzdanınızı-kim-öğrenir" aria-hidden="true"></span>

## Ağ gizliliği: cüzdanınızı kim öğrenir?

Ginger olası ilgili blokları belirlemek için kompakt blok filtreleri kullanır, sonra indirilen blok verisini yerel işler. Bu, halka açık cüzdan sunucusuna cüzdan adres listesi açıklama ihtiyacını azaltır. Tor dahil edilmiştir ve normal ağ bağlantılarında varsayılan açıktır. Ginger [isteğe bağlı Bitcoin Core düğümü](/tr/settings-network/full-node-fees/) de sunar. Bağlantı modeli ve sınırları için [Tor ve eşitlemeyi](/tr/using-ginger/tor/) okuyun.

Sparrow halka açık Electrum sunucusu, kendi Bitcoin Core düğümünüz veya özel Electrum sunucusu seçmenizi sağlar. Halka açık sunucu kullanışlıdır, ancak işleticisi aldığı cüzdan sorgularını ilişkilendirip faaliyetinizi öğrenebilir. Sparrow [Hızlı başlangıç rehberi](https://sparrowwallet.com/docs/quick-start.html) bu ödünleşimi açıklar; [Bitcoin Core rehberi](https://sparrowwallet.com/docs/connect-node.html) kendi düğümünüzü bağlamayı kapsar.

Kontrol ettiğiniz altyapı, sorguları ilgisiz halka açık sunucu işleticisine açıklamayı önler. Sparrow özel sunucunun onion adresi dahil Tor bağlantılarını da destekler. [En iyi uygulamalar rehberi](https://sparrowwallet.com/docs/best-practices.html) bu düzenleri tartışır.

Tor IP adresi gibi bağlantı üst verilerini korumaya yardımcı olur. İstek içeriğini alan hizmetten gizlemez. Kendi düğümünüzü çalıştırmak da blok zincirindeki işlemden sahiplik ipuçlarını kaldırmaz. Ağ ayarlarını ve harcama alışkanlıklarını birlikte seçin.

<span id="hardware-wallets-and-multisig" data-ginger-heading="donanım-cüzdanları-ve-çoklu-imza" aria-hidden="true"></span>

## Donanım cüzdanları ve çoklu imza

İki uygulama desteklenen donanım cihazı imzalama anahtarlarını tutarken ödemeler hazırlayabilir. Sparrow [USB bağlı donanım cüzdanlarını](https://sparrowwallet.com/docs/connected-wallet.html), [QR kodla imzalamayı](https://sparrowwallet.com/docs/airgapped-wallet-qr.html) ve [SD kartla imzalamayı](https://sparrowwallet.com/docs/airgapped-wallet-sdcard.html) belgeler. Mevcut yöntem cihaza ve aygıt yazılımına bağlıdır.

Ginger normal donanım ödemelerini ve [PSBT dosya sürecini](/tr/hardware-wallets/psbt/) destekler. PSBT önerilen işlemi ve ayrı imzalamak için gereken bilgiyi taşır. Bulunması her cüzdan düzenine destek kanıtlamaz: Ginger [donanım cüzdanı rehberi](/tr/using-ginger/hardware-wallet/) yayımlanan arayüzün sınırlarını anlatır.

Sparrow harcamanın üç imzadan ikisi gibi seçili sayıda imza gerektirdiği çoklu imza cüzdanları oluşturmanızı sağlar. İmzalama yetkisini dağıtmada esneklik ile daha fazla kurulum ve yedekleme sorumluluğu getirir. Ginger benzer genel çoklu imza kurulumu sağlamaz. Sparrow cüzdan politikası seçimleri için [cüzdan oluşturma rehberine](https://sparrowwallet.com/docs/quick-start.html#creating-your-first-wallet) bakın.

Ginger CoinJoin katılan girdileri yazılım cüzdanıyla imzalar. Ginger’a yüklü desteklenen donanım cüzdanı bunun yerine çıktıları alabilir. Bu cihazın girdileri imzaladığı veya çıktıların amaçlanan gizlilik hedefinize ulaştığı anlamına gelmez. Hedef seçimi yeniden başlatmada sıfırlanır. Koşullar için [Ginger soğuk depolama rehberini](/tr/hardware-wallets/exchange-to-cold-storage/) izleyin; CoinJoin’i açmak için donanım kurtarma kelimelerini masaüstüne asla girmeyin.

<span id="transaction-control-and-everyday-use" data-ginger-heading="i̇şlem-kontrolü-ve-günlük-kullanım" aria-hidden="true"></span>

## İşlem kontrolü ve günlük kullanım

İki cüzdan fonları etiketlemenize ve ödeme için belirli coinleri seçmenize izin verir. Ginger’da **Wallet Coins** tek coinleri gösterir; **Send** → **Manual Control** fon seçip oluşan ödemeyi incelemenizi sağlar. [Coin kontrolü ve geçmişe](/tr/payments/coin-control-history/) bakın.

Sparrow işlem diyagramı ve düzenleyicisi yayınlamadan önce inceleme araçlarıyla girdileri, çıktıları, ücretleri ve imzalama ayrıntılarını açığa çıkarır. [Özellik rehberi](https://sparrowwallet.com/features/) kontrol düzeyini açıklar. Düzenli PSBT çalışan veya ödemenin nasıl kurulduğunu incelemek isteyen birine uyabilir.

Her iki cüzdanda ödeme yetkilendirmeden önce alıcıyı, seçili girdileri, para üstünü ve ücreti inceleyin. Elle seçim, birlikte harcarsanız ilişkisiz fonları yine bağlayabilir.

<span id="fees-and-service-conditions" data-ginger-heading="ücretler-ve-hizmet-koşulları" aria-hidden="true"></span>

## Ücretler ve hizmet koşulları

Her iki cüzdanda normal zincir üstü ödemelerin madencilik ücreti vardır. İşlem boyutu ve seçili ücret oranı maliyeti etkiler; Sparrow’un ek gizlilik çıktılarını kullanmak ödemeyi büyütebilir.

Ginger’ın [belgelenmiş koordinatör ayarları](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi/WabiSabi/Backend/WabiSabiConfig.cs) altında **0.03 BTC veya daha az** değerli girdi koordinatör ücretinden muaftır. Büyük girdi normalde **tüm değerinin 0.3% kadarını** öder; uygun yeniden karıştırmalar için muafiyet vardır. Eşik toplam cüzdan bakiyesine değil, girdi başına uygulanır.

Örneğin ücrete tabi 0.10 BTC girdi, madencilik maliyetlerine ek 30 000 satoshi koordinatör ücreti doğurur. CoinJoin çıktı dağıtımında geri dönmeyen küçük artık da bırakabilir. Gerçek tur koşullarını ve [tam maliyet açıklamasını](/tr/using-ginger/annonset/) kontrol edin; ayarlar gelecekteki turlar için teklif değildir. Sparrow normal ödemeleri eşdeğer koordineli karıştırma hizmeti satın almaz; tek başına madencilik ücretleri CoinJoin fiyatıyla birebir karşılaştırma değildir.

Ginger koordinatör işleticisi InvisibleBit LLC, ABD konumları ve uyruğuyla ilgili kısıtlar yayımlar. Koşulları üçüncü taraf girdi kontrolleri ve belirli coinleri reddetmeye de izin verir. [Güncel hizmet koşullarını](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt) inceleyin. Anahtarları tutmak tura kabulü garantilemez. Sparrow’da kullandığınız düğüm veya sunucunun gizlilik ve kullanılabilirliğini düşünün.

<span id="which-fits-your-needs" data-ginger-heading="hangisi-ihtiyaçlarınıza-uygun" aria-hidden="true"></span>

## Hangisi ihtiyaçlarınıza uygun?

**Önceliğiniz hazır koordinatör bağlantısıyla CoinJoin ise Ginger düşünülebilir**; ücretleri ve hizmet koşulları ihtiyaçlarınıza uymalıdır. [Başlangıçla](/tr/getting-started/) başlayın ve yedeğinizden sonra CoinJoin ayarlarını inceleyin.

**Önceliğiniz çoklu imza, belirli donanım imzalama süreci veya ayrıntılı işlem kontrolüyse Sparrow düşünülebilir.** Sunucu bağlantısını bilinçli seçin ve tam cüzdan düzeninizin desteğini kontrol edin.

İkisi farklı roller de üstlenebilir. Ginger’ı CoinJoin, Sparrow’u ayrı donanım cüzdanını yönetmek için kullanabilirsiniz. Aralarındaki normal aktarım madencilik ücreti gerektirir ve görünür işlem bırakır; çıktıları birleştirmek yeniden bağlayabilir. Ginger’ın doğrudan CoinJoin çıktı hedefi yalnızca Sparrow’da açık değil, Ginger’a yüklü desteklenen cüzdan olmalıdır. Bağımsız yedekler tutun ve fonları birleştirmeden önce [CoinJoin sonrası harcamayı](/tr/learn-privacy/spending-after-coinjoin/) inceleyin.
