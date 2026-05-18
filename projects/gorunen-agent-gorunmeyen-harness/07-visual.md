---
agent: visual-structuring
version: 1
topic: "Görünen Agent, Görünmeyen Harness"
created: 2026-05-06
inputs:
  - 05-deck-plan.md
status: complete
---

# Visual Structuring Çıktısı

## RENK PALETİ (Softtech Kurumsal)

| Rol | Hex | Kullanım |
|-----|-----|----------|
| Charcoal | 393939 | Görünmeyen harness arkaplanı, ana metin |
| Deep Charcoal | 35353D | Alternatif koyu ton |
| Softtech Cyan | 65D7DE | İmza aksan, vurgu, başlık |
| Cyan Light | 8AF7FB | Cyan hafif tonu |
| Soft Lila | AB80AD | İkincil aksan |
| Amber | FFCC4F | Kritik vurgu, alarm |
| White | FFFFFF | Birincil arkaplan |
| Mist Gray | F2F2F5 | Soft arka plan |
| Mid Gray | 545454 | İkincil metin |

## TİPOGRAFİ

- **Başlık:** Inter Black 36-44pt (charcoal arkaplan üzerinde white veya cyan)
- **Alt başlık:** Inter Regular 18-22pt
- **Gövde:** Inter Regular 14-16pt
- **Kod-tag başlıklar (`</...>`):** JetBrains Mono Bold 32pt
- **Büyük sayı:** Inter Black 110pt
- **Alıntı/italik:** Inter Italic 24-28pt

## İMZA TASARIM ÖĞELERİ

1. **`<` köşe işareti:** Her ana başlığın sol üstünde küçük cyan açı işareti (Softtech logosunun yansıması)
2. **`</...>` kod-tag başlık:** Harness bileşenleri için (Slayt 10-19)
3. **Cyan dalgalı line art:** Kapak ve kapanışta dekoratif arka plan elementi
4. **Highlight bantlar:** Charcoal arka plan üzerinde cyan kelime vurguları

## SLAYT BAZLI GÖRSEL PLAN

### Slayt 1 [KAPAK]
- **Layout:** kapak
- **Arkaplan:** Charcoal #393939
- **Ana Görsel:** Sol üstte küçük cyan `<` işareti, ortada büyük başlık, altında alt başlık
- **Sağ taraf:** Cyan dalgalı line art (subtle, opacity %30)
- **Alt:** Şeyma adı, ünvan, Softtech logosu
- **Renk dağılımı:** %70 charcoal, %20 cyan aksan, %10 white metin

### Slayt 2 [BÜYÜK SAYI]
- **Layout:** buyuk_sayi
- **Arkaplan:** Charcoal #393939
- **Merkez:** "%86" — Inter Black 180pt, Cyan #65D7DE
- **Alt başlık:** White, 18pt, ortalanmış
- **Kaynak:** Mid gray, 11pt, sağ alt
- **Görsel ekstra:** Tek dev rakam, çevresinde nefes alanı (whitespace), drama için bilinçli boş bırakılmış

### Slayt 3 [YANLIŞ/DOĞRU SORU]
- **Layout:** iki_sutun
- **Arkaplan:** White
- **Sol kart:** Mid gray border, soluk gri metin, üzeri çizik efekti (line through), "Yanlış soru" etiketi
- **Sağ kart:** Cyan border, charcoal metin, "Doğru soru" etiketi cyan vurgu
- **Aralarında:** Küçük "→" oku, charcoal

### Slayt 4 [ANA TEZ]
- **Layout:** alinti
- **Arkaplan:** Charcoal #393939
- **Sol vertikal aksan:** Cyan kalın çubuk (5px), yükseklik 60%
- **Metin:** Italik, 28pt, white; "harness" ve "güvenli temas yüzeyi" cyan vurgu
- **Alt:** Yazar imzası yok, sadece konu

### Slayt 5 [GÖRÜNEN AGENT]
- **Layout:** ikon_satir (sol görsel + sağ liste)
- **Arkaplan:** White
- **Sol (40%):** Cyan dolgulu daire içinde basit kullanıcı silüet ikonu (charcoal); altında "Kullanıcı"
- **Sağ (60%):** 5 maddelik liste, her madde başında küçük cyan check işareti, charcoal metin
- **Başlık:** `</ Görünen Agent />` JetBrains Mono cyan + charcoal

### Slayt 6 [13 GÖRÜNMEZ ŞEY]
- **Layout:** kart_grid (4×3 + 1)
- **Arkaplan:** Charcoal #393939
- **13 kart:** Mist gray fill, cyan border (1px), rounded
- **Metin:** White, 12pt, kart içi
- **Başlık:** White üst orta, 32pt
- **Görsel ekstra:** Kartlar grid'de düzenli, ama hafifçe rastgele rotate (-2° ile +2°) — el-çizimi hissi vermez ama statik değildir

### Slayt 7 [ANTHROPIC ALINTI]
- **Layout:** alinti
- **Arkaplan:** White
- **Üst sol:** Büyük cyan açma tırnağı `"` (60pt)
- **Metin:** Italik, 26pt, charcoal
- **Alt sağ:** Kapama tırnağı + kaynak (mid gray)
- **Alt bant:** Amber #FFCC4F arkaplan + charcoal metin "Harness is the product." — TheNewStack

### Slayt 8 [SEKTÖR KONSENSÜSÜ]
- **Layout:** kart_grid (4 kart yatay)
- **Arkaplan:** White
- **4 kart:** Charcoal border, white fill, eşit boyut
- **Her kart içi:** Şirket adı (charcoal bold) + ürün adı (mid gray) + tek satır özellik
- **Alt amber bant:** "Microsoft Agent Governance Toolkit — Nisan 2026" tek satırlık vurgu, amber arkaplan, charcoal metin

### Slayt 9 [4-KATMAN]
- **Layout:** timeline (yatay)
- **Arkaplan:** White
- **4 yatay bant (üstten alta):**
  - Model — Cyan light #8AF7FB, charcoal metin
  - Framework — Cyan #65D7DE, charcoal metin
  - Runtime — Soft lila #AB80AD, white metin
  - Harness — Charcoal #393939, white metin
- **Sağ tarafta:** Her katman için tek soru (italic mid gray)
- **Görsel:** Aşağıya doğru renk koyulaşma = derinleşme metaforu

### Slayt 10-19 [HARNESS BİLEŞENLERİ — Ortak Format]

**10 slayt için ortak görsel şablon:**

- **Layout:** ikon_satir
- **Arkaplan:** White (slaytlar 10, 12, 14, 16, 18) / Mist Gray F2F2F5 (slaytlar 11, 13, 15, 17, 19) — alternatif
- **Sol (35%):** Büyük geometrik ikon — soft lila + cyan kombinasyonu, 200×200px equivalent
- **Sağ (65%):**
  - Üst: `</ Bileşen Adı />` — JetBrains Mono Bold, 32pt, charcoal
  - Tanım: 18pt, charcoal, 1 satır
  - Soru kutusu: Cyan light arka plan, charcoal metin "Kritik soru: ..." (16pt italic)
  - Vurgu cümlesi: Charcoal arka plan + white metin, alt bant gibi (16pt bold)
- **Sayfa numarası:** Sağ alt "10/29 • Harness Bileşenleri 1/10"

**İkon önerileri (her slayt için):**
- Slayt 10 Identity: Kimlik kartı şekli (rounded rect + dikey çizgiler)
- Slayt 11 Authorization: Anahtar + ağaç hiyerarşisi
- Slayt 12 Tool Governance: 3 dikey çubuk (yeşil/sarı/kırmızı risk seviyesi)
- Slayt 13 State Management: Yer imi / playback durdurulmuş
- Slayt 14 Memory: Disk + kilit kombinasyonu
- Slayt 15 Guardrails: 7 noktalı yatay bariyer
- Slayt 16 Sandbox: Kapalı kasa / akvaryum
- Slayt 17 HITL: İki el sıkışan / onay imzası
- Slayt 18 Observability: Mercek + dalga sinyali
- Slayt 19 Evaluation: Yargı terazisi / 3-noktalı checkpoint

### Slayt 20 [SKILL LIFECYCLE & VERSİYONLAMA]
- **Layout:** iki_sutun
- **Arkaplan:** White
- **Sol (50%):** Yatay 9-aşama akış — her aşama küçük dikdörtgen + ok; cyan zincir
- **Sağ (50%):** 10 versiyon türü, 2x5 grid; her hücre charcoal border + cyan ikon
- **Alt vurgu:** Cyan italic cümle "Versiyonlanmayan agent davranışı, denetlenemeyen agent davranışıdır"

### Slayt 21 [9-KATMAN MİMARİ — ALTIN SLAYT]
- **Layout:** ozel_mimari
- **Arkaplan:** White → Charcoal gradient (üstten aşağıya)
- **9 katman (üstten alta), her biri yatay bant:**
  1. Channel — Cyan light, light metin
  2. Gateway — Cyan, charcoal metin
  3. Runtime — Cyan, charcoal metin (vurgulu)
  4. Memory — Soft lila, white metin
  5. Tool Orch — Soft lila, white metin
  6. Policy — Amber, charcoal metin
  7. HITL — Amber, charcoal metin
  8. Observability — Mid gray, white metin
  9. Lifecycle — Charcoal, white metin
- **Sol kenarda:** Yukarıdan aşağıya inen çizgi + her katman için ufak ikon
- **Sağ kenarda:** Bir kullanıcı silüeti en üstte, agent silüeti 3. katman seviyesinde, lifecycle'ta sistem ikonu
- **Alt vurgu bant:** Cyan arkaplan, charcoal bold "Bu sunumdan tek bir slaytı hatırlayacaksanız, bu olsun."

### Slayt 22 [MATURITY MODEL L0-L5]
- **Layout:** timeline (yatay yükselen)
- **Arkaplan:** White
- **6 kademe:** Soldan sağa yükseklik artıyor (basamak gibi)
  - L0 — En kısa, mid gray
  - L1 — Cyan light
  - L2 — Cyan
  - L3 — Soft lila (vurgu — "production başlangıç")
  - L4 — Soft lila + amber çerçeve
  - L5 — Charcoal + amber çerçeve (en yüksek)
- **Üst etiket (her seviye):** Seviye adı + 1 cümle açıklama
- **Alt vurgu:** Çoğu kurum L1-L2'de — bu seviyenin üstüne dikkat çekici amber ok

### Slayt 23 [MODEL RİSK vs HARNESS RİSK]
- **Layout:** iki_sutun (8-satır karşılaştırma tablosu)
- **Arkaplan:** White
- **Üst başlık:** Charcoal bold
- **Sol sütun:** "Model Riski" — soluk mid gray
- **Sağ sütun:** "Harness Riski" — cyan vurgu
- **8 satır:** Her satırda kategori (sol soluk + sağ canlı)
- **Görsel ekstra:** Sağ sütun arkasında subtle cyan halo

### Slayt 24 [YENİ SALDIRI YÜZEYLERİ]
- **Layout:** kart_grid (4×3)
- **Arkaplan:** Charcoal #393939
- **12 kart:** Amber border (uyarı tonu), charcoal fill, white metin
- **Her kart:** Saldırı türü adı (bold) + tek satır kısa açıklama
- **Üst başlık:** White, 32pt
- **Alt vurgu:** Amber italic "Bu listenin yarısı geçen yıl yoktu, önümüzdeki yıl daha uzun olacak"

### Slayt 25 [KURUMSAL DİSİPLİN — BANKA]
- **Layout:** ikon_satir
- **Arkaplan:** White
- **Sol (35%):** Bina/kurum silüeti (charcoal), Türkiye İş Bankası tarzı bina, üzerinde cyan koruma kalkanı
- **Sağ (65%):** 8 madde, her madde başında soft lila numerik etiket (1-8)
- **Üst başlık:** Charcoal bold

### Slayt 26 [MAİSTRO]
- **Layout:** iki_sutun
- **Arkaplan:** White (ortadan ikiye bölünmüş yarı-yarı görsel)
- **Sol (50%):** Cyan light arkaplan, başlık "Görünen Maistro" + 4 madde (kullanıcı tarafı)
- **Sağ (50%):** Charcoal arkaplan, başlık "Görünmeyen Harness" white + 5 madde white metin
- **Alt vurgu bant (full width):** Soft lila arkaplan, white metin "Türkiye İş Bankası'na lisanslanan, Softtech'te geliştirilen kurumsal Agent Harness platformu"
- **Sağ alt köşe:** Softtech logosu küçük

### Slayt 27 [PRODUCTION READINESS CHECKLIST]
- **Layout:** kart_grid (3 sütun × 6-7 satır)
- **Arkaplan:** White
- **3 sütun başlığı:**
  - Sütun 1 cyan: "Kimlik & Yetki"
  - Sütun 2 soft lila: "Çalışma & İzleme"
  - Sütun 3 amber: "Yönetişim & Deploy"
- **20 madde:** Numaralı, her başında küçük cyan check kutusu (boş, fotoğraflanabilir)
- **Üst başlık:** Charcoal bold
- **Alt vurgu:** "Onaylamadığınız bir madde varsa, henüz production'a hazır değilsiniz"

### Slayt 28 [KAPANIŞ — FİNAL TEZ]
- **Layout:** kapanis
- **Arkaplan:** Charcoal #393939
- **Üst yarı:** Çok büyük başlık (Inter Black 56pt, white) "Agent çağında kazanan kim olacak?"
- **Alt yarı:** Final tez (Inter Regular Italic 28pt, mix renk: "akıllı modelleri" white, "geliştirenlerin değil" mid gray, "kurumsal dünyada güvenilir sistemlere dönüştürebilenlerin" cyan, "OLACAK" amber bold)
- **En alt:** Tek satır vurgu, mid gray italic

### Slayt 29 [TEŞEKKÜR / Q&A]
- **Layout:** kapanis
- **Arkaplan:** Charcoal #393939, sağda cyan dalgalı line art (kapağın yansıması)
- **Sol (60%):**
  - Büyük "Teşekkürler" cyan başlık
  - Alt: "Sorularınız?" white, italic
- **Sağ (40%):**
  - Şeyma için yer (yuvarlak placeholder, cyan border)
  - Ünvan + şirket + LinkedIn handle
  - Alt: Softtech logosu

## RENK PALETİ ÖZETİ

| Slayt grubu | Dominant | İkincil | Aksan |
|-------------|----------|---------|-------|
| Anlatı/Hook (1, 2, 4) | Charcoal | White | Cyan + Amber |
| Çerçeve (3, 5, 7, 8, 9) | White | Mist Gray | Cyan |
| Harness Bileşenleri (10-19) | White / Mist Gray | Charcoal metin | Cyan + Soft Lila |
| Mimari (20-23) | White | Cyan | Soft Lila + Amber |
| Kurumsal (24, 25, 26) | Charcoal / White | Cyan | Amber + Soft Lila |
| Kapanış (27, 28, 29) | White / Charcoal | Cyan | Amber |

## İKON SETİ

Tüm ikonlar **outline-style** (filled değil), 2px kalınlık, geometrik. Kullanılan ana semboller:

- Kimlik (slayt 10)
- Anahtar/yetki (slayt 11)
- Risk barometresi (slayt 12)
- Yer imi (slayt 13)
- Disk + kilit (slayt 14)
- 7-nokta bariyer (slayt 15)
- Kasa (slayt 16)
- İki el (slayt 17)
- Mercek (slayt 18)
- Terazi (slayt 19)
- Bina + kalkan (slayt 25)

İkonlar PptxGenJS shape API ile çizilecek (path/composition); SVG asset gereksinimi yok.

## KAÇINILACAKLAR

- 3D efektler ❌
- Gradyan dolgular (subtle gradient hariç) ❌
- Pasta grafik ❌ (zaten kullanmıyoruz)
- Clipart/emoji ❌
- Birden fazla font ailesi ❌ (Inter + JetBrains Mono ikilisi sabit)
- Slayt başına 4'ten fazla madde ❌

## TEKNİK SPESİFİKASYON (PRODUCTION İÇİN)

- Layout: LAYOUT_16x9 (10 × 5.625 inch)
- Tüm hex değerleri PptxGenJS için # OLMADAN 6 hane
- Font fallback: Calibri (sistem garantili)
- Standart kenar boşluğu: 0.6 inch tüm yönlerde
- Alt sayfa numarası: 10pt mid gray, sağ alt köşe
