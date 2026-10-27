/* 交互增强：主题切换过渡 + 翻页渐入渐出 */
(() => {
  const html = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. 昼夜切换：给全站加一次性颜色过渡 ---------- */
  let themeTimer = null;
  const startThemeAnim = () => {
    html.classList.add('kp-theme-anim');
    clearTimeout(themeTimer);
    themeTimer = setTimeout(() => html.classList.remove('kp-theme-anim'), 700);
  };

  document.addEventListener(
    'pointerdown',
    (e) => {
      if (e.target.closest('[data-md-component="palette"]')) startThemeAnim();
    },
    true
  );
  document.addEventListener(
    'click',
    (e) => {
      if (e.target.closest('[data-md-component="palette"]')) startThemeAnim();
    },
    true
  );

  /* ---------- 2. 翻页：淡出 → 跳转，落地淡入（CSS 负责） ---------- */
  if (!reduceMotion) {
    const shell = () => document.querySelector('.md-container') || document.body;

    document.addEventListener('click', (e) => {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      const link = e.target.closest('a[href]');
      if (!link) return;
      if (link.target === '_blank' || link.hasAttribute('download')) return;
      if (link.dataset.noFade !== undefined) return;

      let url;
      try {
        url = new URL(link.href, location.href);
      } catch {
        return;
      }
      if (url.origin !== location.origin) return;
      if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

      // 同页锚点交给浏览器
      if (url.pathname === location.pathname && url.search === location.search) return;

      e.preventDefault();
      shell().classList.add('kp-leaving');
      setTimeout(() => {
        location.href = url.href;
      }, 170);
    });

    // 浏览器后退/前进（bfcache）时把透明度恢复
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) shell().classList.remove('kp-leaving');
    });
  }
})();
