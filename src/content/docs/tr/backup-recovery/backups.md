---
doc_id: "backup-recovery.backups"
title: "Ginger cüzdanınızı yedekleyin"
description: "Bilgisayarı kaybettikten sonra bir Ginger yazılım cüzdanını kurtarmak için gereken kurtarma kelimelerini ve asıl parolayı saklayıp doğrulayın."
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Okuma düzeyi: Buradan başlayın. Önce temel adımlar gelir; ileri düzey kaynaklar isteğe bağlı olarak daha sonra okunabilir.

Bir Ginger yazılım cüzdanı için kurtarma kelimelerini ve kullandıysanız tam olarak asıl parolayı saklayın. Bunlar, bilgisayarı kaybettikten sonra erişimi kurtarmanızı sağlar. Donanım cüzdanı kendi cihaz yedekleme sürecini kullanır; kelimelerini bilgisayardan uzak tutun.

<span id="the-backup-you-need-first" data-ginger-heading="öncelikle-gereken-yedek" aria-hidden="true"></span>

## Öncelikle gereken yedek

1. Kelimeleri gösterilen sırayla yazın ve gizli tutun.
2. Parolayı tam olarak kaydedin veya cüzdanın parolasız oluşturulduğunu kaydedin. Ginger bunu sıfırlayamaz.
3. Yedeği bilgisayarı kaybettikten sonra erişebileceğiniz bir yerde tutun; başkalarının okumasını engelleyin.
4. Cüzdan hâlâ erişilebilirken yedeği doğrulayın.

Cüzdanın adı bir kurtarma sırrı değildir. Kimlik doğrulama kodu veya donanım PIN’i, kelimelerin ve asıl parolanın yerini almaz.

<span id="store-recovery-information-safely" data-ginger-heading="kurtarma-bilgilerini-güvenli-saklayın" aria-hidden="true"></span>

## Kurtarma bilgilerini güvenli saklayın

Kelimeleri okunaklı ve asıl sıralarıyla yazın. Bilgisayarınızı kaybettikten sonra ulaşabileceğiniz ve başkalarının okumasını engelleyen bir yerde saklayın. Yangın, su veya erişilemeyen tek bir konum yedeğinizi işe yaramaz hale getirecekse birden fazla dayanıklı kopya düşünün. Kelimeleri sıradan bir bulut notuna yazmadan, kopyaların nerede olduğunu kaydedin.

Boş olmayan bir parolayı da kurtarılabilir biçimde saklayın. Yalnızca ezberlemek yetersiz kalabilir. Ayrı saklamak, tek bir keşfin her şeyi açığa çıkarması olasılığını azaltır; ancak düzen sizin veya bilerek yetkilendirdiğiniz birinin anlayabileceği şekilde olmalıdır. Nasıl kurtaracağınızı bilmeden kelimeleri parçalara ayıran kendi yönteminizi icat etmeyin.

Bir uygulama şifresi, cihaz PIN’i, kimlik doğrulama kodu ve BIP39 parolası birbirinin yerine geçmez. Yedek talimatlarını açıkça etiketleyin, ancak sırları istenmeyen bir okuyucuya açıklamayın.

<span id="choose-something-durable-and-readable" data-ginger-heading="dayanıklı-ve-okunaklı-bir-araç-seçin" aria-hidden="true"></span>

## Dayanıklı ve okunaklı bir araç seçin

Kâğıt yangın, su veya solma nedeniyle zarar görebilir. Metal bazı hasarlara dayanabilir, ancak yine de başkalarının okumasına karşı korunmalıdır. Yedeğinizin okunaklı ve erişilebilir kaldığını kontrol edin.

Kurtarma kelimeleri için fotoğraflardan, sıradan bulut notlarından ve yazıcılardan kaçının: kontrol etmediğiniz kopyalar bırakabilirler. Birden fazla kopya tutuyorsanız her birini koruyup takip edin. Kelimeleri yeniden kuramayabileceğiniz doğaçlama bir bulmacaya bölmeyin.

<span id="check-the-backup-before-you-need-it" data-ginger-heading="i̇htiyaç-duymadan-önce-yedeği-kontrol-edin" aria-hidden="true"></span>

## İhtiyaç duymadan önce yedeği kontrol edin

Açık bir yazılım cüzdanı için **Wallet Settings** → **Tools** → **Verify Recovery Words**, ardından **Verify** yolunu kullanın. Yedekteki kelimeleri girin. Başarılı kontrol, kelimelerin o cüzdana ait olduğuna dair yararlı bir kanıttır. Parola kaydının doğru olduğundan ve korumayı amaçladığınız dosyaları bulabildiğinizden de emin olun.

Kelimeler doğrulanmazsa yazımı ve sırayı gizlilik içinde kontrol edin. Hâlâ harcama erişiminiz varsa ancak kullanılabilir bir kurtarma yedeği oluşturamıyorsanız doğrulanmış yedeği olan yeni bir cüzdan oluşturup fonları dikkatle aktarın. İnceleme sırasında eski cüzdanı silmeyin.

Önemli etiket veya ayar değişikliklerinden sonra yerel üst verileri yeniden yedekleyin. Daha fazla bitcoin almak normalde yeni kurtarma kelimeleri gerektirmez; ancak yeni bir cüzdan veya farklı bir parola gerektirir.

<span id="what-about-labels-and-computer-files" data-ginger-heading="etiketler-ve-bilgisayar-dosyaları-ne-olacak" aria-hidden="true"></span>

## Etiketler ve bilgisayar dosyaları ne olacak?

Kurtarma kelimeleri her etiketi, ayarı veya sağlayıcı sipariş kaydını geri getirmez. Yerel otomatik yedekler aynı bilgisayardadır; bu nedenle bilgisayarın tamamını kaybetmeye karşı korumazlar.

İsteğe bağlı ileri düzey kaynak: [cüzdan dosyaları, üst veriler ve parola ayrıntıları](/tr/backup-recovery/backup-files/). Dosya kopyalarını ve 2FA ile ilgili dosyaları, temel kelime yedeğinden ayrı olarak açıklar.
