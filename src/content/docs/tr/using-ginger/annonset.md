---
doc_id: "coinjoin.fees-and-progress"
title: "CoinJoin ücretleri ve gizlilik ilerlemesi"
description: "CoinJoin’in tüm maliyetini bütçeleyin, ücret muafiyetlerini ücretsiz işlemlerden ayırın ve Ginger gizlilik puanlarını uygulamalı örneklerle yorumlayın."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Önce normal başlatma ve duraklatma kontrollerini ve tamamlanan turların ücret gerektirdiğini anlayın.

CoinJoin’in maliyeti ve gizlilik amacı vardır. Başlamadan ikisini de inceleyin: koordinatör ücreti muafiyeti turu ücretsiz yapmaz; ilerleme göstergesi başka birinin sizin hakkınızda bildiği her şeyi ölçemez.

<span id="coordinator-fee-versus-mining-fee" data-ginger-heading="koordinatör-ücreti-ve-madencilik-ücreti" aria-hidden="true"></span>

## Koordinatör ücreti ve madencilik ücreti

Ginger’ın güncel koordinatör ücret ayarlarıyla 3 000 000 satoshi (0.03 BTC) veya daha küçük her girdi koordinatör ücreti ödemez. Eşik tam olarak 0.03 BTC’yi içerir. Eşiğin üzerindeki girdi normalde yalnızca 0.03 BTC üzerindeki bölümün değil, tüm değerinin 0.3% kadarını öder. Oran ondalık olarak 0.003’tür ve hesaplanan ücretteki kesirli satoshiler aşağı yuvarlanır.

Eşik toplam cüzdan bakiyenize veya kaydettiğiniz girdilerin toplamına değil, her girdiye ayrı uygulanır. Uygun yeniden karıştırmalar da muaf olabilir; Ginger’ın duyurduğu muafiyet CoinJoin’den geçmiş fonların tek işlemle doğrudan harcanmasını içerir. Bu ek muafiyetler sunulan tura ve girdinin uygunluğuna bağlıdır. Katılmadan önce [güncel Ginger ücret açıklamasını](https://gingerwallet.io/) yeniden kontrol edin.

Başka koordinatör ücreti muafiyeti olmayan girdiler için:

| Girdi değeri | BTC değeri | Koordinatör ücreti |
| --- | --- | --- |
| 2 999 999 satoshi | 0.02999999 BTC | 0 satoshi |
| 3 000 000 satoshi | 0.03 BTC | 0 satoshi |
| 3 000 001 satoshi | 0.03000001 BTC | 9 000 satoshi |
| 4 000 000 satoshi | 0.04 BTC | 12 000 satoshi |

Örneğin 0.04 BTC girdisi, eşiğin üzerindeki yalnızca 0.01 BTC’nin 0.3% kadarını değil, 0.00012 BTC (12 000 satoshi) öder. Koordinatör ücreti sıfır olan girdilerde de madencilik ücretleri eklenir. Örnekler yapılandırılmış hesaplamayı açıklar, gelecekteki tur için teklif değildir.

Madencilik ücretleri işlem alanı için madencilere ödenir. Ücret oranına ve işlemin girdileriyle çıktılarına bağlıdır. Küçük değerli coini harcamak değerinin büyük yüzdesine mal olabilir. Tekrarlanan CoinJoin’ler koordinatör ücreti muafiyetine uygun olsalar bile her seferinde ek madencilik maliyeti yaratabilir.

Oluşan ek işlemleri, ücretleri ve halka açık bağlantıları anlamadan yalnızca muafiyet elde etmek için coinleri bölmeyin.

<span id="account-for-the-complete-cost" data-ginger-heading="tam-maliyeti-hesaba-katın" aria-hidden="true"></span>

## Tam maliyeti hesaba katın

Harcadığınız tutar duyurulan koordinatör yüzdesinden fazlasını içerebilir. CoinJoin ayrıca işlem alanına ihtiyaç duyar ve istemci mevcut değeri dağıttıktan sonra çıktı tutarları küçük artık bırakabilir. Artık koordinatör gelirine veya işlemin madencilik ücretine katkıda bulunabilir; mutlaka cüzdanda görünen ayrı ücret kalemi değildir.

Tamamlanan tek CoinJoin için girdilerinizin toplam değerini o işlemden sahip olduğunuz tüm çıktıların toplam değeriyle karşılaştırın. Farklı çıktı cüzdanına gönderilenleri dahil edin. Ortak işlemdeki her çıktıyı yalnızca sizin girdilerinizden çıkarmayın: çıktılardan bazıları diğer katılımcılara aittir.

Aşağıdaki açıklayıcı hesap örneğidir; Ginger’ın çıktı tutarlarının tahmini veya uygulama ekranı değildir:

| Kalem | Satoshi |
| --- | ---: |
| Ücrete tabi girdiniz | 5 000 000 |
| İki cüzdanınızın tamamındaki çıktı toplamınız | 4 980 800 |
| Değer farkı | 19 200 |
| Bu örnekte varsayılan koordinatör ücreti: girdinin 0.3% kadarı | 15 000 |
| Bu örnekte katılımınıza atfedilen madencilik maliyeti | 3 600 |
| Bu örnekte kalan dağıtım farkı | 600 |

Burada 15 000 + 3 600 + 600 = 19 200 satoshidir. Son üç satır aynı farkı açıklar; o farkı başka ücret olarak tekrar eklemeyin. Turun tamamındaki madencilik ücreti de her katılımcının tümünü ödediği ücret değildir. Tek ücret alanının veya günlük satırının değer farkınızın her bileşenini temsil ettiği varsayılmamalıdır.

Çıktılar donanım cüzdanına gittiyse yazılım cüzdanı bakiyesinden kaybolmaları, hâlâ sahip olduğunuz değerin aktarımıdır. Uzlaştırmadan önce iki cüzdanın da eşitlenmesini bekleyin. Onaylanmamış işlemler, eşzamanlı ödemeler ve gelen fonlar basit önce/sonra bakiye karşılaştırmasını yanıltıcı kılabilir.

<span id="budget-for-the-whole-journey" data-ginger-heading="tüm-süreci-bütçeleyin" aria-hidden="true"></span>

## Tüm süreci bütçeleyin

Sonucun maliyete değip değmediğine karar verirken CoinJoin çevresindeki adımları dahil edin:

| Adım | Düşünülecek maliyet |
| --- | --- |
| Borsadan çekmek | Çekim ücreti; işleminin madencilik ücretinden farklı olabilir |
| Bir veya daha fazla tura katılmak | Her tamamlanan katılımın gerçek değer farkı |
| Fonları başka cüzdana taşımak | Normal aktarım yaparsanız başka madencilik ücreti |
| Oluşan coinleri daha sonra harcamak | Sonraki ödemenin girdileri ve çıktıları için ücretler |

Örneğin 19 200 satoshiye mal olan katılımın ardından 1 200 satoshilik aktarım, bu iki adım için 20 400 satoshi tutar. Sonraki ödeme ayrı giderdir. Daha fazla çıktı ayrı harcamak için küçük parçalar verebilir; ancak bu parçaları harcamak da işlem alanı tüketir. Çıktıların oluşturulması o gelecekteki maliyeti ödemiş değildir.

Öğrenmek için kullanmayı karşılayabileceğiniz tutar seçin ve tekrarlanan turları sürdürmeden ilk tamamlanan sonucu inceleyin. Kişisel maliyet bütçesi tutun; CoinJoin zaman tercihi veya coin seçimi ayarı, tüm sürecin toplam maliyetinde garantili üst sınır değildir.

<span id="when-ginger-waits-or-refuses-a-round" data-ginger-heading="ginger-ne-zaman-bekler-veya-turu-reddeder" aria-hidden="true"></span>

## Ginger ne zaman bekler veya turu reddeder?

İstemci katılmadan önce önerilen koşulları kontrol eder. **Mining fee rate was too high**, **Coordination fee rate was too high**, **Min input count was too low** veya **Server did not give remix fee exemption** gösterebilir. Sınırları körlemesine artırmak yerine sunulan koşulları araştırın.

Ücret tercihleri **Awaiting cheaper coinjoins** durumuna da yol açabilir. Zaman tercihi bir gün veya hafta içinde tamamlanmayı garanti eden rezervasyon değil, nispeten ucuz koşulları beklemek demektir. Yayından önce başarısız tur tek başına yeni onaylanmış Bitcoin işlemi oluşturmaz.

Bu sürümde normal CoinJoin başlangıcı, fonları gizlilik hedefini zaten karşılayan cüzdanı veya yalnızca hedefi karşılayan coinlerden oluşan seçimi de reddeder. Başka çıktı cüzdanı seçmek kontrolü aşmaz. Amaç zaten gizli fonları taşımaksa hedef seçiminin başka turu zorlamasını beklemek yerine normal aktarımı inceleyin.

<span id="what-the-privacy-score-can-tell-you" data-ginger-heading="gizlilik-puanının-söyleyebilecekleri" aria-hidden="true"></span>

## Gizlilik puanının söyleyebilecekleri

Ginger coinlerin gizlilik bilgisini takip edip cüzdanın anonimlik puanı hedefiyle karşılaştırır. Puan, cüzdanın işlem bilgisine dayalı yerel tahmindir. Bağımsız doğrulanmış kişilerin sayısı veya gözlemcinin sizi tanımlayabilme olasılığı değildir.

Genel ilerleme, hedefe doğru puanların tutarla ağırlıklandırılmış hesaplamasını kullanır. Ayrı renkli bakiye dökümü gizlilik kategorilerindeki tutarları temsil eder. Bunlar farklı ölçümlerdir.

Basitleştirilmiş örnekte hedefin 5 olduğunu ve cüzdanda yalnızca bu iki coin bulunduğunu varsayalım:

| Coin | Değer | Yerel puan | Hedefi karşılıyor mu? |
| --- | ---: | ---: | --- |
| A | 1 000 000 satoshi | 5 | Evet |
| B | 3 000 000 satoshi | 3 | Hayır |

Değerin yalnızca 25% kadarı hedefi karşılar. Genel ilerlemede bu sürüm puan 1 üzerindeki ilerlemeyi ağırlıklandırır: coin A, 1 000 000 × 4 ve coin B, 3 000 000 × 2 katkısı yapar; en yüksek değer 4 000 000 × 4’tür. Bu 62.5% eder ve tam sayı değeri 62% olarak gösterilir. Dolayısıyla bu iki görünümde farklı yüzdeler görmek tek başına hata değildir.

**Hurray! All your funds are private!** mesajı, cüzdanın güncel hedefi ve hesaplaması altında fonları gizli saydığı anlamına gelir. Geçmişin kaybolduğu, internette anonim olduğunuz veya sonraki ödemenin bağlantı kuramayacağı anlamına gelmez.

<span id="decide-when-you-have-achieved-your-objective" data-ginger-heading="amacınıza-ne-zaman-ulaştığınıza-karar-verin" aria-hidden="true"></span>

## Amacınıza ne zaman ulaştığınıza karar verin

Hedefi düşürmek, blok zincirinde zaten yayımlanmış hiçbir şeyi değiştirmeden hangi coinlerin uygun sayıldığını değiştirebilir. Artırmak daha fazla katılım ve ücret gerektirebilir; garantili anonim kişi sayısı satın almaz. Yeni fon almak, coinleri birleştirmek veya cüzdanı yerel üst verileri olmadan kurtarmak da gösterilen sonucu değiştirebilir.

Kimin bilgisini sınırlamak istediğinize karar verin: borsa, belirli alıcı veya açıklanmış adresi izleyen biri. Ginger’ın göremediği tutarları, zamanları ve kimlikleri bilebilirler. Mevcut puanın yanında sonraki ödemeyi de değerlendirin.

Tamamlanan turları incelemek, coinlerinizi uzlaştırmak ve nasıl harcayacağınızı düşünmek için duraklatın. Bu bağlamın daha fazlasını korumak istiyorsanız kurulumları taşırken yerel üst verileri saklayın. Hedef, ücret tercihleri ve hedef kontrolleri için [CoinJoin ayarlarına](/tr/coinjoin/settings/) bakın.
