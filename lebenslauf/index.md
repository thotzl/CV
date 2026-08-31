---
layout: default
title: Lebenslauf
---

# Torsten Hötzel

**Senior Software Engineer (Fullstack) · Tech Lead im Produktteam**  
_Systemische Architektur, produktnahe Umsetzung und stabile Plattformen_

---

## Profil

Senior Software Engineer (Fullstack) mit Schwerpunkt auf Architektur, technischen Leitungsrollen und domain-getriebener Systementwicklung.

Seit 2021 bei ABS Safety GmbH in der technischen Führung cross-funktionaler Teams tätig. Fokus auf skalierbare Plattformarchitekturen, B2B-E-Commerce, Integrations- und Produktdatenservices sowie moderne TypeScript-Stacks und Deployment-Pipelines.

Zuvor mehrere Jahre Fullstack- und Frontend-Entwicklung bei adcada, handy.de und preis24. Ursprünglich Ausbildung zum Mediengestalter (Digital und Print).

Ergänzend übernehme ich die Rolle des technischen Impulsgebers: Ich bringe neue Technologien pragmatisch ins Team, mache komplexe Zusammenhänge durch Prototypen greifbar und helfe, bei unklaren Anforderungen zu klaren Entscheidungen zu kommen.

---

## Berufserfahrung

### bobbie (bobbie OS / bobbie Deutschland)

**Senior Software Engineer (Fullstack)**  
_13.04.2026 – heute_

Fachliche und operative Mitsteuerung in einem cross-funktionalen Produktteam für das übernommene Kernprojekt zur Flachdachplanung („draw“). Das technologische Ziel war die Migration des Altsystems in die vorgegebene Infrastruktur von bobbieOS (u. a. Magento/Algolia) unter konsequentem Rückbau überflüssiger Legacy-Schichten und deren nahtloser Integration. Als Senior Software Engineer verantworte ich die Erarbeitung robuster Systemintegrationskonzepte, den Aufbau resilienter Datenmigrationspfade sowie die strategische Optimierung der CI/CD-Infrastruktur.

**Projekte & Systemarchitektur**

**Infrastruktur-Migration & API-Entkopplung**
- Entwicklung einer asynchronen, plugin-basierten Migrations-Engine, um Altsystem-Pläne beim Import automatisiert zu erhalten, externe Medien-Ressourcen asynchron aufzulösen und lokal zu persistieren.
- Beseitigung plattformspezifischer Cloud-Bindungen (z. B. AWS S3/SES) zugunsten standardisierter, flexibler Dateisystem- und Mail-Schnittstellen zur nahtlosen Einbindung in die hauseigene Systemlandschaft.

**Datenintegrität, Versionskontrolle & Aktualisierungs-Verfahren**
- Absicherung der Datenkonsistenz historischer Planungsdaten durch direkte, flache Persistenz der Produkt-Metadaten im Plan-Dokument, wodurch unbeabsichtigte automatische Plan-Neuberechnungen durch spätere Katalog-Updates verhindert werden.
- Implementierung eines automatisierten, eventgesteuerten Aktualisierungs- und Validierungsverfahrens, um ältere Produktversionen im Plan kontrolliert und auf Wunsch des Nutzers über Hintergrund-Systeme (Magento/Algolia) neu zu berechnen und zu validieren.

**Produktsuche & API-Integration (Magento / Algolia)**
- Entwicklung einer modular wiederverwendbaren Such- und Auswahlschnittstelle durch die Verbindung von Such-API-Hooks (Algolia) mit modernen UI-Komponenten (Material-UI) im Frontend.
- Implementierung einer automatisierten Token-Rotation zur unterbrechungsfreien Aktualisierung kurzlebiger API-Suchschlüssel im laufenden Betrieb.
- Aufbau einer simulierten Suchumgebung (In-Memory Mock Search) mit dynamischer Facettenberechnung zur Gewährleistung vollständiger Offline-Interaktivität in lokalen Testumgebungen.

**CI/CD-Transformation, Performance & Test-Stabilisierung (SRE)**
- Weitestgehende Ablösung ressourcenintensiver Docker-in-Docker-Virtualisierungen in der CI/CD-Pipeline zugunsten einer nativen Testausführung direkt auf physischen On-Premises-Servern (Bare-Metal).
- Migration der Playwright-E2E-Tests zur direkten, nativen Ausführung auf den CI-Hosts mit parallelisierten Shards, wodurch Virtualisierungs-Overhead eliminiert und die Pipeline-Performance drastisch gesteigert wurde.
- Behebung von Fehlern bei komplexen visuellen Tests in der CI-Pipeline durch den Einsatz von softwarebasiertem WebGL-Rendering.
- Konzeption und Implementierung einer intelligenten, mehrstufigen Cleanup- und Cache-Bereinigungsarchitektur zur Beseitigung verbleibender Ressourcenkonflikte auf den Build-Servern und Gewährleistung einer lückenlosen Stabilität.

**Initiative Selbstorganisation (Projekt-Frühstadium)**
- Ausfüllen einer gestaltenden Senior- und Wegbereiterrolle im selbstorganisierten Team zur Setzung zentraler technischer Impulse, Etablierung von Qualitätsstandards und Absicherung der kontinuierlichen Lieferfähigkeit.
- Proaktive Entwicklung und Neuausrichtung abteilungsübergreifender Abstimmungs-Workflows zwischen Produktmanagement, Fachbereichen und dem Entwicklerteam zur effizienten Klärung komplexer technischer Anforderungen.

**Entwickler-Werkzeuge & AI-Workspaces (Hands-on)**
- Konzeption und Implementierung portabler, Node.js-basierter CLI-Installer zur workflow-übergreifenden Standardisierung und teamweiten Verteilung von AI-Agent-Programmierrichtlinien.
- Aufbau robuster, lokaler Entwicklungsumgebungen (inklusive lokaler SSL-verschlüsselter Gateways und isolierter Datenbankinstanzen) zur drastischen Vereinfachung des Onboarding-Prozesses.
- Etablierung moderner, KI-gestützter Entwicklungsprozesse im Alltag sowie fachliches Mentoring und Anleitung des Teams beim produktiven Einsatz strukturierter AI-Hilfsmittel zur Steigerung der gesamten Produktivität.

_Technologien: TypeScript, Node.js, NestJS, React, Redux, RxJS, Next.js, Material-UI, MariaDB, TypeORM, GraphQL, Docker, Caddy, SwiftShader, Vitest, Playwright, Git, GitLab CI, ES Modules, Algolia, Magento, REST_

---

### ABS Safety GmbH

**Senior Software Engineer (Fullstack)**  
_01/2021 – 12.04.2026_

- Als Tech Lead fachliche Klärung, Architekturentscheidungen und Umsetzung im Team zusammengeführt und bis in den stabilen Betrieb begleitet (End-to-End-Verantwortung).
- ABS Doku modernisiert (Frontend-Refactoring, Migration PHP/Symfony → TypeScript/NestJS) in technischer Leitung und teamübergreifender Abstimmung; komplexe Frontend-States stabilisiert und kritische Routen refactored (u. a. Batch-Routen).
- ABS Store als plattformintegrierter Kaufprozess (Medusa/Next.js): Produktfluss „ABS Plan“ → Warenkorb/Checkout inkl. „Theke“ und mehrstufigen Preislogiken (kundenspezifische Overrides); Order Processing und Order Splitting für mehrteilige Liefer- und Prozessketten umgesetzt; bis in stabilen Testbetrieb begleitet; produktives Setup ~1.5k Produkte / ~200k Varianten; Integrationen u. a. Pimcore, HubSpot, SelectLine.
- In einer fortlaufenden Testphase wurde der integrierte Kaufprozess unter realen Bedingungen validiert und produktiv genutzt.
- Produktdatenservice für Hersteller-/Händlerdaten: plugin-/hook-basierte Import-, Transformations- und Validierungsarchitektur für heterogene Datenstrukturen (schnell anpassbar); AWS‑Strecken (S3/Lambda) im bestehenden Setup, Infrastrukturänderungen via Terraform im Rahmen etablierter Team-Patterns.
- Produkttyp-Anbindungen als skalierbares Muster vorbereitet und an Produktteams zur Umsetzung weiterer Formate übergeben.
- Tenant-basierte Auth0-Umstellung in der Bestandsbasis federführend begleitet (rund 33k Nutzer); Datenvollständigkeit und Rückwärtskompatibilität im Migrationspfad abgesichert.
- Warehouse-Robotik in Taskforce stabilisiert: Auto-Mode-Orchestrierung, Frontend-Stabilisierung, strukturierte Tests zur Stabilisierung der Robotik-Abläufe sowie On-Prem CI/CD-Deployment-Pipeline und Zero-Downtime-Deploy-Ablauf (Docker, Traefik, GitHub Actions).
- AI/LLM: prototypischer Datenblatt-Import zur Reduktion manueller Produktpflege.
- AI-gestützte Entwicklung & agentic coding: Methodik zur Kontext- und Aktionssteuerung entwickelt, generative KI und agentic coding exploriert und u. a. in der Warehouse-Robotik produktiv eingesetzt; Erkenntnisse in weitere Projekte eingebracht.

_Technologien: TypeScript, Node.js, NestJS, Bun/Elysia, React, MobX, Next.js, Medusa, Drizzle, MikroORM, TypeORM, PostgreSQL, AWS, Docker, Traefik, Terraform, SQS, Lambda, Auth0, Pimcore, GitHub Actions_

---

### adcada GmbH

**Fullstack Web-Developer**  
_04/2020 – 12/2020_

- Konzeption und Umsetzung eines SPA-Frontends für eine Finanz-Web-App (TypeScript, Vue.js, Jest, SCSS, Webpack)
- Mitarbeit am Backend (Symfony, API Platform, Doctrine)
- Entwicklung eines Frontend-Moduls zur Steuerung externer Geräte via WebSocket
- Technische Überarbeitung eines Shopware-Frontends sowie Weiterentwicklung interner Plugins
- Mitarbeit an hauseigener WebShop-Entwicklung mit Fokus auf Frontend-Konzeption
- Anpassung und Optimierung von Docker-, CI- und Deployment-Konfigurationen

---

### handy.de Telekommunikation GmbH

**Senior Software Developer**  
_01/2018 – 03/2020_

- Koordination der Zusammenarbeit zwischen Design, Produktmanagement und IT
- Fullstack-Entwicklung im Frontend (React, ExtJS, HTML, CSS/LESS) und Backend (PHP, Symfony, Zend)
- Entwicklung komplexer Shopware-Plugins (u. a. Tarif-Device-Kombinationen, Self-Service-Terminal, EFT-Bezahlung)
- Umsetzung von PHP- und Node.js-Services zur nachgelagerten Prozessabwicklung via RabbitMQ
- Technische Mitarbeit an Self-Service-Terminal-Lösungen für Prepaid-Produkte

---

### preis24.de GmbH

**Frontend Developer** (ab Ende 2016 Teamlead Frontend)  
_06/2014 – 12/2017_

- Frontend- und Backend-Entwicklung (JS, SCSS, HTML, PHP/MVC)
- Entwicklung einer SCSS/CSS-Methodik inkl. Framework
- Konzeptionelle Mitarbeit bei UX/UI-Optimierungen
- Technische Konzeption und Umsetzung von A/B-Tests
- Aufbau des Frontend-Buildprozesses inkl. eigener Node.js-Module
- Mitarbeit am technischen Relaunch der Plattform

---

### TNP Agentur für Kommunikation GmbH

**Mediengestalter**  
_08/2008 – 06/2014_

- Design und Reinzeichnung von Printmedien
- Bildbearbeitung und Webdesign
- SEO und Content-Management (TYPO3, WordPress)

---

### DRK Rettungsschule Bottrop

**Studentische Hilfskraft**  
_12/2006 – 08/2008_

---

## Ausbildung

### Berufskolleg Ost der Stadt Essen

**Ausbildung zum Mediengestalter für Digital und Print**  
_Fachrichtung Gestaltung und Technik, Schwerpunkt Printmedien_  
_2008 – 2011_

### Fachhochschule Gelsenkirchen

**Studium Medieninformatik (ohne Abschluss)**  
_2006 – 2008_

### Janusz-Korczak-Gesamtschule, Bottrop

**Abitur**  
_2006_

---

## Schwerpunkte

Fullstack-Entwicklung und technische Leitung mit Fokus auf Architektur, domänenorientierte Systementwicklung, B2B-E-Commerce sowie skalierbare Produktdaten- und Integrationsplattformen. Erfahrung mit modernen TypeScript/Node-Stacks, CI/CD-Deployments und Zero-Downtime-Deploy-Abläufen in komplexen Systemintegrationen.

### Methoden & Technologien

- TypeScript, Node.js, NestJS, React, Next.js, Medusa, Bun/Elysia
- Backend & Daten: PostgreSQL, Drizzle, MikroORM, TypeORM, REST, WebSocket, SQS, Lambda
- Cloud & DevOps: AWS, Docker, Terraform, Traefik, GitHub Actions
- Identity & Integration: Auth0, Pimcore
- Technische Leitung, Mentoring, Evaluierung von KI/LLM-Prototypen

---

## Sprachen

- Deutsch (Muttersprache)
- Englisch (fließend)

---

## Weiteres

**Ehrenamt:** Seit 2001 Mitglied im Katastrophenschutz des Deutschen Roten Kreuzes Bottrop, seit 2008 in der Reserve. Ausbildungen u. a. zum Rettungshelfer und Gruppenführer der Einsatzeinheit.

**Persönliches:** Verheiratet, zwei Kinder. Geboren am 20.08.1985, Wohnhaft in Bottrop.

---

## Kontakt

<span class="contact-phone">Telefon: +49 178 898 22 00</span>
<span class="contact-email">E-Mail: torsten.hoetzel@pixlich.de</span>
<span class="contact-online">LinkedIn: <a href="https://www.linkedin.com/in/thotzl/">Profil</a></span>
<span class="contact-online">Xing: <a href="https://www.xing.com/profile/Torsten_Hoetzel">Profil</a></span>
<span class="contact-location">Standort: Bottrop, Deutschland</span>
