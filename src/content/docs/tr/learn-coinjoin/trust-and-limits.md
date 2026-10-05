---
doc_id: "learn-coinjoin.trust-and-limits"
title: "CoinJoin yaparken neye güvenirsiniz?"
description: "Bitcoin anahtarlarının kontrolünü, CoinJoin gizlilik varsayımlarını, koordinatör kullanılabilirliğini, katılımcı bağımsızlığını ve yazılım doğrulamasını ayırt edin."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Önce basit CoinJoin açıklamasını okuyun.

Ginger’da fonları karıştırıcının kontrol ettiği bakiyeye yatırmak yerine Bitcoin imzalama yetkisini tutarsınız. Bu, saklama konusunda önemli soruyu yanıtlar. Gizlilik, kullanılabilirlik ve yazılım bütünlüğü ek sorular içerir.

Katılmadan önce amacınızı belirleyin: belki alıcının diğer ödemeleriniz hakkında daha az öğrenmesini veya gelecekteki harcamayla halka açık bilinen alım arasındaki bağlantıları azaltmayı istersiniz. CoinJoin işlem bağlantısı gizliliğine yardımcı olabilir, ancak alıcının sizden zaten edindiği bilgileri kaldıramaz.

<span id="four-separate-questions" data-ginger-heading="dört-ayrı-soru" aria-hidden="true"></span>

## Dört ayrı soru

| Soru | Koruma ve varsayım | Kanıtlamadığı |
| --- | --- | --- |
| Kim harcayabilir? | Cüzdan önerilen işlemi kontrol ettikten sonra girdilerini imzalar. Koordinatör kurtarma kelimelerinize ihtiyaç duymaz. | Çalınmış anahtarlara, kötü amaçlı yazılıma veya bilerek yanlış hedefe yetkilendirdiğiniz işleme karşı koruma |
| Girdileri ve çıktıları kim ilişkilendirebilir? | WabiSabi kayıtlar arası ilişkileri gizlemek için anonim kimlik bilgileri kullanır. Halka açık işlem verileri ve diğer gözlemler hâlâ vardır. | Kötü niyetli koordinatöre, işbirliği yapan katılımcılara veya dış bilgiye karşı koşulsuz garanti |
| İlerlemeyi kim durdurabilir? | Başarılı katılım turun tamamlanması için koordinatör, ağ ve yeterli sayıda işbirliği yapan katılımcı gerektirir. | Rezerve tamamlanma zamanı veya sunulan her tura katılma hakkı |
| Hangi yazılımı çalıştırıyorum? | Açık kaynak incelemeye izin verir; indirme doğrulaması edinilen dosyanın kökenini ve bütünlüğünü belirlemeye yardımcı olur. | Her derlemenin hatasız, bilgisayarın ele geçirilmemiş veya uzak hizmetin tam yayımlanan kodu çalıştırdığının kanıtı |

[WabiSabi makalesi, bölüm 7](https://cryptoeconomicsystems.pubpub.org/pub/ficsor-wabisabi-coordinated/release/3), gizliliği, etkin saldırıları ve hırsızlık önlemeyi ayrı ele alır. Bu rehber ayrımı kullanıcı kararlarına uygular; kurulu cüzdan veya koordinatörün güvenlik denetimi değildir.

<span id="consider-the-observer" data-ginger-heading="gözlemciyi-düşünün" aria-hidden="true"></span>

## Gözlemciyi düşünün

Pasif blok zinciri gözlemcisi işlem girdilerini, çıktılarını, tutarları ve sonraki harcamaları görür. Sezgisel kurallar uygulayıp veriyi başka yerde edindiği bilgilerle birleştirebilir. Satıcı kendi faturası ve müşterisi hakkında ek bilgiye sahiptir. Borsa işlediği çekimi veya yatırımı bilir.

Katılımcı kendi girdilerini ve çıktılarını da bilir; bu bazı olasılıkları eler. Koordinatör kayıtları yönetir ve protokol zamanlamasını gözlemleyebilir; etkin biçimde kötü niyetli koordinatör kimlerin katıldığını veya turların tamamlanıp tamamlanmadığını etkileyebilir. Bunlar farklı yeteneklerdir; yalnızca halka açık zincir gözlemini ele alan iddia hepsine karşı koruma sayılmamalıdır.

<span id="apparent-participants-are-not-independent-people" data-ginger-heading="görünen-katılımcılar-bağımsız-kişiler-değildir" aria-hidden="true"></span>

## Görünen katılımcılar bağımsız kişiler değildir

Sybil saldırısı tek aktörün birden fazla katılımcı olarak görünmesidir. Saldırgan hedef çevresindeki faaliyetin çoğunu kontrol ediyorsa kendi coinlerini değerlendirdiği olasılıklardan çıkarabilir. İşlem yoğun görünüp o gözlemciye bilgisiz gözlemcinin gördüğünden daha az belirsizlik sağlayabilir.

Gerçek girdiler ve madencilik maliyetleri ekonomik kısıtlar yaratır. Normal kullanıcının her katılımcının bağımsız kimliğini doğrulamasını sağlamaz. Bu nedenle girdi sayıları, çıktı sayıları, işlem hacmi ve cüzdan anonimlik puanı bağımsız kişilerin sayımı değildir.

Büyük turlar daha fazla olasılık sağlayabilir; ancak tutarlar, katılımcıların bilgisi ve sonraki işlemler yine önemlidir. Saldırganın hiçbir şey öğrenmediğini kanıtlayan tur sayısı veya hedef değeri yoktur.

<span id="when-the-coordinator-or-connection-is-unavailable" data-ginger-heading="koordinatör-veya-bağlantı-kullanılamadığında" aria-hidden="true"></span>

## Koordinatör veya bağlantı kullanılamadığında

Anahtarlarınızın zaten kontrol ettiği coinler, koordinatörün size borçlu olduğu bakiyeye dönüşmez. Yayından önce başarısız girişim tek başına bunları koordinatöre aktarmaz. Ancak etkin turda coinler başka eyleme kullanılabilir olmadan önce Ginger’ın kritik işi tamamlaması gerekebilir; kontrol panelinin duraklatma düğmesini kullanıp güncel durumu izleyin.

CoinJoin devam edemiyorsa duraklatıp nedeni inceleyin. Normal gönderme yine kullanılabilir imzalama yolu, harcanabilir coinler, eşitlenmiş bilgi ve yayınlama yolu gerektirir. Tek başına koordinatör kesintisi yedekleri atma veya kurtarma kelimelerini yeni hizmete yükleme gerekçesi değildir. İsteğe bağlı Ginger 2FA’nın kendi normal başlangıç hizmet bağımlılığı vardır; kelimeleri ve asıl parolayı bağımsız kurtarılabilir tutun.

Ret veya başarısız tur tek başına saldırı kanıtı veya kimliğiniz hakkında yargı değildir. Tersine, başarılı tur koordinatörün dürüstlüğünü onaylamaz. Somut sorun inceleme gerektiriyorsa ilgili özel kayıtları koruyun.

<span id="decisions-you-can-make" data-ginger-heading="verebileceğiniz-kararlar" aria-hidden="true"></span>

## Verebileceğiniz kararlar

1. Ginger’ı resmî dağıtımından edinin ve indirmeyi doğrulayın. Kimliği doğrulanmış güncellemeler kullanın ve imzalayan makineyi koruyun.
2. Amaçlanan cüzdan ağ gizliliği için Tor’u açık tutun. Bilerek gönderdiğiniz bilgileri alan hizmetten gizlemez.
3. Seçili cüzdanı, çıktı hedefini, uygun coinleri ve maliyet tercihlerini inceleyin. Açıklanamayan hatayı susturmak için sınırları artırmayın.
4. Bağımsız kurtarma verisi saklayın. Turu “açmak” için koordinatöre veya destek kişisine kelimelerinizi, parolanızı veya özel anahtarlarınızı asla vermeyin.
5. Sonucu ve sonraki harcamalarınızı inceleyin. Yeni adres ve yüksek puan, kimliği bilinen alıcıya yeni açıklamayı geri alamaz.

Kendi Bitcoin düğümünüz, yapılandırıldığında blok veya ücret tahmini sağlamak gibi gerçekten yaptığı roller için yararlıdır. CoinJoin koordinatörünün yerini almaz veya katılımcıların bağımsızlığını kanıtlamaz. Donanım cüzdanı anahtarları yalıtır, işlem grafiğini gizli yapmaz.

Temel işlem modeli için [CoinJoin açıklamasını](/tr/learn-coinjoin/explained/) okuyun. Belirli amaca uyup uymadığını belirlemek için [CoinJoin’in ne zaman yararlı olduğunu](/tr/learn-coinjoin/when-to-use/) okuyun. Güçlü ürün iddialarını araştırılacak soru sayın: hangi gözlemci, hangi varsayımlar, hangi yazılım sürümü ve hangi kanıt?
