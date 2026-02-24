---
title: Master Facts Base
---

# Master-Basis (CV-fuehrend)

Diese Datei ist die gemeinsame Faktenbasis fuer:
- `cv/index.md`
- `lebenslauf/index.md`
- `scan/index.md`

## Fuehrungsregel (wichtig)

- **Source of Truth:** `cv/index.md`
- `lebenslauf/index.md` und `scan/index.md` sind abgeleitete Formate (klassisch bzw. recruiter-kompakt).
- Rueckmerge aus `lebenslauf`/`scan` nur dann, wenn in `cv` Fakten fehlen oder klar bessere faktische Formulierungen vorliegen.

## Positionierung (aus CV)

- Headline (kanonisch): **Senior Software Engineer (Fullstack) · Tech Lead im Produktteam**
- Subline: **Systemische Architektur, produktnahe Umsetzung und stabile Plattformen**
- Fokus: robuste Systemarchitektur, produktnahe Umsetzung, stabile Delivery, technische Fuehrung in cross-funktionalen Teams

## Kernmetriken (nur diese 3 standardmaessig)

- Auth-Migration: **~33k User**
- ABS Store: **~1.5k Produkte / ~200k Varianten**
- Commerce-Testgruppe: **bis zu ~100k EUR monatlicher Umsatz (laufend, ohne weiteren Ausbau/Rollout)**

## Berufsstationen (kanonisch)

1. ABS Safety GmbH - Senior Software Engineer (Fullstack), **01/2021 - heute**
2. adcada GmbH - Fullstack Web-Developer, **04/2020 - 12/2020**
3. handy.de Telekommunikation GmbH - Senior Software Developer, **01/2018 - 03/2020**
4. preis24.de GmbH - Frontend Developer (ab Ende 2016 Teamlead Frontend), **06/2014 - 12/2017**
5. TNP Agentur fuer Kommunikation GmbH - Mediengestalter, **08/2008 - 06/2014**
6. DRK Rettungsschule Bottrop - Studentische Hilfskraft, **12/2006 - 08/2008**

## ABS Safety - Kerninhalte

- Technische Leitung im cross-funktionalen Produktteam
- ABS Doku Modernisierung (PHP/Symfony -> TypeScript/NestJS)
- ABS Store als plattformintegriertes Produkt in der ABS Service-Plattform (Domain-Driven B2B-Commerce auf Medusa/Next.js)
- Kernziel im Produktfluss: Kunden planen in der Planungssoftware "ABS Plan" und kaufen anschliessend im Store
- Konzeption/Umsetzung der "Theke" als Uebergabeschicht zwischen der Planungssoftware "ABS Plan" und Warenkorb/Checkout zur Ueberfuehrung von Planungsergebnissen in den Bestellprozess
- Kernintegration Planungssoftware "ABS Plan", weitere Integrationen u. a. Pimcore, HubSpot, SelectLine
- Produktdatenservice mit plugin-basierter Import-/Transformationsarchitektur
- Auth0-Tenant-Migration (~33k User)
- Warehouse-Robotik-Stabilisierung inkl. Auto-Mode-Orchestrierung
- Zero-Downtime On-Prem Deployments (Docker, Traefik, GitHub Actions)
- Mentoring, technische Partnerabstimmung, Mitarbeit in QS-/Dev-Lead-Formaten
- AI/LLM-Exploration fuer datengetriebene Automatisierung

## Technologien (kanonisch)

TypeScript, Node.js/NestJS, Bun/Elysia, React, Next.js, Medusa, Drizzle, TypeORM, PostgreSQL, AWS, Docker, Traefik, Terraform, SQS, Lambda, Auth0, Pimcore, GitHub Actions

## Ausbildung

- Mediengestalter Digital und Print (Berufskolleg Ost Essen), 2008 - 2011
- Medieninformatik (ohne Abschluss), FH Gelsenkirchen, 2006 - 2008
- Abitur, Janusz-Korczak-Gesamtschule Bottrop, 2006

## Sprache / Sonstiges

- Deutsch (Muttersprache), Englisch (fliessend)
- Ehrenamt DRK Bottrop seit 2001 (Reserve seit 2008; Rettungshelfer, Gruppenfuehrer)

## Sync-Regeln fuer Ableitungen

1. **Immer zuerst `cv/index.md` aktualisieren.**
2. Danach `lebenslauf/index.md` auf faktische Deckung pruefen:
   - gleiche Rollen, Zeitraeume, Kernmetriken, Kerntechnologien
   - klassischer/kompakter Stil ist erlaubt
3. Danach `scan/index.md` fuer Recruiter ableiten:
   - kompakter Stil
   - nur relevante Metriken
   - gleiche Faktenbasis wie CV
4. Bei Konflikten gewinnt immer CV, ausser CV enthaelt nachweislich eine Luecke/Unschärfe.
