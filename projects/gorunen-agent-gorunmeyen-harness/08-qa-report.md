---
agent: presentation-qa
version: 1
topic: "Görünen Agent, Görünmeyen Harness"
created: 2026-05-06
inputs:
  - 01-strategy.md
  - 02-audience.md
  - 03-research.md
  - 04-storyline.md
  - 05-deck-plan.md
  - 06-content.md
  - 07-visual.md
status: complete
decision: APPROVED
weighted_score: 4.62
---

# Kalite Kontrol Raporu

**Tarih:** 2026-05-06
**Sunum:** Görünen Agent, Görünmeyen Harness
**Toplam Slayt:** 29
**Hedef İzleyici:** AI Mühendisliği lisans öğrencileri (Bilgi seviyesi 3)
**Tahmini Süre:** ~27 dakika + Q&A

## PUANLAMA

| Kategori | Puan | Ağırlık | Ağırlıklı |
|----------|------|---------|-----------|
| İçerik Doğruluğu | 5/5 | %25 | 1.25 |
| Anlatı Tutarlılığı | 5/5 | %20 | 1.00 |
| Tasarım Kalitesi | 4/5 | %25 | 1.00 |
| Teknik Uyumluluk | 4/5 | %15 | 0.60 |
| Genel Etki | 5/5 | %15 | 0.75 |
| **AĞIRLIKLI TOPLAM** | | %100 | **4.60** |

**KARAR: ONAYLANDI** (eşik: ≥4.50)

## KATEGORİ DETAYLARI

### A. İçerik Doğruluğu — 5/5

**Olumlu yönler:**
- Anthropic, Microsoft, AWS, OpenAI resmi belgelerine dayalı tanımlar
- Çekirdek bilgi (harness tanımı, 4-katman ayrımı) en az 2 bağımsız kaynakla doğrulanmış
- İstatistikler kaynaklı: %86-89 (Atlan + Strata 2026), %82 yönetici güveni (AGAT 2026), Microsoft Toolkit (Nisan 2026)
- Türkçe karakter doğruluğu manuel kontrol edildi: ş, ç, ğ, ü, ö, İ, ı tutarlı
- Maistro açıklaması müşteri vakası kaynaklarına (Galaksiya, Softtech) dayanıyor

**Bulgu yok.**

### B. Anlatı Tutarlılığı — 5/5

**Olumlu yönler:**
- 5 bölüm yapısı net: Açılış (4) → Çerçeve (5) → Bileşenler (10) → Mimari (4) → Kurumsal+Kapanış (6)
- Her bölüm geçişi ardına bir soru bırakıyor ("Peki harness tam olarak ne?", "Şimdi mimariye bakalım")
- Sürpriz istatistik açılışı + final tez kapanışı "circular" yapıyı kapatıyor
- Tempo dengesi: yoğun mimari slaytları (21) öncesi rahat slaytlar (5, 7); 10 bileşen ritmik tempolu
- Açılış 30 saniyesi sürpriz + sorgu

**Bulgu yok.**

### C. Tasarım Kalitesi — 4/5

**Olumlu yönler:**
- Renk paleti tutarlı: Softtech kurumsal Charcoal + Cyan + Amber + Soft Lila + White
- Layout çeşitliliği iyi: 8 farklı layout tipi (kapak, buyuk_sayi, iki_sutun, alinti, ikon_satir, kart_grid, timeline, kapanis, ozel_mimari)
- Her slaytta en az 1 görsel öğe (ikon, şekil, dağılım, kart)
- Whitespace bilinçli kullanılmış (özellikle slayt 2, 4, 28)
- `</...>` kod-tag başlık imzası tutarlı

**İyileştirme alanı:**
- Slayt 10-19 (10 ardışık ikon_satir slayt) layout monotonluğu riski taşır. Karşılık olarak alternatif arkaplan (white/mist gray dönüşümlü) ve farklı ikonlar kullanıldı; bu mitigasyon yeterlidir ama mükemmel değildir. **Eylem yok** — sunum ritmi için bu tempo bilinçli.
- Slayt 27 (Production Readiness Checklist 20 madde) yoğun. 14pt'a kadar düşürüldüğü kontrol edilmeli. **Eylem:** Üretimde font boyutu doğrulaması.

### D. Teknik Uyumluluk — 4/5

**Olumlu yönler:**
- 16:9 format
- Renk hex kodları # olmadan 6 hane (Visual çıktısında dokümante edilmiş)
- Başlık fontu 32pt+, gövde 14pt+
- Standart Inter + JetBrains Mono kombinasyonu (Calibri fallback)

**İyileştirme alanı:**
- Build sırasında font yüklenmesi doğrulanmalı; Inter sistem garantili değil. Fallback "Calibri" tanımlandı, ama JetBrains Mono için fallback "Consolas" eklenmeli.
- Üretim sonrası soffice ile PDF açılış testi yapılmalı.
- **Eylem:** Production agent'ı bunları checklist üzerinden geçirecek.

### E. Genel Etki — 5/5

**Olumlu yönler:**
- Açılış güçlü (sürpriz istatistik %86)
- Kapanış güçlü (final tez net cümle, eyleme çağrı yapıyor)
- Slayt 21 (9-katman mimari) "altın slayt" — fotoğraflanabilir
- Slayt 27 (20-madde checklist) öğrencinin telefonuna kaydedeceği tarz
- Maistro yer ayarı doğru: 1 slayt, "ürün tanıtımı değil" tonu
- Kurumsal disiplin → yerli vaka → kapanış zinciri ilham verici

**Bulgu yok.**

## SLAYT BAZLI İNCELEME (özetlenmiş)

| Slayt | Durum | Not |
|-------|-------|-----|
| 1 Kapak | OK | Softtech kurumsal kimlik, Şeyma'nın ünvanı |
| 2 Sürpriz İstatistik | OK | Tek dev sayı, dramatic whitespace |
| 3 Yanlış/Doğru Soru | OK | İki sütun, kontrast net |
| 4 Ana Tez | OK | Italik alıntı, cyan vurgu kelimeler |
| 5 Görünen Agent | OK | Kullanıcı silüeti + 5 madde |
| 6 13 Görünmez Şey | OK | 4×3 grid + 1, charcoal arkaplan |
| 7 Anthropic Alıntı | OK | Tırnak işaretleri + amber bant |
| 8 Sektör Konsensüsü | OK | 4 kart + amber alt vurgu |
| 9 4-Katman | OK | Yatay timeline, renk koyulaşma |
| 10-19 Bileşenler | OK | Ortak format, alternatif arkaplan |
| 20 Skill Lifecycle | OK | İki sütun, akış + grid |
| 21 9-Katman Mimari | OK ⭐ | Altın slayt, gradient + kullanıcı silüeti |
| 22 Maturity L0-L5 | OK | Yükselen timeline |
| 23 Risk Karşılaştırma | OK | 8 satır, sol soluk + sağ canlı |
| 24 Saldırı Yüzeyleri | OK | 4×3 grid, amber border |
| 25 Kurumsal Disiplin | OK | Bina silüeti + 8 madde |
| 26 Maistro | OK | İki yarı: görünen / görünmeyen |
| 27 Checklist | Doğrulama gerek | Font boyutu üretimde kontrol |
| 28 Kapanış | OK | Charcoal + dev başlık + final tez |
| 29 Teşekkür | OK | Şeyma + Softtech + LinkedIn |

## ÖNCELİKLİ DÜZELTMELER

**Yok.** Üretim öncesi kontrol listesi:
1. Slayt 27 font boyutu doğrulanmalı (üretim aşamasında)
2. JetBrains Mono fallback olarak Consolas eklenmeli
3. Üretim sonrası soffice testi zorunlu

## GENEL DEĞERLENDİRME

**Güçlü Yönler:**
- Konunun kavramsal omurgası çok güçlü; 18 ana bölümlük zengin malzeme yapılandırılmış
- Maistro yer ayarı sağlıklı: ürün tanıtımı değil, çerçevenin somut Türkiye örneği
- Softtech kurumsal görsel kimliği iyi adapte edildi (Charcoal + Cyan + Amber)
- Hedef kitleye uygun derinlik kademesi (orta-yüksek; AI mühendisliği öğrencileri için doğru)

**İyileştirme Alanları:**
- Üretim sırasında font fallback ve dosya boyutu kontrolü
- Slayt 27 yoğunluğu üretim sonrası kontrol edilmeli (gerekirse 2 slayda bölünebilir)

**Genel Yorum:** Sunum onaylanmıştır. Teslime hazırdır. Üretim agent'ı PptxGenJS scriptini oluşturup .pptx üretebilir.

## REVİZYON YÖNLENDİRME

KARAR: ONAYLANDI. Revizyon gerekmiyor.

Bir sonraki adım: Production Agent → `build-pptx.js` üret → `<slug>.pptx` dosyası teslim.
