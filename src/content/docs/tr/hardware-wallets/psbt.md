---
doc_id: "hardware-wallets.psbt"
title: "PSBT sürecini kullanın"
description: "Ginger’da Bitcoin işlemi hazırlayın, dosya kullanarak donanım cüzdanıyla imzalayın ve yayınlamak için sonucu içe aktarın."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Önce doğrulanmış donanım cüzdanı ve bağımsız yedeğini oluşturun.

Kısmen imzalanmış Bitcoin işlemi (PSBT), işlemi ve imzalayanın ihtiyaç duyduğu bilgileri taşıyan dosyadır. Masaüstünde hazırlığı donanım cüzdanında imzalamadan ayırmanızı sağlar. PSBT adresleri, tutarları ve cüzdan bilgilerini açıklayabilir; herhangi bir şey harcayabilmeden önce bile özel veri sayın.

<span id="prepare-the-wallet-connection" data-ginger-heading="cüzdan-bağlantısını-hazırlayın" aria-hidden="true"></span>

## Cüzdan bağlantısını hazırlayın

Ginger’da imzalama cihazındaki anahtarlara bağlı, uyumlu donanım cüzdanı kaydı gerekir. Desteklenen Coldcard cüzdan JSON dışa aktarımını **Import File** ile ekleyin. O aygıt yazılımı için üreticinin güncel dışa aktarma talimatlarını kullanın; PSBT işlem dosyası cüzdan içe aktarma dosyası değildir.

Dışa aktarım kurtarma kelimelerini değil, açık hesap bilgisini ve cihaz parmak izini içerir. Cüzdana fon göndermeden önce Ginger’ın alım adresinin cihazla eşleştiğini doğrulayın. Farklı türetme yolu veya parolayla içe aktarılan hesap, cihaz aynı olsa bile farklı cüzdan olabilir.

<span id="export-a-transaction" data-ginger-heading="i̇şlem-dışa-aktarın" aria-hidden="true"></span>

## İşlem dışa aktarın

1. Ginger’da donanım cüzdanını açın. **Wallet Settings** → **General** bölümünde **PSBT workflow** etkinleştirin.
2. **Send** seçeneğini seçip hedefi ve tutarı normal biçimde hazırlayın. Seçili girdileri, para üstünü ve ücreti inceleyin.
3. Önizlemede **Save PSBT file** seçeneğini seçip önerilen işlemi kaydedin. Alternatif **Send Now**, dosya süreci için kaydetmek yerine hemen imzalamayı izler.
4. Dosyayı çıkarılabilir ortam gibi desteklediği yöntemle imzalama cihazına aktarın. Cihazın talimatlarını izleyin ve güvenilir ekranında hedefi, tutarı, ücreti ve para üstünü inceleyin.
5. İmzalı sonucu asıl imzasız öneriyle karıştırmadan kaydedin.

İşlemi sırf Ginger hazırladı diye onaylamayın. Cihaz amaçlanan ödemeyi yetkilendirmelidir. Kurtarma kelimelerini hem PSBT dosyasından hem bilgisayardan uzak tutun.

<span id="import-and-broadcast" data-ginger-heading="i̇çe-aktarın-ve-yayınlayın" aria-hidden="true"></span>

## İçe aktarın ve yayınlayın

Ginger’da donanım cüzdanına dönüp PSBT süreciyle görünen **Broadcast** seçeneğini seçin. **Import Transaction** dosya penceresi PSBT ve işlem dosyaları dahil desteklenen işlem dosyalarını kabul eder. İmzalı sonucu seçip ağa göndermeden önce yayın ekranını inceleyin.

İmzasız veya eksik imzalı PSBT geçerli ödeme olarak yayınlanamaz. Girdileri zaten harcanmışsa veya ücreti artık ağ koşullarını karşılamıyorsa başarılı imza da kabulü garanti etmez. Başka ödeme oluşturmadan önce asıl cüzdanı kullanılabilir tutun, eşitleyin ve geçmişi kontrol edin.

İşlem yayınlandıktan sonra onaylanması için imzalama cihazının bağlı kalması gerekmez. Ginger’da son geçmiş kaydını ve onayları kontrol edin. İmzalı dosyayı silmek, başka tarafın zaten yayınlayabileceği işlemi iptal etmez.

<span id="handle-files-carefully" data-ginger-heading="dosyaları-dikkatli-yönetin" aria-hidden="true"></span>

## Dosyaları dikkatli yönetin

Öneriler ve imzalı sonuçlar için ayırt edilebilir dosya adları kullanın. Kendi işleminizi incelemek için PSBT’leri e-postayla göndermeyin veya çevrimiçi çözücüye yüklemeyin. Hassas hesap dışa aktarımlarını da koruyun: genişletilmiş açık anahtar doğrudan harcamayı imzalayamasa bile çok sayıda adres açıklayabilir.

Bu süreç yayımlanan donanım cüzdanı arayüzünü belgeler. Genel çoklu imza koordinatörü, geliştirici imzalama API’si veya diğer uygulamaların ürettiği her PSBT biçimiyle uyumluluk sağlamaz.
