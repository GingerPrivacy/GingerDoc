---
doc_id: "getting-started.verify-download"
title: "İndirilen Ginger Wallet dosyasını doğrulayın"
description: "Uygulamayı kurmadan önce Ginger Wallet sürüm imzasını ve imzalama anahtarının parmak izini kontrol edin."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
sidebar:
  label: "İndirilen dosyayı doğrulayın"
  badge:
    text: İleri düzey
    variant: caution
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Resmî indirmeyi ve bilgisayarınıza uygun paketi belirlemek için [kurulum rehberini](/tr/getting-started/install/) kullanın.

Ayrık bir imza, indirdiğiniz dosyanın belirli bir imzalama anahtarının sahibi tarafından imzalandığını ve imzalamadan sonra değişmediğini belirlemeye yardımcı olur. Yazılımın hatasız olduğunu kanıtlamaz. İmzalama anahtarının güvenmek istediğiniz anahtar olduğunu da belirlemelisiniz.

<span id="collect-the-matching-files" data-ginger-heading="eşleşen-dosyaları-toplayın" aria-hidden="true"></span>

## Eşleşen dosyaları toplayın

[v2.0.26 sürümünden](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) kurucunuzu veya arşivinizi ve aynı adın sonuna `.asc` eklenmiş dosyayı indirin. Bir klasörde tutun. Örneğin Windows çifti `Ginger-2.0.26.msi` ve `Ginger-2.0.26.msi.asc` dosyalarıdır. DMG, ZIP veya başka bir sürümün imzası bu MSI dosyasını doğrulamaz.

Açık imzalama anahtarını [resmî web sitesindeki](https://gingerwallet.io/) PGP bağlantısından edinin. Anahtarı `PGP.txt` olarak kaydedin. İnceleyip içe aktarmak için GnuPG gibi güvenilir bir OpenPGP uygulaması kullanın. GnuPG kurulu değilse [GnuPG’nin resmî indirme sayfasından](https://gnupg.org/download/) edinin.

<span id="check-the-fingerprint" data-ginger-heading="parmak-izini-kontrol-edin" aria-hidden="true"></span>

## Parmak izini kontrol edin

Ginger’ın bu sürüm için yayımladığı parmak izi şöyledir:

```text
FA0B 017A 3E75 CE65 CBF7 838F A8FF 3767 EDF5 DCE9
```

İndirme klasöründe açılan bir terminalde, anahtarı içe aktarmadan önce inceleyin:

```sh
gpg --show-keys --with-fingerprint PGP.txt
gpg --import PGP.txt
```

Yalnızca kısa bir anahtar kimliğini veya görünen adı değil, parmak izinin tamamını karşılaştırın. Mümkünse daha önce güvenilen bir kopya veya yerleşik başka bir Ginger kanalı üzerinden teyit edin. Anahtarı ve imzayı aynı ele geçirilmiş kaynaktan almak tek başına gerçekliği kanıtlamaz. Ginger bir anahtar değişikliği duyurursa yeni parmak izine güvenmeden önce duyuruyu doğrulayın.

<span id="verify-the-actual-download" data-ginger-heading="i̇ndirilen-asıl-dosyayı-doğrulayın" aria-hidden="true"></span>

## İndirilen asıl dosyayı doğrulayın

Windows kurucusu için şunu çalıştırın:

```sh
gpg --verify Ginger-2.0.26.msi.asc Ginger-2.0.26.msi
```

Başka bir platform için iki dosya adını da tam olarak değiştirin. Başarılı doğrulama, amaçlanan anahtardan geçerli bir imza belirlemelidir. GnuPG ayrıca anahtarın güvenilir bir imzayla onaylanmadığını belirten bir uyarı gösterebilir: bu, anahtarın kimliğini nasıl doğruladığınızla ilgilidir ve bozuk bir dosya imzasıyla karıştırılmamalıdır.

Sonuç **BAD signature** diyorsa, anahtar eksikse, parmak izi farklıysa veya doğrulama tamamlanamıyorsa indirdiğiniz dosyayı henüz açmayın. Dosya çiftinin adlarını kontrol edin, indirmeyi tekrarlayın ve sorun sürerse resmî projenin bağlantılarından yardım alın. Yalnızca bir uyarıyı kaldırmak için tanımadığınız bir anahtarı güvenilir olarak işaretlemeyin.

<span id="checksums-and-platform-signatures" data-ginger-heading="sağlama-toplamları-ve-platform-imzaları" aria-hidden="true"></span>

## Sağlama toplamları ve platform imzaları

Sağlama toplamı karşılaştırması bir indirme hatasını tespit edebilir. Güvenilmeyen bir sayfadan alınan sağlama toplamı yazılımın gerçekliğini doğrulayamaz; saldırgan hem indirmeyi hem sağlama toplamını değiştirebilir. Sürüm ayrıca sağlama toplamı verileri de sağlar; yukarıdaki eşleşen ayrık imza yöntemi seçilen tek bir paketi doğrulamak için yeterlidir.

Windows kod imzalama ve macOS imzalama veya noter onayı ek platform kontrolleri sağlar. İndirilen sürümün doğrulanmasını tamamlarlar; kurtarma kelimelerinizi koruma ve işlemleri gözden geçirme gereğinin yerini almazlar.

Doğrulama başarılı olduktan sonra [Uygulamayı kurun](/tr/getting-started/install/#install-the-application) bölümüne dönün.
