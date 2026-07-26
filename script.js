document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');

  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('sidebar-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    sidebar.setAttribute('aria-hidden', String(!isOpen));
  });
});
