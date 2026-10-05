---
doc_id: "backup-recovery.restore"
title: "Bir cüzdanı veya eksik bakiyeyi kurtarın"
description: "Bir Ginger cüzdanını asıl kelimeleri ve parolasıyla kurtarın; özel kurtarma durumlarını araştırmadan önce seçili cüzdanı ve tarama ilerlemesini kontrol edin."
lang: tr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Okuma düzeyi: Günlük kullanım. Anlattığı göreve ihtiyacınız olduğunda bu rehberi seçin.

Kurtarma, anahtarları ve işlem geçmişlerini aramaktır. Başlamadan önce erişebiliyorsanız eski bilgisayarın cüzdan dosyalarını koruyun. Kopyalar üzerinde çalışın ve kurtarılan cüzdanı doğrulayana kadar asılları saklayın.

<span id="recover-from-words" data-ginger-heading="kelimelerden-kurtarın" aria-hidden="true"></span>

## Kelimelerden kurtarın

1. Güvenilir bir bilgisayarda Ginger’ı kurup doğrulayın. Cüzdan ekleme ekranında **Recover** seçeneğini seçin.
2. İstenirse bir **Wallet Name** girin. Mevcut bir cüzdanla karıştırmamak için farklı bir ad kullanın.
3. Asıl kurtarma kelimelerini sırayla girin. Yeni üretilen kelimeleri değil, gerçek yedeği kullanın.
4. **Enter Passphrase** adımında asıl cüzdanı oluştururken kullanılan parolayı girin. Yalnızca asıl cüzdanda parola yoksa boş bırakın. Yeni bir şifre belirlemiyorsunuz.
5. Eşitleme ve kurtarmanın bitmesini bekleyin. Yalnızca görünen itibari para değerini değil, bilinen işlemleri ve alım adreslerini kontrol edin. Kurtarma sırasında bazı normal cüzdan eylemleri gizlenir.

Farklı parolalar farklı geçerli cüzdanlar türetir. Dolayısıyla bir yazım hatası, tohumdan kurtarma sırasında “yanlış parola” hatası vermeden boş bir cüzdan üretebilir. Fonların kaybolduğu sonucuna varmadan önce büyük/küçük harfleri, boşlukları, klavye düzenini ve asıl yedeği kontrol edin.

<span id="an-apparently-empty-recovered-wallet" data-ginger-heading="boş-görünen-kurtarılmış-cüzdan" aria-hidden="true"></span>

## Boş görünen kurtarılmış cüzdan

Önce amaçladığınız cüzdanı ve ağı seçtiğinizi kontrol edin. Ana ağ ve test ağlarında ayrı coinler bulunur. Ardından bağlantıyı ve kurtarma ilerlemesini kontrol edin. Uygulama hâlâ arama yapıyorsa eksik bakiye nihai sonuç değildir.

Bu kontroller doğru olduğu halde bilinen işlemler hâlâ eksikse ayarları rastgele değiştirmeyi bırakın. Başka bir uygulamayla oluşturulan cüzdan veya çok sayıda kullanılmamış adres daha özel bir inceleme gerektirebilir.

İsteğe bağlı ileri düzey kaynak: [hesaplar, adres taraması ve dosya içe aktarma](/tr/backup-recovery/recovery-options/). Bu durumları, özel kurtarma ayarlarını normal kelimeden kurtarma adımlarına katmadan ele alır.

Kelimelerden kurtarma, karşılık gelen anahtarlara erişimi geri getirir. Özel etiketler ve diğer yerel kayıtlar ayrı bir dosya yedeği gerektirebilir.

<span id="if-something-is-missing" data-ginger-heading="bir-şey-eksikse" aria-hidden="true"></span>

## Bir şey eksikse

| Hâlâ elinizde olanlar | Pratik sonraki adım |
| --- | --- |
| Kelimeler ve asıl parola | Güvenilir bir kurulumda kurtarın |
| Erişilebilir cüzdan, ancak eksik veya geçersiz kelimeler | Erişim sürerken yeni, yedekli bir cüzdan oluşturup fonları aktarın |
| Cüzdan dosyası ve asıl kimlik bilgileri | Bir kopyayı içe aktarmayı deneyin; eşlik eden tüm dosyaları koruyun |
| Kelimeler, ancak unutulmuş boş olmayan parola | Ginger bunu sıfırlayamaz; boş bir kurtarılmış cüzdanı başarılı kurtarmayla karıştırmayın |
| Donanım cihazı, ancak güvenilir yedek yok | Cihazı riske atmadan önce üreticinin yedek kontrol sürecini izleyin |
| Ne harcama erişimi ne de kullanılabilir kurtarma bilgileri | Destek ekibi eksik anahtarları üretemez |

Bir “kurtarma yardımcısına” kelimelerinizi, parolanızı, özel anahtarlarınızı veya cüzdan dosyanızı asla vermeyin. Meşru teşhis; uygulama sürümü, ağ ve hata metni gibi gizli olmayan ayrıntılarla başlar.
