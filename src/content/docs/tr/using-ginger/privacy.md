---
doc_id: "learn-privacy.who-can-see"
title: "Bitcoin işlemlerimi kim görebilir?"
description: "Bir Bitcoin adresinin neleri açığa çıkardığını, kimlik ve işlem bağlantılarının nasıl birleştiğini ve Ginger gizlilik araçlarının nerede yardımcı olabileceğini öğrenin."
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Okuma düzeyi: Buradan başlayın. Önce temel adımlar gelir; ileri düzey kaynaklar isteğe bağlı olarak daha sonra okunabilir.

Bitcoin işlemleri herkese açıktır, ancak cüzdan sahibinin adı her adresin yanına otomatik yazılmaz. Pratik soru, bir adresi veya işlemi sizinle kimin ilişkilendirebildiği ve bu bağlantıdan başka neler çıkarabildiğidir.

Bir müşteri, faturada verdiğiniz Bitcoin alım adresini bilebilir. Borsa, çekim adresinizi ve doğrulanmış kimliğinizi bilebilir. Halka açık bağış adresini izleyen biri gelen ödemeleri gözlemleyebilir. Bu gözlemciler farklı bilgilerle başlar; bu nedenle gizliliği tek bir anonim/anonim değil ayarı yerine kontrollü bilgi açıklama olarak düşünmek daha yararlıdır.

<span id="what-the-blockchain-reveals" data-ginger-heading="blok-zincirinin-açığa-çıkardıkları" aria-hidden="true"></span>

## Blok zincirinin açığa çıkardıkları

İşlemler girdileri, çıktıları, değerleri ve harcama yoluyla ilişkilerini gösterir. Daha sonra başka işlemde harcanan çıktı halka açık bağlantı oluşturur. Bu, her çıktının sahibini otomatik kanıtlamaz: işlem bir ödeme, kendi cüzdanlarınız arasında aktarım veya birkaç sahibin ortak işlemi olabilir. Asıl [Bitcoin makalesinin gizlilik bölümü](https://bitcoin.org/bitcoin.pdf), halka açık işlemler ile kimliklerin ayrılmasını ve anahtarların ilişkilendirilmesi sorununu tartışır.

Biri adresi kişiyle ilişkilendirdiğinde bağlantılı faaliyetleri araştırabilir. Aynı adrese tekrarlanan ödemeler gibi bazı ilişkiler doğrudandır. Diğerleri ortak girdi sahipliği veya hangi çıktının para üstü olduğu varsayımlarına dayanır. Bu varsayımlar yanlış olabilir, ancak hizmetlerin işlemleri sınıflandırmasını yine de etkileyebilir.

<span id="who-can-learn-what" data-ginger-heading="kim-neyi-öğrenebilir" aria-hidden="true"></span>

## Kim neyi öğrenebilir?

| Gözlemci | Başlangıçta sahip olabileceği bilgi | Kontrol edebileceğiniz |
| --- | --- | --- |
| Ödeme yapan | Verdiğiniz adres ve yaptığı ödeme | Her alım için yeni adres verin |
| Ödeme alıcısı | Ödeme işleminiz ve satın alımdan gelen bilgiler | Seçili girdileri inceleyin ve gereksiz kimlik açıklamasından kaçının |
| Borsa veya satın alma sağlayıcısı | Hesap kayıtları, ödeme ayrıntıları, yatırma/çekme adresleri | Kullanmadan önce sağlayıcının kayıtlarını anlayın |
| Halka açık blok zinciri analisti | İşlem verileri ve başka yerlerden edinilen etiketler | Kolay bağlantılar oluşturmaktan kaçının; CoinJoin’i ve sonraki harcama alışkanlıklarını değerlendirin |
| Bağlantı kurulan ağ hizmeti | İstek içeriği ve muhtemelen bağlantı üst verileri | Desteklendiğinde Tor’u açık tutun ve özelliğe özgü ifşaları anlayın |
| Bilgisayarınıza veya yedeklere erişen biri | Cüzdan dosyaları, etiketler, adresler, günlükler, muhtemelen anahtarlar | Cihazı, kurtarma yedeğini ve yerel üst verileri koruyun |

Tek bir cüzdan ayarı her satırı ele almaz. Donanım cüzdanı anahtarları korumaya yardımcı olur, ancak halka açık adresi gizlemez. Tor bağlantı üst verileriyle yardımcı olur, ancak sağlayıcı formuna yazılan bilgileri gizlemez.

<span id="why-this-matters-in-ordinary-life" data-ginger-heading="günlük-yaşamda-neden-önemli" aria-hidden="true"></span>

## Günlük yaşamda neden önemli?

Birkaç müşteriye aynı adresle fatura keserseniz her müşteri, diğer müşterilerin ödemeleri dahil o adrese gelen alımları görebilir. Yeni adres, doğrudan ortak tanımlayıcıyı önler. Tüm alımları birlikte harcarsanız sonraki bağlantıları otomatik engellemez.

Halka açık bağış kampanyasıyla ilişkili fonlardan birine ödeme yaparsanız işlem, ödeme tutarının ötesinde bağlam açığa çıkarabilir. Hangi coinlerin hangi faaliyete ait olduğunu kaydetmek, harcamadan önce bilinçli seçim yapmanıza yardımcı olur.

Finansal gizlilik müşteri gizliliğini, ticari bilgileri, kişisel ilişkileri ve fiziksel güvenliği koruyabilir. Bu sınırları istemek yanlış bir şey yapmış olmayı gerektirmez. İlgili soru, etkileşimi tamamlamak için diğer kişinin bilgilere erişmesi gerekip gerekmediğidir.

<span id="privacy-and-fungibility" data-ginger-heading="gizlilik-ve-değiştirilebilirlik" aria-hidden="true"></span>

## Gizlilik ve değiştirilebilirlik

Değiştirilebilirlik, birimlerin eşdeğer koşullarla değiş tokuş edilebilmesidir. Bitcoin işlem kuralları değerleri hesaba katar, ancak insanlar ve hizmetler çıktıları görünen geçmişlerine göre farklı sınıflandırabilir. Çıktı Bitcoin kurallarına göre geçerli olsa bile bu yargılar güçlük çıkarabilir.

Gizlilik araçları bazı geçmiş sınıflandırmalarının güvenle yapılmasını zorlaştırabilir. Sağlayıcıyı aktarımı kabul etmeye zorlayamaz veya zaten elindeki kaydı silemez. “Temiz” coin veya garantili kabul iddialarını dikkatle ele alın: cüzdanın gizlilik tahmini ile hizmet politikası farklı şeylerdir.

<span id="where-ginger-fits" data-ginger-heading="gingerın-rolü" aria-hidden="true"></span>

## Ginger’ın rolü

Ginger yeni adresle alım, yerel etiketler, coin kontrolü, Tor entegrasyonu, kompakt filtreli cüzdan eşitlemesi ve CoinJoin sunar. Bunlar belirli ifşaları azaltmanıza ve yetkilendirmeden önce ödemeyi incelemenize olanak tanır. Masaüstü uygulama anahtar koruması için donanım cüzdanı süreçlerini de destekler.

Yeni adreste ödeme almakla ve mevcut coinlerinizi anlamakla başlayın. İşlem bağlantılarının gizliliği kaygıysa otomatik turları açmadan önce CoinJoin’in neleri değiştirip değiştiremeyeceğini öğrenin. Günlük seçimler için [Ödeme öncesi ve sonrası gizlilik alışkanlıkları](/tr/using-ginger/address-reuse/) ile devam edin.

Amaç, durumunuz için bilinçli iyileşmedir. Ginger borsanın zaten topladığı bilgileri silemez, her hizmetin kabulünü vaat edemez veya sonraki gönüllü açıklamanın yeni bağlantı oluşturmasını engelleyemez.
