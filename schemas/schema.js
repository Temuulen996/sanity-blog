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
        },
        {
          title: "Дэд гарчиг",
          name: "subtitle",
          type: "string",
          dscription: "write post type as text.",
        },
      ],
    },
  ]),
});
