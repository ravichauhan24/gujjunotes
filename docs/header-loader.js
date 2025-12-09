/* header-loader.js
   Fetches header.html into <div id="header"></div> and initializes toggler + login behaviour.
   Include this script at the end of each page, AFTER loading bootstrap.bundle.min.js.
*/

(async function loadHeader(path = 'header.html', targetId = 'header') {
  try {
    // wait for DOM ready
    if (document.readyState === 'loading') {
      await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
    }

    const target = document.getElementById(targetId);
    if (!target) {
      console.error(`header-loader: element #${targetId} not found. Add <div id="${targetId}"></div> to the page.`);
      return;
    }

    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`);
    const html = await res.text();

    // inject navbar markup
    target.innerHTML = html;

    // ensure toggler clickable & on top
    const toggler = document.querySelector('.navbar-toggler');
    if (toggler) {
      toggler.style.zIndex = toggler.style.zIndex || '2000';
      toggler.style.position = toggler.style.position || 'relative';
      toggler.style.pointerEvents = 'auto';
    }

    // auto-collapse when nav link clicked (works with bootstrap or fallback)
    const menu = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    const bsCollapse = (typeof bootstrap !== 'undefined' && menu) ? bootstrap.Collapse.getOrCreateInstance(menu) : null;
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (!menu) return;
        if (bsCollapse && menu.classList.contains('show')) bsCollapse.hide();
        else menu.classList.remove('show'); // fallback
      });
    });

    // note: the inline script in header.html (login/logout) will run because we injected HTML
    console.log('header-loader: header injected from', path);
  } catch (err) {
    console.error('header-loader error:', err);
  }
})();
