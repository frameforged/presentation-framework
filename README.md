# Presentation Framework — Kullanım Kılavuzu

## Bu Ne?

Bu klasör, Claude'a "herhangi bir konu hakkında profesyonel sunum hazırla" dediğinizde arka planda çalışan çok agentlı bir sunum üretim sistemidir. 8 uzman agent sırayla devreye girerek konuyu araştırır, yapılandırır, slaytları planlar, içerik yazar ve kalite kontrol yapar.

## Nasıl Kullanılır

### 1. Bu klasörü Claude'a tanıtın

Claude Code veya Cowork oturumunuzda bu klasörü seçili klasör (workspace) olarak açın. Claude, `SKILL.md` ve `CLAUDE.md` dosyalarını okuyarak framework'ü tanıyacaktır.

### 2. Sunum isteyin

Basit:
```
Yapay zeka hakkında bir sunum hazırla
```

Detaylı:
```
Sürdürülebilir enerji hakkında, C-level yöneticilere yönelik,
15 dakikalık, ikna edici tonda, 12 slaytlık bir sunum hazırla
```

### 3. Gerisini framework halleder

Claude sırasıyla şu adımları uygular:

1. Konuyu yorumlar, amacı belirler
2. Hedef kitleyi analiz eder
3. Araştırma yapar, veri toplar
4. Anlatı yapısını kurar
5. Slayt haritasını çizer
6. İçeriği yazar
7. Görsel planı oluşturur
8. Kalite kontrol yapar
9. Onaylanırsa .pptx dosyasını üretir

### 4. Çıktınızı alın

Sonunda elinizde:
- Profesyonel bir `.pptx` dosyası
- QA puanı ve raporu
- İsterseniz konuşmacı notları

## Belirtebileceğiniz Parametreler

Hiçbirini belirtmek zorunda değilsiniz — varsayılanlar makul şekilde ayarlanmıştır.

| Ne | Varsayılan | Örnek |
|----|------------|-------|
| İzleyici | Genel profesyonel | "mühendis ekibine", "yatırımcılara", "öğrencilere" |
| Süre | 10 dakika | "5 dakikalık", "30 dakikalık" |
| Ton | Yarı-resmi | "samimi", "akademik", "ilham verici" |
| Slayt sayısı | 10-12 | "8 slayt", "20 slayt" |
| Dil | Türkçe | "İngilizce", "Türkçe-İngilizce karışık" |
| Derinlik | Orta | "genel bakış", "derin analiz" |

## Örnek Kullanımlar

```
"Blockchain teknolojisini bankacılık müdürlerine anlatan bir sunum yap"

"Şirketimizin 2025 Q4 sonuçlarını board'a sunacağım, 8 slaytlık bir deck hazırla"

"Yeni çalışanlara onboarding sunumu — samimi tonda, 15 dakika"

"Machine learning 101 — üniversite öğrencileri için, bolca görsel"

"İklim değişikliği ve tarım — konferans sunumu, 25 dakika, akademik ton"
```

## Klasör Yapısı

```
presentation-framework/
├── README.md          ← Şu an okuduğunuz dosya
├── SKILL.md           ← Framework'ün giriş noktası (Claude bunu okur)
├── CLAUDE.md          ← Teknik dokümantasyon (sistemi detaylı açıklar)
│
└── Agent'lar (her biri kendi klasöründe):
    ├── presentation-strategy/    Konuyu yorumlar, amacı belirler
    ├── audience-alignment/       Hedef kitleyi analiz eder
    ├── knowledge-synthesis/      Araştırma yapar
    ├── storyline-architect/      Hikaye akışını kurar
    ├── deck-planning/            Slayt haritası çizer
    ├── presentation-content/     İçerik yazar
    ├── visual-structuring/       Görsel plan önerir
    ├── presentation-qa/          Kalite kontrol yapar
    └── orchestrator/             Tüm süreci yönetir
```

## Sıkça Sorulan Sorular

**Sadece belirli konularda mı çalışır?**
Hayır. Konu bağımsızdır — teknolojiden sanata, finanstan eğitime her konuda çalışır.

**Mevcut bir sunumu düzenleyebilir mi?**
Bu framework sıfırdan sunum üretmek için tasarlandı. Mevcut bir .pptx'i düzenlemek istiyorsanız Claude'a doğrudan söyleyin.

**İngilizce sunum yapabilir mi?**
Evet. "İngilizce olarak hazırla" demeniz yeterli.

**Kalite kontrol ne demek?**
Son adımda QA agent'ı sunumu 5 kategoride denetler ve 5 üzerinden puanlar. 4.5 altında puan alırsa revizyon yapılır, onay verilmeden sunum teslim edilmez.

**Agent'ları tek tek kullanabilir miyim?**
Evet. Örneğin sadece araştırma istiyorsanız "knowledge-synthesis agent'ını kullanarak X konusunu araştır" diyebilirsiniz.

**Bu dosyaları değiştirmem gerekir mi?**
Hayır. Dosyalar Claude'un okuması için tasarlandı. Siz sadece ne istediğinizi söyleyin.
