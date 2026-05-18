// build-pptx.template.js
// Production Agent kullanim sablonu — slayt verisini doldurarak .pptx uretir
// Cagri: node build-pptx.js
// Bagimlilik: npm install pptxgenjs

const PptxGenJS = require("pptxgenjs");

// ============================================================
// KONFIGURASYON — Pipeline ciktisindan doldurulur
// ============================================================

const CONFIG = {
  fileName: "slug-buraya.pptx",
  title: "Sunum Basligi",
  author: "Cowork Pipeline",
  subject: "Topic X",
  layout: "LAYOUT_16x9",
};

// Visual Structuring agent'inin onerdigi renk paleti
// NOT: PptxGenJS hex'leri # OLMADAN ister
const PALETTE = {
  dominant:  "4A2C2A",  // ana renk
  ikincil:   "C9A27E",  // tamamlayici
  aksan:     "E07A3F",  // vurgu
  arkaplan:  "FAF7F2",  // slayt arkaplani
  metin:     "1F1B16",  // ana metin rengi
  metinSoluk:"5A5048",  // ikincil metin
};

const FONT = {
  baslik: "Calibri",
  govde:  "Calibri",
};

// Slayt verisi — Content + Visual ciktisindan birlestirilir
const SLIDES = [
  {
    index: 1,
    layout: "kapak",
    baslik: "Sunum Basligi",
    altBaslik: "Konuyu ozetleyen tek cumle",
    konusmaciNotu: "Acilis cumlesi: ...",
  },
  {
    index: 2,
    layout: "buyuk_sayi",
    baslik: "Iddia basligi (8-12 kelime)",
    buyukSayi: "73%",
    aciklama: "Sayinin baglamini aciklayan tek cumle",
    konusmaciNotu: "...",
  },
  {
    index: 3,
    layout: "iki_sutun",
    baslik: "Karsilastirma basligi",
    sol: { baslik: "Once", maddeler: ["...", "...", "..."] },
    sag: { baslik: "Sonra", maddeler: ["...", "...", "..."] },
    konusmaciNotu: "...",
  },
  {
    index: 4,
    layout: "kart_grid",
    baslik: "Dort temel boyut",
    kartlar: [
      { ikon: "*", baslik: "Boyut 1", metin: "Kisa aciklama" },
      { ikon: "*", baslik: "Boyut 2", metin: "Kisa aciklama" },
      { ikon: "*", baslik: "Boyut 3", metin: "Kisa aciklama" },
      { ikon: "*", baslik: "Boyut 4", metin: "Kisa aciklama" },
    ],
    konusmaciNotu: "...",
  },
  {
    index: 5,
    layout: "grafik",
    baslik: "Trend basligi",
    grafikTipi: "BAR",
    veri: [
      { name: "2022", labels: ["Q1", "Q2", "Q3", "Q4"], values: [10, 25, 40, 55] },
    ],
    konusmaciNotu: "...",
  },
  {
    index: 6,
    layout: "alinti",
    alinti: '"Buyuk bir alinti metni — 15-20 kelime"',
    yazar: "— Kaynak Adi",
    konusmaciNotu: "...",
  },
  {
    index: 7,
    layout: "kapanis",
    baslik: "Tek cumlelik kapanis mesaji",
    altBaslik: "Eylem cagrisi veya soru",
    konusmaciNotu: "Son izlenim cumlesi: ...",
  },
];

// ============================================================
// LAYOUT FONKSIYONLARI
// ============================================================

function applyBackground(slide) {
  slide.background = { color: PALETTE.arkaplan };
}

function addFooter(slide, index, total) {
  slide.addText(`${index} / ${total}`, {
    x: 9.0, y: 5.15, w: 0.8, h: 0.3,
    fontSize: 10, color: PALETTE.metinSoluk, fontFace: FONT.govde, align: "right",
  });
}

function layoutKapak(pptx, slide, data) {
  applyBackground(slide);
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 2.0, w: 10, h: 0.05, fill: { color: PALETTE.aksan }, line: { color: PALETTE.aksan },
  });
  slide.addText(data.baslik, {
    x: 0.6, y: 2.2, w: 8.8, h: 1.5,
    fontSize: 44, bold: true, color: PALETTE.dominant, fontFace: FONT.baslik,
  });
  if (data.altBaslik) {
    slide.addText(data.altBaslik, {
      x: 0.6, y: 3.7, w: 8.8, h: 0.8,
      fontSize: 20, color: PALETTE.metinSoluk, fontFace: FONT.govde, italic: true,
    });
  }
}

function layoutBuyukSayi(pptx, slide, data) {
  applyBackground(slide);
  slide.addText(data.baslik, {
    x: 0.6, y: 0.4, w: 8.8, h: 0.8,
    fontSize: 30, bold: true, color: PALETTE.dominant, fontFace: FONT.baslik,
  });
  slide.addText(data.buyukSayi, {
    x: 0.6, y: 1.6, w: 8.8, h: 2.5,
    fontSize: 110, bold: true, color: PALETTE.aksan, fontFace: FONT.baslik, align: "center",
  });
  slide.addText(data.aciklama, {
    x: 1.5, y: 4.3, w: 7.0, h: 0.7,
    fontSize: 16, color: PALETTE.metin, fontFace: FONT.govde, align: "center",
  });
}

function layoutIkiSutun(pptx, slide, data) {
  applyBackground(slide);
  slide.addText(data.baslik, {
    x: 0.6, y: 0.4, w: 8.8, h: 0.8,
    fontSize: 30, bold: true, color: PALETTE.dominant, fontFace: FONT.baslik,
  });
  // Sol sutun
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.6, y: 1.5, w: 4.1, h: 3.4, fill: { color: PALETTE.ikincil + "22" }, line: { color: PALETTE.ikincil },
  });
  slide.addText(data.sol.baslik, {
    x: 0.8, y: 1.7, w: 3.7, h: 0.5, fontSize: 20, bold: true, color: PALETTE.dominant, fontFace: FONT.baslik,
  });
  slide.addText(data.sol.maddeler.map(m => ({ text: m, options: { bullet: true } })), {
    x: 0.8, y: 2.3, w: 3.7, h: 2.4, fontSize: 14, color: PALETTE.metin, fontFace: FONT.govde,
  });
  // Sag sutun
  slide.addShape(pptx.ShapeType.rect, {
    x: 5.3, y: 1.5, w: 4.1, h: 3.4, fill: { color: PALETTE.aksan + "22" }, line: { color: PALETTE.aksan },
  });
  slide.addText(data.sag.baslik, {
    x: 5.5, y: 1.7, w: 3.7, h: 0.5, fontSize: 20, bold: true, color: PALETTE.aksan, fontFace: FONT.baslik,
  });
  slide.addText(data.sag.maddeler.map(m => ({ text: m, options: { bullet: true } })), {
    x: 5.5, y: 2.3, w: 3.7, h: 2.4, fontSize: 14, color: PALETTE.metin, fontFace: FONT.govde,
  });
}

function layoutKartGrid(pptx, slide, data) {
  applyBackground(slide);
  slide.addText(data.baslik, {
    x: 0.6, y: 0.4, w: 8.8, h: 0.8,
    fontSize: 30, bold: true, color: PALETTE.dominant, fontFace: FONT.baslik,
  });
  const positions = [
    { x: 0.6, y: 1.5 }, { x: 5.1, y: 1.5 },
    { x: 0.6, y: 3.4 }, { x: 5.1, y: 3.4 },
  ];
  data.kartlar.forEach((kart, i) => {
    const p = positions[i];
    slide.addShape(pptx.ShapeType.roundRect, {
      x: p.x, y: p.y, w: 4.3, h: 1.7,
      fill: { color: "FFFFFF" }, line: { color: PALETTE.ikincil, width: 1 }, rectRadius: 0.05,
    });
    slide.addText(kart.baslik, {
      x: p.x + 0.2, y: p.y + 0.15, w: 3.9, h: 0.5,
      fontSize: 16, bold: true, color: PALETTE.dominant, fontFace: FONT.baslik,
    });
    slide.addText(kart.metin, {
      x: p.x + 0.2, y: p.y + 0.7, w: 3.9, h: 0.9,
      fontSize: 12, color: PALETTE.metin, fontFace: FONT.govde,
    });
  });
}

function layoutGrafik(pptx, slide, data) {
  applyBackground(slide);
  slide.addText(data.baslik, {
    x: 0.6, y: 0.4, w: 8.8, h: 0.8,
    fontSize: 30, bold: true, color: PALETTE.dominant, fontFace: FONT.baslik,
  });
  const chartType = pptx.ChartType[data.grafikTipi.toLowerCase()] || pptx.ChartType.bar;
  slide.addChart(chartType, data.veri, {
    x: 0.6, y: 1.5, w: 8.8, h: 3.5,
    chartColors: [PALETTE.aksan, PALETTE.ikincil, PALETTE.dominant],
    showTitle: false,
    catAxisLabelFontSize: 11,
    valAxisLabelFontSize: 11,
    showLegend: data.veri.length > 1,
  });
}

function layoutAlinti(pptx, slide, data) {
  applyBackground(slide);
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.6, y: 1.8, w: 0.08, h: 1.8, fill: { color: PALETTE.aksan }, line: { color: PALETTE.aksan },
  });
  slide.addText(data.alinti, {
    x: 1.0, y: 1.5, w: 8.0, h: 2.0,
    fontSize: 28, italic: true, color: PALETTE.dominant, fontFace: FONT.baslik,
  });
  slide.addText(data.yazar, {
    x: 1.0, y: 3.7, w: 8.0, h: 0.5,
    fontSize: 14, color: PALETTE.metinSoluk, fontFace: FONT.govde,
  });
}

function layoutKapanis(pptx, slide, data) {
  applyBackground(slide);
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625, fill: { color: PALETTE.dominant }, line: { color: PALETTE.dominant },
  });
  slide.addText(data.baslik, {
    x: 0.6, y: 2.0, w: 8.8, h: 1.5,
    fontSize: 40, bold: true, color: "FFFFFF", fontFace: FONT.baslik, align: "center",
  });
  if (data.altBaslik) {
    slide.addText(data.altBaslik, {
      x: 0.6, y: 3.6, w: 8.8, h: 0.8,
      fontSize: 18, color: PALETTE.ikincil, fontFace: FONT.govde, align: "center", italic: true,
    });
  }
}

const LAYOUT_REGISTRY = {
  kapak: layoutKapak,
  buyuk_sayi: layoutBuyukSayi,
  iki_sutun: layoutIkiSutun,
  kart_grid: layoutKartGrid,
  grafik: layoutGrafik,
  alinti: layoutAlinti,
  kapanis: layoutKapanis,
};

// ============================================================
// ANA URETIM
// ============================================================

function build() {
  const pptx = new PptxGenJS();
  pptx.layout = CONFIG.layout;
  pptx.title = CONFIG.title;
  pptx.author = CONFIG.author;
  pptx.subject = CONFIG.subject;

  const total = SLIDES.length;

  SLIDES.forEach((data) => {
    const slide = pptx.addSlide();
    const layoutFn = LAYOUT_REGISTRY[data.layout];
    if (!layoutFn) {
      throw new Error(`Bilinmeyen layout: ${data.layout} (slayt ${data.index})`);
    }
    layoutFn(pptx, slide, data);
    if (data.layout !== "kapak" && data.layout !== "kapanis") {
      addFooter(slide, data.index, total);
    }
    if (data.konusmaciNotu) {
      slide.addNotes(data.konusmaciNotu);
    }
  });

  pptx.writeFile({ fileName: CONFIG.fileName }).then((path) => {
    console.log(`Uretildi: ${path}`);
  });
}

build();
