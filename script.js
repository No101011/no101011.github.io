/* 交互：主题切换 / 滚动显现 / 头部描边 / 年份 */
(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const header = document.getElementById('siteHeader');
  const yearEl = document.getElementById('year');

  /* --- 主题 --- */
  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.setAttribute('aria-label', theme === 'dark' ? '切换到浅色主题' : '切换到深色主题');
    }
  };

  applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');

  toggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* 跟随系统（用户没手动选过时） */
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener?.('change', (e) => {
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (err) {}
    if (!saved) applyTheme(e.matches ? 'dark' : 'light');
  });

  /* --- 头部滚动描边 --- */
  const onScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- 滚动显现 --- */
  const items = document.querySelectorAll('.reveal');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Math.min(i * 60, 180);
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('is-visible');
          io.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
  }

  /* --- 年份 --- */
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
