document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('sidebar-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      sidebar.setAttribute('aria-hidden', String(!isOpen));
    });
  }

  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const effectivePath = currentPath === '/about' ? '/preface' : currentPath;

  document.querySelectorAll('.sidebar-nav a[href]').forEach((link) => {
    const targetPath = new URL(link.getAttribute('href'), window.location.origin).pathname.replace(/\/+$/, '') || '/';

    if (targetPath === effectivePath) {
      link.classList.add('active-page');
    }
  });
});
