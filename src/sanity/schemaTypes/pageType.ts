import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
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
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["Find-Woman-Imam", "Education-Hub", "Events"],
      },
    }),
  ],
});
