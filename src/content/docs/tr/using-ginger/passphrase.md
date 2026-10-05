---
doc_id: "backup-recovery.passphrase"
title: "Parola nedir?"
description: "Ginger cüzdan parolanızı, neleri yedeklemeniz gerektiğini ve farklı bir parola boş bir cüzdan açsa bile kurtarmanın neden asıl parolayı gerektirdiğini anlayın."
lang: tr
verified_release: "v2.0.26"
reader_level: "beginner"
sidebar:
  label: "Parola"
prev: false
next: false
---

> Okuma düzeyi: Buradan başlayın. Bu rehber Ginger v2.0.26’daki yazılım cüzdanlarını kapsar. Donanım cüzdanı için üreticinin kurtarma talimatlarını izleyin ve kurtarma kelimelerini bilgisayarınızdan uzak tutun.

Parola, bir cüzdan oluştururken seçtiğiniz isteğe bağlı bir sırdır. Ginger’da yazılım cüzdanına erişimi korur ve kurtarma bilgilerinin de bir parçasıdır. Aynı cüzdanı kurtarmak için asıl kurtarma kelimeleri ve kullandıysanız tam olarak asıl parola gerekir. Ginger unutulmuş bir parolayı sıfırlayamaz.

<span id="do-i-have-to-use-a-passphrase" data-ginger-heading="parola-kullanmak-zorunda-mıyım" aria-hidden="true"></span>

## Parola kullanmak zorunda mıyım?

Cüzdan oluştururken Ginger, **Confirm Recovery Words** adımından sonra **Add Passphrase** gösterir. Bir parola girip doğrulayabilir veya parolasız cüzdan oluşturmak için iki alanı da boş bırakabilirsiniz.

Parola olmadığında kurtarma kelimelerinizi edinen biri bitcoinlerinizi kurtarıp harcayabilir. Parola korunacak başka bir sır ekler; ancak unutursanız kelimeler elinizde olsa bile kurtarma yapamayabilirsiniz. Doğru kaydedip tekrar üretebileceğiniz, tahmin edilmesi zor bir şey seçin. Başta veya sonda boşluktan kaçının; Ginger’ın giriş kontrolleri bunları reddeder.

<span id="is-it-the-same-as-recovery-words-or-a-2fa-code" data-ginger-heading="kurtarma-kelimeleri-veya-2fa-koduyla-aynı-şey-mi" aria-hidden="true"></span>

## Kurtarma kelimeleri veya 2FA koduyla aynı şey mi?

Hayır. Ginger yeni bir yazılım cüzdanı için on iki **Recovery Words** kelimesi üretir. Parolayı ayrı seçersiniz. Numaralandırılmış kelime listesinden ayrı tutun; ek bir kurtarma kelimesi olarak girmeyin.

Cüzdan adınız yalnızca yerel bir etikettir. İki faktörlü kimlik doğrulama (2FA) için kimlik doğrulama kodu ayrı bir uygulama başlangıç kontrolüdür. Yazılım cüzdanı kurtarılırken bunların hiçbiri asıl kelimelerin ve parolanın yerini almaz.

<span id="what-should-i-back-up" data-ginger-heading="neleri-yedeklemeliyim" aria-hidden="true"></span>

## Neleri yedeklemeliyim?

- Kurtarma kelimelerini, gösterilen sırayla.
- Büyük/küçük harfler ve karakterler dahil tam olarak asıl parolayı veya cüzdanı parolasız oluşturduğunuza dair açık bir notu.

Bu bilgileri gizli ve bilgisayarı kaybettikten sonra kurtarılabilir tutun. Kelimeleri çevrimdışı yazın; fotoğraf, e-posta ve sıradan bulut notlarından kaçının. Parolayı da kurtarılabilir saklayın. Ayrı saklamak birinin iki sırrı birlikte bulmasına karşı koruyabilir; ancak gerektiğinde ikisini de bulabildiğinizden emin olun. Yalnızca hafızaya güvenmeyin.

Kurtarma kelimeleri bitcoine erişimi geri getirir, ancak her etiketi veya ayarı geri getirmez. Kurtarma sorununu araştırırken mevcut cüzdan dosyalarını saklayın. Aynı bilgisayardaki otomatik yedek, o bilgisayarın kaybına karşı korumaz.

<span id="how-do-i-check-my-backup" data-ginger-heading="yedeğimi-nasıl-kontrol-ederim" aria-hidden="true"></span>

## Yedeğimi nasıl kontrol ederim?

Yazılım cüzdanınız erişilebilirken **Wallet Settings** → **Tools** bölümünü açın. **Verify Recovery Words** seçeneğini bulun, **Verify** seçeneğini seçin, ardından yedekteki kelimeleri girip kontrolü tamamlayın.

Bu, kelimelerin cüzdana ait olup olmadığını kontrol eder. Unutulmuş kelimeleri göstermez veya parolayı sıfırlamaz. Parola kaydınızın doğru olduğundan da emin olun. Doğrulama başarısız olursa yedeğe güvenmeden önce yazımı ve kelime sırasını gizlilik içinde kontrol edin.

<span id="how-do-i-use-the-passphrase-during-recovery" data-ginger-heading="kurtarma-sırasında-parolayı-nasıl-kullanırım" aria-hidden="true"></span>

## Kurtarma sırasında parolayı nasıl kullanırım?

Bu adımlar, bir Ginger yazılım cüzdanını kelimelerinden kurtarmak içindir. Kurtarma doğrulanana kadar mevcut cüzdan dosyalarını koruyun.

1. Güvenilir bir bilgisayarda Ginger’ı açın. Cüzdan ekleme ekranında **Recover** seçeneğini seçin.
2. İstenirse kurtarılan cüzdanı mevcut olanlardan ayırt edebilmek için farklı bir **Wallet Name** girin.
3. Asıl **Recovery Words** kelimelerini sırayla girin.
4. **Enter Passphrase** adımında asıl parolayı girip doğrulayın. Alanları yalnızca asıl cüzdanda parola yoksa boş bırakın. Burada yeni bir şifre seçmiyorsunuz.
5. Kurtarma ve eşitlemenin bitmesini bekleyip bilinen işlem geçmişinizi kontrol edin. Eşitleme, cüzdana ait işlemler için Bitcoin ağının kontrol edilmesi demektir.

<span id="why-is-my-recovered-wallet-empty" data-ginger-heading="kurtarılan-cüzdanım-neden-boş" aria-hidden="true"></span>

## Kurtarılan cüzdanım neden boş?

Kelimelerden kurtarma sırasında farklı bir parola farklı bir cüzdan üretir. Bu nedenle Ginger yanlış yazılmış bir parolayı kabul edip yanlış parola hatası bildirmeden boş bir cüzdanı kurtarabilir. Bu, yanlış parolanın reddedildiği mevcut korunan cüzdan dosyasını açmaktan farklıdır.

Asıl parolayı, büyük/küçük harfleri, boşlukları ve klavye düzenini kontrol edin. Amaçladığınız cüzdanı ve Bitcoin ağını seçtiğinizi ve kurtarmanın tamamlandığını da kontrol edin. Bitmemiş bir tarama eksik bakiye gösterebilir. Boş bakiye tek başına asıl bitcoinin yok olduğunu kanıtlamaz.

Beklenen geçmiş hâlâ eksikse asılları koruyun ve [resmî Ginger projesinin destek bağlantılarından](https://gingerwallet.io/) yardım alın. Yalnızca uygulama sürümü ve hata metni gibi gizli olmayan ayrıntıları paylaşın. Destek ekibine kurtarma kelimelerinizi, parolanızı veya cüzdan dosyalarınızı asla göndermeyin.

<span id="can-i-reset-or-replace-a-forgotten-passphrase" data-ginger-heading="unutulan-parolayı-sıfırlayabilir-veya-değiştirebilir-miyim" aria-hidden="true"></span>

## Unutulan parolayı sıfırlayabilir veya değiştirebilir miyim?

Ginger bunu sıfırlayamaz. Aynı kelimeler ve yeni bir parolayla kurtarma, farklı bir cüzdana erişim oluşturur; asıl cüzdanın parolasını değiştirmez veya bitcoinini taşımaz.

Asıl cüzdandan hâlâ gönderebiliyor ancak kullanılabilir bir kurtarma yedeği oluşturamıyorsanız yeni bir cüzdan oluşturun, yedeğini doğrulayın ve erişim sürerken fonları dikkatle aktarın. Aktarım onaylanana kadar eski cüzdanı koruyun. Ne harcama erişimi ne de gerekli kurtarma bilgileri varsa destek ekibi eksik sırrı yeniden oluşturamaz.
