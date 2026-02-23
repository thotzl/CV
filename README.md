# CV / Lebenslauf — GitHub Pages

Statische Website mit CV, Lebenslauf und Platz für weitere Seiten.

## Struktur

- **/** — Startseite mit Navigation
- **/cv/** — CV (englisch)
- **/lebenslauf/** — Lebenslauf (deutsch)
- **/assets/** — gemeinsames Profilfoto: `profile.jpg` (wird in CV und Lebenslauf eingebunden)

Weitere Seiten: Ordner mit `index.md` anlegen und auf der Startseite verlinken.

## GitHub Pages einrichten

1. Repo pushen, dann **Settings → Pages**:
2. **Source:** Entweder
   - **Deploy from a branch** → Branch **main**, Folder **/ (root)**  
   - oder **GitHub Actions** (dann baut das Workflow in `.github/workflows/jekyll.yml`; Build-Logs unter Actions).
3. **Wichtig:** Die URL ist immer `https://<user>.github.io/<repo>/` – der Pfad entspricht dem **Repo-Namen**. `baseurl` in `_config.yml` muss exakt diesen Pfad haben (z. B. `/CV`), sonst 404.
4. Nach 1–2 Min: Startseite, CV und Lebenslauf unter der obigen URL erreichbar.
