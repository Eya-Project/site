import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "Faq",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "question",
      type: "string",
    }),
    defineField({
      name: "answer",
      type: "string",
    }),
    defineField({
      name: "links",
      type: "array",
      of: [
        {
          type: "string"
        }
      ]
    }),
  ],
});
