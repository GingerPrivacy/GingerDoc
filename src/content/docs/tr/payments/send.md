---
doc_id: "payments.send"
title: "Bitcoin gönderin ve ücretleri gözden geçirin"
description: "Bir Ginger ödemesi hazırlayın, alıcıyı ve tutarı doğrulayın, ücret oranlarını ve para üstünü anlayın ve işlemi yetkilendirin."
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Okuma düzeyi: Buradan başlayın. Önce temel adımlar gelir; ileri düzey kaynaklar isteğe bağlı olarak daha sonra okunabilir.

Ginger onaylanmış Bitcoin ödemesini geri çağıramaz. Onaylamadan önce alıcıyı güvenilir kanaldan kontrol edin ve hedefin tamamını, tutarı ve ücreti gözden geçirin. Yeni bir kullanım sürecini öğrenirken küçük ödemeyle başlayın.

<span id="prepare-a-payment" data-ginger-heading="ödeme-hazırlayın" aria-hidden="true"></span>

## Ödeme hazırlayın

1. Fonları tutan cüzdanı açın ve **Send** seçeneğini seçin. Normal ödeme süreci için **Automatic** seçeneğini seçin. Gerektiğinde elle coin seçimini ayrı öğrenebilirsiniz.
2. Alıcının Bitcoin adresini veya ödeme URI’sini **To:** alanına koyun. Ödeme isteği tutarı içerebilir; yapıştırdıktan sonra kontrol edin. Platformunuzda **Scan QR Code** eylemi varsa kamerayı kullanabilir, ardından çözümlenen hedefi gözden geçirebilirsiniz.
3. Tutarı ve açıklayıcı alıcı etiketini girin. Ekranın BTC mi yoksa itibari para mı gösterdiğini kontrol edin. İtibari para tahmini kurla değişir ve Bitcoin ağının aktardığı tutar değildir.
4. **Continue** seçeneğini seçip işlem önizlemesini, seçilen fonları, gizlilik önerilerini ve beklenen para üstünü gözden geçirin. Tutarı değiştiren öneri yalnızca alıcının isteğini hâlâ karşılıyorsa uygundur.
5. Ücreti ve tahmini onay süresini gözden geçirin. Ayrıntılar doğruysa **Confirm** seçeneğini seçin, ardından gereken parola veya donanım cihazı yetkilendirmesini tamamlayın.
6. Yayınlanan işlem için geçmişi kontrol edin. Ağ hatasından sonra sonuç belirsizse başka ödeme başlatmadan önce geçmişi inceleyin.

Mevcut fonların tamamını gönderirken ücret, alıcının alacağı tutardan düşülebilir. Sabit tutarlı istekler ve PayJoin farklı kısıtlamalara sahiptir. Cüzdan bakiyesinin tamamının hedefe ulaşabileceğini varsaymak yerine gerçek alıcı tutarını önizlemede kontrol edin.

<span id="check-the-fee-without-custom-settings" data-ginger-heading="özel-ayar-kullanmadan-ücreti-kontrol-edin" aria-hidden="true"></span>

## Özel ayar kullanmadan ücreti kontrol edin

Önizlemede toplam ücreti ve tahmini onay tercihini gözden geçirin. Ücret işlem alanı için ödenir; yalnızca ödemenin bir yüzdesi değildir. Süre tahmini değişebilir ve garanti değildir.

Anladığınız, mevcut bir ücret tahminini kullanın. Tahminler yoksa ve ne seçeceğinizden emin değilseniz çok yüksek bir özel ücreti tahmin etmek yerine bekleyip araştırın.

<span id="the-leftover-money-is-change" data-ginger-heading="artan-para-para-üstüdür" aria-hidden="true"></span>

## Artan para, para üstüdür

Ödeme, alıcı tutarı artı ücretten daha büyük bir bitcoin parçası kullanabilir. Artan değer, bazen daha önce görmediğiniz bir adreste para üstü olarak cüzdanınıza döner. Hâlâ sizin kontrolünüzdedir; elle geri gönderilecek bir şey yoktur.

Bir gizlilik önerisi önerilen alıcı tutarını değiştirebilir. Yalnızca alıcının isteğini hâlâ karşılıyorsa kabul edin. Özellikle para üstünden kaçınmak için sabit bir faturayı eksik ödemeyin.

İsteğe bağlı ileri düzey kaynak: [özel ücret oranları ve para üstü](/tr/using-ginger/fee/) veya [elle coin kontrolü ve işlem geçmişi](/tr/payments/coin-control-history/).

<span id="when-a-payment-cannot-be-prepared" data-ginger-heading="ödeme-hazırlanamadığında" aria-hidden="true"></span>

## Ödeme hazırlanamadığında

Görünen toplam bakiye yeterli görünse bile yetersiz fon, ücretlerden sonra yeterli harcanabilir değer olmadığı anlamına gelebilir. Fonlar ayrıca onaylanmamış, kritik CoinJoin aşamasında bağlı veya şu anda genişletilemeyen onaylanmamış bir zincirin parçası olabilir.

Kurtarma sırasında gönderme eyleminin olmaması beklenir. Yalnızca izleme cüzdanı tek başına imzalayamaz. Lightning adresleri ve faturaları bu sürümde desteklenmez; zincir üstü Bitcoin ödeme adresi isteyin.
