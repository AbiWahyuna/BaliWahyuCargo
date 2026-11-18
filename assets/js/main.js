const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const waLink = txt => `https://wa.me/${SITE.wa}` + (txt ? `?text=${encodeURIComponent(txt)}` : '');
const isHome = !!document.getElementById('services-grid');
const home = isHome ? '' : 'index.html';

/* ── Isi data situs ── */
document.querySelectorAll('[data-site]').forEach(el => el.textContent = SITE[el.dataset.site]);
document.querySelectorAll('[data-wa]').forEach(el => el.href = waLink(el.dataset.wa));
document.querySelectorAll('[data-mail]').forEach(el => el.href = 'mailto:' + SITE[el.dataset.mail]);

/* ── Mobile nav ── */
const mobEl = document.getElementById('mob');
if (mobEl) {
  const items = [['services','Services'],['about','About'],['testimonials','Testimonials'],['contact','Contact']];
  mobEl.innerHTML = `<div id="mob-bg"></div><div id="mob-content">
    <div class="mob-tag">Navigation</div><div class="mob-links">` +
    items.map((it,i) => `<a href="${home}#${it[0]}" class="mob-item"><div class="mob-item-left"><span class="mob-item-num">0${i+1}</span><span class="mob-item-label">${it[1]}</span></div><div class="mob-arrow">→</div></a>`).join('') +
    `</div><div class="mob-footer"><div><div class="mob-footer-loc-label">Location</div><div class="mob-footer-loc-val">Sukawati, Gianyar — Bali</div></div>
    <a href="${waLink()}" class="mob-wa" target="_blank" rel="noopener">WhatsApp</a></div></div>`;
}

/* ── Render layanan & testimoni ── */
const grid = document.getElementById('services-grid');
if (grid) grid.innerHTML = SERVICES.map(s => `
  <div class="service-card"><div class="service-card-top"></div>
    <div class="service-icon">${s.icon}</div><h3>${esc(s.nama)}</h3><p>${esc(s.singkat)}</p>
    <a href="service.html?slug=${s.slug}" class="service-link">Learn more →</a></div>`).join('');

const tg = document.getElementById('testi-grid');
if (tg) tg.innerHTML = TESTIMONIALS.map(t => `
  <div class="testi-card"><div class="testi-stars">${'★'.repeat(t.bintang)}</div><p>"${esc(t.isi)}"</p>
    <div class="testi-author"><div class="testi-avatar">${esc(t.nama[0].toUpperCase())}</div>
    <div><strong>${esc(t.nama)}</strong><span>${esc(t.asal)}</span></div></div></div>`).join('');

const fs = document.getElementById('footer-services');
if (fs) fs.innerHTML = SERVICES.map(s => `<li><a href="service.html?slug=${s.slug}">${esc(s.nama)}</a></li>`).join('');

/* ── Halaman detail ── */
const detail = document.getElementById('detail-root');
if (detail) {
  const slug = new URLSearchParams(location.search).get('slug');
  const s = SERVICES.find(x => x.slug === slug);
  if (!s) { location.replace('index.html'); }
  else {
    document.title = `${s.nama} — ${SITE.name}`;
    document.querySelectorAll('[data-s]').forEach(el => {
      const k = el.dataset.s;
      el.textContent = k === 'nama' ? s.nama : k === 'icon' ? s.icon : s.singkat;
    });
    document.getElementById('detail-body').innerHTML = s.lengkap.map(p => `<p>${esc(p)}</p>`).join('');
    document.getElementById('detail-others').innerHTML = SERVICES.filter(x => x.slug !== slug).map(o =>
      `<a href="service.html?slug=${o.slug}" class="detail-other-card"><div class="detail-other-icon">${o.icon}</div><span>${esc(o.nama)}</span></a>`).join('');
    document.getElementById('detail-wa').href = waLink(`Hello ${SITE.name}, I'm interested in ${s.nama}`);
  }
}

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 50 || !isHome);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile menu ── */
const hambBtn = document.getElementById('hambBtn');
const setMob = open => {
  mobEl.classList.toggle('on', open);
  hambBtn.classList.toggle('open', open);
  hambBtn.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
};
if (hambBtn && mobEl) {
  hambBtn.addEventListener('click', () => setMob(!mobEl.classList.contains('on')));
  mobEl.querySelectorAll('.mob-item').forEach(a => a.addEventListener('click', () => setMob(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMob(false); });
}

/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const t = a.getAttribute('href') !== '#' && document.querySelector(a.getAttribute('href'));
  if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' }); }
}));

/* ── Scroll reveal ── */
const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { const el = en.target; setTimeout(() => el.classList.add('is-visible'), Number(el.dataset.delay || 0)); io.unobserve(el); }
}), { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('[data-anim]').forEach(el => io.observe(el));
document.querySelectorAll('[data-stagger]').forEach(p => p.querySelectorAll(':scope > *').forEach((c, i) => {
  c.setAttribute('data-anim', ''); c.dataset.delay = i * 80; io.observe(c);
}));
