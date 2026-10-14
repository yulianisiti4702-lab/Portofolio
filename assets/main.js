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
    ['Home', 'index.html', 'home', 'Start here'], ['About', 'about.html', 'about', 'Story, experience & education'],
    ['Projects', 'projects.html', 'projects', 'Selected works'], ['Contact', 'index.html#contact', 'contact', "Let's work together"]];
  document.body.insertAdjacentHTML('afterbegin', `
    <header class="top">
      <a href="index.html" class="logo">${PROFILE.nick}</a>
      <div class="top-right">
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span class="sun"></span></button>
        <button class="burger" id="openMenu" aria-label="Open menu">Menu <i></i></button>
      </div>
    </header>
    <div class="menu" id="menu" aria-hidden="true">
      <div class="menu-backdrop" data-close></div>
      <aside class="menu-panel" role="dialog" aria-label="Menu">
        <div class="mp-top">
          <span class="script mp-logo">${PROFILE.nick}</span>
          <button class="close" id="closeMenu" aria-label="Close menu"><span>Close</span><i aria-hidden="true"></i></button>
        </div>
        <nav>${links.map(([t, h, k, d], i) =>
          `<a href="${h}" data-key="${k}" class="${k === page || (page === 'project' && k === 'projects') ? 'active' : ''}" style="--i:${i}"><small>0${i + 1}</small><span class="mp-label"><b>${t}</b><em>${d}</em></span><span class="mp-arrow" aria-hidden="true">→</span></a>`).join('')}</nav>
        <div class="mp-foot">
          <p>${PROFILE.title} · ${PROFILE.location}</p>
          <a class="mp-mail" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
          <div class="socials">${socials()}</div>
        </div>
      </aside>
    </div>`);
  const root = document.documentElement;
  const isDark = () => root.dataset.theme === 'dark';
  const setTheme = t => { root.dataset.theme = t; try { localStorage.setItem('yuli-theme', t); } catch (e) {} };
  $('#themeToggle').onclick = () => setTheme(isDark() ? 'light' : 'dark');
  const menu = $('#menu');
  const toggleMenu = open => {
    menu.classList.toggle('open', open); menu.setAttribute('aria-hidden', !open);
    document.documentElement.classList.toggle('menu-open', open);
  };
  menu.querySelector('[data-close]').onclick = () => toggleMenu(false);
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

  /* ---------- kanvas doodle (dipakai di Home, setelah Contact) ---------- */
  const sketchHTML = () => `
        <div class="wrap sketch-grid">
        <div class="reveal">
          <div class="eyebrow">Your turn</div>
          <h2>Leave me a <span class="script">doodle</span></h2>
          <p>Drawing is where all my work begins. Grab the brush and sketch anything you like, then save it as a little souvenir.</p>
        </div>
        <div class="sketch reveal">
          <div class="sk-tools">
            <div class="sk-group"><button class="on" data-tool="ink" aria-label="Ink"><i class="sw ink"></i></button><button data-tool="gray" aria-label="Pencil gray"><i class="sw gray"></i></button><button data-tool="erase" aria-label="Eraser">Erase</button></div>
            <div class="sk-group"><button data-size="2" aria-label="Thin"><i class="dot" style="width:4px;height:4px"></i></button><button class="on" data-size="4" aria-label="Medium"><i class="dot" style="width:8px;height:8px"></i></button><button data-size="10" aria-label="Thick"><i class="dot" style="width:14px;height:14px"></i></button></div>
            <div class="sk-group"><button data-act="undo">Undo</button><button data-act="clear">Clear</button><button data-act="save" class="save">Save ↓</button></div>
          </div>
          <div class="sk-paper"><canvas aria-label="Drawing canvas"></canvas><span class="sk-hint script">draw here</span></div>
        </div>
      </div>`;

  /* ================= HOME ================= */
  function renderHome() {
    document.title = `${PROFILE.name} | Portfolio`;
    const years = new Date().getFullYear() - (PROFILE.experienceSince || 2023);
    const certCount = ACHIEVEMENTS.reduce((n, y) => n + y.items.length, 0);
    const showcaseProjects = byNewest(PROJECTS.filter(p => p.thumb));
    const ic = {
      arrow: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17 17 7M8 7h9v9"/></svg>',
      grid: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
      award: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/></svg>',
      pen: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/></svg>'
    };

    app.innerHTML = `
    <div class="snap" id="snap">
      <section class="panel dark pf-hero" id="home" data-i="0">
        <div class="pf-stage" id="pfStage" aria-label="Portfolio">
          <div class="pf-word pf-port" data-depth="-1"><span>port</span></div>
          <div class="pf-word pf-folio" data-depth="1"><span>folio</span></div>
          <div class="pf-meta pf-m1"><span>an ordinary</span><em>creative projects showcase</em></div>
          <div class="pf-meta pf-m2"><span>&copy; ${new Date().getFullYear()}</span><em>${PROFILE.name.toLowerCase()}</em></div>
        </div>
        <div class="pf-bottom wrap">
          <div class="pf-intro">
            <div class="pf-role">${PROFILE.name} <i></i> ${PROFILE.title}</div>
            <div class="typed" aria-label="Turning stories into ${PROFILE.typing.join(', ')}">Turning stories into <span id="typed"></span><i class="caret"></i></div>
          </div>
          <div class="actions">
            <a class="btn on-dark solid-dark" href="${PROFILE.cv}" target="_blank" rel="noopener">Download CV</a>
            <a class="btn on-dark" href="#contact" data-goto="contact">Contact Me</a>
          </div>
        </div>
      </section>

      <section class="panel dark jr" id="about" data-i="1">
        <div class="content wrap">
          <div class="eyebrow jr-eyebrow reveal">01 — About</div>
          <div class="jr-head reveal" id="jrHead">
            <div class="jr-row r1"><span class="jr-w" data-w="The">The</span> <span class="jr-w grad script" data-w="Creative">Creative</span> <span class="jr-w" data-w="Journey">Journey</span></div>
            <div class="jr-row r2"><span class="jr-w outline" data-w="Behind">Behind</span></div>
            <div class="jr-row r3"><span class="jr-w" data-w="the">the</span><span class="jr-w grad script jr-target" data-w="Designs">Designs</span></div>
            <div class="jr-photo">${media(PROFILE.photo, 'Foto profil', '', true)}</div>
            <div class="jr-sel" id="jrSel" aria-hidden="true">
              <b class="jr-tag"><span>Designs</span><small></small></b>
              <i></i><i></i><i></i><i></i>
              <svg class="jr-cur" viewBox="0 0 24 24" width="26" height="26"><path d="M4 2l16 9-7 2-3 7z" fill="#fff" stroke="#111" stroke-width="1.2" stroke-linejoin="round"/></svg>
            </div>
          </div>
          <p class="jr-lead reveal">${PROFILE.snapshot}</p>
          <div class="actions jr-actions reveal">
            <a class="btn on-dark solid-dark" href="${PROFILE.cv}" target="_blank" rel="noopener">Download CV</a>
            <a class="btn on-dark" href="about.html">More about me</a>
          </div>
          <div class="stats">
            <a class="stat reveal" href="projects.html"><span class="ico">${ic.grid}</span><b data-count="${PROJECTS.length}">0</b><small>Selected projects</small><em>Brand, product & book work</em><span class="go">${ic.arrow}</span></a>
            <a class="stat reveal" href="about.html#achievements"><span class="ico">${ic.award}</span><b data-count="${certCount}">0</b><small>Certifications & awards</small><em>Adobe, BNSP & design challenge</em><span class="go">${ic.arrow}</span></a>
            <a class="stat reveal" href="about.html#experience"><span class="ico">${ic.pen}</span><b data-count="${years}" data-suffix="+">0</b><small>Years in design</small><em>Agency, brand & publishing</em><span class="go">${ic.arrow}</span></a>
          </div>
        </div>
      </section>

      <section class="panel dark brands" id="brands" data-i="2">
        <div class="content wrap">
          <div class="eyebrow reveal">02 — Brands</div>
          <h2 class="br-title reveal">the <span class="script grad">brands</span> along the journey</h2>
          <div class="br-grid reveal" id="brGrid">${BRANDS.map((b, k) => `
            <a class="br-item br-${b.style}" ${b.link ? `href="${b.link}"` : 'tabindex="0"'} data-role="${b.role}" data-year="${b.year}" style="--k:${k}"><span>${b.name}</span></a>`).join('')}</div>
          <div class="br-tip" id="brTip" aria-hidden="true"><b></b><small></small></div>
          <p class="br-hint reveal">Hover a brand to see what I did there</p>
        </div>
      </section>

      <section class="panel light showcase" id="projects" data-i="3">
        <div class="content wrap">
          <div class="sc-head reveal">
            <div class="eyebrow">03 — Works</div>
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

      <section class="panel dark contact-panel" id="contact" data-i="4">
        <div class="content wrap contact-grid">
          <div class="reveal">
            <div class="eyebrow">04 — Contact</div>
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
      </section>

      <section class="panel light sketch-sec doodle-panel" id="doodle" data-i="5">
        ${sketchHTML()}
        <footer>© 2026 ${PROFILE.name.toUpperCase()}</footer>
      </section>
    </div>
    <div class="dots" id="dots">${[0, 1, 2, 3, 4, 5].map(i => `<button data-goto="${i}" aria-label="Section ${i + 1}"></button>`).join('')}</div>
    <div class="scroll-hint" id="hint">Scroll</div>`;

    const snap = $('#snap'), panels = $$('.panel'), dots = $$('#dots button');
    const go = i => { const el = isNaN(i) ? $('#' + i) : panels[i]; if (el) snap.scrollTo({ top: el.offsetTop, behavior: 'smooth' }); };
    $$('[data-goto]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); go(b.dataset.goto); }));
    const setActive = () => {
      const mid = snap.scrollTop + innerHeight * .45;
      let i = 0; panels.forEach((p, k) => { if (p.offsetTop <= mid) i = k; });
      panels.forEach((p, k) => p.classList.toggle('active', k === i));
      dots.forEach((d, k) => d.classList.toggle('on', k === i));
      $('#hint').style.opacity = snap.scrollTop > 40 || innerWidth < 760 ? 0 : 1;
    };
    snap.addEventListener('scroll', setActive, { passive: true }); setActive();
    $$('#menu a[data-key="contact"], #menu a[data-key="home"]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault(); toggleMenu(false); setTimeout(() => go(a.dataset.key === 'contact' ? 'contact' : 0), 500);
    }));
    if (location.hash === '#contact') setTimeout(() => { snap.scrollTop = $('#contact').offsetTop; }, 50);

    /* hero "port / folio": kata bergeser mengikuti mouse, kilau gradasi ikut bergerak */
    const stage = $('#pfStage');
    if (stage && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      let tx = 0, ty = 0, cx = 0, cy = 0;
      stage.closest('.panel').addEventListener('mousemove', e => {
        const r = stage.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - .5; ty = (e.clientY - r.top) / r.height - .5;
      });
      stage.closest('.panel').addEventListener('mouseleave', () => { tx = 0; ty = 0; });
      const loop = () => {
        cx += (tx - cx) * .08; cy += (ty - cy) * .08;
        $$('.pf-word', stage).forEach(w => {
          const d = +w.dataset.depth;
          w.style.transform = `translate(${(cx * 46 * d).toFixed(1)}px, ${(cy * 26 * d).toFixed(1)}px)`;
        });
        stage.style.setProperty('--gx', (50 + cx * 60).toFixed(1) + '%');
        requestAnimationFrame(loop);
      };
      loop();
    }

    /* "The Creative Journey": kotak seleksi ala Figma pindah ke kata yang disorot */
    const head = $('#jrHead'), sel = $('#jrSel');
    if (head && sel) {
      const target = $('.jr-target', head);
      const place = w => {
        const hr = head.getBoundingClientRect(), r = w.getBoundingClientRect();
        const pad = 10;
        sel.style.left = (r.left - hr.left - pad) + 'px'; sel.style.top = (r.top - hr.top - pad / 2) + 'px';
        sel.style.width = (r.width + pad * 2) + 'px'; sel.style.height = (r.height + pad) + 'px';
        $('.jr-tag span', sel).textContent = w.dataset.w;
        $('.jr-tag small', sel).textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`;
        $$('.jr-w', head).forEach(x => x.classList.toggle('picked', x === w));
      };
      $$('.jr-w', head).forEach(w => { w.addEventListener('mouseenter', () => place(w)); w.addEventListener('click', () => place(w)); });
      head.addEventListener('mouseleave', () => place(target));
      const init = () => place(target);
      document.fonts && document.fonts.ready.then(init); addEventListener('resize', init); setTimeout(init, 400); init();
    }

    /* "the brands along the journey": keterangan muncul saat brand disorot */
    const grid = $('#brGrid'), tip = $('#brTip');
    if (grid && tip) {
      const show = it => {
        const gr = grid.parentElement.getBoundingClientRect(), r = it.getBoundingClientRect();
        $('b', tip).textContent = it.dataset.role; $('small', tip).textContent = it.dataset.year + (it.getAttribute('href') ? ' · View →' : '');
        tip.style.left = (r.left - gr.left + r.width / 2) + 'px'; tip.style.top = (r.bottom - gr.top + 6) + 'px';
        tip.classList.add('on'); grid.classList.add('dim'); it.classList.add('hot');
      };
      const hide = it => { tip.classList.remove('on'); grid.classList.remove('dim'); it.classList.remove('hot'); };
      $$('.br-item', grid).forEach(it => {
        it.addEventListener('mouseenter', () => show(it)); it.addEventListener('focus', () => show(it));
        it.addEventListener('mouseleave', () => hide(it)); it.addEventListener('blur', () => hide(it));
      });
    }

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
  // tombol untuk membuka dokumen (ijazah, transkrip, sertifikat) di galeri
  function docBtn(files, label, cap, group) {
    files = files || [];
    if (!files.length) return '';
    return files.map((f, i) => `<button class="doc-btn" data-view="${f}" data-cap="${cap}${files.length > 1 ? ' · page ' + (i + 1) : ''}" data-group="${group}"${i ? ' hidden' : ''}>${label} <i aria-hidden="true">↗</i></button>`).join('');
  }

  // tombol "View certificate" (bisa lebih dari 1 halaman, misal sertifikat + score report)
  function certBtn(files, title, group, caps, extra = '', label = 'View certificate', unit = 'pages') {
    files = [].concat(files || []);
    if (!files.length) return '';
    return files.map((f, i) => `<button class="doc-btn sm ${extra}" data-view="${f}" data-cap="${title}${caps && caps[i] ? ' · ' + caps[i] : ''}" data-group="${group}"${i ? ' hidden' : ''}>${label}${files.length > 1 ? ` <small>${files.length} ${unit}</small>` : ''} <i aria-hidden="true">↗</i></button>`).join('');
  }

  // tombol "lihat hasil project" di setiap pengalaman kerja
  function expLinks(ids) {
    const list = (ids || []).map(id => PROJECTS.find(p => p.id === id)).filter(Boolean);
    if (!list.length) return '';
    return `<div class="exp-links">${list.map(p => `<a class="exp-link" href="project.html?id=${p.id}"><span>View project</span><b>${p.title.replace(/ — .*/, '')}</b><i aria-hidden="true">→</i></a>`).join('')}</div>`;
  }

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
          ${expLinks(x.projects)}
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
        <div class="sec-title reveal"><h2 class="ov"><span class="ov-a">Skills &amp;</span><span class="ov-b script grad">Expertise</span></h2>
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
        <div class="sec-title reveal"><h2 class="ov"><span class="ov-a">Working</span><span class="ov-b script grad">Experience</span></h2></div>
        <div class="exp">${exp}</div>
        ${EXPERIENCE.length > 3 ? `<button class="btn more-btn" id="moreExp" style="background:none;cursor:pointer;font-family:inherit">View more experience</button>` : ''}
      </div>
    </section>

    <section class="sec dark">
      <div class="wrap">
        <div class="sec-title reveal"><h2 class="ov"><span class="ov-a">Volunteer</span><span class="ov-b script grad">Organization</span></h2>
          <p>Where I first learned to design for real audiences and real goals.</p></div>
        <div class="vol reveal">${VOLUNTEER.map(v => `
          <div class="vol-item"><div class="date">${v.date}</div><h3>${v.org}</h3><h4>${v.role}</h4><p>${v.desc}</p>${certBtn(v.cert, v.org, 'vol-certs', null, 'on-dark')}${expLinks(v.projects)}</div>`).join('')}</div>
      </div>
    </section>

    <section class="sec light">
      <div class="wrap">
        <div class="sec-title reveal"><h2 class="ov split"><span class="ov-a">Edu</span><span class="ov-c grad">cation</span></h2>
          <p>Get to know more about my educational background.</p></div>
        <nav class="edu-nav reveal" aria-label="Education sections">
          <a href="#edu-upi"><small>01</small>S1 · UPI</a>
          ${(EDUCATION.programs || []).map((g, k) => `<a href="#edu-${g.id}"><small>0${k + 2}</small>${g.tab}</a>`).join('')}
        </nav>
        <div class="edu" id="edu-upi">
          <div class="reveal">
            <div class="years">${EDUCATION.years}</div>
            <h3>${EDUCATION.school}</h3>
            <h4>${EDUCATION.degree}</h4>
            <div class="photos">${EDUCATION.photos.map((p, i) => media(p, 'Foto kampus ' + (i + 1), 'reveal-img')).join('')}</div>
          </div>
          <div class="reveal">
            ${EDUCATION.text.map(p => `<p>${p}</p>`).join('')}
            <span class="gpa">${EDUCATION.gpa}</span>
            <div class="doc-btns">
              ${docBtn(EDUCATION.diploma, 'View diploma', 'Diploma (Ijazah)', 'diploma')}
              ${docBtn(EDUCATION.transcript, 'View transcript', 'Academic transcript', 'transcript')}
            </div>
            ${!(EDUCATION.diploma || []).length || !(EDUCATION.transcript || []).length ? `<p style="margin-top:10px">${NOTE('tombol ijazah & transkrip muncul setelah file-nya dimasukkan')}</p>` : ''}
            ${(EDUCATION.programs || []).map(g => `
              <div class="edu-prog" id="edu-${g.id}"><small>${g.date}</small><h4>${g.title}</h4><b>${g.org}</b><p>${g.desc}</p>${g.cert || g.courses ? `<div class="doc-btns">${certBtn(g.cert, g.title.replace(/ ·.*/, ''), 'cert-' + g.id, g.certCaps)}${certBtn(g.courses, 'BISA Design Academy', 'courses-' + g.id, g.courseCaps, '', 'Course certificates', 'certificates')}</div>` : ''}${expLinks(g.projects)}</div>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="sec light" id="achievements" style="padding-top:0">
      <div class="wrap">
        <div class="sec-title reveal"><h2 class="ov"><span class="ov-a">Certified</span><span class="ov-b script grad">Achievements</span></h2></div>
        ${ACHIEVEMENTS.map(y => `
          <div class="ach-year reveal"><h3>${y.year}</h3><div class="ach-list">${y.items.map(a => `
            <div class="ach"><div><h4>${a.title}</h4><p>${a.sub}</p>${certBtn(a.cert, a.title, 'certs', a.certCaps)}</div><span class="d">${a.date}</span></div>`).join('')}
          </div></div>`).join('')}
      </div>
    </section>

    <section class="sec dark quote">
      <div class="wrap reveal">
        <blockquote>Have a story to tell?</blockquote>
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
  // urutkan project dari yang terbaru ke yang terlama (berdasarkan tanggal selesai)
  function projDate(p) {
    const M = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, mei: 5, jun: 6, jul: 7, aug: 8, agu: 8, sep: 9, oct: 10, okt: 10, nov: 11, dec: 12, des: 12 };
    const txt = [...(p.meta || []), p.year || ''].join(' | ');
    if (/present/i.test(txt)) return 999999;
    const range = (p.meta || []).find(m => /\d{4}/.test(m) && /–|-/.test(m)) || p.year || '';
    const end = String(range).split(/–|-/).pop().trim();
    const y = (end.match(/\d{4}/) || [])[0];
    if (!y) return 0;
    const mo = M[(end.match(/[A-Za-z]{3}/) || [''])[0].toLowerCase()] || 6; // hanya tahun → anggap pertengahan tahun
    return +y * 100 + mo;
  }
  const byNewest = list => list.map((p, i) => [p, i]).sort((a, b) => projDate(b[0]) - projDate(a[0]) || a[1] - b[1]).map(x => x[0]);

  function renderProjects() {
    document.title = `Projects | ${PROFILE.name}`;
    const f = PROJECTS.find(p => p.featured) || PROJECTS[0];
    const g = f.gallery || [];
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
        <div class="sec-title reveal"><h2>Selected <span class="script">works</span></h2></div>
        <div class="filters reveal">
          <button class="on" data-f="all">All</button>
          ${CATEGORIES.map(c => `<button data-f="${c.key}">${c.label}</button>`).join('')}
        </div>
        <div class="grid">${byNewest(PROJECTS).map(p => `
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
    const ORDER = byNewest(PROJECTS);
    const i = ORDER.findIndex(p => p.id === id);
    if (i < 0) { location.replace('projects.html'); return; }
    const p = ORDER[i];
    const prev = ORDER[(i - 1 + ORDER.length) % ORDER.length];
    const next = ORDER[(i + 1) % ORDER.length];
    document.title = `${p.title} | ${PROFILE.name}`;
    const cover = p.cover || p.gallery[0];
    const rest = p.cover ? [] : p.gallery.slice(1);
    const list = a => `<ol>${a.map(x => `<li>${x}</li>`).join('')}</ol>`;
    // galeri yang digeser ke samping (layout: "scroll"), bisa dikelompokkan per jenis (groups)
    const hScroll = (s, p) => {
      // groups hanya dipakai untuk urutan (per jenis sepatu); tampilannya satu baris foto tanpa label
      const imgs = s.groups ? s.groups.flatMap(g => g.images) : s.images;
      const fig = ([f, l]) => `<figure>${media((p.imgBase || '') + f + '.jpg', l, 'zoomable').replace('loading="lazy"', 'decoding="async"')}<figcaption>${l}</figcaption></figure>`;
      return `<div class="hs reveal">
        <div class="hs-track" tabindex="0" aria-label="${s.title} — scroll sideways">${imgs.map(fig).join('')}</div>
        <div class="hs-ctrl"><button type="button" class="hs-btn prev" aria-label="Scroll left">←</button><div class="hs-bar"><i></i></div><span class="hs-count">${imgs.length} images</span><button type="button" class="hs-btn next" aria-label="Scroll right">→</button></div>
      </div>`;
    };

    // galeri kipas 3D (layout: "fan")
    const fanHTML = (s, p) => {
      const imgs = s.groups ? s.groups.flatMap(g => g.images) : s.images;
      return `<div class="fan reveal" tabindex="0" aria-label="${s.title} — use arrow keys">
        <div class="fan-stage">${imgs.map(([f, l], n) => `<figure class="fan-card" data-n="${n}">${media((p.imgBase || '') + f + '.jpg', l, 'zoomable').replace('loading="lazy"', 'decoding="async"')}</figure>`).join('')}</div>
        <div class="fan-ctrl"><button type="button" class="hs-btn fan-prev" aria-label="Previous">←</button><div class="fan-info"><b class="fan-cap"></b><span class="fan-count"></span></div><button type="button" class="hs-btn fan-next" aria-label="Next">→</button></div>
      </div>`;
    };

    const sectionsHTML = (p.sections || []).map((s, k) => `
      <section class="sec light pd-section" id="sec-${k}">
        <div class="wrap">
          <div class="pd-sec-head reveal">
            <span class="num">${String(k + 1).padStart(2, "0")}</span>
            <div><h2>${s.title}</h2><p>${s.desc}</p></div>
          </div>
          ${s.subs ? s.subs.map((u, n) => `
            <div class="pd-sub reveal">
              <div class="pd-sub-head"><span>${String(k + 1).padStart(2, '0')}.${n + 1}</span><div><h3>${u.title}</h3><p>${u.desc}</p></div></div>
              ${hScroll(u, p)}
            </div>`).join('') : s.layout === 'fan' ? fanHTML(s, p) : s.layout === 'scroll' ? hScroll(s, p) : `<div class="pd-grid ${s.layout || 'grid-2'}">${s.images.map(([f, l]) =>
            `<figure class="reveal-img">${media((p.imgBase || '') + f + '.jpg', l, 'zoomable')}<figcaption>${l}</figcaption></figure>`).join('')}</div>`}
        </div>
      </section>`).join('');

    const nn = String(i + 1).padStart(2, '0');
    const metaCols = [['Role', p.meta[0]], ['Type', p.meta[1]], ['Period', p.meta[2] || p.year], ['Category', catLabel(p.cat)]].filter(x => x[1]);
    app.innerHTML = `
    <section class="st-cover">
      <div class="st-strip wrap">
        <div><b>Story ${nn} — ${p.title.replace(/ — .*/, '')}</b><span>${(p.tags || []).join(' // ')}</span></div>
        <span>&copy; ${PROFILE.name}</span>
      </div>
      <div class="wrap st-grid">
        <div class="st-left reveal">
          <a class="back" href="projects.html">← All projects</a>
          <div class="st-load" id="stLoad">
            <div class="st-load-top"><span class="st-chip"></span><b>${p.title.replace(/ — .*/, '')}</b><i>↗</i></div>
            <small>${catLabel(p.cat)}</small>
            <div class="st-bar"><i></i></div>
            <div class="st-load-foot"><span class="st-msg">Opening project…</span><span class="st-pct">0%</span></div>
          </div>
          <div class="st-kicker script grad">Story ${nn}</div>
          <h1 class="st-title">${p.title}</h1>
          <p class="intro">${p.intro}</p>
          <div class="st-meta">${metaCols.map(([k, v]) => `<div><small>${k}</small><b>${v}</b></div>`).join('')}</div>
        </div>
        <div class="st-right reveal">
          <div class="st-card">${cover ? media(cover.src, cover.label, 'zoomable') : media('', 'Cover project', '', true)}</div>
          <a class="st-down" href="#st-body" aria-label="Scroll to project">↓</a>
        </div>
      </div>
    </section>
    <div id="st-body"></div>

    ${p.obj ? `
    <section class="sec light">
      ${p.stats ? `<div class="wrap st-stats reveal">${p.stats.map(([n, l]) => `<div><b data-num="${n}">${n}</b><small>${l}</small></div>`).join('')}</div>` : ''}
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

    ${(p.sections || []).length > 1 ? `<nav class="pd-nav" id="pdNav" aria-label="Project sections"><div class="wrap">${p.sections.map((x, k) => `<a href="#sec-${k}" data-k="${k}"><small>${String(k + 1).padStart(2, "0")}</small>${x.title}</a>`).join('')}</div></nav>` : ''}
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

  /* ---------- navigasi sub-kategori di halaman project ---------- */
  const pdNav = $('#pdNav');
  if (pdNav) {
    const navLinks = $$('a', pdNav), secs = $$('.pd-section');
    navLinks.forEach(a => a.addEventListener('click', e => {
      e.preventDefault(); const t = $(a.getAttribute('href'));
      scrollTo({ top: t.offsetTop - pdNav.offsetHeight - parseFloat(getComputedStyle(pdNav).top) - 10, behavior: 'smooth' });
    }));
    const navTop = () => pdNav.getBoundingClientRect().top;
    addEventListener('scroll', () => {
      pdNav.classList.toggle('stuck', navTop() <= parseFloat(getComputedStyle(pdNav).top) + 0.5);
      let cur = -1; secs.forEach((s2, k) => { if (s2.getBoundingClientRect().top < innerHeight * .4) cur = k; });
      navLinks.forEach((a, k) => a.classList.toggle('on', k === cur));
      const on = navLinks[cur]; if (on && pdNav.classList.contains('stuck')) {
        const w = $('.wrap', pdNav); const l = on.offsetLeft - w.clientWidth / 2 + on.clientWidth / 2;
        if (Math.abs(w.scrollLeft - l) > 40) w.scrollTo({ left: l, behavior: 'smooth' });
      }
    }, { passive: true });
  }

  /* ---------- kartu "loading project" + scroll ke isi ---------- */
  const ld = $('#stLoad');
  if (ld) {
    const pct = $('.st-pct', ld), bar = $('.st-bar i', ld), t0 = performance.now(), dur = matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 1600;
    const step = t => {
      const k = Math.min(1, (t - t0) / dur), v = Math.round(100 * (1 - Math.pow(1 - k, 3)));
      pct.textContent = v + '%'; bar.style.width = v + '%';
      if (k < 1) requestAnimationFrame(step); else { ld.classList.add('done'); $('.st-msg', ld).textContent = 'Project ready — scroll ↓'; }
    };
    setTimeout(() => requestAnimationFrame(step), 500);
    ld.addEventListener('click', () => $('#st-body').scrollIntoView({ behavior: 'smooth' }));
  }
  $$('.st-down').forEach(a => a.addEventListener('click', e => { e.preventDefault(); $('#st-body').scrollIntoView({ behavior: 'smooth' }); }));

  /* ---------- angka besar menghitung naik ---------- */
  const so = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return; so.unobserve(en.target);
    const el = en.target, raw = el.dataset.num, m = raw.match(/[\d.]+/);
    if (!m) return;
    const end = parseFloat(m[0]), dec = (m[0].split('.')[1] || '').length, pre = raw.slice(0, m.index), suf = raw.slice(m.index + m[0].length), t0 = performance.now();
    const step = t => { const k = Math.min(1, (t - t0) / 1300), v = end * (1 - Math.pow(1 - k, 3));
      el.textContent = pre + v.toFixed(dec) + suf; if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), { threshold: .5 });
  $$('[data-num]').forEach(el => so.observe(el));

  /* ---------- galeri kipas 3D ---------- */
  $$('.fan').forEach(fan => {
    const cards = $$('.fan-card', fan), n = cards.length; let cur = 0;
    const lay = () => {
      const w = fan.clientWidth, sp = Math.min(w * .17, 230);
      cards.forEach((c, k) => {
        let d = k - cur; if (d > n / 2) d -= n; if (d < -n / 2) d += n;
        const a = Math.abs(d);
        c.style.transform = `translateX(${d * sp}px) translateZ(${-a * 120}px) rotateY(${-d * 22}deg) scale(${1 - Math.min(a, 4) * .06})`;
        c.style.zIndex = 100 - a; c.style.opacity = a > 3 ? 0 : 1 - a * .12;
        c.style.pointerEvents = a > 3 ? 'none' : ''; c.classList.toggle('on', d === 0);
      });
      const img = $('img', cards[cur]);
      $('.fan-cap', fan).textContent = img ? img.alt : '';
      $('.fan-count', fan).textContent = String(cur + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
    };
    const go = k => { cur = (k + n) % n; lay(); };
    $('.fan-prev', fan).onclick = () => go(cur - 1); $('.fan-next', fan).onclick = () => go(cur + 1);
    cards.forEach((c, k) => c.addEventListener('click', e => { if (k !== cur) { e.stopPropagation(); e.preventDefault(); go(k); } }, true));
    fan.addEventListener('keydown', e => { if (e.key === 'ArrowRight') go(cur + 1); if (e.key === 'ArrowLeft') go(cur - 1); });
    let sx = null, moved = false;
    const st = $('.fan-stage', fan);
    st.addEventListener('pointerdown', e => { sx = e.clientX; moved = false; });
    addEventListener('pointerup', e => { if (sx === null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 40) { moved = true; go(cur + (dx < 0 ? 1 : -1)); } });
    st.addEventListener('click', e => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
    st.addEventListener('dragstart', e => e.preventDefault());
    addEventListener('resize', lay); lay();
  });

  /* ---------- galeri geser ke samping ---------- */
  $$('.hs').forEach(hs => {
    const tr = $('.hs-track', hs), bar = $('.hs-bar i', hs), chipsB = $$('.hs-chips button', hs), labels = $$('.hs-label', hs);
    const upd = () => {
      const m = tr.scrollWidth - tr.clientWidth;
      bar.style.width = (m > 0 ? Math.max(8, (tr.clientWidth / tr.scrollWidth) * 100) : 100) + '%';
      bar.style.marginLeft = (m > 0 ? (tr.scrollLeft / tr.scrollWidth) * 100 : 0) + '%';
      $('.hs-btn.prev', hs).disabled = tr.scrollLeft < 4; $('.hs-btn.next', hs).disabled = tr.scrollLeft > m - 4;
      if (labels.length) {
        let cur = 0; labels.forEach((l, i) => { if (l.offsetLeft - tr.offsetLeft <= tr.scrollLeft + 40) cur = i; });
        chipsB.forEach((b, i) => b.classList.toggle('on', i === cur));
      }
    };
    tr.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd);
    $$('img', tr).forEach(im => im.addEventListener('load', upd)); upd();
    $('.hs-btn.prev', hs).onclick = () => tr.scrollBy({ left: -tr.clientWidth * .8, behavior: 'smooth' });
    $('.hs-btn.next', hs).onclick = () => tr.scrollBy({ left: tr.clientWidth * .8, behavior: 'smooth' });
    chipsB.forEach((b, i) => b.onclick = () => tr.scrollTo({ left: labels[i].offsetLeft - tr.offsetLeft, behavior: 'smooth' }));
    tr.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); tr.scrollBy({ left: 320, behavior: 'smooth' }); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); tr.scrollBy({ left: -320, behavior: 'smooth' }); }
    });
    // geser dengan mouse (klik-tahan lalu tarik)
    let down = null, moved = false;
    tr.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse' || e.button) return; down = { x: e.clientX, l: tr.scrollLeft }; moved = false; });
    addEventListener('pointermove', e => {
      if (!down) return; const dx = e.clientX - down.x;
      if (Math.abs(dx) > 6) { moved = true; tr.classList.add('dragging'); }
      if (moved) tr.scrollLeft = down.l - dx;
    });
    addEventListener('pointerup', () => { if (!down) return; down = null; setTimeout(() => tr.classList.remove('dragging'), 0); });
    tr.addEventListener('click', e => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
    tr.addEventListener('dragstart', e => e.preventDefault());
  });

  /* ---------- menu sub kategori Education ---------- */
  $$('.edu-nav a').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); const t = $(a.getAttribute('href')); if (!t) return;
    $$('.edu-nav a').forEach(x => x.classList.toggle('on', x === a));
    t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (t.classList.contains('edu-prog')) { t.classList.remove('flash'); void t.offsetWidth; t.classList.add('flash'); }
  }));

  /* ---------- reveal on scroll ---------- */
  const ro = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal, .reveal-img, .line-mask').forEach(el => ro.observe(el));

  /* ---------- galeri layar penuh (klik foto untuk memperbesar) ---------- */
  document.body.insertAdjacentHTML('beforeend', `
    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
      <button class="lb-close" aria-label="Close">✕</button>
      <button class="lb-nav prev" aria-label="Previous image">←</button>
      <figure><img alt=""><figcaption><span class="lb-cap"></span><span class="lb-count"></span></figcaption></figure>
      <button class="lb-nav next" aria-label="Next image">→</button>
    </div>`);
  const lbx = $('#lightbox'), lbImg = $('#lightbox img');
  let lbList = [], lbIdx = 0;
  const lbShow = i => {
    lbIdx = (i + lbList.length) % lbList.length;
    const im = lbList[lbIdx];
    lbx.classList.add('swap');
    setTimeout(() => {
      lbImg.src = im.src; lbImg.alt = im.alt;
      $('.lb-cap', lbx).textContent = im.alt;
      $('.lb-count', lbx).textContent = `${lbIdx + 1} / ${lbList.length}`;
      lbx.classList.remove('swap');
    }, 160);
    lbx.classList.toggle('single', lbList.length < 2);
  };
  const lbClose = () => lbx.classList.remove('open');
  document.addEventListener('click', e => {
    const img = e.target.closest('.zoomable img');
    if (img) { lbList = $$('.zoomable img'); lbx.classList.remove('is-doc'); lbx.classList.add('open'); lbShow(lbList.indexOf(img)); return; }
    const doc = e.target.closest('[data-view]');
    if (doc) {
      const grp = $$(`[data-view][data-group="${doc.dataset.group}"]`);
      lbList = grp.map(b => ({ src: b.dataset.view, alt: b.dataset.cap }));
      lbx.classList.toggle('is-doc', doc.dataset.group !== 'certs'); lbx.scrollTop = 0;
      lbx.classList.add('open'); lbShow(grp.indexOf(doc)); return;
    }
    if (!lbx.classList.contains('open')) return;
    if (e.target.closest('.lb-nav.prev')) return lbShow(lbIdx - 1);
    if (e.target.closest('.lb-nav.next')) return lbShow(lbIdx + 1);
    if (e.target.closest('.lb-close') || !e.target.closest('figure')) lbClose();
  });
  document.addEventListener('keydown', e => {
    if (!lbx.classList.contains('open')) return;
    if (e.key === 'Escape') lbClose();
    if (e.key === 'ArrowRight') lbShow(lbIdx + 1);
    if (e.key === 'ArrowLeft') lbShow(lbIdx - 1);
  });
  let sx = null;
  lbx.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  lbx.addEventListener('touchend', e => {
    if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 50) lbShow(lbIdx + (dx < 0 ? 1 : -1));
  });

  /* ---------- layar pembuka & transisi halaman ---------- */
  const curtain = $('#curtain');
  const ico = {
    pen: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/></svg>',
    user: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>',
    image: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>',
    globe: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>'
  };
  let firstVisit = true;
  try { firstVisit = !sessionStorage.getItem('yuli-visited'); sessionStorage.setItem('yuli-visited', '1'); } catch (e) {}
  if (firstVisit) {
    const site = location.hostname && location.hostname.includes('github.io') ? location.hostname : 'yulianisiti4702-lab.github.io';
    curtain.classList.add('welcome-on');
    curtain.innerHTML = `
      <div class="welcome">
        <div class="w-icons"><span>${ico.pen}</span><span>${ico.user}</span><span>${ico.image}</span></div>
        <h1><span class="w-l"><span>Welcome</span></span> <span class="w-l"><span>to</span></span> <span class="w-l"><span>my</span></span><br>
            <span class="w-l script"><span>Portfolio Website</span></span></h1>
        <div class="w-url">${ico.globe}<b id="wurl"></b><i class="caret"></i></div>
        <small class="w-skip">Click anywhere to enter</small>
      </div>`;
    requestAnimationFrame(() => curtain.classList.add('show'));
    const urlEl = $('#wurl'); let k = 0;
    const type = () => { urlEl.textContent = site.slice(0, ++k); if (k < site.length) setTimeout(type, 25); };
    setTimeout(type, 1000);
    let done = false;
    const enter = () => { if (done) return; done = true; curtain.classList.add('up'); setTimeout(() => { curtain.classList.remove('welcome-on'); curtain.innerHTML = '<span></span>'; }, 900); };
    const timer = setTimeout(enter, 3000); // layar Welcome hilang di detik ke-3
    curtain.addEventListener('click', () => { clearTimeout(timer); enter(); });
    document.addEventListener('keydown', function k1(e) { if (['Enter', ' ', 'Escape'].includes(e.key)) { clearTimeout(timer); enter(); document.removeEventListener('keydown', k1); } });
  } else {
    curtain.querySelector('span').textContent = ''; setTimeout(() => curtain.classList.add('up'), 80);
  }
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
