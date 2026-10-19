---
doc_id: "payments.coin-control-history"
title: "Coin kontrolü, geçmiş ve takılan işlemler"
description: "Ginger UTXO'larını, işlem girdi ve çıktılarını ve ödeme geçmişini inceleyin; coinleri bilinçli seçin ve onaylanmamış ödemeleri yönetin."
lang: tr
verified_release: "v2.0.27"
reader_level: "advanced"
prev: false
next: false
---

> Okuma düzeyi: İleri düzey rehber. Önce normal gönderme önizlemesini, alıcı tutarını ve ücreti anlayın.

Toplam cüzdan bakiyesi farklı kökenleri, onay durumları ve gizlilik geçmişleri olan birçok ayrı coin içerebilir. Coin kontrolü hangilerini harcayacağınıza karar vermenize yardımcı olur. Daha önce ayrı olan fonları yanlışlıkla ilişkilendirmeyi de kolaylaştırır; bu nedenle belirli bir amaçla kullanın.

<span id="inspect-and-select-coins" data-ginger-heading="coinleri-inceleyip-seçin" aria-hidden="true"></span>

## Coinleri inceleyip seçin

Cüzdanın menüsünü açıp **Wallet Coins** seçeneğini seçin. Sahip olduğunuz coinlerin tutarlarını, etiketlerini, onay bilgilerini ve gizlilik verilerini inceleyin. Bir işlem birkaç coin oluşturabilir, tek bir adres birkaç ayrı ödeme alabilir; bir satır veya adres mutlaka tüm cüzdan değildir.

Ödeme sürecinde tek tek coinlerle çalışmak için **Send** → **Manual Control** yolunu seçin. Hem ödeme hem ücret için yeterli değer seçin. Onaylamadan önce oluşan girdileri ve para üstünü gözden geçirin. Coin seçmek onları işlem oluşturucuya kullanılabilir kılar; hangilerinin gerçekten kullanıldığını görmek için son önizlemeyi inceleyin.

Fonların nereden geldiğini veya kimlerin onları zaten bildiğini açıklayan etiketleri saklayın. Aynı alıcıyla zaten ilişkili coinlerden ödeme yapmak, ilişkisiz kaynakları birleştirmeye göre daha az yeni bilgi açığa çıkarabilir. Etiket tek başına anonimlik sağlamaz veya başkasının blok zinciri analizini engellemez.

<span id="consolidation-and-small-coins" data-ginger-heading="birleştirme-ve-küçük-coinler" aria-hidden="true"></span>

## Birleştirme ve küçük coinler

Birleştirme, birkaç küçük coini genellikle kontrol ettiğiniz bir cüzdanda daha az çıktıya harcar. Şimdi ücret gerektirir ve sonraki ödeme için gereken girdi sayısını azaltabilir. Seçilen girdileri herkese açık olarak da ilişkilendirir. Düşük ücret koşulları birleştirmeyi ucuzlatabilir, ancak bu gizlilik ödünleşimini ortadan kaldırmaz.

Yalnızca düzenli coin listesi elde etmek için ilişkisiz coinleri otomatik birleştirmeyin. Çok küçük gelen çıktıları harcamak ekonomik olmayabilir. Ginger’ın toz eşiği ve CoinJoin hariç tutmaları farklı durumları ele alır; coini CoinJoin’den hariç tutmak, normal ödemede seçmenizi engellemez.

**Send** kullanıyorsanız donanım cüzdanınıza fon göndermek normal bir zincir üstü işlemdir. Yeni bir donanım alım adresi alıp doğrulayın, ardından yazılım cüzdanının ücretini ve seçilen coinlerini inceleyin. Aktarımın kendisi blok zincirinde görünür kalır.

<span id="read-transaction-history" data-ginger-heading="i̇şlem-geçmişini-okuyun" aria-hidden="true"></span>

## İşlem geçmişini okuyun

Cüzdan ana ekranı gelen, giden ve CoinJoin faaliyetlerini gösterir. Tek tek turları incelemek gerektiğinde gruplanmış CoinJoin kayıtlarını genişletin. Sıralama kontrolleri tarih, tutar, etiket ve durumu karşılaştırmaya yardımcı olur. İşlem kimliğini ve mevcut onay veya ücret bilgisini incelemek için işlem ayrıntılarını açın.

Belirli bir işlemi tanımlamak gerektiğinde **Copy Transaction ID** kullanın. Mümkün olduğunca işlem kimliklerini gizli tutun: birini paylaşmak adresleri, tutarları ve diğer faaliyetlerle bağlantıları açıklayabilir. Halka açık blok gezgini yaptığınız sorguları da öğrenir. Kendi ödemelerinizi kontrol edeceğiniz ilk yer Ginger’ın yerel geçmişidir.

Geçmişi inceleyebilir, sıralayıp gruplayabilir ve işlem kimliklerini kopyalayabilirsiniz. Bu sürüm bu geçmiş sürecinde işlem arama veya CSV dışa aktarma kontrolü sunmaz.

<span id="inspect-inputs-and-outputs" data-ginger-heading="girdileri-ve-çıktıları-inceleyin" aria-hidden="true"></span>

## Girdileri ve çıktıları inceleyin

İşlem görüntüleyicisini açmak için gönderme önizlemesinde veya işlem ayrıntılarında **View transaction** seçeneğini seçin. Gruplandırılmış bir CoinJoin geçmiş kaydında grubu genişletip tek bir CoinJoin'in ayrıntılarını açarak aynı eylemi bulabilirsiniz. Görüntüleyici, boyutunu değiştirebileceğiniz ayrı bir pencerede açılır; diyagrama, seçim ayrıntılarına veya özete daha fazla yer ayırmak için ayırıcıları sürükleyin.

Sol taraf girdileri, sağ taraf çıktıları listeler. Uzun işlemleri incelemek için kaydırın; ardından tutarı, güncel itibari para tahminini, adresi, outpoint'i, betik türünü, etiketleri ve bilinen anonimlik puanını görmek için bir girdi veya çıktı seçin. Sahiplik uygun olduğunda **Own wallet**, **External** veya **Change** olarak gösterilir. Outpoint, işlem kimliği ve çıktı diziniyle belirli bir çıktıyı tanımlar.

İşlem kimliğini veya seçilen coinin adresini ya da outpoint'ini kopyalamak için kopyalama düğmelerini kullanın. Özet; girdi ve çıktı toplamlarını, madencilik ücretini ve ücret oranını, sanal boyutu, tarihi ve işlemin önizleme, bekleyen veya onaylanmış durumda olduğunu gösterir. Önizlemeyi görüntülemek işlemi imzalamaz veya yayınlamaz.

Haricî girdilerle ilgili bazı bilgiler cüzdanda bulunmaz. Bilinmeyen bir girdi tutarı, girdi toplamını ve ücreti de bilinmez hâle getirebilir. Anonimlik puanı yalnızca Ginger bu cüzdan coini için bir puan biliyorsa gösterilir; gönderme önizlemesindeki yeni çıktıların henüz puanı yoktur. **Unknown** veya bir tire sıfır puan anlamına gelmez. İtibari para tutarları eski bir işlemi incelerken de güncel döviz kurunu kullanır.

**Discreet Mode**, işlem verilerini gizler ve görüntüleyicinin kopyalama eylemlerini devre dışı bırakır. Ayrıntıları özel olarak incelemeye hazır olduğunuzda kapatın. Bu yerel görüntüleyiciyi açmak işlemi herkese açık bir blok gezginiyle paylaşmayı gerektirmez.

<span id="speed-up-an-unconfirmed-transaction" data-ginger-heading="onaylanmamış-bir-işlemi-hızlandırın" aria-hidden="true"></span>

## Onaylanmamış bir işlemi hızlandırın

Ginger bir geçmiş kaydı için **Speed Up Transaction** sunduğunda açın ve onaylamadan önce ek ücreti inceleyin. İşleme ve kullanılabilir çıktılara bağlı olarak ücret artırarak hızlandırma, işlemi daha yüksek ücretli sürümle değiştirebilir veya her ikisi için yeterli ücret ödeyen bir alt işlemde çıktıyı harcayabilir.

Cüzdanınız her işlemi hızlandıramaz. Desteklenen işlem yapısı ile ilgili anahtarlara ve fonlara erişim gerekir. Yüksek ücret madencilerin teşvikini artırır; anında onayı garanti etmez. Değiştirme işlem kimliğini değiştirebilir; bu nedenle alıcıyla koordinasyon kurarken güncel geçmişi kontrol edin.

<span id="cancel-an-unconfirmed-transaction" data-ginger-heading="onaylanmamış-bir-işlemi-iptal-edin" aria-hidden="true"></span>

## Onaylanmamış bir işlemi iptal edin

Sunulduğunda **Cancel Transaction**, bekleyen ödemeyi ilgili fonları kontrolünüze geri döndüren ve ücret ödeyen işlemle değiştirmeye çalışır. Her düğümün kabul ettiği geri al komutu değil, asıl ödemenin onayıyla yarışan bir girişimdir.

İptal penceresini ve ücreti okuyun, yalnızca amacınız buysa onaylayın ve gerçekte neyin onaylandığını izleyin. Asıl işlem önce onaylanırsa iptal onu geri alamaz. Ödeme onaylandıktan sonra uygunsa alıcıdan ayrı bir iade isteyin; Ginger geri alamaz.

Hangi işlemin onaylandığını anlamadan ikinci ödeme başlatmayın veya iade sözü vermeyin. Gezgin ve cüzdanınız farklı düğümleri gördüklerinden geçici olarak farklı mempool bilgisi gösterebilir.
