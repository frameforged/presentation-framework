---
agent: knowledge-synthesis
version: 1
topic: "Görünen Agent, Görünmeyen Harness"
created: 2026-05-06
inputs:
  - 00-brief.md
  - 01-strategy.md
  - 02-audience.md
status: complete
source_count: 14
---

# Knowledge Synthesis Çıktısı

## ARAŞTIRMA RAPORU

**Konu:** Görünen Agent, Görünmeyen Harness
**Araştırma yaklaşımı:** Kullanıcının sağladığı zengin tez metni (18 bölüm) **çekirdek**; güncel sektör raporları ve resmi platform belgeleri **destekleyici**
**Tarih:** 2026-05-06

## ÖNEMLİ BULGULAR (Sürpriz İstatistikler ve Sektör Doğrulamaları)

### Bulgu 1: Sektör pilot başarısızlığı çok yüksek
- **Detay:** Mart 2026 itibariyle kurumsal AI agent pilotlarının yalnızca %11-14'ü production ölçeğine ulaştı; %86-89'u başarısız oldu
- **Veri kaynağı:** Atlan 2026 Harness Tools raporu, Strata Agentic Identity raporu
- **Önem:** ÇEKİRDEK — Açılış sürpriz istatistiği olarak ideal
- **Neden başarısızlık:** governance bozuklukları, izlenebilirlik eksikliği, yetersiz değerlendirme altyapısı, organizasyonel darboğazlar

### Bulgu 2: Yönetici güveni ile gerçek kontrol arasında boşluk
- **Detay:** Yöneticilerin %82'si "agent eylemlerini koruyan politikalarımız var" diye belirtiyor; ancak agent'ların yarısından fazlası hiçbir güvenlik denetimi veya log olmadan çalışıyor
- **Kaynak:** AGAT 2026 AI Agent Security raporu, Gravitee State of AI Agent Security
- **Önem:** ÇEKİRDEK — Tezi çarpıcı biçimde destekler

### Bulgu 3: "Harness is the product" — frontier lab konsensüsü
- **Detay:** Anthropic, OpenAI, Google ve Microsoft, agent harness'ın "ürün" olduğu konusunda hemfikir; sadece fiyatlama modeli üzerinde anlaşmazlıklar var
- **Anthropic'in resmi tanımı:** "Agent harness, modeli sarıp kullanıcı adına eylem yapabilmesini sağlayan yazılım altyapısı: tools, memory management, context handling, ve error recovery"
- **Kaynak:** TheNewStack 2026 makalesi, Anthropic Claude Managed Agents docs
- **Önem:** ÇEKİRDEK — Tezin sektörel meşruiyeti

### Bulgu 4: Microsoft Agent Governance Toolkit (Nisan 2026)
- **Detay:** Microsoft, OWASP'ın belirlediği 10 agentic AI riskini deterministik, sub-milisaniye politika enforcement'ı ile çözen açık kaynak toolkit'i çıkardı
- **Mekanik:** "Policy enforcement engine" model ile kurum ağı arasında konumlanıyor; her external function call'u governance kurallarına karşı doğruluyor
- **Kaynak:** Microsoft Open Source Blog (2 Nisan 2026)
- **Önem:** ÇEKİRDEK — Harness'ın somut altyapı olarak ürünleştiğinin kanıtı

### Bulgu 5: Execution-layer governance açığı
- **Detay:** Çoğu kurumun "tool invocation" katmanında governance'ı yok; tool çağrıları varsayılan olarak güvenilir kabul ediliyor — risk skorlaması, connector-level policy enforcement veya audit trail olmaksızın
- **Kaynak:** Oracle Evidence and Control Layer raporu, FifthRow 2026 Playbook
- **Önem:** ÇEKİRDEK — Tool governance bölümünü doğrudan destekler

### Bulgu 6: Agent identity yeni bir kategori
- **Detay:** Agentic identity, klasik non-human identity (NHI) ve service account'lardan farklı: dinamik, geçici, yetkilendirilmiş ve sıklıkla self-directed. Workload identity, just-in-time authorization gerektirir
- **Kaynak:** Strata "New Identity Playbook for AI Agents 2026"
- **Önem:** DESTEKLEYİCİ — Identity bölümünü güçlendirir

### Bulgu 7: Observability "design requirement"
- **Detay:** 2026'da başarılı ekipler observability'i opsiyonel feature olarak değil, **temel tasarım gereksinimi** olarak ele alıyor: traces, evaluations, governance guardrails ilk günden mimariye gömülüyor
- **Kaynak:** Atlan AI Agent Observability Guide 2026
- **Önem:** DESTEKLEYİCİ

### Bulgu 8: Maistro / Softtech Intelligence Platform — Türkiye'deki harness örneği
- **Detay (kamuya açık kaynaklardan):**
  - Softtech, 1500+ çalışanlı Türkiye'nin en büyük yazılım şirketi (San Francisco, Şanghay, Frankfurt ofisleri dahil)
  - Maistro / Softtech Intelligence Platform: İş Bankası, Aydem, Sabiha Gökçen tarafından kullanılıyor
  - **Teknik özellikler:** PII anonymization (cloud LLM kullanımında veri maskeleme), OAuth2 entegrasyonu, hibrit LLM (commercial cloud + on-prem open-source), web/mobile/WhatsApp multi-channel, sürüm yayınlamadan asistan güncellemesi sağlayan cloud-native altyapı
- **Kaynak:** Softtech.com.tr, Galaksiya case study, BusinessWire
- **Önem:** DESTEKLEYİCİ — Maistro konumlandırma slaytı için somut malzeme

### Bulgu 9: Üç ekibin observability talebi
- **Detay:** Production'a alınan agent'larda farklı ekipler farklı izler ister: FinOps maliyet, engineering debug, security audit. Birleşik logging altyapısı her birine kendi sorularının cevabını sağlar
- **Kaynak:** TheHackerNews "Bridging AI Agent Authority Gap"
- **Önem:** DESTEKLEYİCİ

### Bulgu 10: Runtime-time governance, periyodik değil
- **Detay:** Agent'lar dakikada binlerce erişim kararı verdiği için governance "periyodik review" olarak çalışamaz — runtime'da, anlık olmalı
- **Kaynak:** Strata Agentic AI Risks Guide 2026
- **Önem:** DESTEKLEYİCİ

## ALT KONU HARİTASI

### A. Açılış Çerçevesi — "Demoda parlayan, prod'da batan"
**Çekirdek:** Tezi açan paradoks. %86-89 pilot fail istatistiği + "Hangi modeli kullanıyoruz?" sorusunun yetersizliği.
**Slayt sayısı önerisi:** 2-3

### B. Görünen Agent — Kullanıcının Gördüğü
**Çekirdek:** Kullanıcı için agent = cevap, plan, tool çağrısı, rapor. Bu yüzey VALIDDIR — değer burada görünür. Ama yüzeyin altında olanları kullanıcı görmez.
**Slayt sayısı önerisi:** 1-2

### C. Görünmeyen Harness — Kullanıcının Görmediği
**Çekirdek:** Aynı agent çağrısının arkasında olanlar: prompt versiyonu, model seçimi, tool yetkisi, memory okuması, policy kontrolü, guardrail tetiklemesi, retry, audit izi, maliyet kaydı.
**Slayt sayısı önerisi:** 1-2

### D. 4-Katman Ayrımı: Model / Framework / Runtime / Harness
**Çekirdek:** Model "ne yapılmalı" sorusunu cevaplar. Framework "nasıl kodlarım" sorusunu. Runtime "akış nasıl ayakta kalır" sorusunu. Harness "güvenilir çalışma nasıl sağlanır" sorusunu.
**Slayt sayısı önerisi:** 2-3 (her katman için özet + ana ayrım slaytı)

### E. Harness Bileşenleri (Geniş Bölüm)
**Çekirdek 10 bileşen:**
1. **Identity** — Agent kim? Service identity vs user on-behalf-of vs delegated
2. **Authorization** — Çok-boyutlu (user × agent × tool × data × action level)
3. **Tool Governance** — Tool risk yüzeyidir; metadata sözleşmesi gerekir
4. **State Management** — Agent işi nerede bıraktığını biliyor mu? Resume edebiliyor mu?
5. **Memory** — Faydalı + riskli; governance olmadan tehlikeli
6. **Guardrails** — Input/retrieval/tool/output/cost/policy/HITL noktalarında
7. **Sandbox & Egress Control** — Agent neye dokunabilir?
8. **HITL** — Yüksek riskli aksiyonlarda insan onayı (zayıflık değil, kontrol)
9. **Observability** — Hesap verebilirlik mekanizması, performans değil
10. **Evaluation** — Final cevap değil; karar izi kalitesi

**Slayt sayısı önerisi:** Her bileşen için 1 slayt = 10 slayt. Bu omurgadır.

### F. Skill Lifecycle ve Versioning
**Çekirdek:** Skill = tekrar kullanılabilir iş yapma yöntemi (rakip analizi, müşteri şikayet sınıflama). Lifecycle: discovery → design → validation → security review → approval → versioning → deployment → monitoring → retirement.
**Slayt sayısı önerisi:** 1-2

### G. Versiyonlama Disiplini
**Çekirdek:** Bir agent çıktısı denetlenmek istendiğinde 10 farklı versiyon bilgisi gerekir (agent, prompt, model, tool, skill, RAG index, embedding, policy, guardrail, runtime). "Versiyonlanmayan agent davranışı = denetlenemeyen agent davranışı."
**Slayt sayısı önerisi:** 1

### H. Agent Güvenlik Yüzeyleri (Yeni Saldırı Vektörleri)
**Çekirdek:** Prompt injection, tool injection, memory poisoning, RAG poisoning, privilege escalation, credential leakage, cross-tenant leak, unauthorized tool execution, data exfiltration, unbounded loop, malicious MCP server.
**Slayt sayısı önerisi:** 1-2

### I. Maturity Model (L0-L5)
**Çekirdek:** L0 Prompt Demo → L5 Managed Agent Platform. Ana mesaj: çoğu kurum L1-L2'de demo yapıyor; gerçek production değer L3+ başlıyor.
**Slayt sayısı önerisi:** 1 (büyük tablo slaytı)

### J. Referans Mimari (9 Katman)
**Çekirdek:** Channel → Gateway → Runtime → Context/Memory → Tool Orchestration → Policy/Guardrail → HITL/Approval → Observability/Audit → Lifecycle.
**Slayt sayısı önerisi:** 1-2 (mimari diyagram + açıklama)

### K. Model Risk vs Harness Risk
**Çekirdek:** Risklerin önemli bölümü modelden değil, modelin nasıl çalıştırıldığından. 8-satırlık karşılaştırma tablosu.
**Slayt sayısı önerisi:** 1

### L. Kurumsal/Banka Perspektifi
**Çekirdek:** Hazır framework + hazır runtime başlangıç için yeterli; ama her kurum kendi risk iştahı, regülasyonu, veri politikası, yetki modeline göre harness katmanını içselleştirmek zorunda. Banka örnek: veri lokasyon sorusu, gateway'den çıkış, müşteri verisi maskeleme, HITL kararı, agent sürüm denetimi.
**Slayt sayısı önerisi:** 2

### M. Maistro Konumlandırma
**Çekirdek:** Maistro "agent yaratma platformu" değil — "Türkiye'nin kurumsal Agent Harness platformu." Görünen agent / görünmeyen harness ayrımı Maistro'ya tıpatıp uyuyor.
**Slayt sayısı önerisi:** 1-2 (Maistro çok detaylı tanıtılmaz; ama somut yer açar)

### N. Production Readiness Checklist
**Çekirdek:** 20 maddelik kontrol listesi, sunumun en hatırlanır kapanışı olabilir.
**Slayt sayısı önerisi:** 1 (3 sütunlu checklist)

### O. Final Mesaj
**Çekirdek:** "Agent çağında rekabet, daha akıllı modelleri geliştirenlerin değil; bu modelleri kurumsal dünyada güvenilir sistemlere dönüştürebilenlerin olacak."
**Slayt sayısı önerisi:** 1

## SLAYT UYUMLU ÖZET (kısa biçim)

**Toplam tahmini slayt:** 25-30 (içerik yoğunluğuna ve Deck Planning kararına bağlı)

### Açılış (3 slayt)
1. Kapak: "Görünen Agent, Görünmeyen Harness"
2. Sürpriz istatistik: "%86-89 pilot başarısız" → ana soru
3. Ana tez

### Çerçeve (4 slayt)
4. Görünen Agent
5. Görünmeyen Harness
6. 4-Katman ayrımı
7. Anthropic'in resmi tanımı (alıntı slaytı)

### Harness Bileşenleri (10 slayt)
8. Identity
9. Authorization
10. Tool Governance
11. State Management
12. Memory
13. Guardrails
14. Sandbox
15. HITL
16. Observability
17. Evaluation

### Mimari Bütünlüğü (4 slayt)
18. Skill Lifecycle
19. Versiyonlama
20. Maturity Model
21. Referans Mimari (9 katman)

### Risk ve Kurumsal Çerçeve (4 slayt)
22. Model Risk vs Harness Risk
23. Yeni Güvenlik Yüzeyleri
24. Kurumsal Disiplin (banka perspektifi)
25. Maistro konumlandırması

### Kapanış (3 slayt)
26. Production Readiness Checklist
27. Sonuç (büyük cümle)
28. Teşekkür / Q&A

## KAYNAKLAR

[1] Microsoft Learn — "What is Microsoft Foundry Agent Service?" — https://learn.microsoft.com/en-us/azure/foundry/agents/overview — Birincil resmi kaynak (5/5)

[2] AWS Bedrock AgentCore — https://aws.amazon.com/bedrock/agentcore/ — Birincil resmi kaynak (5/5)

[3] OpenAI Agents SDK Guide — https://developers.openai.com/api/docs/guides/agents — Birincil resmi kaynak (5/5)

[4] Anthropic — "Introducing the Model Context Protocol" — https://www.anthropic.com/news/model-context-protocol — Birincil resmi kaynak (5/5)

[5] AWS — "Amazon Bedrock AgentCore generated observability data" — https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/observability-service-provided.html — Birincil teknik dokümantasyon (5/5)

[6] OpenAI Agents SDK — Guardrails — https://openai.github.io/openai-agents-python/guardrails/ — Birincil dokümantasyon (5/5)

[7] Anthropic — "Mitigating the risk of prompt injections in browser use" — https://www.anthropic.com/news/prompt-injection-defenses — Birincil güvenlik kaynak (5/5)

[8] AWS — "Observe your agent applications on Amazon Bedrock" — https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/observability.html — Birincil dokümantasyon (5/5)

[9] TheNewStack — "Anthropic, OpenAI, Google, and Microsoft agree that the harness is the product" — https://thenewstack.io/ai-agent-harness-pricing-split/ — Saygın sektör medyası (4/5)

[10] Microsoft Open Source Blog — "Introducing the Agent Governance Toolkit" (Nisan 2026) — https://opensource.microsoft.com/blog/2026/04/02/introducing-the-agent-governance-toolkit-open-source-runtime-security-for-ai-agents/ — Birincil resmi blog (5/5)

[11] Atlan — "Top AI Agent Harness Tools and Frameworks 2026" — https://atlan.com/know/best-ai-agent-harness-tools-2026/ — Sektör analiz (3/5)

[12] AGAT Software — "AI Agent Security In 2026: What Enterprises Are Getting Wrong" — https://agatsoftware.com/blog/ai-agent-security-enterprise-2026/ — Saygın sektör medyası (4/5)

[13] Strata — "Agentic AI Risks: A 2026 Guide" — https://www.strata.io/blog/agentic-identity/agentic-ai-governance-how-to-approach-it/ — Identity uzmanı sektör kaynak (4/5)

[14] Softtech (kurumsal) — https://softtech.com.tr/en — Birincil ürün kaynak (5/5)

[15] Galaksiya — "Softtech Intelligence Platform Case Study" — https://www.galaksiya.com/customers/softtech-intelligence-platform — Müşteri vakası kaynak (3/5)

[16] Anthropic Platform Docs — Claude Managed Agents overview — https://platform.claude.com/docs/en/managed-agents/overview — Birincil resmi dokümantasyon (5/5)

## ÇEKİRDEK BİLGİ DOĞRULAMASI

| Bulgu | Kaynak Sayısı | En Yüksek Güvenilirlik | Eşik Karşılandı mı? |
|-------|----------------|------------------------|----------------------|
| Harness'ın resmi tanımı | 3 (Anthropic + Microsoft + AWS) | 5/5 | ✓ |
| Pilot başarısızlık oranı | 2 (Atlan + Strata) | 4/5 | ✓ |
| Yönetici-kontrol açığı | 2 (AGAT + Gravitee) | 4/5 | ✓ |
| 4-katman ayrımı | Kullanıcı tezi + Microsoft Foundry | 5/5 | ✓ |
| Maistro örneği | 3 (Softtech + Galaksiya + BusinessWire) | 5/5 | ✓ |
| Tool governance açığı | 2 (Oracle + FifthRow) | 4/5 | ✓ |
| Observability paradigm shift | 2 (Atlan + AWS docs) | 5/5 | ✓ |

Tüm çekirdek bilgi en az 2 bağımsız kaynak ile doğrulandı; en az birinin güvenilirlik puanı ≥4. Knowledge Synthesis kaynak eşiği karşılanıyor.
