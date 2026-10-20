# Johannes Harnack – persönliche Webseite

Statische, deutschsprachige Webseite mit Fokus auf Azure Local, hybride
Microsoft-Infrastrukturen, Enterprise-Betrieb, Administration und Beratung.

## Lokal ansehen

Das Repository mit einem statischen HTTP-Server bereitstellen und `index.html`
öffnen. Es sind keine Installation, externen Schriftarten oder Build-Schritte nötig.

## Bearbeiten

- `index.html`: Inhalte, Navigation und Kontaktlinks
- `assets/css/styles.css`: maßgebliches Stylesheet des Redesigns
- `assets/js/main.js`: mobile Navigation und Jahreszahl
- `assets/img/`: bestehendes Profilfoto und neues SVG-Favicon

Die vorhandenen Dateien unter `assets/scss/` stammen aus dem ursprünglichen
Bedimcode-Theme. Sie sind nur als historische Quelle erhalten und werden vom
Redesign nicht eingebunden. Nicht über das neue CSS kompilieren.

Kontakt erfolgt über die bestehenden LinkedIn- und Xing-Profile. Das alte,
nicht konfigurierte EmailJS-Formular wurde entfernt.

## Prüfung und Veröffentlichung

Der Branch `website-redesign` dient der Prüfung per Pull Request gegen `main`.
`CNAME` bleibt unverändert. Es wurde kein Deployment-Workflow hinzugefügt.
Ein Merge bzw. die Veröffentlichung ist eine separate Entscheidung.
