---
doc_id: "payments.coin-control-history"
title: "Coin kontrolü, geçmiş ve takılan işlemler"
description: "Ginger UTXO’larını ve ödeme geçmişini inceleyin, coinleri bilinçli seçin ve ne zaman hızlandırma veya iptalin mümkün olduğunu anlayın."
lang: tr
verified_release: "v2.0.26"
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

<span id="speed-up-an-unconfirmed-transaction" data-ginger-heading="onaylanmamış-bir-işlemi-hızlandırın" aria-hidden="true"></span>

## Onaylanmamış bir işlemi hızlandırın

Ginger bir geçmiş kaydı için **Speed Up Transaction** sunduğunda açın ve onaylamadan önce ek ücreti inceleyin. İşleme ve kullanılabilir çıktılara bağlı olarak ücret artırarak hızlandırma, işlemi daha yüksek ücretli sürümle değiştirebilir veya her ikisi için yeterli ücret ödeyen bir alt işlemde çıktıyı harcayabilir.

Cüzdanınız her işlemi hızlandıramaz. Desteklenen işlem yapısı ile ilgili anahtarlara ve fonlara erişim gerekir. Yüksek ücret madencilerin teşvikini artırır; anında onayı garanti etmez. Değiştirme işlem kimliğini değiştirebilir; bu nedenle alıcıyla koordinasyon kurarken güncel geçmişi kontrol edin.

<span id="cancel-an-unconfirmed-transaction" data-ginger-heading="onaylanmamış-bir-işlemi-iptal-edin" aria-hidden="true"></span>

## Onaylanmamış bir işlemi iptal edin

Sunulduğunda **Cancel Transaction**, bekleyen ödemeyi ilgili fonları kontrolünüze geri döndüren ve ücret ödeyen işlemle değiştirmeye çalışır. Her düğümün kabul ettiği geri al komutu değil, asıl ödemenin onayıyla yarışan bir girişimdir.

İptal penceresini ve ücreti okuyun, yalnızca amacınız buysa onaylayın ve gerçekte neyin onaylandığını izleyin. Asıl işlem önce onaylanırsa iptal onu geri alamaz. Ödeme onaylandıktan sonra uygunsa alıcıdan ayrı bir iade isteyin; Ginger geri alamaz.

Hangi işlemin onaylandığını anlamadan ikinci ödeme başlatmayın veya iade sözü vermeyin. Gezgin ve cüzdanınız farklı düğümleri gördüklerinden geçici olarak farklı mempool bilgisi gösterebilir.
