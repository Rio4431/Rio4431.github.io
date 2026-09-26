const LANGUAGE_KEY = 'rio4431_portfolio_language';

const I18N = {
  ja: {
    navProjects: 'Projects',
    navAbout: 'About',
    eyebrow: 'Selected software projects',
    heroTitle: '研究・実務の小さな課題を、使えるツールに。',
    heroLead: '画像処理、文献探索、PDF処理、実験計算など、日常の作業を簡潔にするために制作したツールから、転職用に選んだ作品を掲載しています。',
    viewProjects: '作品を見る',
    projectsKicker: 'Portfolio',
    projectsTitle: 'Selected Projects',
    projectsLead: 'Publicリポジトリの全件ではなく、用途や実装内容を説明しやすい作品だけを掲載しています。',
    typeResearch: 'Research tool',
    typeLab: 'Laboratory tool',
    typeDocument: 'Document tool',
    typeImage: 'Image tool',
    typeDesktop: 'Desktop application',
    openalexDesc: '研究テーマに関連する文献をOpenAlexから検索し、被引用数、出版年、Open Access、撤回状態、抄録などを確認しながら候補論文を探索するWebアプリです。',
    molDesc: 'CAS番号からPubChemの化学物質情報を確認し、モル濃度から必要秤量値、または秤量値からモル濃度を計算する実験支援Webアプリです。',
    pdfDesc: 'JPEG→PDF、PDFクロップ、OCR、PDF分割の4機能を、共通ナビゲーションと日本語/英語切り替えでまとめたブラウザベースのPDFツール集です。',
    resizeDesc: '複数画像のリサイズ、写真プリセット、PNG/JPEG出力、ZIP保存に対応したシンプルなブラウザベースの画像リサイズツールです。',
    trinaryDesc: '画像を黒・グレー・白の3クラスへ分類するPython/Tkinterデスクトップアプリです。2しきい値版Otsu法、3値ノイズ除去・モルフォロジー、バッチ処理、CSV/Excel/ZIP出力に対応します。',
    webApp: 'Web App',
    desktopNote: 'デスクトップアプリ — ブラウザデモなし',
    aboutKicker: 'About this portfolio',
    aboutTitle: '公開リポジトリとは分けて、見せたい作品だけを掲載。',
    aboutText: 'このページはGitHubの全Publicリポジトリ一覧ではなく、ポートフォリオとして選んだプロジェクトだけを紹介するための入口です。各作品では、概要、使用技術、実際に動くWebアプリ、ソースコードへのリンクを確認できます。'
  },
  en: {
    navProjects: 'Projects',
    navAbout: 'About',
    eyebrow: 'Selected software projects',
    heroTitle: 'Turning small research and workflow problems into usable tools.',
    heroLead: 'A curated portfolio of tools I built to simplify image processing, literature discovery, PDF workflows, laboratory calculations, and other everyday tasks.',
    viewProjects: 'View projects',
    projectsKicker: 'Portfolio',
    projectsTitle: 'Selected Projects',
    projectsLead: 'This page is intentionally curated. It presents selected projects rather than every public repository on my GitHub account.',
    typeResearch: 'Research tool',
    typeLab: 'Laboratory tool',
    typeDocument: 'Document tool',
    typeImage: 'Image tool',
    typeDesktop: 'Desktop application',
    openalexDesc: 'A literature-discovery web app that searches OpenAlex and helps review candidate papers using citation counts, publication year, Open Access status, retraction status, and abstracts.',
    molDesc: 'A laboratory calculation web app that looks up compound information from PubChem by CAS Registry Number and converts between molar concentration and required reagent mass.',
    pdfDesc: 'A browser-based PDF utility suite combining JPEG-to-PDF conversion, PDF cropping, OCR, and PDF splitting under shared navigation and bilingual UI.',
    resizeDesc: 'A lightweight browser-based image resizer supporting multiple images, photo presets, PNG/JPEG output, and ZIP download.',
    trinaryDesc: 'A Python/Tkinter desktop application that classifies grayscale images into black, gray, and white classes, with two-threshold Otsu, trinary denoising and morphology, batch processing, and CSV/Excel/ZIP export.',
    webApp: 'Web App',
    desktopNote: 'Desktop application — no browser demo',
    aboutKicker: 'About this portfolio',
    aboutTitle: 'A curated portfolio, separate from the full list of public repositories.',
    aboutText: 'This site is a focused entry point for selected portfolio projects rather than an automatic listing of every public GitHub repository. Each project includes a summary, technologies used, a live web-app link when available, and a source-code link.'
  }
};

let language = localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'ja';

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = I18N[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.getElementById('langJa').classList.toggle('active', language === 'ja');
  document.getElementById('langEn').classList.toggle('active', language === 'en');
  document.title = 'Rio4431 | Portfolio';
}

document.getElementById('langJa').addEventListener('click', () => {
  language = 'ja';
  localStorage.setItem(LANGUAGE_KEY, language);
  applyLanguage();
});

document.getElementById('langEn').addEventListener('click', () => {
  language = 'en';
  localStorage.setItem(LANGUAGE_KEY, language);
  applyLanguage();
});

document.getElementById('year').textContent = String(new Date().getFullYear());
applyLanguage();