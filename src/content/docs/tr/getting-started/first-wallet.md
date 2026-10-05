---
doc_id: "getting-started.first-wallet"
title: "İlk Ginger cüzdanınızı oluşturup açın"
description: "Bir Bitcoin cüzdanı oluşturun, kurtarma kelimelerini ve parolasını kaydedin; ilk eşitlemeyi ve CoinJoin ayarlarını anlayın."
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: "İlk cüzdanınızı oluşturun"
prev:
  link: /getting-started/install/
  label: "Ginger Wallet kurulumu"
next: false
---

> Okuma düzeyi: Buradan başlayın. Önce temel adımlar gelir; ileri düzey kaynaklar isteğe bağlı olarak daha sonra okunabilir.

Ginger cüzdanı, bitcoinlerinizi tanımak ve harcamak için gereken bilgileri içerir. Bitcoinin kendisi Bitcoin ağında kayıtlıdır. Doğru yedeğiniz varsa bilgisayarınızı kaybetmenizden sonra kurtarma mümkündür; hem cüzdanı hem de kurtarma bilgilerini kaybederseniz mümkün olmayabilir.

<span id="create-a-software-wallet" data-ginger-heading="bir-yazılım-cüzdanı-oluşturun" aria-hidden="true"></span>

## Bir yazılım cüzdanı oluşturun

1. Cüzdan ekleme ekranını açın ve **New** seçeneğini seçin. **Wallet Name** istenirse bu cüzdanı diğerlerinden ayıran bir ad seçin. İlk cüzdana, bu adım gösterilmeden otomatik oluşturulan bir ad verilebilir.
2. Ginger on iki İngilizce **Recovery Words** kelimesi gösterir. Gösterilen sırayla yazın ve çevrimdışı saklayın. Fotoğraflarını çekmeyin, e-postaya koymayın veya destek ekibiyle paylaşmayın. Ginger oluşturma işleminden sonra bunları tekrar göstermez.
3. **Confirm Recovery Words** adımına devam edin ve istenen kelimeleri yazılı yedeğinizden seçin. Bu, kelimeleri ekranda yalnızca tanımak yerine sıralamayı kaydettiğinizi kontrol eder.
4. **Add Passphrase** adımında bir parola girip doğrulayın veya bilinçli olarak parolasız bir cüzdan seçiyorsanız iki alanı da boş bırakın. Parola kullanıp kullanmadığınızı kaydedin. Boş olmayan bir parola hem kurtarma hem de korunan cüzdanı açma için gereklidir; Ginger’ın sıfırlayabileceği bir şifre değildir.
5. Hizmet koşullarına ilişkin istemleri tamamlayın. Bakiyeye güvenmeden önce cüzdanın bağlanıp eşitlenmesine izin verin.

Cüzdan adınız yerel bir etikettir. Kurtarma kimlik bilgisi değildir ve anahtarları değiştirmez. Cüzdanın adını değiştirmek yeni bir cüzdan oluşturmakla aynı şey değildir.

<span id="decide-how-to-use-coinjoin" data-ginger-heading="coinjoini-nasıl-kullanacağınıza-karar-verin" aria-hidden="true"></span>

## CoinJoin’i nasıl kullanacağınıza karar verin

Ginger, CoinJoin ayarlarını kişiselleştirmeniz için bir istem gösterebilir. Fonları otomatik CoinJoin’e açık bırakmadan önce ayarları ve ücretleri inceleyin. **Coinjoin Settings** bölümündeki **Automatically start coinjoin**, kontrol panelindeki başlatma düğmesine basmadan CoinJoin’in başlayıp başlamayacağını belirler. Cüzdanınızda bu seçeneğin açık mı kapalı mı olduğunu kontrol edin; içe aktarılmış veya daha önce yapılandırılmış bir cüzdanın ayarları farklı olabilir.

CoinJoin işlem ücretleri harcar ve zaman alabilir. Bitcoin almak, normal bir ödeme göndermek ve CoinJoin kullanmak ayrı eylemlerdir. Önce kaybı karşılanabilir küçük bir tutarla alma ve gönderme sürecini öğrenebilirsiniz.

<span id="open-an-existing-wallet" data-ginger-heading="mevcut-bir-cüzdanı-açın" aria-hidden="true"></span>

## Mevcut bir cüzdanı açın

Ginger’ın cüzdan listesinden adını seçin. İstenirse asıl parolayı girin. Uygulamanın iki faktörlü kimlik doğrulamasını etkinleştirdiyseniz tek tek cüzdanları açmadan önce başlangıç istemini tamamlayın. Donanım cüzdanı, masaüstündeki yazılım cüzdanı sırrı yerine kendi cihaz yetkilendirme sürecini kullanır.

Kurtarma kelimelerinden bir cüzdan eklemek için cüzdan ekleme ekranında **Recover** seçeneğini seçin. Uyumlu bir cüzdan JSON yedeğini veya desteklenen donanım dışa aktarımını yüklemek için **Import File** seçeneğini seçin. Kurtarma kelimelerini dosya içe aktarma penceresine yapıştırmayın ve cihazı bağlamak için donanım cüzdanının kurtarma kelimelerini içe aktarmayın.

<span id="know-when-the-wallet-is-ready" data-ginger-heading="cüzdanın-ne-zaman-hazır-olduğunu-bilin" aria-hidden="true"></span>

## Cüzdanın ne zaman hazır olduğunu bilin

Eşitleme, cüzdanınıza ait işlemleri bulur. Tamamlanana kadar bakiye veya geçmiş eksik olabilir. Kurtarılan bir cüzdan arama sırasında normal alma veya gönderme eylemlerini gizleyebilir. Onaylanmamış bir gelen ödeme görülmüştür, ancak henüz bir bloğa dahil edilmemiştir.

Önemli bir tutar almadan önce cüzdanın açıldığını, kurtarma yedeğinizin okunaklı olduğunu ve parola seçiminizi anladığınızı kontrol edin. Erişilebilir bir yazılım cüzdanının kelimelerini kontrol etmek için **Wallet Settings** → **Tools** → **Verify Recovery Words** yolunu ve **Verify** düğmesini kullanın. Bu işlem yedeği doğrular; unutulan kelimeleri göstermez.

<span id="close-safely" data-ginger-heading="güvenli-biçimde-kapatın" aria-hidden="true"></span>

## Güvenli biçimde kapatın

**Settings** → **General** bölümünde **Run in background when window closed** etkinse pencereyi kapatmak Ginger’ı çalışır durumda bırakabilir. Durdurmanız gerektiğinde uygulamanın normal çıkış eylemini kullanın. Kritik bir CoinJoin aşamasında Ginger’ın kapanma sürecini bitirmesine izin verin. Zorla kapatmak katılımı kesintiye uğratabilir.

<span id="next-receive-and-send" data-ginger-heading="sonraki-adım-alın-ve-gönderin" aria-hidden="true"></span>

## Sonraki adım: alın ve gönderin

Yedeğiniz kontrol edilip eşitleme tamamlandıktan sonra [Küçük bir ilk ödeme alın](/tr/getting-started/#3-receive-a-small-first-payment) bölümüne dönün. Oradaki sonraki bölüm ilk ödemenizi nasıl yapacağınızı açıklar.
