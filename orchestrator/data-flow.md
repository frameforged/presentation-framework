# Pipeline Veri Akışı ve Dosya Konvansiyonu

Bu doküman, agent'lar arasında verinin nasıl aktarılacağını tanımlar. Orkestrator bu kurallara göre dosya oluşturur, okur ve agent'lara aktarır.

## Çalışma Dizini

Her sunum talebi için orkestrator bir çalışma dizini açar:

```
/outputs/
└── <slug>/                       ← Topic X'in slug hali (örn. "kahve-sunumu")
    ├── 01-strategy.md            ← Presentation Strategy çıktısı
    ├── 02-audience.md            ← Audience Alignment çıktısı
    ├── 03-research.md            ← Knowledge Synthesis çıktısı
    ├── 04-storyline.md           ← Storyline Architect çıktısı
    ├── 05-deck-plan.md           ← Deck Planning çıktısı
    ├── 06-content.md             ← Presentation Content çıktısı
    ├── 07-visual.md              ← Visual Structuring çıktısı
    ├── 08-qa-report.md           ← QA Agent raporu
    ├── build-pptx.js             ← Üretim scripti (production/ şablonundan üretilir)
    ├── <slug>.pptx               ← Nihai sunum dosyası
    └── revisions/                ← Revizyon geçmişi (varsa)
        └── iter-1/...
```

Slug üretimi: Topic X'i Türkçe-uyumlu kebab-case'e çevir. Örnek: "Yapay Zeka ve Eğitim" → "yapay-zeka-ve-egitim".

## Dosya Format Sözleşmesi

Her agent çıktısı **Markdown** olarak yazılır ve aşağıdaki üst bilgi (frontmatter) blokuyla başlar. Bu blok orkestratörün dosyayı doğrulaması için zorunludur.

```yaml
---
agent: <agent-adı>
version: 1
topic: "<Topic X>"
created: <ISO-8601 tarih>
inputs:
  - <önceki-agent-dosyası.md>   # Hangi dosyaları okuduğunu belirtir
status: complete                  # complete | partial | error
---
```

Frontmatter'ın ardından agent'ın kendi SKILL.md'sinde tanımlı çıktı formatı gelir.

## Agent → Dosya Eşlemesi

| Sıra | Agent | Çıktı Dosyası | Bağımlı Olduğu Dosyalar |
|------|-------|---------------|--------------------------|
| 1 | presentation-strategy | `01-strategy.md` | (girdi: kullanıcı isteği) |
| 2 | audience-alignment | `02-audience.md` | `01-strategy.md` |
| 3 | knowledge-synthesis | `03-research.md` | `01-strategy.md`, `02-audience.md` |
| 4 | storyline-architect | `04-storyline.md` | `02-audience.md`, `03-research.md` |
| 5 | deck-planning | `05-deck-plan.md` | `04-storyline.md` |
| 6 | presentation-content | `06-content.md` | `05-deck-plan.md`, `02-audience.md` |
| 7 | visual-structuring | `07-visual.md` | `05-deck-plan.md` |
| 8 | presentation-qa | `08-qa-report.md` | Tüm önceki dosyalar |
| 9 | production | `build-pptx.js` + `<slug>.pptx` | `06-content.md`, `07-visual.md`, `08-qa-report.md` |

## Paralellik Kuralları

Bazı adımlar eş zamanlı çalışabilir. Doğru paralellik şu şekildedir:

```
1. presentation-strategy            ──┐
                                      ├── (sıralı: önce 1, sonra 2)
2. audience-alignment ────────────────┘
       │
       ▼
3. knowledge-synthesis (1 + 2 girdi alır)
       │
       ▼
4. storyline-architect
       │
       ▼
5. deck-planning
       │
       ├──────────────┬─────────────┐
       ▼              ▼             │
6. presentation-content   7. visual-structuring   (paralel)
       └──────────────┴─────────────┘
                      │
                      ▼
8. presentation-qa
                      │
                      ▼
9. production (QA onayı sonrası)
```

**Not — paralellik düzeltmesi:** Strategy ve Audience SIRALI çalışır (Audience, Strategy çıktısını okur). Ancak Audience çok hızlıdır ve Strategy ile aynı kullanıcı girdisinden başlatılabilir; bu yüzden bazı dokümanlarda "paralel" olarak geçer. Pratik kural: Audience, Strategy bittikten sonra başlatılır.

Content + Visual gerçek paraleldir — her ikisi de yalnızca Deck Planning çıktısına bağlıdır.

## Hata ve Durum Yönetimi

Bir agent çıktıyı üretemezse frontmatter'da `status: partial` veya `status: error` yazar ve `errors:` alanı ekler:

```yaml
---
agent: knowledge-synthesis
status: error
errors:
  - "Web arama erişilemiyor — manuel veri girişi gerekli"
---
```

Orkestrator bir sonraki agent'ı başlatmadan önce durumu kontrol eder. `error` durumda pipeline durur ve kullanıcıya bildirilir.

## Revizyon Yönetimi

QA bir revizyon kararı verdiğinde orkestrator:

1. Mevcut dosyaları `revisions/iter-N/` altına taşır
2. QA raporundaki "Hata Kategorisi → Agent Eşlemesi" tablosuna göre ilgili agent'ı yeniden çalıştırır
3. Sonraki agent'ları da etkileniyorsa onları da yeniden çalıştırır (zincirleme tetikleme)

Örnek: QA "İçerik Doğruluğu" düşük puan verdiyse → Knowledge Synthesis yeniden çalışır → Content yeniden çalışır → Visual etkilenmiyorsa atlanır → QA tekrar çalışır.

## Hata Kategorisi → Agent Eşlemesi

QA Agent puanlamada düşük çıkan kategoriye göre orkestratörü yönlendirir:

| Düşük Kategori | Birincil Sorumlu Agent | Yan Etkilenen Agent'lar |
|----------------|------------------------|-------------------------|
| İçerik Doğruluğu | knowledge-synthesis | presentation-content |
| Anlatı Tutarlılığı | storyline-architect | deck-planning, presentation-content |
| Tasarım Kalitesi | visual-structuring | deck-planning |
| Teknik Uyumluluk | production | (yok) |
| Genel Etki | storyline-architect + presentation-content | visual-structuring |

Birden fazla kategori düşükse: önce daha yukarı zincirde olan agent'tan (strategy/audience) başla, aşağıya doğru zincirleme tetikle.

## Veri Bütünlüğü Kuralları

- Her agent yalnızca `inputs:` listesinde belirttiği dosyaları okuyabilir
- Hiçbir agent bir önceki agent'ın dosyasını DEĞİŞTİREMEZ — yalnızca kendi dosyasını yazar
- Orkestrator çelişki tespit ederse (örn. content slayt sayısı ≠ deck-plan slayt sayısı) revizyon tetikler
- Tüm dosyalar UTF-8 ve LF satır sonu kullanır
- Türkçe karakterler düzgün kodlanmış olmalı (bozuk karakter = otomatik revizyon)

## Çıktı Doğrulama Kontrol Listesi

Orkestrator her agent'ın çıktısını aldıktan sonra şunları kontrol eder:

- [ ] Frontmatter geçerli mi?
- [ ] `status: complete` mı?
- [ ] Beklenen bölümler (örn. "SLAYT HARITASI", "İZLEYİCİ PROFİLİ") mevcut mu?
- [ ] Slayt sayısı bir önceki adımla tutarlı mı?
- [ ] Türkçe karakter bozukluğu yok mu? (regex: `\b(Izle|olcu|basari|degil|cagri|dongu|sagla|onem)\w*\b`)
- [ ] Dosya boş değil mi (en az 500 karakter)?

Bu kontrollerden biri başarısız olursa agent yeniden çalıştırılır.
