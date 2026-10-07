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
      <div class="top-right">
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span class="sun"></span></button>
        <button class="burger" id="openMenu" aria-label="Open menu">Menu <i></i></button>
      </div>
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
  const root = document.documentElement;
  const isDark = () => root.dataset.theme === 'dark';
  const setTheme = t => { root.dataset.theme = t; try { localStorage.setItem('yuli-theme', t); } catch (e) {} };
  $('#themeToggle').onclick = () => setTheme(isDark() ? 'light' : 'dark');
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
    const years = new Date().getFullYear() - (PROFILE.experienceSince || 2023);
    const certCount = ACHIEVEMENTS.reduce((n, y) => n + y.items.length, 0);
    const showcaseProjects = [...PROJECTS].filter(p => p.thumb).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    const ic = {
      arrow: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17 17 7M8 7h9v9"/></svg>',
      grid: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
      award: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/></svg>',
      pen: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/></svg>'
    };

    app.innerHTML = `
    <div class="snap" id="snap">
      <section class="panel light hero" id="home" data-i="0">
        <div class="content wrap hero-grid">
          <div class="reveal">
            <div class="name">${PROFILE.name}</div>
            <h1>${lines('Graphic Designer')}${lines('<span class="script">&amp; Illustrator</span>')}</h1>
            <div class="typed" aria-label="Turning stories into ${PROFILE.typing.join(', ')}">Turning stories into <span id="typed"></span><i class="caret"></i></div>
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

      <section class="panel dark snapshot" id="about" data-i="1">
        <div class="content wrap">
          <div class="snap-grid">
            <div class="reveal">
              <div class="eyebrow">01 — About</div>
              <h2>${lines('Hello, I\'m')}${lines('<span class="script">Yuliani Siti Ruswana</span>')}</h2>
              <p class="lead">${PROFILE.snapshot}</p>
              <blockquote>“${PROFILE.quote}”</blockquote>
              <div class="actions">
                <a class="btn on-dark solid-dark" href="${PROFILE.cv}" target="_blank" rel="noopener">Download CV</a>
                <a class="btn on-dark" href="about.html">More about me</a>
              </div>
            </div>
            <div class="snap-photo reveal-img">${media(PROFILE.aboutPhotos[1] || PROFILE.photo, 'Foto diri', '', true)}</div>
          </div>
          <div class="stats">
            <a class="stat reveal" href="projects.html"><span class="ico">${ic.grid}</span><b data-count="${PROJECTS.length}">0</b><small>Selected projects</small><em>Brand, product & book work</em><span class="go">${ic.arrow}</span></a>
            <a class="stat reveal" href="about.html#achievements"><span class="ico">${ic.award}</span><b data-count="${certCount}">0</b><small>Certifications & awards</small><em>Adobe, BNSP & design challenge</em><span class="go">${ic.arrow}</span></a>
            <a class="stat reveal" href="about.html#experience"><span class="ico">${ic.pen}</span><b data-count="${years}" data-suffix="+">0</b><small>Years in design</small><em>Agency, brand & publishing</em><span class="go">${ic.arrow}</span></a>
          </div>
        </div>
      </section>

      <section class="panel light showcase" id="projects" data-i="2">
        <div class="content wrap">
          <div class="sc-head reveal">
            <div class="eyebrow">02 — Works</div>
            <h2>Portfolio <span class="script">showcase</span></h2>
            <p>Projects, certifications, and the tools behind them. Each one is a step in how I tell stories visually.</p>
          </div>
          <div class="sc-tabs reveal" role="tablist">
            <button class="on" data-tab="p" role="tab">${ic.grid}<span>Projects</span></button>
            <button data-tab="c" role="tab">${ic.award}<span>Certificates</span></button>
            <button data-tab="t" role="tab">${ic.pen}<span>Tools</span></button>
          </div>
          <div class="sc-pane on" data-pane="p">
            <div class="sc-grid">${showcaseProjects.slice(0, 6).map(p => `
              <a class="sc-card" href="project.html?id=${p.id}">
                ${media(p.thumb, p.title)}
                <div class="sc-body">
                  <div class="meta">${catLabel(p.cat)}</div>
                  <h3>${p.title}</h3>
                  <p>${p.short}</p>
                  <span class="more">View project ${ic.arrow}</span>
                </div>
              </a>`).join('')}</div>
            <div class="sc-foot"><a class="btn" href="projects.html">See all projects</a></div>
          </div>
          <div class="sc-pane" data-pane="c">
            <div class="sc-grid">${CERTIFICATES.map(c => `
              <div class="sc-card cert ${c.img ? '' : 'text-only'}">
                ${c.img ? media(c.img, c.title, 'zoomable') : `<div class="cert-text"><span class="script">Certified</span></div>`}
                <div class="sc-body">
                  <div class="meta">${c.date}</div>
                  <h3>${c.title}</h3>
                  <p>${c.issuer}</p>
                </div>
              </div>`).join('')}</div>
          </div>
          <div class="sc-pane" data-pane="t">
            <div class="tool-grid">${TOOLS.map(t => {
              const [ab, d] = TOOL_INFO[t] || [t.slice(0, 2), ''];
              return `<div class="tool"><span class="mono">${ab}</span><div><h3>${t}</h3><p>${d}</p></div></div>`;
            }).join('')}</div>
          </div>
        </div>
      </section>

      <section class="panel dark contact-panel" id="contact" data-i="3">
        <div class="content wrap contact-grid">
          <div class="reveal">
            <div class="eyebrow">03 — Contact</div>
            <h2>${lines('Get in <span class="script">touch</span>')}</h2>
            <p>Have a project, a role, or just want to say hi? Send me a message and I'll get back to you soon.</p>
            <a class="mail" href="mailto:${PROFILE.email}?subject=Hello%20Yuli">${PROFILE.email}</a>
            <div class="socials">${socials()}</div>
          </div>
          <form class="cform reveal" id="cform" novalidate>
            <label><span>Your name</span><input name="name" required autocomplete="name"></label>
            <label><span>Your email</span><input name="email" type="email" required autocomplete="email"></label>
            <label><span>Message</span><textarea name="msg" rows="4" required></textarea></label>
            <p class="err" id="cerr" role="alert"></p>
            <div class="cbtns">
              <button class="btn on-dark solid-dark" type="submit" data-via="mail">Send via Email</button>
              <button class="btn on-dark" type="submit" data-via="wa">Send via WhatsApp</button>
            </div>
          </form>
        </div>
        <footer>© 2026 ${PROFILE.name.toUpperCase()}</footer>
      </section>
    </div>
    <div class="dots" id="dots">${[0, 1, 2, 3].map(i => `<button data-goto="${i}" aria-label="Section ${i + 1}"></button>`).join('')}</div>
    <div class="scroll-hint" id="hint">Scroll</div>`;

    const snap = $('#snap'), panels = $$('.panel'), dots = $$('#dots button');
    const go = i => panels[i] && snap.scrollTo({ top: panels[i].offsetTop, behavior: 'smooth' });
    $$('[data-goto]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); go(+b.dataset.goto); }));
    const setActive = () => {
      const mid = snap.scrollTop + innerHeight * .45;
      let i = 0; panels.forEach((p, k) => { if (p.offsetTop <= mid) i = k; });
      panels.forEach((p, k) => p.classList.toggle('active', k === i));
      dots.forEach((d, k) => d.classList.toggle('on', k === i));
      $('#hint').style.opacity = snap.scrollTop > 40 ? 0 : 1;
    };
    snap.addEventListener('scroll', setActive, { passive: true }); setActive();
    $$('#menu a[data-key="contact"], #menu a[data-key="home"]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault(); toggleMenu(false); setTimeout(() => go(a.dataset.key === 'contact' ? 3 : 0), 500);
    }));
    if (location.hash === '#contact') setTimeout(() => { snap.scrollTop = panels[3].offsetTop; }, 50);

    /* typing animation */
    const tEl = $('#typed'); let wi = 0, ci = 0, del = false;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tick = () => {
      const w = PROFILE.typing[wi];
      if (reduce) { tEl.textContent = w; wi = (wi + 1) % PROFILE.typing.length; return setTimeout(tick, 2600); }
      tEl.textContent = w.slice(0, ci);
      if (!del && ci < w.length) { ci++; setTimeout(tick, 70); }
      else if (!del) { del = true; setTimeout(tick, 1800); }
      else if (ci > 0) { ci--; setTimeout(tick, 35); }
      else { del = false; wi = (wi + 1) % PROFILE.typing.length; setTimeout(tick, 350); }
    };
    setTimeout(tick, 900);

    /* stat counters */
    const co = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return; co.unobserve(en.target);
      const el = en.target, end = +el.dataset.count, suf = el.dataset.suffix || '', t0 = performance.now();
      const step = t => { const k = Math.min(1, (t - t0) / 1200), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
        el.textContent = v + (k === 1 ? suf : ''); if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }), { root: snap, threshold: .4 });
    $$('[data-count]').forEach(el => co.observe(el));

    /* showcase tabs */
    $$('.sc-tabs button').forEach(b => b.onclick = () => {
      $$('.sc-tabs button').forEach(x => x.classList.toggle('on', x === b));
      $$('.sc-pane').forEach(p => p.classList.toggle('on', p.dataset.pane === b.dataset.tab));
    });

    /* contact form: opens email app or WhatsApp with the message filled in */
    let via = 'mail';
    $$('#cform [data-via]').forEach(b => b.addEventListener('click', () => { via = b.dataset.via; }));
    $('#cform').addEventListener('submit', e => {
      e.preventDefault();
      const f = e.target, name = f.name.value.trim(), email = f.email.value.trim(), msg = f.msg.value.trim();
      const err = $('#cerr');
      if (!name || !msg || !/^\S+@\S+\.\S+$/.test(email)) { err.textContent = 'Please fill in your name, a valid email, and a message.'; return; }
      err.textContent = '';
      const body = `${msg}\n\n— ${name} (${email})`;
      if (via === 'wa') window.open(`${PROFILE.whatsapp}?text=${encodeURIComponent(`Hi Yuli, I'm ${name} (${email}).\n\n${msg}`)}`, '_blank', 'noopener');
      else location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent('Hello from ' + name)}&body=${encodeURIComponent(body)}`;
    });
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

    <section class="sec light" id="experience">
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
            ${(EDUCATION.programs || []).map(g => `
              <div class="edu-prog"><small>${g.date}</small><h4>${g.title}</h4><b>${g.org}</b><p>${g.desc}</p></div>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="sec light" id="achievements" style="padding-top:0">
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
            ${media(p.thumb || (p.gallery[0] && p.gallery[0].src), p.gallery[0] ? p.gallery[0].label : p.title)}
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
    const cover = p.cover || p.gallery[0];
    const rest = p.cover ? [] : p.gallery.slice(1);
    const list = a => `<ol>${a.map(x => `<li>${x}</li>`).join('')}</ol>`;
    const sectionsHTML = (p.sections || []).map((s, k) => `
      <section class="sec light pd-section">
        <div class="wrap">
          <div class="pd-sec-head reveal">
            <span class="num">0${k + 1}</span>
            <div><h2>${s.title}</h2><p>${s.desc}</p></div>
          </div>
          <div class="pd-grid ${s.layout || 'grid-2'}">${s.images.map(([f, l]) =>
            `<figure class="reveal-img">${media((p.imgBase || '') + f + '.jpg', l, 'zoomable')}<figcaption>${l}</figcaption></figure>`).join('')}</div>
        </div>
      </section>`).join('');

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

    ${sectionsHTML}
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

  /* ---------- lightbox (klik foto untuk memperbesar) ---------- */
  document.body.insertAdjacentHTML('beforeend', '<div class="lightbox" id="lightbox"><img alt=""><p></p><button aria-label="Close">✕</button></div>');
  const lbx = $('#lightbox');
  document.addEventListener('click', e => {
    const img = e.target.closest('.zoomable img');
    if (img) { lbx.querySelector('img').src = img.src; lbx.querySelector('p').textContent = img.alt; lbx.classList.add('open'); return; }
    if (e.target.closest('#lightbox')) lbx.classList.remove('open');
  });
  document.addEventListener('keydown', e => e.key === 'Escape' && lbx.classList.remove('open'));

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
