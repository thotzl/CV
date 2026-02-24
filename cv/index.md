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

Technische Leitung und Mitarbeit in einem cross-funktionalen Produktteam mit End-to-End-Verantwortung. Ich übernahm regelmäßig End-to-End-Verantwortung von der fachlichen Klärung über Architekturentscheidungen bis zur Umsetzung und dem stabilen Betrieb. Dabei enge Zusammenarbeit mit Produktmanagement und Fachbereichen zur Übersetzung fachlicher Anforderungen in tragfähige Systemlösungen.

**Plattform- und Produktarbeit**

- Federführende Modernisierung der Dokumentationsplattform „ABS Doku“ (Frontend-Refactoring, Migration von PHP/Symfony zu TypeScript/NestJS)
- Konzeption und Aufbau einer Domain-Driven B2B-E-Commerce-Plattform (ABS Store) auf Basis von Medusa und Next.js, eingebettet in die ABS Service-Plattform
- Kernziel im Produktfluss: Kunden planen in der Planungssoftware "ABS Plan" und kaufen anschließend im Store
- Konzeption/Umsetzung der "Theke" als Übergabeschicht zwischen der Planungssoftware "ABS Plan" und Warenkorb/Checkout zur Überführung von Planungsergebnissen in den Bestellprozess
- Architektur und Umsetzung eines skalierbaren Produktdatenservices zur Integration externer Hersteller- und Händlerdaten
- Entwurf und Implementierung einer plugin-basierten Import- und Transformationsarchitektur
- Entwicklung und Integration komplexer Preislogiken (mehrstufig, kundenspezifische Overrides)
- Federführende Migration der Authentifizierung auf eine tenant-basierte Auth0-Lösung (rund 33k Nutzer)

**AI & Automatisierung**

- Exploration und prototypische Umsetzung eines LLM-gestützten Datenblatt-Imports zur Reduktion manueller Produktpflege
- Evaluation von AI-Einsatzmöglichkeiten in internen Workflows und produktnahen Szenarien

**Warehouse-Robotik Taskforce (Notfallteam)**

- Einstieg in kritischer Projektphase nach deutlichem Performanceeinbruch im Lagerbetrieb
- Konzeption und Umsetzung eines Auto-Mode zur koordinierten Bot-Steuerung
- Refactoring des Frontends (State-Stabilität, Batch-Routen, Context-Struktur)
- Aufbau einer Zero-Downtime-Deployment-Pipeline für On-Prem-Umgebungen (Docker, Traefik, GitHub Actions)
- Einführung von Silent-Backend-Deployments und nutzergeführtem Frontend-Reload
- Ergebnis: stabiler Lagerbetrieb ohne softwarebedingte Ausfälle, Releases nun kontinuierlich statt nur nach Feierabend möglich

**Weitere Beiträge**

- Fachliches Mentoring von Teammitgliedern
- Technische Abstimmung und Schnittstellenarbeit mit externen Partneragenturen
- Mitarbeit im QS-Team sowie in teamübergreifenden Dev-Lead-Formaten
- Teil des Erstkontakt- und Integrationsteams für einen strategischen neuen Partner

**Wirkung (Auswahl)**

- ABS Doku: deutlich reduzierte Bugrate, kaum noch API-bezogene Supportfälle; Performance-Verbesserungen in mehreren Heavy-Routen; stabile Frontend-States
- ABS Store: Plattform im produktiven Setup (Größenordnung ~1.5k Produkte / ~200k Varianten); Kernintegration Planungssoftware "ABS Plan" inkl. Direkt-Checkout aus der Planung, zusätzliche Integrationen: Pimcore, HubSpot und SelectLine
- In einer fortlaufenden Testphase wurden im Durchschnitt rund 60.000 EUR Umsatz pro Monat erzielt (ohne anschließenden breiten Rollout).
- Produktdatenservice: massive Reduktion manueller Datenpflege durch partnerfähige Importprozesse trotz stark heterogener Datenformate
- Auth-Migration: stabil umgesetzt; nur Einzelfälle mit Umlautproblemen, vollständig behoben
- Warehouse: nach deutlichem Performanceeinbruch stabilisiert; Zero-Downtime-Deployments produktiv im Einsatz
- Delivery: von Deploys nach Feierabend zu kontinuierlicher Auslieferung mit Health-Checks, Traffic-Switch und schnellem Rollback

**Technologien**

TypeScript, Node.js/NestJS, Bun/Elysia, React, Next.js, Medusa, Drizzle, TypeORM, PostgreSQL, AWS, Docker, Traefik, Terraform, SQS, Lambda, Auth0, Pimcore, GitHub Actions

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

**Senior Software-Developer**  
_01/2018 – 03/2020_

- Koordination zwischen Design, Produktmanagement und IT
- Neu- und Weiterentwicklung von Frontend (React, ExtJS) und Backend (PHP/Symfony/Zend)
- Entwicklung komplexer Shopware-Plugins inkl. Self-Service-Terminal-Anbindung
- Aufbau von PHP- und NodeJS-Services zur Prozessabwicklung (RabbitMQ, REST, SOAP, Puppeteer)
- Technische und konzeptionelle Mitarbeit an mehreren Produktinitiativen

---

### preis24.de GmbH

**Frontend-Developer (ab Ende 2016 Teamlead Frontend)**  
_06/2014 – 12/2017_

- Frontend- und Backend-Umsetzung (JS, S/CSS, HTML, PHP/MVC)
- Entwicklung einer SCSS/CSS-Methodik inkl. Framework
- Konzeption und Umsetzung von UX/UI-Optimierungen und A/B-Tests
- Aufbau und Standardisierung des Frontend-Buildprozesses inkl. eigener NodeJS-Module

---

### TNP Agentur für Kommunikation GmbH

**Mediengestalter**  
_08/2008 – 06/2014_

- Print- und Webproduktion, Bildbearbeitung, SEO
- Content-Management (Typo3, WordPress)

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

Aufbau belastbarer CI/CD-Pipelines, Zero-Downtime-Strategien und Observability-Grundlagen für kontinuierliche und risikoarme Auslieferung.

### Integration & Datenflüsse

Gestaltung resilienter Schnittstellen und Importarchitekturen zur Verarbeitung heterogener Partner- und Produktdaten.

---

## Methoden & Arbeitsweisen

- TypeScript, Node.js/NestJS, Bun/Elysia, React, Next.js, Medusa
- PostgreSQL, Drizzle, TypeORM, REST, WebSocket, SQS, Lambda
- AWS, Docker, Terraform, Traefik, GitHub Actions
- Auth0, Pimcore, plugin-basierte Importarchitekturen
- Fachliche Führung, Mentoring, strukturierte Problemanalyse
- Exploration von AI/LLM-gestützten Automatisierungslösungen

---

## Kontakt

- Telefon: +49 178 898 22 00
- E-Mail: torsten.hoetzel@pixlich.de
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
