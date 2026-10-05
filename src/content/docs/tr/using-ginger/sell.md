---
doc_id: "buy-sell.sell-and-orders"
title: "Bitcoin satın ve sağlayıcı siparişlerini çözün"
description: "Ginger satış siparişini sağlayıcının tam tutarı ve adresiyle tamamlayın, durumu takip edin ve doğru destek hizmetine başvurun."
lang: tr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="how-it-works"></span>
<span id="step-1-selecting-your-country"></span>
<span id="step-2-entering-purchase-amount"></span>
<span id="step-3-choosing-an-offer"></span>
<span id="step-4-completing-the-transaction"></span>
<span id="step-5-viewing-transaction-history"></span>
<span id="bitcoin-purchase-faq"></span>
<span id="how-can-i-sell-bitcoin-through-ginger-wallet"></span>
<span id="do-i-need-to-select-my-country-before-selling-bitcoin"></span>
<span id="how-do-i-enter-the-amount-i-want-to-sell"></span>
<span id="are-there-minimum-and-maximum-limits-for-sales"></span>
<span id="how-do-i-choose-the-best-offer-for-my-sale"></span>
<span id="what-happens-after-i-accept-an-offer"></span>
<span id="how-do-i-complete-the-bitcoin-sale-transaction"></span>
<span id="can-i-view-my-past-sales"></span>
<span id="what-does-it-mean-if-a-transaction-is-on-hold"></span>
<span id="can-i-change-the-browser-used-for-redirection"></span>

> Okuma düzeyi: Günlük kullanım. Anlattığı göreve ihtiyacınız olduğunda bu rehberi seçin.

Satış bitcoini sağlayıcının sunduğu ödeme yöntemi karşılığında bozdurur. Ginger teklif almaya ve zincir üstü ödemeyi hazırlamaya yardımcı olur; itibari para ödemesini ve sipariş incelemesini sağlayıcı kontrol eder. Fonları taahhüt etmeden gereksinimlerini okuyun.

<span id="create-and-fund-a-sale" data-ginger-heading="satış-oluşturup-fonlayın" aria-hidden="true"></span>

## Satış oluşturup fonlayın

1. Harcanabilir bitcoini olan eşitlenmiş cüzdanı açıp **Sell** seçeneğini seçin. Eylem yoksa kurtarma ilerlemesini ve cüzdanın gönderip gönderemediğini kontrol edin.
2. İstendiğinde ülkenizi veya bölgenizi seçin. Satılacak tutarı ve almak istediğiniz ödeme para birimini girin. Gösterilen birimleri ve sınırları kontrol edin.
3. **Continue** seçeneğini seçin, **Offers** listesini ödeme yöntemiyle filtreleyin ve sağlayıcının net ödemesiyle masrafları karşılaştırın.
4. **Accept** seçeneğini seçin. Tam Bitcoin hedefini, tutarı ve varsa son ödeme zamanını alana kadar sağlayıcının tarayıcı adımlarını tamamlayın.
5. Ginger satış penceresine dönüp **Send** seçeneğini seçin. Sağlayıcının verdiği hedefi ve tam tutarı girin veya doğrulayın. Tarayıcının her alanı otomatik doğru doldurduğunu varsaymayın.
6. Onaylamadan önce işlem ücretini ve alıcı tutarını inceleyin. Sağlayıcının istediği tutar ücret kesintisinden sonra ulaşmalıdır; “tümünü gönder” eylemini yanlışlıkla sabit faturanın ödemesi saymayın.
7. İlerleme için geçmişi ve **Previous Orders** bölümünü kontrol edin. Sağlayıcı sipariş kimliğini ve işlem kimliğini kayıtlarınız için saklayın.

Satış penceresi sağlayıcı bağlamını korur; ödeme isteğini önizlemeyle karşılaştırma sorumluluğunuzu kaldırmaz. Teklif göndermeden önce sona ererse eski adrese tahminen ödeme yapmak yerine sağlayıcıdan güncel talimat alın.

<span id="understand-status" data-ginger-heading="durumu-anlayın" aria-hidden="true"></span>

## Durumu anlayın

| Sipariş ayrıntılarındaki durum | Yapılacaklar |
| --- | --- |
| **Created** | Sipariş var; yeniden ödemeden önce kalan sağlayıcı adımlarını kontrol edin. |
| **Pending** | İşleme sürüyor. Sağlayıcı durumunu ve cüzdan geçmişini karşılaştırın. |
| **Your transaction is on hold. Please contact Support.** | Sipariş kimliğiyle seçili sağlayıcıya başvurun. Ginger incelemesini kaldıramaz. |
| **Expired** | Eski teklif veya ödeme adresinin kullanılabilir kaldığını varsaymayın. Fonlar zaten gönderildiyse sağlayıcıya sorun. |
| **Failed** | Yeni sipariş denemeden önce ödeme veya bitcoin aktarılıp aktarılmadığını kontrol edin. |
| **Refunded** | Sağlayıcıyla iade yöntemini, hedefini ve gerçekleşmesini doğrulayın. |
| **Completed** | Beklenen bitcoin alımını veya itibari para ödemesini ilgili cüzdan veya ödeme hesabında doğrulayın. |

Durum etiketleri sağlayıcı entegrasyonunun son bilgisini yansıtır ve olayların gerisinde kalabilir. **Buy** veya **Sell** üzerindeki bekletme göstergesi dikkat isteyen siparişi belirtir; kayıp cüzdan anahtarını belirtmez.

<span id="which-support-channel-to-use" data-ginger-heading="hangi-destek-kanalı-kullanılmalı" aria-hidden="true"></span>

## Hangi destek kanalı kullanılmalı?

Kimlik kontrolleri, ödeme gecikmeleri, kabul edilen ödeme yöntemleri, iade koşulları veya bekletilen sipariş için sağlayıcının kimliği doğrulanmış sitesinden başvurun. Sipariş kimliğini ve yalnızca o durum için gereken işlem bilgisini verin. Özel hesap ayrıntılarını halka açık GitHub sorunlarına koymayın.

Ginger çökmesi, tarayıcı açılmaması veya yanlış gösterilen sipariş için uygulama sürümünü, işletim sistemini, hata metnini ve adımları Ginger’ın resmî destek bağlantılarından bildirin. Kurtarma kelimeleri, parolalar, 2FA sırları, cüzdan dosyaları veya içerikleri incelenmemiş tam günlükleri eklemeyin.

<span id="privacy-and-fees" data-ginger-heading="gizlilik-ve-ücretler" aria-hidden="true"></span>

## Gizlilik ve ücretler

Sağlayıcı ödeme isteğini verdiğiniz kimlik veya ödeme yöntemiyle ilişkilendirebilir. CoinJoin’den geçmiş fonları harcamak kaydı kaldırmaz; sağlayıcı kendi kabul politikasını uygulayabilir. Ginger her borsanın her işlem geçmişini kabul edeceğini garanti edemez.

Teklif edilen ödemeyi bitcoin tutarı, sağlayıcının gösterilen ücreti ve ödemenizin ayrı madencilik ücretiyle karşılaştırın. Sonuncusu için yeterli harcanabilir değer tutun. Düşük bakiye, ücret artışı veya kritik CoinJoin aşamasındaki coinler, aksi halde geçerli siparişin hemen ödenmesini engelleyebilir.
