window.PORTFOLIO_PROJECTS = [
  {
    id: "openalex-literature-search",
    visible: true,
    featured: true,
    wide: false,
    title: "OpenAlex Literature Search",
    type: {
      ja: "Research tool",
      en: "Research tool"
    },
    description: {
      ja: "研究テーマに関連する文献をOpenAlexから検索し、被引用数、出版年、Open Access、撤回状態、抄録などを確認しながら候補論文を探索するWebアプリです。",
      en: "A literature-discovery web app that searches OpenAlex and helps review candidate papers using citation counts, publication year, Open Access status, retraction status, and abstracts."
    },
    technologies: ["HTML", "CSS", "JavaScript", "OpenAlex API", "localStorage"],
    webApp: "https://rio4431.github.io/openalex-literature-search/",
    github: "https://github.com/Rio4431/openalex-literature-search"
  },
  {
    id: "mol-calculator",
    visible: true,
    featured: false,
    wide: false,
    title: "Molarity Calculator",
    type: {
      ja: "Laboratory tool",
      en: "Laboratory tool"
    },
    description: {
      ja: "CAS番号からPubChemの化学物質情報を確認し、モル濃度から必要秤量値、または秤量値からモル濃度を計算する実験支援Webアプリです。",
      en: "A laboratory calculation web app that looks up compound information from PubChem by CAS Registry Number and converts between molar concentration and required reagent mass."
    },
    technologies: ["HTML", "CSS", "JavaScript", "PubChem PUG REST API"],
    webApp: "https://rio4431.github.io/mol-calculator/",
    github: "https://github.com/Rio4431/mol-calculator"
  },
  {
    id: "pdf-toolkit",
    visible: true,
    featured: false,
    wide: false,
    title: "PDF Toolkit",
    type: {
      ja: "Document tool",
      en: "Document tool"
    },
    description: {
      ja: "JPEG→PDF、PDFクロップ、OCR、PDF分割の4機能を、共通ナビゲーションと日本語/英語切り替えでまとめたブラウザベースのPDFツール集です。",
      en: "A browser-based PDF utility suite combining JPEG-to-PDF conversion, PDF cropping, OCR, and PDF splitting under shared navigation and bilingual UI."
    },
    technologies: ["HTML", "CSS", "JavaScript", "PDF.js", "pdf-lib", "Tesseract.js", "JSZip"],
    webApp: "https://rio4431.github.io/pdf-toolkit/",
    github: "https://github.com/Rio4431/pdf-toolkit"
  },
  {
    id: "image-resizer",
    visible: true,
    featured: false,
    wide: false,
    title: "Image Resizer",
    type: {
      ja: "Image tool",
      en: "Image tool"
    },
    description: {
      ja: "複数画像のリサイズ、写真プリセット、PNG/JPEG出力、ZIP保存に対応したシンプルなブラウザベースの画像リサイズツールです。",
      en: "A lightweight browser-based image resizer supporting multiple images, photo presets, PNG/JPEG output, and ZIP download."
    },
    technologies: ["HTML", "CSS", "JavaScript", "Browser APIs"],
    webApp: "https://rio4431.github.io/image-resizer/",
    github: "https://github.com/Rio4431/image-resizer"
  },
  {
    id: "trinary-image-app",
    visible: true,
    featured: false,
    wide: true,
    title: "Grayscale Trinarization Desktop App",
    type: {
      ja: "Desktop application",
      en: "Desktop application"
    },
    description: {
      ja: "画像を黒・グレー・白の3クラスへ分類するPython/Tkinterデスクトップアプリです。2しきい値版Otsu法、3値ノイズ除去・モルフォロジー、バッチ処理、CSV/Excel/ZIP出力に対応します。",
      en: "A Python/Tkinter desktop application that classifies grayscale images into black, gray, and white classes, with two-threshold Otsu, trinary denoising and morphology, batch processing, and CSV/Excel/ZIP export."
    },
    technologies: ["Python", "Tkinter", "NumPy", "Pillow", "openpyxl", "PyInstaller"],
    webApp: null,
    github: "https://github.com/Rio4431/trinary-image-app",
    note: {
      ja: "デスクトップアプリ — ブラウザデモなし",
      en: "Desktop application — no browser demo"
    }
  }
];
