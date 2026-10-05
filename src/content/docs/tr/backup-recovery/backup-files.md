---
doc_id: "backup-recovery.backup-files"
title: "Cüzdan dosyaları, üst veriler ve parola ayrıntıları"
description: "Ginger cüzdan JSON ve ATTR dosyalarını koruyun, 2FA dosya bağımlılığını anlayın ve temel kelime yedeğinin yerine geçmeden kurtarılabilir bir parola saklayın."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Kurtarma veya dosya düzenini değiştirmeden önce asıl kurtarma bilgilerini ve cüzdan dosyalarını koruyun.

Yerel cüzdan verilerini kopyalarken veya yedeğin neleri koruduğunu araştırırken bu kaynağı kullanın. Her yazılım cüzdanının ihtiyaç duyduğu kurtarma bilgileri için [temel yedekleme rehberiyle](/tr/backup-recovery/backups/) başlayın.

<span id="what-to-keep" data-ginger-heading="neleri-saklamalısınız" aria-hidden="true"></span>

## Neleri saklamalısınız?

| Yedek öğesi | Amaç | Önemli sınır |
| --- | --- | --- |
| Sırasıyla kurtarma kelimeleri | Cüzdanın anahtarlarını yeniden oluşturmak | Kullanılmışsa asıl parola gerekir |
| Büyük/küçük harfler ve karakterler dahil asıl parola | Doğru BIP39 cüzdanını seçmek ve korunan sırrının kilidini açmak | Ginger sıfırlayamaz |
| Cüzdan `.json` dosyası | Cüzdanda saklanan anahtar ve eşitleme bilgilerini korumak | Şifrelenmiş dosya hâlâ kimlik bilgilerini gerektirir; 2FA hizmet bağımlılığı ekleyebilir |
| Eşleşen `.attr` dosyası | Yerel etiketleri ve cüzdana özgü öznitelikleri korumak | Hassas üst veriler içerir; kurtarma kelimeleri bunu geri getirmez |
| Donanım cihazının kurtarma yedeği | Üreticinin süreciyle anahtarları kurtarmak | Masaüstü bilgisayardan uzak tutun |

Yerel otomatik yedek dizini aynı bilgisayardadır. Hasarlı bir cüzdan dosyasından sonra yardımcı olabilir, ancak tüm diskin kaybına, hırsızlığa veya fidye yazılımına karşı korumaz.

<span id="make-a-file-backup" data-ginger-heading="dosya-yedeği-oluşturun" aria-hidden="true"></span>

## Dosya yedeği oluşturun

**Data Folder** bölümünü açmak için Ginger aramasını kullanın. Konumu not edin, ardından dosyaları kopyalamadan önce Ginger’ı normal biçimde kapatın. Normal bir ana ağ veri klasöründe `Wallets`, cüzdan `.json` dosyalarını ve ilişkili `.attr` dosyalarını; `WalletBackups` ise otomatik cüzdan yedeklerini içerir. Diğer ağlar ayrı alt dizinler kullanır.

İlgili dosyaları korunan yedek depolama alanına kopyalayın; adları ve her JSON ile ATTR dosyasının ilişkisini koruyun. Parola belirlemiş olsanız bile veri klasörünün kopyası gizlilik açısından hassastır: adresler, etiketler, günlükler, yapılandırma ve sipariş üst verileri faaliyetleri açığa çıkarabilir. Bunu bir sorun takip sistemine yüklemeyin veya destek ekibine e-posta ile göndermeyin.

2FA etkinse `2fa_info.gws` dosyasını da koruyun, ancak bağımsız kurtarma anahtarıyla karıştırmayın. Ginger’ın 2FA hizmetiyle kullanılan bir tanımlayıcıyı kaydeder. Kurtarma kelimeleri ve asıl parola, o belirli yerel cüzdan dosyasının şifresinin çözülmesine bağlı olmayan yol olmaya devam eder.

<span id="choose-and-preserve-a-passphrase" data-ginger-heading="bir-parola-seçip-saklayın" aria-hidden="true"></span>

## Bir parola seçip saklayın

Başkasının tahmin etmesi zor olan ve tam olarak tekrar üretebileceğiniz bir parola kullanın. Tanımlı bir kelime listesinden rastgele seçilen kelimeler veya güvenilir bir şifre yöneticisinin ürettiği güçlü bir şifre; adların, tarihlerin, alıntıların ve sıradan cümlelerin öngörülebilirliğinden kaçınabilir. İnsanların seçtiği “rastgele görünümlü” değişiklikler çoğu zaman göründüklerinden daha tahmin edilebilirdir.

Entropi, belirli bir üretim sürecindeki öngörülemezliği tanımlar; yalnızca uzunluk bunu kanıtlamaz. Büyük bir listeden eşit olasılıkla seçilen altı kelime ile sevilen bir şarkı sözünden seçilen altı kelime aynı tahmin direncine sahip değildir. Bu kılavuz, belirli bir karakter sayısının her saldırıyı engelleyeceğini vaat etmez.

Üretilen sonucu doğru kaydedin ve kurtarma planınızın bunu koruduğunu doğrulayın. Başta veya sonda boşluk bırakmayın: Ginger’ın giriş doğrulaması bunları kırpabilir veya reddedebilir. Bir şifre yöneticisi güçlü bir parolayı saklamaya yardımcı olabilir; ancak aynı bilgisayarı kaybettikten sonra yöneticiyi nasıl açacağınızı planlayın. Kelimeleri ve parolayı birlikte saklamak tek bir ele geçirilme noktası oluşturur; ayırmak ise ek bir kurtarma bağımlılığı yaratır. Gerçekten sürdürebileceğiniz bir düzen seçin.

Bir Ginger yazılım cüzdanında parola, saklanan şifreli sırrı da korur. Bu nedenle ne dosya hırsızının ne de kurtarma girişiminin parola olmadan başarılı olacağı varsayılmalıdır. Parolayı başka bir cüzdan uygulamasında gelişigüzel değiştirmeyin: farklı bir BIP39 parolası, eski cüzdanın giriş şifresini yeniden adlandırmak yerine farklı anahtarlar seçer.

Hesap uyumluluğu, dosya içe aktarma veya adresleri atlayan bir tarama için [ileri düzey kurtarma seçeneklerini](/tr/backup-recovery/recovery-options/) kullanın.

<span id="a-single-private-key-is-not-the-full-recovery-backup" data-ginger-heading="tek-bir-özel-anahtar-tam-kurtarma-yedeği-değildir" aria-hidden="true"></span>

## Tek bir özel anahtar, tam kurtarma yedeği değildir

Üreticisi anahtarı oluşturmuş, önceden fonlanmış fiziksel bir coin, üreticinin anahtarı saklamadığına güvenmeyi gerektirir. Basılı tek bir özel anahtar veya üreticinin sırrı Ginger’ın tam kurtarma kelimesi yedeği değildir. Tek bir dışa aktarılmış anahtarın tüm adresleri kapsadığını varsaymak yerine yazılım cüzdanının kelimelerini ve asıl parolasını koruyun.
