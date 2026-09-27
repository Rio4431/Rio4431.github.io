const LANGUAGE_KEY = 'rio4431_portfolio_language';

const I18N = {
  ja: {
    navTools: 'Tools',
    navDataAnalysis: 'Data Analysis',
    navCaseStudies: 'Case Studies',
    navAbout: 'About',
    eyebrow: 'PORTFOLIO',
    heroTitle: '制作したツール',
    heroLead: '画像処理、文献探索、PDF処理、実験計算などのツールを掲載しています。',
    viewProjects: '作品を見る',
    toolsKicker: 'Portfolio',
    toolsTitle: 'Tools',
    dataAnalysisPlaceholder: '分析事例は後日追加予定です。',
    senescenceType: 'Transcriptome analysis',
    senescenceTitle: 'Cellular Senescence Transcriptome Analysis',
    senescenceDescription: 'ヒト皮膚線維芽細胞のNormal・Senescence・Treatment条件を比較し、老化に伴う発現変化とTreatmentによるNormal方向への変化を探索。',
    senescenceObjective: '老化関連遺伝子とTreatmentによる回復候補を探索。',
    senescenceData: 'Private microarray expression dataset',
    senescenceAnalysis: 'QC → 2-fold変動遺伝子抽出 → Normal方向への回復評価 → GO解析 → 候補遺伝子整理',
    senescenceSummary: '718遺伝子から、Normal方向へ変化した181遺伝子を抽出し、51遺伝子の強いTreatment応答サブグループを整理。',
    caseStudiesPlaceholder: 'ケーススタディは後日追加予定です。',
    webApp: 'Web App',
    aboutKicker: 'About this portfolio',
    aboutTitle: 'このポートフォリオについて',
    aboutText1: 'このページはGitHubの全Publicリポジトリ一覧ではなく、ポートフォリオとして選んだプロジェクトを紹介しています。',
    aboutText2: '各作品では、概要、使用技術、実際に動くWebアプリ、ソースコードへのリンクを確認できます。'
  },
  en: {
    navTools: 'Tools',
    navDataAnalysis: 'Data Analysis',
    navCaseStudies: 'Case Studies',
    navAbout: 'About',
    eyebrow: 'PORTFOLIO',
    heroTitle: 'Software Projects',
    heroLead: 'Tools for image processing, literature discovery, PDF workflows, laboratory calculations, and related tasks.',
    viewProjects: 'View projects',
    toolsKicker: 'Portfolio',
    toolsTitle: 'Tools',
    dataAnalysisPlaceholder: 'Data analysis examples will be added later.',
    senescenceType: 'Transcriptome analysis',
    senescenceTitle: 'Cellular Senescence Transcriptome Analysis',
    senescenceDescription: 'Exploratory comparison of Normal, Senescence, and Treatment conditions in human dermal fibroblasts to identify senescence-associated expression changes and shifts toward the Normal state after Treatment.',
    senescenceObjective: 'Identify senescence-associated genes and Treatment recovery candidates.',
    senescenceData: 'Private microarray expression dataset',
    senescenceAnalysis: 'QC → two-fold change filtering → recovery toward Normal → GO analysis → candidate prioritization',
    senescenceSummary: 'From 718 senescence-associated genes, 181 genes moving toward the Normal range were identified, including a 51-gene strong Treatment-response subgroup.',
    caseStudiesPlaceholder: 'Case studies will be added later.',
    webApp: 'Web App',
    aboutKicker: 'About this portfolio',
    aboutTitle: 'About this portfolio',
    aboutText1: 'This page presents selected projects as a portfolio rather than listing every public GitHub repository.',
    aboutText2: 'Each project includes a summary, technologies used, a live web application when available, and a link to the source code.'
  }
};

let language = localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'ja';

function createExternalLink(label, href, muted = false) {
  const link = document.createElement('a');
  link.className = `text-link${muted ? ' muted' : ''}`;
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  const labelSpan = document.createElement('span');
  labelSpan.textContent = label;
  const arrow = document.createElement('span');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = '↗';

  link.append(labelSpan, arrow);
  return link;
}

function renderProjects() {
  const grid = document.getElementById('projectGrid');
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS)
    ? window.PORTFOLIO_PROJECTS.filter((project) => project.visible)
    : [];

  grid.replaceChildren();

  projects.forEach((project, index) => {
    const article = document.createElement('article');
    article.className = 'project-card';
    if (project.featured) article.classList.add('featured');
    if (project.wide) article.classList.add('wide-card');

    const topline = document.createElement('div');
    topline.className = 'project-topline';

    const type = document.createElement('span');
    type.className = 'project-type';
    type.textContent = project.type?.[language] || project.type?.en || '';

    const number = document.createElement('span');
    number.className = 'project-number';
    number.textContent = String(index + 1).padStart(2, '0');

    topline.append(type, number);

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description?.[language] || project.description?.en || '';

    const tech = document.createElement('div');
    tech.className = 'tech';
    tech.setAttribute('aria-label', 'Technologies');
    (project.technologies || []).forEach((name) => {
      const chip = document.createElement('span');
      chip.textContent = name;
      tech.appendChild(chip);
    });

    const links = document.createElement('div');
    links.className = 'project-links';

    if (project.webApp) {
      links.appendChild(createExternalLink(I18N[language].webApp, project.webApp));
    } else if (project.note) {
      const note = document.createElement('span');
      note.className = 'desktop-note';
      note.textContent = project.note[language] || project.note.en || '';
      links.appendChild(note);
    }

    if (project.github) {
      links.appendChild(createExternalLink('GitHub', project.github, true));
    }

    article.append(topline, title, description, tech, links);
    grid.appendChild(article);
  });
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = I18N[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.getElementById('langJa').classList.toggle('active', language === 'ja');
  document.getElementById('langEn').classList.toggle('active', language === 'en');
  document.title = 'Rio4431 | Portfolio';
  renderProjects();
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
