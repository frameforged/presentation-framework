---
agent: presentation-content
version: 1
topic: "Görünen Agent, Görünmeyen Harness"
created: 2026-05-06
inputs:
  - 02-audience.md
  - 05-deck-plan.md
status: complete
---

# Slayt İçerikleri (Final)

## Slayt 1 [KAPAK]

**Başlık:** Görünen Agent, Görünmeyen Harness
**Alt başlık:** Agent çağında asıl mühendislik yükü nerede birikiyor?
**Konuşmacı:** Şeyma Sarıgıl • Generative AI Architect @ Softtech
**Konuşmacı Notu:** Hoş geldiniz. Önümüzdeki yarım saatte konuşacağımız konu, AI çağında ürün geliştirebilenle demo yapanlar arasındaki farkı belirleyen şeyin adı. Hepimiz "model nasıl seçilmeli" sorusunu çok duyduk. Ben bugün size, çoğunlukla unutulan ama production'da her şeyi belirleyen şeyi anlatacağım: harness.

## Slayt 2 [SÜRPRIZ İSTATİSTİK]

**Büyük Sayı:** %86
**Açıklama:** Kurumsal AI agent pilotlarının üretime ulaşma oranı: yalnızca %11-14
**Kaynak (mini):** Atlan & Strata 2026 raporları
**Konuşmacı Notu:** Bu rakamı bir saniye düşünün. Yüzde seksen altı. Yüzde seksen dokuza kadar çıkan istatistikler var. Pilot çalışmaların büyük bölümü production'a ulaşamıyor. Ne model kötü, ne fikir kötü. Eksik olan başka bir şey, ve bugün onun adını koyacağız.

## Slayt 3 [YANLIŞ SORU / DOĞRU SORU]

**Başlık:** Soruyu değiştirelim
**Sol (yanlış soru):** "Hangi modeli kullanıyoruz?"
**Sağ (doğru soru):** "Bu modeli hangi mimari disiplinle çalıştırıyoruz?"
**Alt vurgu:** Production'da kazandıran ikincisi.
**Konuşmacı Notu:** Çoğu konuşma model kalitesi etrafında dönüyor — GPT mi, Claude mu, Gemini mi. Bu sorular önemli, ama tek başlarına yetersiz. Asıl soru, modelin arkasındaki sistemin ne kadar olgun olduğu. İşte bu sunumun konusu o.

## Slayt 4 [ANA TEZ]

**Alıntı (büyük italik):** LLM zekayı temsil eder; harness bu zekanın gerçek dünya ile güvenli temas yüzeyini oluşturur.
**Vurgu kelimeler:** harness • güvenli temas yüzeyi
**Konuşmacı Notu:** Tezimiz bu. Önümüzdeki yirmi beş dakikada bu cümleyi size satmaya çalışacağım. Önce harness'ın ne olmadığına, sonra ne olduğuna bakacağız. Bileşenlerini, mimarisini, kurumsal yansımasını göreceğiz. Sonunda kapanışta tekrar bu cümleye döneceğiz.

## Slayt 5 [GÖRÜNEN AGENT]

**Başlık:** `</ Görünen Agent />`
**Alt başlık:** Kullanıcının deneyimlediği akıllı yüzey
**Maddeler:**
- Soruya cevap verir
- Plan yapar, doküman okur
- Tool çağırır, rapor üretir
- Karar önerir, iş akışı başlatır
- Kod yazar
**Konuşmacı Notu:** Kullanıcı için agent budur. Cevap verir, plan yapar, tool çağırır. Bu yüzeyde değer görünür ve kullanıcı haklı olarak burayı önemser. Ama mimari açıdan bu sadece sonuç yüzeyi. Asıl mesele aşağıda.

## Slayt 6 [KULLANICININ GÖRMEDİĞİ]

**Başlık:** Kullanıcının görmediği 13 şey
**Maddeler (4x3 grid):**
- Hangi prompt versiyonu çalıştı?
- Hangi model çağrıldı?
- Hangi tool seçildi?
- Tool input/output neydi?
- Agent'ın yetkisi neydi?
- Kullanıcı adına mı işlem yaptı?
- Hangi memory okundu?
- Hangi policy devreye girdi?
- Hangi guardrail engelledi?
- Hangi maliyet oluştu?
- Hangi hata retry edildi?
- Hangi adım audit edildi?
- Karar izi tutuldu mu?
**Konuşmacı Notu:** Aynı agent çağrısının arkasında bu 13 görünmez parametre var. Production'da asıl kritik şeyler bunlar. Bir agent demosu sahnede parlasa bile, bu 13 sorunun cevabı yoksa, kurumsal sistemde yaşayamaz.

## Slayt 7 [ANTHROPIC TANIMI]

**Alıntı:** Agent harness, modeli sarıp kullanıcı adına eylem yapabilmesini sağlayan yazılım altyapısıdır — tools, memory management, context handling, error recovery.
**Kaynak:** Anthropic, 2026 • TheNewStack: "Harness is the product."
**Konuşmacı Notu:** Bu tanım Anthropic'in resmi belgelerinden. Aynı dönemde TheNewStack başlığı atıyor: "Harness ürünün kendisidir." Yani sektör artık sadece daha iyi model satmıyor; bu modeli sarıp güvenilir kılan yapıyı satıyor.

## Slayt 8 [SEKTÖRÜN KONSENSÜSÜ]

**Başlık:** Dört oyuncu, tek strateji
**Kartlar:**
- Anthropic Managed Agents
- OpenAI Agents SDK
- Microsoft Foundry Agent Service
- AWS Bedrock AgentCore
**Alt vurgu (amber bant):** Microsoft Agent Governance Toolkit — Nisan 2026, OWASP'ın 10 agentic AI riskini deterministik politika enforcement ile çözüyor.
**Konuşmacı Notu:** Konsensüs tek başına bir argüman değil ama yön gösterici. Dört büyük oyuncu da harness katmanını ürünleştiriyor. Microsoft'un Nisan 2026'da yayınladığı governance toolkit somut delil — model ile kurum ağı arasında politika enforcement engine konumlandırıyor.

## Slayt 9 [4-KATMAN AYRIMI]

**Başlık:** Model / Framework / Runtime / Harness
**Alt başlık:** Her katman farklı soruya cevap verir.
**Katmanlar (timeline):**
- Model → Ne yapılmalı?
- Framework → Nasıl kodlarım?
- Runtime → Akış nasıl ayakta kalır?
- Harness → Güvenilir çalışma nasıl sağlanır?
**Konuşmacı Notu:** Bu sunumun mimari iskeleti. Model en üstte, harness en altta. Her seviyenin kendi sorusu var. Çoğu ekip ilk üçüyle ilgileniyor ve dördüncüde patlıyor. Şimdi harness'ın içine girelim.

## Slayt 10 [`</ Identity />`]

**Başlık:** `</ Identity />`
**Tanım:** Agent sistemde kim olarak hareket eder?
**Kritik soru:** Service identity mi, user on-behalf-of mu, delegated mi?
**Vurgu:** Agent kimliği, kullanıcı kimliği kadar ciddi tasarlanmalıdır.
**Konuşmacı Notu:** Microsoft ve AWS bunu artık platform kabiliyeti olarak ele alıyor. Identity sıradan bir auth değil; agentic identity workload identity ve just-in-time authorization gerektiriyor — Strata bunun için yeni bir kategori tanımlıyor.

## Slayt 11 [`</ Authorization />`]

**Başlık:** `</ Authorization />`
**Tanım:** Çok-boyutlu yetki — RBAC tek başına yetersiz
**Kritik soru:** Bu agent bu kullanıcı adına bu tool'u bu veriyle çağırabilir mi?
**Boyutlar (mini liste):** User × Agent × Tool × Data × Action level
**Vurgu:** Yetki tek boyutlu değil; production'da en az beş eksen var.
**Konuşmacı Notu:** Bunu Maistro gibi platformda düşünün. Kullanıcı agent yaratır, tool bağlar, başkasına yetki devreder, memory tanımlar. Beş boyutlu bir yetki modeli olmadan agent platformu kurumsal anlamda yaşayamaz.

## Slayt 12 [`</ Tool Governance />`]

**Başlık:** `</ Tool Governance />`
**Tanım:** Tool, sistemin elidir; her el aynı riski taşımaz
**Üç seviye (mini bar):**
- Düşük: arama yap, doküman oku
- Orta: DB sorgula, ticket aç
- Yüksek: e-posta gönder, ödeme başlat, dosya sil
**Vurgu:** Agent'a tool vermek, agent'a yetki vermektir.
**Konuşmacı Notu:** Anthropic'in MCP standardı dış sistemlerle iki yönlü bağlantı sağlıyor — bu güçlü ama temas yüzeyini büyütüyor. Her tool için risk skorlaması, ACL ve audit gerekli.

## Slayt 13 [`</ State Management />`]

**Başlık:** `</ State Management />`
**Tanım:** Agent işi nerede bıraktığını biliyor mu?
**Kritik soru:** Uzun görevde retry, resume, checkpoint var mı?
**Vurgu:** State yönetimi olmayan agent, her seferinde yeniden başlayan bir demo'dur.
**Konuşmacı Notu:** Yarım saatlik bir görevin var; agent'ın yirmi üçüncü dakikasında patladı. Ne olur? State yoksa baştan başlar. Bu, demoda fark edilmez — production'da uzun iş akışlarında her şeyi belirler.

## Slayt 14 [`</ Memory />`]

**Başlık:** `</ Memory />`
**Tanım:** Hatırlama kabiliyeti mi, yönetişim riski mi?
**İki yüz:**
- Faydalı: kişiselleştirme, bağlam, tekrarsızlık
- Riskli: PII sızıntı, memory poisoning, cross-tenant leak
**Vurgu:** Memory agent'ı kişiselleştirir; governance agent'ı güvenilir kılar.
**Konuşmacı Notu:** AWS AgentCore memory'yi runtime kaynağı olarak izliyor — sadece veri saklama değil, aktif bir runtime bileşeni. Retention, forget, write/read policy olmadan memory bir avantaj değil, bir risk.

## Slayt 15 [`</ Guardrails />`]

**Başlık:** `</ Guardrails />`
**Tanım:** Sınır çizgileri 7 noktada çalışır
**Yedi nokta (mini liste):**
- Input guardrail
- Retrieval guardrail
- Tool guardrail
- Output guardrail
- Cost guardrail
- Policy guardrail
- HITL guardrail
**Vurgu:** Guardrail, sansür değil; davranışı kurum sınırları içinde tutmaktır.
**Konuşmacı Notu:** OpenAI Agents SDK guardrail mekanizmasını execution pipeline'la birlikte düşünüyor. Yani guardrail bir ek değil, mimarinin parçası — sonradan eklenmiyor, en başta tasarlanıyor.

## Slayt 16 [`</ Sandbox />`]

**Başlık:** `</ Sandbox />`
**Tanım:** Agent neye dokunabilir? — Egress control
**Kritik sorular:** Hangi dizine yazabilir? Hangi network'e çıkabilir? Hangi credential'a erişebilir? Kaynak limiti?
**Vurgu:** Sandbox, agent zekası ile sistem kaynakları arasındaki güvenlik tamponudur.
**Konuşmacı Notu:** Anthropic'in browser-use yazısı net: agent internette güvenilmeyen içerikle karşılaşıyor ve bu içerikteki gizli komutlar agent'ı ele geçirebiliyor. Sandbox burada zekayı değil, icra riskini yönetir.

## Slayt 17 [`</ HITL />`]

**Başlık:** `</ HITL />`
**Tanım:** Yüksek riskli aksiyonlarda insan onayı
**Hangi aksiyonlar:** E-posta, ödeme başlatma, müşteri verisi değişimi, dosya silme, deployment tetikleme
**Vurgu:** HITL agent'ın yeteneksiz olduğunu göstermez; sorumluluğun yerini gösterir.
**Konuşmacı Notu:** HITL'i yavaşlık olarak görmek bir yanılgı. Doğru mimaride HITL, yüksek riskli aksiyonların hızını değil, sorumluluk konumunu yönetir. Approval'ı agent iş akışının doğal parçası yapın — sonradan eklemeyin.

## Slayt 18 [`</ Observability />`]

**Başlık:** `</ Observability />`
**Tanım:** Agent çalıştı bilgisi yetersizdir
**İzlenecekler:** Niyet, plan, tool seçimi, retrieval, prompt versiyonu, token, retry, audit
**Vurgu:** Observability performans metriği değil, hesap verebilirlik mekanizmasıdır.
**Konuşmacı Notu:** AWS AgentCore Observability token usage, latency, error rate, session count gibi metrikleri vurguluyor. Bunlar sıradan log değil — operasyonel kalite ve denetim altyapısı. Üç farklı ekibin (FinOps, engineering, security) farklı sorularına aynı izden cevap çıkıyor.

## Slayt 19 [`</ Evaluation />`]

**Başlık:** `</ Evaluation />`
**Tanım:** Final cevap kalitesi yetersizdir
**Değerlendirilecekler (3 kategori):**
- Niyet ve plan doğru mu?
- Tool seçimi, retrieval, memory kullanımı doğru mu?
- Policy ihlali, HITL atlatma, maliyet kontrolü?
**Vurgu:** Agent kalitesi, karar izinin kalitesidir.
**Konuşmacı Notu:** Klasik model evaluation final çıktıya bakar. Agent evaluation karar zincirine bakar. İkisi farklı disiplin ve agent'ın production'a alınma kararı bu ikinci tip değerlendirmeye dayanır.

## Slayt 20 [SKILL LIFECYCLE & VERSİYONLAMA]

**Başlık:** Skill Lifecycle ve 10 Versiyon Boyutu
**Sol — Skill Lifecycle (yatay akış):**
Discovery → Design → Validation → Security Review → Approval → Versioning → Deployment → Monitoring → Retirement
**Sağ — 10 Versiyon Boyutu:**
Agent / Prompt / Model / Tool / Skill / RAG index / Embedding / Policy / Guardrail / Runtime
**Vurgu:** Versiyonlanmayan agent davranışı, denetlenemeyen agent davranışıdır.
**Konuşmacı Notu:** Bir gün denetçi gelir ve sorar: "Bu agent altı ay önce müşteriye bu kararı neden verdi?" Cevabı ancak bu on boyutun versiyonunu tutuyorsanız verebilirsiniz. Regülasyon, audit, sorumluluk meselesi.

## Slayt 21 [9-KATMANLI REFERANS MİMARİ]

**Başlık:** Referans Agent Harness Mimarisi
**Alt başlık:** Kullanıcı sadece agent'ı görür; arkasındaki dokuz katman onu güvenilir kılar
**Katmanlar (üstten alta):**
1. Channel Layer — Web, API, Slack, Teams
2. Agent Gateway — auth, tenant, rate limit, policy pre-check
3. Agent Runtime — loop, planning, state, checkpoint, resume
4. Context & Memory — session, working, long-term, RAG, ACL
5. Tool Orchestration — registry, schemas, ACL, risk level, logs
6. Policy & Guardrail — input/output/tool/cost/data classification
7. HITL / Approval — queue, reviewer, decision record, resume
8. Observability & Audit — traces, metrics, lineage, versions
9. Lifecycle Layer — versioning, deployment, canary, rollback
**Vurgu (alt bant):** Bu sunumdan tek bir slaytı hatırlayacaksanız, bu olsun.
**Konuşmacı Notu:** Bu, sunumun altın slaytı. Bir agent sistemi kurarken bu dokuz katmanın hangisi olmadan çalışıyorsanız, prod'a girmeden patlayacaksınız. Çoğu demo birinci ve üçüncü katmanı kullanır; gerisini boş bırakır.

## Slayt 22 [MATURITY MODEL L0-L5]

**Başlık:** Agent Harness Maturity Model
**Alt başlık:** Çoğu kurum L1-L2'de demo yapıyor; gerçek değer L3 sonrası başlıyor
**Seviyeler:**
- L0 Prompt Demo — tek prompt, state yok
- L1 Tool-Using — basit tool çağrısı
- L2 Stateful — session, history, retry
- L3 Governed — ACL, guardrail, audit
- L4 Durable — checkpoint, resume, HITL, long-running
- L5 Managed Platform — agent/prompt/tool/skill lifecycle merkezi
**Vurgu:** Kendi sisteminizi konumlandırın.
**Konuşmacı Notu:** Bu modele kendi sisteminizi koyun. L0-L2 demo dünyası — burada kalan ekipler %86-89 başarısızlık istatistiğini besliyor. L3 sonrası üretim disiplini başlıyor.

## Slayt 23 [MODEL RİSK vs HARNESS RİSK]

**Başlık:** Model Risk vs Harness Risk
**Alt başlık:** Risklerin önemli bölümü modelden değil, modelin nasıl çalıştırıldığından doğar
**Karşılaştırma (8 satır):**
| Alan | Model Riski | Harness Riski |
|------|-------------|----------------|
| Doğruluk | Halüsinasyon | Yanlış retrieval, eksik context |
| Güvenlik | Zararlı çıktı | Yetkisiz tool erişimi |
| Gizlilik | Hassas bilgi üretimi | Memory leakage |
| Operasyon | Tutarsız cevap | Retry/resume yokluğu |
| Maliyet | Uzun cevap | Sonsuz loop |
| Denetim | Açıklanamayan karar | Trace eksikliği |
| Yetki | Sınır bilmeme | ACL eksikliği |
| Sorumluluk | Yanlış öneri | HITL eksikliği |
**Konuşmacı Notu:** Halüsinasyon model problemidir, çözümü model katmanında. Yanlış retrieval ise harness problemidir, çözümü context engineering ve memory governance'da. İki ayrı problem, iki ayrı çözüm. Karıştırılırsa hiçbiri çözülmez.

## Slayt 24 [YENİ SALDIRI YÜZEYLERİ]

**Başlık:** Yeni Saldırı Yüzeyleri
**Alt başlık:** Agent ne kadar otonom hale gelirse, güvenlik konusu model güvenliğinden sistem güvenliğine kayar
**12 saldırı türü (4x3 grid):**
Prompt injection / Tool injection / Memory poisoning / RAG poisoning / Privilege escalation / Credential leakage / Cross-tenant leak / Unauthorized tool exec / Data exfiltration / Unbounded loop / Malicious MCP server / Supply chain risk
**Konuşmacı Notu:** Anthropic'in prompt injection savunmaları yazısı net: browser kullanan agent güvenilmeyen web içeriğiyle karşılaşıyor ve içerikteki gizli komutlar agent davranışını ele geçirebiliyor. Bu listenin yarısı geçen yıl yoktu, önümüzdeki yıl daha uzun olacak.

## Slayt 25 [KURUMSAL DİSİPLİN]

**Başlık:** Neden her kurum kendi harness'ını düşünmek zorunda?
**Alt başlık:** Hazır framework başlangıç için yeterli; kurumsal disiplin değil
**Sekiz kurumsal soru:**
- Veri nerede işleniyor?
- Model çağrısı hangi gateway'den çıkıyor?
- Müşteri verisi memory'ye yazılıyor mu?
- Tool çağrıları kullanıcı adına mı?
- Prompt-output logları maskeleniyor mu?
- Agent kararları denetlenebilir mi?
- Hangi adımda HITL gerekiyor?
- Agent sürümü geriye dönük incelenebilir mi?
**Konuşmacı Notu:** Bankacılık, sağlık, sigorta gibi regüle sektörlerde bu sorular pazarlık dışıdır. Hazır agent framework'leri size geliştirme hızı verir; ama kurumsal harness, kurumun risk iştahıyla, regülasyonuyla, veri politikasıyla birlikte tasarlanmak zorundadır.

## Slayt 26 [MAİSTRO]

**Başlık:** Maistro: Yerli Kurumsal Agent Harness Platformu
**Sol — Görünen Maistro (kullanıcı tarafı):**
- Konuşan agent
- RAG ile cevap veren agent
- Tool çağıran agent
- İş akışı yürüten agent
**Sağ — Görünmeyen Harness (mimari):**
- Agent runtime, state yönetimi
- Tool registry, ACL, governance
- PII anonymization, OAuth2
- Hibrit LLM (cloud + on-prem)
- Audit, lifecycle, deployment
**Alt vurgu:** Türkiye İş Bankası'na lisanslanan, Softtech'te geliştirilen kurumsal agent işletim katmanı.
**Konuşmacı Notu:** Maistro'yu detayıyla tanıtmıyorum. Anlatmak istediğim şu: bu sunumun tezini yaşayan, regüle ortamda çalışan, yerli mühendislik ürünü bir platform var. Türkiye'de bu seviyede başka enterprise agent harness platformu görmedim — varsa bilen söylesin, ben de öğrenmek isterim.

## Slayt 27 [PRODUCTION READINESS CHECKLIST]

**Başlık:** Production Readiness Checklist
**Alt başlık:** Production-ready agent, doğru cevap veren değil; doğru sınırlar içinde, doğru izlerle, doğru yetkilerle çalışan agent'tır
**20 madde (3 sütun):**

Sütun 1 — Kimlik & Yetki:
1. Agent kimliği tanımlı mı?
2. User on-behalf-of var mı?
3. Agent ACL ayrılmış mı?
4. Tool ACL ayrılmış mı?
5. Tenant boundary net mi?
6. Sub-agent yetki devri tanımlı mı?

Sütun 2 — Çalışma & İzleme:
7. State kalıcı ve izlenebilir mi?
8. Resume çalışıyor mu?
9. Memory policy tanımlı mı?
10. RAG yetki filtresi var mı?
11. Versiyonlar loglanıyor mu?
12. Trace/lineage tutuluyor mu?
13. Token/cost izleniyor mu?
14. Guardrail ihlalleri ölçülüyor mu?

Sütun 3 — Yönetişim & Deploy:
15. Risk seviyeli tool sınıflaması var mı?
16. Approval kaydı tutuluyor mu?
17. Deployment rollback mümkün mü?
18. Canary/pilot ayrımı var mı?
19. Evaluation karar izini ölçüyor mu?
20. Davranış kurum politikalarıyla hizalı mı?

**Konuşmacı Notu:** Bu listeyi fotoğraflayın. Kuracağınız her sistemde bu yirmi sorunun cevabı net olmalı. Onaylamadığınız bir madde varsa, henüz production'a hazır değilsiniz — buradan başlayın.

## Slayt 28 [KAPANIŞ]

**Başlık (büyük cümle):** Agent çağında kazanan kim olacak?
**Final tez:** Daha akıllı modelleri geliştirenlerin değil; bu modelleri kurumsal dünyada güvenilir sistemlere dönüştürebilenlerin
**Alt vurgu:** Yarın kuracağınız sistem ne kadar otonom olursa, bugün düşünmeniz gereken kontroller o kadar derin olmalı.
**Konuşmacı Notu:** Sunuma başlarken size bir tez sundum: harness, modelin gerçek dünya ile güvenli temas yüzeyidir. Bu yarım saatte bunu kanıtlamaya çalıştım. Şimdi sözü size bırakıyorum: yarın kurduğunuz sistem ne kadar otonom olursa olsun, bugün düşündüğünüz kontroller onun ayakta kalmasını belirleyecek. En iyi modeli kullanmak rekabet avantajı sağlamaz; en olgun harness'ı kurmak sağlar. O insanlardan biri olmanızı dilerim.

## Slayt 29 [TEŞEKKÜR / Q&A]

**Başlık:** Teşekkürler — Sorularınız?
**Kişi:** Şeyma Sarıgıl
**Ünvan:** Generative AI Architect
**Şirket:** Softtech — Türkiye İş Bankası iştiraki
**İletişim:** LinkedIn: /in/seymasarigil
**Konuşmacı Notu:** Sorularınızı bekliyorum. LinkedIn'den de ulaşabilirsiniz. Tartışmak istediğiniz somut bir sistem varsa, ayrıca konuşmaktan mutluluk duyarım.

## TON KONTROL ÖZETİ

- **Kullanılan ton:** Yarı-resmi + etkileyici (senior mühendis konferans tonu)
- **Tutarlılık:** ✓ Slayt 1-29 boyunca aynı tonal mesafe
- **Jargon seviyesi:** Doğal kullanım — ilk geçtiği yerde tanımlı, sonra serbest
- **Türkçe karakter kontrolü:** ✓ Tüm metinler manuel olarak doğru karakter yazımıyla üretildi (ş, ç, ğ, ü, ö, İ, ı doğru)
- **Emoji:** YOK
- **Vurgu yöntemi:** Bold, italic ve renk vurgusu (Visual Agent uygulayacak)
