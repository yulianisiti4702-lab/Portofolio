/* =========================================================
   INTERAKSI TAMBAHAN (tidak perlu diubah)
   - efek 3D & tombol magnet (khusus mouse)
   - progres scroll, parallax, teks berjalan mengikuti scroll
   - sketch pad di halaman About
   ========================================================= */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const scroller = $('#snap') || window;
  const scrollTop = () => scroller === window ? window.scrollY : scroller.scrollTop;
  const viewH = () => innerHeight;

  /* ---------- 1. progres scroll ---------- */
  document.body.insertAdjacentHTML('beforeend', '<div class="progress" aria-hidden="true"><i></i></div>');
  const bar = $('.progress i');
  const maxScroll = () => scroller === window
    ? document.documentElement.scrollHeight - innerHeight
    : scroller.scrollHeight - scroller.clientHeight;

  /* ---------- 2. parallax & teks berjalan ---------- */
  const para = () => $$('[data-parallax]');
  const bands = () => $$('.sb-track');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const st = scrollTop(), m = maxScroll();
      bar.style.transform = `scaleX(${m > 0 ? st / m : 0})`;
      if (reduce) return;
      para().forEach(el => {
        const r = el.getBoundingClientRect();
        const k = parseFloat(el.dataset.parallax) || .12;
        const off = (r.top + r.height / 2 - viewH() / 2) * -k;
        el.style.setProperty('--py', off.toFixed(1) + 'px');
      });
      bands().forEach(t => {
        const dir = t.dataset.dir === 'right' ? 1 : -1;
        t.style.transform = `translateX(${(dir * st * .35) % (t.scrollWidth / 2) - (dir > 0 ? t.scrollWidth / 2 : 0)}px)`;
      });
    });
  };
  scroller.addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  setTimeout(onScroll, 300);

  // pasang parallax ke gambar-gambar besar
  $$('.page-hero .bg, .panel .bg, .pd-cover img, .who .stack .media img, .snap-photo img, .edu .photos img, .highlight .imgs .media:first-child img')
    .forEach((el, i) => { if (!el.dataset.parallax) el.dataset.parallax = el.matches('.bg') ? '.18' : '.08'; });

  if (reduce) return; // sisanya hanya efek gerak

  /* ---------- 3. efek 3D (tilt) ---------- */
  if (finePointer) {
    const tiltSel = '.sc-card, .stat, .tool, .card .media, .pd-grid figure .media';
    document.addEventListener('mousemove', e => {
      const el = e.target.closest(tiltSel);
      $$('.tilting').forEach(t => { if (t !== el) { t.classList.remove('tilting'); t.style.transform = ''; } });
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      el.classList.add('tilting');
      el.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
      el.style.setProperty('--gx', (x + .5) * 100 + '%'); el.style.setProperty('--gy', (y + .5) * 100 + '%');
    });

    /* ---------- 4. tombol magnet ---------- */
    const magSel = '.btn, .pill, .theme-toggle, .burger, .logo, .sc-tabs button, .filters button';
    document.addEventListener('mousemove', e => {
      const el = e.target.closest(magSel);
      $$('.magnet').forEach(t => { if (t !== el) { t.classList.remove('magnet'); t.style.translate = ''; } });
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      el.classList.add('magnet');
      el.style.translate = `${(dx * .25).toFixed(1)}px ${(dy * .35).toFixed(1)}px`;
    });

  }
})();

/* ---------- 6. sketch pad ---------- */
(function () {
  const wrap = document.querySelector('.sketch');
  if (!wrap) return;
  const cv = wrap.querySelector('canvas'), ctx = cv.getContext('2d');
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  let size = 4, tool = 'ink', drawing = false, last = null, history = [];
  const colorFor = t => t === 'ink' ? css('--fg') : t === 'gray' ? '#8E8E8E' : null;

  const fit = () => {
    const r = cv.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
    const snap = history.length ? history[history.length - 1] : null;
    cv.width = Math.round(r.width * dpr); cv.height = Math.round(r.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    if (snap) { const img = new Image(); img.onload = () => ctx.drawImage(img, 0, 0, r.width, r.height); img.src = snap; }
  };
  fit(); addEventListener('resize', fit);

  const pos = e => { const r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top, p: e.pressure || .5 }; };
  cv.addEventListener('pointerdown', e => {
    e.preventDefault(); cv.setPointerCapture(e.pointerId); drawing = true; last = pos(e);
    wrap.classList.add('used');
    ctx.globalCompositeOperation = tool === 'erase' ? 'destination-out' : 'source-over';
    ctx.strokeStyle = colorFor(tool) || '#000'; ctx.fillStyle = ctx.strokeStyle;
    ctx.beginPath(); ctx.arc(last.x, last.y, (tool === 'erase' ? size * 3 : size) / 2, 0, Math.PI * 2); ctx.fill();
  });
  cv.addEventListener('pointermove', e => {
    if (!drawing) return;
    const p = pos(e);
    const w = (tool === 'erase' ? size * 3 : size) * (e.pointerType === 'pen' ? .5 + p.p : 1);
    ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(last.x, last.y);
    const mx = (last.x + p.x) / 2, my = (last.y + p.y) / 2;
    ctx.quadraticCurveTo(last.x, last.y, mx, my); ctx.lineTo(p.x, p.y); ctx.stroke();
    last = p;
  });
  const end = () => { if (!drawing) return; drawing = false; history.push(cv.toDataURL()); if (history.length > 30) history.shift(); };
  cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', end); cv.addEventListener('pointerleave', end);

  wrap.querySelectorAll('[data-size]').forEach(b => b.onclick = () => {
    size = +b.dataset.size; wrap.querySelectorAll('[data-size]').forEach(x => x.classList.toggle('on', x === b));
  });
  wrap.querySelectorAll('[data-tool]').forEach(b => b.onclick = () => {
    tool = b.dataset.tool; wrap.querySelectorAll('[data-tool]').forEach(x => x.classList.toggle('on', x === b));
  });
  const redraw = () => {
    const r = cv.getBoundingClientRect(); ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, r.width, r.height);
    const s = history[history.length - 1];
    if (s) { const img = new Image(); img.onload = () => ctx.drawImage(img, 0, 0, r.width, r.height); img.src = s; }
    else wrap.classList.remove('used');
  };
  wrap.querySelector('[data-act="undo"]').onclick = () => { history.pop(); redraw(); };
  wrap.querySelector('[data-act="clear"]').onclick = () => { history = []; redraw(); };
  wrap.querySelector('[data-act="save"]').onclick = () => {
    const out = document.createElement('canvas'); out.width = cv.width; out.height = cv.height;
    const o = out.getContext('2d'); o.fillStyle = css('--bg') || '#fff'; o.fillRect(0, 0, out.width, out.height);
    o.drawImage(cv, 0, 0);
    const sig = Math.round(out.width / 22);
    o.font = `${sig}px Handflair, cursive`; o.fillStyle = css('--fg'); o.textAlign = 'right';
    o.fillText('drawn on yuli’s portfolio', out.width - sig * .8, out.height - sig * .8);
    const a = document.createElement('a'); a.download = 'doodle-for-yuli.png'; a.href = out.toDataURL('image/png'); a.click();
  };
})();
