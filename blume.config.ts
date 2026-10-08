import { defineConfig } from "blume";

export default defineConfig({
  title: "kulturbytes Manual",
  description: "Manual for the kulturbytes Dashboard",

  // Keep existing English links working after adding the /en URL prefix.
  redirects: [
    { from: "/", to: "/en", status: 308 },
    ...[
      "overview",
      "register",
      "dashboard",
      "organization",
      "organization-edit",
      "venue-and-space",
      "venue-edit",
      "space-edit",
      "events",
      "event-edit",
      "images",
      "image-best-practice",
      "logos",
      "maps",
    ].map((slug) => ({
      from: `/${slug}`,
      to: `/en/${slug}`,
      status: 308 as const,
    })),
  ],

  i18n: {
    defaultLocale: "en",
    parser: "dir",
    hideDefaultLocalePrefix: false,

    locales: [
      {
        code: "en",
        label: "English",
        style: `
          Use a clear, friendly and informal tone.
          "kulturbytes" and "Uranus Dashboard" are product names
          and must not be translated.
          Use the same English terminology consistently throughout
          the entire manual.
        `,
      },
      {
        code: "de",
        label: "Deutsch",
        style: `
          Verwende die Anrede "du".
          Schreibe klar, freundlich und verständlich.
          "kulturbytes" und "Uranus Dashboard" sind Produktnamen und
          dürfen nicht übersetzt werden.
          Verwende die Begriffe "Organization", "Ort", "Raum",
          "Veranstaltung", "Veranstaltungstermin", "Team", "Partner"
          und "Portal" konsistent.
        `,
      },
      {
        code: "da",
        label: "Dansk",
        style: `
          Brug en venlig og uformel tone.
          "kulturbytes" og "Uranus Dashboard" er produktnavne
          og må ikke oversættes.
          Brug de samme danske fagtermer konsekvent gennem hele manualen.
          Brug "organisation", "sted", "lokale", "arrangement",
          "arrangementstidspunkt", "team", "partner" og "portal".
        `,
      },
    ],
  },
});
