---
agent: storyline-architect
version: 1
topic: "Görünen Agent, Görünmeyen Harness"
created: 2026-05-06
inputs:
  - 02-audience.md
  - 03-research.md
status: complete
---

# Storyline Architect Çıktısı

## ANLATI MİMARİSİ

**Seçilen Yapı:** Problem-Çözüm + Piramit melezi
**Neden Bu Yapı:** Konu doğal olarak bir paradoksa dayanır (demoda parlayan / prod'da batan). Önce problemi büyütmek (sürpriz istatistik + çelişki), sonra çözümün mimari yapısını piramit gibi katmanlı sunmak (Görünen → 4-katman → 10 bileşen → 9-katman mimari → Maturity Model) izleyiciyi adım adım derinleştirir. Final olarak kapanışta tezi tekrar tek cümleye sıkıştırır.

## SUNUM AKIŞI (5 BÖLÜM)

### BÖLÜM 1: SAHNEYE BAKARKEN — Açılış ve Tez Kuruluşu (Slayt 1-4)

**Amaç:** İzleyiciyi kürsüden almak ve "merak + sürpriz" eşiğine getirmek
**Duygusal hedef:** Merak → Şaşkınlık → "demek ki sahnenin arkasında bir şey var"

**Slayt 1 — Kapak**
Konu adı, Şeyma Sarıgıl, Generative AI Architect @ Softtech, izleyici göz ucuyla "Bu kim, neden konuşacak?" sorusunun cevabını alacak.

**Slayt 2 — Sürpriz İstatistik (Hook)**
"%86-89'u başarısız." Tek dev sayı, tek cümle açıklama. İzleyici "neden?" diye sorar — anahtar bu.

**Slayt 3 — Yanlış Soru / Doğru Soru**
"Hangi modeli kullanıyoruz?" sorusu yetersiz. "Hangi mimari disiplinle çalıştırıyoruz?" sorusu doğru. Çerçeve değişimi.

**Slayt 4 — Ana Tez**
"LLM zekayı temsil eder; harness bu zekanın gerçek dünya ile güvenli temas yüzeyini oluşturur."

**Geçiş bir sonraki bölüme:** "Peki harness tam olarak nedir? Önce ne olmadığına bakalım."

### BÖLÜM 2: SAHNE VE KULIS — İki Katmanın Adlandırılması (Slayt 5-9)

**Amaç:** "Görünen / Görünmeyen" ayrımını netleştirmek; harness'ı tanımlamak
**Duygusal hedef:** Şaşkınlık → "Ah, demek ki bu" anlama / aydınlanma

**Slayt 5 — Görünen Agent (kullanıcının gördüğü)**
Cevap, plan, tool çağrısı, rapor. İzleyici bunu zaten biliyor — onun rahatladığı zemin.

**Slayt 6 — Kullanıcı Görmediği**
Aynı çağrının arkasındaki 13 görünmez parametre (prompt versiyonu, model seçimi, tool yetkisi, memory, policy, guardrail, retry, audit, maliyet). İzleyici "Bunlar bunca zamandır neredeydi?" diye düşünür.

**Slayt 7 — Anthropic Resmi Tanımı (Alıntı)**
"Agent harness, modeli sarıp kullanıcı adına eylem yapabilmesini sağlayan yazılım altyapısı." TheNewStack: "Harness is the product." Kavramın sektörel meşruiyeti.

**Slayt 8 — Sektörün Konsensüsü**
Anthropic, OpenAI, Microsoft, AWS — hepsi harness'ı "ürün" olarak konumlandırıyor. Microsoft Agent Governance Toolkit (Nisan 2026) somut delil.

**Slayt 9 — 4-Katman Ayrımı**
Model / Framework / Runtime / Harness — her biri farklı soruya cevap verir. Bu, sunumun mimari iskeletinin kapısıdır.

**Geçiş bir sonraki bölüme:** "Harness'ın iskeleti ne kadar zengin? Şimdi açalım."

### BÖLÜM 3: HARNESS BİLEŞENLERİ — Detay Derinlik (Slayt 10-19)

**Amaç:** Harness'ın 10 ana bileşenini tek tek aktarmak; her birinin neden önemli olduğunu göstermek
**Duygusal hedef:** Anlama → Heyecan ("bu gerçek bir alan, mühendislik var burada")

Her bileşen için 1 slayt, hep aynı yapıda:
- Başlık (kod-tag stilinde): `</ Identity />`
- Tek cümle tanım
- Kritik soru veya "neden önemli" cümlesi
- Mini somut örnek (banka, müşteri verisi, vb.)

**Slayt 10 — `</ Identity />`** (Agent kim olarak hareket eder?)
**Slayt 11 — `</ Authorization />`** (Çok-boyutlu yetki: user × agent × tool × data × action)
**Slayt 12 — `</ Tool Governance />`** (Tool = el = risk yüzeyi)
**Slayt 13 — `</ State Management />`** (Agent işi nerede bıraktığını biliyor mu?)
**Slayt 14 — `</ Memory />`** (Yararlı + riskli; governance olmadan tehlikeli)
**Slayt 15 — `</ Guardrails />`** (7 noktada: input, retrieval, tool, output, cost, policy, HITL)
**Slayt 16 — `</ Sandbox />`** (Agent neye dokunabilir? — Egress control)
**Slayt 17 — `</ HITL />`** (Zayıflık değil, sorumluluk konumu)
**Slayt 18 — `</ Observability />`** (Performans değil, hesap verebilirlik)
**Slayt 19 — `</ Evaluation />`** (Final cevap değil, karar izi)

**Geçiş bir sonraki bölüme:** "Bileşenleri gördük. Şimdi bunlar bir sistemde nasıl yan yana gelir?"

### BÖLÜM 4: BÜTÜN SİSTEM — Mimari ve Olgunluk (Slayt 20-23)

**Amaç:** Bileşenleri birbirine bağlayan referans mimariyi göstermek + olgunluk modeli ile "biz neredeyiz" sorusunu sormak
**Duygusal hedef:** Aydınlanma → "Bu kapsamlı bir alan; demo değil, mühendislik"

**Slayt 20 — Skill Lifecycle ve Versiyonlama**
Skill = tekrar kullanılabilir iş yapma yöntemi. Versiyonlanmayan agent davranışı = denetlenemeyen agent davranışı. 10 farklı versiyon türü.

**Slayt 21 — 9-Katmanlı Referans Mimari**
Channel → Gateway → Runtime → Memory → Tool Orch → Policy → HITL → Observability → Lifecycle. Bu sunumun mimari altın slaytı.

**Slayt 22 — Maturity Model L0-L5**
L0 Demo'dan L5 Managed Platform'a. Çoğu kurum L1-L2'de; gerçek değer L3+'da. İzleyici kendini bir yere konumlandırır.

**Slayt 23 — Model Risk vs Harness Risk**
Risklerin önemli bölümü modelden değil, modelin nasıl çalıştırıldığından. 8-satırlık karşılaştırma tablosu.

**Geçiş bir sonraki bölüme:** "Tüm bunlar kurumsal dünyada nasıl yaşıyor? Bir de orayı görelim."

### BÖLÜM 5: KURUMSAL DÜNYA — Yerli Vaka ve Kapanış (Slayt 24-28)

**Amaç:** Kuramsal çerçeveyi gerçek bir kurumsal vakaya bağlamak (Maistro), sonra eyleme çağrı ile kapanmak
**Duygusal hedef:** Bağlanma → İlham → "Ben de bunu yapabilirim / öğrenmek istiyorum"

**Slayt 24 — Yeni Saldırı Yüzeyleri**
Prompt injection, tool injection, memory poisoning, RAG poisoning... Anthropic'in resmi savunma yazısına atıfla. "Agent ne kadar otonom hale gelirse, güvenlik konusu model güvenliğinden sistem güvenliğine kayar."

**Slayt 25 — Kurumsal Disiplin (Banka Perspektifi)**
Veri lokasyonu, gateway, müşteri verisi maskeleme, HITL kararı, agent sürüm denetimi. Banka, sağlık, sigorta gibi sektörlerde harness opsiyonel değil.

**Slayt 26 — Maistro: Yerli Agent Harness Platformu**
"Türkiye İş Bankası'na lisanslanan, Softtech'te geliştirilen yerli enterprise Agent Harness platformu." 1-2 cümle, "ürün tanıtımı değil, çerçevenin somut örneği" tonuyla.

**Slayt 27 — Production Readiness Checklist**
20 maddelik, 3 sütun gridinde. İzleyici fotoğrafını çekecek.

**Slayt 28 — Kapanış: Final Tez**
"Agent çağında rekabet, daha akıllı modelleri geliştirenlerin değil; bu modelleri kurumsal dünyada güvenilir sistemlere dönüştürebilenlerin olacak."

**Slayt 29 — Teşekkür / Q&A**
Şeyma Sarıgıl + LinkedIn/iletişim + Softtech logo

## DUYGUSAL HARİTA

```
Slayt 1   2    3    4    5    6    7    8    9    10-19   20    21    22    23    24    25    26    27    28
─────────────────────────────────────────────────────────────────────────────────────────────────────────
Açıklık → Şok → Soru → Tez → Rahat → "Ah!" → Doğr → Onay → Yapı → Anlama → Bütün → Konum → Net → Uyarı → Ciddi → Bağ → Listen → Akıl
                                                          (10 bileşen ritmik tempolu)                                          → İlham
```

## AÇILIŞ STRATEJİSİ

**Yöntem:** Şaşırtıcı istatistik açılış (slayt 2'de "%86-89")
**İlk cümle önerisi (Slayt 2 konuşma):**
> "Önümüzdeki dakikalarda anlatacağım her şey, şu sayının üzerinde duruyor. Kurumsal AI agent pilotlarının yüzde seksen altısı production'a ulaşamıyor. Ne model kötü, ne fikir kötü. Eksik olan başka bir şey."

**Neden işe yarar:** Genç AI mühendisliği öğrencilerine endüstrinin "demo cenneti / prod cehennemi" gerçeğini ilk 30 saniyede çarpar. Güvenli soruları (sektör neyi yapamadı?) sorar — kavgalı tonda değil, profesyonel.

## KAPANIŞ STRATEJİSİ

**Yöntem:** Tezin tek cümlede tekrarı + geleceğe çağrı
**Son cümle önerisi (Slayt 28 konuşma):**
> "Yarın kuracağınız sistem ne kadar otonom olursa, bugün düşünmeniz gereken kontroller o kadar derin olmalı. En akıllı modeli kullanan değil, en olgun harness'ı kuran kazanacak. O insanlardan biri olmanızı dilerim."

**Neden işe yarar:** Slogan değil çağrı, suçlayıcı değil davetkâr, mezuniyet sonrası kariyer kararı için tetikleyici.

## KONUŞMA SIRASI ÖNERİSİ (özet)

| Bölüm | Slayt | Süre | Anlatım Tempo |
|-------|-------|------|----------------|
| Açılış + Tez | 1-4 | ~3 dk | Yavaş, vurucu |
| Görünen / Görünmeyen | 5-9 | ~5 dk | Orta, soru-cevap tonu |
| Harness Bileşenleri | 10-19 | ~10 dk | Hızlı, 1 dk/bileşen |
| Mimari + Maturity | 20-23 | ~5 dk | Yavaş, derinleşen |
| Kurumsal + Kapanış | 24-29 | ~4 dk | Bağlayıcı, ilham verici |
| **TOPLAM** | **29 slayt** | **~27 dk** | + Q&A |

## PRENSİPLER UYGULAMASI

- Her slaydın sonra geleneğine bir bağlantı taşıması ✓ (geçiş cümleleri yukarıda)
- "Peki ne olmuş?" testini geçer ✓ (her slaytın bir aha-anı veya bir yapı parçası var)
- Açılış sıradan değil ✓ (sürpriz istatistik)
- Kapanış güçlü ✓ (mezuniyet sonrası kariyere köprü)
- Karmaşık bilgi basitlik içinde, basit bilgi derinlik ile ✓ (10 bileşen tek slayta sıkıştırılmıyor; ama 9-katman tek slaytta gösteriliyor)
