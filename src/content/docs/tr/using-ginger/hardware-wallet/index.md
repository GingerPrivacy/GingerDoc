---
doc_id: "hardware-wallets.connect"
title: "Donanım cüzdanı bağlayın ve kullanın"
description: "Desteklenen donanım cüzdanını Ginger’a bağlayın, alım adreslerini cihazda doğrulayın ve ödemeleri güvenli onaylayın."
lang: tr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="does-ginger-support-hardware-wallets"></span>

> Okuma düzeyi: Günlük kullanım. Anlattığı göreve ihtiyacınız olduğunda bu rehberi seçin.

Donanım cüzdanı imzalama anahtarlarını ayrı cihazda tutar. Ginger bakiyesini gösterip işlemleri hazırlayabilir; cihaz desteklenen imzalama işlemlerini yetkilendirir. Masaüstü hâlâ hassas açık bilgileri işler; donanımda saklama cüzdan faaliyetini anonim yapmaz.

<span id="compatibility-in-this-release" data-ginger-heading="bu-sürümde-uyumluluk" aria-hidden="true"></span>

## Bu sürümde uyumluluk

Ginger 2.0.26, Hardware Wallet Interface (HWI) 3.2.0 içerir. Ginger’da tanınan cihazlar Coldcard, Ledger Nano S, Nano S Plus ve Nano X, Trezor One, Model T, Safe 3 ve Safe 5, BitBox01, BitBox02, KeepKey ve Blockstream Jade’dir. Tanınma, her cihazın, aygıt yazılımının, parola sürecinin ve adres türünün grafik arayüzde çalışacağını garanti etmez.

[HWI 3.2.0 cihaz matrisi](https://github.com/bitcoin-core/HWI/blob/3.2.0/docs/devices/index.rst) alttaki iletişim katmanının yeteneklerini açıklar. Ginger bir alt kümesini sunar: örneğin normal cihaz bağlantısı yerel SegWit hesabını içe aktarır. HWI’ın çoklu imza veya Taproot desteği tek başına karşılık gelen Ginger cüzdan kurulum süreci oluşturmaz.

Önemli fonları taşımadan önce kullandığınız cihazın bağlanabildiğini, alım adresi gösterebildiğini ve küçük test ödemesini imzalayabildiğini doğrulayın. Cihaz Ginger’ın tamamlayamadığı PIN veya parola giriş yöntemi gerektiriyorsa desteklenen cihaz tarafı sürecini tamamlayın veya üreticiye danışın. Çözüm olarak cihazın kurtarma kelimelerini Ginger’a yazmayın.

<span id="add-the-device" data-ginger-heading="cihazı-ekleyin" aria-hidden="true"></span>

## Cihazı ekleyin

1. Üreticinin talimatlarıyla donanım cüzdanını başlatıp yedekleyin. Güvenilir aygıt yazılımı ve veri aktarabilen USB kablosu kullanın.
2. Her seferinde tek cihaz bağlayın, kilidini açın ve gerekiyorsa Bitcoin uygulamasını açın. USB bağlantısını tutabilecek diğer cüzdan uygulamalarını kapatın.
3. Ginger’ın cüzdan ekleme ekranında **Hardware Wallet** seçeneğini seçin ve istenirse cüzdan adı verin.
4. Algılama ve cihaz istemlerini izleyin. Ginger daha önce eklediğiniz cüzdanı tanıyıp kopyasını oluşturmak yerine açmayı önerebilir.
5. Ginger’ın eşitlenmesini bekleyin. Seçili ağın ve hesabın amaçladığınız olduğunu doğrulayın.

Ginger donanım bağlı olmadan bilgisayarda açık cüzdan kaydı tutabilir. Kayıt gözlem ve adres oluşturmayı sağlar; harcama yine imzalama cihazı veya anahtarların geçerli kurtarılmasını gerektirir.

<span id="receive-and-verify" data-ginger-heading="alın-ve-doğrulayın" aria-hidden="true"></span>

## Alın ve doğrulayın

**Receive** seçeneğini seçin, etiket ekleyin ve adres oluşturun. Varsa **Show on the hardware wallet** kullanın. Paylaşmadan önce cihazda görünen tam adresi Ginger adresiyle karşılaştırın. Cihaz ve masaüstü uyuşmuyorsa durun: farklı adresi onaylamak fonları cüzdanınızın dışına gönderebilir.

Masaüstü ele geçirilmiş olsa bile inandırıcı adres gösterebilir. Cihaz ekranı cihazın kendi anahtarlarına karşı ayrı kontrol sağladığı için yararlıdır. İlişkisiz alımları bağlamamak için her ödeme için yeni adres kullanın.

<span id="send-and-approve" data-ginger-heading="gönderin-ve-onaylayın" aria-hidden="true"></span>

## Gönderin ve onaylayın

Ginger’da ödeme hazırlayıp alıcıyı, tutarı, para üstünü ve ücreti inceleyin. Donanım cüzdanında imzalamanızı istediği şeyi inceleyin. Hedef veya tutar amacınızdan farklıysa ya da cihaz açıklayamadığınız para üstü/çıktı koşulu bildiriyorsa isteği reddedin.

İmzalama bitene kadar cihazı bağlı tutun. Ardından yayın ve onay için Ginger işlem geçmişini kontrol edin. Cihazı çıkarmak zaten yayınlanan işlemi iptal etmez.

<span id="coinjoin-and-other-limits" data-ginger-heading="coinjoin-ve-diğer-sınırlar" aria-hidden="true"></span>

## CoinJoin ve diğer sınırlar

Donanım cüzdanı otomatik Ginger CoinJoin’in kaynak imzalama cüzdanı olamaz. Yüklü donanım cüzdanı yazılım cüzdanının CoinJoin çıktı hedefi olarak görünebilir; bu alım rolüdür ve seçimi yeniden başlatmada sıfırlanır. Yalnızca Ginger’ın gerçekten sunduğu hedefi kullanın ve güvenmeden önce kontrolü doğrulayın.

[Borsadan soğuk depolamaya rehberi](/tr/hardware-wallets/exchange-to-cold-storage/), uygun CoinJoin çıktılarının doğrudan alımını sonraki normal aktarımla karşılaştırır. Yalnızca gizli coinlerle başlangıç kısıtını ve iki cüzdanı uzlaştırma kontrollerini içerir.

Bu sürümde donanım cüzdanları için PayJoin gönderimi reddedilir. Mesaj imzalama cihaz ve doğrulayıcı uyumluluğuna bağlıdır. Ne cihaz ne Ginger onaylanmış ödemeyi geri alabilir. Dosyayla imzalama için [PSBT sürecini kullanın](/tr/hardware-wallets/psbt/) rehberini okuyun.

<span id="connection-problems" data-ginger-heading="bağlantı-sorunları" aria-hidden="true"></span>

## Bağlantı sorunları

Çalıştığı bilinen veri kablosu, doğrudan USB portu ve tek kilidi açık cihaz deneyin. Linux’ta üreticinin geçerli udev/USB izin talimatlarını izleyip yeniden bağlayın. Kalıcı çözüm olarak cüzdanı root ile çalıştırmayın. Farklı parola beklenmeyen boş hesabı açıyorsa cihazı sıfırlamak yerine asıl cihaz parolasını kontrol edin.
