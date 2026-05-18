---
name: presentation-framework
description: "Verilen herhangi bir konu (Topic X) hakkinda arastirma yapip, icerigi yapilandirip, sunum akisi ve slayt icerikleri ureten cok agentli sunum uretim framework'u. 8 uzman agent + 1 orkestrator ile konu-bagimsiz profesyonel .pptx sunumlar uretir. Herhangi bir sunum talebi geldiginde tetiklenir: 'sunum hazirla', 'presentation yap', 'slayt olustur', 'deck hazirla', 'Topic X hakkinda sunum', veya benzer ifadeler. Is sunumlarindan egitim materyallerine, yatirimci brifinglerinden workshop iceriklerine kadar her turlu sunum ihtiyacinda bu framework'u kullan."
---

# Multi-Agent Presentation Generation Framework

Konu-bagimsiz, profesyonel sunum uretim hatti.

## Tetikleme

Bu framework asagidaki durumlarda devreye girer:
- "X hakkinda sunum hazirla"
- "Bir deck / slayt / presentation olustur"
- "Yatirimci sunumu yap"
- "Egitim materyali hazirla"
- Herhangi bir .pptx uretim talebi

## Hizli Baslangiç

Kullanicidan Topic X'i al. Eger asagidaki parametreler belirtilmemisse, varsayilanlari kullan:

| Parametre | Varsayilan |
|-----------|------------|
| Izleyici | Genel profesyonel |
| Sure | 10 dakika |
| Ton | Yari-resmi |
| Slayt sayisi | 10-12 |
| Dil | Turkce |
| Derinlik | Orta |
| Format | 16:9 |

Eksik kritik bilgi varsa (ozellikle izleyici ve amac), kullaniciya sor. Aksi halde hemen pipeline'i baslat.

## Pipeline

8 agent'i asagidaki siraya gore calistir. Her agent'in detayli talimatlari kendi SKILL.md dosyasindadir — ilgili adima geldiginde o dosyayi oku.

### FAZ 1: ANLAMA

**Adim 1 — Presentation Strategy Agent**
Oku: `presentation-strategy/SKILL.md`

Gorevi: Topic X'i yorumla, sunum amacini belirle (bilgilendirme / ikna / egitim / raporlama / hizalama), kapsami sinirlandir, cerceve sec.

Beklenen cikti:
- Konu yorumu
- Sunum amaci ve basari kriteri
- Kapsam (dahil/haric)
- Yaklasim cercevesi

**Adim 2 — Audience Alignment Agent**
Oku: `audience-alignment/SKILL.md`

Gorevi: Hedef kitleyi tanimla, bilgi seviyesini degerlendir, iletisim stratejisini belirle.

Beklenen cikti:
- Izleyici profili ve bilgi seviyesi (1-5)
- Ton, karmasiklik, dil seviyesi
- Jargon politikasi
- Gorsel/metin dengesi onerisi

> Not: Adim 1 ve 2 SIRALI calisir — Audience Alignment, Strategy ciktisini girdi olarak okur. Onceki dokumantasyondaki "paralel" ifadesi yaniltici idi; gercek paralellik yalnizca Content + Visual arasindadir.

### FAZ 2: ARASTIRMA

**Adim 3 — Knowledge Synthesis Agent**
Oku: `knowledge-synthesis/SKILL.md`

Gorevi: Konu hakkinda derinlemesine arastirma yap, bilgileri topla, dogrula ve yapilandir. Web arama araclarini kullanarak guncel veri topla.

Beklenen cikti:
- Yapilandirilmis arastirma raporu
- Cekirdek / destekleyici / zenginlestirici bilgi kategorizasyonu
- Slayt uyumlu ozet
- Kaynaklar

### FAZ 3: TASARIM

**Adim 4 — Storyline Architect Agent**
Oku: `storyline-architect/SKILL.md`

Gorevi: Arastirma ciktisini tutarli bir anlati yapisina donustur. Anlati modeli sec, slaytlar arasi gecis mantigi kur, acilis/kapanis stratejisi belirle.

Beklenen cikti:
- Secilen anlati modeli ve gerekce
- Bolum yapisi ve slayt akisi
- Duygusal harita
- Acilis ve kapanis stratejisi

**Adim 5 — Deck Planning Agent**
Oku: `deck-planning/SKILL.md`

Gorevi: Anlatiyi somut slayt haritasina donustur. Slayt sayisi, layout cesitliligi, bilgi yogunlugu ve mesaj hiyerarsisi planla.

Beklenen cikti:
- Slayt bazli detayli plan (baslik, ana mesaj, layout tipi, bolum)
- Layout dagilimi
- Yogunluk kontrolu

**Adim 6 — Presentation Content Agent**
Oku: `presentation-content/SKILL.md`

Gorevi: Her slayt icin gercek icerigi yaz — basliklar, alt basliklar, govde metni, konusmaci notlari.

Beklenen cikti:
- Slayt bazli tam icerik
- Konusmaci notlari
- Ton tutarlilik kontrolu

**Adim 7 — Visual Structuring Agent**
Oku: `visual-structuring/SKILL.md`

Gorevi: Her slayt icin gorsel temsil onerisi sun — grafik tipi, ikon, renk paleti, layout taslagi.

Beklenen cikti:
- Slayt bazli gorsel plan
- Renk paleti ozeti
- Ikon seti

> Not: Adim 6 ve 7 PARALEL calisabilir (her ikisi de Adim 5'e bagli).

### FAZ 4: KALITE KONTROL

**Adim 8 — Presentation QA Agent**
Oku: `presentation-qa/SKILL.md`

Gorevi: Tum ciktiyi 5 kategoride denetle ve puanla.

Puanlama:
- Icerik Dogrulugu (%25)
- Anlati Tutarliligi (%20)
- Tasarim Kalitesi (%25)
- Teknik Uyumluluk (%15)
- Genel Etki (%15)

Karar:
- ≥4.50 → ONAYLANDI → Faz 5'e gec
- 3.50-4.49 → KUCUK REVIZYON → Ilgili agent'a geri don, duzelt, tekrar QA
- 2.50-3.49 → BUYUK REVIZYON → Faz 3'u tekrarla
- <2.50 → REDDEDILDI → Faz 1'den baslayarak yeniden calis

Maksimum 3 revizyon iterasyonu. 3. iterasyonda hala ≥3.50 degilse kullaniciya durum raporu sun.

### FAZ 5: URETIM

Oku: `production/SKILL.md`

QA onayi alindiktan sonra Production Agent devreye girer:

1. `06-content.md`, `07-visual.md` ve `08-qa-report.md` okunur
2. `production/build-pptx.template.js` baz alinarak `<calisma-dizini>/build-pptx.js` uretilir
3. `node build-pptx.js` ile `<slug>.pptx` derlenir
4. `production/checklist.md` uzerinden uretim sonrasi dogrulama yapilir
5. Dosya kullaniciya teslim edilir

Teknik kurallar `production/SKILL.md` ve `production/checklist.md`'de detaylidir. Ozet:
- 16:9 format (LAYOUT_16x9)
- Renk kodlari # OLMADAN 6 haneli hex (ornek: "4A2C2A")
- Her slayt farkli layout (monotonluktan kacin)
- Her slaytta en az 1 gorsel oge
- Baslik ≥30pt, govde ≥14pt
- Her slayta yeni shadow/option nesnesi olustur (tekrar kullanma)

### FAZ 6 (Opsiyonel): METIN DUZENLEME

Oku: `presentation-editor/SKILL.md`

Eger kullanici teslim sonrasi metin kalitesinden memnun degilse veya mevcut bir .pptx dosyasinda iyilestirme istiyorsa, Presentation Editor devreye girer. Bu faz pipeline'in dogal bir parcasi DEGILDIR — kullanici talebi uzerine veya QA'da "Icerik Dogrulugu" disinda dil/uslup sorunlari tespit edilirse cagrilir.

Editor sunumu sifirdan uretmez; sadece metin iceriklerini iyilestirir. Tasarim, layout, renk veya gorsele dokunmaz.

## Teslim Paketi

Basarili bir calisma sonunda kullaniciya sunulan ciktilar:

1. **[sunum-adi].pptx** — Profesyonel PowerPoint dosyasi (zorunlu)
2. **QA raporu** — Kalite kontrol sonucu ve puanlama (otomatik)
3. **Konusmaci notlari** — Slayt bazli konusmaci rehberi (opsiyonel, istenirse)
4. **Icerik raporu** — Slayt bazli metin dokumu (opsiyonel, istenirse)

## Onemli Kurallar

1. QA onayi olmadan sunum TESLIM EDILEMEZ
2. Her agent yalnizca kendinden onceki agent'in ciktisini kullanir
3. Belirsizlik varsa kullaniciya sor — varsayimla ilerleme
4. Az bilgi, cok etki: her slaytta maksimum 40 kelime govde metni
5. Layout tekrari YASAK: ust uste ayni duzen kullanma
6. Her slaytta TEK ana mesaj: 2 mesaj varsa 2 slayta bol
7. Revizyon dongusunde ayni hata tekrar etmemeli
