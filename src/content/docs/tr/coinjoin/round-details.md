---
doc_id: "coinjoin.round-details"
title: "CoinJoin turları ve girdi uygunluğu"
description: "Normal başlatma, duraklatma ve bekleme durumu kontrolleri sonucu açıklamadığında Ginger CoinJoin aşamalarını, girdi uygunluğunu ve yeniden deneme davranışını anlayın."
lang: tr
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Önce normal başlatma ve duraklatma kontrollerini ve tamamlanan turların ücret gerektirdiğini anlayın.

[Normal CoinJoin rehberiyle](/tr/using-ginger/coinjoin/) başlayın. Ginger protokolü otomatik yönetir; bu kaynak belirli durum veya sınırı anlamak içindir.

<span id="why-a-balance-may-not-be-eligible" data-ginger-heading="bakiye-neden-uygun-olmayabilir" aria-hidden="true"></span>

## Bakiye neden uygun olmayabilir?

Katılımı garanti eden sabit bekleme süresi veya evrensel en düşük bakiye yoktur. Uygunluk tur parametrelerine, coin tutarlarına, onay durumuna, ücretlere, hariç tutmalara ve cüzdan ayarlarına bağlıdır. Bakiye en düşük girdi değerinden büyük olsa bile ekonomik uygun coin içermeyebilir.

<span id="what-happens-during-a-round" data-ginger-heading="tur-sırasında-neler-olur" aria-hidden="true"></span>

## Tur sırasında neler olur?

| Aşama | Cüzdanınızın beklediği |
| --- | --- |
| Girdi kaydı | Uygun coinler ortak işlem için önerilir. |
| Bağlantı doğrulaması | Kayıtlı katılımcılar kullanılabilir kalacaklarını doğrular. |
| Çıktı kaydı | Katılımcılar protokol üzerinden almaları gereken çıktıları düzenler. |
| İmzalama | Cüzdanlar öneriyi kontrol edip kendi girdilerini imzalar. Bu kritik aşama boyunca Ginger’ı kullanılabilir tutun. |
| Gerektiğinde blame turu | Yeniden deneme, önceki işlemin uygun katılımcılarını kullanır ve ek tutarlılık kontrolleri uygular. |
| Yayın | Tamamlanan işlem Bitcoin düğümlerine gönderilir, ardından onay bekler. |

Aşamalar uygulama tarafından yönetilir; anahtar alışverişi veya yabancılarla elle koordinasyon yapmanız gerekmez. Kabul edilen girdilerin ve oluşan çıktıların sayısı tur ve coin seçimiyle belirlenir. Her cüzdan için beklemeniz gereken sabit girdi veya çıktı sayısı yoktur; toplam cüzdan bakiyesi tamamının tek tura katılabileceği vaadi değildir.

<span id="why-signing-can-stop-a-round" data-ginger-heading="i̇mzalama-bir-turu-neden-durdurabilir" aria-hidden="true"></span>

## İmzalama bir turu neden durdurabilir?

Ginger, imzalamayı tamamlamadan önce önerilen işlemin kendisini denetler. Bu denetimler şunları içerir:

- Bu cüzdanın kaydettiği tüm girdiler hâlâ mevcut olmalı ve hiçbiri yinelenmemelidir.
- İşlem yeterli sayıda girdi içermeli ve yapılandırmada tek başına CoinJoin kullanımına izin verilmedikçe, bu cüzdanın kaydettiklerinin dışında girdiler de bulunmalıdır.
- Fiilî madencilik ücreti oranı, tahmin farkları hesaba katılarak turun duyurulan oranına yeterince yakın olmalıdır.
- Cüzdana vaat edilen çıktılar, en az beklenen tutarlarla mevcut olmalıdır.

Sunulan turun katılımcı veya ücret ayarları, işlemin kendisine yönelik bu kontrollerin yerini tutmaz. Özellikle, cüzdanınızdan düşülen tutar kabul edilebilir görünse bile duyurulan oranın çok altında kalan bir ücret oranı imzalama kontrollerini geçemeyebilir. Girdi sayısı coin sayısıdır; bağımsız kişilerin kanıtı değildir. Bkz. [CoinJoin güveni ve sınırları](/tr/learn-coinjoin/trust-and-limits/).

Bu kontroller başarısız olursa Ginger, girdileri için tüm imzaları tamamlamaz. Kaydedilen cüzdan girdilerinden bazıları öneride kaldığında, mevcut girdilerden birinin imzasını vermez. Bu önemlidir, çünkü çıkarılmış bir girdinin imzasını vermemek önerilen işlemi durdurmazdı. Cüzdanın hiçbir girdisi kalmamışsa hiçbir imza göndermez. Kaydedilmiş bir cüzdan girdisini yineleyen öneri doğrudan reddedilir.

Bu nedenle bir tur imzalama aşamasına ulaştığı hâlde başarısız olabilir veya yeniden denenebilir. Kritik aşamadan çıkana kadar Ginger'ı açık tutun ve bu coinlerle başka bir işlem yapmadan önce oluşan durumu inceleyin. Reddedilen bir tur devam etsin diye bilmediğiniz sınırları değiştirmeyin.

<span id="checks-on-blame-rounds" data-ginger-heading="blame-turu-kontrolleri" aria-hidden="true"></span>

## Blame turu kontrolleri

Bir tur kesintiye uğradığında Ginger yalnızca imzaları gönderilmiş olan kendi coinlerini sonraki tura taşır. Blame turu, önceki işlemin girdilerini kullanmalı ve önerilen en yüksek girdi tutarını aynı tutmalıdır. Ginger, çıktıları kaydetmeden önce bu ilişkiyi denetler; ayrıca blame turu aşamasını, asgari girdi sayısını ve ücret sınırlarını kontrol eder.

Bu kontroller yeniden deneme sırasında nelerin değişebileceğini sınırlar. Blame turunun tamamlanacağını garanti etmez, diğer girdileri kimin kontrol ettiğini belirlemez ve başarısız bir turu saldırı kanıtına dönüştürmez.

<span id="inspect-a-completed-round" data-ginger-heading="tamamlanmış-bir-turu-inceleyin" aria-hidden="true"></span>

## Tamamlanmış bir turu inceleyin

Geçmişteki gruplandırılmış CoinJoin kaydını genişletin ve tek bir turun ayrıntılarını açın. Girdi ve çıktılarını boyutu değiştirilebilen işlem görüntüleyicisinde incelemek için **View transaction** seçeneğini seçin. Mevcut olduğunda sahipliği, etiketleri ve bilinen anonimlik puanlarını gösterir; bilinmeyen değerler başka katılımcının coinlerinin sahibini belirlemez. Kullanılabilir ayrıntılar ve kopyalama eylemleri için [işlem görüntüleyicisi kılavuzuna](/tr/payments/coin-control-history/#inspect-inputs-and-outputs) bakın.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="gizli-coinler-ve-başka-çıktı-cüzdanı" aria-hidden="true"></span>

## Gizli coinler ve başka çıktı cüzdanı

Normal başlatma, coinleri gizlilik hedefine zaten ulaşmış olan bir cüzdanı veya mevcut aday kümesini reddeder. Başka bir çıktı cüzdanı seçmek yalnızca özel coinlerden oluşan bir turu zorunlu kılmaz. Bir yönlendirme düzenine güvenmeden önce [çıktı cüzdanı ayarlarını](/tr/coinjoin/settings/) kontrol edin.

Puan hesapları ve tam değer uzlaştırması için [ücretler ve gizlilik ilerlemesini](/tr/using-ginger/annonset/) kullanın.
