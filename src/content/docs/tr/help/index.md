---
doc_id: "help.faq"
title: "Ginger Wallet SSS: buradan başlayın"
description: "Eksik fonlar, yedekler, kurtarma, CoinJoin beklemesi ve ücretleri, bekleyen ödemeler, donanım cüzdanları ve güvenli destek hakkında kısa yanıtlar alın."
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Okuma düzeyi: Buradan başlayın. Kısa yanıtlar ve ilk kontroller isteğe bağlı ileri düzey okumadan önce gelir.

Gördüğünüze en yakın soruyla başlayın. Yanıtlar normal kullanımı ve ilk güvenli kontrolleri kapsar; ayrı [ileri düzey SSS](/tr/help/advanced-faq/) özel ayarlar ve durumlar için isteğe bağlı sonraki okumadır.

- [Buradan başlayın](#start-here)
- [Kurtarma ve eksik fonlar](#recovery-and-missing-funds)
- [Bağlantı ve güncellemeler](#connection-and-updates)
- [CoinJoin temelleri](#coinjoin-basics)
- [Ödemeler ve donanım](#payments-and-hardware)
- [Güvenle yardım almak](#getting-help-safely)

<span id="start-here" data-ginger-heading="buradan-başlayın" aria-hidden="true"></span>

## Buradan başlayın

<span id="what-is-ginger-and-does-it-hold-my-bitcoin" data-ginger-heading="ginger-nedir-ve-bitcoinimi-tutar-mı" aria-hidden="true"></span>

### Ginger nedir ve bitcoinimi tutar mı?

Ginger, isteğe bağlı CoinJoin gizlilik özellikleriyle zincir üstü Bitcoin almak ve göndermek için masaüstü uygulamasıdır. Harcamayı yetkilendiren anahtarları siz kontrol edersiniz; sadece tura katıldığınız için koordinatör saklama yetkisi almaz. Anahtar kontrolü hırsızlık, hata veya erişim kaybı olasılığını kaldırmadığından bilgisayarı ve kurtarma yedeğini koruyun.

<span id="is-there-an-official-mobile-or-web-wallet" data-ginger-heading="resmî-mobil-veya-web-cüzdanı-var-mı" aria-hidden="true"></span>

### Resmî mobil veya web cüzdanı var mı?

v2.0.26 sürümü desteklenen Windows, macOS ve Linux bilgisayarları için masaüstü yazılım sağlar. Android, iOS veya tarayıcı cüzdanı, Lightning ödemeleri veya diğer kripto paraları sağlamaz. [Resmî Ginger sitesi](https://gingerwallet.io/) ve sürüm bağlantılarıyla başlayın; sırf Ginger adını kullanıyor diye uygulama veya web sitesine kurtarma kelimeleri girmeyin.

<span id="do-i-need-an-account-my-own-node-or-a-hardware-wallet" data-ginger-heading="hesap-kendi-düğümüm-veya-donanım-cüzdanı-gerekir-mi" aria-hidden="true"></span>

### Hesap, kendi düğümüm veya donanım cüzdanı gerekir mi?

Hayır. Normal yazılım cüzdanı oluşturma yerel kurtarma bilgisi kullanır; müşteri hesabı, kendi Bitcoin düğümünüz veya donanım cihazı gerektirmez. İsteğe bağlı 2FA hizmet kullanır; alım/satım sağlayıcıları hesap veya kimlik bilgisi isteyebilir, bu yüzden ek gereksinimleri vardır.

<span id="do-i-have-to-use-coinjoin-before-receiving-or-sending" data-ginger-heading="almadan-veya-göndermeden-önce-coinjoin-kullanmak-zorunda-mıyım" aria-hidden="true"></span>

### Almadan veya göndermeden önce CoinJoin kullanmak zorunda mıyım?

Hayır. Alma, normal gönderme ve CoinJoin ayrı eylemlerdir. Öğrenirken gözetimsiz katılım istemiyorsanız **Coinjoin Settings** içindeki **Automatically start coinjoin** inceleyin; tur zaten etkinse duraklatıp kritik işin bitmesine izin verin.

<span id="can-i-buy-bitcoin-in-ginger-or-receive-an-exchange-withdrawal" data-ginger-heading="gingerda-bitcoin-satın-alabilir-veya-borsa-çekimi-alabilir-miyim" aria-hidden="true"></span>

### Ginger’da bitcoin satın alabilir veya borsa çekimi alabilir miyim?

Zincir üstü Bitcoin çekimi için **Receive** bölümünden yeni adres kullanabilir, borsada yetkilendirmeden önce adresi ve ağı kontrol edebilirsiniz. Ginger’da mevcut olduğunda **Buy** ve **Sell** sağlayıcı süreçleri de vardır. Seçili sağlayıcının güncel koşullarını, teklifini ve sipariş durumunu kontrol edin; satın alma onayı, onaylanmış Bitcoin alımıyla aynı değildir.

<span id="recovery-and-missing-funds" data-ginger-heading="kurtarma-ve-eksik-fonlar" aria-hidden="true"></span>

## Kurtarma ve eksik fonlar

<span id="what-do-i-need-to-back-up" data-ginger-heading="neleri-yedeklemem-gerekir" aria-hidden="true"></span>

### Neleri yedeklemem gerekir?

Kurtarma kelimelerini asıl sırayla ve kullandıysanız tam asıl parolayı saklayın. Cüzdan parolasız oluşturulduysa boş olduğunu kaydedin. Bunlar anahtarlara erişimi kurtarır; etiketler ve bazı diğer yerel kayıtlar ayrı dosya yedeği gerektirir.

<span id="is-my-passphrase-just-a-password-i-can-reset" data-ginger-heading="parolam-yalnızca-sıfırlayabileceğim-şifre-mi" aria-hidden="true"></span>

### Parolam yalnızca sıfırlayabileceğim şifre mi?

Hayır. Ginger yazılım cüzdanında asıl parola, saklanan sırrı korumanın yanında hangi Bitcoin anahtarlarının kurtarılacağını belirlemeye yardımcı olur. Farklı kelimeler veya farklı parola farklı geçerli cüzdana götürebilir. Cüzdan adı, donanım PIN’i veya kimlik doğrulama kodu yerine geçmez.

<span id="i-have-the-words-but-forgot-the-passphrase-can-ginger-reset-it" data-ginger-heading="kelimelerim-var-ama-parolayı-unuttum-ginger-sıfırlayabilir-mi" aria-hidden="true"></span>

### Kelimelerim var ama parolayı unuttum. Ginger sıfırlayabilir mi?

Ginger asıl parolayı sıfırlayıp aynı cüzdan anahtarlarını tutamaz. Özel yedek kayıtlarınızı kontrol edin ve harcama erişimi kalan kurulumları koruyun. Hâlâ harcayabiliyor ancak tam kurtarma yedeği oluşturamıyorsanız yeni cüzdan yedeği oluşturup doğrulayın ve fonları dikkatle aktarın; sözde kurtarma yardımcısına kelimeleri asla göndermeyin.

<span id="can-ginger-show-my-recovery-words-again" data-ginger-heading="ginger-kurtarma-kelimelerimi-tekrar-gösterebilir-mi" aria-hidden="true"></span>

### Ginger kurtarma kelimelerimi tekrar gösterebilir mi?

Oluşturma süreci sonradan tekrar göstermeyeceğini bildirir. **Wallet Settings** → **Tools** → **Verify Recovery Words** verdiğiniz kelimeleri kontrol eder; unutulmuş yedeği göstermez. Erişim sürüyor ama yedek kayıpsa fonları dikkatle taşımadan önce yeni cüzdan yedeği oluşturup doğrulayın.

<span id="why-is-my-recovered-wallet-empty-or-missing-transactions" data-ginger-heading="kurtarılan-cüzdanım-neden-boş-veya-işlemler-eksik" aria-hidden="true"></span>

### Kurtarılan cüzdanım neden boş veya işlemler eksik?

Seçili cüzdanı, asıl kelimeleri ve tam parolayı, eşitleme ve kurtarmanın bitip bitmediğini kontrol edin. Parola yazım hatası yanlış şifre hatası vermeden başka geçerli cüzdan açabilir. Ayar değiştirmeden önce eski dosyaları koruyup bilinen işlemle karşılaştırın; [kurtarma sorun giderme](/tr/help/troubleshooting/#balance-recovery-and-receiving) ilk kontrolleri verir.

<span id="the-sender-says-paid-why-have-i-received-nothing" data-ginger-heading="gönderen-ödediğini-söylüyor-neden-hiçbir-şey-almadım" aria-hidden="true"></span>

### Gönderen ödediğini söylüyor. Neden hiçbir şey almadım?

Bitcoin işlem kimliğini isteyin ve amaçlanan alım adresini ve ağı kontrol edin. Hizmet Bitcoin işlemini yayınlamadan siparişi ödenmiş işaretleyebilir; Ginger da göstermeden önce eşitlemelidir. Gönderenden yeniden ödeme istemeden önce işlemi ve yerel ilerlemeyi kontrol edin; [alım sorun gidermeye](/tr/help/troubleshooting/#balance-recovery-and-receiving) bakın.

<span id="will-changing-the-network-make-missing-bitcoin-appear" data-ginger-heading="ağı-değiştirmek-eksik-bitcoini-gösterir-mi" aria-hidden="true"></span>

### Ağı değiştirmek eksik bitcoini gösterir mi?

Gerçek zincir üstü Bitcoin için Main kullanın. Başka ağın coinleri farklıdır; seçmek ana ağ fonlarını taşımaz veya kurtarmaz. Bağlantı göstergesi iyi görünsün diye ağ değiştirmek yerine amaçlanan cüzdanı ve eşitlemeyi kontrol edin.

<span id="why-has-a-receiving-address-disappeared-does-it-expire" data-ginger-heading="alım-adresi-neden-kayboldu-süresi-dolar-mı" aria-hidden="true"></span>

### Alım adresi neden kayboldu? Süresi dolar mı?

Ödeme veya gizlemeden sonra adres ödeme bekleyenler listesinden çıkabilir; bu anahtarlarını geçersiz kılmaz. Eski adres bitcoin almaya devam edebilir, bu yüzden yedeğini koruyun. Alımları halka açık tek adreste doğrudan gruplamamak için her yeni ödemede yeni adres kullanın.

<span id="why-are-receive-or-send-missing" data-ginger-heading="receive-veya-send-neden-yok" aria-hidden="true"></span>

### Receive veya Send neden yok?

Kurtarma taraması hâlâ sürüyor olabilir ve bitene kadar normal eylemleri gizleyebilir. Yalnızca izleme cüzdanı harcamak için imzalama cihazına veya desteklenen başka imzalama yoluna ihtiyaç duyar. Yeniden kurmadan veya yeni kelimeler üretmeden önce cüzdan türünü ve ilerlemeyi kontrol edin.

<span id="i-lost-my-authenticator-or-my-2fa-code-is-rejected-what-now" data-ginger-heading="kimlik-doğrulayıcımı-kaybettim-veya-2fa-kodum-reddediliyor-ne-yapmalıyım" aria-hidden="true"></span>

### Kimlik doğrulayıcımı kaybettim veya 2FA kodum reddediliyor. Ne yapmalıyım?

Doğru kimlik doğrulayıcı kaydını, telefon saatini ve Ginger Tor/hizmet bağlantısını kontrol edin. Mevcut cüzdan ve 2FA dosyalarını koruyun; yeniden kurma kayıp kimlik doğrulayıcı sırrını oluşturmaz. Kurtarma kelimeleri artı tam asıl parola bağımsız anahtar kurtarma yolu sağlar; dosya değiştirmeden önce [2FA sorun gidermeyi](/tr/help/troubleshooting/#2fa-and-hardware) kullanın.

<span id="connection-and-updates" data-ginger-heading="bağlantı-ve-güncellemeler" aria-hidden="true"></span>

## Bağlantı ve güncellemeler

<span id="do-i-need-tor-browser-or-a-vpn-to-make-ginger-work" data-ginger-heading="ginger-çalışsın-diye-tor-browser-veya-vpn-gerekir-mi" aria-hidden="true"></span>

### Ginger çalışsın diye Tor Browser veya VPN gerekir mi?

Ginger normal cüzdan bağlantıları için Tor içerir; yalnızca cüzdanı çalıştırmak için Tor Browser kurmanız gerekmez. Ayrı tarayıcı veya VPN Ginger eşitlemesini otomatik düzeltmez ve sağlayıcıya gönderdiğiniz bilgiyi gizlemez. [Bağlantı kontrollerini](/tr/help/troubleshooting/#connection-or-synchronization) izlerken normal Tor korumasını açık tutun.

<span id="why-is-ginger-still-connecting-or-synchronizing" data-ginger-heading="ginger-neden-hâlâ-bağlanıyor-veya-eşitleniyor" aria-hidden="true"></span>

### Ginger neden hâlâ bağlanıyor veya eşitleniyor?

İlk tarama veya kurtarılmış cüzdan zaman gerektirebilir; takılan tarama bağlantı veya yerel sorun gösterebilir. İnternet erişimini, saati, boş alanı ve yapılandırdığınız düğümü kontrol edin; ilerleme durursa tam durumu kaydedin. Sürekli yeniden başlatmak veya veri silmek yerine [bağlantı sorun gidermeyi](/tr/help/troubleshooting/#connection-or-synchronization) izleyin.

<span id="why-did-reinstalling-not-reset-a-broken-setting" data-ginger-heading="yeniden-kurmak-bozuk-ayarı-neden-sıfırlamadı" aria-hidden="true"></span>

### Yeniden kurmak bozuk ayarı neden sıfırlamadı?

Uygulama dosyaları ve cüzdan verisi ayrı saklanır; normal yeniden kurma aynı yapılandırmayı ve cüzdanları koruyabilir. Veri değiştirmeden önce yedekleri koruyup gerçek hatayı teşhis edin. Eksik fonlara veya bekleme durumuna genel onarım olarak tüm veri klasörünü silmeyin.

<span id="coinjoin-basics" data-ginger-heading="coinjoin-temelleri" aria-hidden="true"></span>

## CoinJoin temelleri

<span id="why-is-coinjoin-waiting-instead-of-starting" data-ginger-heading="coinjoin-başlamak-yerine-neden-bekliyor" aria-hidden="true"></span>

### CoinJoin başlamak yerine neden bekliyor?

Durumu okuyun: cüzdan onay, uygun ücret, diğer katılımcılar, bağlantı veya uygun coin gerektirebilir. Beklemek tek başına fonların kaybolduğu anlamına gelmez. [CoinJoin sorun giderme tablosu](/tr/help/troubleshooting/#coinjoin-does-not-start) yayımlanan mesajları ve her birinin ilk eylemini açıklar.

<span id="what-is-the-minimum-amount-and-why-are-some-coins-left-behind" data-ginger-heading="en-düşük-tutar-nedir-ve-bazı-coinler-neden-geride-kalır" aria-hidden="true"></span>

### En düşük tutar nedir ve bazı coinler neden geride kalır?

Katılımı garantileyen toplam cüzdan bakiyesi yoktur. Her mevcut coin tur koşullarını ve cüzdanın uygunluk ve maliyet kontrollerini karşılamalıdır; bazı küçük, onaylanmamış veya hariç coinler tur dışında kalabilir. Eski rehberdeki minimuma uymak için fonları birleştirmeyin veya eklemeyin.

<span id="how-long-will-it-take-and-how-many-rounds-do-i-need" data-ginger-heading="ne-kadar-sürer-ve-kaç-tur-gerekir" aria-hidden="true"></span>

### Ne kadar sürer ve kaç tur gerekir?

Garantili süre veya evrensel tur sayısı yoktur. Onaylar, ücretler, mevcut katılımcılar, coinleriniz ve seçili gizlilik hedefi önemlidir. Zaman tercihini vaat edilen tarih saymak yerine gerçek durumu ve tamamlanan maliyetleri kontrol edin.

<span id="why-did-my-balance-decrease-if-coinjoin-was-described-as-free" data-ginger-heading="coinjoin-ücretsiz-denildiyse-bakiyem-neden-azaldı" aria-hidden="true"></span>

### CoinJoin ücretsiz denildiyse bakiyem neden azaldı?

Koordinatör ücreti muafiyeti Bitcoin madencilik ücretlerini kaldırmaz; tekrarlanan tamamlanmış turların her biri para gerektirebilir. Çıktıların başka cüzdana gidip gitmediğini ve ikisinin de eşitlenip eşitlenmediğini de kontrol edin. Değişim açıklanmıyorsa duraklatıp tamamlanan işlemleri uzlaştırın; her beklenmeyen azalışı normal ücret saymayın.

<span id="what-coordinator-fee-does-ginger-currently-advertise" data-ginger-heading="ginger-şu-anda-hangi-koordinatör-ücretini-duyuruyor" aria-hidden="true"></span>

### Ginger şu anda hangi koordinatör ücretini duyuruyor?

Güncel ayarlarla tam olarak 0.03 BTC değerli girdi dahil, 0.03 BTC (3 000 000 satoshi) veya daha küçük her girdi koordinatör ücreti ödemez. Eşiğin üzerinde, uygun yeniden karıştırma gibi başka muafiyet yoksa ücret tam girdi değerinin 0.3% kadarıdır. Eşik toplam cüzdan bakiyesine değil, her girdiye ayrı uygulanır. Madencilik ücretleri kalır. Katılmadan önce [güncel Ginger ücret açıklamasını](https://gingerwallet.io/) ve sunulan turu kontrol edin.

<span id="can-i-stop-coinjoin-or-turn-off-the-computer" data-ginger-heading="coinjoini-durdurabilir-veya-bilgisayarı-kapatabilir-miyim" aria-hidden="true"></span>

### CoinJoin’i durdurabilir veya bilgisayarı kapatabilir miyim?

Daha fazla katılımı durdurmak için kontrol panelinin duraklatma düğmesini kullanın ve kritik aşamanın bitmesini bekleyin. Uyku, bağlantı kaybı veya zorla kapatma etkin turu kesebilir; normal uygulama çıkışını kullanıp kapanma sürecinin bitmesine izin verin. Zaten yayınlanan işlem uygulama kapandıktan sonra Bitcoin’de devam eder.

<span id="why-is-there-a-transaction-when-i-never-pressed-send" data-ginger-heading="sende-hiç-basmadığım-halde-neden-işlem-var" aria-hidden="true"></span>

### Send’e hiç basmadığım halde neden işlem var?

Otomatik CoinJoin katılımı açtıktan sonra her seferinde **Send** üzerinden normal ödeme olmadan ortak işlem oluşturabilir. Açıklanamayan harcamanın CoinJoin olduğunu varsaymak yerine işlemi, sahip olunan çıktıları, ücretleri ve çıktı cüzdanı seçimini inceleyin. Açıklanamıyorsa veya anahtarlar açığa çıkmış olabilir ise kayıtları koruyup kalan fonları güvene alın.

<span id="can-i-spend-at-99-and-does-100-mean-i-am-anonymous" data-ginger-heading="fonlarımı-99-düzeyinde-harcayabilir-miyim-ve-100-anonim-olduğum-anlamına-gelir-mi" aria-hidden="true"></span>

### Fonlarımı 99% düzeyinde harcayabilir miyim ve 100% anonim olduğum anlamına gelir mi?

Fonlar harcanabilir ve gönderme süreci kullanılabilirken normal ödeme yapabilirsiniz; gizlilik yüzdesi Bitcoin harcama gereksinimi değildir. Ginger’ın seçili hedef altında yerel tahminidir; başka kişinin bildikleri hakkında garanti değildir. Ödeme, tekrar kullanılan adres veya kimliğinizin bilindiği borsa bağlantı kurabilir.

<span id="why-is-the-play-control-missing-when-all-funds-are-private" data-ginger-heading="tüm-fonlar-gizliyken-başlatma-kontrolü-neden-yok" aria-hidden="true"></span>

### Tüm fonlar gizliyken başlatma kontrolü neden yok?

Normal elle kontrol paneli tüm fonlar cüzdanın gizlilik hedefini karşıladığında başlatmayı gizleyebilir. Normal başlangıç yalnızca gizli mevcut coin kümesini de reddeder; başka bir çıktı cüzdanı seçmek turu zorlamaz. Yalnızca fonları taşımak istiyorsanız normal ödemeyi inceleyin.

<span id="payments-and-hardware" data-ginger-heading="ödemeler-ve-donanım" aria-hidden="true"></span>

## Ödemeler ve donanım

<span id="why-is-a-payment-still-pending-after-the-estimated-time" data-ginger-heading="ödeme-tahmini-süreden-sonra-neden-hâlâ-bekliyor" aria-hidden="true"></span>

### Ödeme tahmini süreden sonra neden hâlâ bekliyor?

Tahmin son tarih değildir: rakip işlemler ve düzensiz blok gelişleri onayı etkiler. Geçmişi inceleyin; Ginger **Speed Up Transaction** sunuyorsa kullanmadan önce ek ücreti inceleyin. Bağlantı hatası veya gecikme alıcıya ikinci ödeme gönderme gerekçesi değildir.

<span id="can-i-cancel-a-payment-or-recover-one-sent-to-the-wrong-address" data-ginger-heading="ödemeyi-iptal-edebilir-veya-yanlış-adrese-gönderileni-kurtarabilir-miyim" aria-hidden="true"></span>

### Ödemeyi iptal edebilir veya yanlış adrese gönderileni kurtarabilir miyim?

Ginger onaylanmış ödemeyi geri alamaz. Onaydan önce uygun işlem için **Cancel Transaction** sunabilir; ancak onay yarışını kaybedebilecek değiştirme girişimidir. Sonuç belirlenmeden alıcıya asıl ödemenin iptal edildiğini vaat etmeyin.

<span id="why-are-there-insufficient-funds-when-my-balance-looks-large-enough" data-ginger-heading="bakiyem-yeterli-göründüğünde-neden-fon-yetersiz" aria-hidden="true"></span>

### Bakiyem yeterli göründüğünde neden fon yetersiz?

Görünen toplam her zaman tamamen harcanabilir değildir: fonlar onaylanmamış, geçici CoinJoin’de veya ücret sonrası yetersiz olabilir. Seçili cüzdanı, tutarı ve son önizlemeyi kontrol edin. Tüm tutarı gönderirken ücret ulaşanı azaltabilir; alıcı tutarını sabit faturayla karşılaştırın.

<span id="why-did-my-payment-create-another-address-or-leave-change" data-ginger-heading="ödemem-neden-başka-adres-oluşturdu-veya-para-üstü-bıraktı" aria-hidden="true"></span>

### Ödemem neden başka adres oluşturdu veya para üstü bıraktı?

Ödeme daha büyük bitcoin parçasını harcayıp artan değeri kendi cüzdanınıza para üstü döndürebilir. Yeni para üstü adresi normaldir; paranın yabancıya gönderildiği anlamına gelmez. Elle geri göndermeniz gerekmez; açıklanamayan tutar varsa tüm işlemi inceleyin.

<span id="can-i-use-a-hardware-wallet-including-after-coinjoin" data-ginger-heading="coinjoin-sonrası-dahil-donanım-cüzdanı-kullanabilir-miyim" aria-hidden="true"></span>

### CoinJoin sonrası dahil donanım cüzdanı kullanabilir miyim?

Ginger uyumlu donanım cüzdanları için belgelenmiş alım ve imzalama süreçlerini destekler. Donanım kurtarma kelimelerini bilgisayarda değil, cihazın kurtarma yolunda tutun. Donanım cüzdanı uygun CoinJoin çıktıları alabilir; normal Ginger CoinJoin’in imzalama kaynağı değildir. İsteğe bağlı yönlendirme [ileri düzey sorudur](/tr/help/advanced-faq/#can-coinjoin-send-directly-to-my-hardware-wallet).

<span id="will-an-exchange-accept-my-bitcoin-after-coinjoin" data-ginger-heading="borsa-coinjoinden-sonra-bitcoinimi-kabul-eder-mi" aria-hidden="true"></span>

### Borsa CoinJoin’den sonra bitcoinimi kabul eder mi?

Ginger normal Bitcoin ödemesi hazırlayabilir; sağlayıcının kabulünü veya hesap politikasını garanti edemez. Göndermeden veya satmadan hedef borsanın güncel gereksinimlerini kontrol edin. Yüksek gizlilik puanı kabul sertifikası değildir ve ek cüzdan işlemi bu sonucu vaat edemez.

<span id="getting-help-safely" data-ginger-heading="güvenle-yardım-almak" aria-hidden="true"></span>

## Güvenle yardım almak

<span id="what-can-i-share-with-support-and-where-do-i-report-a-bug" data-ginger-heading="destekle-neleri-paylaşabilirim-ve-hata-nereye-bildirilir" aria-hidden="true"></span>

### Destekle neleri paylaşabilirim ve hata nereye bildirilir?

[Resmî Ginger deposunun](https://github.com/GingerPrivacy/GingerWallet/issues) bağlantılarını kullanın; sürümü, işletim sistemini, tam hatayı ve gizli olmayan adımları verin. Günlük bölümünü paylaşmadan inceleyin; kurtarma kelimeleri, parolalar, kimlik doğrulama kodları veya tüm cüzdan veri klasörünü asla göndermeyin. Destek web sitesinde cüzdan doğrulaması veya etkinleştirme ödemesi gerektirmez; [yararlı sorun bildirimine](/tr/help/troubleshooting/#report-a-useful-issue) bakın.

<span id="about-this-manual" data-ginger-heading="bu-kılavuz-hakkında" aria-hidden="true"></span>

## Bu kılavuz hakkında

Bu kılavuz Ginger v2.0.26’yı anlatır ve İngilizce arayüz etiketlerini kullanır. Belgeler ve çeviriler hata içerebilir. Ginger doğruluklarını garanti etmez; devam etmeden önce kritik ayrıntıları uygulamada doğrulayın. Hata bulursanız cüzdan sırlarını eklemeden [belge deposunda bildirin](https://github.com/GingerPrivacy/GingerDoc/issues).
