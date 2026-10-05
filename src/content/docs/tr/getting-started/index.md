---
doc_id: "getting-started.start-here"
title: "Buradan başlayın: Ginger ile ilk adımlarınız"
description: "Ginger’ın ne yaptığını öğrenin, kurtarma yedeğinizi koruyun ve isteğe bağlı ileri düzey özellikleri keşfetmeden önce basit bir ilk alma ve gönderme sürecini izleyin."
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: "Buradan başlayın"
prev: false
next:
  link: /getting-started/install/
  label: "Ginger Wallet kurulumu"
---

> Okuma düzeyi: Buradan başlayın. Önce temel adımlar gelir; ileri düzey kaynaklar isteğe bağlı olarak daha sonra okunabilir.

Ginger, bilgisayarınızda bitcoin almak ve göndermek için kullanılan bir uygulamadır. Bitcoinlerinizin harcanmasını sağlayan bilgiler sizin kontrolünüzdedir. Ginger, CoinJoin adlı isteğe bağlı bir özellik sayesinde ödeme geçmişinin izlenmesini zorlaştırmaya da yardımcı olabilir.

Önce cüzdanın normal kullanımını öğrenebilirsiniz. Bir yazılım cüzdanı oluşturmak için kendi Bitcoin düğümünüze, bir donanım cihazına veya ileri düzey CoinJoin ayarlarına ihtiyacınız yoktur.

<!-- Preserve links to the questions previously published on this page. -->
<span id="whats-the-officially-supported-operating-systems" aria-hidden="true"></span>
<span id="is-there-an-androidios-version" aria-hidden="true"></span>
<span id="does-ginger-support-altcoins" aria-hidden="true"></span>
<span id="what-are-the-minimal-requirements-to-run-ginger" aria-hidden="true"></span>
<span id="do-i-need-to-run-tor" aria-hidden="true"></span>

<span id="1-install-the-real-application" data-ginger-heading="1-gerçek-uygulamayı-kurun" aria-hidden="true"></span>

## 1. Gerçek uygulamayı kurun

[Ginger Wallet kurulumu](/tr/getting-started/install/) rehberini izleyin ve oradaki resmî indirme bağlantılarını kullanın. Bilgisayarınıza uygun dosyayı seçin. Benzer adlı bir telefon uygulamasını veya destek teklif eden bir yabancının gönderdiği yazılımı kurmayın.

Ginger Windows, macOS ve Linux’u destekler; kurulum rehberi desteklenen sürümleri ve işlemcileri listeler. Bu sürüm yalnızca Bitcoin içindir ve Android veya iOS uygulaması yoktur. İnternet bağlantısı ve yazılabilir depolama alanı gerekir. Tor uygulamaya dahildir, bu nedenle ayrıca kurmanız gerekmez.

Rehberdeki indirme kontrollerini uygulayın. Ayrı [ileri düzey imza doğrulama kaynağı](/tr/getting-started/verify-download/) gerektiğinde komut satırı kontrollerini açıklar.

<span id="what-is-the-password-used-for" aria-hidden="true"></span>

<span id="2-create-a-wallet-and-make-its-backup" data-ginger-heading="2-bir-cüzdan-oluşturup-yedeğini-alın" aria-hidden="true"></span>

## 2. Bir cüzdan oluşturup yedeğini alın

[İlk cüzdanınızı oluşturun](/tr/getting-started/first-wallet/) rehberini izleyin. **New** seçeneğini seçin, on iki **Recovery Words** kelimesini sırasıyla yazın ve **Confirm Recovery Words** adımını tamamlayın. Yazılı yedeği gizli tutun ve bilgisayar kaybolsa bile erişilebilir olmasını sağlayın.

**Add Passphrase** adımında devam etmeden önce seçimin ne anlama geldiğini anlayın. Bir parola kullanırsanız kurtarma için hem asıl kelimeler hem de tam olarak o parola gerekir. Parola, bilgisayarınızdaki cüzdana erişimi de korur. Ginger bunu sıfırlayamaz. Alanları boş bırakırsanız bu ek parolası olmayan bir cüzdan oluşturulur; hangi seçimi yaptığınızı kaydedin.

Yedek okunabilir durumda olmadan ve amaçladığınız cüzdanı açabildiğinizi görmeden önemli bir bakiye ile devam etmeyin. Kelimeleri veya parolayı destek ekibiyle asla paylaşmayın.

<span id="why-is-it-important-to-use-a-new-address-for-every-payment" aria-hidden="true"></span>

<span id="3-receive-a-small-first-payment" data-ginger-heading="3-küçük-bir-ilk-ödeme-alın" aria-hidden="true"></span>

## 3. Küçük bir ilk ödeme alın

Cüzdanın eşitlemeyi tamamlamasını bekleyin: bu, işlemleriniz için Bitcoin ağını kontrol etmek demektir. **Receive** seçeneğini seçin, yararlı bir etiket ekleyin ve bir alım adresi oluşturun. Adresi ödeme yapacak kişiyle paylaşın veya bir borsanın zincir üstü Bitcoin çekme sürecinde kullanın.

Her ödeme için yeni bir adres oluşturun. Bir adresi tekrar kullanmak, farklı ödemelerin halka açık Bitcoin kayıtlarında ilişkilendirilmesini kolaylaştırır.

Ödeme yetkilendirilmeden önce adresin tamamını ve ağı kontrol edin. Ginger zincir üstü Bitcoin alır; başka bir varlığın ağı veya bir Lightning faturası bunun yerine kullanılamaz. Bir onay, işlemin bir Bitcoin bloğuna dahil edildiği anlamına gelir. Ödeme yapan kişinin ekran görüntüsü tek başına onay değildir.

<span id="4-make-a-small-first-payment" data-ginger-heading="4-küçük-bir-ilk-ödeme-yapın" aria-hidden="true"></span>

## 4. Küçük bir ilk ödeme yapın

**Send** seçeneğini seçin ve normal kullanım için **Automatic** seçimini kullanın. Alıcının adresini ve tutarı girin, **Continue** seçeneğini seçin ve hedefi, alıcının alacağı tutarı ve ücreti gözden geçirin. Yalnızca bunlar doğruysa **Confirm** seçeneğini seçin.

Ücret, Bitcoin işlem alanı için ödenir. Seçilen paranın bir kısmı artarsa para üstü olarak cüzdanınıza döner. Bu para üstünü elle geri göndermeniz gerekmez. Ginger, onaylanmış bir ödemeyi geri alamaz.

Bir bağlantı hatasından sonra yeniden ödeme yapmayı denemeden önce geçmişi kontrol edin. İlk işlem zaten gönderilmişse bu kontrol iki kez ödeme yapmayı önlemeye yardımcı olur.

<span id="5-decide-whether-to-use-coinjoin" data-ginger-heading="5-coinjoin-kullanıp-kullanmayacağınıza-karar-verin" aria-hidden="true"></span>

## 5. CoinJoin kullanıp kullanmayacağınıza karar verin

CoinJoin, sahiplik bağlantılarının çıkarılmasını zorlaştırmak için birkaç kişinin faaliyetini ortak bir Bitcoin işleminde birleştirir. İmzalama anahtarları cüzdanınızda kalır. Ücret gerektirir, zaman alabilir ve bir alıcının veya borsanın zaten bildiği bilgileri silemez.

Seçili cüzdanın **Coinjoin Settings** bölümündeki **Automatically start coinjoin** ayarını gözden geçirin. Kendi kendine başlamasını istemiyorsanız öğrenme aşamasında otomatik katılımı kapatın. Bir tur zaten etkinse CoinJoin kontrol panelindeki duraklatma düğmesini kullanın ve kritik işlerin tamamlanmasına izin verin.

Gizlilik göstergesinin 100% olmasını beklemeden normal ödemeler alabilir ve yapabilirsiniz. Cüzdanı kullanmaya başlamak için her ileri düzey ayarı değiştirmeniz de gerekmez.

<span id="you-have-finished-the-first-use-path" data-ginger-heading="i̇lk-kullanım-yolunu-tamamladınız" aria-hidden="true"></span>

## İlk kullanım yolunu tamamladınız

Temel kontrolleriniz; kurtarmaya elverişli bir yedek, amaçladığınız cüzdan, doğru ödeme ağı, alıcı ve gerçek ücrettir. Yeni alım adresleri kullanmaya ve her ödemeyi gözden geçirmeye devam edin.

Alma ve gönderme kontrol listesine ihtiyacınız olduğunda bu rehbere dönün. **İleri düzey kullanım** bölümü ilk kullanım yolundan ayrıdır. Örneğin [İndirilen Ginger Wallet dosyasını doğrulayın](/tr/getting-started/verify-download/) komut satırında imza kontrollerini ayrıntılı olarak açıklar.
