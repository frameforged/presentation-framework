---
name: presentation-editor
description: "Presentation Editor — Mevcut bir .pptx sunumun metin iceriğini profesyonelleştiren, dil akıcılığını artıran ve ton tutarlılığını sağlayan düzenleme aracı. Sunumun genel yapısını ve tasarımını koruyarak yalnızca metin kalitesini yükseltir. Bu skill'i kullanıcı 'sunumu düzenle', 'metinleri iyileştir', 'sunumu profesyonelleştir', 'dili düzelt', 'ton tutarlılığını sağla', 'başlıkları düzelt', 'slayt metinlerini gözden geçir', 'polish the presentation', 'improve slide text', 'make it more professional' dediğinde veya mevcut bir .pptx dosyasının metin kalitesinden memnun olmadığını ifade ettiğinde tetikle. Sunum sıfırdan oluşturulmuyorsa ama metin iyileştirmesi isteniyorsa bu skill devreye girer."
---

# Presentation Editor

Mevcut bir sunumun metin içeriğini profesyonelleştiren, dil akıcılığını artıran ve ton tutarlılığını sağlayan düzenleme skill'i. Tasarımı, layoutu ve görsel öğeleri olduğu gibi bırakır — yalnızca metinlere dokunur.

## Ne Zaman Kullanılır

Bu skill mevcut bir .pptx dosyasının **metin içeriğini** iyileştirmek için kullanılır. Kullanıcı şunlardan birini istediğinde devreye gir:

- Başlıkların daha vurucu ve net olması
- Madde işaretlerinin daha profesyonel ifade edilmesi
- Açıklama cümlelerinin daha akıcı ve anlamlı olması
- Ton karışıklığının giderilmesi (resmi/samimi arası tutarsızlık)
- Gereksiz tekrarların temizlenmesi
- Jargon dengesinin ayarlanması

Bu skill sunum **oluşturmaz** — var olanı düzenler.

## İş Akışı

### Adım 1: Sunumu Analiz Et

```bash
# Metin içeriğini çıkar
python -m markitdown sunum.pptx

# Görsel yapıyı incele
python scripts/thumbnail.py sunum.pptx
```

Tüm slaytların metinlerini oku. Her slayt için şunu not et:
- Mevcut başlık
- Alt başlık (varsa)
- Gövde metni / madde işaretleri
- Konuşmacı notları (varsa)
- Etiketler, açıklamalar, footer metinleri

### Adım 2: Dil ve Ton Teşhisi

Tüm metni okuduktan sonra, sunumun genel durumunu değerlendir. Amacın bir "düzenleme planı" çıkarmak — neyin neden değişmesi gerektiğini anlamak.

**Dil Kalitesi Kontrol Listesi:**

| Kontrol | Ne Ara |
|---------|--------|
| Belirsiz başlıklar | "Genel Bakış", "Özet", "Sonuç" gibi hiçbir şey söylemeyen başlıklar |
| Uzun cümleler | Slayt gövdesinde 15+ kelimelik cümleler |
| Pasif yapılar | "yapılmaktadır", "sağlanmıştır" yerine aktif fiiller kullanılmalı |
| Tekrar eden ifadeler | Aynı kelime/kalıp birden fazla slaytta |
| Boş ifadeler | "Bu önemlidir", "Dikkat edilmelidir" — ne yaptığını söyle, önemli olduğunu değil |
| Paralel yapı bozukluğu | Madde işaretlerinde farklı gramer yapıları |
| Jargon tutarsızlığı | Bir yerde teknik terim, bir yerde günlük karşılık |

**Ton Tutarlılık Kontrolü:**

Sunumun baskın tonunu belirle ve sapmaları bul:
- Resmi: "gerçekleştirilmektedir", "önem arz etmektedir"
- Yarı-resmi: "dikkat çekici olan şu ki", "bunu şöyle düşünebiliriz"
- Samimi: "şimdi şöyle bir bakalım", "aslında mesele şu"

Eğer ton slaytten slayda değişiyorsa, bu düzeltilmesi gereken bir tutarsızlık.

**Türkçe Karakter Kontrolü (Kritik):**

Türkçe sunumlarda ASCII karşılıklarıyla yazılmış harfler sıkça görülür. Bunları **her slaytın her metninde** tespit et ve düzelt. Bu kontrol isteğe bağlı değildir — Türkçe sunumlarda mutlaka yapılmalıdır çünkü karakter bozuklukları profesyonelliği ciddi şekilde zedeler.

Yaygın bozukluklar:
| Yanlış | Doğru | Örnek |
|--------|-------|-------|
| I (büyük İngilizce i) | İ | "Izleme" → "İzleme" |
| i (başlıkta küçük) | İ | "izleme" → "İzleme" (cümle başı) |
| u | ü | "olcumu" → "ölçümü", "suresi" → "süresi" |
| o | ö | "olcum" → "ölçüm", "dongu" → "döngü" |
| s | ş | "basari" → "başarı", "islemi" → "işlemi" |
| c | ç | "cagri" → "çağrı", "olcum" → "ölçüm" |
| g | ğ | "degil" → "değil", "sagligi" → "sağlığı" |

Metni kelime kelime tara. Eğer bir kelime Türkçe sözlükte anlam ifade etmiyorsa büyük olasılıkla karakter bozukluğu vardır.

Bu kontrol HER slaytta ve HER metin öğesinde yapılmalı — başlıklarda, gövde metinlerinde, etiketlerde, badge'lerde, footer'larda ve konuşmacı notlarında. Yarım yapılmış bir düzeltme (bazı slaytlarda düzeltilmiş, bazılarında bırakılmış) sunumun tutarsız görünmesine neden olur. Özellikle son slaytlar kolaycılığa kaçılıp atlanabilir — buna dikkat et.

**Emoji ve Dekoratif Karakter Kontrolü:**

Profesyonel sunumlarda emoji kullanımı genellikle uygun değildir. Aşağıdakileri tespit et ve düzelt:
- Unicode emojileri (📋, 📊, 💬, 🔄, ✅, 🔁, vb.) → Kaldır veya anlamlı metinle değiştir
- Dekoratif ok ve bullet karakterleri (›, ·) → Standart bullet yapısına dönüştür veya kaldır
- Tutarsız bullet stilleri → Tek stilde birleştir

Eğer emoji bir bölüm başlığında etiket görevi görüyorsa (örn. "📋 Define"), emojiyi kaldır ve sadece metni bırak: "Define". Emojiler slayttaki görsel unsurlarla (ikonlar vb.) desteklenmelidir, metin içinde değil.

### Adım 3: Düzenleme Kuralları

Aşağıdaki kuralları uygulayarak her slaytın metnini yeniden yaz.

#### Başlıklar

İyi bir slayt başlığı iddia niteliğinde olmalı — konuyu değil, mesajı söyler. Mevcut başlık zaten yeterliyse bile daha güçlü bir alternatif üretmeyi dene. "Yaşam Döngüsü ve Sürüm Yönetimi" gibi genel başlıklar, konunun ne olduğunu söyler ama ne iddia ettiğini söylemez. Bunları dönüştür.

| Zayıf (Konu Bildiren) | Güçlü (İddia Eden) |
|-------|-------|
| Pazar Analizi | İç Pazar Talebi Üç Yılda İkiye Katlandı |
| Yaşam Döngüsü ve Sürüm Yönetimi | Model Odaklı Döngüden Agent Odaklı İşletime Geçiş |
| Registry Yapıları ve Yetenekler | Merkezi Kayıt Sistemi Agent Yönetimini Güçlendiriyor |
| İzleme ve Performans | Uçtan Uca İzleme ile Agent Davranışı Kontrol Altında |
| Yapay Zeka Uygulamaları | Yapay Zeka Operasyonel Verimliliği %40 Artırıyor |
| Overview | Three Forces Are Reshaping the Market |
| AI in Healthcare | AI Reduces Diagnostic Errors by 30% |

Her başlığı gözden geçirirken kendine sor: "Bu başlık slaytın ana mesajını mı söylüyor, yoksa sadece konusunu mı?" Eğer sadece konuyu söylüyorsa, yeniden yaz.

Kurallar:
- 5–10 kelime arası tut
- Aktif fiil kullan
- Somut bilgi içersin (rakam, karşılaştırma, sonuç)
- Soru biçimi de olabilir ama her slayt soru olmasın — çeşitlilik koru
- Orijinal başlıkla aynı bırakma — iyileştirme yapmak için buradasın

#### Madde İşaretleri

Her madde işareti kendi başına anlamlı bir ifade olmalı.

| Zayıf | Güçlü |
|-------|-------|
| Maliyet azaltma | Operasyonel maliyetleri yıllık %25 azaltır |
| Data processing | Processes 10M records per second with sub-ms latency |
| Güvenlik | Sıfır güven mimarisini uçtan uca uygular |

Kurallar:
- Her madde fiille başlasın (Azaltır, Sağlar, Enables, Reduces)
- 8–15 kelime arası
- Paralel yapıda olsun — hepsi aynı gramer kalıbını takip etsin
- Bir slaytta en fazla 4–5 madde
- Eğer 5'ten fazlaysa grupla veya ikinci slayda böl

#### Açıklama Cümleleri ve Alt Başlıklar

- Tek cümle, 10–20 kelime arası
- Başlığı tekrar etmesin — bağlam veya perspektif katsın
- "Bu slaytta X konusunu ele alacağız" gibi meta-ifadeler kullanma — doğrudan konuya gir

#### Rakam ve İstatistikler

Çıplak rakam yerine bağlam ekle:

| Zayıf | Güçlü |
|-------|-------|
| 500.000 kullanıcı | 500.000 aktif kullanıcı — her biri ayda ortalama 12 işlem |
| $2.3B revenue | $2.3B revenue — 47% YoY growth, outpacing the industry 3× |
| %95 uptime | %99.9 uptime ile yılda yalnızca 8.7 saat plansız kesinti |

#### Konuşmacı Notları

Eğer sunumda konuşmacı notları varsa, onları da düzenle:
- Slayttaki metni kelimesi kelimesine tekrar etmesin
- Geçiş cümlesi içersin ("Bu bizi şu soruya getiriyor...")
- Anekdot veya somut örnek önersin
- 2–4 cümle yeterli

### Adım 4: Dil Tespiti ve Çift Dil Desteği

Sunumun dilini otomatik olarak tespit et. Karışık dilli sunumlarda (örneğin Türkçe metin içinde İngilizce teknik terimler), şu kurallara uy:

**Türkçe sunumlar için:**
- Teknik terimlerin Türkçe karşılığı yaygınsa Türkçesini kullan
- Yaygın değilse İngilizce bırak ama ilk geçtiği yerde parantez içinde açıkla
- "Deployment", "pipeline", "monitoring" gibi sektörde yerleşmiş terimler olduğu gibi kalabilir
- Türkçe cümle yapısına uy — İngilizce kalıpları Türkçeye çevirirken doğal Türkçe söz dizimi koru

**İngilizce sunumlar için:**
- Active voice tercih et
- Gerunds yerine direct verbs: "Improving efficiency" → "Improve efficiency"
- Filler words temizle: "In order to" → "To", "It is important to note that" → kaldır

**Genel:**
- Kısaltmaları ilk kullanımda aç, sonra kısaltma kullan
- Tutarlılık: Bir terim seçtiysen her yerde aynını kullan

### Adım 5: Teknik Düzenleme İşlemi

pptx skill'indeki editing workflow'u kullan:

1. `python scripts/office/unpack.py sunum.pptx unpacked/`
2. Her slaytın XML'inde metin içeriklerini Edit tool ile güncelle
3. Yalnızca `<a:t>` etiketlerinin içeriğini değiştir — format etiketlerine (`<a:rPr>`, `<a:pPr>`) dokunma
4. `python scripts/clean.py unpacked/`
5. `python scripts/office/pack.py unpacked/ output.pptx --original sunum.pptx`

**Düzenleme sırasında eksiksizlik çok önemli.** Slaytın yalnızca başlığını düzeltip gövdesini atlamak, düzenlenmemiş bir sunumdan daha kötüdür — tutarsız kalite profesyonellik algısını düşürür. Her slayttaki HER metin öğesini gözden geçir: başlıklar, alt başlıklar, gövde metinleri, etiketler, açıklamalar, footer metinleri, hatta badge'ler ve kısa notlar. Hiçbir `<a:t>` etiketi gözden kaçmamalı.

**Türkçe karakter düzeltmesi XML düzeyinde yapılmalı.** Unpack sonrası her slide XML'inde bozuk Türkçe karakterleri doğrudan ara ve düzelt. `grep -rn` ile "Izle\|olcu\|basari\|suresi\|degil\|cagri\|dongu" gibi kalıpları tarayarak eksik kalanları bul.

**Kritik kurallar:**
- Font boyutu, renk, kalınlık gibi biçimlendirme özelliklerini değiştirme
- Shape pozisyonlarını, boyutlarını değiştirme
- Yeni shape veya text box ekleme
- Mevcut madde sayısını artırma (alan taşması riski)
- Eğer mevcut bir maddeyi çıkarıyorsan, `<a:p>` bloğunun tamamını sil
- Emoji kaldırırken `<a:t>` içindeki emoji karakterini sil, etrafındaki metni koru

### Adım 6: Kalite Doğrulama

Düzenleme sonrası şu kontrolleri yap:

```bash
# Metin çıktısını karşılaştır
python -m markitdown output.pptx
```

**Kontrol listesi:**
- [ ] Her slayttaki metin sayısı orijinalle aynı mı? (yeni kutu eklenmemiş mi?)
- [ ] Başlıklar daha net ve iddia niteliğinde mi?
- [ ] Madde işaretleri paralel yapıda mı?
- [ ] Ton baştan sona tutarlı mı?
- [ ] Gereksiz tekrarlar temizlenmiş mi?
- [ ] Rakamlar bağlam içinde mi?
- [ ] Dosya hatasız açılıyor mu?

Eğer görsel QA gerekirse:
```bash
python scripts/office/soffice.py --headless --convert-to pdf output.pptx
pdftoppm -jpeg -r 150 output.pdf slide
```

Görselleri incele — metin taşması, kesilme veya hizalama bozulması var mı kontrol et.

## Düzenleme Kapsamı Dışı

Bu skill şunları **yapmaz**:
- Slayt ekleme veya silme
- Layout değiştirme
- Renk paleti veya font değiştirme
- Görsel/ikon ekleme veya çıkarma
- Slayt sırasını değiştirme
- Animasyon ekleme

Eğer kullanıcı bunlardan birini isterse, ayrıca pptx skill'ini kullan.

## Çıktı Formatı

Düzenleme tamamlandığında kullanıcıya şunu sun:

```
DÜZENLEME RAPORU
================
Dosya: [orijinal dosya adı] → [çıktı dosya adı]
Slayt Sayısı: [N]
Dil: [Türkçe / İngilizce / Karma]
Tespit Edilen Ton: [baskın ton]

DEĞİŞİKLİK ÖZETİ
==================
Toplam düzenlenen slayt: [N] / [toplam N]
Başlık değişiklikleri: [N]
Madde işareti düzenlemeleri: [N]
Ton düzeltmeleri: [N]
Tekrar temizlikleri: [N]

SLAYT BAZLI DEĞİŞİKLİKLER
============================
Slayt 1:
  Başlık: "Eski başlık" → "Yeni başlık"
  Değişiklik nedeni: [kısa açıklama]

Slayt 2:
  Madde 1: "Eski ifade" → "Yeni ifade"
  ...
```

Bu rapor, kullanıcının her değişikliği görmesini ve onaylamasını sağlar. Kullanıcı belirli değişiklikleri geri almak isterse, XML'de o slaytın orijinal metnini geri koyabilirsin.

## Prensipler

- **Anlamı koru, ifadeyi geliştir.** Orijinal mesajın ne söylediğini değiştirme — nasıl söylediğini iyileştir.
- **Az değişiklik, büyük etki.** Her kelimeyi değiştirmeye çalışma. Zaten iyi olan ifadelere dokunma — gereksiz değişiklik güven kaybettirir.
- **Tutarlılık her şeyden önemli.** Tek bir parlak slayt, geri kalanıyla uyumsuzsa sunumun genel kalitesini düşürür. Tüm slaytlar aynı kalite seviyesinde olmalı.
- **Slayt metni konuşma metni değil.** Slayttaki metin, konuşmacının söyleyeceğinin kısa bir özetidir. Tam cümleler yerine vurucu ifadeler tercih et.
- **Doğallık testi:** Yazdığın her cümleyi sesli oku. Kulağa yapay geliyorsa yeniden yaz.
