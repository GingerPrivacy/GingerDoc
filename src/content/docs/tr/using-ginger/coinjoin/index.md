---
doc_id: "coinjoin.use-coinjoin"
title: "Ginger Wallet’ta CoinJoin kullanın"
description: "Ginger CoinJoin’i başlatın, duraklatın ve izleyin; uygun fonları anlayın ve etkin turu kesintiye uğratmaktan kaçının."
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

<span id="what-is-a-coinjoin"></span>
<span id="what-are-the-fees-for-coinjoins"></span>
<span id="do-i-need-to-trust-ginger-with-my-coins"></span>

> Okuma düzeyi: Buradan başlayın. Önce temel adımlar gelir; ileri düzey kaynaklar isteğe bağlı olarak daha sonra okunabilir.

CoinJoin, girdileriyle çıktıları arasındaki ilişkiyi çıkarmayı zorlaştırmak için diğer katılımcılarla bir Bitcoin işlemi oluşturur. Ginger yalnızca cüzdanınızın girdilerini imzalar; koordinatörün kontrol ettiği hesaba para yatırmazsınız. Başarılı turlar yine de ücret gerektirir ve anonimliği garanti etmez.

<span id="before-starting" data-ginger-heading="başlamadan-önce" aria-hidden="true"></span>

## Başlamadan önce

Yedeklenmiş bir yazılım cüzdanını açın ve eşitlenmesini bekleyin. Onaylanmış bitcoin bulundurun, bilgisayarı bağlı tutun ve başlamadan önce beklenen maliyeti inceleyin. Başarılı turlar madencilik ücreti içerir ve koordinatör ücreti de içerebilir; tekrarlanan turlar maliyet ekleyebilir. İsteğe bağlı [ileri düzey maliyet kaynağı](/tr/using-ginger/annonset/) hesaplamayı açıklar. Donanım cüzdanı normal ödeme alıp gönderebilir, ancak Ginger’ın otomatik CoinJoin sürecinin imzalama kaynağı olamaz.

Koordinatör ücreti turda girdi olarak kullanılan her coin için kontrol edilir. 0.03 BTC (3 000 000 satoshi) veya daha az değerli coinler koordinatör ücreti ödemez. Büyük coinler normalde tüm değerlerinin 0.3% kadarını öder; uygun yeniden karıştırmalar da muaf olabilir. Koordinatör ücreti sıfır olsa bile madencilik ücretleri geçerlidir.

Cüzdan onaylanmış kullanılabilir fonlara ve uygun tur koşullarına ihtiyaç duyar. Anında başlangıcı garanti eden bakiye veya bekleme süresi yoktur. Ayarları değiştirmeden önce güncel durumu okuyun.

<span id="start-and-pause" data-ginger-heading="başlatın-ve-duraklatın" aria-hidden="true"></span>

## Başlatın ve duraklatın

1. CoinJoin kontrol panelinin menüsünden **Coinjoin Settings** açın veya cüzdan açıkken Ginger aramasıyla bulun.
2. Cüzdanın maliyet tercihlerini inceleyin ve normal kullanım için çıktı hedefini bu cüzdanda bırakın. Özel hedefler ve çıktı yönlendirme isteğe bağlı ileri düzey ayar rehberindedir.
3. Koşullar izin verdiğinde gözetimsiz katılım istiyorsanız **Automatically start coinjoin** seçeneğini etkinleştirin. Elle başlatmak için kontrol panelinin başlatma düğmesini kullanın. Durdurulmuş panel **Press Play to start** gösterebilir.
4. Panelin altındaki durumu izleyin. Cüzdan katılmadan önce onayları, uygun turu veya ucuz ücretleri bekleyebilir.
5. Daha fazla katılımı durdurmak istediğinizde panelin duraklatma düğmesini kullanın. Kritik işlem aşamalarının bitmesine izin verin. Otomatik başlangıcı kapatmak gelecekteki davranışı değiştirir; zaten yayınlanmış işlemi geri almaz.

CoinJoin’i “etkinleştirdiğini” iddia eden birinin verdiği adrese bitcoin göndermeyin. Destek kişisine ayrı etkinleştirme ödemesi yoktur.

<span id="read-the-status" data-ginger-heading="durumu-okuyun" aria-hidden="true"></span>

## Durumu okuyun

| Mesaj | Anlamı ve sonraki adım |
| --- | --- |
| **Awaiting auto-start of coinjoin** | Otomatik başlangıç gecikmesi işliyor. Cüzdanı açık tutun. |
| **Awaiting confirmed funds** | Uygun gelen fonların onaylanmasını bekleyin. |
| **Awaiting cheaper coinjoins** | Maliyet tercihleriniz cüzdanı mevcut turlardan uzak tutuyor. Gevşetmeden önce ayarları kontrol edin. |
| **Skipping a round for better privacy** | Rastgele atlama etkin. Bağlantı hatası değildir. |
| **Awaiting other participants** | Kayıt sürüyor. Diğer katılımcılar da adımlarını tamamlamalıdır. |
| **Awaiting the blame round** | Önceki girişim tamamlanamadı; protokol uygun katılımcılarla yeniden deniyor. Kimseyi tanımlamanız istenmiyor. |
| **Insufficient participants, retrying...** | Girişim gerekli katılıma ulaşmadı. Başka tur bekleyin. |
| **Awaiting closure of send dialog** | CoinJoin’in sürmesini beklemeden önce ödeme sürecini bitirin veya kapatın. |
| **Coinjoin may be uneconomical** | Durdurma eşiği önem taşıyor. Fon eklemek veya elle aşmak zorunlu onarım değil, maliyetli seçimdir. |
| **Coinjoin successful! Continuing...** | Tur başarılı oldu. Cüzdanda hâlâ yapılacak iş varsa sonraki turlar gelebilir. |

Ret, bağlantı ve uygunluk mesajları için tam hata metnini koruyun. Bekleme durumuna normal yanıt Ginger’ı yeniden kurmak veya yeni kurtarma kelimeleri oluşturmak değildir.

<span id="keep-the-wallet-available" data-ginger-heading="cüzdanı-kullanılabilir-tutun" aria-hidden="true"></span>

## Cüzdanı kullanılabilir tutun

Katılım sırasında cüzdanın anahtarlara erişmesi gerekir. Parolayla korunan yazılım cüzdanı imzalayabilmesi için açılmalıdır. İki faktörlü kimlik doğrulama başlangıcı korur; her turu onaylamak için kimlik doğrulayıcınızı istemez.

Uyku, internet bağlantısının kaybı veya zorla kapatma turu kesebilir. İşlem zaten yayınlandıysa uygulamayı kapatmak geri almaz. Ginger’ı yeniden açın, eşitlenmesini bekleyin ve başarısızlık varsaymadan veya eylemi tekrarlamadan önce geçmişi kontrol edin. İlk ödeme sırasında uygulama kapandı diye ikinci ödeme asla göndermeyin.

Genel ayarlara bağlı olarak pencere kapanırken Ginger arka planda kalabilir. Tam kapatma için normal çıkış eylemini kullanın ve kritik aşamaların bitmesine izin verin.

<span id="spend-after-coinjoin" data-ginger-heading="coinjoinden-sonra-harcayın" aria-hidden="true"></span>

## CoinJoin’den sonra harcayın

Oluşan coinler kullanılabilir hale geldiğinde diğer bitcoinler gibi harcayabilirsiniz. CoinJoin işlemi halka açık kalır. İlişkisiz gizli ve gizli olmayan coinleri birleştirmek, adresi tekrar kullanmak veya işlemi kimliğinizin bilindiği hizmete açıklamak yeni bağlantılar kurabilir. Ödeme yaparken seçili coinleri ve para üstünü inceleyin; önceki CoinJoin her gelecekteki eylemi gizli yapmaz.

<span id="you-do-not-need-to-manage-the-protocol" data-ginger-heading="protokolü-yönetmeniz-gerekmez" aria-hidden="true"></span>

## Protokolü yönetmeniz gerekmez

Ginger kaydı, imzalamayı ve yeniden denemeleri yönetir. Temel durum kontrolleri gördüğünüzü açıklamıyorsa isteğe bağlı ileri düzey kaynakları kullanın: [tur ayrıntıları](/tr/coinjoin/round-details/), [özel ayarlar](/tr/coinjoin/settings/) ve [ücretler ve gizlilik ilerlemesi](/tr/using-ginger/annonset/).
