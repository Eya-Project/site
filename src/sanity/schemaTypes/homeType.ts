import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "Images",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "buttons",
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
