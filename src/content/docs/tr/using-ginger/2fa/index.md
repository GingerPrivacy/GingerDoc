---
doc_id: "backup-recovery.two-factor-authentication"
title: "Ginger’da iki faktörlü kimlik doğrulamayı kullanın"
description: "Ginger iki faktörlü kimlik doğrulamasını kurun; cüzdan dosyası şifrelemesini, Tor gereksinimini ve kurtarma sınırlarını anlayın."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-the-default-2fa-state-of-gingerwallet"></span>
<span id="how-do-i-enable-2fa-in-gingerwallet"></span>
<span id="how-do-i-set-up-2fa-using-an-authenticator-app"></span>
<span id="what-is-the-purpose-of-the-2fagws-file"></span>
<span id="do-i-need-to-restart-the-application-after-enabling-2fa"></span>
<span id="how-does-the-login-process-change-after-enabling-2fa"></span>
<span id="how-do-i-disable-2fa"></span>
<span id="what-should-i-do-if-i-change-devices-or-lose-data"></span>
<span id="what-are-the-security-best-practices-for-using-gingerwallet"></span>
<span id="does-gingerwallet-store-any-personal-information"></span>
<span id="what-happens-if-i-lose-access-to-my-authenticator-app"></span>
<span id="how-does-gingerwallet-ensure-security-with-2fa"></span>
<span id="how-can-i-recover-my-labels-and-extra-options-for-my-wallet-if-ive-lost-the-2fa-key"></span>
<span id="why-does-ginger-wallet-require-an-8-digit-2fa-code"></span>
<span id="what-should-i-do-if-my-authenticator-app-only-provides-6-digit-codes"></span>

> Okuma düzeyi: İleri düzey rehber. Kurtarma veya dosya düzenini değiştirmeden önce asıl kurtarma bilgilerini ve cüzdan dosyalarını koruyun.

Ginger’ın isteğe bağlı iki faktörlü kimlik doğrulaması (2FA), uygulama başlangıç kontrolü ve yerel cüzdan dosyalarının şifrelenmesini ekler. Her cüzdanın parolasından ayrıdır. Her harcama için ikinci imza isteyen bir Bitcoin kuralı değildir ve parolasını da bilen birine karşı kurtarma kelimesi yedeğini korumaz.

<span id="understand-the-dependency-first" data-ginger-heading="önce-bağımlılığı-anlayın" aria-hidden="true"></span>

## Önce bağımlılığı anlayın

Ginger, kimlik doğrulama kodunu 2FA hizmetiyle doğrular ve korunan cüzdan dosyalarını çözmek için gereken sırrı alır. Bu nedenle normal 2FA başlangıç süreci için o hizmete çalışan bir bağlantı gerekir. Bu özelliği kullanmak için Tor etkin olmalıdır.

Yerel `2fa_info.gws` dosyası bir istemci/sunucu tanımlayıcısı saklar. Kurtarma kelimelerinizin şifreli kopyası veya kendi başına yeterli kurtarma anahtarı değildir. Yalnızca bu dosyayı kopyalamak cüzdanı kurtarmaz. Ne cüzdan parolası ne de 2FA’yı etkinleştirmek, her etiketin, günlüğün veya eşlik eden dosyanın aynı şifrelemeyi aldığı anlamına gelir. Veri klasörünün tamamını ve yedeklerini koruyun.

2FA’yı etkinleştirmeden önce kurtarmanız gereken her yazılım cüzdanının kurtarma kelimelerine ve tam olarak asıl parolasına sahip olduğunuzu kontrol edin. Cüzdan ve üst veri dosyalarının korunan kopyalarını da saklayın.

<span id="enable-2fa" data-ginger-heading="2fayı-etkinleştirin" aria-hidden="true"></span>

## 2FA’yı etkinleştirin

1. **Settings** → **Security** bölümünü açın. Gerekirse **Network anonymization (Tor)** seçeneğini etkinleştirin ve Tor’un etkin olması için istendiğinde yeniden başlatın.
2. **Two-factor authentication** seçeneğini etkinleştirin. Kurulum penceresi bir kimlik doğrulayıcı için QR kodu gösterir.
3. QR kodunu kimlik doğrulayıcınıza gizlilik içinde ekleyin. Bir sır içerdiği için paylaşmayın. Ginger kurulumu SHA256 ve sekiz haneli kodlarla uyumlu kimlik doğrulayıcı gerektirir; elle oluşturulmuş varsayılan altı haneli kayıt eşdeğer değildir.
4. Güncel kodu girip **Verify** seçeneğini seçin. Doğrulama başarısız olursa telefonunuzun saat eşitlemesini ve kaydın bu kurulumdan geldiğini kontrol edin.
5. Ginger’ı talimatlara göre yeniden başlatın. 2FA başlangıç istemini tamamlayın. Başarılı kimliği doğrulanmış başlangıçta Ginger şifreleme sırrını alır ve cüzdan ile otomatik cüzdan yedeği JSON dosyalarının şifrelendiğinden emin olur.

Kurulumdan veya kimliği doğrulanmış yeniden başlatmadan önce kopyalanan dosyaların yeni korumayı aldığını varsaymayın. Eski yedekleri bağımsız olarak koruyun. Seçeneği etkinleştirmek, çalıştığı bilinen tek kurtarma verinizi silmek için gerekçe değildir.

<span id="everyday-use-and-disabling" data-ginger-heading="günlük-kullanım-ve-devre-dışı-bırakma" aria-hidden="true"></span>

## Günlük kullanım ve devre dışı bırakma

Başlangıçta güncel kimlik doğrulama kodunu girin. Uygulama yüklendikten sonra her cüzdanın parolası ve donanım cihazı onayları ayrı rollerini korur. Kilidi zaten açılmış bir bilgisayar güvenlik kaygısı olmaya devam eder.

Erişiminiz varken 2FA’yı kapatmak için **Settings** → **Security** bölümünü açıp **Two-factor authentication** seçeneğini kapatın. Ginger ek cüzdan dosyası şifrelemesini ve yerel 2FA ilişkisini kaldırır. Normal yazılım cüzdanı parola koruması ayrıdır ve önemini korur. Yedekleme yönteminiz güncel şifreleme durumuna bağlıysa oluşan dosyaları yedekleyin.

<span id="lost-phone-missing-file-or-unavailable-service" data-ginger-heading="kayıp-telefon-eksik-dosya-veya-erişilemeyen-hizmet" aria-hidden="true"></span>

## Kayıp telefon, eksik dosya veya erişilemeyen hizmet

Kimlik doğrulayıcının kaybı veya hizmet kesintisi normal başlangıcı engelleyebilir. Önce mevcut veri klasörünü koruyun. Reddedilen kod için saati ve bağlantıyı kontrol edin; aynı verilerin üzerine tekrar kurulum yapmak kaybolmuş kimlik doğrulayıcı sırrını yeniden oluşturmaz.

Yazılım cüzdanındaki fonlar için ayrı, güvenilir bir kurulumda veya temiz uygulama ortamında asıl kelimeler ve paroladan kurtarın. Eski dosyaları değiştirmeden önce bilinen geçmişi ve erişimi doğrulayın. Kurtarılan anahtarlar eski 2FA kurulumunun tutulmasına bağlı değildir; ancak Ginger’ı indirmek ve eşitlemek hâlâ normal ağ hizmetlerini gerektirir. Asıl hesap türlerini destekliyorsa uyumlu kurtarma yazılımı bir seçenek olabilir.

Etiketler ve diğer yerel öznitelikler kelimelerden yeniden oluşturulmaz. Üst veri kurtarmasını araştırmadan önce `.attr` yedeklerini koruyun. 2FA’yı kurarken veya sorunlarını giderirken mevcut cüzdan verilerini koruyun.

Kurtarma verileri açığa çıktıysa yeni cüzdan oluşturup kalan fonları aktarmak, onları kontrol eden anahtarları değiştirir. 2FA’yı kapatmak veya uygulamayı yeniden kurmak eski kurtarma kelimelerini geçersiz kılmaz.
