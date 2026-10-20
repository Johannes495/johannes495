const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-menu');
const mobile = window.matchMedia('(max-width: 800px)');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  menu.dataset.collapsed = String(mobile.matches && !open);
}

// Navigation stays available when JavaScript is disabled.
toggle.hidden = false;
setMenu(false);
toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});
menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobile.matches && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
mobile.addEventListener('change', () => setMenu(false));
document.querySelector('#year').textContent = String(new Date().getFullYear());
