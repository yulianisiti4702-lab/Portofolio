/* =========================================================
   MAIN SCRIPT — tampilan & animasi (tidak perlu diubah)
   Isi teks ada di assets/data.js
   ========================================================= */
(function () {
  const page = document.body.dataset.page;
  const app = document.getElementById('app');
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- helpers ---------- */
  const media = (src, label, cls = '', dark = false) => src
    ? `<div class="media ${cls}"><img src="${src}" alt="${label}" loading="lazy"></div>`
    : `<div class="media ${cls}"><div class="ph ${dark ? 'dark-ph' : ''}">${label}</div></div>`;
  const catLabel = k => (CATEGORIES.find(c => c.key === k) || {}).label || '';
  const chips = arr => (arr || []).map(t => `<span class="chip">${t}</span>`).join('');
  const lines = (txt) => `<span class="line-mask"><span>${txt}</span></span>`;
  const socials = (cls = 'pill') => `
    <a class="${cls}" href="mailto:${PROFILE.email}">Email</a>
    <a class="${cls}" href="${PROFILE.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>
    <a class="${cls}" href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
    <a class="${cls}" href="${PROFILE.behance}" target="_blank" rel="noopener">Behance</a>`;

  /* ---------- header + menu ---------- */
  const links = [
    ['Home', 'index.html', 'home'], ['About', 'about.html', 'about'],
    ['Projects', 'projects.html', 'projects'], ['Contact', 'index.html#contact', 'contact']];
  document.body.insertAdjacentHTML('afterbegin', `
    <header class="top">
      <a href="index.html" class="logo">${PROFILE.nick}</a>
      <button class="burger" id="openMenu" aria-label="Open menu">Menu <i></i></button>
    </header>
    <div class="menu" id="menu" aria-hidden="true">
      <button class="close" id="closeMenu">Close ✕</button>
      <nav>${links.map(([t, h, k], i) =>
        `<a href="${h}" data-key="${k}" class="${k === page || (page === 'project' && k === 'projects') ? 'active' : ''}"><small>0${i + 1}</small>${t}</a>`).join('')}</nav>
      <aside>
        <span class="script">${PROFILE.nick}</span>
        <p>${PROFILE.title}<br>${PROFILE.location}</p>
        <p><a href="mailto:${PROFILE.email}">${PROFILE.email}</a></p>
        <div class="socials">${socials()}</div>
      </aside>
    </div>`);
  const menu = $('#menu');
  const toggleMenu = open => { menu.classList.toggle('open', open); menu.setAttribute('aria-hidden', !open); };
  $('#openMenu').onclick = () => toggleMenu(true);
  $('#closeMenu').onclick = () => toggleMenu(false);
  document.addEventListener('keydown', e => e.key === 'Escape' && toggleMenu(false));

  /* ---------- footer ---------- */
  const footer = () => `
    <footer class="foot dark">
      <div class="wrap">
        <div class="big reveal">Let's create something<br><span class="script">together.</span></div>
        <div class="row reveal">
          <a class="btn on-dark" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
          <div class="socials">${socials()}</div>
        </div>
        <div class="copy"><span>© 2026 ${PROFILE.name.toUpperCase()}</span><span>${PROFILE.title.toUpperCase()}</span></div>
      </div>
    </footer>`;

  /* ================= HOME ================= */
  function renderHome() {
    document.title = `${PROFILE.name} | Portfolio`;
    app.innerHTML = `
    <div class="snap" id="snap">
      <section class="panel light hero" id="home" data-i="0">
        <div class="content wrap hero-grid">
          <div class="reveal">
            <div class="name">${PROFILE.name}</div>
            <h1>${lines('Graphic Designer')}${lines('<span class="script">&amp; Illustrator</span>')}</h1>
            <p>${PROFILE.heroIntro}</p>
            <div class="actions">
              <a class="btn solid" href="${PROFILE.cv}" target="_blank" rel="noopener">Download CV</a>
              <a class="btn" href="#contact" data-goto="3">Contact Me</a>
            </div>
          </div>
          <div class="portrait">
            ${media(PROFILE.photo, 'Foto profil', 'reveal-img')}
            <div class="tag reveal"><span class="script">Hi, there!</span>Based in ${PROFILE.location.split(',')[0]}</div>
          </div>
        </div>
      </section>

      <section class="panel dark teaser" id="about" data-i="1">
        <div class="bg">${media(PROFILE.aboutPhotos[0], 'Foto latar About (opsional)', '', true)}</div>
        <div class="content wrap reveal">
          <div class="eyebrow">01 — About</div>
          <h2>${lines('About <span class="script">me</span>')}</h2>
          <p>A brief introduction to my journey as a graphic designer and illustrator.</p>
          <a class="btn on-dark" href="about.html">Learn More</a>
        </div>
        <div class="count">01 / 03</div>
      </section>

      <section class="panel dark teaser" id="projects" data-i="2">
        <div class="bg">${media((PROJECTS.find(p => p.featured) || PROJECTS[0]).gallery[0].src, 'Foto latar Projects (opsional)', '', true)}</div>
        <div class="content wrap reveal">
          <div class="eyebrow">02 — Works</div>
          <h2>${lines('Selected <span class="script">works</span>')}</h2>
          <p>Brand visuals, social content, marketplace imagery, and book illustrations I've made over the years.</p>
          <a class="btn on-dark" href="projects.html">Learn More</a>
        </div>
        <div class="count">02 / 03</div>
      </section>

      <section class="panel dark contact-panel" id="contact" data-i="3">
        <div class="content wrap reveal">
          <div class="eyebrow">03 — Contact</div>
          <h2>${lines('Get in <span class="script">touch</span>')}</h2>
          <p>Feel free to reach out for a project, a role, or just to say hi.</p>
          <a class="mail" href="mailto:${PROFILE.email}?subject=Hello%20Yuli">${PROFILE.email}</a>
          <div class="socials">${socials()}</div>
        </div>
        <footer>© 2026 ${PROFILE.name.toUpperCase()}</footer>
      </section>
    </div>
    <div class="dots" id="dots">${[0, 1, 2, 3].map(i => `<button data-goto="${i}" aria-label="Section ${i + 1}"></button>`).join('')}</div>
    <div class="scroll-hint" id="hint">Scroll</div>`;

    const snap = $('#snap'), panels = $$('.panel'), dots = $$('#dots button');
    const go = i => panels[i] && snap.scrollTo({ top: panels[i].offsetTop, behavior: 'smooth' });
    $$('[data-goto]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); go(+b.dataset.goto); }));
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) {
        const i = +en.target.dataset.i;
        panels.forEach(p => p.classList.toggle('active', p === en.target));
        dots.forEach((d, k) => d.classList.toggle('on', k === i));
        $('#hint').style.opacity = i === 3 ? 0 : 1;
      }
    }), { root: snap, threshold: .55 });
    panels.forEach(p => io.observe(p));
    // keyboard
    document.addEventListener('keydown', e => {
      const cur = panels.findIndex(p => p.classList.contains('active'));
      if (['ArrowDown', 'PageDown'].includes(e.key)) { e.preventDefault(); go(Math.min(cur + 1, 3)); }
      if (['ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); go(Math.max(cur - 1, 0)); }
    });
    // menu "Contact" on home: scroll instead of reload
    $$('#menu a[data-key="contact"], #menu a[data-key="home"]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault(); toggleMenu(false); setTimeout(() => go(a.dataset.key === 'contact' ? 3 : 0), 500);
    }));
    if (location.hash === '#contact') setTimeout(() => { snap.scrollTop = panels[3].offsetTop; }, 50);
  }

  /* ================= ABOUT ================= */
  function renderAbout() {
    document.title = `About | ${PROFILE.name}`;
    const exp = EXPERIENCE.map((x, i) => `
      <article class="exp-item reveal ${i > 2 ? 'hidden' : ''}">
        <div class="info">
          <div><b>${x.start}</b><small>Start</small></div>
          <div><b>${x.end}</b><small>End</small></div>
          <div><b>${x.location}</b><small>Location</small></div>
          <div><b>${x.type}</b><small>Type</small></div>
        </div>
        <div>
          <h3>${x.company}</h3>
          <h4>${x.role}<span>•</span>${x.type}</h4>
          <p>${x.desc}</p>
          <div class="chips">${chips(x.tags)}</div>
        </div>
      </article>`).join('');

    app.innerHTML = `
    <section class="page-hero">
      <div class="bg">${media(PROFILE.aboutPhotos[0], 'Foto latar About (opsional)', '', true)}</div>
      <div class="content wrap reveal">
        <div class="eyebrow">/ About</div>
        <h1>${lines('About <span class="script">me</span>')}</h1>
        <p>A brief introduction to my journey as a graphic designer and illustrator.</p>
      </div>
      <div class="scroll-hint">Scroll down</div>
    </section>

    <section class="sec light">
      <div class="wrap">
        <div class="sec-title reveal"><h2>Who <span class="script">am I?</span></h2></div>
        <div class="who">
          <div class="stack">
            ${media(PROFILE.aboutPhotos[0], 'Foto 1', 'm1 reveal-img')}
            ${media(PROFILE.aboutPhotos[1], 'Foto 2', 'm2 reveal-img')}
            ${media(PROFILE.aboutPhotos[2], 'Foto 3', 'm3 reveal-img')}
          </div>
          <div class="reveal">
            <h3>${PROFILE.name}</h3>
            <div class="script-sub">${PROFILE.title}</div>
            ${PROFILE.bio.map(p => `<p>${p}</p>`).join('')}
            <a class="btn solid" style="margin-top:14px" href="${PROFILE.cv}" target="_blank" rel="noopener">Download CV</a>
          </div>
        </div>
      </div>
    </section>

    <section class="sec dark">
      <div class="wrap">
        <div class="sec-title reveal"><h2>Skills &amp; <span class="script">expertise</span></h2>
          <p>Click a category to see the skills I bring to each kind of work.</p></div>
        <div class="skill-tabs reveal">${SKILLS.map((s, i) => `
          <button class="skill-tab ${i === 0 ? 'on' : ''}" data-i="${i}">
            <span class="num">0${i + 1}</span><h3>${s.name}</h3><p>${s.desc}</p>
          </button>`).join('')}</div>
        <div class="skill-items" id="skillItems"></div>
      </div>
      <div class="marquee"><div class="track">${[...TOOLS, ...TOOLS].map(t => `<span>${t}</span>`).join('')}</div></div>
    </section>

    <section class="sec light">
      <div class="wrap">
        <div class="sec-title reveal"><h2>Professional <span class="script">experience</span></h2></div>
        <div class="exp">${exp}</div>
        ${EXPERIENCE.length > 3 ? `<button class="btn more-btn" id="moreExp" style="background:none;cursor:pointer;font-family:inherit">View more experience</button>` : ''}
      </div>
    </section>

    <section class="sec dark">
      <div class="wrap">
        <div class="sec-title reveal"><h2>Volunteer &amp; <span class="script">organization</span></h2>
          <p>Where I first learned to design for real audiences and real goals.</p></div>
        <div class="vol reveal">${VOLUNTEER.map(v => `
          <div class="vol-item"><div class="date">${v.date}</div><h3>${v.org}</h3><h4>${v.role}</h4><p>${v.desc}</p></div>`).join('')}</div>
      </div>
    </section>

    <section class="sec light">
      <div class="wrap">
        <div class="sec-title reveal"><h2><span class="script">Education</span></h2>
          <p>Get to know more about my educational background.</p></div>
        <div class="edu">
          <div class="reveal">
            <div class="years">${EDUCATION.years}</div>
            <h3>${EDUCATION.school}</h3>
            <h4>${EDUCATION.degree}</h4>
            <div class="photos">${EDUCATION.photos.map((p, i) => media(p, 'Foto kampus ' + (i + 1), 'reveal-img')).join('')}</div>
          </div>
          <div class="reveal">
            ${EDUCATION.text.map(p => `<p>${p}</p>`).join('')}
            <span class="gpa">${EDUCATION.gpa}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="sec light" style="padding-top:0">
      <div class="wrap">
        <div class="sec-title reveal"><h2>Certifications &amp; <span class="script">achievements</span></h2></div>
        ${ACHIEVEMENTS.map(y => `
          <div class="ach-year reveal"><h3>${y.year}</h3><div class="ach-list">${y.items.map(a => `
            <div class="ach"><div><h4>${a.title}</h4><p>${a.sub}</p></div><span class="d">${a.date}</span></div>`).join('')}
          </div></div>`).join('')}
      </div>
    </section>

    <section class="sec dark quote">
      <div class="wrap reveal">
        <blockquote>“${PROFILE.quote}”</blockquote>
        <a class="btn on-dark" href="index.html#contact">Want to work together? Get in touch</a>
      </div>
    </section>
    ${footer()}`;

    const items = $('#skillItems');
    const showSkill = i => {
      $$('.skill-tab').forEach(t => t.classList.toggle('on', +t.dataset.i === i));
      items.innerHTML = SKILLS[i].items.map((s, k) => `<span style="animation-delay:${k * 60}ms">${s}</span>`).join('');
    };
    $$('.skill-tab').forEach(t => t.onclick = () => showSkill(+t.dataset.i));
    showSkill(0);
    const more = $('#moreExp');
    if (more) more.onclick = () => {
      const hidden = $$('.exp-item.hidden');
      if (hidden.length) { hidden.forEach(h => { h.classList.remove('hidden'); requestAnimationFrame(() => h.classList.add('in')); }); more.textContent = 'Show less'; }
      else { $$('.exp-item').forEach((h, i) => i > 2 && h.classList.add('hidden')); more.textContent = 'View more experience'; }
    };
  }

  /* ================= PROJECTS ================= */
  function renderProjects() {
    document.title = `Projects | ${PROFILE.name}`;
    const f = PROJECTS.find(p => p.featured) || PROJECTS[0];
    const g = f.gallery;
    app.innerHTML = `
    <section class="page-hero">
      <div class="bg">${media(g[0] && g[0].src, 'Foto latar Projects (opsional)', '', true)}</div>
      <div class="content wrap reveal">
        <div class="eyebrow">/ Projects</div>
        <h1>${lines('My <span class="script">projects</span>')}</h1>
        <p>Selected works across brand design, marketplace visuals, and illustration.</p>
      </div>
      <div class="scroll-hint">Scroll down</div>
    </section>

    <section class="sec light">
      <div class="wrap">
        <div class="sec-title reveal"><h2><span class="script">Highlight</span></h2></div>
        <div class="highlight">
          <div class="imgs">
            ${media(g[0] && g[0].src, g[0] ? g[0].label : 'Foto 1', 'reveal-img')}
            ${media(g[1] && g[1].src, g[1] ? g[1].label : 'Foto 2', 'reveal-img')}
            ${media(g[2] && g[2].src, g[2] ? g[2].label : 'Foto 3', 'reveal-img')}
          </div>
          <div class="reveal">
            <div class="eyebrow">${catLabel(f.cat)} · ${f.year}</div>
            <h3>${f.title}</h3>
            <p>${f.intro}</p>
            <div class="chips">${chips(f.tags)}</div>
            <a class="btn solid" href="project.html?id=${f.id}">View project</a>
          </div>
        </div>
      </div>
    </section>

    <section class="sec light" style="padding-top:0">
      <div class="wrap">
        <div class="sec-title reveal"><h2>Other noteworthy <span class="script">works</span></h2></div>
        <div class="filters reveal">
          <button class="on" data-f="all">All</button>
          ${CATEGORIES.map(c => `<button data-f="${c.key}">${c.label}</button>`).join('')}
        </div>
        <div class="grid">${PROJECTS.map(p => `
          <a class="card reveal" data-cat="${p.cat}" href="project.html?id=${p.id}">
            ${media(p.gallery[0] && p.gallery[0].src, p.gallery[0] ? p.gallery[0].label : p.title)}
            <div class="meta"><span>${catLabel(p.cat)}</span><span>${p.year || NOTE('tahun?')}</span></div>
            <h3>${p.title}<span class="arrow">↗</span></h3>
            <p>${p.short}</p>
            <div class="chips">${chips(p.tags)}</div>
          </a>`).join('')}</div>
      </div>
    </section>

    <section class="sec dark quote">
      <div class="wrap reveal">
        <blockquote>Have a story to tell?</blockquote>
        <a class="btn on-dark" href="index.html#contact">Let's make it visual. Get in touch</a>
      </div>
    </section>
    ${footer()}`;

    $$('.filters button').forEach(b => b.onclick = () => {
      $$('.filters button').forEach(x => x.classList.toggle('on', x === b));
      $$('.card').forEach(c => {
        const show = b.dataset.f === 'all' || c.dataset.cat === b.dataset.f;
        c.classList.toggle('out', !show);
        if (show) { c.classList.remove('in'); requestAnimationFrame(() => requestAnimationFrame(() => c.classList.add('in'))); }
      });
    });
  }

  /* ================= PROJECT DETAIL ================= */
  function renderProject() {
    const id = new URLSearchParams(location.search).get('id');
    const i = PROJECTS.findIndex(p => p.id === id);
    if (i < 0) { location.replace('projects.html'); return; }
    const p = PROJECTS[i];
    const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(i + 1) % PROJECTS.length];
    document.title = `${p.title} | ${PROFILE.name}`;
    const [cover, ...rest] = p.gallery;
    const list = a => `<ol>${a.map(x => `<li>${x}</li>`).join('')}</ol>`;

    app.innerHTML = `
    <section class="pd-hero">
      <div class="wrap reveal">
        <a class="back" href="projects.html">← All projects</a>
        <div class="eyebrow">${catLabel(p.cat)} · ${p.year || NOTE('tahun?')}</div>
        <h1>${lines(p.title)}</h1>
        ${p.meta.length ? `<div class="sub">${chips(p.meta)}</div>` : ''}
        <p class="intro">${p.intro}</p>
      </div>
    </section>

    <div class="wrap">${cover ? media(cover.src, cover.label, 'pd-cover reveal-img') : ''}</div>

    ${p.obj ? `
    <section class="sec light">
      <div class="wrap pd-cols">
        <div class="reveal"><h2>Objectives</h2>${list(p.obj)}</div>
        <div class="reveal"><h2>Results</h2>${list(p.res)}</div>
      </div>
    </section>` : '<div style="height:100px"></div>'}

    ${p.kv ? `
    <section class="sec dark">
      <div class="wrap pd-kv">
        <h2 class="reveal">Key Visual</h2>
        <div class="reveal">
          <p>${p.kv}</p>
          <div class="pd-tools">${p.tools.length ? p.tools.map(t => `<span class="chip">${t}</span>`).join('') : `<span class="chip">Tools: ${NOTE('isi aplikasi yang dipakai')}</span>`}</div>
        </div>
      </div>
    </section>` : ''}

    ${rest.length ? `
    <section class="sec light">
      <div class="wrap">
        <div class="sec-title reveal"><h2><span class="script">Gallery</span></h2></div>
        <div class="pd-gallery">${rest.map(g => media(g.src, g.label, 'reveal-img')).join('')}</div>
      </div>
    </section>` : ''}

    <section class="wrap pd-next">
      <a href="project.html?id=${prev.id}"><small>← Previous</small><h3>${prev.title}</h3></a>
      <a href="project.html?id=${next.id}"><small>Next →</small><h3>${next.title}</h3></a>
    </section>
    ${footer()}`;
  }

  ({ home: renderHome, about: renderAbout, projects: renderProjects, project: renderProject }[page] || (() => {}))();

  /* ---------- reveal on scroll ---------- */
  const ro = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal, .reveal-img, .line-mask').forEach(el => ro.observe(el));

  /* ---------- page transition (curtain) ---------- */
  const curtain = $('#curtain');
  const lift = () => { curtain.classList.add('show'); setTimeout(() => curtain.classList.add('up'), 650); };
  if (sessionStorage.getItem('yuli-visited')) { curtain.querySelector('span').textContent = ''; setTimeout(() => curtain.classList.add('up'), 80); }
  else { sessionStorage.setItem('yuli-visited', '1'); lift(); }
  window.addEventListener('pageshow', e => { if (e.persisted) curtain.className = 'curtain up'; });

  document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a || a.target === '_blank' || e.metaKey || e.ctrlKey) return;
    const href = a.getAttribute('href') || '';
    if (!/\.html/.test(href) || href.startsWith('http') || a.hasAttribute('download')) return;
    if (page === 'home' && href.startsWith('index.html')) return;
    e.preventDefault();
    toggleMenu(false);
    curtain.querySelector('span').textContent = '';
    curtain.className = 'curtain reset';
    requestAnimationFrame(() => requestAnimationFrame(() => { curtain.className = 'curtain down'; }));
    setTimeout(() => { location.href = href; }, 620);
  });
})();
