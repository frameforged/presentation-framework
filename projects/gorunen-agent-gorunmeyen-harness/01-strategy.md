---
agent: presentation-strategy
version: 1
topic: "Görünen Agent, Görünmeyen Harness"
created: 2026-05-06
inputs:
  - 00-brief.md
status: complete
---

# Strategy Çıktısı

## KONU YORUMU

**Konu:** Görünen Agent, Görünmeyen Harness

**Yorum:** AI agent sistemlerinde dışarıdan görünen kabiliyet (cevap, plan, tool çağrısı) ile bu kabiliyeti gerçek dünyada güvenli, yetkili, izlenebilir, sürdürülebilir ve denetlenebilir kılan görünmeyen mühendislik katmanı (harness) arasındaki ayrımı kuran bir konu. Tartışma sıradan "agent yapımı" konuşmalarından farklılaşıyor: model seçimi veya prompt mühendisliğinden çok, kurumsal ölçekte agent çalıştırmanın mimari disipline indirgendiği bir tez işliyor.

**Perspektif:** Mühendislik perspektifi + kurumsal/governance perspektifi melezi. Demo dünyası ile production gerçeği arasındaki uçurumu net biçimde ortaya koyan, "akıllı görünen sistem ≠ yönetilebilir sistem" tezini savunan bir bakış. Maistro (Softtech/Türkiye İş Bankası) somut bir Agent Harness örneği olarak konumlandırılıyor; ancak amaç ürün tanıtımı değil, çerçeveyi anlamlandırmak.

## SUNUM AMACI

**Birincil Amaç:** Bilgilendirme + İkna karması
- **Bilgilendirme yönü:** Öğrencilere "harness" kavramını, bileşenlerini ve kurumsal gereklilikleri tanıtmak
- **İkna yönü:** "Sadece daha iyi model" anlayışından "sistem mimarisi olgunluğu" anlayışına perspektif kaydırmak

**İkincil Amaç:** Eğitim — kavramsal çerçeve aktarımı (Model / Framework / Runtime / Harness ayrımı)

**Başarı Kriteri:** Sunum sonunda izleyici şunları söyleyebilmeli:
1. "Agent sistemlerinde asıl mühendislik yükü modelin etrafında, modelin içinde değil."
2. "Tool vermek = yetki vermek; her yetkinin governance'ı gerekir."
3. "Memory, observability, identity, sandbox — bunlar opsiyonel feature değil, kurumsal şart."
4. "Demo'da çalışan agent ≠ production'da yönetilebilir agent."
5. "Maistro gibi enterprise platformlar, model gücü değil; harness disiplini satıyor."

İzleyici bunları söyleyebiliyorsa sunum amacına ulaşmıştır.

## KAPSAM

**Dahil:**
- Görünen Agent vs Görünmeyen Harness ayrımı (ana tez)
- Model / Framework / Runtime / Harness 4-katman ayrımı
- Harness ana bileşenleri: Identity, Authorization, Tool Governance, State, Memory, Guardrails, Sandbox, HITL, Observability, Evaluation
- Skill Lifecycle ve Versioning
- Agent Harness Maturity Model (L0-L5)
- Referans Agent Harness mimarisi (9-katman)
- Model Risk vs Harness Risk karşılaştırması
- Kurumsal/regülasyon perspektifi (özellikle bankacılık)
- Maistro'nun konumlandırması (somut örnek olarak)
- Production Readiness Checklist

**Hariç:**
- Spesifik prompt engineering teknikleri (konunun dışında)
- LLM iç mimarisi / transformer detayları (kitle bunu zaten biliyor)
- Tek tek model karşılaştırmaları (GPT vs Claude vs Gemini — konunun konusu değil)
- Maistro'nun ürün özellikleri / fiyatlama / pazar pozisyonu (kullanıcı açıkça istemedi)
- Hosted demo araçları (Cursor, Devin, Cline, vb.) — kullanıcı bunların yönetilebilir olmadığını vurguladı

**Derinlik:** Orta-yüksek
- Kavramsal anlama tam (harness nedir, neden gerekir)
- Bileşen düzeyinde detay (her bileşenin ne yaptığı, nasıl risk yönettiği)
- Mimari tablo derecesinde (L0-L5 maturity, 9-katman referans mimari)
- Implementation kodu YOK (öğrenci seviyesinde değil, ayrıca konunun ruhu kavramsal)

**Önerilen Süre:** 25-30 dakika
- Konunun ağırlığı kısa sürede aktarılamaz
- 18 ana bölüm var, her birine hak verecek tempo gerekir
- Soru-cevap dahil 35-40 dakikalık sınıf saati uygun

## ÇERÇEVE

**Yaklaşım:** Karşılaştırmalı + Problem-Çözüm karması
- **Karşılaştırmalı tarafı:** Görünen vs Görünmeyen, Demo vs Production, Model Risk vs Harness Risk
- **Problem-Çözüm tarafı:** "Agent demo'da çalıştı, production'da neden patladı?" → harness eksiği → harness bileşenleri → maturity model

**Ana Mesaj (sunumun tek cümlelik özeti):**
> Agent çağında rekabet, daha akıllı modelleri geliştirenlerin değil; bu modelleri kurumsal dünyada güvenilir, izlenebilir, yetkili sistemlere dönüştürebilenlerin olacak.

**Ton:** Yarı-resmi + Etkileyici
- Akademik soğukluk değil, ama ciddiyet var
- "Kurumsal disiplin" hissi
- Aha-anları ile besle: "demek ki bu yüzden şu yapılıyor" tipi bağlantılar
- Provoke edici sorular kullan: "Agent cevap verebiliyor mu?" yetersiz; "Hangi yetkiyle, hangi izlerle, hangi onayla?" doğru soru

## STRATEJİK NOTLAR

1. **"Perde arkası" metaforu** sunum boyunca tutarlı olarak kullanılmalı. Görünen agent = sahnedeki oyuncu. Harness = sahne makinası, ışık masası, prova, prodüksiyon ekibi. İzleyici sahneyi alkışlar ama prodüksiyon olmasaydı sahneye çıkamazdı.

2. **Banka/regülasyon perspektifi sıradan bir detay değil**, ana tezin destekçisi. Banka, sağlık, sigorta gibi sektörler harness gerekliliğini doğal olarak gösteriyor. Bu yüzden Türkiye İş Bankası örneği güçlü.

3. **Maistro 1-2 slaytta geçecek**, ortalama bir vaka çalışması olarak. Sunumun yıldızı kavramsal çerçeve.

4. **Bölüm 17 "Güçlü Final Mesajları"** — bu cümleler slaytlarda direkt kullanılmalı, parlatılmalı. Kullanıcının sunduğu cümleler zaten satır satır slayt malzemesi.

5. **Maturity Model (L0-L5)** sunum içi viral mesajdır — öğrenciler bunu hatırlar ve dışarıda paylaşır. Stratejik olarak ortaya yerleştirilmeli, finalde tekrar referans edilmeli.

## REVİZYON YÖNLENDİRME (gerekirse)

Eğer QA bu agent'ı yeniden çağırırsa:
- "Konu çok teknik" yorumu gelirse: derinlik kademesini "Orta" sınıra çek, daha çok metafor
- "Konu çok yüzeysel" yorumu gelirse: 9-katmanlı mimari ve maturity tablosuna daha derin gir
- "Maistro yetersiz" yorumu gelirse: kullanıcıdan repo erişim alternatifi iste
