---
doc_id: "backup-recovery.recovery-options"
title: "İleri düzey kurtarma: hesaplar, adres taraması ve dosyalar"
description: "Asıl kurtarma kelimelerini ve parolayı kontrol ettikten sonra Ginger kurtarma uyumluluğunu, boşluk sınırını, cüzdan JSON içe aktarımlarını ve eksik üst verileri inceleyin."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Kurtarma veya dosya düzenini değiştirmeden önce asıl kurtarma bilgilerini ve cüzdan dosyalarını koruyun.

Önce [normal kurtarma kontrollerini](/tr/backup-recovery/restore/) tamamlayın: amaçlanan cüzdan, tam olarak asıl kelimeler ve parola, bağlantı ve tarama ilerlemesi. Bu sayfa, bu kontrollerin yeterli olmayabileceği belirli nedenleri ele alır.

<span id="address-scanning-and-account-compatibility" data-ginger-heading="adres-taraması-ve-hesap-uyumluluğu" aria-hidden="true"></span>

## Adres taraması ve hesap uyumluluğu

Kurtarma ekranı 12, 15, 18, 21 veya 24 kelimelik geçerli İngilizce kurtarma kelimesi kümelerini kabul eder ve sağlama toplamlarını kontrol eder. Geçerli kelimeler tek başına başka bir uygulamanın hesabının uyumlu olduğunu göstermez.

Ödeme alınan bir adresten önce olağandışı sayıda kullanılmamış alım adresi kullandıysanız **Advanced Recovery Options**, **Minimum Gap Limit:** seçeneğini sunar. Yayımlanan kurtarma ekranında varsayılan değer 114’tür. Artırmak, daha fazla iş ve zaman karşılığında aramayı genişletebilir; yanlış kelimeleri, yanlış parolayı veya uyumsuz cüzdan biçimini düzeltmez. Yalnızca adres geçmişiniz bir neden veriyorsa daha büyük değer kullanın.

Başlangıçta başka bir uygulamayla oluşturulmuş cüzdan farklı adres türleri, hesaplar veya türetme yolları kullanabilir. BIP39 kelimeleri tek başına her cüzdanın her hesabı bulacağını garanti etmez. Ginger’ın standart ana ağ hesaplarında yerel SegWit `m/84'/0'/0'`, Taproot ise `m/86'/0'/0'` kullanır. Başka bir uygulamadaki ileri düzey kurtarma ilgili hesabı ve adres türünü desteklemelidir. Mümkün olduğunda donanım kurtarmasını bir donanım cihazında yapın.

Ginger bu sürümde SLIP39 kurtarma paylarından kurtarma sunmaz. Bir kurtarma payları grubunu tek bir BIP39 kelime listesiymiş gibi girmeyin.

<span id="import-a-file" data-ginger-heading="dosya-içe-aktarın" aria-hidden="true"></span>

## Dosya içe aktarın

Cüzdan ekleme ekranında **Import File** seçeneğini seçin ve uyumlu bir `.json` dosyası seçin. Kullanılan bir ad varsa Ginger farklı bir ad isteyebilir. Rastgele bir JSON dosyası, bir işlem PSBT’si veya metin dosyasına yapıştırılmış rastgele bir xpub uyumlu cüzdan yedeği değildir.

Korunan, içe aktarılmış bir yazılım cüzdanını açmak için asıl parolayı kullanın. 2FA üzerinden şifrelenmiş bir dosya, şifrelenmemiş taşınabilir yedekle aynı değildir. İlgili dosyalarını ve kimlik bilgilerini koruyun veya bunun yerine kelimelerden ve asıl paroladan kurtarın. Bir donanım dışa aktarımını içe aktarmak, imzalama için hâlâ cihaza bağlı olan bir cüzdan oluşturur.

<span id="what-recovery-does-not-restore" data-ginger-heading="kurtarmanın-geri-getirmediği-şeyler" aria-hidden="true"></span>

## Kurtarmanın geri getirmediği şeyler

Blok zinciri özel etiketleri, tüm uygulama ayarlarını veya sağlayıcı sipariş üst verilerini geri getiremez. Bunlar önemliyse eşleşen `.attr` dosyasını koruyun. Ginger çalışırken yeni kurtarılmış dosyaların üzerine eski üst verileri yazmayın. Eşlik eden verileri geri yüklemek için yardıma ihtiyacınız varsa kopyalar üzerinde çalışın ve içeriklerini herkese açık paylaşmadan dosya adlarını ve sürümü açıklayın.

Asılları saklayın ve kopyalar üzerinde çalışın. Yerel verilerle işlem yapmadan önce [cüzdan dosyası yedeklerine](/tr/backup-recovery/backup-files/) bakın.
