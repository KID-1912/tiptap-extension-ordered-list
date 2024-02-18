# tiptap-extension-ordered-list

<h3 align="center">
    Tiptap ordered list extension with custom list-style-type support.
</h3>

<br/>

<p align="center">
  <a href="https://www.npmjs.com/package/tiptap-extension-ordered-list">
    <img
     alt="NPM URL"
     src="https://img.shields.io/badge/npm-tiptapExtensionOrderedList?logo=npm">
  </a>
  <img
     alt="version"
     src="https://img.shields.io/badge/version-1.0.0-blue">
</p>

<br>

---

## Install

```shell
npm install tiptap-extension-ordered-list -S
```

## Usage

```js
const listType = e.target.dataset.listType; // decimal lower-alpha lower-roman upper-alpha upper-roman
let chain = editor.chain().focus();
// 开启列表类型
if (!editor.isActive("orderedList")) {
  chain.toggleOrderedList().updateAttributes("orderedList", { listStyleType });
}
// 切换列表类型
else if (editor.getAttributes("orderedList").listStyleType !== listStyleType) {
  chain.updateAttributes("orderedList", { listStyleType });
}
// 关闭列表类型
else {
  chain.toggleOrderedList();
}
```

## Options

Add `listStyleType` option, other options are same as `@tiptap/extension-ordered-list`

```js
import OrderedList from "tiptap-extension-ordered-list";

const editor = new Editor({
  element: document.querySelector(".editor"),
  extensions: [
    StarterKit,
    OrderedList.configure({
      listStyleType: "decimal", // default decimal
      HTMLAttributes: { class: "list-paddingleft-1" },
    }),
  ],
});
```

## Relations

**@tiptap/extension-ordered-list:** https://github.com/ueberdosis/tiptap/tree/develop/packages/extension-ordered-list

**tiptap-appmsg-editor:** https://github.com/KID-1912/tiptap-appmsg-editor
