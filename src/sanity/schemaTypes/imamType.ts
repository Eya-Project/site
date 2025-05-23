import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const imamType = defineType({
  name: "imam",
  title: "Imam",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "profileImage",
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
      name: "name",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "phone",
      type: "string",
    }),
    defineField({
      name: "country",
      type: "reference",
      to: [{ type: "country" }],
    }),
    defineField({
      name: "Speciality",
      type: "array",
      of: [
        {
          type: "string"
        }
      ]
    })
  ],
});
