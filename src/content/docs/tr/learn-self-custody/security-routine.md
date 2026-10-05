---
doc_id: "learn-self-custody.security-routine"
title: "Kurtarılabilir Bitcoin güvenlik rutini oluşturun"
description: "Kurtarılabilir Bitcoin güvenlik rutini oluşturun ve açığa çıkmış adreslere, xpub’lere, cüzdan dosyalarına, kurtarma kelimelerine veya cihazlara uygun yanıt verin."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Temel kurtarma yedeğini erişilebilir tutun; açıklanan bilgiyle eşleşen olay adımlarını kullanın.

Yararlı güvenlik rutini, meşru kurtarma için anlaşılır yol bırakırken yetkisiz erişime karşı korur. Rollerini belgelemeden sır eklemek kazara kaybı daha olası yapabilir.

<span id="record-the-recovery-plan" data-ginger-heading="kurtarma-planını-kaydedin" aria-hidden="true"></span>

## Kurtarma planını kaydedin

Cüzdanlarınızın, her birinin kullandığı imzalayan türünün, yedeklerin yerinin ve BIP39 parolası gerekip gerekmediğinin özel envanterini tutun. Envanter sırların kendisini içermek zorunda değildir. Yalnızca her şeyin nasıl kurulduğunu hatırlarken değil, bilgisayar veya telefon yokken de yararlı olmalıdır.

Özellikle donanım cihazları veya birkaç cüzdan kullanırken doğru kurtarılmış hesabı tanımaya yeterli cüzdan düzeni bilgisi saklayın. Kayıtlar için önemliyse etiket ve üst veri yedeklerini tutun; blok zinciri yazdığınız özel notları yeniden oluşturamaz.

Kendi işlerinizi yönetememeniz veya ölümünüz sonrasında başka birinin fonları kurtarmasını istiyorsanız koşullarınıza uygun, açık ve denenmiş erişim planı düzenleyin. Tüm sırları şimdi gelişigüzel paylaşmayın veya kişinin hangi şifreyi kastettiğinizi tahmin edeceğini varsaymayın. Miras ve erişim düzenleri yerel uzman danışmanlığı gerektiren hukuki sonuçlar doğurabilir; bu sayfa hukuki yapı önermez.

<span id="check-before-funding-and-before-signing" data-ginger-heading="fonlamadan-ve-imzalamadan-önce-kontrol-edin" aria-hidden="true"></span>

## Fonlamadan ve imzalamadan önce kontrol edin

Uygulama indirmesini doğrulayın, cüzdanın açıldığını teyit edin ve yedeği kontrol edin. Donanım cüzdanında alım adreslerini cihazda karşılaştırın; imzalamadan önce her ödemenin hedefini ve tutarını inceleyin.

Yeni süreci öğrenmek için küçük tutar kullanın. Gönderileni, ulaşanı ve ödenen ücretleri uzlaştırın. Tutarı artırmak bilmediğiniz sürecin teşhisini kolaylaştırmaz.

Bilgisayarı ve imzalama cihazını kimliği doğrulanmış kaynaklardan güncel tutun. Özel mesajdaki güncelleme bildirimi dosyanın meşru olduğunu kanıtlamaz. Yabancı biri coinlerinizin eşitleme gerektirdiğini söylüyor diye “kurtarma yazılımı” kurmayın veya uzaktan kontrole izin vermeyin.

<span id="understand-ginger-2fa" data-ginger-heading="ginger-2fayı-anlayın" aria-hidden="true"></span>

## Ginger 2FA’yı anlayın

Ginger’ın isteğe bağlı 2FA’sı yerel cüzdan dosyası şifrelemesi ve hizmetle başlangıç doğrulaması ekler. Bazı yerel dosya erişimlerine karşı yararlı olabilir; ancak normal başlangıçta kimlik doğrulayıcı ve hizmet bağımlılığı getirir.

Kurtarma kelimelerini ve asıl parolayı bağımsız erişilebilir tutun. `2fa_info.gws` dosyasını çevrimdışı ana kurtarma anahtarı saymayın. 2FA’nın kelimeler ve parola zaten elinde olan saldırganı durduracağını veya kilidi açık uygulamadan yetkilendirilmiş işlemi önleyeceğini de varsaymayın.

<span id="first-identify-what-was-exposed" data-ginger-heading="önce-neyin-açığa-çıktığını-belirleyin" aria-hidden="true"></span>

## Önce neyin açığa çıktığını belirleyin

Adres ifşası ile kurtarma kelimelerinin ifşası farklı yanıt gerektirir. Teşhis için şüpheli veriyi halka açık gönderiye veya tanımadığınız “cüzdan kontrol aracına” kopyalamayın.

| Açığa çıkan öğe | Sağlayabilecekleri | İlk yanıt |
| --- | --- | --- |
| Tek alım adresi veya işlem kimliği | Adresi veya işlemi gözlemlemek ve olası bağlantıları izlemek; imzalama anahtarları sağlamaz | Gereksiz tekrar kullanım ve açıklamayı durdurun; hangi kimliklerin ve ödemelerin bağlandığını inceleyin |
| Etiketler, sipariş kayıtları veya cüzdan geçmişi dışa aktarımı | Aksi halde ayrı işlemleri kişilerle, amaçlarla veya bakiyelerle ilişkilendirmek | Erişimi kısıtlayın, gerekirse özel kopya koruyun ve kayıt paylaşımını değiştirin |
| Genellikle xpub denen genişletilmiş açık anahtar | Kapsadığı türetme alanındaki, gelecektekiler dahil olabilecek adresleri izlemek; normalde tek başına harcamayı yetkilendirmez | Etkilenen hesabı veya dalı belirleyin; sürekli izleme kabul edilemezse yeni cüzdanı düşünün |
| Cüzdan dosyası veya tüm uygulama verisi kopyası | Maruziyet şifrelemeye, mevcut şifrelere ve kopyalanan diğer dosyalara bağlıdır; anahtarları ve özel üst verileri içerebilir | Belirsizliği ciddiye alın ve güvenilir ortamdan imzalama anahtarı maruziyetini değerlendirin |
| Kurtarma kelimeleri ve gereken parola veya kullanılabilir özel anahtarlar | Fon harcamak ve ele geçirilmiş kapsamda daha fazla anahtar türetmek | Güvenilir cihazda yeni anahtarlı yeni cüzdan hazırlayıp hâlâ kontrol ettiğiniz fonları taşıyın |
| Çalınmış bilgisayar, kilidi açık uygulama veya uzaktan kontrol oturumu | Durumuna göre cüzdan verisine, imzalamaya ve diğer hesaplara erişim | Yetkisiz erişimi sonlandırın; kalan fonları değerlendirmek ve korumak için güvenilir cihaz kullanın |

Genişletilmiş açık anahtar, cihazdaki tüm hesapların görülebileceği anlamına gelmez; türetme kapsamı önemlidir. Ancak açıklanmış açık dal altında başka alım adresi oluşturmak normalde o dalın sürekli izlenmesini önlemez. [BIP32 bu açık anahtar türetme sınırlarını açıklar](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).

Yalnızca kurtarma kelimeleri açıklanmışsa ve ayrı parola kullandıysanız risk, parolanın hâlâ gizli kalıp kalmadığına ve tahmin zorluğuna da bağlıdır. Bilinmeyen veya zayıf parolanın açığa çıkmış yedeği süresiz güvenli kıldığını varsaymayın. Kanıt eksikse ve maruziyet harcamayı yetkilendirebilecekse anahtar maruziyeti yanıtını kullanın.

<span id="respond-to-exposed-signing-keys" data-ginger-heading="açığa-çıkmış-imzalama-anahtarlarına-yanıt-verin" aria-hidden="true"></span>

## Açığa çıkmış imzalama anahtarlarına yanıt verin

Bilgisayar şifresini değiştirmek, 2FA’yı kapatmak veya Ginger’ı yeniden kurmak kopyalanmış Bitcoin anahtarlarını iptal etmez. Cüzdan adını değiştirmek de anahtarları aynı bırakır. Bitcoin’de kopyalanmış kurtarma kelimelerini iptal eden destek süreci yoktur.

1. Güvenmek için gerekçeniz olan cihazı kullanın. Asıl bilgisayar ele geçirilmiş olabilir ise yeni cüzdanı orada oluşturmayın.
2. Yeni kurtarma bilgileriyle cüzdan oluşturup yedeğini güvene alın. Açığa çıkan kelimeleri geri yükleyip bu cüzdanı yeni güvenlik sınırı saymayın.
3. Alım adresi alıp doğrulayın. Donanımda imzalama cihazında doğrulayın; yeni kurtarma kelimelerini şüpheli bilgisayara asla girmeyin.
4. Hâlâ kontrol edebildiğiniz kalan fonları hedefi ve ücreti dikkatle inceleyerek aktarın. Aynı anahtarlı saldırgan sizinle yarışabilir; fonları korumadan önce isteğe bağlı CoinJoin beklemesi eklemeyin.
5. Güvenilir cüzdanda sonucu kontrol edip onayı izleyin. Gelecekteki ödemeler ele geçirilmiş anahtarlara gelmesin diye tekrarlanan yatırma talimatlarını ve eski halka açık alım ayrıntılarını değiştirin.

Fon taşımak gözlemlenebilir zincir üstü bağlantı oluşturabilir. Anahtar ele geçirilmesinde fon kontrolünü korumak önceliklidir; anlık erişim sorunu sınırlandıktan sonra gizlilik yeniden düşünülebilir. Yeni hedef aktarımın ilişkilendirilemez olduğunu garanti etmez.

İnceleme sırasında gerekli kayıtları özel tutun. Sözde destek kişisine kurtarma kelimelerini, parolayı, sınırsız cüzdan dosyası kopyasını veya yeni cihaza erişimi asla vermeyin. Yeni kurtarma kelimelerini web sitesinde “doğrulamaya” gerek yoktur.

<span id="respond-to-a-privacy-only-disclosure" data-ginger-heading="yalnızca-gizlilik-ifşasına-yanıt-verin" aria-hidden="true"></span>

## Yalnızca gizlilik ifşasına yanıt verin

Açığa çıkan adres için devam kullanımının kabul edilebilirliğine karar verin. Gelecekte yeni adreslere ödeme alıp ek işlem ayrıntısı yayımlamaktan kaçınabilirsiniz; ancak gözlemci öğrendiklerini tutar. Sırf adres halka açık oldu diye her coini taşımak otomatik gerekmez.

Açıklanan xpub için önce hangi hesabı kapsadığını belirleyin. Hesabı kullanmaya devam etmek gelecekteki faaliyeti açıklayabilir. Bağımsız anahtarlı yeni cüzdan farklı adres kümesi oluşturur; ancak doğrudan aktarım eski fonları görünür biçimde bağlayabilir. Geçişi ve sonraki harcamayı kimin izlediğine ve ne bildiğine göre planlayın. Cüzdan uygulamasını yeniden kurmak veya aynı hesabı başka yerde içe aktarmak hesabın maruziyetini kaldırmaz.

Sızan kayıtlar için ek erişimi kısıtlayın ve kayıtların birlikte neyi açıkladığını değerlendirin. Müşteri adıyla eşleştirilmiş işlem kimliği tek başına herhangi birinden daha açıklayıcıdır. Sorunu göstermek için tüm sızıntıyı yayımlamayın.

<span id="keep-privacy-separate-from-key-protection" data-ginger-heading="gizliliği-anahtar-korumasından-ayrı-tutun" aria-hidden="true"></span>

## Gizliliği anahtar korumasından ayrı tutun

İşlemi bilmek, onu harcayacak anahtarlara da sahip olmak anlamına gelmez. Tersine, anahtarlı hırsız işlem geçmişi analizi zor olan fonları harcayabilir. İkinci sorun için kurtarma koruması ve cihaz doğrulamasını; ilki için adres alışkanlıklarını, Tor’u, coin seçimini ve düşünülmüş CoinJoin kullanımını uygulayın.

Cüzdan ekledikten, donanım değiştirdikten, 2FA açtıktan veya yedekleri taşıdıktan sonra rutini inceleyin. Gereksiz tam kurtarma alıştırması için her sırrı tekrar tekrar açığa çıkarmak yerine değişen parçaları doğrulayın.
