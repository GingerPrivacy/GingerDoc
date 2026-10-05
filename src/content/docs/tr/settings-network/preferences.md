---
doc_id: "settings-network.preferences"
title: "Görünüm, dil ve günlük ayarlar"
description: "Ginger dilini, görüntüleme biçimlerini, arka plan davranışını, tarayıcı tercihlerini ve gizli görüntüleme modunu cüzdan güvenliğiyle karıştırmadan değiştirin."
lang: tr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Okuma düzeyi: Günlük kullanım. Anlattığı göreve ihtiyacınız olduğunda bu rehberi seçin.

Uygulama genelindeki tercihler için **Settings**, seçili cüzdanın adı, CoinJoin yapılandırması ve araçları için **Wallet Settings** kullanın. Uygulama araması simgenin konumuna bağlı kalmadan **Data Folder**, **Wallet Info** ve **Discreet Mode** gibi eylemleri bulabilir.

<span id="language-and-amounts" data-ginger-heading="dil-ve-tutarlar" aria-hidden="true"></span>

## Dil ve tutarlar

**Settings** → **Appearance** bölümünde **Language** arayüz dilini seçer. 2.0.26 sürümü İngilizce, İspanyolca, Macarca, Fransızca, Çince, Almanca, Portekizce, Türkçe ve İtalyanca sunar. Yeniden başlatma istemlerini izleyin. Bu kılavuzun İngilizce aslı, yayımlanan İngilizce etiketleri kullanır; çevrilmiş etiketler farklı olabilir.

**Dark mode** görünümü değiştirir. **Exchange currency** referans itibari para görüntüsünü değiştirir; ondalık ve grup ayırıcıları, Bitcoin kesir gruplaması ve **Fee display unit** sayı sunumunu kontrol eder. Bunlar alttaki BTC tutarını veya ağın işlem ücretini değiştirmez. Bilmediğiniz biçimde tutar girmeden önce ayarlardaki örnekleri okuyun.

## Discreet Mode

Biri ekranınızı görebiliyorsa **Discreet Mode** kullanın. Sıradan gözlemi azaltmak için desteklenen hassas görüntü alanlarını gizler. Ekran paylaşmadan önce gerçekte neyin gizlendiğini kontrol edin: her pencerenin, adresin veya harici uygulamanın gizlenmesi garanti değildir.

Discreet Mode dosyaları şifrelemez, cüzdanı kilitlemez, imzalamayı durdurmaz veya blok zinciri gizliliğini değiştirmez. Bilgisayara erişen kişi uygulamayla yine etkileşebilir. Uzaklaşırken işletim sisteminin ekran kilidini kullanın.

<span id="general-settings" data-ginger-heading="genel-ayarlar" aria-hidden="true"></span>

## Genel ayarlar

| Ayar | Pratik etkisi |
| --- | --- |
| **Run Ginger when computer starts** | Ginger’ı işletim sistemi oturumuyla açar. |
| **Run in background when window closed** | Pencere kapandıktan sonra uygulamanın etkin kalmasına izin verir. Bu nedenle CoinJoin ve eşitleme devam edebilir. |
| **Auto copy addresses** | Görüntülenen adresi otomatik panoya koyabilir. |
| **Auto paste addresses** | Adres giriş süreçlerinde pano içeriğini kullanabilir. Oluşan hedefi her zaman inceleyin. |
| **Auto download new version** | Mevcut güncellemenin alınmasını kontrol eder; kurulum istemini ayrıca izleyin. |
| **Browser used by Ginger** | Harici sayfalarda kullanılan tarayıcıyı seçer; özel seçenek **Custom browser path** sunar. |

Pano kolaylığı alıcının kimliğini doğrulamaz. Diğer uygulamalar pano verisini okuyabilir veya değiştirebilir. Normal alma veya gönderme sırasında kurtarma kelimelerini panoya asla koymayın.

Harici sayfalar seçili tarayıcının kendi ağ ve gizlilik davranışını kullanır. Ginger Tor kullanıyor olsa bile alım/satım sağlayıcısı kimlik bilgisi isteyebilir. Görüntü veya tarayıcı tercihini değiştirmek sağlayıcının kayıtlarını değiştirmez.

<span id="wallet-information-and-tools" data-ginger-heading="cüzdan-bilgileri-ve-araçlar" aria-hidden="true"></span>

## Cüzdan bilgileri ve araçlar

**Wallet Info** hesap ve genişletilmiş açık anahtar bilgisini gösterebilir. Genişletilmiş açık anahtar doğrudan coin harcayamaz, ancak birçok ilişkili adresi açıklayabilir. Halka açık destek isteğinde paylaşmayın.

**Wallet Settings** → **General** altında ad kontrolünü cüzdanı yeniden adlandırmak için kullanın. **Tools** altında **Verify Recovery Words** erişilebilir yazılım cüzdanının yedeğini kontrol eder, **Resync** görünümünü yeniden oluşturur, **Delete Wallet** onay süreciyle yerel cüzdanı kaldırır. Silmek bitcoini yok etmez, kurtarma kelimelerini iptal etmez veya yedeğin yerini almaz. Yerel erişimi kaldırmadan önce çalışan kurtarma bilgilerini saklayın.
