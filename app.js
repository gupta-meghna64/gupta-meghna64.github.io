(function () {
  const drawerToggle = document.getElementById('drawerToggle');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('show');
    drawerToggle.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
    drawerToggle.setAttribute('aria-expanded', 'false');
  }

  if (drawerToggle && drawer && overlay) {
    drawerToggle.addEventListener('click', () => {
      if (drawer.classList.contains('open')) closeDrawer();
      else openDrawer();
    });

    overlay.addEventListener('click', closeDrawer);

    drawer.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && window.matchMedia('(max-width: 1023px)').matches) closeDrawer();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  // Active nav
  const activeId = document.body.getAttribute('data-active-nav');
  if (activeId) {
    const activeLink = document.querySelector(`.nav a[data-id="${activeId}"]`);
    if (activeLink) activeLink.setAttribute('aria-current', 'page');
  }

  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
