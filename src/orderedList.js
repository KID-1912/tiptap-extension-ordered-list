import OrderedList from "@tiptap/extension-ordered-list";

export default OrderedList.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      listStyleType: {
        default: "decimal",
        parseHTML: (element) => {
          const listStyleType = element.style["list-style-type"];
          return { listStyleType: listStyleType || "decimal" };
        },
        renderHTML: (attributes) => {
          return { style: `list-style-type: ${attributes.listStyleType}` };
        },
      },
    };
  },
});
