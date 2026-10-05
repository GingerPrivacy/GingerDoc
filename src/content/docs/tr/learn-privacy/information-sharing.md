---
doc_id: "learn-privacy.information-sharing"
title: "Cüzdan bilgileriniz nereye gider?"
description: "Ginger eşitlemesinin, CoinJoin’in, sağlayıcıların, blok gezginlerinin, 2FA’nın, Secret Hunt’ın ve diğer cüzdan uygulamalarının neleri açıklayabileceğini ve Tor’un neyi değiştirdiğini anlayın."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Önce yeni alım adreslerini ve normal ödeme incelemesini anlayın.

Farklı cüzdan eylemleri farklı bilgiler açıklar. Halka açık blok filtrelerini kontrol etmek, CoinJoin girdisi göndermek ve satın alma sayfası açmak aynı gizlilik olayı değildir. Geri alamayacağınız bir şeyi paylaşmadan önce bu kaynağı kullanın.

Tor, üzerinden yönlendirilen bağlantılarda doğrudan IP ifşasını azaltır. İsteği alan hizmetten gizlemez, işlemi blok zincirinden kaldırmaz, kilidi açılmış bilgisayarı korumaz veya harici tarayıcınızı otomatik değiştirmez. Yapılandırılmış yerel düğüm kontrol ettiğiniz makineye ayrı bir bağlantıdır.

<span id="synchronization-and-bitcoin-network-activity" data-ginger-heading="eşitleme-ve-bitcoin-ağ-faaliyeti" aria-hidden="true"></span>

## Eşitleme ve Bitcoin ağ faaliyeti

| Eylem ve alıcı | İlgili bilgiler | Seçebilecekleriniz |
| --- | --- | --- |
| Ginger arka ucundan eşitleme verisi indirmek | İstemci güncel eşitleme konumundan halka açık filtreleri ister. Bu istekte hesap xpub’si göndermek yerine cüzdan betiklerini yerel eşleştirir. Hizmet yine de istekleri ve zamanlamalarını görür. | Tor’u açık tutun; arka ucun tüm kullanıma kör olduğunu düşünmeden eşitlemenin bitmesine izin verin. |
| Blok kaynağından eşleşen bloğu indirmek | Kaynak hangi tam bloğun istendiğini öğrenir. Eşleşme yanlış pozitif olabilir; blok istemek içindeki belirli işlemin size ait olduğunu kanıtlamaz. | Doğru yapılandırılmış kendi düğümünüz blok sağlayabilir. Düğüm ayarı Ginger’ın kullandığı diğer her hizmetin yerini almaz. |
| Ücret tahmini istemek | Yapılandırılmış sağlayıcı halka açık ücret bilgisi isteği alır. Bu istek işlem veya cüzdan bakiyenizi sorgulamaktan farklıdır. | **Fee Rate Provider** bölümünde yayımlanan kaynaklardan uygununu seçin; kendi düğümü seçeneği çalışan yapılandırılmış düğüm gerektirir. |
| Ödeme yayınlamak | Eş veya yedek yayın hizmeti imzalı işlemi alır. Yayıldıkça girdileri, çıktıları ve tutarları görünür olur. | İmzalamadan önce inceleyin. Tor bağlantı ifşasını değiştirir, ödeme içeriğini değil. Önceki girişim başarısızsa Ginger yedek yayın yolları kullanabilir. |

İşlettiğiniz Bitcoin düğümü için makineye erişimi ve uzak bağlantıları koruyun. İşleticisi istekleri görebilir; başkası yönetiyorsa sadece “sizin düğümünüz” denilen sunucunun gizliliği garanti değildir. Normal internet erişimi, eş keşfi ve hizmet kullanılabilirliği yine önemlidir.

<span id="coinjoin-and-optional-services" data-ginger-heading="coinjoin-ve-isteğe-bağlı-hizmetler" aria-hidden="true"></span>

## CoinJoin ve isteğe bağlı hizmetler

| Eylem ve alıcı | İlgili bilgiler | Seçebilecekleriniz |
| --- | --- | --- |
| CoinJoin koordinatörüyle katılmak | Gönderilen girdiler ve sahiplik kanıtları, çıktı kayıtları, protokol mesajları ve zamanlama. WabiSabi varsayımları altında girdilerle çıktıların eşleştirilmesini gizlemeyi amaçlar. | Katılımı, maliyetleri ve hedefi inceleyin; Tor’u açık tutun. Anahtarların kullanıcıda kalmasını her etkin gözlemciden korunmayla eşitlemeyin. |
| Alım/satım teklifleri istemek ve adres doğrulamak | Teklif parametreleri seçilen ülkeyi, para birimini, tutarı ve geçerliyse ödeme yöntemini içerir. Adres doğrulama sipariş tamamlanmadan önerilen adresi alım/satım hizmetine gönderir. | Sonra alım veya satımdan vazgeçseniz bile devam etmeden önce bu ifşayı düşünün. |
| Alım/satım siparişi oluşturmak veya sürdürmek | Entegrasyon sipariş ayrıntıları ve alım veya iade adresini gönderip sağlayıcı sürecini açar. Sağlayıcı kendi koşulları altında ödeme, iletişim veya kimlik bilgileri isteyebilir. | Seçilen sağlayıcının güncel koşullarını okuyun ve yalnızca vermek istediğiniz bilgileri sunun. Ginger kimlikle ilişkilendirilmiş bir satın alımı anonim hale getirmez. |
| İsteğe bağlı Ginger 2FA kullanmak | Normal başlangıç doğrulaması kurulum tanımlayıcısıyla kimlik doğrulama kodu gönderir. Hizmet ek cüzdan dosyası şifreleme katmanının anahtarını döndürür. | Erişim koruması ve hizmet bağımlılığının size uygun olup olmadığına karar verin. Kurtarma kelimeleri ve varsa asıl parolayı bağımsız erişilebilir tutun. |
| Secret Hunt kontrollerine katılmak | Uygun etkinlik kontrolleri tur kimliği, işlem kimliği, girdi outpoint’i ve girdinin kontrol kanıtını gönderebilir. Outpoint önceki işlemin belirli çıktısını tanımlar. | **Secret Hunt** açıp **Enable/disable the use of this wallet for Secret Hunt.** olarak açıklanan seçeneği inceleyin. İlgili etkinlikler aktif olmak zorunda olmasa da varsayılanı açıktır. Kapatmak önceki istekleri geri çekmez. |

Tor, doğrulama için gönderilen adresi, sipariş ayrıntılarını, 2FA tanımlayıcısını veya Secret Hunt sahiplik kanıtını alan hizmetten gizlemez. Bu gözlemler, hizmetin sırf işlem tanımlayıcısı gördüğü için kurtarma kelimeleri veya harcama yetkisi aldığı anlamına da gelmez.

2FA tanımlayıcısı hizmette normal başlangıç girişimlerini ilişkilendirebilir. Dönen şifreleme anahtarı ek yerel dosya koruma düzeninin parçasıdır; kurtarma kelimelerinizin ve parolanızın yerini alan yeni Bitcoin anahtarı değildir. Destek kişilerine ne bu sırları ne de kimlik doğrulama kodlarını gönderin.

<span id="browsers-other-applications-and-people" data-ginger-heading="tarayıcılar-diğer-uygulamalar-ve-insanlar" aria-hidden="true"></span>

## Tarayıcılar, diğer uygulamalar ve insanlar

| Eylem | Açıklanabilecekler | Yararlı alışkanlık |
| --- | --- | --- |
| Halka açık blok gezgini açmak | Sorgulanan işlem/adres ve tarayıcının ağ ve oturum bilgileri | Ginger’ın yerel geçmişiyle başlayın; yalnızca ek bilgi gerekince blok gezgini açın. |
| Sağlayıcı web sitesini kullanmak | Sipariş ayrıntıları, giriş/ödeme bilgileri, çerezler ve siteye özgü tarayıcı gözlemleri | Tarayıcı oturumunu Ginger’ın Tor ayarından ayrı ele alın. |
| xpub içe aktarmak veya başka uygulamada aynı hesabı kullanmak | Uygulamaya bağlı olarak açık adres dalı veya cüzdandan türetilen sorgular | İçe aktarmadan önce eşitleme ve veri paylaşma davranışını kontrol edin. “Yalnızca izleme” harcama yetkisini tanımlar, gizliliği değil. |
| Mesajda veya halka açık gönderide adres paylaşmak | Adres ile onu gönderen kişi veya hesap arasındaki bağlantı | Amaçlanan ödeme yapanla güvenilir kanaldan yeni adres paylaşın. |
| Günlük, cüzdan dosyası veya ekran içeriği paylaşmak | Veriye bağlı olarak: yollar, etiketler, adresler, işlem/tur tanımlayıcıları ve muhtemelen sırlar | En küçük ilgili, incelenmiş bölümü paylaşın. Biri istiyor diye tüm cüzdan verisini veya kurtarma sırlarını asla göndermeyin. |

Web ödemesi araştırması, tarayıcı gözlemleriyle blok zinciri bilgisinin neden birlikte düşünülmesi gerektiğini gösterir. Belirli Ginger sağlayıcısının güncel izleme politikasını kanıtlamaz. [Goldfeder ve çalışma arkadaşları, When the Cookie Meets the Blockchain](https://arxiv.org/abs/1708.04748)

<span id="local-information-also-needs-protection" data-ginger-heading="yerel-bilgiler-de-korunmalıdır" aria-hidden="true"></span>

## Yerel bilgiler de korunmalıdır

Etiketler, gizlilik hesaplaması ve sağlayıcı sipariş kayıtları cüzdan üst verilerinde bulunabilir. Sonraki kararlar ve kurtarma için yararlıdır, ancak hepsi imzalama anahtarlarıyla aynı şekilde korunmaz. Bilgisayarı, yedekleri ve erişebilen hesapları koruyun. **Discreet Mode** desteklenen ekran alanlarında yardımcı olur; işletim sisteminin ekran kilidi gözetimsiz erişimi daha geniş korur.

Kelimelerden geri yükleme tüm özel notları geri getirmeden harcanabilir anahtarları kurtarabilir. Notları silmek, alıcının veya hizmetin elindeki bilgileri silmenin yolu değildir. Kurulumları değiştirmeden önce [cüzdan geçişini](/tr/learn-privacy/wallet-migration/); ödeme göndermeden önce [gizlilik alışkanlıklarını](/tr/using-ginger/address-reuse/) okuyun.
