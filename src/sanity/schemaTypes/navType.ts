import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const navType = defineType({
  name: "nav",
  title: "Navbar",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "logo",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "pages",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
            }),
            defineField({
              name: "url",
              type: "string",
            }),
            defineField({
              name: "isActive",
              type: "boolean",
              options: {
                layout: "checkbox",
              },
            }),
          ],
        },
      ],
    }),
  ],
});
