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

// The browser hands the draft to the visitor's configured email application.
const emailForm = document.querySelector('.email-form');
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!emailForm.reportValidity()) return;
  const fields = new FormData(emailForm);
  const name = String(fields.get('name')).trim();
  const email = String(fields.get('email')).trim();
  const message = String(fields.get('message')).trim();
  if (!name || !message) {
    document.querySelector('#email-form-status').textContent = 'Bitte geben Sie Ihren Namen und eine Nachricht ein.';
    return;
  }
  const subject = 'Kontaktanfrage über die Webseite';
  const body = ['Hallo Johannes,', '', message, '', 'Viele Grüße', name, 'E-Mail: ' + email].join('\r\n');
  window.location.href = 'mailto:johannes@harnack.cloud?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  document.querySelector('#email-form-status').textContent = 'Die Nachricht wurde an Ihr E-Mail-Programm übergeben. Bitte prüfen und versenden Sie sie dort. Über diese Webseite wurde keine E-Mail versendet.';
});
