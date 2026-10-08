# kulturbytes Manual

Das Manual verwendet [Blume](https://useblume.dev/docs/content/i18n) und ist auf Englisch, Deutsch und Dänisch verfügbar.

## Entwicklung

```sh
npm ci
npm run dev
```

## Sprachen und URLs

Alle Sprachversionen verwenden einen zweistelligen Sprachcode in der URL:

| Sprache | Inhalte | Startseite | Beispielkapitel |
| --- | --- | --- | --- |
| Englisch | `docs/*.mdx` | `/en/` | `/en/event-edit/` |
| Deutsch | `docs/de/*.mdx` | `/de/` | `/de/event-edit/` |
| Dänisch | `docs/da/*.mdx` | `/da/` | `/da/event-edit/` |

`da` ist der Sprachcode für Dänisch. Die englische Ausgangsversion bleibt gemäß Blumes Verzeichnisstruktur direkt in `docs/`. `hideDefaultLocalePrefix: false` sorgt dafür, dass auch sie das URL-Präfix `/en/` erhält. Die bisherigen englischen URLs ohne Sprachpräfix leiten auf die entsprechenden `/en/`-Seiten weiter; `/` leitet auf `/en/` weiter.

Die Sprachwahl in der Navigation verlinkt dasselbe Kapitel in den anderen Sprachen. Blume übersetzt die Oberfläche und beschränkt die Suche standardmäßig auf die aktuelle Sprache.

## Inhalte und Übersetzungen pflegen

- Lege neue englische Kapitel in `docs/` an und ergänze dieselbe Datei in `docs/de/` und `docs/da/`. Dateinamen und Unterverzeichnisse müssen übereinstimmen, damit Blume die Kapitel als Übersetzungen erkennt.
- Übersetze Titel, Beschreibungen und Text. Behalte strukturelle Frontmatter-Werte wie `sidebar.order` bei. Ton und Fachbegriffe sind in `blume.config.ts` unter `i18n.locales[].style` festgelegt.
- Verwende interne Links wie `[Bilder](/images)` in allen Sprachversionen. Blume ergänzt beim Rendern den passenden Sprachcode. Gemeinsame Dateien wie `/img/sign-up.png` bleiben in `public/` und erhalten kein Sprachpräfix.
- Behalte die Abschnittsanker der Ausgangsversion bei: `## Inhaltssprache [#content-language]`. So funktionieren Links zu Abschnitten auch beim Sprachwechsel.
- Die englischen Seiten `events.mdx` und `space-edit.mdx` sind noch leer; `image-best-practice.mdx` enthält einen Platzhalter. Die Übersetzungen übernehmen diesen Bearbeitungsstand.

`blume.translations.json` hält fest, auf welcher englischen Quellversion jede Übersetzung basiert. Nach Änderungen an einer Quellseite meldet die Übersetzungsprüfung die betroffenen Sprachversionen:

```sh
npm run translations:check
```

Zum Aktualisieren mit einer lokal installierten Agent-CLI kannst du `npx blume translate --codex` oder `npx blume translate --claude` verwenden, optional mit `--locale de` oder `--locale da`. Prüfe anschließend die Übersetzungen und übernimm die aktualisierte `blume.translations.json` zusammen mit den Inhalten. Bei manuellen Übersetzungen aktualisiere die Quellversion im Ledger erst, nachdem die Übersetzungen zur geänderten Quelle passen.

Eine weitere Sprache ergänzt du als zweistelligen Code unter `i18n.locales` und als entsprechendes Verzeichnis in `docs/`. Solange eine Übersetzung fehlt, zeigt Blume standardmäßig die englische Ausgangsversion unter der jeweiligen Sprach-URL.

## Prüfen und bauen

```sh
npm run doctor
npm run validate
npm run translations:check
npm run build
```

Der statische Build liegt anschließend in `dist/`.
