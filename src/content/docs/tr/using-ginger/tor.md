---
doc_id: "settings-network.tor-sync"
title: "Tor, eşitleme ve ağ gizliliği"
description: "Ginger’ın nasıl bağlandığını, Tor’un neleri koruduğunu ve cüzdan faaliyetlerini açıklamadan yavaş eşitlemenin nasıl araştırılacağını anlayın."
lang: tr
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Okuma düzeyi: Günlük kullanım. Anlattığı göreve ihtiyacınız olduğunda bu rehberi seçin.

Ginger işlemlerinizi bulmak, ödemeleri yayınlamak ve CoinJoin’e katılmak için ağ verisine ihtiyaç duyar. Tor dahil edilmiştir ve normal ağ bağlantıları için varsayılan olarak açıktır. IP adresinizi iletişim kurduğunuz hizmetlerden ayırmaya yardımcı olur; ancak halka açık Bitcoin tutarlarını ve işlemlerini gizlemez.

<span id="tor-settings" data-ginger-heading="tor-ayarları" aria-hidden="true"></span>

## Tor ayarları

**Settings** → **Security** bölümünü açıp **Network anonymization (Tor)** seçeneğini bulun. Normal gizli kullanım için açık tutun. Çalışan ağ yapılandırması ayarlarla eşleşsin diye istendiğinde yeniden başlatın. Ginger’ın 2FA özelliği Tor gerektirir; arayüz 2FA açıkken Tor’u kapatmayı kısıtlar.

**Terminate Tor when Ginger shuts down** Tor’un kapanma davranışını kontrol eder. Cüzdan arka planda çalıştığı veya Tor kapanmaya ayarlanmadığı için cüzdan penceresi kapandıktan sonra Tor süreci kalabilir. Pencereyi kapatmak ve uygulamadan çıkmak farklı eylemlerdir.

Tor’u kapatmak, iletişim kurulan hizmetlere ve eşlere açıklanan bilgiyi değiştirir. Zararsız bir performans ayarı değildir. Özellikle koordinatöre veya işlem yayın eşine bağlantılar ağ adresinizle ilişkilendirilebilir. Bekleyen CoinJoin’e rutin yanıt olarak kapatmayın.

Ginger’ın Tor bağlantısı harici tarayıcıyı Tor Browser yapmaz. Sağlayıcı sayfaları, blok gezginleri ve diğer bağlantılar yapılandırılmış tarayıcıyı kullanır. İsteklerinin cüzdan ağ korumasını devraldığını varsaymadan önce tarayıcıyı ayrı inceleyin.

<span id="what-synchronization-does" data-ginger-heading="eşitleme-ne-yapar" aria-hidden="true"></span>

## Eşitleme ne yapar?

Ginger olası ilgili blokları bulmak için kompakt blok filtreleri kullanır ve indirdiği blok verisini cüzdan için yerel işler. Bu, tüm adreslerinizin listesini halka açık cüzdan sunucusuna gönderme ihtiyacını azaltır. Yine de veri için ağ hizmetlerine ve eşlere, yerel yazılımın doğruluğuna bağlıdır.

İlk kullanım ve kurtarma yakın zamanda kullanılmış cüzdanı yeniden açmaktan uzun sürebilir. İlerleme bağlantı kurmayı, filtreleri almayı, blok indirmeyi ve cüzdanı işlemeyi içerebilir. Kurtarılmış cüzdan tarama bitene kadar geçici olarak eksik geçmiş gösterebilir veya eylemleri gizleyebilir.

Tam düğüm çalıştırmak ve cüzdanı eşitlemek ayrı işlerdir. İsteğe bağlı tam düğüm blok zincirini doğrular; cüzdan sonra kendi işlemlerini bulmalıdır. Tam düğümün eşitlenmiş olması yeni kurtarılan cüzdanın taramayı bitirdiği anlamına gelmeyebilir.

<span id="when-synchronization-appears-stuck" data-ginger-heading="eşitleme-takılmış-göründüğünde" aria-hidden="true"></span>

## Eşitleme takılmış göründüğünde

1. Tam durumu ve zamanla değişip değişmediğini kontrol edin. Büyük kurtarma taraması **Awaiting connection** durumundan farklıdır.
2. Bilgisayarın internet erişimini, tarih ve saatin doğruluğunu ve diskte yer olduğunu doğrulayın. Ginger’ın verilerini yazma iznini kontrol edin.
3. Tam düğüm yapılandırdıysanız erişilebilir ve eşitlenmiş olduğunu kontrol edin. Cüzdan kimlik bilgilerini değiştirmek yerine yapılandırılmış uç noktayı tekrar inceleyin.
4. Bağlantı takılı kalıyorsa Ginger’ı normal kapatıp bir kez yeniden açın. Hata dönerse hata metnini ve günlük bağlamını koruyun.

Ağınızda Tor engelleniyorsa [Tor Projesi bağlantı rehberine](https://support.torproject.org/) başvurun. Yayımlanan Ginger ayarları belgelenmiş köprü yapılandırma sihirbazı sunmaz. Tor Browser ayarlarını rastgele Ginger alanlarına kopyalayıp çalıştığını varsaymayın.

**Wallet Settings** → **Tools** → **Resync** yolunu yalnızca cüzdan görünümünü yeniden oluşturma gerekçesi varsa kullanın. Önce yedekleri koruyun ve başka taramanın tamamlanmasını bekleyin. Veri klasörünü silmek ilk sorun giderme adımı değildir.

<span id="separate-network-choice-from-real-funds" data-ginger-heading="ağ-seçimini-gerçek-fonlardan-ayırın" aria-hidden="true"></span>

## Ağ seçimini gerçek fonlardan ayırın

Yayımlanan **Settings** → **Bitcoin** ağ seçici Main ve RegTest sunar. RegTest yalıtılmış test ortamı içindir ve gerçek bitcoin değeri yoktur; bu kılavuz ortamı işletmeyi kapsamaz. Bu sürüm arayüzde halka açık testnet seçimi sunmaz. Ağ değiştirmek fonları aralarında taşımaz.
