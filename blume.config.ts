import { defineConfig } from "blume";

export default defineConfig({
  title: "kulturbytes Manual",
  description: "Manual for the kulturbytes Dashboard",

  i18n: {
    defaultLocale: "en",

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
        `,
      },
    ],
  },
});