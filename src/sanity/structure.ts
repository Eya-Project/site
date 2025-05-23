import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Site")
    .items([
      S.documentTypeListItem("nav").title("Nav"),
      S.documentTypeListItem("home").title("Home"),
      S.documentTypeListItem("country").title("Country"),
      S.documentTypeListItem("imam").title("Imam"),
      S.documentTypeListItem("event").title("Event"),
      S.documentTypeListItem("faq").title("FAQ"),
      S.documentTypeListItem("page").title("Page"),
    ]);
