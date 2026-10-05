---
doc_id: "payments.receive"
title: "Bitcoin alın ve adresleri yönetin"
description: "Bir Ginger alım adresi oluşturun, desteklendiğinde SegWit veya Taproot seçin, ödemeleri etiketleyin ve onayları kontrol edin."
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Okuma düzeyi: Buradan başlayın. Önce temel adımlar gelir; ileri düzey kaynaklar isteğe bağlı olarak daha sonra okunabilir.

Her ödeme için yeni bir alım adresi kullanın. Adres, ödeme yapana bitcoini nereye göndereceğini söyler; kurtarma kelimelerinizi açığa çıkarmaz. Ancak tekrar kullanılması, gözlemcilerin aynı hedefe yapılan ödemeleri ilişkilendirmesini sağlar.

<span id="request-a-payment" data-ginger-heading="ödeme-isteyin" aria-hidden="true"></span>

## Ödeme isteyin

1. Amaçladığınız cüzdanı açın ve kurtarmanın veya eşitlemenin bitmesini bekleyin.
2. **Receive** seçeneğini seçin. “Haziran faturası” gibi, ödeme yapanı veya amacı açıklayan bir etiket ekleyin. Gereksiz kişisel verileri kaydetmeden daha sonra tanımaya yetecek ayrıntı kullanın.
3. **Generate** seçeneğini seçin. Normal eylem yerel SegWit adresi oluşturur. Cüzdan Taproot’u destekliyorsa alternatif eylem, **TR** ile gösterilen **Taproot** seçeneğini sunar; yalnızca ödeme yapan bu adres türünü destekliyorsa kullanın.
4. Adresi kopyalayın veya alım QR kodunu paylaşın. Donanım cüzdanında **Show on the hardware wallet** seçeneğini kullanın ve ödeme yapana vermeden önce cihazdaki adresin tamamını karşılaştırın.
5. Başka bir uygulamaya yapıştırdıktan sonra hedefi kontrol edin. Pano kötü amaçlı yazılımları, asıl QR veya cüzdan ekranı doğru olsa bile adresi değiştirebilir.

Bitcoin ana ağında yerel SegWit alım adresleri normalde `bc1q` ile, Taproot adresleri ise `bc1p` ile başlar. Test ağı adresleri farklıdır. Bir hizmet desteklenen Bitcoin adresini reddederse adresin karakterlerini değiştirmek yerine o hizmetin ağ ve adres türü desteğini kontrol edin.

<span id="labels-and-unused-addresses" data-ginger-heading="etiketler-ve-kullanılmamış-adresler" aria-hidden="true"></span>

## Etiketler ve kullanılmamış adresler

**Addresses Awaiting Payment**, henüz ödeme almamış ve hâlâ o listede sunulan alım adreslerini gösterir. QR kodlarını inceleyebilir, kopyalayabilir, etiketlerini değiştirebilir veya sunulan eylemlerle bir adresi gizleyebilirsiniz.

Adresi gizlemek Bitcoin üzerinde iptal etmez. Anahtarlarını kontrol ediyorsanız daha önce oluşturulan adrese yapılan ödeme hâlâ cüzdana aittir. Kullanılmış adresler tasarım gereği ödeme bekleyenler listesinden kaybolabilir; bu, eski anahtarların silindiğini göstermek yerine yeni adresleri teşvik eder.

Etiketler, blok zincirine yazılan veya ödeme yapana otomatik gönderilen mesajlar değil, yerel cüzdan üst verileridir. Yine de yedekler, günlükler, dışa aktarımlar veya ekran paylaşımıyla açığa çıkabilirler. Etiketler sizin için önemliyse dosya yedeği tutun: kurtarma kelimeleri bunları yeniden oluşturamaz.

<span id="know-when-you-have-been-paid" data-ginger-heading="ödemenin-ne-zaman-geldiğini-bilin" aria-hidden="true"></span>

## Ödemenin ne zaman geldiğini bilin

Gönderenin işlemi yayınlaması, Ginger’ın onu onaylanmamış görmesi ve madencinin bir bloğa dahil etmesi farklı olaylardır. Cüzdan geçmişini ve işlem ayrıntılarını kontrol edin. Onaylanmamış ödeme değiştirilebilir veya onay almayabilir; karşılığında geri döndürülemez bir şey sağlamadan önce durumun ne kadar onay güvencesi gerektirdiğine karar verin.

Ginger, uygulama kapalıyken ödeme alabilir. Ödeme yapanın çevrimiçi cüzdana değil, geçerli adrese ihtiyacı vardır. Yeniden açtığınızda eşitleme işlemi bulur. Bir CoinJoin veya farklı bir yüklü cüzdana gönderilen ödeme yalnızca çıktılarını kontrol eden cüzdanda görünür.

<span id="if-the-payment-is-missing" data-ginger-heading="ödeme-görünmüyorsa" aria-hidden="true"></span>

## Ödeme görünmüyorsa

Gönderenden işlem kimliğini isteyin ve mevcut iletişim kanalınızdan hedefi doğrulayın. Seçili cüzdanı, ana ağ ile test ağı ayrımını, eşitleme durumunu ve gönderenin gerçekten işlem yayınlayıp yayınlamadığını kontrol edin. Her adresi halka açık gezgine yapıştırmaktan kaçının: gezgin neyi sorguladığınızı öğrenir.

Kelimelerden geri yüklediyseniz ve geçmişte çok sayıda kullanılmamış adres oluşturduysanız kurtarma boşluk sınırı önemli olabilir. Yeni alım isteği tek başına eksik geçmiş taramasını düzeltmez. Yeniden tarama veya kurtarma denemeden önce yedekleri koruyun.
