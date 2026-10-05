---
doc_id: "coinjoin.settings"
title: "CoinJoin’i ve çıktı cüzdanlarını yapılandırın"
description: "Ginger CoinJoin gizlilik ve maliyet ayarlarını, hariç tutulan coinleri ve CoinJoin çıktılarının başka yüklü cüzdana gönderilmesini anlayın."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Önce normal başlatma ve duraklatma kontrollerini ve tamamlanan turların ücret gerektirdiğini anlayın.

**Coinjoin Settings** seçili cüzdana uygulanır. Her seferinde bir ayarı değiştirip etkisini gözlemleyin. Daha agresif ayarlar, durumunuzda önemli olan gizliliği iyileştirmeden ücretleri veya bekleme süresini artırabilir.

<span id="automatic-participation-and-cost-preferences" data-ginger-heading="otomatik-katılım-ve-maliyet-tercihleri" aria-hidden="true"></span>

## Otomatik katılım ve maliyet tercihleri

| Ayar | Kontrol ettiği |
| --- | --- |
| **Automatically start coinjoin** | Cüzdan ve uygun fonlar kullanılabilirken katılımı başlatır. |
| **Stop coinjoin threshold** | Cüzdan bakiyesi seçili BTC tutarının altındayken otomatik CoinJoin’i durdurur. Cüzdan düzeyinde durdurma kuralıdır. Koordinatör ücret muafiyeti eşiğini veya kabul edilen en küçük girdiyi belirlemez. |
| **Coinjoin time preference** | Güncel madencilik ücretlerini seçili dönemin medyanıyla karşılaştırır. Vaat edilen tamamlanma tarihini değil, ne zaman katılınacağını etkiler. |
| **Ignore coinjoin time preference below** | Zaman tercihi karşılaştırması aksi halde bekletecek olsa bile bu ücret oranı eşiğinin altında katılıma izin verir. |
| **Random Skip** | Uygun turların ne sıklıkta atlanacağını seçer. Seçenekler **Disabled**, **Rarely**, **Sometimes** ve **Often**. Daha fazla atlama genellikle daha fazla bekleme demektir. |

Kontrol paneli ekonomik olmayan bakiye bildirdiğinde başlatmaya basmak durdurma eşiğini aşabilir. Bu işlem ücretlerini kaldırmaz. Aşmadan önce mevcut coinlerin değerini ve beklenen maliyeti düşünün.

<span id="privacy-settings" data-ginger-heading="gizlilik-ayarları" aria-hidden="true"></span>

## Gizlilik ayarları

**Anonymity score target**, Ginger’ın coini gizli sayması için gereken en düşük iç puandır. Yayımlanan düzenleyici 2 ile 1000 arasındaki tam sayıları kabul eder. Hedefi artırmak daha fazla CoinJoin faaliyetine yol açabilir; tam o sayıda bağımsız kişinin coinin sahibi olabileceğine dair garanti satın almaz.

**Single non-private coin restriction**, kayıtta anonimlik puanı 1 olan yalnızca bir coine izin verir. Önceden gizli olmayan birkaç coini birlikte kaydetmenin oluşturduğu doğrudan ilişkiyi azaltabilir; ancak böyle birçok coini olan cüzdanda ilerlemeyi yavaşlatabilir.

Hedefi düşürmek blok zincirini değiştirmeden arayüzün gizli dediğini anında değiştirebilir. Gizlilik göstergelerini dış gözlemcinin tüm bilgiyi kaybettiğinin kanıtı değil, tahmin ve politika ayarları sayın.

<span id="exclude-specific-coins" data-ginger-heading="belirli-coinleri-hariç-tutun" aria-hidden="true"></span>

## Belirli coinleri hariç tutun

CoinJoin kontrol panelinin menüsünden **Exclude Coins** açın. Coin listesini inceleyip CoinJoin’den hariç tutmak istediklerinizi işaretleyin. Yeniden uygun hale getirmek için listeye dönün. Hariç tutma o coinlere uygulanır; aynı adrese gelecekteki her ödeme için kalıcı kural değildir.

Coini CoinJoin’den hariç tutmak normal harcamaya karşı kilitlemez ve donanım saklamanın yerine geçmez. Mevcut her coin hariçse panel **Only excluded funds are available** gösterebilir. Ücret veya gizlilik ayarlarını değiştirmeden önce listeyi kontrol edin.

<span id="receive-outputs-in-another-wallet" data-ginger-heading="çıktıları-başka-cüzdanda-alın" aria-hidden="true"></span>

## Çıktıları başka cüzdanda alın

**Coinjoin to this wallet**, kaynak cüzdanın CoinJoin çıktılarının nerede alınacağını seçer. Varsayılan olarak kaynak cüzdanın kendisidir.

1. Amaçlanan hedef cüzdanı Ginger’a yükleyin. Yedekleyin ve alım adreslerini kontrol ettiğinizi doğrulayın.
2. CoinJoin sürmüyorken kaynak cüzdanın **Coinjoin Settings** bölümünü açıp **Coinjoin to this wallet** içinden hedefi seçin.
3. Başlamadan önce seçili adı kontrol edin. Yalnızca yüklü, uygun cüzdanlar görünür; sadece diskte listelenen cüzdanın yüklü olduğunu varsaymayın.
4. Başarılı işlemden sonra kaynağın bakiyesinin yanında hedef cüzdanın eşitlenmiş geçmişini de kontrol edin.

Etkin CoinJoin sırasında hedef değiştirilemez. **Ginger yeniden başlatıldıktan sonra bu seçim sıfırlanır**; hedefin önemli olduğu her oturumdan önce kontrol edin. İki cüzdanı CoinJoin çıktılarını birbirine geri gönderecek biçimde yapılandırmayın; mevcut seçenekler döngüsel düzenleri kısıtlar.

Yayımlanan hedef seçimi yüklü donanım cüzdanını içerebilir. Kaynak hâlâ CoinJoin’i imzalayan yazılım cüzdanıdır; donanım hedefi kaynağı soğuk cüzdan yapmaz veya donanımın kendi CoinJoin çalıştırmasını sağlamaz. Yalnızca uygulamanın gerçekten sunduğu hedefi kullanın; bu yola güvenmeden önce yedeğini ve adres kontrolünü doğrulayın.

<span id="experimental-coin-selection" data-ginger-heading="deneysel-coin-seçimi" aria-hidden="true"></span>

## Deneysel coin seçimi

Sürüm **(EXPERIMENTAL) Improved Coin Selection** sunar. Yapılandırması ileri düzey ayar arayüzüdür; CoinJoin ön koşulu değildir. Mevcut kontroller şunlardır:

| Kontrol | Amaçlanan etki |
| --- | --- |
| **Force to use low privacy coins** | Seçimin en düşük gizlilik grubundan coin içermesini gerektirir. |
| **Can select already private coins** | Seçicinin gizlilik hedefinin zaten üzerindeki coinleri kullanmasına izin verir. Böyle katılım yine madencilik ücreti doğurabilir. |
| **Coin privacy difference normalization for score calculation** | Düşük değerler, gizlilik puanları birbirine yakın seçimleri destekler. |
| **Amount loss normalization for score calculation** | Düşük değerler, oransal tutar kaybı düşük seçimleri destekler. |
| **Target coin number per wallet bucket** | Fazla temsil edilen coin tutarı gruplarından seçimi etkiler. |
| **Use the Old Coin Selector for fallback** | Eski ve yeni seçim sonuçlarını karşılaştırıp aralarından seçer. |

Değiştirdiğiniz ödünleşimi anlamıyorsanız ilk değerleri koruyun. Bunlar seçim tercihleridir; kesin toplam ücret sınırı veya turun üreteceği çıktı sayısı vaadi değildir.

<span id="when-another-round-cannot-start" data-ginger-heading="başka-tur-başlayamadığında" aria-hidden="true"></span>

## Başka tur başlayamadığında

Bu sürümde normal CoinJoin başlangıcı, fonları gizlilik hedefini zaten karşılayan cüzdanı ve yalnızca gizli coinlerden oluşan kullanılabilir seçimi reddeder. Farklı çıktı cüzdanı seçmek kuralı aşmaz. Tüm fonlar gizliyken panel elle başlatma kontrolünü gizleyebilir. Yalnızca kalan gizli coinleri yönlendirmek için gizli olmayan her coini hariç tutup turu zorlamaya güvenmeyin.

Uygun katılım başlamadan hedefi seçin veya zaten gizli fonların normal aktarımını inceleyin. Yalnızca tur başlasın diye gizlilik gereksinimini düşürmek veya ilişkisiz fon eklemek gizlilik sonucunu ve maliyeti değiştirebilir.
