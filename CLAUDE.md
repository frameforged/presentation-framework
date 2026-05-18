# Multi-Agent Presentation Generation Framework

Verilen herhangi bir konu (Topic X) hakkında araştırma yapıp, içeriği yapılandırıp, sunum akışı ve slayt içerikleri üreten çok agentlı sistem.

## Ne İşe Yarar

Bu framework, tek adımlık bir "sunum yap" komutu yerine işi uzmanlaşmış 8 agent'a dağıtarak profesyonel sunum üretir. Kahve olsun, yapay zeka olsun, finansal rapor olsun — konu fark etmez. Sistem konuya göre kendini adapte eder.

## Kullanım

Basit kullanım:
```
"Topic X hakkında bir sunum hazırla"
```

Detaylı kullanım:
```
"Topic X hakkında C-level izleyiciye yönelik, 10 dakikalık,
ikna edici tonda, 10-12 slaytlık bir sunum hazırla"
```

## Agent Takımı

Sistem 8 uzman agent + 1 orkestratörden oluşur. Her agent kendi SKILL.md dosyasında detaylı şekilde tanımlanmıştır.

### Pipeline Sırası

```
Girdi: "Topic X hakkında sunum hazırla"
  │
  ▼
┌─────────────────────────────────────┐
│  1. Presentation Strategy Agent     │  Konuyu yorumlar, amacı belirler
│     presentation-strategy/SKILL.md  │  Çıktı: Kapsam, perspektif, çerçeve
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  2. Audience Alignment Agent        │  Kime hitap edildiğini belirler
│     audience-alignment/SKILL.md     │  Çıktı: İzleyici profili, ton, dil stratejisi
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  3. Knowledge Synthesis Agent       │  Araştırma yapar, veri toplar
│     knowledge-synthesis/SKILL.md    │  Çıktı: Yapılandırılmış araştırma raporu
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  4. Storyline Architect Agent       │  Anlatı yapısını kurar
│     storyline-architect/SKILL.md    │  Çıktı: Hikaye akışı, bölüm yapısı
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  5. Deck Planning Agent             │  Slayt haritasını çizer
│     deck-planning/SKILL.md          │  Çıktı: Slayt sayısı, layout, hiyerarşi
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  6. Presentation Content Agent      │  Gerçek içeriği yazar
│     presentation-content/SKILL.md   │  Çıktı: Başlık, metin, konuşmacı notu
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  7. Visual Structuring Agent        │  Görsel plan önerir
│     visual-structuring/SKILL.md     │  Çıktı: Grafik, ikon, renk, layout önerisi
└─────────────────────────────────────┘
  │
  ▼
┌─────────────────────────────────────┐
│  8. Presentation QA Agent           │  Kalite kontrol yapar
│     presentation-qa/SKILL.md        │  Çıktı: 5 kategoride puanlama + karar
└─────────────────────────────────────┘
  │
  ├── ONAYLANDI (≥4.50/5) ──▶ .pptx üretimi ──▶ Teslim
  │
  └── REVİZYON ──▶ İlgili agent'a geri dön ──▶ Tekrar QA
```

### Orchestrator

Tüm pipeline'ı yöneten merkezi koordinatör `orchestrator/SKILL.md` dosyasında tanımlıdır. Agent'lar arasındaki veri akışını, hata yönetimini ve revizyon döngüsünü kontrol eder.

## Agent Detayları

### 1. Presentation Strategy Agent
**Dosya**: `presentation-strategy/SKILL.md`
**Rol**: Konuyu yorumlar, sunum amacını (bilgilendirme, ikna, eğitim, raporlama, hizalama) belirler, kapsamı sınırlandırır ve çerçeveyi oluşturur (kronolojik, karşılaştırmalı, problem-çözüm vb.).
**Ne zaman devreye girer**: Pipeline'ın ilk adımı. Her sunum talebinde.

### 2. Audience Alignment Agent
**Dosya**: `audience-alignment/SKILL.md`
**Rol**: Hedef kitleyi tanımlar, bilgi seviyesini 5 kademeli ölçekle değerlendirir, iletişim stratejisini (ton, karmaşıklık, jargon politikası, görsel/metin dengesi) belirler.
**Ne zaman devreye girer**: Strateji belirlendikten hemen sonra. Tüm sonraki agent'ların dil ve derinlik kararlarını etkiler.

### 3. Knowledge Synthesis Agent
**Dosya**: `knowledge-synthesis/SKILL.md`
**Rol**: Konu hakkında derinlemesine araştırma yapar, bilgileri çekirdek/destekleyici/zenginleştirici olarak kategorize eder, istatistikleri doğrular, kaynakları belirtir.
**Ne zaman devreye girer**: Kapsam ve izleyici netlendikten sonra. Web arama araçlarını kullanarak güncel veri toplar.

### 4. Storyline Architect Agent
**Dosya**: `storyline-architect/SKILL.md`
**Rol**: Araştırma çıktısını tutarlı bir anlatıya dönüştürür. 6 farklı anlatı modeli sunar (Klasik, Problem-Çözüm, Kronolojik, Karşılaştırmalı, Piramit, Hikaye). Açılış/kapanış stratejileri ve duygusal harita tasarlar.
**Ne zaman devreye girer**: Araştırma tamamlandıktan sonra. Slayt planlamasının temelini oluşturur.

### 5. Deck Planning Agent
**Dosya**: `deck-planning/SKILL.md`
**Rol**: Anlatı yapısını somut slayt haritasına dönüştürür. Slayt sayısını hesaplar, her slayda tek mesaj atar, layout çeşitliliğini sağlar, bilgi yoğunluğunu kontrol eder.
**Ne zaman devreye girer**: Anlatı yapısı kurulduktan sonra. İçerik ve görsel agent'larının çalışma çerçevesini belirler.

### 6. Presentation Content Agent
**Dosya**: `presentation-content/SKILL.md`
**Rol**: Gerçek slayt içeriklerini yazar — başlıklar, alt başlıklar, madde işaretleri, konuşmacı notları. Ton tutarlılığını korur, dil kalitesi kontrolü uygular.
**Ne zaman devreye girer**: Slayt haritası hazırlandıktan sonra. Visual Structuring ile paralel çalışabilir.

### 7. Visual Structuring Agent
**Dosya**: `visual-structuring/SKILL.md`
**Rol**: Her slayt için en uygun görsel temsili önerir — grafik tipi, ikon, renk paleti, layout taslağı. Metin ağırlıklı slaytları görsel odaklı hale dönüştürür.
**Ne zaman devreye girer**: Slayt haritası hazırlandıktan sonra. Content Agent ile paralel çalışabilir.

### 8. Presentation QA Agent
**Dosya**: `presentation-qa/SKILL.md`
**Rol**: Sunumu 5 kategoride denetler — İçerik Doğruluğu (%25), Anlatı Tutarlılığı (%20), Tasarım Kalitesi (%25), Teknik Uyumluluk (%15), Genel Etki (%15). Ağırlıklı puan hesaplar ve onay/revizyon/red kararı verir.
**Ne zaman devreye girer**: Tüm içerik ve görsel hazırlandıktan sonra. Onay vermeden sunum teslim edilmez.

## QA Puanlama Sistemi

| Puan Aralığı | Karar | Aksiyon |
|--------------|-------|---------|
| 4.50 - 5.00 | ONAYLANDI | Teslime hazır |
| 3.50 - 4.49 | KÜÇÜK REVİZYON | Düzeltme sonrası tekrar QA |
| 2.50 - 3.49 | BÜYÜK REVİZYON | İlgili fazları yeniden çalıştır |
| < 2.50 | REDDEDİLDİ | Baştan oluştur |

## Opsiyonel Parametreler

Kullanıcı bunları belirtebilir (belirtmezse varsayılanlar kullanılır):

| Parametre | Varsayılan | Açıklama |
|-----------|------------|----------|
| İzleyici | Genel profesyonel | Kime hitap edecek |
| Süre | 10 dakika | Sunum süresi |
| Ton | Yarı-resmi | İletişim tonu |
| Slayt sayısı | 10-12 | Hedef slayt adedi |
| Dil | Türkçe | Sunum dili |
| Derinlik | Orta | Bilgi detay seviyesi |
| Format | 16:9 | Slayt boyutu |

## Kullanım Senaryoları

Bu framework şu tür sunumlar için kullanılabilir:

- Kurumsal iç sunumlar
- Üst yönetime brifing
- Eğitim materyalleri
- Ürün veya proje sunumları
- Yatırımcı ve paydaş özetleri
- Araştırma bazlı sunumlar
- Workshop ve seminer içerikleri
- Pazarlama ve thought leadership sunumları
- Müşteri sunumları
- Onboarding materyalleri

## Dizin Yapısı

```
presentation-framework/
├── CLAUDE.md                          ← Bu dosya (dokümantasyon)
├── README.md                          ← Kullanıcı kılavuzu
├── SKILL.md                           ← Framework giriş noktası
│
├── orchestrator/
│   ├── SKILL.md                       ← Pipeline yönetimi
│   └── data-flow.md                   ← Agent çıktı dosya konvansiyonu, paralellik, hata yönetimi
│
├── presentation-strategy/SKILL.md     ← Konu yorumlama
├── audience-alignment/SKILL.md        ← Hedef kitle analizi
├── knowledge-synthesis/SKILL.md       ← Araştırma ve sentez (kaynak eşikleri dahil)
├── storyline-architect/SKILL.md       ← Anlatı tasarımı
├── deck-planning/SKILL.md             ← Slayt planlaması (placeholder konuşmacı notu)
├── presentation-content/SKILL.md      ← İçerik yazımı (final konuşmacı notu, Türkçe karakter)
├── visual-structuring/SKILL.md        ← Görsel rehberlik
├── presentation-qa/SKILL.md           ← Kalite kontrol (QA → agent eşlemesi dahil)
│
├── production/
│   ├── SKILL.md                       ← Faz 5 üretim agent'ı
│   ├── build-pptx.template.js         ← PptxGenJS şablon scripti
│   └── checklist.md                   ← Üretim öncesi/sonrası kontrol listesi
│
├── presentation-editor/SKILL.md       ← Faz 6 (opsiyonel) metin düzenleme
│
└── archive/                           ← Eski .pptx, template, drawio ve review dosyaları
    ├── README.md
    ├── sunumlar/
    ├── templates/
    ├── drawio/
    └── review-html/
```

## Kurumsal İsimlendirme

| Kısa Ad | Kurumsal Ad | Rol |
|---------|-------------|-----|
| presentation-strategy | Presentation Strategy Agent | Konu ve amaç tanımlama |
| audience-alignment | Audience Alignment Agent | Hedef kitle uyumu |
| knowledge-synthesis | Knowledge Synthesis Agent | Bilgi sentezi |
| storyline-architect | Storyline Architect Agent | Anlatı mimarisi |
| deck-planning | Deck Planning Agent | Sunum iskelet planı |
| presentation-content | Presentation Content Agent | İçerik üretimi |
| visual-structuring | Visual Structuring Agent | Görsel yapılandırma |
| presentation-qa | Presentation QA Agent | Kalite güvencesi |
| production | Production Agent | PptxGenJS ile .pptx üretimi |
| presentation-editor | Presentation Editor | Mevcut .pptx metin iyileştirme (opsiyonel) |
| orchestrator | Pipeline Orchestrator | Merkezi koordinasyon |

## Teknik Notlar

- Her agent'ın SKILL.md dosyası bağımsız olarak okunabilir ve kullanılabilir
- Agent'lar arası veri akışı dosya tabanlıdır — detay: `orchestrator/data-flow.md`
- Sıra: Strategy → Audience → Research → Storyline → Deck → (Content + Visual) → QA → Production
- Strategy → Audience SIRALIDIR (Audience, Strategy çıktısını okur)
- Content + Visual gerçek paralel çalışabilir (her ikisi de Deck Planning'e bağlı)
- Diğer tüm adımlar sıralı olmalıdır
- QA onayı olmadan Production çalışmaz, sunum teslim edilmez
- Maksimum 3 revizyon iterasyonu desteklenir
- QA → Agent yönlendirmesi `presentation-qa/SKILL.md` içindeki "Hata Kategorisi → Agent Eşlemesi" tablosuna göre yapılır
- Knowledge Synthesis çekirdek bilgi için en az 2 bağımsız kaynak ister (≥1 tanesi seviye 4+)
- Türkçe sunumlarda karakter doğruluğu Content Agent sorumluluğundadır (üretim öncesi)
- Editor, Faz 6 olarak yalnızca kullanıcı talebiyle veya QA dil sorunu tespit ederse devreye girer

## Özet

Bu sistem, konu-bağımsız çok agentlı bir sunum üreticisidir. Verilen herhangi bir konuyu yapılandırılmış, izleyiciye uygun ve profesyonelce organize edilmiş bir slayt destesine dönüştürür. Bunu, araştırma, anlatı tasarımı, slayt yapılandırma, içerik yazımı ve kalite kontrol sorumluluklarını uzmanlaşmış agent'lara dağıtarak yapar.
