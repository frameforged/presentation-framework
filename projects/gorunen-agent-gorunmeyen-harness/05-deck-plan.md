---
agent: deck-planning
version: 1
topic: "Görünen Agent, Görünmeyen Harness"
created: 2026-05-06
inputs:
  - 04-storyline.md
status: complete
---

# Deck Planning Çıktısı

## SLAYT HARİTASI ÖZET

**Toplam Slayt:** 29
**Tahmini Süre:** ~27 dakika + Q&A
**Bölüm Yapısı:** 5 bölüm (4 + 5 + 10 + 4 + 6 slayt)

## SLAYT DETAYLARI

### BÖLÜM 1 — SAHNEYE BAKARKEN

#### Slayt 1 [KAPAK]
- **Başlık:** Görünen Agent, Görünmeyen Harness
- **Alt başlık:** Agent çağında asıl mühendislik yükü nerede birikiyor?
- **Layout:** kapak — koyu charcoal arkaplan, cyan dalgalı line art aksanı, sağda Şeyma + Softtech logosu
- **Bölüm:** Açılış
- **Görsel önerisi:** Charcoal arkaplan + üst sol köşede `<` cyan açı işareti + altta Softtech logosu + Şeyma adı, ünvan, sağ alt küçük: Webrazzi/etkinlik adı (eğer varsa)
- **Konuşmacı notu (placeholder):** İzleyiciye selam ver, kendini tanıt; "Bugün konuşacağımız konu, AI çağında ürünleştiren ile demo yapan arasındaki farkı belirleyen şeyin adı."

#### Slayt 2 [SÜRPRIZ İSTATİSTİK / HOOK]
- **Başlık:** Pilotların %86-89'u production'a ulaşamadı
- **Ana mesaj:** Sektör konsensüsü: AI agent demoları çoğunlukla başarısız olmuyor — production'a varamıyor
- **Layout:** büyük_sayi — charcoal arkaplan, dev cyan rakam (%86), altta amber alt vurgu
- **Bölüm:** Açılış
- **Görsel önerisi:** Tek dev sayı (%86) ortada, üstte mini cümle açıklama
- **Konuşmacı notu (placeholder):** Atlan ve Strata'nın 2026 raporlarına atıf; ne model kötü ne fikir kötü, başka bir şey eksik.

#### Slayt 3 [YANLIŞ SORU / DOĞRU SORU]
- **Başlık:** Yanlış Soru / Doğru Soru
- **Ana mesaj:** "Hangi modeli kullanıyoruz?" yetersizdir; "Hangi mimari disiplinle çalıştırıyoruz?" doğru sorudur
- **Layout:** iki_sutun — sol: yanlış soru (üzeri çizik), sağ: doğru soru (cyan vurgu)
- **Bölüm:** Açılış
- **Görsel önerisi:** İki yan yana kart; sol kart soluk gri (yanlış), sağ kart canlı cyan (doğru)
- **Konuşmacı notu (placeholder):** Çoğu konuşma model kalitesi etrafında dönüyor ama production'da asıl belirleyici, modelin etrafındaki sistem.

#### Slayt 4 [ANA TEZ]
- **Başlık:** Ana Tez
- **Ana mesaj:** LLM zekayı temsil eder; harness bu zekanın gerçek dünya ile güvenli temas yüzeyini oluşturur
- **Layout:** alinti — büyük italik cümle, charcoal arka plan + cyan vurgu kelimesi
- **Bölüm:** Açılış
- **Görsel önerisi:** Ortada büyük italik tez cümlesi; "harness" ve "güvenli temas yüzeyi" ifadeleri cyan
- **Konuşmacı notu (placeholder):** Bu tezi 25 dakika içinde size satmaya çalışacağım. Şimdi açalım.

### BÖLÜM 2 — SAHNE VE KULIS

#### Slayt 5 [GÖRÜNEN AGENT]
- **Başlık:** `</ Görünen Agent />`
- **Ana mesaj:** Kullanıcının deneyimlediği akıllı yüzey
- **İçerik:** Cevap verir / Plan yapar / Tool çağırır / Rapor üretir / Karar önerir
- **Layout:** ikon_satir — beyaz arkaplan, sol: kullanıcı silueti + sağ: 5 madde ikon listesi
- **Bölüm:** Çerçeve
- **Görsel önerisi:** Beyaz arkaplan, sol tarafta basit silüet ikonu (kullanıcı), sağda 5 satır ikon + metin; tonu sıcak ve aydınlık
- **Konuşmacı notu (placeholder):** Kullanıcı için agent budur; bu yüzeyde değer görünür. Ama mimari açıdan bu sadece sonuç.

#### Slayt 6 [KULLANICININ GÖRMEDİĞİ]
- **Başlık:** Kullanıcının Görmediği
- **Ana mesaj:** Aynı çağrının arkasında 13 görünmez parametre var
- **İçerik:** prompt versiyonu / model seçimi / tool yetkisi / memory okuması / policy / guardrail / retry / audit / maliyet / vs.
- **Layout:** kart_grid — charcoal arkaplan, 4x3 grid, her kart bir görünmez parametre
- **Bölüm:** Çerçeve
- **Görsel önerisi:** Charcoal arkaplan + 12-13 küçük kart, cyan border, soft fade
- **Konuşmacı notu (placeholder):** Bunlar bunca zamandır kullanıcıdan saklı duruyor — ama production'da asıl kritik şeyler bunlar.

#### Slayt 7 [ANTHROPIC TANIMI]
- **Başlık:** Anthropic'in resmi tanımı
- **Ana mesaj:** "Agent harness, modeli sarıp kullanıcı adına eylem yapabilmesini sağlayan yazılım altyapısı"
- **Layout:** alinti — beyaz arkaplan, büyük italik alıntı, kaynak: Anthropic + TheNewStack 2026
- **Bölüm:** Çerçeve
- **Görsel önerisi:** Büyük "" işaretleri (cyan), italik metin, sağ alt köşede kaynak
- **Konuşmacı notu (placeholder):** TheNewStack başlığı: "Harness is the product." Anthropic, OpenAI, Microsoft hepsi aynı noktada birleşiyor.

#### Slayt 8 [SEKTÖRÜN KONSENSÜSÜ]
- **Başlık:** Sektör harness'ı "ürün" olarak konumlandırıyor
- **Ana mesaj:** 4 büyük oyuncu, aynı strateji
- **İçerik:** Anthropic Managed Agents / OpenAI Agents SDK / Microsoft Agent Service / AWS Bedrock AgentCore + Microsoft Agent Governance Toolkit (Nisan 2026)
- **Layout:** kart_grid — beyaz arkaplan, 4 logo karşılaştırma kartı + alt 1 vurgu
- **Bölüm:** Çerçeve
- **Görsel önerisi:** 4 kart yan yana (charcoal border, beyaz iç) + altta amber bant: "Microsoft Agent Governance Toolkit — Nisan 2026"
- **Konuşmacı notu (placeholder):** Konsensüs tek başına bir argüman değil, ama yön gösterici. Microsoft toolkit'i somut delil.

#### Slayt 9 [4-KATMAN AYRIMI]
- **Başlık:** Model / Framework / Runtime / Harness
- **Ana mesaj:** Her katman farklı soruya cevap verir
- **İçerik:**
  - Model → Ne yapılmalı?
  - Framework → Nasıl kodlarım?
  - Runtime → Akış nasıl ayakta kalır?
  - Harness → Güvenilir çalışma nasıl sağlanır?
- **Layout:** timeline — yatay 4 katman bandı, soldan sağa derinleşme
- **Bölüm:** Çerçeve
- **Görsel önerisi:** Yatay 4 bant; soldan sağa renk koyulaşması (light cyan → cyan → soft lila → charcoal)
- **Konuşmacı notu (placeholder):** Bu sunumun mimari iskeleti; harness en derinde, production disiplinini taşır.

### BÖLÜM 3 — HARNESS BİLEŞENLERİ (10 slayt — her biri aynı yapı)

**Ortak yapı (Slayt 10-19):**
- Layout: ikon_satir
- Arkaplan: beyaz veya soft mist gray
- Başlık: `</ [Bileşen Adı] />` — cyan kod-tag
- Sol: büyük geometrik ikon (cyan + soft lila)
- Sağ: 1 cümle tanım + 1 kritik soru + 1 kurumsal cümle
- Bölüm etiketi: "Harness Bileşenleri 10/[N]"

#### Slayt 10 [`</ Identity />`]
- **Tanım:** Agent sistemde kim olarak hareket eder?
- **Kritik soru:** Service identity mi, user on-behalf-of mu, delegated mi?
- **Vurgu cümlesi:** "Agent kimliği, kullanıcı kimliği kadar ciddi tasarlanmalıdır."
- **İkon önerisi:** Kimlik kartı / parmak izi
- **Konuşmacı notu (placeholder):** Microsoft ve AWS bunu artık platform kabiliyeti olarak ele alıyor.

#### Slayt 11 [`</ Authorization />`]
- **Tanım:** Çok-boyutlu yetki: user × agent × tool × data × action level
- **Kritik soru:** RBAC tek başına yeterli mi?
- **Vurgu cümlesi:** "Bu agent bu kullanıcı adına bu tool'u bu kayıtla çağırabilir mi?"
- **İkon önerisi:** Anahtar zinciri / hiyerarşik yetki ağacı
- **Konuşmacı notu (placeholder):** Maistro gibi platformda bu özellikle kritik — kullanıcı agent yaratır, tool bağlar, başkasına yetki verir.

#### Slayt 12 [`</ Tool Governance />`]
- **Tanım:** Tool, sistemin elidir; her el aynı riski taşımaz
- **Kritik soru:** Web search vs müşteri verisi update vs ödeme transferi — aynı yetki modeli mi?
- **Vurgu cümlesi:** "Agent'a tool vermek, agent'a yetki vermektir."
- **İkon önerisi:** Üç renkli risk seviye barometresi (yeşil/sarı/kırmızı)
- **Konuşmacı notu (placeholder):** Anthropic MCP iki yönlü bağlantı sağlıyor — temas yüzeyi büyüyor, governance kritik.

#### Slayt 13 [`</ State Management />`]
- **Tanım:** Agent işi nerede bıraktığını biliyor mu?
- **Kritik soru:** Uzun bir görevde retry, resume, checkpoint var mı?
- **Vurgu cümlesi:** "State yönetimi olmayan agent, her seferinde yeniden başlayan bir demo'dur."
- **İkon önerisi:** Yer imi / durdurulmuş playback
- **Konuşmacı notu (placeholder):** Senin yarım saatlik bir görevin var; agent'ın 23. dakikasında patladı — ne olur?

#### Slayt 14 [`</ Memory />`]
- **Tanım:** Hatırlama kabiliyeti mi, yönetişim riski mi?
- **Kritik soru:** Memory write/read policy, retention, forget mekanizması var mı?
- **Vurgu cümlesi:** "Memory agent'ı kişiselleştirir; governance memory'i güvenilir kılar."
- **İkon önerisi:** Kasaya kilit / hafıza diski
- **Konuşmacı notu (placeholder):** AWS AgentCore memory'yi runtime resource olarak izliyor — sadece veri saklama değil.

#### Slayt 15 [`</ Guardrails />`]
- **Tanım:** Sınır çizgileri 7 noktada çalışır
- **Kritik soru:** Output filtre yeterli mi?
- **İçerik (mini liste):** input / retrieval / tool / output / cost / policy / HITL
- **Vurgu cümlesi:** "Guardrail, agent davranışını kurum sınırları içinde tutmaktır — sansür değil."
- **İkon önerisi:** 7 noktalı bir bariyer / şerit / kalkan
- **Konuşmacı notu (placeholder):** OpenAI Agents SDK guardrail mekanizmasını execution pipeline'la birlikte düşünüyor — mimari mesele.

#### Slayt 16 [`</ Sandbox />`]
- **Tanım:** Agent neye dokunabilir? — Egress control
- **Kritik soru:** Browser, kod yürütme, file system erişimi nasıl kısıtlanmalı?
- **Vurgu cümlesi:** "Sandbox, agent zekası ile sistem kaynakları arasındaki güvenlik tamponudur."
- **İkon önerisi:** Akvaryum / kapalı kasa
- **Konuşmacı notu (placeholder):** Anthropic browser-use injection yazısı — güvenilmeyen içerik agent davranışını ele geçirebilir.

#### Slayt 17 [`</ HITL />`]
- **Tanım:** Yüksek riskli aksiyonlarda insan onayı
- **Kritik soru:** E-posta, ödeme, dosya silme — agent'a tek başına bırakılabilir mi?
- **Vurgu cümlesi:** "HITL agent'ın yeteneksiz olduğunu göstermez; sorumluluk sınırlarını gösterir."
- **İkon önerisi:** İki el / onay imzası
- **Konuşmacı notu (placeholder):** HITL'i yavaşlık olarak görmek yanlış; risk yönetiminin parçası.

#### Slayt 18 [`</ Observability />`]
- **Tanım:** Agent çalıştı bilgisi yetersizdir
- **Kritik soru:** Niyet, plan, tool seçimi, retrieval, prompt versiyonu, token, retry — hepsi izlenebiliyor mu?
- **Vurgu cümlesi:** "Observability performans metriği değil, hesap verebilirlik mekanizmasıdır."
- **İkon önerisi:** Mercek / radar
- **Konuşmacı notu (placeholder):** AWS AgentCore Observability — token, latency, error rate metrikleri operasyonel kalite konusu.

#### Slayt 19 [`</ Evaluation />`]
- **Tanım:** Final cevap kalitesi yetersizdir
- **Kritik soru:** Niyet anlaşıldı mı? Plan doğru mu? Tool seçimi? Retrieval? Policy?
- **Vurgu cümlesi:** "Agent kalitesi, karar izinin kalitesidir."
- **İkon önerisi:** Çoklu kontrol noktası / yargı terazisi
- **Konuşmacı notu (placeholder):** Model evaluation çıktıya bakar; agent evaluation karar zincirine.

### BÖLÜM 4 — BÜTÜN SİSTEM

#### Slayt 20 [SKILL LIFECYCLE & VERSIYONLAMA]
- **Başlık:** Skill Lifecycle ve 10 Versiyon Boyutu
- **Ana mesaj:** Versiyonlanmayan agent davranışı denetlenemez
- **İçerik:** Skill lifecycle 9 aşama (discovery → retirement) + 10 versiyon türü (agent, prompt, model, tool, skill, RAG index, embedding, policy, guardrail, runtime)
- **Layout:** iki_sutun — sol: lifecycle akışı, sağ: 10 versiyon listesi
- **Bölüm:** Mimari
- **Görsel önerisi:** Sol akış diyagramı (yatay), sağ kart grid (10 versiyon türü)
- **Konuşmacı notu (placeholder):** Bir agent çıktısı denetlenmek istendiğinde bu 10 boyut bilinmek zorunda — regülasyon, audit, sorumluluk meselesi.

#### Slayt 21 [9-KATMANLI REFERANS MİMARİ] ⭐ ALTIN SLAYT
- **Başlık:** Referans Agent Harness Mimarisi
- **Ana mesaj:** Kullanıcı sadece agent'ı görür; arkasındaki 9 katman onu güvenilir kılar
- **İçerik:** Channel / Gateway / Runtime / Memory / Tool Orch / Policy & Guardrail / HITL / Observability / Lifecycle
- **Layout:** kart_grid — yatay 9-katman, her katman renkli bant + içeride 2-3 alt-component
- **Bölüm:** Mimari
- **Görsel önerisi:** Yatay 9 katman bandı; üstte cyan tonu, ortada lila, altta soft amber; her katmanda mini ikonlar; kullanıcı simgesi en üstte (tek görünür), agent'ın yer aldığı katmanlar derinleşerek aşağı
- **Konuşmacı notu (placeholder):** Bu sunum tek bir slaytı hatırlasanız bu olmalı. Bu 9 katmanın hangisi olmadan çalışıyorsanız, prod'a girmeden patlayacaksınız.

#### Slayt 22 [MATURITY MODEL L0-L5]
- **Başlık:** Agent Harness Maturity Model
- **Ana mesaj:** Çoğu kurum L1-L2'de demo yapıyor; gerçek değer L3+'da
- **İçerik:** L0 Prompt Demo / L1 Tool-Using / L2 Stateful / L3 Governed / L4 Durable / L5 Managed Platform
- **Layout:** timeline — 6 seviyeli yatay maturity skalası
- **Bölüm:** Mimari
- **Görsel önerisi:** Soldan sağa 6 kademe, her kademe yükseklik artıyor; cyan dolgulu gradient
- **Konuşmacı notu (placeholder):** Kendi sisteminizi konumlandırın. L0-L2 demo dünyası, L3+ üretim disiplini.

#### Slayt 23 [MODEL RİSK vs HARNESS RİSK]
- **Başlık:** Model Risk vs Harness Risk
- **Ana mesaj:** Risklerin önemli bölümü modelden değil, modelin nasıl çalıştırıldığından doğar
- **İçerik:** 8 satırlık karşılaştırma (Doğruluk, Güvenlik, Gizlilik, Operasyon, Maliyet, Denetim, Yetki, Sorumluluk)
- **Layout:** iki_sutun — sol: model riski, sağ: harness riski
- **Bölüm:** Mimari
- **Görsel önerisi:** İki yan yana sütun, her satırda model riski (üzeri çizilmemiş) ve karşılığı (cyan ile öne çıkarılmış)
- **Konuşmacı notu (placeholder):** Halüsinasyon model riski; yanlış retrieval harness riski. İki ayrı problem, iki ayrı çözüm.

### BÖLÜM 5 — KURUMSAL DÜNYA + KAPANIŞ

#### Slayt 24 [YENİ SALDIRI YÜZEYLERİ]
- **Başlık:** Yeni Saldırı Yüzeyleri
- **Ana mesaj:** Agent ne kadar otonom hale gelirse, güvenlik konusu model güvenliğinden sistem güvenliğine kayar
- **İçerik:** Prompt injection / Tool injection / Memory poisoning / RAG poisoning / Privilege escalation / Credential leakage / Cross-tenant leak / Unauthorized tool exec / Data exfiltration / Unbounded loop / Malicious MCP / Supply chain
- **Layout:** kart_grid — 4x3 grid, her kart bir saldırı türü
- **Bölüm:** Kurumsal
- **Görsel önerisi:** Charcoal arkaplan, 12 kart amber border (uyarı tonu), her kartta kısa isim + tek satır
- **Konuşmacı notu (placeholder):** Anthropic prompt injection savunmaları yazısı — browser kullanan agent'lar güvenilmeyen içerik tehdidi altında.

#### Slayt 25 [KURUMSAL DİSİPLİN — BANKA]
- **Başlık:** Kurumsal Disiplin: Neden Her Kurum Kendi Harness'ını Düşünmek Zorunda?
- **Ana mesaj:** Hazır framework + hazır runtime başlangıç için yeterli; ama her kurum kendi risk iştahı, regülasyonu, veri politikasıyla harness'ı içselleştirir
- **İçerik:** 8 banka sorusu (veri lokasyonu, gateway, müşteri verisi maskeleme, HITL kararı, agent sürüm denetimi, model çağrı çıkış noktası, prompt-output log maskeleme, agent karar denetimi)
- **Layout:** ikon_satir — sol: banka silüeti, sağ: 8 madde soru
- **Bölüm:** Kurumsal
- **Görsel önerisi:** Banka/kurum silüeti + sağda 8 maddelik soru kartları (Soft lila vurgu)
- **Konuşmacı notu (placeholder):** Bankacılık ve diğer regüle sektörler harness gerekliliğini en net gösteren alanlar.

#### Slayt 26 [MAİSTRO]
- **Başlık:** Maistro: Yerli Kurumsal Agent Harness Platformu
- **Ana mesaj:** Türkiye İş Bankası'na lisanslanan, Softtech'te geliştirilen kurumsal agent işletim katmanı
- **İçerik:** "Görünen Agent" + "Görünmeyen Harness" ayrımının somut Türkiye örneği. Teknik özellikler (PII anonymization, hibrit LLM, multi-channel, OAuth2)
- **Layout:** iki_sutun — sol: Maistro ne yapar (görünen), sağ: harness disiplini (görünmeyen)
- **Bölüm:** Kurumsal
- **Görsel önerisi:** Sol cyan tonu (görünen agent katmanı), sağ charcoal (görünmeyen harness); arasında köprü/akış göstergesi
- **Konuşmacı notu (placeholder):** Maistro'yu detaylı tanıtmıyorum — bu çerçevenin somut bir Türkiye örneği. Yerli bir mühendislik üretimi ve regüle ortamda yaşıyor.

#### Slayt 27 [PRODUCTION READINESS CHECKLIST]
- **Başlık:** Production Readiness Checklist
- **Ana mesaj:** Production-ready agent doğru cevap veren değil, doğru sınırlar içinde, doğru izlerle, doğru yetkilerle çalışan agent'tır
- **İçerik:** 20 maddelik kontrol listesi, 3 sütun
- **Layout:** kart_grid — beyaz arkaplan, 3 sütun × 6-7 satır checklist
- **Bölüm:** Kurumsal
- **Görsel önerisi:** Beyaz arkaplan, 20 satır numaralı liste (3 sütun); her madde başında küçük cyan check işareti
- **Konuşmacı notu (placeholder):** Bu listeyi fotoğraflayın — ekibinizle paylaşın. Kuracağınız her sistemde 20 sorunun cevabı net olmalı.

#### Slayt 28 [KAPANIŞ — FİNAL TEZ]
- **Başlık:** Kazanan kim olacak?
- **Ana mesaj:** Agent çağında rekabet, daha akıllı modelleri geliştirenlerin değil; bu modelleri kurumsal dünyada güvenilir sistemlere dönüştürebilenlerin olacak
- **Layout:** kapanis — charcoal arkaplan, dev cyan başlık, alt amber alt başlık
- **Bölüm:** Kapanış
- **Görsel önerisi:** Charcoal arkaplan, ortada dev cümle; cyan ve amber kontrastı; "rekabet" ve "güvenilir sistemler" vurgu kelimeleri
- **Konuşmacı notu (placeholder):** Yarın kuracağınız sistem ne kadar otonom olursa, bugün düşünmeniz gereken kontroller o kadar derin olmalı.

#### Slayt 29 [TEŞEKKÜR / Q&A]
- **Başlık:** Teşekkürler — Sorularınız?
- **Ana mesaj:** Şeyma Sarıgıl • Generative AI Architect @ Softtech
- **Layout:** kapanis — charcoal arkaplan, kişi bilgileri + Softtech logo + LinkedIn QR
- **Bölüm:** Kapanış
- **Görsel önerisi:** Şeyma fotoğrafı (yuvarlak çerçeveli, cyan border) + Softtech logosu + LinkedIn QR kod + "Sorularınız?" başlığı
- **Konuşmacı notu (placeholder):** Sorularınızı bekliyorum; LinkedIn'den de ulaşabilirsiniz.

## LAYOUT DAĞILIMI

| Layout | Slayt Sayısı | Slayt No |
|--------|--------------|----------|
| kapak | 1 | 1 |
| buyuk_sayi | 1 | 2 |
| iki_sutun | 4 | 3, 20, 23, 26 |
| alinti | 2 | 4, 7 |
| ikon_satir | 12 | 5, 10-19, 25 |
| kart_grid | 5 | 6, 8, 24, 27 |
| timeline | 2 | 9, 22 |
| ozel_mimari | 1 | 21 |
| kapanis | 2 | 28, 29 |

Layout çeşitliliği iyi. Ardışık iki ikon_satir slaytı (10-19) bilinçli bir tempo karşılığı (10 bileşen ritmik akışı için); aralarında ufak görsel varyasyonlar (ikon değişimi) tek düzeliği önler.

## YOĞUNLUK KONTROLÜ

- Hiçbir slaytta 4 maddeden fazla içerik yok
- Hiçbir slaytta 40 kelimeden fazla gövde yok
- Her slayt tek mesaja sahip
- 10-19 arası tempo: 1 dakika/slayt — "tempo değişimi" için 9. ve 20. slaytlarda doğal yavaşlama (mimari katmanlar)

## KONUŞMACI NOTU SAHİBİ

Bu plandaki tüm "konuşmacı notu (placeholder)" alanları yer tutucudur. Final 2-4 cümlelik konuşmacı notları **Presentation Content Agent** tarafından yazılacaktır.
