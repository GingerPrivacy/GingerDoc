---
doc_id: "learn-privacy.spending-after-coinjoin"
title: "CoinJoin sonrası harcama: uygulamalı örnekler"
description: "CoinJoin sonrası coin seçimini, para üstünü, birleştirmeyi ve nelerin görünür olabileceğini anlamak için pratik Bitcoin ödeme örnekleri kullanın."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Önce yeni alım adreslerini ve normal ödeme incelemesini anlayın.

CoinJoin girdilerle çıktılar arasındaki bağlantı belirsizliğini değiştirir. Sonraki işlem yeni bilgiler ekleyebilir. Ödemeden önce alıcının veya başka gözlemcinin hangi coinleri sizinle zaten ilişkilendirebileceğine ve önerilen ödemenin neyi açıklayacağına karar verin.

Aşağıdaki örnekler satoshi cinsinden kurgu tutarlar kullanır. Ücretler ağdan alınmamış, hesap kolaylığı için seçilmiştir. Bir coin harcanmamış işlem çıktısıdır, yani UTXO’dur; cüzdan veya Bitcoin adresiyle aynı şey değildir.

<span id="start-with-the-payment-you-need-to-make" data-ginger-heading="yapmanız-gereken-ödemeyle-başlayın" aria-hidden="true"></span>

## Yapmanız gereken ödemeyle başlayın

Ginger’da tutarları, etiketleri ve gizlilik bilgilerini incelemek için **Wallet Coins** açın. Normal ödeme için **Send** → **Manual Control**, aday coinleri seçmenizi sağlar. Aday seçmek nihai işlemin incelenmesinin yerini almaz: **Confirm** öncesi gerçekten kullanılan girdileri, gönderilen tutarı, para üstünü ve ücreti inceleyin.

Otomatik seçim ve Ginger önerileri de yardımcı olabilir. Elle kontrol, hangi müşterinin alımı zaten tanıdığı gibi cüzdanın bilemeyeceği fon bilgilerini bildiğinizde yararlıdır. Her ödeme için doğası gereği daha iyi seçim değildir.

<span id="example-1-one-coin-covers-a-purchase" data-ginger-heading="örnek-1-tek-coin-satın-alımı-karşılar" aria-hidden="true"></span>

## Örnek 1: tek coin satın alımı karşılar

Alex’in CoinJoin’den gelen 120 000 satoshilik coini vardır ve 70 000 satoshi ödemek ister. Ücretin 1 000 satoshi olduğunu varsayalım.

| İşlemin parçası | Tutar |
| --- | --- |
| Harcanan girdi | 120 000 sats |
| Satıcıya ulaşan | 70 000 sats |
| Alex’e dönen para üstü | 49 000 sats |
| Madencilik ücreti | 1 000 sats |

Satıcı ödeme adresini ve tutarını bilir. İşlemi inceleyip diğer çıktının Alex’in para üstü olduğunu çıkarabilir. Satıcı yalnızca bu işlemden Alex’in tüm cüzdan bakiyesini öğrenmez; ancak girdiyi görebilir ve olası para üstünün sonraki harcamasını izleyebilir.

Alex para üstünü elle geri taşımak zorunda değildir: zaten cüzdana aittir. Yararlı kontrol noktası, o para üstünü içeren sonraki ödemedir.

<span id="example-2-two-unrelated-receipts-are-combined" data-ginger-heading="örnek-2-ilişkisiz-iki-alım-birleştirilir" aria-hidden="true"></span>

## Örnek 2: ilişkisiz iki alım birleştirilir

Blair’ın serbest çalışmayla ilişkili 90 000 satoshilik coini ve halka açık bağış adresiyle ilişkili 80 000 satoshilik coini vardır. 2 000 satoshi ücretli 150 000 satoshilik ödeme, tek başına herhangi bir coinden fazlasını gerektirir; ikisini kullanmak 18 000 satoshi para üstü döndürür.

Normal ortak harcama iki girdinin de aynı sahibinin olduğunu düşündürebilir. Bağış tarafındaki coini zaten tanıyan biri serbest çalışma tarafındaki coin hakkında yeni ipucu edinebilir. Bu, kişinin kimliğinin otomatik kanıtı değil, işlemden ve diğer bilgilerden çıkarımdır.

Blair’ın aynı faaliyetle zaten ilişkili başka yeterli coini varsa bu daha az yeni bilgi açıklayabilir. Gereken ödemeyi yapmanın tek pratik yolu iki girdiyi kullanıyorsa seçim bir maliyet/gizlilik kararıdır. Faturayı eksik ödemeyin veya “coinleri asla birleştirme” sözünü mutlak kural saymayın.

CoinJoin ve PayJoin kendileri ortak çalışmayı içerir; tüm girdilerin tek sahibi olduğu varsayımı evrensel olarak geçerli değildir. İşlemi yorumlarken bu ayrımı koruyun.

<span id="example-3-change-carries-a-connection-forward" data-ginger-heading="örnek-3-para-üstü-bağlantıyı-ileri-taşır" aria-hidden="true"></span>

## Örnek 3: para üstü bağlantıyı ileri taşır

Alex daha sonra Örnek 1’deki 49 000 satoshi para üstünü ilişkisiz 60 000 satoshilik coinle birleştirerek 100 000 satoshi öder. Varsayılan 1 000 satoshilik ücretle 8 000 satoshi yeni para üstü döner.

İlk satıcı olası para üstü çıktısının 60 000 satoshilik girdiyle harcandığını gözlemleyebilir. Yeni alıcı adresi yeni olsa bile girdi tarafındaki ilişki kalır. Yeni çıktı adresi iki girdiyi birlikte harcama seçimini geri almaz.

Gelecekteki kararlar için bağlamı saklamak üzere etiket kullanın. Etiketler yerel notlardır; ne blok zincirinde ad yayımlar ne de gözlemcinin çıkarım yapmasını engeller.

<span id="example-4-moving-the-entire-balance-to-hardware" data-ginger-heading="örnek-4-tüm-bakiyeyi-donanıma-taşımak" aria-hidden="true"></span>

## Örnek 4: tüm bakiyeyi donanıma taşımak

Casey’nin her biri 200 000 satoshi değerinde dört coini vardır. Dördünü tek donanım alım adresine göndermek, tek işlemde 800 000 satoshilik girdileri harcar. Varsayılan 2 000 satoshi ücretle donanım cüzdanı 798 000 satoshi alır.

Donanım cüzdanı anahtar yalıtımını iyileştirir, ancak aktarım dört girdinin ortak harcamasını açığa çıkarır. Ayrı aktarımlar bu belirli ilişkiden kaçınabilir; buna karşılık ücret ve gözlemlenebilir başka zaman/tutar örüntüleri ekler. Uygun CoinJoin sırasında çıktıları doğrudan donanım cüzdanında almak sonraki aktarımı önleyebilir, ancak sürüme özgü uygunluk ve hedef kontrolleri vardır; donanımda tutulan coinleri yeniden karıştırmanın genel yolu değildir.

Coin listesi düzensiz görünüyor diye tüm bakiyeyi harcamayın. Birleştirme gelecekteki girdi sayılarını azaltabilir, ancak düşük ücret oranı yalnızca maliyeti değiştirir; ifşayı ortadan kaldırmaz.

<span id="other-participants-and-future-observations-matter" data-ginger-heading="diğer-katılımcılar-ve-gelecekteki-gözlemler-önemlidir" aria-hidden="true"></span>

## Diğer katılımcılar ve gelecekteki gözlemler önemlidir

Tek etki kendi davranışınız değildir. Diğer katılımcıların sonraki işlemleri gözlemcinin düşündüğü olasılıkları daraltabilir. CoinJoin sonrası birleştirme araştırmaları, bu gözlemleri kullanılabilir kimlik tespitine dönüştürmenin sınırlarını kabul ederek bu etkiyi inceler. Ölçümleri belirli kullanıcının izleneceğine dair olasılık değildir. [Gavenda ve çalışma arkadaşları, 2025](https://arxiv.org/html/2510.17284v1)

Gizliliği garanti eden evrensel tur sayısı veya bekleme süresi yoktur. Beklemek, kimliğinizin bilindiği satıcıya, borsaya veya başka cüzdan hizmetine zaten açıklanan bilgileri silmez.

<span id="a-short-review-before-confirming" data-ginger-heading="onaylamadan-önce-kısa-inceleme" aria-hidden="true"></span>

## Onaylamadan önce kısa inceleme

1. Alıcıyı ve gereken tutarı güvenilir kanaldan doğrulayın.
2. Nihai girdileri inceleyin ve her birini kimlerin zaten bildiğini düşünün.
3. Seçimin ayrı tutmak istediğiniz faaliyetleri birleştirip birleştirmediğini kontrol edin.
4. Para üstünü inceleyin ve sonra harcarken bağlantısını hatırlayın.
5. Yalnızca ödemeye uygun ücret ve gizlilik ödünleşimini kabul edin; belirsiz sonuçtan sonra ödemeyi tekrarlamadan önce geçmişi kontrol edin.

Cüzdan ve tarayıcı seçimleri için [gizlilik alışkanlıkları](/tr/using-ginger/address-reuse/) ve [cüzdan bilgilerinin nereye gittiğiyle](/tr/learn-privacy/information-sharing/) devam edin.
