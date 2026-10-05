---
doc_id: "hardware-wallets.exchange-to-cold-storage"
title: "Ginger ile borsadan soğuk depolamaya"
description: "Ücretleri hesaba katıp gizliliği koruyarak bitcoin çekin, Ginger CoinJoin kullanın ve fonları doğrulanmış donanım cüzdanına taşıyın."
lang: tr
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Önce doğrulanmış donanım cüzdanı ve bağımsız yedeğini oluşturun.

Ginger, fonları donanım cüzdanında saklamadan önce gelecekteki bitcoin faaliyetini borsa çekiminden ayırmanıza yardımcı olabilir. Borsa çekim kaydını tutar. Donanım cüzdanı imzalama anahtarlarını korur; işlemler ve sonraki harcamalarınız başkalarının çıkarabileceklerini yine belirler.

İki farklı yol vardır. Çıktıların nerede görünmesi gerektiğini bilmek için başlamadan birini seçin.

| Yol | Olanlar | Temel nokta |
| --- | --- | --- |
| Yazılım cüzdanında CoinJoin, ardından normal aktarım | Fonları seçip donanıma gönderene kadar çıktılar Ginger yazılım cüzdanında kalır | Önce gizliliklerini inceleyebilirsiniz; sonraki her aktarım ücret gerektirir ve girdi/çıktı ilişkisini açığa çıkarır |
| CoinJoin çıktılarını doğrudan donanım cüzdanında almak | Uygun yazılım cüzdanı CoinJoin’i imzalar; çıktıları yüklü donanım cüzdanına gider | O çıktılar için ayrı aktarımı önler; ancak hedefinizi karşılama garantisi olmadan o turdan sonra kaynaktan ayrılırlar |

<span id="prepare-both-wallets" data-ginger-heading="i̇ki-cüzdanı-da-hazırlayın" aria-hidden="true"></span>

## İki cüzdanı da hazırlayın

1. Doğrulanmış Ginger kurulumu kullanın. Yazılım cüzdanını kurtarma kelimeleri ve asıl parolasıyla oluşturup yedekleyin. Bu cüzdanda yalnızca işlemeyi amaçladığınız tutarı tutun.
2. Donanım cüzdanını üreticinin desteklenen süreciyle başlatıp yedekleyin. [Ginger’a bağlayın](/tr/using-ginger/hardware-wallet/) ve eşitlenmesini bekleyin.
3. Donanım cüzdanında **Receive** seçeneğini seçip varsa **Show on the hardware wallet** kullanın. Cihaz ve bilgisayarda alım adresinin tamamını karşılaştırın. Yeni düzene daha büyük tutarla güvenmeden önce küçük alım ve imzalama testi tamamlayın.
4. Kaynak ve hedefi tanımak için cüzdanlara farklı adlar verin. Her biri için kurtarılabilir yedek tutun; yazılım cüzdanının yedeği farklı anahtarlı donanım cüzdanını kurtarmaz.

CoinJoin çalışsın diye donanım cüzdanının kurtarma kelimelerini Ginger’a asla yazmayın. Bu, masaüstüne donanım cüzdanının imzalama anahtarlarına erişim verir.

<span id="withdraw-from-the-exchange" data-ginger-heading="borsadan-çekin" aria-hidden="true"></span>

## Borsadan çekin

Yazılım cüzdanında **Receive** seçeneğini seçin, yararlı etiket ekleyin ve yeni adres oluşturun. Adresi borsanın Bitcoin çekme sürecine kopyalayın; orada çekimi yetkilendirmeden önce tam adresi ve ağı doğrulayın. Ginger zincir üstü Bitcoin kullanır; Lightning faturası veya başka varlığın ağı bunun yerine geçmez.

Borsa çekim ücretini ayrı kaydedin. Ginger’a ulaşan tutar borsanın düşürdüğü tutardan az olabilir. CoinJoin’e katılmasını beklemeden önce cüzdanın eşitlenmesini ve gelen fonların onaylanmasını bekleyin. İşlem kimliği uzlaştırma için yararlıdır; ancak yayımlamaktan veya halka açık blok gezginlerinde sürekli aramaktan kaçının.

<span id="route-a-review-coinjoin-results-then-transfer" data-ginger-heading="yol-a-coinjoin-sonuçlarını-inceleyin-sonra-aktarın" aria-hidden="true"></span>

## Yol A: CoinJoin sonuçlarını inceleyin, sonra aktarın

1. Kaynak cüzdanın **Coinjoin Settings** bölümünde **Coinjoin to this wallet** seçimini kaynakta bırakın. Kontrol panelinin başlatma düğmesiyle katılımı başlatmadan önce hedefi, ücret tercihlerini ve hariç coinleri inceleyin.
2. Tamamlanan turları ve coinlerin gizlilik bilgisini izleyin. Ücretleri ve ilerlemeyi incelemek için duraklatabilirsiniz. Tur kritik aşamadaysa uygulamayı sonlandırmak yerine Ginger’ın gerekli işi bitirmesine izin verin.
3. Yeni donanım alım adresi alıp cihazda doğrulayın. Yazılım cüzdanında **Send** → **Manual Control** seçip taşımak istediğiniz fonları seçin.
4. Gerçek seçili girdileri, hedefi, alıcı tutarını, para üstünü ve ücreti inceleyin. Yalnızca amacınızla eşleşiyorsa aktarımı onaylayın.
5. Donanım cüzdanının eşitlenmiş geçmişini ve kaynakta kalan coinleri kontrol edin. Tamamlandı saymadan önce aktarımın onayını bekleyin.

Her çıktıyı birlikte göndermek aralarında görünür ilişki oluşturur. Tek tek taşımak bu belirli çok girdili ilişkiden kaçınır; ancak ek ücretlere mal olur ve her aktarım için işlem açığa çıkarır. Tutarlar, zamanlama ve gözlemcinin elindeki bilgi başka bağlantılar sağlayabilir. Yönetilebilir aktarım planı seçin; iki yaklaşımın da anonimliği garanti ettiğini varsaymayın.

<span id="route-b-choose-hardware-as-the-coinjoin-destination" data-ginger-heading="yol-b-coinjoin-hedefi-olarak-donanımı-seçin" aria-hidden="true"></span>

## Yol B: CoinJoin hedefi olarak donanımı seçin

Bu yolu yazılım cüzdanında CoinJoin için uygun fonlar varken kullanın. Normal v2.0.26 süreci cüzdan veya tüm mevcut adaylar seçili gizlilik hedefine göre zaten gizli sayılıyorsa katılımı reddeder. Başka bir çıktı cüzdanı seçmek kontrolü aşmaz. Özellikle gizli olmayan her coini hariç tutmak, yalnızca tamamlanmış coinleri içeren ek turu zorlamanın güvenilir yolu değildir. Sırf durdurma koşulunu aşmak için gizlilik hedefini değiştirmek yerine o fonlarda Yol A’yı kullanın.

1. Donanım cüzdanını Ginger’a yükleyip doğrulayın. Kaynakta CoinJoin katılımını durdurun ve hedef seçici kullanılabilir olana kadar bekleyin.
2. Kaynak cüzdanın **Coinjoin Settings** bölümünü açın. **Coinjoin to this wallet** seçimini amaçlanan donanım cüzdanına ayarlayın. Yalnızca Ginger’ın sunduğu hedefi seçin.
3. CoinJoin dışında kalması gereken fonlar için **Exclude Coins** inceleyin. Hariç tutma belirli coinlere uygulanır; aynı kaynaktan gelecekteki her alımı ayırmaz.
4. Seçili hedefi tekrar kontrol edip katılımı başlatın. Turu tamamlayana kadar uygulamayı çalışır tutun.
5. Başarılı turdan sonra iki cüzdanı inceleyin. Yalnızca seçili girdiler harcanmıştır ve oluşan çıktılar birkaç coine bölünebilir. Kalan kaynak bakiyesi mutlaka başarısızlık değildir.

Hedef tamamlanan turun çıktılarını alır; bu ayar onları yönlendirmeden önce ayrı hedefe ulaşma olayını beklemez. Oluşan gizlilik bilgisini inceleyin. Donanımdaki fonlar daha sonra bu sürümün normal donanım cüzdanı süreci üzerinden CoinJoin girdisi sağlayamaz.

Hedef seçimi Ginger yeniden başlatılınca sıfırlanır. Her oturumdan önce kontrol edin. Katılım etkinken değiştiremezsiniz; işlem imzalandıktan sonra değiştirmek işlemi yönlendiremez. Kalıcı arka plan aktarım düzeni varsaymak yerine otomatik katılım ayarlarını açıkça doğrulayın.

<span id="reconcile-balances-and-plan-the-next-spend" data-ginger-heading="bakiyeleri-uzlaştırın-ve-sonraki-harcamayı-planlayın" aria-hidden="true"></span>

## Bakiyeleri uzlaştırın ve sonraki harcamayı planlayın

Kaynak azalışını donanımda alınan çıktılar ve kaynakta kalan fonlarla karşılaştırın. Fark CoinJoin maliyetlerini içerebilir. Amaçlanan hedef aldıysa sıfır kaynak bakiyesi fonların kaybolduğu anlamına gelmez. Tersine, başarılı tur her kaynak coinin taşındığı veya hedefe ulaştığı anlamına gelmez.

Daha sonra donanım cüzdanından harcarken coin seçimini yeniden inceleyin. İlişkisiz coinleri birleştirmek, imzalama anahtarları nerede saklanırsa saklansın ilişkileri açığa çıkarabilir. Yeni alıcı adresi kullanın, para üstünü inceleyin ve ödemeyi cihazda onaylayın. [PSBT süreci](/tr/hardware-wallets/psbt/) uygun donanım için desteklenen dosyayla imzalama yolu sunar; imzaladığınız işlemin gizlilik sonuçlarını değiştirmez.

İmzalama anahtarlarının zaten ele geçirildiğinden şüpheleniyorsanız kalan fonları korumak gizlilik sürecini beklemekten önceliklidir. Aynı açığa çıkmış tohumu içeren yeni cihaz o tohumu iptal etmez.
