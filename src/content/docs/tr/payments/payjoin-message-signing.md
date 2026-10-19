---
doc_id: "payments.payjoin-message-signing"
title: "PayJoin ve mesaj imzalama"
description: "Bir PayJoin ödeme isteği gönderin; alıcının bildiklerini, cüzdan parmak izlerini ve geri dönüşü anlayın ve kapsamı dar bir adres sahipliği mesajını imzalayın."
lang: tr
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Önce normal gönderme önizlemesini, alıcı tutarını ve ücreti anlayın.

PayJoin ve mesaj imzalama ayrı araçlardır. PayJoin bir ödeme işleminin oluşturulma biçimini değiştirir. Mesaj imzalama, ödeme yapmadan belirli bir ifade için anahtar kontrolünü kanıtlar. Hiçbiri kurtarma kelimelerinizi açıklama gerekçesi olarak kullanılmamalıdır.

<span id="send-a-payjoin-request" data-ginger-heading="payjoin-isteği-gönderin" aria-hidden="true"></span>

## PayJoin isteği gönderin

PayJoin, alıcının bir girdi katkısında bulunabildiği ortak ödemedir. Bu, normal görünen bir ödemenin tüm girdilerinin tek gönderene ait olduğu varsayımını zayıflatabilir. Alıcı, PayJoin uç noktası içeren uyumlu Bitcoin ödeme URI’si sağlamalıdır; normal adres tek başına etkinleştirmez. Protokol [BIP78’de](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki) açıklanır.

1. Harcanabilir fonları olan bir yazılım cüzdanı kullanın. PayJoin, gönderici girdileri ve para üstü için SegWit ve Taproot'u destekler. Bu sürüm donanım cüzdanından gönderimde PayJoin isteklerini reddeder.
2. Yalnızca adresi kopyalamak yerine ödeme URI’sinin tamamını **Send** bölümüne yapıştırın. Hedefi ve tutarı, her ödeme için kullanacağınız aynı güvenilir kanaldan kontrol edin.
3. İşlem önizlemesini ve PayJoin göstergesini gözden geçirin; tutar ve ücret ayarları uygunsa ödemeyi yetkilendirin. PayJoin tek alıcılı bir süreçtir; toplu ödemeyle veya ücretin alıcı tutarından düşülmesiyle birleştirilemez.
4. Oluşan işlemi geçmişte kontrol edin.

Yayımlanan uygulama, PayJoin oluşturma başarısız olursa normal ödeme işlemine dönebilir. Bu nedenle bu süreci yetkilendirmek, yayınlanan işlemin PayJoin olmasını garanti etmez. Normal ödemeye geri dönüşün gizlilik gereksiniminizi ihlal edeceği yerde kullanmayın.

Ana ağda normal bir internet uç noktası HTTPS kullanmalıdır. HTTP veya HTTPS kullanan `.onion` uç noktası, Tor etkinken desteklenir ve Tor devre dışıyken reddedilir. Diğer URL şemaları reddedilir. Uç nokta desteklenmiyorsa Ginger PayJoin uç noktasını yok sayar; bu yüzden devam etmeden önce önizlemenin ödemeyi hâlâ PayJoin olarak gösterdiğini kontrol edin.

Bu rehber alıcının sağladığı isteğin gönderilmesini kapsar. Ginger’ın normal **Receive** süreci PayJoin alım sunucusu işletmez ve bu sürüm bir tane kurmak için kullanıcı süreci sunmaz.

<span id="negotiated-outputs-and-fees" data-ginger-heading="müzakere-edilen-çıktılar-ve-ücretler" aria-hidden="true"></span>

## Müzakere edilen çıktılar ve ücretler

Ödeme isteği, `pjos=0` ile çıktı değiştirmeyi kısıtlayabilir. Ginger bu kısıtlamayı alıcıya iletir ve istenen ödeme çıktısını değiştiren veya tutarını azaltan öneriyi reddeder. Değiştirmeye izin veriliyorsa alıcı müzakere sırasında farklı bir alma çıktısı kullanabilir. Alıcının eklediği girdi, zincir üstündeki alma çıktısını ödeme tutarınızdan daha büyük de yapabilir.

Ginger, özgün ücret oranından otomatik hesaplanan en yüksek ek madencilik ücreti katkısını duyurur. Cüzdanınızın bu sınırdan fazla katkıda bulunmasını gerektiren öneriyi reddeder. Bu ret yukarıda açıklanan normal ödemeye geri dönüşü kullanır; ödemeyi mutlaka iptal etmez.

Önizleme, yetkilendirmeden sonra gerçekleşen son PayJoin müzakeresinden önce hazırlanır. Müzakere edilen işlemin ücreti ilk önizlemeden farklı olabilir. Ginger tamamlanan işlemin ücret bilgilerini son işlemden yeniden hesaplar, ancak müzakereden sonra ikinci bir onay önizlemesi göstermez. Son işlemi geçmişte kontrol edin ve ilk PayJoin göstergesini müzakerenin başarılı olduğunun kanıtı saymayın.

<span id="what-the-recipient-and-an-observer-learn" data-ginger-heading="alıcının-ve-gözlemcinin-öğrendikleri" aria-hidden="true"></span>

## Alıcının ve gözlemcinin öğrendikleri

Alıcı ödeme isteğini, alım adresini ve amaçlanan tutarı zaten bilir. İstek, kimliğinizle ilişkilendirilmiş bir siparişe bağlıysa PayJoin bu kimlik bağlantısını silmez. Görüşme sırasında alım hizmeti, gönderenin önerilen girdileri dahil önerilen ödeme işlemini de görür. Ödemenin kendisinin gizlendiği biri olarak görülmemelidir.

Ginger, müzakere isteğini göndermeden önce Taproot türetme yolları ve genel genişletilmiş açık anahtarlar dâhil cüzdan anahtar kökeni üst verilerini kaldırır. Bu, alıcıya gönderilen gereksiz cüzdan bilgilerini azaltır; önerilen işlemin girdileri, çıktıları ve tutarları alıcıya görünmeye devam eder.

Dış gözlemci sonunda Bitcoin’de yayımlanan işlemi görür. Başarılı PayJoin, alışılmış “tüm girdiler gönderene aittir” varsayımını güvenilmez kılabilir. Fayda, işleme ve gözlemcinin başka hangi bilgilere sahip olduğuna bağlıdır; işlemin her normal ödemeden ayırt edilemez olmasını garanti etmez.

Bu kitleleri ayrı tutun. İlgisiz gözlemci işlem girdilerini güvenle atayamasa bile alıcı sipariş veya görüşme üzerinden ayrıntıları öğrenebilir. Kimliğinizle ilişkili bir tarayıcı oturumunda ödemeyi ararsanız halka açık işlem gezgini başka bir ifşa oluşturabilir.

<span id="wallet-fingerprints-and-the-ordinary-payment-fallback" data-ginger-heading="cüzdan-parmak-izleri-ve-normal-ödemeye-geri-dönüş" aria-hidden="true"></span>

## Cüzdan parmak izleri ve normal ödemeye geri dönüş

Cüzdanlar girdi adres türleri, işlem yapısı ve imzalama hakkında seçimler yapar. Bu seçimlerin birleşimi tanınabilir örüntüler bırakabilir. Bu nedenle bir işlem, PayJoin protokol mesajları geçerli olsa bile belirsizliğinin bir kısmını kaybedebilir. Yayımlanan [PayJoin parmak izi örnekleri](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy/) bu sorunu belirli cüzdan birleşimlerinde gösterir; Ginger’ın aynı sorunlara sahip olduğunu kanıtlamaz veya Ginger’ın gizliliğini ölçmez.

Kullanıcı olarak güncel, uyumlu bir alım hizmeti seçin, ödeme isteğini doğrulayın ve önerilen ücret ile tutarı inceleyin. Yalnızca başka bir cüzdanı taklit etmek için bilmediğiniz işlem seçeneklerini değiştirmeyin: makul görünen işlem iyi gizlilik sonucunun kanıtı değildir.

Ortak ödeme gerekiyorsa Ginger’ın gönderme sürecini yetkilendirmeden önce alıcıyla uyumlu yöntemde anlaşın. Normal ödemeye geri dönüş, başarısız görüşmenin yine de geçerli ödemeyle sonuçlanabileceği anlamına gelir. Yayından sonra sonuç belirsiz diye tekrar göndermeyin; önce işlemi ve alıcının ödeme durumunu kontrol edin. Başarısız PayJoin görüşmesi ile başarısız Bitcoin ödemesi farklı durumlardır.

<span id="sign-a-message-for-an-address" data-ginger-heading="bir-adres-için-mesaj-imzalayın" aria-hidden="true"></span>

## Bir adres için mesaj imzalayın

Bazı hizmetler bir alım adresini kontrol ettiğinizi göstermenizi ister. Cüzdanın menüsünü açıp **Sign Message** seçeneğini seçin. Bu cüzdana ait bir adresi ve imzalamak istediğiniz ifadenin tam metnini girin. Ginger kendisine ait olmayan adresleri reddeder. Mesajı girin, **Continue** seçeneğini seçin ve oluşan imzayı amaçlanan doğrulayıcı için kopyalayın.

Donanım cüzdanında cihazın imzalama istemini izleyin; kullanılabilirlik cihaza ve mesaj imzalama desteğine bağlıdır. İmzalama cihazı olmayan yalnızca izleme cüzdanı imza üretemez. Adres türü ile doğrulayıcının desteklediği imza biçimi de uyumlu olmalıdır.

Mesajı bir yetkilendirme ifadesi kadar dikkatli okuyun. Alıcıyı, amacı ve tarihi veya doğrulama isteğini belirten dar kapsamlı metin tercih edin. Boş ifadeyi veya sonuçlarını anlamadığınız metni imzalamayın. Paylaştıktan sonra imza kopyalanıp başkalarına gösterilebilir.

Mesaj imzalama bitcoin aktarmaz veya cüzdanınızdaki her adresin sahipliğini kanıtlamaz. İmzalanan adres ile doğrulayıcının siz olarak tanımladığı kişi arasında bağlantı da oluşturur. Borsa bunu isterse sonradan CoinJoin kullansanız bile o ifşa kalır.
