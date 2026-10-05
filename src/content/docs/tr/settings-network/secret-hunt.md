---
doc_id: "settings-network.secret-hunt"
title: "Ginger Wallet’ta Secret Hunt"
description: "Ginger Secret Hunt etkinlik sonuçlarını bulun, cüzdan katılımını kontrol edin ve etkinlik hizmetinin aldığı bilgileri anlayın."
lang: tr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Okuma düzeyi: Günlük kullanım. Anlattığı göreve ihtiyacınız olduğunda bu rehberi seçin.

**Secret Hunt**, uygun CoinJoin faaliyetiyle ilişkili etkinlik sırlarını gösteren Ginger özelliğidir. Cüzdanın gizlilik puanından ve normal bitcoin alma veya harcama sürecinden ayrıdır. Etkinlik kullanılabilirliği hizmete bağlıdır; özelliğin bulunması mevcut etkinlik, ödül veya kazanç vaat etmez.

<span id="view-and-control-participation" data-ginger-heading="katılımı-görün-ve-kontrol-edin" aria-hidden="true"></span>

## Katılımı görün ve kontrol edin

Yazılım cüzdanının menüsünü açıp **Secret Hunt** seçeneğini seçin. Pencere etkinlik sonuçlarını ağaç biçiminde gösterir; keşfedilen kelimeler veya cümleler ve etkinliğin gereken sırları toplandığında ek sır içerir. Kayıtları incelemek için etkinliği genişletin.

O cüzdanın katılımını kontrol etmek için **Enable/disable the use of this wallet for Secret Hunt.** kullanın. Yayımlanan varsayılan açıktır. Kapatmak, devre dışı görünüm için gösterilen ağacı temizler ve güncelleyicinin etkinlik uygunluk kontrollerinde o cüzdanı seçmesini durdurur. CoinJoin’i iptal etmez, blok zinciri işlemlerini silmez veya hizmete zaten gönderilen bilgiyi yok etmez.

Seçenek yalnızca izleme cüzdanlarında sunulmaz. Donanım cüzdanı CoinJoin özelliği değildir ve etkinlik sitesine kurtarma kelimeleri girmeyi gerektirmez.

<span id="what-is-shared" data-ginger-heading="neler-paylaşılır" aria-hidden="true"></span>

## Neler paylaşılır?

İstemci Ginger hizmetinden etkinlik bilgisi alır. Uygunluk kontrolünde CoinJoin işlem kimliği, seçili girdi referansı ve kriptografik sahiplik kanıtı gönderebilir. Kanıt özel anahtarı göndermeden etkinlik isteği için kontrolü gösterir. Bağlantı Tor kullansa bile bunlar uygulama düzeyinde ek açıklamalardır.

Tor ağ düzeyindeki ifşayı ele alır; istek içeriğini alıcıdan kaldırmaz. Cüzdanın bu etkinlik kontrollerinde kullanılmasını istemiyorsanız Secret Hunt katılımını kapatın. Etkinlik listesi istekleri ve normal cüzdan ağ faaliyeti cüzdan başına uygulanan bu ayardan ayrıdır.

<span id="missing-or-incomplete-results" data-ginger-heading="eksik-veya-tamamlanmamış-sonuçlar" aria-hidden="true"></span>

## Eksik veya tamamlanmamış sonuçlar

Sonuçlar etkinlik tarihlerine, uygun onaylanmış faaliyete, hizmet kullanılabilirliğine ve dönemsel güncellemelere bağlıdır. Tur yeni sır açıklamadan başarıyla tamamlanabilir. Sonuç beklemek bitcoinin eksik olduğunun kanıtı değildir.

Ödülün maliyetinizi karşılayacağı varsayımıyla ek ücretli işlemler üretmeyin. Katılmaya karar vermeden önce etkinliğin gerçek koşullarını kimliği doğrulanmış kaynaktan okuyun. Cüzdan dosyası yüklemenizi veya istenmeyen destek adresine ayrı “ödül alma ücreti” göndermenizi isteyenleri dikkate almayın.
