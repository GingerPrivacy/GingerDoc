---
doc_id: "help.troubleshooting"
title: "Ginger Wallet sorunlarını giderin"
description: "Kurtarma verilerini koruyarak eksik bakiyeleri, bağlantı sorunlarını, CoinJoin bekleme durumlarını, 2FA hatalarını ve donanım sorunlarını teşhis edin."
lang: tr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Okuma düzeyi: Günlük kullanım. Anlattığı göreve ihtiyacınız olduğunda bu rehberi seçin.

Tam hatayla, seçili cüzdanla, ağla ve uygulama sürümüyle başlayın. Veri değiştirmeden önce kurtarma bilgilerini ve cüzdan dosyalarını koruyun. Yeniden kurmak, klasör silmek veya yeni kelimeler oluşturmak bağlantı veya görüntü sorununun nadiren ilk adımıdır.

<span id="balance-recovery-and-receiving" data-ginger-heading="bakiye-kurtarma-ve-alım" aria-hidden="true"></span>

## Bakiye, kurtarma ve alım

| Belirti | Önce kontrol edin | Sonraki adım |
| --- | --- | --- |
| Kurtarılmış cüzdan boş | Asıl kelimeler, tam parola, ağ, tarama ilerlemesi | Eşitlemeden sonra bilinen adres veya geçmişi karşılaştırın; yalnızca normal kontroller açıklamıyorsa ileri düzey kurtarma kontrolleri kullanın |
| Gelen ödeme yok | Doğru adres, gönderenin işlem kimliği, seçili cüzdan | Yayın ve onayı, ardından yerel eşitlemeyi kontrol edin |
| Receive veya Send yok | Kurtarma hâlâ etkin mi? Cüzdan yalnızca izleme mi? | Kurtarmayı bekleyin veya gerekli imzalama cihazını kullanın |
| Eski adres alım listesinden kayboldu | Ödeme aldı mı veya gizlendi mi? | Geçmişi kontrol edin; liste görünürlüğü anahtarları geçersiz kılmaz |
| Yalnızca çok küçük ödeme yok | Toz eşiği ve eşitleme | Fonların çalındığını varsaymadan önce ayarlı eşiği karşılaştırın |
| Tohumdan kurtarma sonrası etiketler yok | Eşleşen ATTR dosyası yedeklendi mi? | Dosyayı koruyun; etiketler blok zincirinden yeniden oluşturulamaz |

Cüzdanı “yeniden eşitlemek” için web sitesine kurtarma kelimeleri girmeyin. Yalnızca güvenilir bilgisayarda kurulu, doğrulanmış cüzdanın kurtarma sürecini kullanın.

<span id="connection-or-synchronization" data-ginger-heading="bağlantı-veya-eşitleme" aria-hidden="true"></span>

## Bağlantı veya eşitleme

Bağlantıyı, bilgisayar saatini, boş depolama alanını ve yapılandırılmış tam düğümün durumunu kontrol edin. İlk tarama yalnızca zaman gerektirebilir. İlerleme hiç değişmiyorsa Ginger’ı normal kapatıp bir kez açın. Taramayı sürekli yeniden başlatmak yerine olanları kaydedin.

**Awaiting connection**, cüzdanda önbelleğe alınmış geçmiş olsa bile CoinJoin’i ve diğer hizmetleri engelleyebilir. Bağlantısız bakiyeyi potansiyel olarak eksik sayın. İnceleme sırasında Tor’u açık tutun. Yapılandırılmış düğümün P2P bağlantısı ve RPC ücret tahminleri ayrıdır; birinin çalışması diğerini kanıtlamaz.

**Wallet Settings** → **Tools** → **Resync** kullanıyorsanız önce yedekleri koruyun ve başka tarama bekleyin. Yalnızca ilerleme mesajını temizlemek için `Wallets`, `WalletBackups` veya 2FA dosyalarını silmeyin.

<span id="coinjoin-does-not-start" data-ginger-heading="coinjoin-başlamıyor" aria-hidden="true"></span>

## CoinJoin başlamıyor

| Mesaj veya koşul | Olası eylem |
| --- | --- |
| **Insufficient funds eligible for coinjoin** | Onayı, coin tutarlarını, ücretleri ve hariç tutmaları inceleyin; toplam bakiye tek başına uygunluk kanıtlamaz |
| **Only excluded funds are available** | Bazı coinlerin katılmasını istiyorsanız **Exclude Coins** inceleyin |
| **Only immature funds are available** | Gereken olgunlaşmayı bekleyin; yeni çıkarılan çıktılarda özel harcama kuralları vardır |
| **Some funds are rejected from coinjoining** | İlgili nedeni ve güncel hizmet koşullarını okuyun; ret fonlarınızın sahipliğini aktarmaz |
| **Awaiting cheaper coinjoins** | Maliyet tercihlerini inceleyin ve beklemenin amacınıza uyup uymadığına karar verin |
| **Coinjoin may be uneconomical** | Elle aşmadan önce durdurma eşiğini ve oransal maliyetleri inceleyin |
| **Awaiting the blame round** | Protokolün yeniden denemesini bekleyin; başka kullanıcıyı suçlama talimatı değildir |
| **Awaiting closure of send dialog** | Gönderme sürecini bitirin veya kapatın |
| **Mining fee rate was too high** veya **Coordination fee rate was too high** | Bekleyin veya sunulan koşulları araştırın; sınırları körlemesine artırmayın |
| Donanım kaynak cüzdanı | Otomatik CoinJoin imzalaması uygun yazılım cüzdanı gerektirir |

Tur katılımcıları tamamlayamayabilir veya kesilen katılımdan sonra coin geçici olarak kullanılamaz olabilir. Tekrarlanan denemeler, içe aktarmalar veya koordinatör reddini aşma girişimleri onarım değildir. Beklemek veya resmî desteğe başvurmak için nedeni ve güncel durumu kullanın.

<span id="payment-or-fee-problems" data-ginger-heading="ödeme-veya-ücret-sorunları" aria-hidden="true"></span>

## Ödeme veya ücret sorunları

Ücret tahminleri yoksa bekleyin, seçili sağlayıcı/düğüm bağlantısını onarın veya anladığınız elle seçilmiş ücret oranı kullanın. Son tutar artı ücretlerin harcanabilir fonlara sığdığından emin olun. Uzun onaylanmamış işlem zinciri önceki onayları beklemeyi gerektirebilir.

**Speed Up Transaction** veya **Cancel Transaction** yalnızca Ginger sunuyorsa ve ücreti inceledikten sonra kullanın. İptal onaylanmış ödemeyi geri almak değil, bekleyen ödemeyi değiştirme girişimidir. Belirsiz yayın sonucundan sonra iki kez ödemeden önce geçmişi kontrol edin.

<span id="2fa-and-hardware" data-ginger-heading="2fa-ve-donanım" aria-hidden="true"></span>

## 2FA ve donanım

Reddedilen kimlik doğrulama kodunda telefon saatini, seçili kaydı, kimlik doğrulayıcının Ginger uyumluluğunu ve Tor/hizmet bağlantısını kontrol edin. Mevcut cüzdan ve 2FA dosyalarını koruyun. Normal başlangıç geri getirilemiyorsa kurtarma kelimeleri artı asıl parola bağımsız anahtar yedeğidir; aynı veri üzerine yeniden kurmak kaybolmuş kimlik doğrulayıcıyı yeniden oluşturmaz. [İleri düzey SSS](/tr/help/advanced-faq/#does-the-2fa-file-recover-the-wallet-without-the-service) dosya bağımlılığını açıklar.

Cihaz algılaması için rakip cihaz uygulamaları kapalıyken tek kilidi açık donanım cüzdanı, veri kablosu ve doğrudan USB portu kullanın. Gereken cihaz tarafı Bitcoin uygulaması, PIN veya parola adımlarını tamamlayın. Linux’ta üretici USB izinlerini kontrol edin. Cihaz tohumunu bilgisayardan uzak tutun.

<span id="report-a-useful-issue" data-ginger-heading="yararlı-sorun-bildirimi-yapın" aria-hidden="true"></span>

## Yararlı sorun bildirimi yapın

[Resmî Ginger deposundaki](https://github.com/GingerPrivacy/GingerWallet/issues) bağlantıları kullanın. Sürümü, işletim sistemini ve işlemciyi, tam hatayı, beklenen sonucu ve tekrarlayan en kısa gizli olmayan adımları ekleyin. İlgiliyse donanım modelini ve aygıt yazılımını belirtin.

Ginger aramasındaki **Logs** eylemi teşhis günlüklerini açar. Paylaşmadan önce inceleyip hassas bilgileri çıkarın: yollar, adresler, işlem kimlikleri, etiketler ve sipariş bilgileri hassas olabilir. Tüm veri klasörünü değil, küçük ilgili bölümü paylaşın. Halka açık sorun herkese açıktır; hiçbir destek isteği kurtarma kelimelerinizi veya parolanızı gerektirmemelidir.
