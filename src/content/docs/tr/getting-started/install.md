---
doc_id: "getting-started.install"
title: "Ginger Wallet kurulumu"
description: "Doğru Ginger Wallet masaüstü indirmesini seçin, uyumluluğu kontrol edin ve yayımlanan uygulamayı kurun."
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: "Ginger kurulumu"
prev:
  link: /getting-started/
  label: "Buradan başlayın"
next:
  link: /getting-started/first-wallet/
  label: "İlk cüzdanınızı oluşturun"
---

> Okuma düzeyi: Buradan başlayın. Önce temel adımlar gelir; ileri düzey kaynaklar isteğe bağlı olarak daha sonra okunabilir.

Ginger Wallet bir masaüstü Bitcoin cüzdanıdır. Bitcoinlerinizin anahtarlarını siz tutarsınız ve işlem takibini zorlaştırmak için CoinJoin kullanabilirsiniz. Bu sürüm bir mobil cüzdan, Lightning cüzdanı veya diğer kripto paralar için destek sunmaz.

Bu rehber 2.0.26 sürümünü kapsar. Yazılımı [resmî Ginger web sitesi](https://gingerwallet.io/) veya oradan bağlantı verilen [GitHub sürümü](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) üzerinden edinin. Arama reklamı, özel mesaj veya benzer adlı bir mobil uygulama güvenilir bir indirme kaynağı değildir.

<span id="choose-a-download" data-ginger-heading="i̇ndirilecek-dosyayı-seçin" aria-hidden="true"></span>

## İndirilecek dosyayı seçin

| Bilgisayar | Bu sürüm için desteklenen sistem | İndirilecek dosya |
| --- | --- | --- |
| Windows PC, x64 | Windows 10, sürüm 1607 veya üzeri; Windows 11, derleme 22000 veya üzeri | `Ginger-2.0.26.msi` |
| Apple silicon kullanan Mac | macOS 12 veya üzeri | `Ginger-2.0.26-arm64.dmg` |
| Intel işlemcili Mac | macOS 12 veya üzeri | `Ginger-2.0.26.dmg` |
| Ubuntu veya Debian, x64 | Ubuntu 22.04 veya üzeri; Debian 11 veya üzeri | `Ginger-2.0.26.deb` |
| Desteklenen diğer Linux sistemleri, x64 | Sürüm ayrıca Fedora 37 veya üzerini listeler | `Ginger-2.0.26.tar.gz` |

Mac’te **About This Mac**, yongayı veya işlemciyi belirtir. Sürüm ayrıca `win-x64`, `linux-x64`, `macOS-x64` ve `macOS-arm64` etiketli ZIP arşivleri içerir. Bu sürümde Windows ARM veya Linux ARM paketi yoktur. Başka bir işlemci için hazırlanmış arşivin çalışacağını varsaymayın.

Ginger’ın cüzdan ve eşitleme verileri için internet bağlantısına ve yazılabilir depolama alanına ihtiyacı vardır. İsteğe bağlı tam düğüm; normal cüzdan kullanımına göre çok daha fazla disk alanı, bant genişliği ve ilk eşitleme süresi gerektirir. Başlamak için tam düğüme, ayrı bir Tor kurulumuna veya geliştirici araçlarına ihtiyacınız yoktur.

<span id="install-the-application" data-ginger-heading="uygulamayı-kurun" aria-hidden="true"></span>

## Uygulamayı kurun

1. Sisteminizin paketini resmî sürümden indirin. Kaynağı, sürümü ve paket adını kontrol edin; işletim sisteminizin imza ve güvenlik kontrollerine dikkat edin. Bağımsız PGP doğrulaması için paketi açmadan önce eşleşen `.asc` dosyasını ve ayrı [ileri düzey indirme doğrulama rehberini](/tr/getting-started/verify-download/) kullanın.
2. Windows’ta `.msi` dosyasını açıp kurulum adımlarını izleyin. macOS’te `.dmg` dosyasını açıp Ginger’ı Applications klasörüne kopyalayın. Ubuntu veya Debian’da `.deb` dosyasını sistemin yazılım kurucusuyla açın. Linux arşivinin tamamını çıkarıp içerdiği uygulamayı başlatın; uygulamaya eşlik eden dosyaları bir arada tutun.
3. Ginger’ı açın. İlk bağlantı ve eşitleme için zaman tanıyın. Tor uygulamaya dahildir ve normalde cüzdanla birlikte başlar.
4. [Bir cüzdan oluşturup açın](/tr/getting-started/first-wallet/) rehberiyle devam edin.

ZIP veya tar arşivi normal kurucuyu kullanmayı gerektirmez, ancak cüzdanı tek kullanımlık hale getirmez ve bilgisayarda hiç veri bırakılmadığı anlamına gelmez. Cüzdan dosyaları uygulamadan ayrı saklanır. Bunlardan birini taşımadan veya kaldırmadan önce yedekleri koruyun.

<span id="if-your-operating-system-displays-a-warning" data-ginger-heading="i̇şletim-sisteminiz-uyarı-gösterirse" aria-hidden="true"></span>

## İşletim sisteminiz uyarı gösterirse

Yeni bir sürüm henüz güçlü bir indirme itibarı edinmemiş olabilir. Uyarı, bozuk veya güvenilmeyen bir dosyaya da işaret edebilir. Önce indirme kaynağını, eşleşen sürümü ve imzayı kontrol edin. Doğrulama başarısız olursa durun ve resmî sürümden yeniden indirin. Açıklanamayan bir uyarıyı aşmak için antivirüs korumasını veya sistem genelindeki güvenlik kontrollerini kapatmayın.

Linux’ta cihaza erişim sorunları için donanım cüzdanı üreticinizin USB izin talimatlarına bakın. Bir cüzdanın kurulması, sürekli yönetici olarak çalıştırılmasını gerektirmez.

<span id="updates-and-availability" data-ginger-heading="güncellemeler-ve-kullanılabilirlik" aria-hidden="true"></span>

## Güncellemeler ve kullanılabilirlik

[Sürüm listesi](https://github.com/GingerPrivacy/GingerWallet/releases) yayımlanan sürümleri ve değişikliklerini gösterir. **Settings** → **General** bölümündeki **Auto download new version**, güncellemelerin indirilmesini kontrol eder. Bir güncellemeyi indirmek ve kurmak farklıdır; güncelleme istemini izleyin ve Ginger’ın normal biçimde kapanmasına izin verin. Güncellemeden önce kurtarma yedeğinizi erişilebilir tutun. Uygulama dosyaları, cüzdan verileriniz kasıtlı olarak silinmeden değiştirilebilir.

Ginger’ın sunduğu güncel hizmet koşullarını, uygunluk kısıtlamaları dahil, kabul etmeden önce okuyun. Uygulamayı kurmak, bağlantılı her hizmeti kullanmaya uygun olduğunuz anlamına gelmez.
