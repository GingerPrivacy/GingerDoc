---
doc_id: "learn-self-custody.basics"
title: "Bitcoin anahtarlarını kendiniz saklamak: yedekler, parolalar ve donanım cüzdanları"
description: "Bitcoininizi kimin harcayabileceğini, kurtarma yedeğini nelerin tamamladığını ve Ginger yazılım ile donanım cüzdanlarının farklarını öğrenin."
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Okuma düzeyi: Buradan başlayın. Önce temel adımlar gelir; ileri düzey kaynaklar isteğe bağlı olarak daha sonra okunabilir.

Anahtarları kendiniz saklamak, bitcoininizi harcamak için gereken bilgiyi tutmanız demektir. Hesap sağlayıcısından parayı serbest bırakmasını istemeden ödemeyi onaylarsınız. Karşılığında bilgiyi korumalı, kullanılabilir yedek tutmalı ve her ödemeyi dikkatle kontrol etmelisiniz.

<span id="keys-records-and-recovery" data-ginger-heading="anahtarlar-kayıtlar-ve-kurtarma" aria-hidden="true"></span>

## Anahtarlar, kayıtlar ve kurtarma

Bitcoin ağı işlemlerin halka açık kaydını tutar. Cüzdanınız kontrol ettiğiniz parçaları harcamayı onaylamak için özel anahtarlar kullanır. Uygulamayı yeni bilgisayara kurmak bu sırları yeniden oluşturmaz; kurtarma yedeği bu yüzden önemlidir.

Ginger yazılım cüzdanında kurtarma kelimeleri ve asıl parola anahtarları yeniden oluşturur. Yerel cüzdan dosyaları etiket ve ayarlar gibi ek bağlamı koruyabilir. Kimlik doğrulayıcı, donanım cihazı PIN’i ve bilgisayardan kopyalanan dosyanın her biri farklı amaçlara hizmet eder; hiçbirinin kelime yedeğinin yerini aldığı varsayılmamalıdır.

<span id="the-passphrase-changes-the-wallet" data-ginger-heading="parola-cüzdanı-değiştirir" aria-hidden="true"></span>

## Parola cüzdanı değiştirir

Ginger kurtarma kelimeleriyle BIP39 parolası kullanır. Farklı parola farklı anahtarlar üretir. Bu nedenle asıl parolayı yanlış yazarsanız kurtarma başarıyla tamamlanıp yine de boş cüzdan gösterebilir. [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) bu ilişkiyi tanımlar.

Kullanıp kullanmadığınızı kaydedin ve doğru koruyun. Yalnızca hafızada bulunan karmaşık sır yerine kurtarabileceğiniz korumayı seçin. Gelecekte cüzdan parolasını bilgisayar girişinden veya kimlik doğrulama kodundan ayırabileceğiniz şekilde kurtarma talimatlarını saklayın.

<span id="software-versus-hardware" data-ginger-heading="yazılım-ve-donanım-karşılaştırması" aria-hidden="true"></span>

## Yazılım ve donanım karşılaştırması

| Düzen | İmzalama yeri | Pratik sorumluluk |
| --- | --- | --- |
| Ginger yazılım cüzdanı | Mevcut sırrını kullanarak masaüstünde | Bilgisayarı ve kurtarma bilgisini koruyun; otomatik CoinJoin için imzalayabilmelidir |
| Ginger üzerinden kullanılan donanım cüzdanı | Desteklenen işlemler için cihazda | Ayrıntıları cihazda doğrulayın ve üreticinin kurtarma yedeğini saklayın |
| İmzalayanı olmayan yalnızca izleme kaydı | Tek başına harcamayı yetkilendiremez | Gizlilik açısından hassas açık verisini koruyun ve ayrı imzalayana erişimi tutun |

Donanım cüzdanı anahtarların masaüstü kötü amaçlı yazılımlara maruziyetini azaltabilir; ancak cihaz ekranını incelemezseniz kötü amaçlı ödemeyi yine yetkilendirebilirsiniz. Tohumunu masaüstü cüzdanına içe aktarmak güvenlik düzenini değiştirir: anahtarlar artık o bilgisayara açıktır.

<span id="recovery-is-part-of-the-setup" data-ginger-heading="kurtarma-kurulumun-parçasıdır" aria-hidden="true"></span>

## Kurtarma kurulumun parçasıdır

Cüzdana güvenmeden önce yedeğini bulup anlayabildiğinizden emin olun. Erişilebilir Ginger yazılım cüzdanında **Verify Recovery Words** verdiğiniz kelimeleri kontrol eder. Asıl parolayı da erişilebilir tutun. Donanım cüzdanında, tohumu masaüstüne yazmadan üreticinin uygun yedek kontrol yöntemini kullanın.

Uygulama dosyalarından fazlasını saklayın. İndirilen kurucular yeniden edinilebilir; eksik sır projenin sitesinden alınamaz. Disk arızasını, kayıp cihazı ve yedek konumuna erişimi düşünün. Bitcoin.org’un [cüzdan güvenliği rehberi](https://bitcoin.org/en/secure-your-wallet), yedekleri ve cihaz korumasını tamamlayıcı uygulamalar olarak ele alır.

<span id="evaluate-a-wallet-with-evidence" data-ginger-heading="cüzdanı-kanıtla-değerlendirin" aria-hidden="true"></span>

## Cüzdanı kanıtla değerlendirin

Resmî sürümleri kullanın, imzaları doğrulayın ve kullanacağınız özelliklerin sınırlarını okuyun. Açık kaynak incelemeyi mümkün kılar; her ikili dosyanın veya bağımlılığın denetlendiğini kanıtlamaz. [Bitcoin.org Ginger kaydı](https://bitcoin.org/en/wallets/desktop/windows/ginger/) ve [WalletScrutiny Ginger sayfası](https://walletscrutiny.com/desktop/gingerwallet/) gibi harici listeler ek bağlam sunar. Kaydı kurulu sürümünüz hakkında garanti saymak yerine kapsamını ve tarihlerini kontrol edin.

Ginger yazılım cüzdanı kurtarmasını, donanım entegrasyonunu ve gizlilik araçlarını masaüstü sürecinde birleştirir. İsteğe bağlı ileri düzey okuma: açığa çıkmış adreslere, cüzdan verilerine veya anahtarlara yanıtlar dahil [kurtarılabilir güvenlik rutini oluşturun](/tr/learn-self-custody/security-routine/).
