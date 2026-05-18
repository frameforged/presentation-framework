---
agent: audience-alignment
version: 1
topic: "Görünen Agent, Görünmeyen Harness"
created: 2026-05-06
inputs:
  - 01-strategy.md
status: complete
---

# Audience Alignment Çıktısı

## İZLEYİCİ PROFİLİ

**Birincil Kitle:** Yapay Zeka Mühendisliği bölümü teknik üniversite öğrencileri
- **Tahmini sayı:** 30-80 kişilik bir sınıf veya seminer
- **Demografik tipoloji:**
  - 3. veya 4. sınıf lisans öğrencileri (büyük olasılık)
  - Yüksek lisans öğrencileri de olabilir
  - LLM, ML, deep learning derslerini almış veya almakta
  - Hugging Face, OpenAI API, LangChain düzeyinde araçlarla muhtemelen oynamış
  - Kurumsal yazılım dünyasının dilini henüz duymamış olabilirler

**İkincil Kitle:**
- Bölümün öğretim üyeleri ve asistanlar (sunumda olabilirler, akademik dürüstlük arar)
- Sunum kayda alınırsa: alan dışından meraklı kitle (LinkedIn, YouTube)

**Bilgi Seviyesi: 3 (Orta)**
- LLM kavramına aşina
- Agent loop, tool calling, RAG terimlerini duymuşlar — pratikte denemiş olabilirler
- "Production agent" kavramı kafalarında muğlak
- "Governance, audit, observability, identity" kelimeleri kurumsal yazılım dünyasından — onlara YENİ
- Banka mimarisi, regülasyon, ITGC gibi kavramlar tamamen yabancı

| Kavram | Hakimiyet |
|--------|-----------|
| LLM, prompt, tool calling | 4/5 |
| Agent loop, ReAct, planning | 3/5 |
| RAG, embeddings, vector DB | 3/5 |
| Production deployment | 2/5 |
| Identity, RBAC, ACL | 2/5 |
| Observability (logs/metrics/traces) | 2/5 |
| Sandbox, egress control | 1/5 |
| HITL, approval workflow | 1/5 |
| Skill lifecycle, governance | 1/5 |
| Regülasyon, audit | 1/5 |

Bu tabloya göre sunum içeriğinin **yarısı izleyici için yeni bilgi**. Bu sevindiricidir — sunum aha-anları yaratabilecek doğal alana sahip.

**Motivasyon ve Beklenti:**
- "Endüstride ne oluyor" merakı yüksek
- Ders kitabında olmayan şeyleri duymak istiyor
- Mezuniyet sonrası iş hayatı için somut sinyaller arıyor
- Akademik yaklaşımdan biraz sıkılmış olabilir; pratik ve "perde arkası" anlatım çekici
- "Hocamın anlatmadığı kısım" hissi onları yakalar

**Karar Yetkisi:** Yok
- Bu sunum bir karar toplantısı değil, bir aktarım
- Ama izleyici "kariyer kararı" verebilir: agent harness alanına yönelmek isteyebilir

**Olası Direnç / Önyargı:**
- "Bunlar zaten ortada, hocamızın anlattığı şeyleri tekrar mı dinleyeceğiz?" — açılışta bu beklentiyi sarsmalıyız (sürpriz bir veri/iddia ile)
- "Banka örneği verince konu sıkıldı" — kurumsal terimler kuru gelirse bağlantıyı koparabilir; bu yüzden teknik terimi sürekli somut tool/aksiyon ile bağlamalıyız
- "Bu sadece Maistro reklamı" — kullanıcı zaten bu tuzaktan kaçınmak istediğini söyledi, sunum dengesi bunu yansıtmalı

## İLETİŞİM STRATEJİSİ

**Ton:** Yarı-resmi + Etkileyici
- Slack-mesajı tonunda değil ("merhabalar arkadaşlar")
- Kürsüde profesör tonunda da değil ("efendim mevzunun mahiyeti")
- "Senior mühendis bir konferans veriyor" tonu — saygılı ama düz, somut, dürüst
- "Bunu prod'a aldığımızda görürsünüz ki..." tipi içeriden konuşma sinyalleri

**Karmaşıklık:** Orta-yüksek
- LLM/agent terimleri jargon olarak değil, ortak dil olarak kullanılabilir
- Kurumsal terimleri (governance, ACL, lifecycle) ilk kullanımda parantez veya örnekle aç
- Mimari diyagramlar 7+ katmana ulaşabilir — sınırlı tutulmalı (max 9 katman, 4 ana grup)

**Dil Seviyesi:**
- Türkçe ana dil, ama teknik terimler İngilizce kalır
- Doğru: "Agent harness'ın ana bileşenleri", "tool governance", "memory ACL", "observability layer"
- Yanlış: "Etmen koşum takımı", "araç yönetişimi", "hafıza erişim kontrol listesi" — zorlama Türkçeleştirme YOK
- Cümle yapısı doğal Türkçe akışında, İngilizce cümle kalıbından çevrilmiş hissi yaratmamalı

**Jargon Politikası:** Açıklayarak kullan
- İlk geçtiği yerde tek cümlelik tanım veya somut örnek
- Ardından doğal kullanım

Örnek:
> "Agent observability — yani agent'ın ne yaptığını adım adım izleyebilme yeteneği — sunumun ortasında daha derin görelim."

## SUNUM STİLİ

**Yaklaşım:**
- "Perde arkasını gösterme" — hikaye + kavramsal çerçeve karması
- Demo dünyası ile production gerçeği arasındaki uçurumu net çiz
- Her bölümde aha-anı veya sürpriz bilgi
- Kavramsal blok → somut örnek → "bunu Maistro/banka nasıl yapıyor" deseni

**Görsel/Metin Dengesi:**
- Görsel ağırlıklı (bu kitle metin yoğun slayttan sıkılır)
- Her slaytta en az bir görsel öğe (diyagram, ikon dizisi, karşılaştırma tablosu, büyük rakam)
- Mimari diyagramlar değer üretir; statik bullet list öldürür
- Renk paleti: koyu profesyonel arkaplan + akıllı vurgu rengi (sahne ışığı metaforuyla uyumlu)

**İnteraksiyon Beklentisi:** Düşük-orta
- Sunum dersi olduğu için aktif Q&A büyük olasılıkla son 5 dakikada
- Ama "Sizce şimdi agent ne yapmalı?" tipi retorik sorular sürekli
- 1-2 yerde gerçek soru: "Kim kendi öğrencilik projesinde tool çağıran bir agent yazdı?" gibi

**Önerilen Slayt Yoğunluğu:**
- Az metin, çok görsel + büyük cümle
- Her slaytta MAKSIMUM 3 madde işareti veya 1 görsel + 2 satır metin
- "Cümle slaytları" değerli — tek bir güçlü cümle 16-24pt'da büyük yazılır, aha-an yaratır
- Bullet list yorgun gelir; mümkünse gridler, kartlar, akış diyagramları

## DİL VE TON ÖRNEKLERİ

### Açılış cümlesi adayları (ilgi çekici, etkileyici):
- "Bugüne kadar çoğu agent demo'su çalıştı. Çok azı kurumsal sistemde ayakta kaldı. Bugün, neden, sorusunu konuşacağız."
- "Bir agent'ın akıllı görünmesi başka şey, kontrollü çalışması başka şey. Bu sunumun konusu o farkın adı."
- "Tool çağıran agent yazmak 50 satır kod. Kurumsal ortamda ayakta tutmak 50.000."

### Geçiş cümleleri (slaytlar arası akıcılık için):
- "Bu yüzden..."
- "Bunu duyduğumuzda kafamızda şu sorular doğar..."
- "Şimdi aynı konuya başka bir açıdan bakalım..."
- "Eğer bu doğruysa, sıradaki soru şu..."

### Kapanış adayları (hatırda kalıcı):
- "Yarın kurduğunuz sistem ne kadar otonom olursa, bugün düşünmeniz gereken kontroller o kadar derin olmalı."
- "En iyi modeli kullanıyor olmak rekabet avantajı sağlamaz; en iyi harness'ı kurmuş olmak rekabet avantajı yaratır."
- "Agent çağında kazanan, daha akıllı modelleri yapanlar değil; bu modelleri güvenilir hale getirebilenler olacak."

## REVİZYON YÖNLENDİRME (gerekirse)

QA bu agent'ı yeniden çağırırsa:
- "Çok teknik" → bilgi seviyesi tablosunu yeniden çek, daha çok eğitsel metafor ekle
- "Çok temel" → 4. sınıf/yüksek lisans seviyesine çek, mimari derinliği artır
- "Banka örneği yetersiz" → kullanıcıdan ek somut anekdot iste
