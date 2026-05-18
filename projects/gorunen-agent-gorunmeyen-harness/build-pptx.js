// build-pptx.js
// Görünen Agent, Görünmeyen Harness — Production Build
// Şeyma Sarıgıl, Softtech Generative AI Architect
// Run: node build-pptx.js

const PptxGenJS = require("pptxgenjs");

// ============================================================
// PALET (Softtech Kurumsal — # olmadan)
// ============================================================
const C = {
  charcoal:     "393939",
  deepCharcoal: "35353D",
  cyan:         "65D7DE",
  cyanLight:    "8AF7FB",
  cyanDeep:     "2D9BA3",
  softLila:     "AB80AD",
  amber:        "FFCC4F",
  amberDeep:    "E8A317",
  white:        "FFFFFF",
  mistGray:     "F2F2F5",
  midGray:      "545454",
  lightGray:    "CCCCCC",
};

const F = {
  title:    "Calibri",
  body:     "Calibri",
  mono:     "Consolas",
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================
function bg(slide, color) {
  slide.background = { color: color };
}

function brandCorner(slide, color = C.cyan) {
  // Sol üst köşede `<` Softtech imza işareti
  slide.addText("<", {
    x: 0.3, y: 0.2, w: 0.5, h: 0.5,
    fontSize: 28, bold: true, color: color, fontFace: F.title,
  });
}

function pageNumber(slide, idx, total, section, sectionLabel, lightMode = true) {
  const c = lightMode ? C.midGray : C.lightGray;
  slide.addText(`${idx} / ${total}` + (section ? `  •  ${sectionLabel}` : ""), {
    x: 7.0, y: 5.30, w: 2.8, h: 0.25,
    fontSize: 9, color: c, fontFace: F.body, align: "right", italic: true,
  });
}

function softtechFooter(slide, lightMode = true) {
  const c = lightMode ? C.midGray : C.lightGray;
  slide.addText("< softtech", {
    x: 0.3, y: 5.30, w: 1.5, h: 0.25,
    fontSize: 9, color: c, fontFace: F.body, italic: false,
  });
}

// Decorative wavy lines (cyan, low opacity simulation via thin lines)
function decorativeWaves(slide, side = "right") {
  const startX = side === "right" ? 6.5 : 0;
  for (let i = 0; i < 12; i++) {
    slide.addShape("line", {
      x: startX + (i * 0.05), y: 0.2 + (i * 0.08),
      w: 3.5 - (i * 0.05), h: 0,
      line: { color: C.cyan, width: 0.5, transparency: 70 },
    });
  }
}

// ============================================================
// PPTX INIT
// ============================================================
const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_16x9"; // 10 x 5.625 inch
pptx.title = "Görünen Agent, Görünmeyen Harness";
pptx.author = "Şeyma Sarıgıl";
pptx.company = "Softtech";
pptx.subject = "Agent Harness Mimarisi";

const TOTAL = 29;

// ============================================================
// SLAYT 1 — KAPAK
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.charcoal);
  decorativeWaves(s, "right");

  // Sol üst < işareti
  s.addText("<", {
    x: 0.5, y: 0.4, w: 0.8, h: 0.8,
    fontSize: 56, bold: true, color: C.cyan, fontFace: F.title,
  });

  // Ana başlık
  s.addText("Görünen Agent,", {
    x: 0.6, y: 1.4, w: 9, h: 0.9,
    fontSize: 54, bold: true, color: C.white, fontFace: F.title,
  });
  s.addText("Görünmeyen Harness", {
    x: 0.6, y: 2.2, w: 9, h: 0.9,
    fontSize: 54, bold: true, color: C.cyan, fontFace: F.title,
  });

  // Alt başlık
  s.addText("Agent çağında asıl mühendislik yükü nerede birikiyor?", {
    x: 0.6, y: 3.3, w: 9, h: 0.6,
    fontSize: 18, italic: true, color: C.lightGray, fontFace: F.body,
  });

  // Konuşmacı bilgisi
  s.addShape("line", {
    x: 0.6, y: 4.3, w: 1.5, h: 0,
    line: { color: C.cyan, width: 2 },
  });
  s.addText("Şeyma Sarıgıl", {
    x: 0.6, y: 4.4, w: 5, h: 0.4,
    fontSize: 18, bold: true, color: C.white, fontFace: F.title,
  });
  s.addText("Generative AI Architect  •  Softtech", {
    x: 0.6, y: 4.85, w: 5, h: 0.3,
    fontSize: 14, color: C.cyan, fontFace: F.body,
  });

  s.addNotes("Hoş geldiniz. Önümüzdeki yarım saatte konuşacağımız konu, AI çağında ürün geliştirebilenle demo yapanlar arasındaki farkı belirleyen şeyin adı. Hepimiz \"model nasıl seçilmeli\" sorusunu çok duyduk. Ben bugün size, çoğunlukla unutulan ama production'da her şeyi belirleyen şeyi anlatacağım: harness.");
}

// ============================================================
// SLAYT 2 — SÜRPRIZ İSTATİSTİK
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.charcoal);
  brandCorner(s);

  // Üst alt başlık (kontekst)
  s.addText("KURUMSAL AI AGENT PİLOTLARI", {
    x: 0.6, y: 0.6, w: 9, h: 0.4,
    fontSize: 14, bold: true, color: C.cyan, fontFace: F.body,
    charSpacing: 4,
  });

  // Dev sayı
  s.addText("%86", {
    x: 0.6, y: 1.2, w: 9, h: 2.6,
    fontSize: 240, bold: true, color: C.cyan, fontFace: F.title,
    align: "center",
  });

  // Açıklama
  s.addText("üretime ulaşamadı.", {
    x: 0.6, y: 3.9, w: 9, h: 0.5,
    fontSize: 28, color: C.white, fontFace: F.title, align: "center",
  });

  // Alt vurgu
  s.addText("Ne model kötü, ne fikir kötü.  Eksik olan başka bir şey.", {
    x: 0.6, y: 4.5, w: 9, h: 0.4,
    fontSize: 14, italic: true, color: C.amber, fontFace: F.body, align: "center",
  });

  // Kaynak
  s.addText("Kaynak: Atlan AI Agent Harness Tools 2026  •  Strata Agentic Identity 2026", {
    x: 0.6, y: 5.0, w: 9, h: 0.25,
    fontSize: 9, color: C.midGray, fontFace: F.body, align: "center", italic: true,
  });

  s.addNotes("Bu rakamı bir saniye düşünün. Yüzde seksen altı. Yüzde seksen dokuza kadar çıkan istatistikler var. Pilot çalışmaların büyük bölümü production'a ulaşamıyor. Ne model kötü, ne fikir kötü. Eksik olan başka bir şey, ve bugün onun adını koyacağız.");
}

// ============================================================
// SLAYT 3 — YANLIŞ / DOĞRU SORU
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.white);

  s.addText("Soruyu değiştirelim", {
    x: 0.6, y: 0.5, w: 9, h: 0.6,
    fontSize: 32, bold: true, color: C.charcoal, fontFace: F.title,
  });

  s.addShape("line", {
    x: 0.6, y: 1.15, w: 1, h: 0,
    line: { color: C.cyan, width: 3 },
  });

  // Sol kart - YANLIŞ SORU
  s.addShape("roundRect", {
    x: 0.6, y: 1.7, w: 4.1, h: 2.6,
    fill: { color: C.mistGray },
    line: { color: C.lightGray, width: 1 },
    rectRadius: 0.1,
  });
  s.addText("YANLIŞ SORU", {
    x: 0.8, y: 1.85, w: 3.7, h: 0.4,
    fontSize: 11, bold: true, color: C.midGray, fontFace: F.body, charSpacing: 4,
  });
  s.addText("Hangi modeli", {
    x: 0.8, y: 2.4, w: 3.7, h: 0.5,
    fontSize: 24, bold: true, color: C.midGray, fontFace: F.title,
  });
  s.addText("kullanıyoruz?", {
    x: 0.8, y: 2.95, w: 3.7, h: 0.5,
    fontSize: 24, bold: true, color: C.midGray, fontFace: F.title,
  });
  s.addText("Tek başına yetersiz", {
    x: 0.8, y: 3.7, w: 3.7, h: 0.4,
    fontSize: 12, italic: true, color: C.midGray, fontFace: F.body,
  });

  // Ok
  s.addText("→", {
    x: 4.7, y: 2.8, w: 0.6, h: 0.5,
    fontSize: 36, bold: true, color: C.cyan, fontFace: F.title, align: "center",
  });

  // Sağ kart - DOĞRU SORU
  s.addShape("roundRect", {
    x: 5.3, y: 1.7, w: 4.1, h: 2.6,
    fill: { color: C.white },
    line: { color: C.cyan, width: 2 },
    rectRadius: 0.1,
  });
  s.addText("DOĞRU SORU", {
    x: 5.5, y: 1.85, w: 3.7, h: 0.4,
    fontSize: 11, bold: true, color: C.cyan, fontFace: F.body, charSpacing: 4,
  });
  s.addText("Bu modeli hangi", {
    x: 5.5, y: 2.4, w: 3.7, h: 0.5,
    fontSize: 24, bold: true, color: C.charcoal, fontFace: F.title,
  });
  s.addText("mimari disiplinle", {
    x: 5.5, y: 2.95, w: 3.7, h: 0.5,
    fontSize: 24, bold: true, color: C.charcoal, fontFace: F.title,
  });
  s.addText("çalıştırıyoruz?", {
    x: 5.5, y: 3.5, w: 3.7, h: 0.5,
    fontSize: 24, bold: true, color: C.cyanDeep, fontFace: F.title,
  });

  // Alt vurgu
  s.addText("Production'da kazandıran ikincisi.", {
    x: 0.6, y: 4.7, w: 9, h: 0.4,
    fontSize: 16, italic: true, color: C.charcoal, fontFace: F.body, align: "center",
  });

  pageNumber(s, 3, TOTAL, true, "Açılış");
  softtechFooter(s);

  s.addNotes("Çoğu konuşma model kalitesi etrafında dönüyor — GPT mi, Claude mu, Gemini mi. Bu sorular önemli, ama tek başlarına yetersiz. Asıl soru, modelin arkasındaki sistemin ne kadar olgun olduğu. İşte bu sunumun konusu o.");
}

// ============================================================
// SLAYT 4 — ANA TEZ
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.charcoal);

  // Sol vertikal aksan
  s.addShape("rect", {
    x: 0.6, y: 1.5, w: 0.08, h: 2.8,
    fill: { color: C.cyan },
    line: { color: C.cyan },
  });

  // Üst label
  s.addText("ANA TEZ", {
    x: 0.6, y: 0.6, w: 9, h: 0.4,
    fontSize: 12, bold: true, color: C.cyan, fontFace: F.body, charSpacing: 4,
  });

  // Tez metni - 3 satır halinde, vurgular farklı renk
  s.addText([
    { text: "LLM ", options: { color: C.white, bold: false } },
    { text: "zekayı", options: { color: C.cyan, bold: true } },
    { text: " temsil eder;", options: { color: C.white, bold: false } },
  ], {
    x: 1.0, y: 1.6, w: 8.6, h: 0.7,
    fontSize: 30, italic: true, fontFace: F.title,
  });

  s.addText([
    { text: "harness", options: { color: C.cyan, bold: true } },
    { text: " bu zekanın", options: { color: C.white } },
  ], {
    x: 1.0, y: 2.4, w: 8.6, h: 0.7,
    fontSize: 30, italic: true, fontFace: F.title,
  });

  s.addText([
    { text: "gerçek dünya ile ", options: { color: C.white } },
    { text: "güvenli temas yüzeyini", options: { color: C.amber, bold: true } },
  ], {
    x: 1.0, y: 3.2, w: 8.6, h: 0.7,
    fontSize: 30, italic: true, fontFace: F.title,
  });

  s.addText("oluşturur.", {
    x: 1.0, y: 4.0, w: 8.6, h: 0.7,
    fontSize: 30, italic: true, color: C.white, fontFace: F.title,
  });

  pageNumber(s, 4, TOTAL, true, "Açılış", false);

  s.addNotes("Tezimiz bu. Önümüzdeki yirmi beş dakikada bu cümleyi size satmaya çalışacağım. Önce harness'ın ne olmadığına, sonra ne olduğuna bakacağız. Bileşenlerini, mimarisini, kurumsal yansımasını göreceğiz. Sonunda kapanışta tekrar bu cümleye döneceğiz.");
}

// ============================================================
// SLAYT 5 — GÖRÜNEN AGENT
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.white);

  // Başlık - kod tag stili
  s.addText("</ Görünen Agent />", {
    x: 0.6, y: 0.5, w: 9, h: 0.7,
    fontSize: 36, bold: true, color: C.charcoal, fontFace: F.mono,
  });
  s.addText("Kullanıcının deneyimlediği akıllı yüzey", {
    x: 0.6, y: 1.15, w: 9, h: 0.4,
    fontSize: 16, italic: true, color: C.midGray, fontFace: F.body,
  });

  // Sol — kullanıcı görseli (büyük cyan daire + içinde silüet)
  s.addShape("ellipse", {
    x: 0.8, y: 2.0, w: 2.6, h: 2.6,
    fill: { color: C.cyan },
    line: { color: C.cyan },
  });
  // Basit silüet - kafa
  s.addShape("ellipse", {
    x: 1.85, y: 2.4, w: 0.5, h: 0.5,
    fill: { color: C.white },
    line: { color: C.white },
  });
  // Vücut
  s.addShape("roundRect", {
    x: 1.55, y: 3.0, w: 1.1, h: 1.3,
    fill: { color: C.white },
    line: { color: C.white },
    rectRadius: 0.3,
  });
  s.addText("KULLANICI", {
    x: 0.8, y: 4.7, w: 2.6, h: 0.3,
    fontSize: 11, bold: true, color: C.charcoal, fontFace: F.body, align: "center", charSpacing: 4,
  });

  // Sağ — 5 madde liste
  const items = [
    "Soruya cevap verir",
    "Plan yapar, doküman okur",
    "Tool çağırır, rapor üretir",
    "Karar önerir, iş akışı başlatır",
    "Kod yazar",
  ];
  items.forEach((item, i) => {
    const y = 2.0 + i * 0.55;
    // Check işareti
    s.addText("✓", {
      x: 4.0, y: y, w: 0.4, h: 0.5,
      fontSize: 22, bold: true, color: C.cyan, fontFace: F.body,
    });
    // Madde metni
    s.addText(item, {
      x: 4.5, y: y, w: 5, h: 0.5,
      fontSize: 18, color: C.charcoal, fontFace: F.body,
    });
  });

  pageNumber(s, 5, TOTAL, true, "Çerçeve");
  softtechFooter(s);

  s.addNotes("Kullanıcı için agent budur. Cevap verir, plan yapar, tool çağırır. Bu yüzeyde değer görünür ve kullanıcı haklı olarak burayı önemser. Ama mimari açıdan bu sadece sonuç yüzeyi. Asıl mesele aşağıda.");
}

// ============================================================
// SLAYT 6 — 13 GÖRÜNMEZ ŞEY
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.charcoal);

  s.addText("Kullanıcının görmediği 13 şey", {
    x: 0.6, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, bold: true, color: C.white, fontFace: F.title,
  });
  s.addText("Aynı agent çağrısının arkasında, görünmeyen parametreler", {
    x: 0.6, y: 0.95, w: 9, h: 0.3,
    fontSize: 13, italic: true, color: C.cyan, fontFace: F.body,
  });

  const invisibles = [
    "Hangi prompt versiyonu?",
    "Hangi model çağrıldı?",
    "Hangi tool seçildi?",
    "Tool input/output neydi?",
    "Agent'ın yetkisi neydi?",
    "Kullanıcı adına mı işlem yaptı?",
    "Hangi memory okundu?",
    "Hangi policy devreye girdi?",
    "Hangi guardrail engelledi?",
    "Hangi maliyet oluştu?",
    "Hangi hata retry edildi?",
    "Hangi adım audit edildi?",
    "Karar izi tutuldu mu?",
  ];

  // 4 sütun x 4 satır (son hücre tek)
  const cols = 4;
  const cellW = 2.05;
  const cellH = 0.85;
  const startX = 0.6;
  const startY = 1.55;
  invisibles.forEach((q, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = startX + col * (cellW + 0.15);
    const y = startY + row * (cellH + 0.15);
    s.addShape("roundRect", {
      x: x, y: y, w: cellW, h: cellH,
      fill: { color: C.deepCharcoal },
      line: { color: C.cyan, width: 0.75 },
      rectRadius: 0.05,
    });
    s.addText(q, {
      x: x + 0.1, y: y, w: cellW - 0.2, h: cellH,
      fontSize: 11, color: C.white, fontFace: F.body, align: "center", valign: "middle",
    });
  });

  pageNumber(s, 6, TOTAL, true, "Çerçeve", false);

  s.addNotes("Aynı agent çağrısının arkasında bu 13 görünmez parametre var. Production'da asıl kritik şeyler bunlar. Bir agent demosu sahnede parlasa bile, bu 13 sorunun cevabı yoksa, kurumsal sistemde yaşayamaz.");
}

// ============================================================
// SLAYT 7 — ANTHROPIC ALINTI
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.white);

  // Açma tırnağı
  s.addText("“", {
    x: 0.6, y: 0.4, w: 1, h: 1.5,
    fontSize: 130, bold: true, color: C.cyan, fontFace: F.title,
  });

  // Alıntı
  s.addText("Agent harness, modeli sarıp kullanıcı adına eylem yapabilmesini sağlayan yazılım altyapısıdır — tools, memory management, context handling, error recovery.", {
    x: 1.5, y: 1.3, w: 8, h: 2.0,
    fontSize: 22, italic: true, color: C.charcoal, fontFace: F.title,
  });

  // Kaynak
  s.addText("— Anthropic, 2026", {
    x: 1.5, y: 3.5, w: 6, h: 0.4,
    fontSize: 14, color: C.midGray, fontFace: F.body,
  });

  // Alt amber bant - TheNewStack vurgusu
  s.addShape("rect", {
    x: 0, y: 4.3, w: 10, h: 0.9,
    fill: { color: C.amber },
    line: { color: C.amber },
  });
  s.addText("“Harness is the product.”", {
    x: 0.6, y: 4.4, w: 6, h: 0.4,
    fontSize: 22, bold: true, italic: true, color: C.charcoal, fontFace: F.title,
  });
  s.addText("— TheNewStack, 2026", {
    x: 0.6, y: 4.85, w: 6, h: 0.3,
    fontSize: 12, color: C.charcoal, fontFace: F.body,
  });

  pageNumber(s, 7, TOTAL, true, "Çerçeve");
  softtechFooter(s);

  s.addNotes("Bu tanım Anthropic'in resmi belgelerinden. Aynı dönemde TheNewStack başlığı atıyor: \"Harness ürünün kendisidir.\" Yani sektör artık sadece daha iyi model satmıyor; bu modeli sarıp güvenilir kılan yapıyı satıyor.");
}

// ============================================================
// SLAYT 8 — SEKTÖR KONSENSÜSÜ
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.white);

  s.addText("Dört oyuncu, tek strateji", {
    x: 0.6, y: 0.5, w: 9, h: 0.6,
    fontSize: 30, bold: true, color: C.charcoal, fontFace: F.title,
  });
  s.addText("Sektör harness'ı \"ürün\" olarak konumlandırıyor", {
    x: 0.6, y: 1.1, w: 9, h: 0.4,
    fontSize: 14, italic: true, color: C.midGray, fontFace: F.body,
  });

  const players = [
    { name: "Anthropic", product: "Managed Agents", focus: "Harness as a product" },
    { name: "OpenAI", product: "Agents SDK", focus: "Open-source harness" },
    { name: "Microsoft", product: "Foundry Agent", focus: "Identity + Governance" },
    { name: "AWS", product: "Bedrock AgentCore", focus: "Runtime + Observability" },
  ];

  const cardW = 2.1;
  const startX = 0.6;
  players.forEach((p, i) => {
    const x = startX + i * (cardW + 0.15);
    s.addShape("roundRect", {
      x: x, y: 1.8, w: cardW, h: 2.2,
      fill: { color: C.white },
      line: { color: C.charcoal, width: 1.5 },
      rectRadius: 0.08,
    });
    s.addText(p.name, {
      x: x + 0.1, y: 1.95, w: cardW - 0.2, h: 0.5,
      fontSize: 18, bold: true, color: C.charcoal, fontFace: F.title, align: "center",
    });
    s.addShape("line", {
      x: x + 0.5, y: 2.55, w: cardW - 1, h: 0,
      line: { color: C.cyan, width: 2 },
    });
    s.addText(p.product, {
      x: x + 0.1, y: 2.65, w: cardW - 0.2, h: 0.5,
      fontSize: 13, color: C.cyanDeep, fontFace: F.body, align: "center",
    });
    s.addText(p.focus, {
      x: x + 0.1, y: 3.2, w: cardW - 0.2, h: 0.7,
      fontSize: 10, italic: true, color: C.midGray, fontFace: F.body, align: "center",
    });
  });

  // Alt amber bant
  s.addShape("rect", {
    x: 0, y: 4.4, w: 10, h: 0.7,
    fill: { color: C.amber },
    line: { color: C.amber },
  });
  s.addText("Microsoft Agent Governance Toolkit  •  Nisan 2026  •  OWASP'ın 10 agentic AI riskini deterministik politika enforcement ile çözüyor.", {
    x: 0.6, y: 4.45, w: 9, h: 0.6,
    fontSize: 12, bold: true, color: C.charcoal, fontFace: F.body, align: "center", valign: "middle",
  });

  pageNumber(s, 8, TOTAL, true, "Çerçeve");
  softtechFooter(s);

  s.addNotes("Konsensüs tek başına bir argüman değil ama yön gösterici. Dört büyük oyuncu da harness katmanını ürünleştiriyor. Microsoft'un Nisan 2026'da yayınladığı governance toolkit somut delil — model ile kurum ağı arasında politika enforcement engine konumlandırıyor.");
}

// ============================================================
// SLAYT 9 — 4-KATMAN AYRIMI
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.white);

  s.addText("Model / Framework / Runtime / Harness", {
    x: 0.6, y: 0.5, w: 9, h: 0.6,
    fontSize: 26, bold: true, color: C.charcoal, fontFace: F.title,
  });
  s.addText("Her katman farklı bir soruya cevap verir.", {
    x: 0.6, y: 1.1, w: 9, h: 0.4,
    fontSize: 14, italic: true, color: C.midGray, fontFace: F.body,
  });

  const layers = [
    { name: "Model",     question: "Ne yapılmalı?",                   bg: C.cyanLight,  fg: C.charcoal },
    { name: "Framework", question: "Nasıl kodlarım?",                 bg: C.cyan,       fg: C.charcoal },
    { name: "Runtime",   question: "Akış nasıl ayakta kalır?",        bg: C.softLila,   fg: C.white },
    { name: "Harness",   question: "Güvenilir çalışma nasıl sağlanır?", bg: C.charcoal, fg: C.white },
  ];
  const layerH = 0.85;
  const startY = 1.7;
  layers.forEach((l, i) => {
    const y = startY + i * (layerH + 0.05);
    s.addShape("rect", {
      x: 0.6, y: y, w: 9, h: layerH,
      fill: { color: l.bg },
      line: { color: l.bg },
    });
    s.addText(l.name, {
      x: 0.9, y: y, w: 3, h: layerH,
      fontSize: 22, bold: true, color: l.fg, fontFace: F.title, valign: "middle",
    });
    s.addText("→", {
      x: 4.0, y: y, w: 0.5, h: layerH,
      fontSize: 22, bold: true, color: l.fg, fontFace: F.title, valign: "middle",
    });
    s.addText(l.question, {
      x: 4.6, y: y, w: 4.8, h: layerH,
      fontSize: 16, italic: true, color: l.fg, fontFace: F.body, valign: "middle",
    });
  });

  pageNumber(s, 9, TOTAL, true, "Çerçeve");
  softtechFooter(s);

  s.addNotes("Bu sunumun mimari iskeleti. Model en üstte, harness en altta. Her seviyenin kendi sorusu var. Çoğu ekip ilk üçüyle ilgileniyor ve dördüncüde patlıyor. Şimdi harness'ın içine girelim.");
}

// ============================================================
// HARNESS BİLEŞENLERİ — Ortak helper (10-19)
// ============================================================
function harnessComponentSlide(pptx, opts) {
  const s = pptx.addSlide();
  bg(s, opts.altBg ? C.mistGray : C.white);

  // Başlık - kod tag
  s.addText(`</ ${opts.title} />`, {
    x: 0.6, y: 0.5, w: 9, h: 0.7,
    fontSize: 36, bold: true, color: C.charcoal, fontFace: F.mono,
  });
  // Sayfa etiketi
  s.addText(`Harness Bileşeni  ${opts.idx - 9} / 10`, {
    x: 0.6, y: 1.15, w: 4, h: 0.3,
    fontSize: 11, color: C.cyanDeep, fontFace: F.body, charSpacing: 4,
  });

  // Sol - büyük geometrik ikon (renkli daire + custom shape kombinasyonu)
  s.addShape("ellipse", {
    x: 0.6, y: 2.0, w: 2.8, h: 2.8,
    fill: { color: opts.iconBg || C.cyan },
    line: { color: opts.iconBg || C.cyan },
  });
  // İkon emoji veya sembol (büyük, beyaz)
  s.addText(opts.iconChar, {
    x: 0.6, y: 2.0, w: 2.8, h: 2.8,
    fontSize: 100, bold: true, color: C.white, fontFace: F.title,
    align: "center", valign: "middle",
  });

  // Sağ - tanım + kritik soru + vurgu
  s.addText(opts.definition, {
    x: 4.0, y: 1.95, w: 5.5, h: 0.6,
    fontSize: 18, bold: true, color: C.charcoal, fontFace: F.title,
  });

  // Kritik soru - cyan light arkaplan
  s.addShape("roundRect", {
    x: 4.0, y: 2.7, w: 5.5, h: 0.85,
    fill: { color: C.cyanLight, transparency: 60 },
    line: { color: C.cyan, width: 1 },
    rectRadius: 0.05,
  });
  s.addText([
    { text: "Kritik soru:  ", options: { color: C.cyanDeep, bold: true } },
    { text: opts.question, options: { color: C.charcoal, italic: true } },
  ], {
    x: 4.15, y: 2.75, w: 5.2, h: 0.75,
    fontSize: 12, fontFace: F.body, valign: "middle",
  });

  // Vurgu cümlesi - charcoal bant
  s.addShape("rect", {
    x: 4.0, y: 3.7, w: 5.5, h: 0.95,
    fill: { color: C.charcoal },
    line: { color: C.charcoal },
  });
  s.addText(opts.emphasis, {
    x: 4.15, y: 3.75, w: 5.2, h: 0.85,
    fontSize: 13, bold: true, color: C.cyan, fontFace: F.body, valign: "middle", italic: false,
  });

  // Mini liste / detail (opsiyonel)
  if (opts.detail) {
    s.addText(opts.detail, {
      x: 4.0, y: 4.75, w: 5.5, h: 0.4,
      fontSize: 10, italic: true, color: C.midGray, fontFace: F.body,
    });
  }

  pageNumber(s, opts.idx, TOTAL, true, "Bileşen", !opts.altBg);
  if (!opts.altBg) softtechFooter(s);
  s.addNotes(opts.notes);
}

// SLAYT 10 - Identity
harnessComponentSlide(pptx, {
  idx: 10, title: "Identity", altBg: false, iconBg: C.cyan, iconChar: "ID",
  definition: "Agent sistemde kim olarak hareket eder?",
  question: "Service identity mi, user on-behalf-of mu, delegated mi?",
  emphasis: "Agent kimliği, kullanıcı kimliği kadar ciddi tasarlanmalıdır.",
  notes: "Microsoft ve AWS bunu artık platform kabiliyeti olarak ele alıyor. Identity sıradan bir auth değil; agentic identity workload identity ve just-in-time authorization gerektiriyor — Strata bunun için yeni bir kategori tanımlıyor.",
});
// SLAYT 11 - Authorization
harnessComponentSlide(pptx, {
  idx: 11, title: "Authorization", altBg: true, iconBg: C.softLila, iconChar: "🔐",
  definition: "Çok-boyutlu yetki — RBAC tek başına yetersiz",
  question: "Bu agent bu kullanıcı adına bu tool'u bu veriyle çağırabilir mi?",
  emphasis: "Yetki tek boyutlu değil; production'da en az beş eksen var.",
  detail: "User × Agent × Tool × Data × Action level",
  notes: "Bunu Maistro gibi platformda düşünün. Kullanıcı agent yaratır, tool bağlar, başkasına yetki devreder, memory tanımlar. Beş boyutlu bir yetki modeli olmadan agent platformu kurumsal anlamda yaşayamaz.",
});
// SLAYT 12 - Tool Governance
harnessComponentSlide(pptx, {
  idx: 12, title: "Tool Governance", altBg: false, iconBg: C.amber, iconChar: "⚙",
  definition: "Tool, sistemin elidir; her el aynı riski taşımaz",
  question: "Web arama vs müşteri verisi update vs ödeme — aynı yetki modeli mi?",
  emphasis: "Agent'a tool vermek, agent'a yetki vermektir.",
  detail: "Düşük risk: arama/okuma  •  Orta: DB sorgu/ticket  •  Yüksek: e-posta, ödeme, silme",
  notes: "Anthropic'in MCP standardı dış sistemlerle iki yönlü bağlantı sağlıyor — bu güçlü ama temas yüzeyini büyütüyor. Her tool için risk skorlaması, ACL ve audit gerekli.",
});
// SLAYT 13 - State Management
harnessComponentSlide(pptx, {
  idx: 13, title: "State Management", altBg: true, iconBg: C.cyan, iconChar: "S",
  definition: "Agent işi nerede bıraktığını biliyor mu?",
  question: "Uzun bir görevde retry, resume, checkpoint var mı?",
  emphasis: "State yönetimi olmayan agent, her seferinde yeniden başlayan bir demo'dur.",
  notes: "Yarım saatlik bir görevin var; agent'ın yirmi üçüncü dakikasında patladı. Ne olur? State yoksa baştan başlar. Bu, demoda fark edilmez — production'da uzun iş akışlarında her şeyi belirler.",
});
// SLAYT 14 - Memory
harnessComponentSlide(pptx, {
  idx: 14, title: "Memory", altBg: false, iconBg: C.softLila, iconChar: "M",
  definition: "Hatırlama kabiliyeti mi, yönetişim riski mi?",
  question: "Memory write/read policy, retention, forget mekanizması var mı?",
  emphasis: "Memory agent'ı kişiselleştirir; governance memory'i güvenilir kılar.",
  detail: "Faydalı: kişiselleştirme, bağlam  •  Riskli: PII sızıntı, poisoning, cross-tenant leak",
  notes: "AWS AgentCore memory'yi runtime resource olarak izliyor — sadece veri saklama değil, aktif bir runtime bileşeni. Retention, forget, write/read policy olmadan memory bir avantaj değil, bir risk.",
});
// SLAYT 15 - Guardrails
harnessComponentSlide(pptx, {
  idx: 15, title: "Guardrails", altBg: true, iconBg: C.cyanDeep, iconChar: "║",
  definition: "Sınır çizgileri 7 noktada çalışır",
  question: "Output filtre yeterli mi?",
  emphasis: "Guardrail, sansür değil; davranışı kurum sınırları içinde tutmaktır.",
  detail: "Input  •  Retrieval  •  Tool  •  Output  •  Cost  •  Policy  •  HITL",
  notes: "OpenAI Agents SDK guardrail mekanizmasını execution pipeline'la birlikte düşünüyor. Yani guardrail bir ek değil, mimarinin parçası — sonradan eklenmiyor, en başta tasarlanıyor.",
});
// SLAYT 16 - Sandbox
harnessComponentSlide(pptx, {
  idx: 16, title: "Sandbox", altBg: false, iconBg: C.charcoal, iconChar: "□",
  definition: "Agent neye dokunabilir? — Egress control",
  question: "Browser, kod yürütme, file system erişimi nasıl kısıtlanmalı?",
  emphasis: "Sandbox, agent zekası ile sistem kaynakları arasındaki güvenlik tamponudur.",
  notes: "Anthropic'in browser-use yazısı net: agent internette güvenilmeyen içerikle karşılaşıyor ve içerikteki gizli komutlar agent'ı ele geçirebiliyor. Sandbox burada zekayı değil, icra riskini yönetir.",
});
// SLAYT 17 - HITL
harnessComponentSlide(pptx, {
  idx: 17, title: "HITL", altBg: true, iconBg: C.amber, iconChar: "✓",
  definition: "Yüksek riskli aksiyonlarda insan onayı",
  question: "E-posta, ödeme, dosya silme — agent'a tek başına bırakılabilir mi?",
  emphasis: "HITL agent'ın yeteneksiz olduğunu göstermez; sorumluluğun yerini gösterir.",
  notes: "HITL'i yavaşlık olarak görmek bir yanılgı. Doğru mimaride HITL, yüksek riskli aksiyonların hızını değil, sorumluluk konumunu yönetir. Approval'ı agent iş akışının doğal parçası yapın — sonradan eklemeyin.",
});
// SLAYT 18 - Observability
harnessComponentSlide(pptx, {
  idx: 18, title: "Observability", altBg: false, iconBg: C.cyan, iconChar: "◎",
  definition: "Agent çalıştı bilgisi yetersizdir",
  question: "Niyet, plan, tool seçimi, retrieval, prompt versiyonu, token, retry — izleniyor mu?",
  emphasis: "Observability performans metriği değil, hesap verebilirlik mekanizmasıdır.",
  notes: "AWS AgentCore Observability token usage, latency, error rate, session count gibi metrikleri vurguluyor. Bunlar sıradan log değil — operasyonel kalite ve denetim altyapısı. Üç farklı ekibin (FinOps, engineering, security) farklı sorularına aynı izden cevap çıkıyor.",
});
// SLAYT 19 - Evaluation
harnessComponentSlide(pptx, {
  idx: 19, title: "Evaluation", altBg: true, iconBg: C.softLila, iconChar: "△",
  definition: "Final cevap kalitesi yetersizdir",
  question: "Niyet, plan, tool, retrieval, memory, policy — hepsi değerlendiriliyor mu?",
  emphasis: "Agent kalitesi, karar izinin kalitesidir.",
  detail: "Niyet → Plan → Tool seçimi → Retrieval → Policy → Çıktı",
  notes: "Klasik model evaluation final çıktıya bakar. Agent evaluation karar zincirine bakar. İkisi farklı disiplin ve agent'ın production'a alınma kararı bu ikinci tip değerlendirmeye dayanır.",
});

// ============================================================
// SLAYT 20 — SKILL LIFECYCLE & VERSİYONLAMA
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.white);

  s.addText("Skill Lifecycle ve 10 Versiyon Boyutu", {
    x: 0.6, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, bold: true, color: C.charcoal, fontFace: F.title,
  });
  s.addText("Versiyonlanmayan agent davranışı, denetlenemeyen agent davranışıdır.", {
    x: 0.6, y: 1.0, w: 9, h: 0.4,
    fontSize: 13, italic: true, color: C.cyanDeep, fontFace: F.body,
  });

  // Sol: Lifecycle akışı (yatay 9 aşama, küçük baloncuklar)
  s.addText("SKILL LIFECYCLE", {
    x: 0.6, y: 1.7, w: 4.5, h: 0.3,
    fontSize: 11, bold: true, color: C.cyanDeep, fontFace: F.body, charSpacing: 4,
  });

  const lifecycle = ["Discovery", "Design", "Validation", "Security", "Approval", "Versioning", "Deploy", "Monitor", "Retire"];
  lifecycle.forEach((stage, i) => {
    const y = 2.1 + i * 0.32;
    s.addShape("ellipse", {
      x: 0.7, y: y, w: 0.25, h: 0.25,
      fill: { color: C.cyan },
      line: { color: C.cyan },
    });
    s.addText(`${i + 1}. ${stage}`, {
      x: 1.05, y: y - 0.02, w: 3.5, h: 0.3,
      fontSize: 13, color: C.charcoal, fontFace: F.body,
    });
    if (i < lifecycle.length - 1) {
      s.addShape("line", {
        x: 0.825, y: y + 0.25, w: 0, h: 0.07,
        line: { color: C.cyan, width: 1.5 },
      });
    }
  });

  // Sağ: 10 versiyon türü (2x5 grid)
  s.addText("10 VERSİYON BOYUTU", {
    x: 5.3, y: 1.7, w: 4.5, h: 0.3,
    fontSize: 11, bold: true, color: C.softLila, fontFace: F.body, charSpacing: 4,
  });

  const versions = ["Agent", "Prompt", "Model", "Tool", "Skill", "RAG index", "Embedding", "Policy", "Guardrail", "Runtime"];
  versions.forEach((v, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 5.3 + col * 2.2;
    const y = 2.1 + row * 0.55;
    s.addShape("roundRect", {
      x: x, y: y, w: 2.05, h: 0.45,
      fill: { color: C.white },
      line: { color: C.softLila, width: 1.5 },
      rectRadius: 0.05,
    });
    s.addText(v, {
      x: x, y: y, w: 2.05, h: 0.45,
      fontSize: 13, color: C.charcoal, fontFace: F.body, align: "center", valign: "middle",
    });
  });

  pageNumber(s, 20, TOTAL, true, "Mimari");
  softtechFooter(s);

  s.addNotes("Bir gün denetçi gelir ve sorar: \"Bu agent altı ay önce müşteriye bu kararı neden verdi?\" Cevabı ancak bu on boyutun versiyonunu tutuyorsanız verebilirsiniz. Regülasyon, audit, sorumluluk meselesi.");
}

// ============================================================
// SLAYT 21 — 9-KATMAN REFERANS MİMARİ (ALTIN SLAYT)
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.white);

  s.addText("Referans Agent Harness Mimarisi", {
    x: 0.6, y: 0.3, w: 9, h: 0.5,
    fontSize: 24, bold: true, color: C.charcoal, fontFace: F.title,
  });
  s.addText("Kullanıcı sadece agent'ı görür; arkasındaki dokuz katman onu güvenilir kılar.", {
    x: 0.6, y: 0.8, w: 9, h: 0.3,
    fontSize: 12, italic: true, color: C.midGray, fontFace: F.body,
  });

  // Kullanıcı ikonu en üstte (görünen)
  s.addShape("ellipse", {
    x: 4.65, y: 1.2, w: 0.7, h: 0.7,
    fill: { color: C.amber },
    line: { color: C.amber },
  });
  s.addText("USER", {
    x: 4.65, y: 1.2, w: 0.7, h: 0.7,
    fontSize: 9, bold: true, color: C.charcoal, fontFace: F.body, align: "center", valign: "middle",
  });
  // Ok aşağı
  s.addShape("line", {
    x: 5.0, y: 1.95, w: 0, h: 0.15,
    line: { color: C.charcoal, width: 1.5 },
  });

  const layers = [
    { name: "Channel Layer",       sub: "Web · API · Slack · Teams",                   bg: C.cyanLight, fg: C.charcoal },
    { name: "Agent Gateway",       sub: "auth · tenant · rate limit · policy pre-check", bg: C.cyan,     fg: C.charcoal },
    { name: "Agent Runtime",       sub: "loop · planning · state · checkpoint · resume", bg: C.cyanDeep, fg: C.white },
    { name: "Context & Memory",    sub: "session · working · long-term · RAG · ACL",   bg: C.softLila,  fg: C.white },
    { name: "Tool Orchestration",  sub: "registry · schemas · ACL · risk · logs",     bg: C.softLila,  fg: C.white },
    { name: "Policy & Guardrail",  sub: "input · output · tool · cost · classification", bg: C.amber,   fg: C.charcoal },
    { name: "HITL / Approval",     sub: "queue · reviewer · decision record · resume", bg: C.amber,    fg: C.charcoal },
    { name: "Observability & Audit", sub: "traces · metrics · lineage · versions",     bg: C.midGray,  fg: C.white },
    { name: "Lifecycle Layer",     sub: "versioning · deployment · canary · rollback", bg: C.charcoal, fg: C.white },
  ];

  const layerH = 0.36;
  const startY = 2.15;
  layers.forEach((l, i) => {
    const y = startY + i * (layerH + 0.01);
    s.addShape("rect", {
      x: 0.8, y: y, w: 8.4, h: layerH,
      fill: { color: l.bg },
      line: { color: l.bg },
    });
    s.addText(l.name, {
      x: 0.95, y: y, w: 3, h: layerH,
      fontSize: 11, bold: true, color: l.fg, fontFace: F.title, valign: "middle",
    });
    s.addText(l.sub, {
      x: 4.0, y: y, w: 5.0, h: layerH,
      fontSize: 9, color: l.fg, fontFace: F.body, valign: "middle", italic: true,
    });
  });

  pageNumber(s, 21, TOTAL, true, "Mimari", false);

  s.addNotes("Bu, sunumun altın slaytı. Bir agent sistemi kurarken bu dokuz katmanın hangisi olmadan çalışıyorsanız, prod'a girmeden patlayacaksınız. Çoğu demo birinci ve üçüncü katmanı kullanır; gerisini boş bırakır. Bu sunumdan tek bir slaytı hatırlayacaksanız, bu olsun.");
}

// ============================================================
// SLAYT 22 — MATURITY MODEL L0-L5
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.white);

  s.addText("Agent Harness Maturity Model", {
    x: 0.6, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, bold: true, color: C.charcoal, fontFace: F.title,
  });
  s.addText("Çoğu kurum L1-L2'de demo yapıyor; gerçek değer L3 sonrası başlıyor.", {
    x: 0.6, y: 1.0, w: 9, h: 0.4,
    fontSize: 13, italic: true, color: C.cyanDeep, fontFace: F.body,
  });

  const levels = [
    { id: "L0", name: "Prompt Demo",   desc: "Tek prompt, state yok",                bg: C.lightGray,  h: 0.7 },
    { id: "L1", name: "Tool-Using",    desc: "Basit tool çağrısı",                   bg: C.cyanLight,  h: 1.1 },
    { id: "L2", name: "Stateful",      desc: "Session, history, retry",              bg: C.cyan,       h: 1.6 },
    { id: "L3", name: "Governed",      desc: "ACL, guardrail, audit",                bg: C.softLila,   h: 2.1, highlight: true },
    { id: "L4", name: "Durable",       desc: "Checkpoint, resume, HITL",             bg: C.cyanDeep,   h: 2.5 },
    { id: "L5", name: "Managed Platform", desc: "Lifecycle merkezi, prod-ready",     bg: C.charcoal,   h: 3.0 },
  ];

  const baseY = 4.7;
  const colW = 1.42;
  const startX = 0.7;
  levels.forEach((lvl, i) => {
    const x = startX + i * (colW + 0.1);
    const y = baseY - lvl.h;
    s.addShape("rect", {
      x: x, y: y, w: colW, h: lvl.h,
      fill: { color: lvl.bg },
      line: lvl.highlight ? { color: C.amber, width: 3 } : { color: lvl.bg },
    });
    s.addText(lvl.id, {
      x: x, y: y + 0.05, w: colW, h: 0.4,
      fontSize: 18, bold: true, color: i >= 2 ? C.white : C.charcoal, fontFace: F.title, align: "center",
    });
    s.addText(lvl.name, {
      x: x, y: y + 0.45, w: colW, h: 0.3,
      fontSize: 11, bold: true, color: i >= 2 ? C.white : C.charcoal, fontFace: F.body, align: "center",
    });
    s.addText(lvl.desc, {
      x: x, y: y + 0.75, w: colW, h: 0.6,
      fontSize: 9, color: i >= 2 ? C.white : C.midGray, fontFace: F.body, align: "center", italic: true,
    });
  });

  // Production başlangıç oku (L3'ün üstüne)
  s.addText("← Production başlangıcı", {
    x: 4.7, y: 1.7, w: 3, h: 0.3,
    fontSize: 11, bold: true, italic: true, color: C.amber, fontFace: F.body,
  });

  // Tabandaki çizgi
  s.addShape("line", {
    x: 0.6, y: 4.75, w: 9, h: 0,
    line: { color: C.charcoal, width: 1 },
  });

  s.addText("Demo dünyası", {
    x: 0.6, y: 4.85, w: 2.5, h: 0.3,
    fontSize: 10, italic: true, color: C.midGray, fontFace: F.body, align: "center",
  });
  s.addText("Üretim disiplini", {
    x: 6.5, y: 4.85, w: 3, h: 0.3,
    fontSize: 10, bold: true, italic: true, color: C.cyanDeep, fontFace: F.body, align: "center",
  });

  pageNumber(s, 22, TOTAL, true, "Mimari");
  softtechFooter(s);

  s.addNotes("Bu modele kendi sisteminizi koyun. L0-L2 demo dünyası — burada kalan ekipler %86-89 başarısızlık istatistiğini besliyor. L3 sonrası üretim disiplini başlıyor.");
}

// ============================================================
// SLAYT 23 — MODEL RİSK vs HARNESS RİSK
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.white);

  s.addText("Model Risk vs Harness Risk", {
    x: 0.6, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, bold: true, color: C.charcoal, fontFace: F.title,
  });
  s.addText("Risklerin önemli bölümü modelden değil, modelin nasıl çalıştırıldığından doğar.", {
    x: 0.6, y: 1.0, w: 9, h: 0.4,
    fontSize: 13, italic: true, color: C.cyanDeep, fontFace: F.body,
  });

  // Header
  const colWidth = 4.3;
  s.addShape("rect", {
    x: 0.6, y: 1.55, w: 1.5, h: 0.4,
    fill: { color: C.charcoal }, line: { color: C.charcoal },
  });
  s.addText("Alan", {
    x: 0.6, y: 1.55, w: 1.5, h: 0.4,
    fontSize: 12, bold: true, color: C.white, fontFace: F.body, align: "center", valign: "middle",
  });
  s.addShape("rect", {
    x: 2.2, y: 1.55, w: colWidth - 0.5, h: 0.4,
    fill: { color: C.lightGray }, line: { color: C.lightGray },
  });
  s.addText("Model Riski", {
    x: 2.2, y: 1.55, w: colWidth - 0.5, h: 0.4,
    fontSize: 12, bold: true, color: C.charcoal, fontFace: F.body, align: "center", valign: "middle",
  });
  s.addShape("rect", {
    x: 5.95, y: 1.55, w: colWidth - 0.3, h: 0.4,
    fill: { color: C.cyan }, line: { color: C.cyan },
  });
  s.addText("Harness Riski", {
    x: 5.95, y: 1.55, w: colWidth - 0.3, h: 0.4,
    fontSize: 12, bold: true, color: C.charcoal, fontFace: F.body, align: "center", valign: "middle",
  });

  const rows = [
    ["Doğruluk",   "Halüsinasyon",          "Yanlış retrieval, eksik context"],
    ["Güvenlik",   "Zararlı çıktı",         "Yetkisiz tool erişimi"],
    ["Gizlilik",   "Hassas bilgi üretimi",  "Memory leakage"],
    ["Operasyon",  "Tutarsız cevap",        "Retry/resume yokluğu"],
    ["Maliyet",    "Uzun cevap",            "Sonsuz loop"],
    ["Denetim",    "Açıklanamayan karar",   "Trace eksikliği"],
    ["Yetki",      "Sınır bilmeme",         "ACL eksikliği"],
    ["Sorumluluk", "Yanlış öneri",          "HITL eksikliği"],
  ];

  const rowH = 0.35;
  rows.forEach((row, i) => {
    const y = 1.95 + i * rowH;
    const stripe = i % 2 === 0 ? C.mistGray : C.white;
    // Alan
    s.addShape("rect", { x: 0.6, y: y, w: 1.5, h: rowH, fill: { color: C.charcoal }, line: { color: C.charcoal } });
    s.addText(row[0], { x: 0.7, y: y, w: 1.4, h: rowH, fontSize: 11, bold: true, color: C.white, fontFace: F.body, valign: "middle" });
    // Model Riski
    s.addShape("rect", { x: 2.2, y: y, w: colWidth - 0.5, h: rowH, fill: { color: stripe }, line: { color: C.lightGray } });
    s.addText(row[1], { x: 2.3, y: y, w: colWidth - 0.7, h: rowH, fontSize: 11, color: C.midGray, fontFace: F.body, valign: "middle" });
    // Harness Riski
    s.addShape("rect", { x: 5.95, y: y, w: colWidth - 0.3, h: rowH, fill: { color: stripe }, line: { color: C.cyan, width: 0.5 } });
    s.addText(row[2], { x: 6.05, y: y, w: colWidth - 0.5, h: rowH, fontSize: 11, bold: true, color: C.charcoal, fontFace: F.body, valign: "middle" });
  });

  pageNumber(s, 23, TOTAL, true, "Mimari");
  softtechFooter(s);

  s.addNotes("Halüsinasyon model problemidir, çözümü model katmanında. Yanlış retrieval ise harness problemidir, çözümü context engineering ve memory governance'da. İki ayrı problem, iki ayrı çözüm. Karıştırılırsa hiçbiri çözülmez.");
}

// ============================================================
// SLAYT 24 — YENİ SALDIRI YÜZEYLERİ
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.charcoal);

  s.addText("Yeni Saldırı Yüzeyleri", {
    x: 0.6, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, bold: true, color: C.white, fontFace: F.title,
  });
  s.addText("Agent ne kadar otonom hale gelirse, güvenlik konusu model güvenliğinden sistem güvenliğine kayar.", {
    x: 0.6, y: 1.0, w: 9, h: 0.4,
    fontSize: 12, italic: true, color: C.amber, fontFace: F.body,
  });

  const attacks = [
    { name: "Prompt injection",   desc: "Görünmeyen talimatlar" },
    { name: "Tool injection",     desc: "Araç çağrısı manipülasyonu" },
    { name: "Memory poisoning",   desc: "Hafıza zehirlenmesi" },
    { name: "RAG poisoning",      desc: "Bilgi kaynağı kirletme" },
    { name: "Privilege escalation", desc: "Yetki yükseltme" },
    { name: "Credential leakage", desc: "Kimlik bilgisi sızıntısı" },
    { name: "Cross-tenant leak",  desc: "Tenant arası veri kaçağı" },
    { name: "Unauthorized exec",  desc: "Yetkisiz tool yürütme" },
    { name: "Data exfiltration",  desc: "Veri dışa aktarımı" },
    { name: "Unbounded loop",     desc: "Sınırsız döngü, maliyet" },
    { name: "Malicious MCP",      desc: "Kötü niyetli MCP server" },
    { name: "Supply chain risk",  desc: "Tedarik zinciri riski" },
  ];

  const cols = 4;
  const cellW = 2.1;
  const cellH = 0.85;
  const startX = 0.6;
  const startY = 1.6;
  attacks.forEach((a, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = startX + col * (cellW + 0.13);
    const y = startY + row * (cellH + 0.12);
    s.addShape("roundRect", {
      x: x, y: y, w: cellW, h: cellH,
      fill: { color: C.deepCharcoal },
      line: { color: C.amber, width: 1.25 },
      rectRadius: 0.05,
    });
    s.addText(a.name, {
      x: x + 0.1, y: y + 0.08, w: cellW - 0.2, h: 0.35,
      fontSize: 12, bold: true, color: C.amber, fontFace: F.body,
    });
    s.addText(a.desc, {
      x: x + 0.1, y: y + 0.42, w: cellW - 0.2, h: 0.4,
      fontSize: 9, italic: true, color: C.lightGray, fontFace: F.body,
    });
  });

  s.addText("Bu listenin yarısı geçen yıl yoktu. Önümüzdeki yıl daha uzun olacak.", {
    x: 0.6, y: 4.95, w: 9, h: 0.3,
    fontSize: 11, italic: true, color: C.amber, fontFace: F.body, align: "center",
  });

  pageNumber(s, 24, TOTAL, true, "Kurumsal", false);

  s.addNotes("Anthropic'in prompt injection savunmaları yazısı net: browser kullanan agent güvenilmeyen web içeriğiyle karşılaşıyor ve içerikteki gizli komutlar agent davranışını ele geçirebiliyor. Bu listenin yarısı geçen yıl yoktu, önümüzdeki yıl daha uzun olacak.");
}

// ============================================================
// SLAYT 25 — KURUMSAL DİSİPLİN (BANKA)
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.white);

  s.addText("Neden her kurum kendi harness'ını düşünmek zorunda?", {
    x: 0.6, y: 0.4, w: 9, h: 0.6,
    fontSize: 22, bold: true, color: C.charcoal, fontFace: F.title,
  });
  s.addText("Hazır framework başlangıç için yeterli; kurumsal disiplin değil.", {
    x: 0.6, y: 0.95, w: 9, h: 0.3,
    fontSize: 13, italic: true, color: C.cyanDeep, fontFace: F.body,
  });

  // Sol — Bina + kalkan ikon
  s.addShape("rect", {
    x: 0.8, y: 1.7, w: 2.6, h: 3.0,
    fill: { color: C.charcoal },
    line: { color: C.charcoal },
  });
  // Bina pencereler
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      s.addShape("rect", {
        x: 1.0 + col * 0.55, y: 2.0 + row * 0.55, w: 0.4, h: 0.35,
        fill: { color: C.cyanLight },
        line: { color: C.cyanLight },
      });
    }
  }
  // Üstte kalkan/koruma sembolü
  s.addShape("ellipse", {
    x: 1.6, y: 1.4, w: 1.0, h: 0.5,
    fill: { color: C.cyan },
    line: { color: C.cyan },
  });
  s.addText("⚙", {
    x: 1.6, y: 1.4, w: 1.0, h: 0.5,
    fontSize: 24, bold: true, color: C.charcoal, fontFace: F.title, align: "center", valign: "middle",
  });
  s.addText("REGÜLE KURUM", {
    x: 0.8, y: 4.85, w: 2.6, h: 0.25,
    fontSize: 10, bold: true, color: C.charcoal, fontFace: F.body, align: "center", charSpacing: 4,
  });

  // Sağ — 8 madde
  const questions = [
    "Veri nerede işleniyor?",
    "Model çağrısı hangi gateway'den çıkıyor?",
    "Müşteri verisi memory'ye yazılıyor mu?",
    "Tool çağrıları kullanıcı adına mı?",
    "Prompt-output logları maskeleniyor mu?",
    "Agent kararları denetlenebilir mi?",
    "Hangi adımda HITL gerekiyor?",
    "Agent sürümü geriye dönük incelenebilir mi?",
  ];
  questions.forEach((q, i) => {
    const y = 1.7 + i * 0.42;
    s.addShape("ellipse", {
      x: 3.7, y: y, w: 0.3, h: 0.3,
      fill: { color: C.softLila },
      line: { color: C.softLila },
    });
    s.addText((i + 1).toString(), {
      x: 3.7, y: y, w: 0.3, h: 0.3,
      fontSize: 11, bold: true, color: C.white, fontFace: F.body, align: "center", valign: "middle",
    });
    s.addText(q, {
      x: 4.1, y: y - 0.02, w: 5.5, h: 0.35,
      fontSize: 12, color: C.charcoal, fontFace: F.body, valign: "middle",
    });
  });

  pageNumber(s, 25, TOTAL, true, "Kurumsal");
  softtechFooter(s);

  s.addNotes("Bankacılık, sağlık, sigorta gibi regüle sektörlerde bu sorular pazarlık dışıdır. Hazır agent framework'leri size geliştirme hızı verir; ama kurumsal harness, kurumun risk iştahıyla, regülasyonuyla, veri politikasıyla birlikte tasarlanmak zorundadır.");
}

// ============================================================
// SLAYT 26 — MAİSTRO
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.white);

  s.addText("Maistro: Yerli Kurumsal Agent Harness Platformu", {
    x: 0.6, y: 0.3, w: 9, h: 0.5,
    fontSize: 24, bold: true, color: C.charcoal, fontFace: F.title,
  });
  s.addText("Türkiye İş Bankası'na lisanslanan, Softtech'te geliştirilen kurumsal agent işletim katmanı.", {
    x: 0.6, y: 0.85, w: 9, h: 0.3,
    fontSize: 12, italic: true, color: C.cyanDeep, fontFace: F.body,
  });

  // Sol yarı - Görünen Maistro (cyan light)
  s.addShape("rect", {
    x: 0.6, y: 1.4, w: 4.3, h: 3.2,
    fill: { color: C.cyanLight },
    line: { color: C.cyan, width: 1 },
  });
  s.addText("</ Görünen Maistro />", {
    x: 0.8, y: 1.55, w: 4, h: 0.5,
    fontSize: 16, bold: true, color: C.charcoal, fontFace: F.mono,
  });
  s.addShape("line", {
    x: 0.8, y: 2.05, w: 1.5, h: 0,
    line: { color: C.cyanDeep, width: 2 },
  });
  const visibleItems = [
    "Konuşan agent",
    "RAG ile cevap veren agent",
    "Tool çağıran agent",
    "İş akışı yürüten agent",
  ];
  visibleItems.forEach((item, i) => {
    s.addText("•  " + item, {
      x: 0.8, y: 2.3 + i * 0.45, w: 4, h: 0.4,
      fontSize: 14, color: C.charcoal, fontFace: F.body, valign: "middle",
    });
  });

  // Sağ yarı - Görünmeyen Harness (charcoal)
  s.addShape("rect", {
    x: 5.1, y: 1.4, w: 4.3, h: 3.2,
    fill: { color: C.charcoal },
    line: { color: C.charcoal },
  });
  s.addText("</ Görünmeyen Harness />", {
    x: 5.3, y: 1.55, w: 4, h: 0.5,
    fontSize: 16, bold: true, color: C.cyan, fontFace: F.mono,
  });
  s.addShape("line", {
    x: 5.3, y: 2.05, w: 1.5, h: 0,
    line: { color: C.cyan, width: 2 },
  });
  const hiddenItems = [
    "Agent runtime, state yönetimi",
    "Tool registry, ACL, governance",
    "PII anonymization, OAuth2",
    "Hibrit LLM (cloud + on-prem)",
    "Audit, lifecycle, deployment",
  ];
  hiddenItems.forEach((item, i) => {
    s.addText("•  " + item, {
      x: 5.3, y: 2.3 + i * 0.4, w: 4, h: 0.35,
      fontSize: 13, color: C.white, fontFace: F.body, valign: "middle",
    });
  });

  // Alt soft lila bant
  s.addShape("rect", {
    x: 0, y: 4.85, w: 10, h: 0.6,
    fill: { color: C.softLila },
    line: { color: C.softLila },
  });
  s.addText("Türkiye'de bu seviyede başka enterprise agent harness platformu görmedim — varsa bilen söylesin.", {
    x: 0.6, y: 4.9, w: 9, h: 0.5,
    fontSize: 12, bold: true, italic: true, color: C.white, fontFace: F.body, align: "center", valign: "middle",
  });

  pageNumber(s, 26, TOTAL, true, "Kurumsal");

  s.addNotes("Maistro'yu detayıyla tanıtmıyorum. Anlatmak istediğim şu: bu sunumun tezini yaşayan, regüle ortamda çalışan, yerli mühendislik ürünü bir platform var. Türkiye'de bu seviyede başka enterprise agent harness platformu görmedim — varsa bilen söylesin, ben de öğrenmek isterim.");
}

// ============================================================
// SLAYT 27 — PRODUCTION READINESS CHECKLIST
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.white);

  s.addText("Production Readiness Checklist", {
    x: 0.6, y: 0.3, w: 9, h: 0.5,
    fontSize: 26, bold: true, color: C.charcoal, fontFace: F.title,
  });
  s.addText("Production-ready agent: doğru cevap veren değil; doğru sınırlar içinde, doğru izlerle çalışan agent.", {
    x: 0.6, y: 0.85, w: 9, h: 0.3,
    fontSize: 11, italic: true, color: C.cyanDeep, fontFace: F.body,
  });

  const columns = [
    {
      title: "KİMLİK & YETKİ", color: C.cyan,
      items: [
        "Agent kimliği tanımlı mı?",
        "User on-behalf-of var mı?",
        "Agent ACL ayrılmış mı?",
        "Tool ACL ayrılmış mı?",
        "Tenant boundary net mi?",
        "Sub-agent yetki devri tanımlı mı?",
      ],
    },
    {
      title: "ÇALIŞMA & İZLEME", color: C.softLila,
      items: [
        "State kalıcı ve izlenebilir mi?",
        "Resume çalışıyor mu?",
        "Memory policy tanımlı mı?",
        "RAG yetki filtresi var mı?",
        "Versiyonlar loglanıyor mu?",
        "Trace/lineage tutuluyor mu?",
        "Token/cost izleniyor mu?",
        "Guardrail ihlalleri ölçülüyor mu?",
      ],
    },
    {
      title: "YÖNETİŞİM & DEPLOY", color: C.amber,
      items: [
        "Risk seviyeli tool sınıflaması var mı?",
        "Approval kaydı tutuluyor mu?",
        "Deployment rollback mümkün mü?",
        "Canary/pilot ayrımı var mı?",
        "Evaluation karar izini ölçüyor mu?",
        "Davranış kurum politikalarıyla hizalı mı?",
      ],
    },
  ];

  const colW = 3.0;
  const startX = 0.55;
  let counter = 1;
  columns.forEach((col, ci) => {
    const x = startX + ci * (colW + 0.08);
    // Header
    s.addShape("rect", {
      x: x, y: 1.3, w: colW, h: 0.4,
      fill: { color: col.color },
      line: { color: col.color },
    });
    s.addText(col.title, {
      x: x, y: 1.3, w: colW, h: 0.4,
      fontSize: 11, bold: true, color: C.charcoal, fontFace: F.body, align: "center", valign: "middle", charSpacing: 3,
    });

    col.items.forEach((item, i) => {
      const y = 1.85 + i * 0.42;
      // Numara
      s.addText(counter.toString().padStart(2, "0"), {
        x: x + 0.05, y: y, w: 0.4, h: 0.35,
        fontSize: 11, bold: true, color: col.color, fontFace: F.body,
      });
      // Check kutusu
      s.addShape("rect", {
        x: x + 0.4, y: y + 0.05, w: 0.22, h: 0.22,
        fill: { color: C.white },
        line: { color: col.color, width: 1.5 },
      });
      // Madde
      s.addText(item, {
        x: x + 0.7, y: y, w: colW - 0.7, h: 0.4,
        fontSize: 10, color: C.charcoal, fontFace: F.body, valign: "middle",
      });
      counter++;
    });
  });

  s.addText("Onaylamadığınız bir madde varsa, henüz production'a hazır değilsiniz.", {
    x: 0.6, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, italic: true, bold: true, color: C.charcoal, fontFace: F.body, align: "center",
  });

  pageNumber(s, 27, TOTAL, true, "Kurumsal");

  s.addNotes("Bu listeyi fotoğraflayın. Kuracağınız her sistemde bu yirmi sorunun cevabı net olmalı. Onaylamadığınız bir madde varsa, henüz production'a hazır değilsiniz — buradan başlayın.");
}

// ============================================================
// SLAYT 28 — KAPANIŞ / FİNAL TEZ
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.charcoal);

  // Üst label
  s.addText("KAPANIŞ", {
    x: 0.6, y: 0.6, w: 9, h: 0.3,
    fontSize: 11, bold: true, color: C.cyan, fontFace: F.body, charSpacing: 5,
  });

  // Büyük başlık
  s.addText("Agent çağında", {
    x: 0.6, y: 1.1, w: 9, h: 0.7,
    fontSize: 48, bold: true, color: C.white, fontFace: F.title,
  });
  s.addText("kazanan kim olacak?", {
    x: 0.6, y: 1.85, w: 9, h: 0.7,
    fontSize: 48, bold: true, color: C.cyan, fontFace: F.title,
  });

  // Çizgi
  s.addShape("line", {
    x: 0.6, y: 2.85, w: 1.5, h: 0,
    line: { color: C.amber, width: 3 },
  });

  // Final tez
  s.addText([
    { text: "Daha akıllı modelleri geliştirenlerin değil;\n", options: { color: C.lightGray, italic: true } },
    { text: "bu modelleri kurumsal dünyada ", options: { color: C.white } },
    { text: "güvenilir sistemlere\ndönüştürebilenlerin", options: { color: C.cyan, bold: true } },
    { text: " olacak.", options: { color: C.amber, bold: true } },
  ], {
    x: 0.6, y: 3.05, w: 9, h: 1.6,
    fontSize: 22, fontFace: F.title,
  });

  // Alt vurgu
  s.addText("Yarın kuracağınız sistem ne kadar otonom olursa, bugün düşünmeniz gereken kontroller o kadar derin olmalı.", {
    x: 0.6, y: 4.85, w: 9, h: 0.4,
    fontSize: 12, italic: true, color: C.midGray, fontFace: F.body, align: "center",
  });

  s.addNotes("Sunuma başlarken size bir tez sundum: harness, modelin gerçek dünya ile güvenli temas yüzeyidir. Bu yarım saatte bunu kanıtlamaya çalıştım. Şimdi sözü size bırakıyorum: yarın kurduğunuz sistem ne kadar otonom olursa olsun, bugün düşündüğünüz kontroller onun ayakta kalmasını belirleyecek. En iyi modeli kullanmak rekabet avantajı sağlamaz; en olgun harness'ı kurmak sağlar. O insanlardan biri olmanızı dilerim.");
}

// ============================================================
// SLAYT 29 — TEŞEKKÜR / Q&A
// ============================================================
{
  const s = pptx.addSlide();
  bg(s, C.charcoal);
  decorativeWaves(s, "right");

  // Sol - Teşekkürler
  s.addText("<", {
    x: 0.5, y: 0.4, w: 0.8, h: 0.8,
    fontSize: 56, bold: true, color: C.cyan, fontFace: F.title,
  });

  s.addText("Teşekkürler.", {
    x: 0.6, y: 1.4, w: 5.5, h: 1.0,
    fontSize: 64, bold: true, color: C.cyan, fontFace: F.title,
  });
  s.addText("Sorularınız?", {
    x: 0.6, y: 2.5, w: 5.5, h: 0.7,
    fontSize: 28, italic: true, color: C.white, fontFace: F.title,
  });

  // Sağ - Kişi bilgileri
  s.addShape("ellipse", {
    x: 7.0, y: 1.5, w: 2.0, h: 2.0,
    fill: { color: C.cyan },
    line: { color: C.cyan, width: 0 },
  });
  s.addText("ŞS", {
    x: 7.0, y: 1.5, w: 2.0, h: 2.0,
    fontSize: 60, bold: true, color: C.charcoal, fontFace: F.title, align: "center", valign: "middle",
  });

  s.addText("Şeyma Sarıgıl", {
    x: 6.5, y: 3.7, w: 3, h: 0.4,
    fontSize: 18, bold: true, color: C.white, fontFace: F.title, align: "center",
  });
  s.addText("Generative AI Architect", {
    x: 6.5, y: 4.1, w: 3, h: 0.3,
    fontSize: 13, color: C.cyan, fontFace: F.body, align: "center",
  });
  s.addText("Softtech", {
    x: 6.5, y: 4.4, w: 3, h: 0.3,
    fontSize: 12, italic: true, color: C.midGray, fontFace: F.body, align: "center",
  });

  // Alt — Softtech imzası
  s.addText("< softtech", {
    x: 0.6, y: 5.1, w: 3, h: 0.3,
    fontSize: 14, bold: true, color: C.cyan, fontFace: F.title,
  });
  s.addText("LinkedIn:  /in/seymasarigil", {
    x: 6.0, y: 5.1, w: 3.5, h: 0.3,
    fontSize: 11, color: C.lightGray, fontFace: F.body, align: "right",
  });

  s.addNotes("Sorularınızı bekliyorum. LinkedIn'den de ulaşabilirsiniz. Tartışmak istediğiniz somut bir sistem varsa, ayrıca konuşmaktan mutluluk duyarım.");
}

// ============================================================
// SAVE
// ============================================================
const outputPath = "Gorunen-Agent-Gorunmeyen-Harness.pptx";
pptx.writeFile({ fileName: outputPath }).then((path) => {
  console.log(`✓ Üretildi: ${path}`);
  console.log(`  Slayt sayısı: ${TOTAL}`);
}).catch((err) => {
  console.error("HATA:", err);
  process.exit(1);
});
