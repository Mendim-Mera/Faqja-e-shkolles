/* =============================================
   ADMIN PANEL — Said Najdeni
   Paneli i administrimit të faqes
   ============================================= */

const STORAGE_KEY = 'saidnajdeni_data';

// ── Struktura fillestare e të dhënave ──
function getDefaultData() {
  return {
    hero: {
      eyebrow: 'Gjimnaz Publik · Peshkopi · Shqipëri',
      title: 'Forma<br>mendjet<br><em>e nesërmes.</em>',
      desc: 'Gjimnazi "Said Najdeni" — institucion arsimor me traditë mbi 60 vjeçare. Ofrojmë arsim cilësor, mjedis bashkëkohor dhe mundësi të pakufizuara për çdo nxënës.',
      stat1num: '1200+', stat1label: 'Nxënës aktive',
      stat2num: '86',    stat2label: 'Mësues specialist',
      stat3num: '98%',   stat3label: 'Kalueshmëria Maturës',
      year: '1962'
    },
    lajmet: [
      { cat: 'Arritje Akademike', title: 'Nxënësit tanë triumfojnë në Olimpiadën Kombëtare të Matematikës 2025', date: '15 Prill 2025' },
      { cat: 'Aktivitet Kulturor', title: 'Festivali i Artit dhe Kulturës — Ekspozitë e nxënësve të klasave 11–12', date: '8 Prill 2025' },
      { cat: 'Bashkëpunim', title: 'Marrëveshje partneriteti me Universitetin e Tiranës për praktika shkencore', date: '1 Prill 2025' }
    ],
    rreth: {
      vjet: '63', drejtim: '4',
      p1: 'Gjimnazi "Said Najdeni" është një ndër shkollat me histori më të pasur në Shqipëri. Themeluar në vitin 1962, ka formuar breza të tëra intelektualësh, shkencëtarësh dhe artistësh shqiptarë.',
      p2: 'Me mbi 1200 nxënës dhe 86 mësues të specializuar, ne ofrojmë një mjedis mësimor bashkëkohor ku çdo nxënës zhvillon potencialin e tij të plotë.'
    },
    drejtimet: [
      { num: '01', title: 'Shkenca Natyrore', desc: 'Fizikë, Kimi, Biologji të avancuar. Laboratorë modernë dhe projekte shkencore ndërkombëtare.' },
      { num: '02', title: 'Shoqëror-Humanist', desc: 'Histori, Gjeografi, Sociologji. Formim kritik dhe kulturë të gjerë humaniste.' },
      { num: '03', title: 'Teknologji & Informatikë', desc: 'Programim, rrjete kompjuterike dhe dizajn dixhital. Partneritet me kompanitë tech.' },
      { num: '04', title: 'Ekonomi & Biznes', desc: 'Ekonomi, Kontabilitet dhe Menaxhim. Simullime biznesi dhe vizita studimore.' },
      { num: '05', title: 'Gjuhë të Huaja', desc: 'Anglisht, Frëngjisht, Gjermanisht. Çertifikime ndërkombëtare dhe shkëmbime kulturore.' },
      { num: '06', title: 'Art & Muzikë', desc: 'Arte pamore, muzikë dhe teatër. Festivale vjetore dhe ekspozita studentore.' }
    ],
    mesuesit: [
      { initials: 'AK', name: 'Ardiana Kola',   lenda: 'Matematikë',      exp: '18 vjet eksperiencë', img: '' },
      { initials: 'BS', name: 'Besim Shehu',     lenda: 'Fizikë',          exp: '22 vjet eksperiencë', img: '' },
      { initials: 'EH', name: 'Elida Hoxha',     lenda: 'Informatikë',     exp: '11 vjet eksperiencë', img: '' },
      { initials: 'MN', name: 'Mentor Ndoci',    lenda: 'Histori',         exp: '15 vjet eksperiencë', img: '' },
      { initials: 'LB', name: 'Liria Brahimi',   lenda: 'Gjuhë Angleze',   exp: '9 vjet eksperiencë',  img: '' },
      { initials: 'FK', name: 'Fatos Kelmendi',  lenda: 'Kimi',            exp: '20 vjet eksperiencë', img: '' },
      { initials: 'DM', name: 'Diana Muka',      lenda: 'Biologji',        exp: '14 vjet eksperiencë', img: '' },
      { initials: 'RZ', name: 'Rezart Zeka',     lenda: 'Ekonomi',         exp: '12 vjet eksperiencë', img: '' }
    ],
    galeria: [
      { label: 'Laboratori i Shkencave', color: '#1a3a2e', img: '' },
      { label: 'Biblioteka',             color: '#0d1b2a', img: '' },
      { label: 'Salla e Arteve',         color: '#2a1a0d', img: '' },
      { label: 'Klasa Informatikës',     color: '#1a1a2e', img: '' },
      { label: 'Festivali Kulturor',     color: '#1a2a1a', img: '' }
    ],
    kontakti: {
      adresa: 'Rruga "Kongresi i Dibrës"\nPeshkopi, Shqipëri',
      tel1: '+355 4 222 3456', tel2: '+355 4 222 3457',
      email1: 'snajdeni@yahoo.com', email2: 'shefkicorja@gmail.com',
      orari: 'E Hënë — E Premte\n08:00 — 16:00'
    },
    heroImg: {
      img: '',
      label: 'Gjimnazi Said Najdeni'
    },
    slider: {
      title: 'Fotografi nga Shkolla',
      sub: 'Momente dhe kujtime nga aktivitetet e Gjimnazit "Said Najdeni".',
      slides: []
    },
    informacion: {
      regjistrimi: {
        title: 'Regjistrimi',
        content: 'Regjistrimi për vitin e ri shkollor fillon në muajin Qershor.\n\nDokumentet e nevojshme:\n• Çertifikata e lindjes\n• Dëftesa e shkollës 9-vjeçare\n• Dokument identifikimi i prindit\n• 2 fotografi\n\nPër çdo pyetje, kontaktoni sekretarinë e shkollës.'
      },
      orari_mesor: {
        title: 'Orari Mësimor',
        content: 'Mësimi zhvillohet prej të hënës deri të premten.\n\nTurneu i parë: 08:00 — 13:00\nTurneu i dytë: 13:00 — 18:00\n\nOra mësimore zgjat 45 minuta, me pushim 10 minuta midis orëve.\n\nOrari i detajuar i çdo klase është i disponueshëm te seksioni "Orari" në faqen kryesore.'
      },
      rregullorja: {
        title: 'Rregullorja e Shkollës',
        content: 'Rregullorja e brendshme e Gjimnazit "Said Najdeni" përcakton të drejtat dhe detyrimet e nxënësve.\n\nDetyrimet kryesore:\n• Ndjekja e rregullt e mësimit\n• Sjellje e mirë brenda dhe jashtë shkollës\n• Respektimi i mësuesve dhe stafit\n• Ruajtja e pronës shkollore\n\nRregullorja e plotë është e disponueshme në sekretari.'
      },
      rezultatet: {
        title: 'Rezultatet Akademike',
        content: 'Rezultatet e nxënësve publikohen në fund të çdo tremujori.\n\nVlerësimi bëhet me shkallë 4-10.\n\nCalimi i vitit shkollor kërkon notë mesatare mbi 4.5 në çdo lëndë.\n\nNxënësit me notë mesatare mbi 9.0 nderohen me "Mirënjohje të Drejtorisë" në fund të vitit shkollor.\n\nPër informacion mbi notat, kontaktoni mësuesin kujdestar.'
      },
      bursat: {
        title: 'Bursat dhe Nxitjet',
        content: 'Gjimnazi "Said Najdeni" ofron nxitje financiare për nxënësit e shkëlqyer.\n\nBursa e Ekselencës:\nNxënësit me mesatare mbi 9.5 përfitojnë bursë studimi vjetore.\n\nÇmimi i Drejtorisë:\nDhurohet në fund të vitit shkollor për arritjet akademike dhe kulturore.\n\nBursa Ndërkombëtare:\nShoqëria Shqiptaro-Amerikane ofron bursa për nxënësit e kl. 12.\n\nPër aplikim dhe kritere, drejtohuni te zyra e drejtorisë.'
      }
    }
  };
}

// ── Storage helpers ──
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultData();
    return Object.assign({}, getDefaultData(), JSON.parse(raw));
  } catch(e) { return getDefaultData(); }
}
function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ── Apliko të dhënat në DOM ──
function applyData(data) {
  // HERO
  const h = data.hero;
  q('.hero-eyebrow').innerHTML = h.eyebrow;
  q('.hero-title').innerHTML   = h.title;
  q('.hero-desc').textContent  = h.desc;
  const stats = qa('.stat-num');
  const labels = qa('.stat-label');
  if(stats[0]) { stats[0].textContent = h.stat1num; labels[0].textContent = h.stat1label; }
  if(stats[1]) { stats[1].textContent = h.stat2num; labels[1].textContent = h.stat2label; }
  if(stats[2]) { stats[2].textContent = h.stat3num; labels[2].textContent = h.stat3label; }
  const yr = q('.hero-badge-year');
  if(yr) yr.textContent = h.year;

  // RRETH
  const r = data.rreth;
  const bigNum = q('.rreth-inner .big');
  const accNum = q('.rreth-box-accent .num');
  if(bigNum) bigNum.textContent = r.vjet;
  if(accNum) accNum.textContent = r.drejtim;
  const ps = qa('#rreth .rreth-content > p');
  if(ps[0]) ps[0].textContent = r.p1;
  if(ps[1]) ps[1].textContent = r.p2;

  // LAJMET
  const grid = q('.lajmet-grid');
  if(grid) {
    grid.innerHTML = data.lajmet.map((l, i) => `
      <div class="lajm-card">
        <div class="lajm-cat">${l.cat}</div>
        <div class="lajm-title">${l.title}</div>
        <div class="lajm-line"></div>
        <div class="lajm-date">${l.date}</div>
        <div class="lajm-num">0${i+1}</div>
      </div>`).join('');
    // re-observe
    reObserve(grid.querySelectorAll('.lajm-card'));
  }

  // DREJTIMET
  const dGrid = q('.drejtimet-grid');
  if(dGrid) {
    const icons = [
      `<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>`,
      `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`,
      `<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`,
      `<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`,
      `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
      `<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>`
    ];
    dGrid.innerHTML = data.drejtimet.map((d, i) => `
      <div class="drejtim-card">
        <div class="drejtim-icon"><svg viewBox="0 0 24 24">${icons[i] || icons[0]}</svg></div>
        <div class="drejtim-num">${d.num} / Drejtim</div>
        <div class="drejtim-title">${d.title}</div>
        <div class="drejtim-desc">${d.desc}</div>
      </div>`).join('');
    reObserve(dGrid.querySelectorAll('.drejtim-card'));
  }

  // MËSUESIT
  const mGrid = q('.mesuesit-grid');
  if(mGrid) {
    mGrid.innerHTML = data.mesuesit.map(m => `
      <div class="mesues-card">
        <div class="mesues-avatar">
          ${m.img
            ? `<img src="${m.img}" alt="${m.name}" style="width:100%;height:100%;object-fit:cover;">`
            : `<div class="mesues-initials">${m.initials}</div>`}
        </div>
        <div class="mesues-name">${m.name}</div>
        <div class="mesues-lenda">${m.lenda}</div>
        <div class="mesues-exp">${m.exp}</div>
      </div>`).join('');
    reObserve(mGrid.querySelectorAll('.mesues-card'));
  }

  // GALERIA
  const gGrid = q('.galeria-grid');
  const svgs = [
    `<svg width="200" height="400" viewBox="0 0 200 400"><circle cx="100" cy="200" r="120" stroke="#5dcaa5" stroke-width="1" fill="none" opacity="0.3"/><circle cx="100" cy="200" r="80" stroke="#5dcaa5" stroke-width="0.5" fill="none" opacity="0.2"/><line x1="0" y1="200" x2="200" y2="200" stroke="#5dcaa5" stroke-width="0.5" opacity="0.2"/><line x1="100" y1="0" x2="100" y2="400" stroke="#5dcaa5" stroke-width="0.5" opacity="0.2"/></svg>`,
    `<svg width="160" height="220" viewBox="0 0 160 220"><rect x="20" y="20" width="120" height="180" stroke="#c9a84c" stroke-width="1" fill="none" opacity="0.3"/><rect x="40" y="40" width="80" height="140" stroke="#c9a84c" stroke-width="0.5" fill="none" opacity="0.2"/></svg>`,
    `<svg width="160" height="220" viewBox="0 0 160 220"><polygon points="80,20 140,200 20,200" stroke="#ef9f27" stroke-width="1" fill="none" opacity="0.3"/></svg>`,
    `<svg width="160" height="220" viewBox="0 0 160 220"><circle cx="80" cy="110" r="60" stroke="#7f77dd" stroke-width="1" fill="none" opacity="0.3"/></svg>`,
    `<svg width="160" height="220" viewBox="0 0 160 220"><rect x="30" y="30" width="100" height="160" rx="4" stroke="#97c459" stroke-width="1" fill="none" opacity="0.3"/></svg>`
  ];
  if(gGrid) {
    gGrid.innerHTML = data.galeria.map((g, i) => `
      <div class="gal-item" style="background:${g.color}; ${g.img ? `background-image:url('${g.img}');background-size:cover;background-position:center;` : ''}">
        ${!g.img ? `<div class="gal-geo">${svgs[i] || svgs[0]}</div>` : ''}
        <div class="gal-inner"><span class="gal-label">${g.label}</span></div>
      </div>`).join('');
    const items = gGrid.querySelectorAll('.gal-item');
    if(items[0]) items[0].style.gridRow = '1 / 3';
    reObserve(items);
  }

  // KONTAKTI
  const k = data.kontakti;
  const citems = qa('.contact-item');
  if(citems[0]) citems[0].querySelector('p').innerHTML = k.adresa.replace(/\n/g,'<br>');
  if(citems[1]) citems[1].querySelector('p').innerHTML = `${k.tel1}<br>${k.tel2}`;
  if(citems[2]) citems[2].querySelector('p').innerHTML = `${k.email1}<br>${k.email2}`;
  if(citems[3]) citems[3].querySelector('p').innerHTML = k.orari.replace(/\n/g,'<br>');

  // HERO IMAGE
  applyHeroImage(data.heroImg || { img: '', label: '' });

  // SLIDER
  applySlider(data.slider || { title: '', sub: '', slides: [] });
}

// ── Apliko foton e hero ──
function applyHeroImage(heroImg) {
  const panel = q('#hero-right-panel');
  const overlay = q('#hero-img-overlay');
  const label = q('#hero-photo-label');
  if(!panel || !overlay) return;

  if(heroImg.img) {
    overlay.style.backgroundImage = `url('${heroImg.img}')`;
    overlay.classList.add('loaded');
    panel.classList.add('has-photo');
    if(label) {
      label.style.display = 'flex';
      label.childNodes[label.childNodes.length - 1].textContent = ' ' + (heroImg.label || 'Foto e Shkollës');
    }
  } else {
    overlay.style.backgroundImage = '';
    overlay.classList.remove('loaded');
    panel.classList.remove('has-photo');
    if(label) label.style.display = 'none';
  }
}

// ── Slider logic ──
let sliderIndex = 0;
let sliderTotal = 0;
let sliderAutoTimer = null;

function applySlider(sliderData) {
  const track = q('#slider-track');
  const dots  = q('#slider-dots');
  const counter = q('#slider-counter');
  const titleEl = q('#slider-title');
  const subEl   = q('#slider-sub');

  if(titleEl) titleEl.textContent = sliderData.title || 'Fotografi nga Shkolla';
  if(subEl)   subEl.textContent   = sliderData.sub   || '';

  const slides = sliderData.slides || [];
  sliderTotal = slides.length;
  sliderIndex = 0;

  if(!track) return;

  if(slides.length === 0) {
    track.innerHTML = `<div class="slide slide-placeholder">
      <div class="slide-placeholder-inner">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <p>Shto foto nga Paneli Admin → Slider</p>
      </div>
    </div>`;
    if(dots) dots.innerHTML = '';
    if(counter) counter.textContent = '';
    return;
  }

  track.innerHTML = slides.map((s, i) => `
    <div class="slide">
      <img src="${s.img}" alt="${s.caption || ''}" loading="${i === 0 ? 'eager' : 'lazy'}">
      ${s.caption ? `<div class="slide-caption">
        <div class="slide-caption-title">${s.caption}</div>
        ${s.sub ? `<div class="slide-caption-sub">${s.sub}</div>` : ''}
      </div>` : ''}
    </div>`).join('');

  if(dots) {
    dots.innerHTML = slides.map((_, i) =>
      `<button class="slider-dot ${i===0?'active':''}" onclick="goSlide(${i})"></button>`
    ).join('');
  }

  updateSliderUI();
  startSliderAuto();
}

function goSlide(idx) {
  const track = q('#slider-track');
  if(!track) return;
  sliderIndex = Math.max(0, Math.min(idx, sliderTotal - 1));
  track.style.transform = `translateX(-${sliderIndex * 100}%)`;
  updateSliderUI();
  resetSliderAuto();
}

function updateSliderUI() {
  const dots = qa('#slider-dots .slider-dot');
  dots.forEach((d, i) => d.classList.toggle('active', i === sliderIndex));
  const counter = q('#slider-counter');
  if(counter && sliderTotal > 0) counter.textContent = `${sliderIndex + 1} / ${sliderTotal}`;
  const prev = q('#slider-prev');
  const next = q('#slider-next');
  if(prev) prev.disabled = sliderTotal <= 1;
  if(next) next.disabled = sliderTotal <= 1;
}

function startSliderAuto() {
  clearInterval(sliderAutoTimer);
  if(sliderTotal <= 1) return;
  sliderAutoTimer = setInterval(() => {
    goSlide((sliderIndex + 1) % sliderTotal);
  }, 5000);
}

function resetSliderAuto() {
  startSliderAuto();
}

window.goSlide = goSlide;

document.addEventListener('DOMContentLoaded', () => {
  const prev = q('#slider-prev');
  const next = q('#slider-next');
  if(prev) prev.onclick = () => goSlide((sliderIndex - 1 + sliderTotal) % sliderTotal);
  if(next) next.onclick = () => goSlide((sliderIndex + 1) % sliderTotal);

  // Touch swipe support
  const wrapper = q('#slider-wrapper');
  if(wrapper) {
    let startX = 0;
    wrapper.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    wrapper.addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - startX;
      if(Math.abs(dx) > 50) goSlide(dx < 0 ? (sliderIndex+1)%sliderTotal : (sliderIndex-1+sliderTotal)%sliderTotal);
    }, { passive: true });
  }
});

// ── Helpers ──
function q(sel)  { return document.querySelector(sel); }
function qa(sel) { return document.querySelectorAll(sel); }
const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
function reObserve(els) {
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    scrollObserver.observe(el);
  });
}

// ── Ndërto Admin Panel HTML ──
function buildAdminPanel(data) {
  const panel = document.createElement('div');
  panel.id = 'admin-panel';
  panel.innerHTML = `
  <div id="admin-overlay" onclick="adminClose()"></div>
  <div id="admin-drawer">
    <div class="adm-header">
      <div class="adm-logo">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        Admin Panel
      </div>
      <div class="adm-header-right">
        <div class="adm-user-info">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span id="adm-user-badge">admin</span>
        </div>
        <button class="adm-logout-btn" onclick="adminLogout()" title="Dil nga paneli">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Dil
        </button>
        <button class="adm-close" onclick="adminClose()">✕</button>
      </div>
    </div>

    <div class="adm-tabs">
      <button class="adm-tab active" onclick="adminTab(this,'hero')">Hero</button>
      <button class="adm-tab" onclick="adminTab(this,'heroimg')">📷 Foto</button>
      <button class="adm-tab" onclick="adminTab(this,'lajmet')">Lajme</button>
      <button class="adm-tab" onclick="adminTab(this,'rreth')">Rreth</button>
      <button class="adm-tab" onclick="adminTab(this,'drejtimet')">Drejtim</button>
      <button class="adm-tab" onclick="adminTab(this,'mesuesit')">Mësues</button>
      <button class="adm-tab" onclick="adminTab(this,'slider')">🖼 Slider</button>
      <button class="adm-tab" onclick="adminTab(this,'galeria')">Galeria</button>
      <button class="adm-tab" onclick="adminTab(this,'kontakti')">Kontakt</button>
      <button class="adm-tab" onclick="adminTab(this,'informacion')">📋 Info</button>
    </div>

    <div class="adm-body">

      <!-- HERO -->
      <div class="adm-section active" id="adm-hero">
        <div class="adm-group"><label>Teksti sipër</label>
          <input id="h-eyebrow" value="${data.hero.eyebrow}"></div>
        <div class="adm-group"><label>Titulli kryesor (HTML lejohet)</label>
          <textarea id="h-title" rows="3">${data.hero.title}</textarea></div>
        <div class="adm-group"><label>Përshkrimi</label>
          <textarea id="h-desc" rows="3">${data.hero.desc}</textarea></div>
        <div class="adm-row">
          <div class="adm-group"><label>Stat 1 — Numri</label><input id="h-s1n" value="${data.hero.stat1num}"></div>
          <div class="adm-group"><label>Stat 1 — Etiketa</label><input id="h-s1l" value="${data.hero.stat1label}"></div>
        </div>
        <div class="adm-row">
          <div class="adm-group"><label>Stat 2 — Numri</label><input id="h-s2n" value="${data.hero.stat2num}"></div>
          <div class="adm-group"><label>Stat 2 — Etiketa</label><input id="h-s2l" value="${data.hero.stat2label}"></div>
        </div>
        <div class="adm-row">
          <div class="adm-group"><label>Stat 3 — Numri</label><input id="h-s3n" value="${data.hero.stat3num}"></div>
          <div class="adm-group"><label>Stat 3 — Etiketa</label><input id="h-s3l" value="${data.hero.stat3label}"></div>
        </div>
        <div class="adm-group"><label>Viti i themelimit</label><input id="h-year" value="${data.hero.year}"></div>
      </div>

      <!-- HERO IMAGE -->
      <div class="adm-section" id="adm-heroimg">
        <p class="adm-hint">Ngarko foton kryesore të shkollës. Formate të pranuara: JPG, PNG, WEBP, GIF. Imazhet kompresohen automatikisht.</p>
        <div class="adm-group"><label>Foto e Shkollës</label>
          <div class="adm-img-upload" id="heroimg-upload-area">
            ${(data.heroImg && data.heroImg.img)
              ? `<img class="adm-img-preview" id="heroimg-preview" src="${data.heroImg.img}" alt="">`
              : `<div class="adm-img-placeholder" id="heroimg-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span style="font-size:12px;margin-top:8px;color:rgba(247,243,236,0.3)">Asnjë foto e ngarkuar</span></div>`}
            <input type="file" id="heroimg-file" accept="image/jpeg,image/jpg,image/png,image/webp,image/gif,image/bmp,image/svg+xml" style="display:none" onchange="uploadHeroImg(this)">
            <div class="adm-img-actions">
              <button class="adm-img-btn" onclick="document.getElementById('heroimg-file').click()">📷 Ngarko Foto</button>
              <input id="heroimg-url" class="heroimg-url-inp" placeholder="ose ngjit URL..." value="${(data.heroImg && data.heroImg.img) || ''}" oninput="previewHeroImgUrl(this)">
            </div>
            ${(data.heroImg && data.heroImg.img) ? `<button class="adm-img-btn" onclick="clearHeroImg()" style="align-self:flex-start;margin-top:4px;color:rgba(255,107,107,0.8);">✕ Hiq Foton</button>` : ''}
          </div>
        </div>
        <div class="adm-group"><label>Etiketa e Fotos</label>
          <input id="heroimg-label" value="${(data.heroImg && data.heroImg.label) || 'Gjimnazi Said Najdeni'}"></div>
      </div>

      <!-- LAJMET -->
      <div class="adm-section" id="adm-lajmet">
        <div id="lajmet-list">
          ${data.lajmet.map((l,i) => lajmHTML(l,i)).join('')}
        </div>
        <button class="adm-add-btn" onclick="addLajm()">+ Shto Lajm të Ri</button>
      </div>

      <!-- RRETH -->
      <div class="adm-section" id="adm-rreth">
        <div class="adm-row">
          <div class="adm-group"><label>Vjet tradita</label><input id="r-vjet" value="${data.rreth.vjet}"></div>
          <div class="adm-group"><label>Numri i drejtimeve</label><input id="r-drejtim" value="${data.rreth.drejtim}"></div>
        </div>
        <div class="adm-group"><label>Paragrafi 1</label><textarea id="r-p1" rows="4">${data.rreth.p1}</textarea></div>
        <div class="adm-group"><label>Paragrafi 2</label><textarea id="r-p2" rows="4">${data.rreth.p2}</textarea></div>
      </div>

      <!-- DREJTIMET -->
      <div class="adm-section" id="adm-drejtimet">
        <div id="drejtimet-list">
          ${data.drejtimet.map((d,i) => drejtimHTML(d,i)).join('')}
        </div>
      </div>

      <!-- MËSUESIT -->
      <div class="adm-section" id="adm-mesuesit">
        <div id="mesuesit-list">
          ${data.mesuesit.map((m,i) => mesuesHTML(m,i)).join('')}
        </div>
        <button class="adm-add-btn" onclick="addMesues()">+ Shto Mësues të Ri</button>
      </div>

      <!-- GALERIA -->
      <div class="adm-section" id="adm-galeria">
        <p class="adm-hint">Ngarko foto reale ose ndrysho etiketat. Formate: JPG, PNG, WEBP, GIF. Imazhet kompresohen automatikisht.</p>
        <div id="galeria-list">
          ${data.galeria.map((g,i) => galeriaHTML(g,i)).join('')}
        </div>
        <button class="adm-add-btn" onclick="addGaleria()">+ Shto Artikull Galerie</button>
      </div>

      <!-- SLIDER -->
      <div class="adm-section" id="adm-slider">
        <div class="adm-group"><label>Titulli i Seksionit</label>
          <input id="sl-title" value="${(data.slider && data.slider.title) || 'Fotografi nga Shkolla'}"></div>
        <div class="adm-group"><label>Nëntitulli</label>
          <input id="sl-sub" value="${(data.slider && data.slider.sub) || 'Momente dhe kujtime nga aktivitetet e Gjimnazit &quot;Said Najdeni&quot;.'}"></div>
        <p class="adm-hint" style="margin-top:4px;">Shto foto për sliderin. Secila foto mund të ketë një titull dhe nëntitull opsional.</p>
        <div id="slider-list">
          ${((data.slider && data.slider.slides) || []).map((s, i) => sliderSlideHTML(s, i)).join('')}
        </div>
        <button class="adm-add-btn" onclick="addSlide()">+ Shto Foto në Slider</button>
      </div>

      <!-- KONTAKTI -->
      <div class="adm-section" id="adm-kontakti">
        <div class="adm-group"><label>Adresa</label><textarea id="k-adresa" rows="2">${data.kontakti.adresa}</textarea></div>
        <div class="adm-row">
          <div class="adm-group"><label>Telefon 1</label><input id="k-tel1" value="${data.kontakti.tel1}"></div>
          <div class="adm-group"><label>Telefon 2</label><input id="k-tel2" value="${data.kontakti.tel2}"></div>
        </div>
        <div class="adm-row">
          <div class="adm-group"><label>Email 1</label><input id="k-email1" value="${data.kontakti.email1}"></div>
          <div class="adm-group"><label>Email 2</label><input id="k-email2" value="${data.kontakti.email2}"></div>
        </div>
        <div class="adm-group"><label>Orari i sekretarisë</label><textarea id="k-orari" rows="2">${data.kontakti.orari}</textarea></div>
      </div>

      <!-- INFORMACION -->
      <div class="adm-section" id="adm-informacion">
        <p class="adm-info-note">Ndryshoni titullin dhe tekstin e çdo rubrike. Teksti mbështet rreshta të rinj (Enter).</p>
        ${['regjistrimi','orari_mesor','rregullorja','rezultatet','bursat'].map(key => {
          const item = (data.informacion && data.informacion[key]) || { title: key, content: '' };
          const label = { regjistrimi:'Regjistrimi', orari_mesor:'Orari Mësimor', rregullorja:'Rregullorja', rezultatet:'Rezultatet', bursat:'Bursa' }[key];
          return `<div class="adm-info-block">
            <div class="adm-info-label">${label}</div>
            <div class="adm-group"><label>Titulli</label><input id="inf-${key}-title" value="${item.title}"></div>
            <div class="adm-group"><label>Përmbajtja</label><textarea id="inf-${key}-content" rows="6">${item.content}</textarea></div>
          </div>`;
        }).join('')}
      </div>

    </div><!-- end adm-body -->

    <div class="adm-footer">
      <button class="adm-reset" onclick="adminReset()">Rikthe Fillestaret</button>
      <button class="adm-save"  onclick="adminSave()">💾 Ruaj Ndryshimet</button>
    </div>
  </div>`;
  document.body.appendChild(panel);
}

function lajmHTML(l, i) {
  return `<div class="adm-card" data-i="${i}">
    <div class="adm-card-head">Lajmi ${i+1} <button class="adm-del" onclick="delLajm(${i})">✕</button></div>
    <div class="adm-group"><label>Kategoria</label><input class="lajm-cat" value="${l.cat}"></div>
    <div class="adm-group"><label>Titulli</label><textarea class="lajm-title" rows="2">${l.title}</textarea></div>
    <div class="adm-group"><label>Data</label><input class="lajm-date" value="${l.date}"></div>
  </div>`;
}

function sliderSlideHTML(s, i) {
  return `<div class="adm-card" data-i="${i}">
    <div class="adm-card-head">Foto ${i+1} <button class="adm-del" onclick="delSlide(${i})">✕</button></div>
    <div class="adm-group"><label>Foto (ngarko ose URL)</label>
      <div class="adm-img-upload">
        ${s.img
          ? `<img class="adm-img-preview" src="${s.img}" alt="">`
          : `<div class="adm-img-placeholder"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`}
        <input type="file" class="sl-img-file" accept="image/jpeg,image/jpg,image/png,image/webp,image/gif,image/bmp,image/svg+xml" onchange="uploadImg(this, ${i}, 'slider')" style="display:none">
        <div class="adm-img-actions">
          <button class="adm-img-btn" onclick="this.closest('.adm-card').querySelector('.sl-img-file').click()">📷 Ngarko foto</button>
          <input class="sl-img-url" placeholder="ose ngjit URL..." value="${s.img || ''}" oninput="previewImgUrl(this)">
        </div>
      </div>
    </div>
    <div class="adm-group"><label>Titulli i Fotos (opsional)</label>
      <input class="sl-caption" value="${s.caption || ''}"></div>
    <div class="adm-group"><label>Nëntitulli (opsional)</label>
      <input class="sl-sub" value="${s.sub || ''}"></div>
  </div>`;
}
function drejtimHTML(d, i) {
  return `<div class="adm-card">
    <div class="adm-card-head">Drejtimi ${i+1}</div>
    <div class="adm-group"><label>Titulli</label><input class="drejtim-title-inp" value="${d.title}"></div>
    <div class="adm-group"><label>Përshkrimi</label><textarea class="drejtim-desc-inp" rows="3">${d.desc}</textarea></div>
  </div>`;
}
function mesuesHTML(m, i) {
  return `<div class="adm-card" data-i="${i}">
    <div class="adm-card-head">Mësuesi ${i+1} <button class="adm-del" onclick="delMesues(${i})">✕</button></div>
    <div class="adm-row">
      <div class="adm-group"><label>Iniciale</label><input class="m-init" value="${m.initials}" maxlength="3"></div>
      <div class="adm-group"><label>Emri e Mbiemri</label><input class="m-name" value="${m.name}"></div>
    </div>
    <div class="adm-row">
      <div class="adm-group"><label>Lënda</label><input class="m-lenda" value="${m.lenda}"></div>
      <div class="adm-group"><label>Eksperienca</label><input class="m-exp" value="${m.exp}"></div>
    </div>
    <div class="adm-group"><label>Foto (ngarko ose URL)</label>
      <div class="adm-img-upload">
        ${m.img ? `<img class="adm-img-preview" src="${m.img}" alt="">` : `<div class="adm-img-placeholder"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`}
        <input type="file" class="m-img-file" accept="image/jpeg,image/jpg,image/png,image/webp,image/gif,image/bmp,image/svg+xml" onchange="uploadImg(this, ${i}, 'mesues')" style="display:none">
        <div class="adm-img-actions">
          <button class="adm-img-btn" onclick="this.closest('.adm-card').querySelector('.m-img-file').click()">📷 Ngarko foto</button>
          <input class="m-img-url" placeholder="ose ngjit URL..." value="${m.img}" oninput="previewImgUrl(this)">
        </div>
      </div>
    </div>
  </div>`;
}
function galeriaHTML(g, i) {
  return `<div class="adm-card" data-i="${i}">
    <div class="adm-card-head">Seksioni ${i+1} <button class="adm-del" onclick="delGaleria(${i})">✕</button></div>
    <div class="adm-row">
      <div class="adm-group"><label>Etiketa</label><input class="g-label" value="${g.label}"></div>
      <div class="adm-group"><label>Ngjyra (hex)</label><input class="g-color" type="color" value="${g.color}" style="height:38px;cursor:pointer;border-radius:4px;"></div>
    </div>
    <div class="adm-group"><label>Foto (ngarko ose URL)</label>
      <div class="adm-img-upload">
        ${g.img ? `<img class="adm-img-preview" src="${g.img}" alt="">` : `<div class="adm-img-placeholder"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`}
        <input type="file" class="g-img-file" accept="image/jpeg,image/jpg,image/png,image/webp,image/gif,image/bmp,image/svg+xml" onchange="uploadImg(this, ${i}, 'galeria')" style="display:none">
        <div class="adm-img-actions">
          <button class="adm-img-btn" onclick="this.closest('.adm-card').querySelector('.g-img-file').click()">📷 Ngarko foto</button>
          <input class="g-img-url" placeholder="ose ngjit URL..." value="${g.img}" oninput="previewImgUrl(this)">
        </div>
      </div>
    </div>
  </div>`;
}

// ── Kontrollet e panelit ──
window.adminTab = function(btn, id) {
  qa('.adm-tab').forEach(t => t.classList.remove('active'));
  qa('.adm-section').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  q('#adm-' + id).classList.add('active');
};

window.adminClose = function() {
  q('#admin-panel').classList.remove('open');
  document.body.style.overflow = '';
};

let currentData = null;

window.adminSave = function() {
  currentData = collectFormData();
  saveData(currentData);
  applyData(currentData);
  showToast('✓ Ndryshimet u ruajtën!');
};

window.adminReset = function() {
  if(!confirm('Kjo do të fshijë të gjitha ndryshimet tuaja. Jeni të sigurt?')) return;
  localStorage.removeItem(STORAGE_KEY);
  currentData = getDefaultData();
  applyData(currentData);
  // rebuild panel
  q('#admin-panel').remove();
  buildAdminPanel(currentData);
  q('#admin-panel').classList.add('open');
  document.body.style.overflow = 'hidden';
  showToast('↺ Të dhënat u rikthyen!');
};

window.addLajm = function() {
  const list = q('#lajmet-list');
  const i = list.children.length;
  list.insertAdjacentHTML('beforeend', lajmHTML({ cat: 'Kategoria', title: 'Titulli i lajmit të ri', date: 'Data' }, i));
};
window.delLajm = function(i) {
  const cards = qa('#lajmet-list .adm-card');
  if(cards[i]) cards[i].remove();
  updateCardHeads('#lajmet-list', 'Lajmi');
};

window.addMesues = function() {
  const list = q('#mesuesit-list');
  const i = list.children.length;
  list.insertAdjacentHTML('beforeend', mesuesHTML({ initials: 'XX', name: 'Emri Mbiemri', lenda: 'Lënda', exp: '0 vjet eksperiencë', img: '' }, i));
};
window.delMesues = function(i) {
  const cards = qa('#mesuesit-list .adm-card');
  if(cards[i]) cards[i].remove();
  updateCardHeads('#mesuesit-list', 'Mësuesi');
};

window.addGaleria = function() {
  const list = q('#galeria-list');
  const i = list.children.length;
  list.insertAdjacentHTML('beforeend', galeriaHTML({ label: 'Seksioni i Ri', color: '#1a3a2e', img: '' }, i));
};
window.delGaleria = function(i) {
  const cards = qa('#galeria-list .adm-card');
  if(cards[i]) cards[i].remove();
  updateCardHeads('#galeria-list', 'Seksioni');
};

window.addSlide = function() {
  const list = q('#slider-list');
  const i = list.children.length;
  list.insertAdjacentHTML('beforeend', sliderSlideHTML({ img: '', caption: '', sub: '' }, i));
};
window.delSlide = function(i) {
  const cards = qa('#slider-list .adm-card');
  if(cards[i]) cards[i].remove();
  updateCardHeads('#slider-list', 'Foto');
};

// ── Kompresim imazhi me Canvas ──
// maxW/maxH = dimensioni maksimal, quality = 0-1 për JPEG
function compressImage(file, maxW, maxH, quality, callback) {
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      let w = img.width, h = img.height;
      // Ruaj raportin
      if (w > maxW || h > maxH) {
        const ratio = Math.min(maxW / w, maxH / h);
        w = Math.round(w * ratio);
        h = Math.round(h * ratio);
      }
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      // Ruaj si JPEG (kompakt), por PNG nëse ka transparencë
      const isPng = file.type === 'image/png';
      const dataUrl = isPng
        ? canvas.toDataURL('image/png')
        : canvas.toDataURL('image/jpeg', quality);
      callback(dataUrl);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Hero image upload
window.uploadHeroImg = function(input) {
  const file = input.files[0];
  if(!file) return;
  compressImage(file, 1200, 1200, 0.82, url => {
    const urlInput = q('#heroimg-url');
    if(urlInput) urlInput.value = url;
    updateHeroImgPreview(url);
  });
};

window.previewHeroImgUrl = function(input) {
  updateHeroImgPreview(input.value);
};

window.clearHeroImg = function() {
  const urlInput = q('#heroimg-url');
  if(urlInput) urlInput.value = '';
  updateHeroImgPreview('');
};

function updateHeroImgPreview(url) {
  const area = q('#heroimg-upload-area');
  if(!area) return;
  let preview = area.querySelector('#heroimg-preview');
  let placeholder = area.querySelector('#heroimg-placeholder');
  if(url) {
    if(!preview) {
      preview = document.createElement('img');
      preview.id = 'heroimg-preview';
      preview.className = 'adm-img-preview';
      area.insertBefore(preview, area.firstChild);
      if(placeholder) placeholder.remove();
    }
    preview.src = url;
  } else {
    if(preview) preview.remove();
    if(!area.querySelector('#heroimg-placeholder')) {
      const ph = document.createElement('div');
      ph.id = 'heroimg-placeholder';
      ph.className = 'adm-img-placeholder';
      ph.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span style="font-size:12px;margin-top:8px;color:rgba(247,243,236,0.3)">Asnjë foto e ngarkuar</span>`;
      area.insertBefore(ph, area.firstChild);
    }
  }
}

function updateCardHeads(selector, label) {
  qa(selector + ' .adm-card').forEach((c, idx) => {
    const h = c.querySelector('.adm-card-head');
    const btn = h.querySelector('button');
    h.textContent = label + ' ' + (idx + 1) + ' ';
    if(btn) h.appendChild(btn);
  });
}

window.uploadImg = function(input, idx, type) {
  const file = input.files[0];
  if(!file) return;
  // Dimensione sipas llojit
  const maxW = type === 'mesues' ? 400  : 1200;
  const maxH = type === 'mesues' ? 400  : 900;
  const qual = type === 'mesues' ? 0.80 : 0.82;
  compressImage(file, maxW, maxH, qual, url => {
    const card = input.closest('.adm-card');
    const placeholder = card.querySelector('.adm-img-placeholder');
    const container = card.querySelector('.adm-img-upload');
    let img = card.querySelector('.adm-img-preview');
    if(!img) {
      img = document.createElement('img');
      img.className = 'adm-img-preview';
      container.insertBefore(img, container.children[1]);
      if(placeholder) placeholder.remove();
    }
    img.src = url;
    const urlInput = type === 'mesues' ? card.querySelector('.m-img-url')
                   : type === 'slider' ? card.querySelector('.sl-img-url')
                   : card.querySelector('.g-img-url');
    if(urlInput) urlInput.value = url;
  });
};

window.previewImgUrl = function(input) {
  const card = input.closest('.adm-card');
  const container = card.querySelector('.adm-img-upload');
  let img = card.querySelector('.adm-img-preview');
  const placeholder = card.querySelector('.adm-img-placeholder');
  if(!input.value.trim()) return;
  if(!img) {
    img = document.createElement('img');
    img.className = 'adm-img-preview';
    container.insertBefore(img, container.children[1] || container.firstChild);
    if(placeholder) placeholder.remove();
  }
  img.src = input.value;
};

function collectFormData() {
  const d = JSON.parse(JSON.stringify(currentData));

  // Hero
  d.hero.eyebrow   = v('h-eyebrow');
  d.hero.title     = v('h-title');
  d.hero.desc      = v('h-desc');
  d.hero.stat1num  = v('h-s1n'); d.hero.stat1label = v('h-s1l');
  d.hero.stat2num  = v('h-s2n'); d.hero.stat2label = v('h-s2l');
  d.hero.stat3num  = v('h-s3n'); d.hero.stat3label = v('h-s3l');
  d.hero.year      = v('h-year');

  // Rreth
  d.rreth.vjet    = v('r-vjet');
  d.rreth.drejtim = v('r-drejtim');
  d.rreth.p1      = v('r-p1');
  d.rreth.p2      = v('r-p2');

  // Lajmet
  d.lajmet = [];
  qa('#lajmet-list .adm-card').forEach(c => {
    d.lajmet.push({
      cat:   c.querySelector('.lajm-cat').value,
      title: c.querySelector('.lajm-title').value,
      date:  c.querySelector('.lajm-date').value
    });
  });

  // Drejtimet
  qa('#drejtimet-list .adm-card').forEach((c, i) => {
    if(d.drejtimet[i]) {
      d.drejtimet[i].title = c.querySelector('.drejtim-title-inp').value;
      d.drejtimet[i].desc  = c.querySelector('.drejtim-desc-inp').value;
    }
  });

  // Mësuesit
  d.mesuesit = [];
  qa('#mesuesit-list .adm-card').forEach(c => {
    const urlInput = c.querySelector('.m-img-url');
    const imgPreview = c.querySelector('.adm-img-preview');
    let img = urlInput ? urlInput.value : '';
    if(!img && imgPreview) img = imgPreview.src;
    d.mesuesit.push({
      initials: c.querySelector('.m-init').value,
      name:     c.querySelector('.m-name').value,
      lenda:    c.querySelector('.m-lenda').value,
      exp:      c.querySelector('.m-exp').value,
      img:      img
    });
  });

  // Galeria
  d.galeria = [];
  qa('#galeria-list .adm-card').forEach(c => {
    const urlInput = c.querySelector('.g-img-url');
    const imgPreview = c.querySelector('.adm-img-preview');
    let img = urlInput ? urlInput.value : '';
    if(!img && imgPreview) img = imgPreview.src;
    d.galeria.push({
      label: c.querySelector('.g-label').value,
      color: c.querySelector('.g-color').value,
      img:   img
    });
  });

  // Kontakti
  d.kontakti.adresa = v('k-adresa');
  d.kontakti.tel1   = v('k-tel1');   d.kontakti.tel2   = v('k-tel2');
  d.kontakti.email1 = v('k-email1'); d.kontakti.email2 = v('k-email2');
  d.kontakti.orari  = v('k-orari');

  // Hero Image
  const heroimgUrl = v('heroimg-url');
  const heroimgPreview = q('#heroimg-preview');
  d.heroImg = {
    img:   heroimgUrl || (heroimgPreview ? heroimgPreview.src : ''),
    label: v('heroimg-label')
  };

  // Slider
  d.slider = {
    title: v('sl-title'),
    sub:   v('sl-sub'),
    slides: []
  };
  qa('#slider-list .adm-card').forEach(c => {
    const urlInput = c.querySelector('.sl-img-url');
    const imgPreview = c.querySelector('.adm-img-preview');
    let img = urlInput ? urlInput.value : '';
    if(!img && imgPreview) img = imgPreview.src;
    d.slider.slides.push({
      img:     img,
      caption: c.querySelector('.sl-caption') ? c.querySelector('.sl-caption').value : '',
      sub:     c.querySelector('.sl-sub')     ? c.querySelector('.sl-sub').value     : ''
    });
  });

  // Informacion
  if(!d.informacion) d.informacion = {};
  ['regjistrimi','orari_mesor','rregullorja','rezultatet','bursat'].forEach(key => {
    if(!d.informacion[key]) d.informacion[key] = {};
    d.informacion[key].title   = v('inf-' + key + '-title');
    d.informacion[key].content = v('inf-' + key + '-content');
  });

  return d;
}

function v(id) { const el = q('#' + id); return el ? el.value : ''; }

function showToast(msg) {
  let t = q('#adm-toast');
  if(!t) {
    t = document.createElement('div');
    t.id = 'adm-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._to);
  t._to = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── Kredencialet e Admin ──
// ← ndrysho username dhe fjalëkalimin këtu
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin2025'
};
const SESSION_KEY = 'saidnajdeni_auth';

function isAuthenticated() {
  return sessionStorage.getItem(SESSION_KEY) === '1';
}

function showLoginModal() {
  const old = q('#admin-login-modal');
  if(old) old.remove();

  const modal = document.createElement('div');
  modal.id = 'admin-login-modal';
  modal.innerHTML = `
    <div id="admin-login-box">
      <div class="login-logo">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        Admin Panel
      </div>
      <p class="login-sub">Gjimnazi "Said Najdeni"</p>
      <div class="login-group">
        <label>Emri i përdoruesit</label>
        <input type="text" id="admin-user-input" placeholder="username" autocomplete="username">
      </div>
      <div class="login-group">
        <label>Fjalëkalimi</label>
        <input type="password" id="admin-pass-input" placeholder="••••••••" autocomplete="current-password">
      </div>
      <div id="login-error" class="login-error" style="display:none;">✕ Emri i përdoruesit ose fjalëkalimi është i gabuar</div>
      <button id="login-submit-btn" onclick="submitLogin()">Hyr në Panel</button>
    </div>`;
  document.body.appendChild(modal);

  // Focus te username, Enter kalon te password, Enter te password submit
  const userInp = q('#admin-user-input');
  const passInp = q('#admin-pass-input');
  userInp.focus();
  userInp.addEventListener('keydown', e => { if(e.key === 'Enter') passInp.focus(); });
  passInp.addEventListener('keydown', e => { if(e.key === 'Enter') submitLogin(); });

  modal.addEventListener('click', e => { if(e.target === modal) closeLoginModal(); });
}

function closeLoginModal() {
  const modal = q('#admin-login-modal');
  if(modal) modal.remove();
}

window.submitLogin = function() {
  const userInp = q('#admin-user-input');
  const passInp = q('#admin-pass-input');
  const err = q('#login-error');
  const btn = q('#login-submit-btn');
  if(!userInp || !passInp) return;

  const userOk = userInp.value.trim() === ADMIN_CREDENTIALS.username;
  const passOk = passInp.value === ADMIN_CREDENTIALS.password;

  if(userOk && passOk) {
    sessionStorage.setItem(SESSION_KEY, '1');
    closeLoginModal();
    q('#admin-panel').classList.add('open');
    document.body.style.overflow = 'hidden';
    // Shfaq emrin e përdoruesit në header
    const userBadge = q('#adm-user-badge');
    if(userBadge) userBadge.textContent = ADMIN_CREDENTIALS.username;
  } else {
    err.style.display = 'block';
    passInp.value = '';
    if(!userOk) userInp.select();
    else passInp.focus();
    btn.style.animation = 'none';
    requestAnimationFrame(() => { btn.style.animation = 'loginShake 0.35s ease'; });
  }
};

window.adminLogout = function() {
  sessionStorage.removeItem(SESSION_KEY);
  q('#admin-panel').classList.remove('open');
  document.body.style.overflow = '';
  showLoginModal();
};

// ── Butoni i fshehur ──
function createAdminToggle() {
  const btn = document.createElement('button');
  btn.id = 'admin-toggle';
  btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`;
  btn.title = 'Hap Panelin e Administrimit';
  btn.onclick = () => {
    if(isAuthenticated()) {
      q('#admin-panel').classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      showLoginModal();
    }
  };
  document.body.appendChild(btn);
}

// ── Modali i Informacionit ──
const INFO_KEYS = ['regjistrimi','orari_mesor','rregullorja','rezultatet','bursat'];

window.openInfo = function(key) {
  const data = currentData || loadData();
  const item = data.informacion && data.informacion[key];
  if(!item) return;

  const modal = q('#info-modal');
  if(!modal) return;

  q('#info-modal-title').textContent = item.title;
  // Kthe rreshtat e rinj në paragrafë
  q('#info-modal-body').innerHTML = item.content
    .split('\n')
    .map(line => line.trim() === '' ? '<br>' : `<p>${line}</p>`)
    .join('');

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

window.closeInfo = function() {
  const modal = q('#info-modal');
  if(modal) modal.style.display = 'none';
  document.body.style.overflow = '';
};

// ── Inicializo ──
document.addEventListener('DOMContentLoaded', () => {
  currentData = loadData();
  applyData(currentData);
  buildAdminPanel(currentData);
  createAdminToggle();
});
