import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const countryType = defineType({
  name: "country",
  title: "Country",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "latitude",
      type: "number",
    }),
    defineField({
      name: "longitude",
      type: "number",
    }),
  ],
});
