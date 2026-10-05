---
doc_id: "help.advanced-faq"
title: "İleri düzey Ginger Wallet SSS"
description: "Kurtarma taraması, cüzdan üst verileri, xpub’ler, coin kontrolü, gizlilik ilerlemesi, tam CoinJoin maliyetleri, çıktı cüzdanları ve veri paylaşımı hakkında yayımlanan Ginger yanıtlarını bulun."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. İlk kez cüzdan kuruyor veya kullanıyorsanız temel SSS ile başlayın.

Bu sorular özel ayarları, daha ayrıntılı gizlilik seçimlerini ve özel kurtarma durumlarını kapsar. Normal ilk kullanım soruları için [temel SSS’ye](/tr/help/) dönün.

- [Kurtarma ve yerel veriler](#recovery-and-local-data)
- [Coin seçimi ve harcama](#coin-selection-and-spending)
- [CoinJoin maliyetleri ve ilerlemesi](#coinjoin-costs-and-progress)
- [Donanım ve gizlilik sınırları](#hardware-and-privacy-boundaries)

<span id="recovery-and-local-data" data-ginger-heading="kurtarma-ve-yerel-veriler" aria-hidden="true"></span>

## Kurtarma ve yerel veriler

<span id="why-can-the-same-words-produce-a-different-wallet" data-ginger-heading="aynı-kelimeler-neden-farklı-cüzdan-oluşturabilir" aria-hidden="true"></span>

### Aynı kelimeler neden farklı cüzdan oluşturabilir?

Asıl parola anahtarların türetilmesine katılır; başka cüzdan uygulaması farklı hesap veya adres türü kullanabilir. Geçerli kelime kümesi tek başına uygulamaların aynı hesabı gösterdiğini kanıtlamaz. Önce asıl parolayı ve tarama ilerlemesini kontrol edin; hesap uyumluluğunu ancak normal kurtarma kontrollerinden sonra araştırın.

<span id="when-should-i-increase-the-recovery-gap-limit" data-ginger-heading="kurtarma-boşluk-sınırını-ne-zaman-artırmalıyım" aria-hidden="true"></span>

### Kurtarma boşluk sınırını ne zaman artırmalıyım?

Başka uygulamada üretilmiş adresler gibi, ödeme alınan adresten önce çok sayıda kullanılmamış adres olduğuna dair kanıtınız varsa düşünün. **Advanced Recovery Options** → **Minimum Gap Limit:** taramayı genişletir, işi ve süresini artırabilir; v2.0.26 kurtarma ekranını 114 ile başlatır. Yanlış kelimeleri, yanlış parolayı veya uyumsuz hesabı düzeltmez.

<span id="why-did-labels-or-privacy-information-change-after-recovery" data-ginger-heading="kurtarmadan-sonra-etiketler-veya-gizlilik-bilgisi-neden-değişti" aria-hidden="true"></span>

### Kurtarmadan sonra etiketler veya gizlilik bilgisi neden değişti?

Kelimeler her özel notu veya yerel işlem analizi öğesini değil, anahtarları geri getirir. Cüzdan JSON ve eşleşen ATTR verisinin farklı rolleri vardır; asıl dosyaları koruyup incelemede kopya kullanın. Eksik etiket veya değişmiş yerel puan tek başına Bitcoin işleminin veya halka açık geçmişinin değiştiğini kanıtlamaz.

<span id="can-i-use-the-same-recovery-words-in-two-wallet-applications" data-ginger-heading="aynı-kurtarma-kelimelerini-iki-cüzdan-uygulamasında-kullanabilir-miyim" aria-hidden="true"></span>

### Aynı kurtarma kelimelerini iki cüzdan uygulamasında kullanabilir miyim?

Uyumlu uygulamalar aynı anahtarları kontrol edebilir; ancak bu yeni cüzdan oluşturmaz veya önceki uygulamayla paylaşılan bilgileri iptal etmez. İkinci uygulama hizmetlerine adresleri veya genişletilmiş açık anahtarı açıklayabilir; eşzamanlı harcama hangi coinlerin kullanılabilir kaldığı hakkında karışıklık yaratabilir. Sadece cihazı bağlamak için donanım kurtarma kelimelerini masaüstüne yazmayın.

<span id="what-does-an-exposed-address-or-xpub-allow-someone-to-do" data-ginger-heading="açığa-çıkmış-adres-veya-xpub-birinin-ne-yapmasını-sağlar" aria-hidden="true"></span>

### Açığa çıkmış adres veya xpub birinin ne yapmasını sağlar?

Adres halka açık işlem geçmişinin belirli parçasına işaret eder. Genişletilmiş açık anahtar türetme kapsamındaki gelecektekiler dahil çok sayıda adresi açıklayabilir; ancak normalde tek başına harcama yetkisi değildir. Aynı açıklanmış dal altında yeni adresler izlemeyi iptal etmez; açığa çıkan imzalama sırları yeni anahtarlarla farklı yanıt gerektirir.

<span id="does-the-2fa-file-recover-the-wallet-without-the-service" data-ginger-heading="2fa-dosyası-hizmet-olmadan-cüzdanı-kurtarır-mı" aria-hidden="true"></span>

### 2FA dosyası hizmet olmadan cüzdanı kurtarır mı?

`2fa_info.gws` dosyasını bağımsız çevrimdışı kurtarma anahtarı saymayın. Normal 2FA başlangıcı ek dosya şifreleme sırrını almak için kurulum tanımlayıcısı ve hizmetle kimlik doğrulayıcı doğrulaması kullanır. Kelimeleri ve asıl parolayı bağımsız koruyun; 2FA açmak kopyalanmış anahtarı iptal etmez.

<span id="how-do-i-delete-a-local-wallet-without-confusing-deletion-with-revocation" data-ginger-heading="silmeyi-iptalle-karıştırmadan-yerel-cüzdanı-nasıl-silerim" aria-hidden="true"></span>

### Silmeyi iptalle karıştırmadan yerel cüzdanı nasıl silerim?

Önce yedekleyin, ardından **Wallet Settings** → **Tools** → **Delete Wallet** kullanıp onayı okuyun. Yerel veri kaldırmak Bitcoin işlemlerini silmez veya kurtarma kelimesi kopyalarını geçersiz kılmaz. İmzalama anahtarları açığa çıktıysa yalnızca cüzdanı silmek başkasının onlarla harcamasını engellemez.

<span id="coin-selection-and-spending" data-ginger-heading="coin-seçimi-ve-harcama" aria-hidden="true"></span>

## Coin seçimi ve harcama

<span id="what-is-the-difference-between-a-coin-an-address-and-a-wallet" data-ginger-heading="coin-adres-ve-cüzdan-arasındaki-fark-nedir" aria-hidden="true"></span>

### Coin, adres ve cüzdan arasındaki fark nedir?

Coin veya UTXO, önceki Bitcoin işleminin harcanmamış tek çıktısıdır. Tek adres birkaç coin almış olabilir; cüzdan birçok adres ve coin yönetebilir. Harcama ve CoinJoin kararları yalnızca toplam cüzdan bakiyesiyle değil, mevcut coinlerle ilgilidir; [sözlük](/tr/help/glossary/) terimleri açıklar.

<span id="does-combining-coinjoined-coins-always-destroy-all-privacy" data-ginger-heading="coinjoinden-geçmiş-coinleri-birleştirmek-her-zaman-tüm-gizliliği-yok-eder-mi" aria-hidden="true"></span>

### CoinJoin’den geçmiş coinleri birleştirmek her zaman tüm gizliliği yok eder mi?

Her gözlemciyi veya ödemeyi tek kural anlatmaz. Normal ortak harcama özellikle bir girdi zaten kimlikle ilişkiliyse girdilerini bağlayabilir; ancak önceki her sahiplik bağlantısını otomatik açıklamaz. Her zaman birleştirmeyi veya asla birleştirmemeyi garanti saymak yerine gerçekten gereken ödemenin girdilerini ve para üstünü inceleyin.

<span id="does-a-reused-address-automatically-publish-my-entire-wallet" data-ginger-heading="tekrar-kullanılan-adres-tüm-cüzdanımı-otomatik-yayımlar-mı" aria-hidden="true"></span>

### Tekrar kullanılan adres tüm cüzdanımı otomatik yayımlar mı?

Hayır, ancak o adrese alımlar birlikte incelenip yayımlayan veya verenle ilişkilendirilebilir. Sonraki ortak harcamalar ve başka yerdeki bilgi daha fazlasını açıklayabilir. Etiketler yerel kararlarınıza yardımcı olur; halka açık ayrımı zorlamaz veya otomatik coin seçiminin amaçlanan sınırı koruyacağını kanıtlamaz.

<span id="does-manual-control-force-exactly-those-inputs-into-the-final-payment" data-ginger-heading="manual-control-son-ödemeye-tam-olarak-o-girdileri-zorlar-mı" aria-hidden="true"></span>

### Manual Control son ödemeye tam olarak o girdileri zorlar mı?

**Manual Control** normal ödeme için aday coinleri seçer. Yetkilendirmeden önce son önizlemede gerçekten kullanılan girdileri, alıcı tutarını, para üstünü ve ücreti inceleyin. CoinJoin girdi seçiminden ayrıdır ve gelecekteki tur için kesin liste belirlemez.

<span id="should-i-consolidate-many-small-coins-while-fees-are-low" data-ginger-heading="ücretler-düşükken-çok-sayıda-küçük-coini-birleştirmeli-miyim" aria-hidden="true"></span>

### Ücretler düşükken çok sayıda küçük coini birleştirmeli miyim?

Birleştirme sonra gereken girdi sayısını azaltabilir; ancak birleştiren işlem ücret gerektirir ve önceden ayrı faaliyeti ilişkilendirebilir. Düşük ücret oranı ifşayı değil, maliyeti değiştirir. Birleştirmeden önce coinlerin amacını, değerini ve bilinen geçmişini düşünün.

<span id="why-is-a-tiny-payment-missing-and-does-exclude-coins-freeze-it" data-ginger-heading="çok-küçük-ödeme-neden-eksik-ve-exclude-coins-dondurur-mu" aria-hidden="true"></span>

### Çok küçük ödeme neden eksik ve Exclude Coins dondurur mu?

Küçük çıktının kaybolduğu sonucuna varmadan önce eşitlemeyi ve ayarlı toz eşiğini kontrol edin. **Exclude Coins** normal harcamayı değil, CoinJoin katılımını etkiler ve coini dondurmaz. Beklenmeyen küçük alımlar anında yanıt gerektirmez; ödemeye dahil etmeden önce harcama maliyetini ve olası ilişkileri değerlendirin.

<span id="can-i-set-any-custom-fee-rate-or-guarantee-a-confirmation-time" data-ginger-heading="herhangi-bir-özel-ücret-oranı-belirleyebilir-veya-onay-süresini-garanti-edebilir-miyim" aria-hidden="true"></span>

### Herhangi bir özel ücret oranı belirleyebilir veya onay süresini garanti edebilir miyim?

Hayır. Yayımlanan elle ücret düzenleyicisi 1 sat/vByte altını reddeder; ağ politikası bu minimumdan fazlasını gerektirebilir. Özel oran yine diğer işlemlerle yarışır ve onay son tarihini rezerve edemez. Onaylamadan önce yalnızca oranı değil, toplam ücreti inceleyin.

<span id="coinjoin-costs-and-progress" data-ginger-heading="coinjoin-maliyetleri-ve-ilerlemesi" aria-hidden="true"></span>

## CoinJoin maliyetleri ve ilerlemesi

<span id="why-can-the-private-balance-percentage-differ-from-overall-progress" data-ginger-heading="gizli-bakiye-yüzdesi-neden-genel-ilerlemeden-farklı-olabilir" aria-hidden="true"></span>

### Gizli bakiye yüzdesi neden genel ilerlemeden farklı olabilir?

Farklı yerel ölçümlerdir. Genel ilerleme, her coinin hedefe doğru puanını değeriyle ağırlıklandırır; renkli gizli bakiye hedefi zaten karşılayan değeri sayar. Hiçbiri dış gözlemcinin sizi tanımlama olasılığının ölçümü değildir. İki bakiye doğru olduğunda bile ekranlar farklı olabilir.

<span id="why-can-progress-fall-or-change-when-i-adjust-the-target" data-ginger-heading="i̇lerleme-neden-düşebilir-veya-hedefi-ayarlayınca-değişebilir" aria-hidden="true"></span>

### İlerleme neden düşebilir veya hedefi ayarlayınca değişebilir?

Fon almak, coinleri birlikte harcamak, yerel analiz olmadan geri yüklemek veya hedefi değiştirmek cüzdan görüntüsünü değiştirebilir. Hedefi düşürmek yayımlanmış geçmişi değiştirmeden coinleri yeniden sınıflandırabilir. Puan değişiminin hırsızlığı kanıtladığını veya yeni gizlilik sonucunu garanti ettiğini varsaymak yerine ilgili işlemleri ve ayarları inceleyin.

<span id="can-i-choose-exactly-which-coins-join-a-round" data-ginger-heading="tura-tam-olarak-hangi-coinlerin-katılacağını-seçebilir-miyim" aria-hidden="true"></span>

### Tura tam olarak hangi coinlerin katılacağını seçebilir miyim?

İstemci yayımlanan CoinJoin ayarlarını kullanarak uygun girdileri seçer. Belirli coinleri hariç tutup mevcut tercihleri ayarlayabilirsiniz; normal gönderme tarafındaki elle seçim CoinJoin girdi listesini zorlamaz. Hariç tutma o coinlere bağlıdır; aynı adresten gelecekteki her alımı ayıran kural değildir.

<span id="what-do-rejected-coins-or-a-blame-round-mean" data-ginger-heading="reddedilmiş-coinler-veya-blame-turu-ne-demek" aria-hidden="true"></span>

### Reddedilmiş coinler veya blame turu ne demek?

Blame turu önceki girişim tamamlanamadıktan sonra protokolün yeniden denemesidir; başka kullanıcıyı tanımlama veya suçlama talimatı değildir. Ret veya geçici kullanılamazlığın tam nedeni ve güncel durumu incelenmelidir. Hiçbir mesaj tek başına fon kontrolünü koordinatöre aktarmaz; [yayımlanan durum tablosuna](/tr/help/troubleshooting/#coinjoin-does-not-start) bakın.

<span id="how-do-i-reconcile-the-full-cost-of-a-round" data-ginger-heading="turun-tam-maliyetini-nasıl-uzlaştırırım" aria-hidden="true"></span>

### Turun tam maliyetini nasıl uzlaştırırım?

Harcanan girdilerinizin değerini toplayıp başka cüzdana gönderilenler dahil o işlemde sahip olduğunuz tüm çıktıları çıkarın. Fark koordinatör masraflarını, madencilik maliyetlerini ve kalan çıktı dağıtım farkını içerebilir. Başka katılımcının çıktısını sizin saymayın veya tek ücret etiketinin tüm farkı mutlaka kapsadığını düşünmeyin.

<span id="is-a-remix-exemption-permanent-or-applied-to-my-entire-balance" data-ginger-heading="yeniden-karıştırma-muafiyeti-kalıcı-mı-veya-tüm-bakiyeme-mi-uygulanır" aria-hidden="true"></span>

### Yeniden karıştırma muafiyeti kalıcı mı veya tüm bakiyeme mi uygulanır?

Hayır. Sunulan tur politikası altında girdi uygunluk kuralıdır; cüzdandaki her işlem için sürekli hak değildir. Ginger’ın duyurulan politikası uygun yeniden karıştırmaları ve tek işlemle doğrudan harcamayı içerir; madencilik ücretleri kalır. Varsayılan muafiyet peşinde coinleri bölmek veya taşımak yerine güncel koşulları tekrar kontrol edin.

<span id="hardware-and-privacy-boundaries" data-ginger-heading="donanım-ve-gizlilik-sınırları" aria-hidden="true"></span>

## Donanım ve gizlilik sınırları

<span id="can-coinjoin-send-directly-to-my-hardware-wallet" data-ginger-heading="coinjoin-doğrudan-donanım-cüzdanıma-gönderebilir-mi" aria-hidden="true"></span>

### CoinJoin doğrudan donanım cüzdanıma gönderebilir mi?

Uygun yazılım cüzdanı, **Coinjoin to this wallet** içinde sunulan yüklü donanım cüzdanını seçebilir. Hedef cüzdan, ayrı bir gizlilik hedefine ulaşma olayı beklemeden turun çıktılarını alır; normal başlangıç zaten gizli adayların turunu zorlamaz. Seçim sıfırlandığı için her yeniden başlatmadan sonra hedef cüzdanı kontrol edin; çalışsın diye donanım tohumunu bilgisayara asla aktarmayın.

<span id="does-an-own-node-replace-every-ginger-service-or-make-tor-unnecessary" data-ginger-heading="kendi-düğümüm-her-ginger-hizmetinin-yerini-alır-veya-toru-gereksiz-yapar-mı" aria-hidden="true"></span>

### Kendi düğümüm her Ginger hizmetinin yerini alır veya Tor’u gereksiz yapar mı?

Hayır. Yapılandırılmış düğüm blok veya ücret tahmini sağlama gibi belirli roller doldurabilir; CoinJoin ve isteğe bağlı sağlayıcı veya 2FA süreçleri hizmetlerine yine bağlanabilir. Tor bağlantı ifşasını ele alır; alıcı hizmet gönderilen istek içeriğini yine görür. Düğüm ayarının harici istek olmadığı anlamına geldiğini varsaymak yerine belirli veri akışını inceleyin.

<span id="does-payjoin-hide-my-payment-from-its-recipient" data-ginger-heading="payjoin-ödememi-alıcısından-gizler-mi" aria-hidden="true"></span>

### PayJoin ödememi alıcısından gizler mi?

Hayır. Alıcı ödeme isteğini zaten bilir ve görüşme sırasında önerilen ödemeyi görebilir. Başarılı ortak çalışma dış gözlemcinin sahiplik varsayımlarını zayıflatabilir; işlem örüntüleri ve diğer bilgi faydayı sınırlayabilir. Oluşturma başarısızsa Ginger normal ödemeye dönebilir; sadece yetkilendirmek son işlemin PayJoin kullandığını garantilemez.

<span id="how-do-i-prove-control-of-an-address-without-paying" data-ginger-heading="ödeme-yapmadan-adres-kontrolünü-nasıl-kanıtlarım" aria-hidden="true"></span>

### Ödeme yapmadan adres kontrolünü nasıl kanıtlarım?

Cüzdandaki adres için **Sign Message** kullanın, tam ifadeyi okuyun ve oluşan imzayı yalnızca amaçlanan doğrulayıcıyla paylaşın. Cihaz, adres türü ve doğrulayıcı uyumluluğu hâlâ önemlidir. İmzalama bitcoin aktarmaz veya her cüzdan adresinin sahipliğini kanıtlamaz; imzalı adresi doğrulayıcının bildiği kimlikle bağlayabilir.

<span id="what-information-do-secret-hunt-and-buysell-services-receive" data-ginger-heading="secret-hunt-ve-alımsatım-hizmetleri-hangi-bilgileri-alır" aria-hidden="true"></span>

### Secret Hunt ve alım/satım hizmetleri hangi bilgileri alır?

İlgili Secret Hunt kontrolleri tur ve işlem tanımlayıcıları, girdi outpoint’i ve kontrol kanıtı gönderebilir. Alım/satım adres doğrulaması ve siparişler gereken adres ve sipariş ayrıntılarını gönderir; sağlayıcı sitelerinin kendi kimlik ve tarayıcı ifşaları vardır. Bunlar ayrı isteğe bağlı süreçlerdir; normal eşitlemenin gizliliği hepsine genellenmemelidir.
