---
doc_id: "payments.fees-and-change"
title: "İşlem ücretleri, özel oranlar ve para üstü"
description: "Ginger'da ücret oranlarını, 0.1 sat/vB düzeyine kadar özel oranları, iletim sınırlarını, ücret düşmeyi, para üstü çıktılarını ve gizlilik önerilerini anlayın."
lang: tr
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-mining-fee"></span>
<span id="what-does-the-mining-fee-depend-on"></span>
<span id="what-is-coordinator-fee"></span>

> Okuma düzeyi: İleri düzey rehber. Önce normal gönderme önizlemesini, alıcı tutarını ve ücreti anlayın.

Normal ödeme adımları için [Bitcoin gönderin](/tr/payments/send/) ile başlayın. Bu kaynak ücret kontrollerini ve para üstünü daha ayrıntılı açıklar; her ödeme için özel oran seçmek gerekmez.

<span id="understand-the-fee" data-ginger-heading="ücreti-anlayın" aria-hidden="true"></span>

## Ücreti anlayın

Ücret oranı, **Fee Rate (sat/vByte)** olarak gösterilen sanal bayt başına satoshi cinsinden ölçülür. Toplam madencilik ücreti, ücret oranının işlemin sanal boyutuyla çarpımıdır. Ödeme tutarının yüzdesi değildir. Çok sayıda küçük coini harcamak, toplam değeri aynı olan tek büyük coini harcamaktan pahalı olabilir.

İstenen onay tercihini değiştirmek veya **Custom Fee Rate** girmek için önizlemenin ücret kontrolünü kullanın. Ginger **0.1 sat/vB** düzeyine kadar oran kabul eder; tahminleri ve ücret grafiği kesirli oranları korur. Tahmini süre garanti değildir: yeni işlemler alan için rekabet eder ve bloklar düzensiz aralıklarla gelir.

Düzenleyicinin asgari değeri, işlemin iletileceğini veya bir düğümün mempool'una kabul edileceğini garanti etmez. Düğümler politikaları veya güncel mempool koşulları nedeniyle daha yüksek oran isteyebilir. Ginger eşlere yayın yaparken duyurdukları asgari oran işlemin ücret oranından yüksek olan eşleri atlar. Bu nedenle düşük bir özel oranla yayın başarısız olabilir veya işlem onaylanmadan kalabilir; kullanmadan önce ağ koşullarını ve ödemenin aciliyetini değerlendirin.

Otomatik tahminler yokken Ginger yine de elle ücret girişi sunabilir. Hangi oranın uygun olduğundan emin değilseniz çok yüksek bir sayı tahmin etmek yerine tahminlerin geri gelmesini beklemek daha uygundur. Normal işlem ücretleri ile CoinJoin koordinatör ücretleri ayrıdır.

<span id="check-who-pays-the-fee" data-ginger-heading="ücreti-kimin-ödediğini-kontrol-edin" aria-hidden="true"></span>

## Ücreti kimin ödediğini kontrol edin

[Toplu ödemede](/tr/payments/send/#pay-several-recipients-in-one-transaction) **Subtract the transaction fee from the first payment** yalnızca ilk alıcının tutarını azaltır. Girilen diğer ödeme tutarları aynı kalır. Seçenek temizlenirse tüm ödeme tutarları artı ücret için yeterli fon gerekir. Toplu ödeme düzenleyicisinde **Max** kullanmak ücret düşmeyi etkinleştirir.

Özellikle ücret oranını değiştirdikten sonra önizlemedeki nihai tutarları her zaman kontrol edin. Alıcının tam bir tutar alması gerekiyorsa o ödemeden ücret düşmek isteğin eksik ödenmesine neden olabilir. Önizleme, toplu ödemedeki her alıcının nihai tutarını ayrı listeler.

<span id="change-is-still-your-bitcoin" data-ginger-heading="para-üstü-hâlâ-sizin-bitcoininizdir" aria-hidden="true"></span>

## Para üstü hâlâ sizin bitcoininizdir

Bitcoin, UTXO da denen coinleri bütün olarak harcar. Seçili girdiler alıcı tutarı artı ücreti aşıyorsa fazlalık genellikle cüzdanınızdaki yeni bir para üstü adresine döner. Örneğin 60 000 satoshilik ödeme ve 1 000 satoshilik ücret için kullanılan 100 000 satoshilik girdi, 39 000 satoshi para üstü bırakır.

Para üstü adresi daha önce birine gösterdiğiniz alım adreslerinden farklı olabilir. Kopyalayıp dışarı çıkarmanız veya elle geri göndermeniz gerekmez. İşlem analizi para üstünü ödemeyle ilişkilendirebilir; daha sonra başka fonlarla birleştirdiğinizde bu önem taşır.

Ginger’ın gizlilik önerileri, coin seçimini veya alıcı tutarını değiştirerek para üstüsüz ödeme sunabilir. Sonucu dikkatle inceleyin. Yalnızca para üstünü kaldırmak için sabit fatura eksik ödenmemelidir.

Belirli coinleri seçmek veya bekleyen işlemi ele almak için [coin kontrolü ve geçmişe](/tr/payments/coin-control-history/) bakın.
