import { defineType } from "sanity";

export const productSchema = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      title: "Price without Discount",
      name: "priceWithoutDiscount",
      type: "number",
    },
    {
      title: "Discounted Price",
      name: "discountedPrice",
      type: "number",
      description: "The price after applying discounts (if any).",
    },
    {
      title: "Discount Percentage",
      name: "discountPercentage",
      type: "number",
      description: "Automatically calculated based on the price difference.",
      readOnly: true, // Prevent manual entry
      options: {
        computed: {
          function: (document: any) => {
            if (document.priceWithoutDiscount && document.discountedPrice) {
              return Math.round(
                ((document.priceWithoutDiscount - document.discountedPrice) /
                  document.priceWithoutDiscount) *
                  100
              );
            }
            return 0;
          },
        },
      },
    },
    {
      title: "Ratings",
      name: "ratings",
      type: "number",
      description: "Product rating on a scale of 1 to 5.",
      validation: (Rule) =>
        Rule.min(1)
          .max(5)
          .precision(1)
          .error("Rating must be between 1 and 5."),
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "inventory",
      title: "Inventory Management",
      type: "number",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Featured", value: "featured" },
          {
            title: "Follow products and discounts on Instagram",
            value: "instagram",
          },
          { title: "Gallery", value: "gallery" },
        ],
      },
    },
  ],
});
