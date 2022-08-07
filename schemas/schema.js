// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title: "Постууд",
      name: "post",
      type: "document",
      fields: [
        {
          title: "title of post",
          name: "title",
          type: "string",
          description: "main title of blog, it cant be bigger than 50 letters.",
          validation: (Rule) => [
            Rule.required()
              .min(5)

              .error("Гарчиг богино тусмаа сайн.(10 тэмдэгтээс багагүй.)"),
            Rule.required()

              .max(80)
              .warning("Гарчиг богино тусмаа сайн.(80 тэмдэгтээс хэтрэхгүй.)"),
          ],
        },
        {
          title: "Дэд гарчиг",
          name: "subtitle",
          type: "string",
          dscription: "write post type as text.",
        },
        {
          title: "зураг",
          name: "cover_image",
          type: "image",
        },

        // portableText.js
        {
          name: "portableText",
          type: "array",
          title: "Постын агуулга",
          of: [
            {
              type: "block",
            },
            { type: "image" },
            {
              type: "code",
            },
          ],
        },
        {
          title: "огноо",
          name: "date",
          type: "datetime",
        },
        {
          title: "хаяг",
          name: "slug",
          type: "slug",
          options: {
            source: "title",
            maxLength: 200, // will be ignored if slugify is set
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
          },
        },
        {
          title: "Нийтлэгч",
          name: "publisher",
          type: "reference",
          to: [{ type: "publisher" }],
        },
      ],
    },
    {
      title: "нийтлэгч",
      name: "publisher",
      type: "document",
      fields: [
        {
          title: "нэр",
          name: "publisher_name",
          type: "string",
        },
        {
          title: "зураг",
          name: "publisher_image",
          type: "image",
        },
      ],
    },
  ]),
});
