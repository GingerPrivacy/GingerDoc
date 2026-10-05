---
doc_id: "learn-coinjoin.when-to-use"
title: "CoinJoin ne zaman anlamlıdır?"
description: "CoinJoin’in Bitcoin gizlilik kaygınızı ele alıp almadığını, maliyetini ve sonrasında harcamayı nasıl planlayacağınızı değerlendirin."
lang: tr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Okuma düzeyi: Günlük kullanım. Anlattığı göreve ihtiyacınız olduğunda bu rehberi seçin.

İşlem bağlantısı bilgisini azaltmak gerçekten sahip olduğunuz kaygıyı ele alıyorsa CoinJoin yararlıdır. Ana sorun çalınmış kurtarma kelimeleri, ele geçirilmiş bilgisayar veya sağlayıcıya doğrudan açıklamak üzere olduğunuz bilgilerse daha az yararlıdır.

<span id="start-with-a-concrete-objective" data-ginger-heading="somut-amaçla-başlayın" aria-hidden="true"></span>

## Somut amaçla başlayın

Örneğin gelecekteki ödeme alıcısının, önceden kimlikle ilişkilendirilmiş alımın geçmişini daha az doğrudan görmesini isteyebilirsiniz. O alımı kimlerin zaten bildiğini ve sonraki ödemenin neyi açıklayacağını yazın. CoinJoin aradaki işlem bağlantısı sorununu değiştirebilir; ilk açıklamayı geri alamaz veya ikincisini engelleyemez.

Amacınız yalnızca bitcoin tutarken anahtarları korumaksa kurtarılabilir yedek ve uygun donanım cüzdanı süreci sorunu daha doğrudan ele alır. Kaygınız her faturada tekrar kullanılan halka açık alım adresiyse önce tekrar kullanmayı durdurun; sonradan CoinJoin eski alımları gizli yapmaz.

<span id="compare-the-tradeoffs" data-ginger-heading="ödünleşimleri-karşılaştırın" aria-hidden="true"></span>

## Ödünleşimleri karşılaştırın

| Durum | Düşünülecek karar |
| --- | --- |
| Yüksek madencilik ücretlerinde çok sayıda küçük coin | Katılım orantısal olarak büyük tutar tüketebilir; ücret koşullarını inceleyip beklemeyi düşünün |
| Ödeme hemen yapılmalı | CoinJoin tamamlanması takvimli değildir; kesin son tarihe yetişmek için tura güvenmeyin |
| Kimlikle ilişkili kaynaktan uzun vadeli harcama | CoinJoin, ayrı alım adresleri ve sonraki coin seçiminin birlikte nasıl çalıştığını düşünün |
| Sağlayıcı kimlik ve adres kanıtı istiyor | Doğrudan açıklama kalır; CoinJoin’in önem verdiğiniz bilgiyi değiştirip değiştirmediğini kontrol edin |
| Hedef donanım cüzdanı | Alım hesabını ve yayımlanan hedef sürecini doğrulayın; donanım kurtarma kelimelerini sıcak cüzdana aktarmayın |
| Masaüstünü kullanılabilir tutamıyorsunuz | Otomatik katılım tur sırasında bağlantı ve kilidi açık imzalama yeteneği gerektirir |

Bunlar belirli tutarı taşıma önerisi veya finansal sonuç güvencesi değil, ödünleşimlerdir. Maruziyeti artırmadan önce süreci öğrenip ücretleri uzlaştırmak için küçük, yönetilebilir tutar kullanın.

<span id="set-a-cost-and-attention-budget" data-ginger-heading="maliyet-ve-dikkat-bütçesi-belirleyin" aria-hidden="true"></span>

## Maliyet ve dikkat bütçesi belirleyin

Her iki ücret bileşenini ve tekrarlanan turların işleyişini inceleyin. Amaçlanan gizlilik iyileşmesi için ne kadar harcamaya razı olduğunuzu ve sonucu ne sıklıkta inceleyeceğinizi belirleyin. Yerel anonimlik hedefi kontrol parametresidir; ücret teklifi veya rakip hakkında ölçülebilir garanti değildir.

Ginger’ın durdurma eşiği bazı ekonomik olmayan otomatik katılımları önleyebilir. Zaman tercihi ve ücret eşiği pahalı koşullarda katılımı azaltabilir. Bu ayarlar, birçok turda harcayabileceğiniz toplam tutarın evrensel üst sınırı değildir.

<span id="plan-the-next-spend" data-ginger-heading="sonraki-harcamayı-planlayın" aria-hidden="true"></span>

## Sonraki harcamayı planlayın

Yeni hedef isteyin, yararlı yerel etiketleri tutun ve seçili girdileri inceleyin. Cüzdan daha basit görünsün diye oluşan her çıktıyı düşünmeden birleştirmeyin. Satıcı veya borsa kimliğinizi öğrenecekse ödemeden önce bu açıklamayı anlayın.

Başka sağlayıcının reklamını yaptığı kabulü kalıcı saymayın. Hizmet politikasını değiştirebilir veya aktarım hakkında sorular sorabilir. Ginger işlemin gelecekte kabulünü onaylayamaz veya CoinJoin’in tüm geçmiş ilişkileri kaldırdığını garanti edemez.

<span id="try-the-released-workflow-deliberately" data-ginger-heading="yayımlanan-süreci-bilinçli-deneyin" aria-hidden="true"></span>

## Yayımlanan süreci bilinçli deneyin

Amaç, yedek ve maliyetler açık olduğunda eşitlenmiş yazılım cüzdanını açın, **Coinjoin Settings** bölümünü inceleyin ve elle başlatma ile **Automatically start coinjoin** arasında karar verin. Durumu izleyin ve geçmişte tamamlanan turu inceleyin. Davranış veya bakiye değişimi beklediğinizden farklıysa duraklatıp devam etmeden önce araştırın.

Kararın varsayımları için [CoinJoin yaparken neye güvendiğinizi](/tr/learn-coinjoin/trust-and-limits/) okuyun. Anahtar kontrolünü, işlem gizliliğini, hizmet kullanılabilirliğini ve çalıştırdığınız yazılıma güveni ayırır.
