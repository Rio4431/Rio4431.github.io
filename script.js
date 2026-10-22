const LANGUAGE_KEY = 'moriomics_portfolio_language';

const I18N = {
  ja: {
    navTools: 'Tools',
    navDataAnalysis: 'Data Analysis',
    navCaseStudies: 'Case Studies',
    navAbout: 'About',
    eyebrow: 'PORTFOLIO',
    heroTitle: 'プロジェクト',
    heroLead: 'ツール開発やデータ分析の実績を掲載しています。',
    viewProjects: 'プロジェクトを見る',
    toolsKicker: 'Portfolio',
    toolsTitle: 'Tools',
    dataAnalysisPlaceholder: '分析事例は後日追加予定です。',
    senescenceType: 'Transcriptome analysis',
    senescenceTitle: 'Cellular Senescence Transcriptome Analysis',
    senescenceDescription: 'ヒト皮膚線維芽細胞のNormal・Senescence・Treatment条件を比較し、老化に伴う発現変化とTreatmentによるNormal方向への変化を探索。',
    senescenceObjective: '老化関連遺伝子とTreatmentによる回復候補を探索。',
    senescenceData: 'Private microarray expression dataset',
    senescenceAnalysis: 'QC → 2-fold変動遺伝子抽出 → Normal方向への回復評価 → GO解析 → 候補遺伝子整理',
    senescenceSummary: '24,351 probe setsのマイクロアレイデータから、細胞老化に伴い2倍以上変化した718遺伝子を抽出。TreatmentによるNormal方向への発現変化を評価し、181遺伝子を回復候補、うち51遺伝子を強いTreatment応答候補として整理。',
    senescenceLimitations: '各条件1サンプル（n=1）の探索的解析であり、遺伝子ごとの統計的有意差は評価していません。発現量のNormal方向への変化は生物学的機能の回復を証明しません。',
    senescenceReproducibility: '解析コードと依存関係はGitHubで公開。元のマイクロアレイデータは非公開のため、完全な第三者再現にはデータへのアクセス権が必要です。',
    skinAgingType: 'Gene expression analysis',
    skinAgingTitle: 'GEO Age-Associated Gene Expression Analysis',
    skinAgingDescription: '公開NCBI GEOのマイクロアレイ・bulk RNA-seqデータを用いて、年齢と特定遺伝子の発現量の関連を探索するPython Notebook。',
    skinAgingObjective: '任意のNCBI Gene IDを指定し、加齢と発現量の関連を探索。',
    skinAgingAnalysis: 'GSE・Gene ID指定 → 発現量と年齢情報の取得 → 年齢との関連・群間差の解析 → CSV・グラフ出力',
    skinAgingSummary: 'GSEごとのメタデータや発現量の尺度を確認しながら使用する探索的解析Notebook。',
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
    heroTitle: 'Projects',
    heroLead: 'Selected projects in software development and data analysis.',
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
    senescenceSummary: 'From 24,351 microarray probe sets, 718 genes showing at least a two-fold senescence-associated expression change were identified. Treatment-associated shifts toward the Normal expression state were evaluated, yielding 181 recovery candidates, including 51 strong Treatment-response candidates.',
    senescenceLimitations: 'This is an exploratory analysis with one sample per condition (n=1); gene-level statistical significance was not evaluated. Shifts toward Normal expression do not establish functional recovery.',
    senescenceReproducibility: 'Code and dependencies are available on GitHub. The source microarray dataset is private, so full independent reproduction requires authorized access.',
    skinAgingType: 'Gene expression analysis',
    skinAgingTitle: 'GEO Age-Associated Gene Expression Analysis',
    skinAgingDescription: 'A Python notebook for exploring age-associated gene expression in public NCBI GEO microarray and bulk RNA-seq datasets.',
    skinAgingObjective: 'Explore age-related expression patterns for a selected NCBI Gene ID.',
    skinAgingAnalysis: 'Select GSE and Gene ID → extract expression and age metadata → analyze age associations and group differences → export CSV and plots',
    skinAgingSummary: 'Exploratory notebook requiring dataset-specific checks of sample metadata and expression units.',
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

    article.append(topline, title, description, tech);
    if (project.details?.[language]) {
      const details = document.createElement('dl');
      details.className = 'analysis-details project-details';
      project.details[language].forEach(([label, value]) => {
        const item = document.createElement('div');
        const term = document.createElement('dt');
        term.textContent = label;
        const definition = document.createElement('dd');
        definition.textContent = value;
        item.append(term, definition);
        details.appendChild(item);
      });
      article.appendChild(details);
    }
    article.appendChild(links);
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
  document.title = 'moriomics | Portfolio';
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
