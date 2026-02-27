---
layout: default
title: CV
---

# Torsten Hötzel

**Senior Software Engineer (Fullstack) · Tech Lead im Produktteam**  
_Systemische Architektur, produktnahe Umsetzung und stabile Plattformen_

---

## Profil

Ich gestalte und verantworte in cross-funktionalen Teams plattformintegrierte Softwaresysteme, die fachlich tragen, wartbar bleiben und im Betrieb stabil funktionieren.

- Systemarchitektur und Integrationen (End-to-End gedacht: Nutzer → Prozess → System → Betrieb)
- Produktnahe Umsetzung von komplexen Flows (inkl. Übergaben in Warenkorb/Checkout) in bestehende Service-Plattformen
- Stabile Delivery & Betriebssicherheit (CI/CD, Zero-Downtime-Ansätze, Risiko-Reduktion)
- Fachliche Führung in cross-funktionalen Teams (Strukturierung, Mentoring, Abstimmung mit Produkt/Fachbereichen/Partnern); pragmatische Exploration von AI/LLM für Automatisierung

---

## Berufserfahrung

### ABS Safety GmbH

**Senior Software Engineer (Fullstack)**  
_01/2021 – heute_

Technische Leitung und Mitarbeit in einem cross-funktionalen Produktteam mit End-to-End-Verantwortung. Als Tech Lead habe ich fachliche Klärung, Architekturentscheidungen und Umsetzung im Team zusammengeführt und die Lieferung bis in den stabilen Betrieb begleitet. Enge Zusammenarbeit mit Produktmanagement und Fachbereichen zur Übersetzung fachlicher Anforderungen in tragfähige Systemlösungen.

**Projekte & Produktarbeit**

**Übergreifend (Architektur & Umsetzung im Team)**

- Technische Leitplanken für Architektur, Konzeption und Umsetzung im Team gesetzt; Schnittstellen und Entscheidungen über Bereiche hinweg abgestimmt
- Technologieauswahl für zentrale Komponenten im Austausch mit mehreren Teams/Abteilungen mitgeführt
- Services im bestehenden Setup aufgesetzt und über mehrere Umgebungen hinweg produktionsfähig betrieben (inkl. CI/CD-Deployments und Betriebskonfiguration)

**ABS Doku (Modernisierung)**

- Frontend-Refactoring und Migration von PHP/Symfony zu TypeScript/NestJS in technischer Leitung und teamübergreifender Abstimmung
- Stabilisierung komplexer Frontend-States sowie Refactoring von kritischen Routen (u. a. Batch-Routen) zur besseren Wartbarkeit und stabileren Laufzeit

**ABS Store (Commerce + Checkout-Flow)**

- Technische Kernverantwortung für Konzeption und Aufbau des Stores (Medusa/Next.js) als plattformintegrierter Kaufprozess
- Produktfluss: Planungssoftware „ABS Plan“ → Übergabe → Warenkorb/Checkout
- Bestandteile des Shops: „Theke“ zur Überführung von Planungsergebnissen in den Bestellprozess; mehrstufige Preislogiken (kundenspezifische Overrides)
- Order Processing im Checkout-Flow verantwortet und in bestehende Services integriert
- Order Splitting für mehrteilige Liefer- und Prozessketten konzipiert und umgesetzt (technisch)
- Integrationen u. a. Pimcore, HubSpot, SelectLine
- Produktives Setup in der Größenordnung ~1.5k Produkte / ~200k Varianten
- System bis in den stabilen Testbetrieb begleitet (Stabilisierung, Fehleranalyse, Release-Abläufe)
- In einer fortlaufenden Testphase wurde der integrierte Kaufprozess unter realen Bedingungen validiert und produktiv genutzt.

**Produktdatenservice (Hersteller-/Händlerdaten)**

- Produktdatenservice für Hersteller-/Händlerdaten im Lead-Team konzipiert; Import-, Transformations- und Validierungsprinzip pro Produkttyp definiert
- Datenannahmeweg inkl. erweiterbarem Plugin-/Hook-System konzipiert und umgesetzt – ausgelegt auf stark heterogene Datenstrukturen und schnelle Anpassung an neue Partnerformate; AWS‑basierte Import-/Sync‑Strecken (S3/Lambda) und Deploy im bestehenden Setup (Terraform nach Team-Patterns)
- Produkttyp-spezifische Anbindungen als skalierbares Muster vorbereitet und an Produktteams zur Umsetzung weiterer Formate übergeben

**Auth-Migration (Tenant-Setup)**

- Datenmigration im Rahmen der tenant-basierten Auth0-Umstellung federführend verantwortet; Datenvollständigkeit und Rückwärtskompatibilität im Migrationspfad abgesichert; Integration in die Systemlandschaft im Team abgestimmt (rund 33k Nutzer)

**Warehouse-Robotik (Taskforce / Stabilisierung)**

- Auto-Mode zur koordinierten Bot-Steuerung konzipiert und umgesetzt
- Frontend stabilisiert (State-Struktur, Batch-Routen, Context-Struktur)
- Strukturierte Tests zur Stabilisierung der Robotik-Abläufe eingeführt und etabliert
- On-Prem (lokaler Server): CI/CD-Deployment-Pipeline und Zero-Downtime-Deploy-Ablauf umgesetzt (Docker, Traefik, GitHub Actions), inspiriert von internen Patterns

**AI & Automatisierung (Exploration)**

- Exploration und prototypische Umsetzung eines LLM-gestützten Datenblatt-Imports zur Reduktion manueller Produktpflege
- Evaluation von AI-Einsatzmöglichkeiten in internen Workflows und produktnahen Szenarien

**Weitere Beiträge**

- Fachliches Mentoring von Teammitgliedern
- Technische Abstimmung und Schnittstellenarbeit mit externen Partneragenturen
- Mitarbeit im QS-Team sowie in teamübergreifenden Dev-Lead-Formaten
- Teil des Erstkontakt- und Integrationsteams für einen strategischen neuen Partner

**Ausgewählte Ergebnisse**

- Stabilere Betriebsqualität und spürbar reduzierte Support-/Fehlerlast in zentralen Komponenten
- Durchgängiger Produktfluss von Planung bis Checkout etabliert; Integrationen u. a. Pimcore, HubSpot, SelectLine konsolidiert
- Partnerfähige Importprozesse etabliert; manuelle Datenpflege deutlich reduziert trotz heterogener Datenformate
- Im Warehouse: nach kritischer Phase stabilisiert; Zero-Downtime-Deployments produktiv im Einsatz und kontinuierlichere Auslieferung mit klaren Checks und schnellen Rollback-Pfaden ermöglicht

**Technologien**

TypeScript, Node.js, NestJS, Bun/Elysia, React, MobX, Next.js, Medusa, Drizzle, MikroORM, TypeORM, PostgreSQL, AWS, Docker, Traefik, Terraform, SQS, Lambda, Auth0, Pimcore, GitHub Actions

---

### adcada GmbH

**Fullstack Web-Developer**  
_04/2020 – 12/2020_

- Konzeption und Umsetzung eines SPA-Frontends im Finanzbereich (TypeScript, Vue.js, Jest, SCSS)
- Mitarbeit am Backend (Symfony, API Platform, Doctrine)
- Frontend-Modul zur Steuerung externer Geräte via WebSocket
- Technische Überarbeitung eines Shopware-Frontends und Weiterentwicklung von Plugins
- Mitarbeit an hauseigener WebShop-Entwicklung (technische Frontend-Konzeption)
- Optimierungen an Docker-, CI- und Deploy-Konfigurationen

---

### handy.de Telekommunikation GmbH

**Senior Software Developer**  
_01/2018 – 03/2020_

- Koordination zwischen Design, Produktmanagement und IT
- Neu- und Weiterentwicklung von Frontend (React, ExtJS) und Backend (PHP/Symfony/Zend)
- Entwicklung komplexer Shopware-Plugins inkl. Self-Service-Terminal-Anbindung
- Aufbau von PHP- und Node.js-Services zur Prozessabwicklung (RabbitMQ, REST, SOAP, Puppeteer)
- Technische und konzeptionelle Mitarbeit an mehreren Produktinitiativen

---

### preis24.de GmbH

**Frontend-Developer (ab Ende 2016 Teamlead Frontend)**  
_06/2014 – 12/2017_

- Frontend- und Backend-Umsetzung (JS, S/CSS, HTML, PHP/MVC)
- Entwicklung einer SCSS/CSS-Methodik inkl. Framework
- Konzeption und Umsetzung von UX/UI-Optimierungen und A/B-Tests
- Aufbau und Standardisierung des Frontend-Buildprozesses inkl. eigener Node.js-Module

---

### TNP Agentur für Kommunikation GmbH

**Mediengestalter**  
_08/2008 – 06/2014_

- Print- und Webproduktion, Bildbearbeitung, SEO
- Content-Management (TYPO3, WordPress)

---

### DRK Rettungsschule Bottrop

**Studentische Hilfskraft**  
_12/2006 – 08/2008_

---

## Schwerpunkte

Ich arbeite an der Schnittstelle von Systemarchitektur, Produktrealität und stabiler Delivery — mit dem Ziel, Softwarelösungen zu schaffen, die fachlich tragen und unter realen Bedingungen zuverlässig funktionieren.

### System- und Plattformarchitektur

Entwurf und Weiterentwicklung wartbarer, integrierbarer Plattformen in gewachsenen Systemlandschaften. Fokus auf Stabilität, klare Verantwortlichkeiten und langfristige Betriebsfähigkeit.

### Produktnahe Entwicklung

Übersetzung fachlicher Anforderungen in robuste technische Lösungen unter Berücksichtigung von Nutzerperspektive, Prozessrealität und operativen Randbedingungen.

### Delivery & Betriebssicherheit

Aufbau belastbarer CI/CD-Pipelines und Zero-Downtime-Strategien für Produkt-/On‑Prem‑Systeme und Service-Anwendungen (Release-Abläufe, Checks, Rollback-Pfade).

### Integration & Datenflüsse

Gestaltung resilienter Schnittstellen und Importarchitekturen zur Verarbeitung heterogener Partner- und Produktdaten.

---

## Methoden & Arbeitsweisen

- TypeScript, Node.js, NestJS, Bun/Elysia, React, Next.js, Medusa
- PostgreSQL, Drizzle, MikroORM, TypeORM, REST, WebSocket, SQS, Lambda
- AWS, Docker, Terraform, Traefik, GitHub Actions
- Auth0, Pimcore, plugin-basierte Importarchitekturen
- Fachliche Führung, Mentoring, strukturierte Problemanalyse
- Exploration von AI/LLM-gestützten Automatisierungslösungen

---

## Kontakt

<!-- - Telefon: +49 178 898 22 00 -->
<!-- - E-Mail: torsten.hoetzel@pixlich.de -->

- LinkedIn: <a href="https://www.linkedin.com/in/thotzl/"><i class="fa-brands fa-linkedin-in"></i> Profil</a>
- Xing: <a href="https://www.xing.com/profile/Torsten_Hoetzel"><i class="fa-brands fa-xing"></i> Profil</a>
- Standort: Bottrop, Deutschland

## Ausbildung

### Berufskolleg Ost der Stadt Essen

**Ausbildung zum Mediengestalter für Digital und Print**  
_2008 – 2011_

### Fachhochschule Gelsenkirchen

**Studium Medieninformatik (ohne Abschluss)**  
_2006 – 2008_

---

## Sprachen

- Deutsch (Muttersprache)
- Englisch (fließend)

---

## Sonstiges

Seit 2001 ehrenamtliches Mitglied im Katastrophenschutz des Deutschen Roten Kreuzes Bottrop (seit 2008 in der Reserve), inkl. Ausbildungen u. a. zum Rettungshelfer und Gruppenführer.
