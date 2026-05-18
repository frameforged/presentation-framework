# Üretim Öncesi Kontrol Listesi

Production agent build başlatmadan önce bu listeyi geçmek zorundadır. Her madde "Evet" olmalı.

## A. Girdi Bütünlüğü

- [ ] `06-content.md` mevcut ve `status: complete`
- [ ] `07-visual.md` mevcut ve `status: complete`
- [ ] `08-qa-report.md` mevcut ve karar `ONAYLANDI`
- [ ] Content'teki slayt sayısı = Visual'daki slayt sayısı = Deck Plan'daki slayt sayısı
- [ ] Her slayt için layout, başlık, gövde ve görsel alanları dolu

## B. Renk ve Tipografi

- [ ] Renk paleti hex kodları `#` OLMADAN 6 haneli (örn. `"4A2C2A"`)
- [ ] Dominant + ikincil + aksan + arkaplan + metin renkleri tanımlı
- [ ] Arkaplan-metin kontrastı WCAG AA (≥4.5:1)
- [ ] Başlık fontu ≥30pt
- [ ] Gövde fontu ≥14pt
- [ ] Tek font ailesi kullanılmış (örn. tümü Calibri veya tümü Inter)

## C. Layout Çeşitliliği

- [ ] Ardışık iki slayt aynı layout değil
- [ ] En az 4 farklı layout tipi kullanılmış
- [ ] Kapak ve kapanış slaytları diğerlerinden ayrışıyor
- [ ] Her slaytta en az 1 görsel öğe (ikon, şekil, grafik, görsel)

## D. İçerik Hijyeni

- [ ] Her slaytta tek ana mesaj
- [ ] Gövde metni ≤40 kelime
- [ ] Madde işaretleri paralel yapıda
- [ ] Türkçe karakterler doğru (ş, ç, ğ, ü, ö, İ, ı)
- [ ] Emoji yok (profesyonel sunumlarda kullanılmaz)
- [ ] Yazım hatası kontrolü yapılmış

## E. Teknik Sağlık

- [ ] PptxGenJS yüklü (`npm list pptxgenjs`)
- [ ] Build script syntax hatasız (`node --check build-pptx.js`)
- [ ] Çıkış dizini yazılabilir
- [ ] LibreOffice veya soffice kurulu (PDF doğrulaması için)

## F. Build Sonrası

- [ ] `<slug>.pptx` üretildi
- [ ] Dosya boyutu 50 KB - 25 MB aralığında
- [ ] `soffice --headless --convert-to pdf` başarılı
- [ ] Üretilen PDF açıldığında tüm slaytlar görünür
- [ ] Metin taşması yok (PDF'te kontrol)
- [ ] Konuşmacı notları PowerPoint'te görünür

## Hata Durumunda

Bu kontrollerden biri başarısız olursa:

1. Sorunu `08-qa-report.md`'a "Teknik Uyumluluk" düşüklüğü olarak ekle
2. İlgili agent'a (genellikle visual-structuring veya production'ın kendisi) yönlendir
3. Maksimum 3 build denemesi — sonra kullanıcıya manuel müdahale iste
