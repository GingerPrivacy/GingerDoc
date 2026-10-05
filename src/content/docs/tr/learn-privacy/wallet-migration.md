---
doc_id: "learn-privacy.wallet-migration"
title: "Daha fazla cüzdan geçmişi açıklamadan Ginger’a geçmek"
description: "Geçmiş ifşaların kaybolduğunu varsaymadan aynı Bitcoin anahtarlarını geri yüklemeyi, donanımı başka cüzdan uygulamasına bağlamayı ve fonları yeni anahtarlara taşımayı karşılaştırın."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Önce yeni alım adreslerini ve normal ödeme incelemesini anlayın.

Cüzdan yazılımını değiştirmek kullandığınız uygulamayı değiştirir. Bitcoin anahtarlarını, adresleri veya önceki hizmetin zaten bildiği bilgileri mutlaka değiştirmez. Erişimi mi kurtardığınıza, kolaylık için yazılım mı değiştirdiğinize yoksa gelecekteki faaliyetler için yeni ayrım mı oluşturduğunuza karar verin.

<span id="choose-the-kind-of-move" data-ginger-heading="geçiş-türünü-seçin" aria-hidden="true"></span>

## Geçiş türünü seçin

| Seçim | Aynı kalan | Değişen |
| --- | --- | --- |
| Aynı kurtarma kelimelerini, parolayı ve desteklenen hesabı geri yüklemek | Karşılık gelen anahtarlar ve adresler | Bunları tarayıp yöneten uygulama; yerel notlar eksik olabilir |
| Aynı donanım hesabını Ginger’a bağlamak | Donanımda tutulan anahtarlar ve hesabın adresleri | Halka açık hesap bilgisini tutan masaüstü uygulama |
| Yeni anahtarlarla yeni cüzdan oluşturup fonları aktarmak | Mevcut geçmiş blok zincirinde kalır | Gelecekteki anahtarlar ve adresler; ayrı yedek ve zincir üstü aktarım gerekir |

Aynı cüzdanı geri yüklemek bitcoinini taşımaz; yalnızca geri yükleme için ağ ücreti yoktur. Yeni anahtarlara zincir üstü aktarım ücret gerektirir ve görünür işlem oluşturur. İkisi de Ginger’da görünen bakiyeyle bitse bile farklı işlemlerdir.

<span id="understand-what-an-xpub-exposes" data-ginger-heading="xpubnin-açığa-çıkardıklarını-anlayın" aria-hidden="true"></span>

## xpub’nin açığa çıkardıklarını anlayın

Genellikle xpub denen genişletilmiş açık anahtar, normal imzalama yetkisi olmadan yazılımın açık adres dalı türetmesini sağlar. Hesap xpub’si çoğu zaman, o hesaptan türetilecek gelecekteki adresler dahil tek alım adresinden fazlasını açığa çıkarır. Kapsamı anahtar ağacındaki konumuna bağlıdır; diğer her sertleştirilmiş hesabı açıklamaz. [BIP32: Hiyerarşik deterministik cüzdanlar](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

Önceki cüzdan uygulaması, portföy hizmeti veya muhasebe aracı xpub veya adres sorguları almış olabilir. Uygulamayı kaldırmak başka yerde tutulan kopyaları iptal etmez. Aynı hesabı kullanmaya devam etmek o gözlemcinin sonraki faaliyetleri de tanımasına izin verebilir. Tor doğrudan IP bağlantısını gizleyebilir; alıcı hizmetin gönderdiğiniz cüzdan bilgilerini unutmasını sağlayamaz.

Hizmetin ne aldığını bilmiyorsanız bunu belirsizlik sayın. Araştırmak için çevrimiçi “gizlilik denetleyicisine” xpub yüklemeyin.

<span id="restore-access-to-an-existing-software-wallet" data-ginger-heading="mevcut-yazılım-cüzdanına-erişimi-geri-yükleyin" aria-hidden="true"></span>

## Mevcut yazılım cüzdanına erişimi geri yükleyin

1. Kurulumu değiştirmeden önce asıl yedekleri ve kayıtları koruyun. Geçiş, çalışan tek cüzdan dosyalarınızı silme gerekçesi değildir.
2. Cüzdanın asıl kelimeleri ve tam olarak asıl parolasıyla Ginger kurtarma sürecini kullanın. Cüzdan biçiminin, adres türlerinin ve hesabın desteklendiğini doğrulayın. Geçerli kurtarma kelimeleri tek başına uyumluluğu kanıtlamaz.
3. Taramanın bitmesini bekleyin. Boş ekranın paranın yok olduğu anlamına geldiği sonucuna varmadan önce özel kayıtlarınızdan bilinen işlemleri veya alım adresini karşılaştırın.
4. Geri yüklenen etiketleri, CoinJoin ayarlarını ve gizlilik bilgisini inceleyin. Kurtarma kelimeleri anahtarları kurtarır; önceki uygulamadaki her notu veya ayarı yeniden oluşturmaz.
5. Fonları gözetimsiz çalışmaya bırakmadan önce otomatik CoinJoin’i ve hedef seçimini kontrol edin. Aynı coinleri aynı anda iki uygulamayla harcamaktan kaçının.

Yanlış parola farklı, geçerli cüzdan oluşturabilir. Rastgele ayarları denemeyin, açıklanamayan boş hesaba test fonu göndermeyin veya uyuşmazlığı çözmesi için yabancı destek kişisine kurtarma kelimelerini vermeyin.

<span id="use-the-same-hardware-wallet-in-ginger" data-ginger-heading="aynı-donanım-cüzdanını-gingerda-kullanın" aria-hidden="true"></span>

## Aynı donanım cüzdanını Ginger’da kullanın

Cihazı **Hardware Wallet** üzerinden ekleyin, desteklenen PIN/parola istemlerini izleyin ve alım adresini kendi ekranında doğrulayın. Ginger’ın amaçlanan hesabı gösterdiğini doğrulayın. Bu sürümde normal cihaz içe aktarımı yerel SegWit kullanır; başka yazılım başka hesap veya adres türü gösteriyor olabilir.

Donanımı bağlamak, imzalama anahtarları cihazda kalırken Ginger’ın açık cüzdan bilgilerini tutmasına izin verir. Üreticinin yardımcı uygulamasının zaten paylaştığı bilgileri geri almaz. Aynı hesabı başka yalnızca izleme uygulamasında açmak, hiçbir uygulama donanım olmadan harcayamasa bile daha fazla geçmiş açıklayabilir.

Desteklenmeyen bağlantı veya hesabı aşmak için donanım kurtarma kelimelerini bilgisayara içe aktarmayın. Hesap doğru temsil edilemiyorsa cihazın desteklenen sürecine başvurun.

<span id="create-a-new-separation-for-future-activity" data-ginger-heading="gelecekteki-faaliyetler-için-yeni-ayrım-oluşturun" aria-hidden="true"></span>

## Gelecekteki faaliyetler için yeni ayrım oluşturun

Amacınız farklı anahtarlar gerektiriyorsa yeni cüzdan ve yedek oluşturup doğrulayın. Yeni hedef alın ve durum acil değilse küçük test kullanın. Kalan tutarı taşımadan önce yeni cüzdanın alım yapabildiğini ve çalışan imzalama veya kurtarma yolunuz olduğunu doğrulayın.

Her aktarımın girdilerini inceleyin. Tüm eski coinleri birlikte göndermek önceden ayrı faaliyetleri ilişkilendirebilir. Normal aktarım, girdi ve çıktı işlem geçmişini de bağlar. Yalnızca yeni anahtarlar bu bağlantıyı gizlemez; düşünülmüş CoinJoin süreci, ücretlere, uygunluğa ve sonraki harcamaya bağlı bazı işlem bağlantısı gizliliği hedeflerini ele alabilir.

Eski alım adreslerini ne zaman ve nasıl kullanmayı bırakacağınızı seçin. Kontrol ettiğiniz ödeme talimatlarını güncelleyin, geç ödemeleri tanımaya yeterli kayıt tutun ve daha önce paylaşılan adresin siteden kaldırıldı diye çalışmayı durdurduğunu varsaymayın. Hâlâ para alabilecek cüzdanların kurtarma verilerini saklayın.

<span id="when-the-move-is-urgent" data-ginger-heading="geçiş-acil-olduğunda" aria-hidden="true"></span>

## Geçiş acil olduğunda

Açığa çıkmış xpub öncelikle gizlilik sorunu doğurur. Açığa çıkmış imzalama sırları anında fon kontrolü sorunu doğurur. Saldırganın fonları zaten harcayabiliyor olma ihtimali varsa karmaşık gizlilik sürecini beklemek yerine yeni anahtarlı güvenilir hedefi önceliklendirin. Uygulama şifresini değiştirmek veya açığa çıkmış tohumu yeni donanım cihazına koymak kopyalanmış anahtarları iptal etmez.

Geçişten sonra [harcama örneklerini](/tr/learn-privacy/spending-after-coinjoin/) ve [bilgi paylaşımını](/tr/learn-privacy/information-sharing/) inceleyin. Sürdürülebilir amaç, nelerin bilinmeye devam ettiğini anlamak ve gereksiz yeni ifşalardan kaçınmaktır.
