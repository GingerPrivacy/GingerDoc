---
doc_id: "settings-network.full-node-fees"
title: "Kendi Bitcoin düğümünüzü kullanın ve ücret tahminlerini seçin"
description: "Ginger blok indirmelerini kontrol ettiğiniz düğümden yapacak şekilde ayarlayın, isteğe bağlı dahili Bitcoin Core özelliğini inceleyin ve ücret oranı sağlayıcısı seçin."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Önce normal bağlantı ve eşitleme durumunu kontrol edin.

Kendi Bitcoin düğümünüzü kullanmak blok verisi için halka açık eşlere bağımlılığı azaltabilir. Depolama, bant genişliği, kullanılabilirlik ve bakım sorumlulukları da ekler. İsteğe bağlı tam düğümü açmadan Ginger kullanabilirsiniz.

<span id="start-the-bundled-node" data-ginger-heading="dahili-düğümü-başlatın" aria-hidden="true"></span>

## Dahili düğümü başlatın

**Settings** → **Bitcoin** bölümündeki seçeneğin adı **(EXPERIMENTAL) Run Bitcoin Core on startup**. 2.0.26 sürümü Bitcoin Core 31 içerir. Dahili düğüm ve kurulu sürümle eşleşen talimatlar kullanın.

1. Yeterli alanı ve güvenilir depolaması olan **Bitcoin Core Data Folder** seçin. İlgisiz klasöre yönlendirmeyin veya iki düğüm sürecinin aynı dizini eşzamanlı yönetmesine izin vermeyin.
2. **(EXPERIMENTAL) Run Bitcoin Core on startup** etkinleştirin ve istendiğinde Ginger’ı yeniden başlatın.
3. Düğümün ilk eşitlemesinin ilerlemesine izin verin. Bağlantı ve indirme durumunu izleyin; ilk eşitleme uzun sürebilir.
4. Ginger çıktıktan sonra düğümün çalışmasını isteyip istemediğinize göre **Stop Bitcoin Core on shutdown** ayarlayın.

Sadece eksik cüzdan bakiyesini düzeltmek için bu seçeneği açmayın. Düğüm bilinmeyen parolayı kurtaramaz veya etiketleri geri getiremez. Mevcut düğüm dizini değerli yapılandırma ve kendi cüzdanlarını içerebilir; yöneten uygulamayı değiştirmeden önce yedeğini koruyun.

Tam düğüm blokları yerel doğrulayabilir; ancak bu Ginger’ın koordinatör, 2FA, alım/satım veya diğer hizmet bağımlılıklarını kaldırmaz. Borsaya gönüllü açıkladığınız işlemi de gizlemez.

<span id="connect-to-an-existing-node" data-ginger-heading="mevcut-düğüme-bağlanın" aria-hidden="true"></span>

## Mevcut düğüme bağlanın

Dahili düğümün başlangıç seçeneği kapalıyken **Bitcoin P2P Endpoint**, blok indirmek için kontrol ettiğiniz düğümü belirtmenizi sağlar. Erişilebilir sunucu adresini ve P2P portunu girin. Aynı bilgisayardaki ana ağ Bitcoin Core düğümünde, gerçekten orada dinliyorsa normal uç nokta `127.0.0.1:8333` olur. Alan blok gezgini URL’si veya RPC kimlik bilgisi değil, Bitcoin eş uç noktası alır.

Düğümün cüzdan bağlantısına izin verdiğinden ve gereken blok verisine sahip olduğundan emin olun. Budanmış düğüm kurtarılan cüzdanın ihtiyaç duyduğu eski blokları tutmayabilir. Geçmiş taraması takılırsa tüm düğüm yapılandırmalarının birbirinin yerine geçebileceğini varsaymak yerine kullanılabilirliği kontrol edin.

Uzak düğüm bağlantısının kendi ağ ifşası vardır. Anladığınız düğümü ve iletişim yolunu kullanın; yalnızca uç nokta ayarlamak her bağlantının gizli olduğunu kanıtlamaz. Cüzdan bağlantısı çalışsın diye yönetici RPC erişimini halka açık internete açmaktan kaçının.

<span id="choose-fee-estimates-separately" data-ginger-heading="ücret-tahminlerini-ayrı-seçin" aria-hidden="true"></span>

## Ücret tahminlerini ayrı seçin

**Fee Rate Provider**, **Mempool Space**, **Blockstream Info** ve **Full Node** sunar. Halka açık sağlayıcılar ağ koşullarını gördükleri biçimde tahminler sunar. Tam düğüm seçimi Ginger’ın çalışan düğüm/RPC entegrasyonunu gerektirir; yalnızca P2P uç noktası girmek RPC ücret tahmininin yapılandırıldığı kanıtı değildir.

**Full Node** seçiliyken düğüm kullanılamıyorsa v2.0.26 ücret tahmininin kullanılamadığını bildirir ve ödeme sürecinde elle girişe yine izin verir. Düğümü bekleyebilir, çalışan tahmin sağlayıcısı seçebilir veya güvenmek için gerekçeniz olan oranı girebilirsiniz. Genel bağlantı onarımı olarak devasa ücret kullanmayın.

Ücret tahminleri blok alanı rezervasyonu değil, öngörüdür. Sağlayıcılar arasındaki fark farklı mempool gözlemlerini yansıtabilir. Gösterilen oran kadar toplam işlem ücretini de inceleyin.

<span id="dust-threshold" data-ginger-heading="toz-eşiği" aria-hidden="true"></span>

## Toz eşiği

Yine **Settings** → **Bitcoin** altındaki **Dust Threshold**, cüzdanın çok küçük gelen tutarları ele alışını kontrol eder. Ağ aktarma politikasından, CoinJoin durdurma eşiğinden ve koordinatörün en düşük girdi tutarından farklıdır. Artırmak cüzdanın hangi küçük ödemeleri işlediğini etkileyebilir; blok zinciri çıktılarını silmez veya birinin göndermesini durdurmaz. Beklenmedik eksik küçük ödemeyi araştırırken önceki ayarınızı koruyun.
