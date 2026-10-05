---
doc_id: "coinjoin.round-details"
title: "CoinJoin turları ve girdi uygunluğu"
description: "Normal başlatma, duraklatma ve bekleme durumu kontrolleri sonucu açıklamadığında Ginger CoinJoin aşamalarını, girdi uygunluğunu ve yeniden deneme davranışını anlayın."
lang: tr
verified_release: "v2.0.26"
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
| Gerektiğinde blame turu | Yeniden deneme, gereken adımları tamamlamayan katılımcıları dışlar. |
| Yayın | Tamamlanan işlem Bitcoin düğümlerine gönderilir, ardından onay bekler. |

Aşamalar uygulama tarafından yönetilir; anahtar alışverişi veya yabancılarla elle koordinasyon yapmanız gerekmez. Kabul edilen girdilerin ve oluşan çıktıların sayısı tur ve coin seçimiyle belirlenir. Her cüzdan için beklemeniz gereken sabit girdi veya çıktı sayısı yoktur; toplam cüzdan bakiyesi tamamının tek tura katılabileceği vaadi değildir.

<span id="private-coins-and-another-output-wallet" data-ginger-heading="gizli-coinler-ve-başka-çıktı-cüzdanı" aria-hidden="true"></span>

## Gizli coinler ve başka çıktı cüzdanı

Normal v2.0.26 başlangıcı, coinleri gizlilik hedefini zaten karşılayan cüzdanı veya kullanılabilir aday kümesini reddeder. Başka çıktı cüzdanı seçmek yalnızca gizli coinlerden oluşan turu zorlamaz. Yönlendirme rutinine güvenmeden önce [çıktı cüzdanı ayarlarını](/tr/coinjoin/settings/) kontrol edin.

Puan hesapları ve tam değer uzlaştırması için [ücretler ve gizlilik ilerlemesini](/tr/using-ginger/annonset/) kullanın.
