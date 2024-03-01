import "./chunk-3EJPJMEH.js";

// ../node_modules/.pnpm/vitepress-demo-editor@3.2.1_@vue+babel-plugin-jsx@1.2.1_@vue+runtime-core@3.4.19_@vue+runtime_ydorsn63hcapsszz2r7lmccdfa/node_modules/vitepress-demo-editor/dist/css.b3f19bd2.js
var e = {
  wordPattern: /(#?-?\d*\.\d\w*%?)|((::|[@#.!:])?[\w-?]+%?)|::|[@#.!:]/g,
  comments: {
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}", notIn: ["string", "comment"] },
    { open: "[", close: "]", notIn: ["string", "comment"] },
    { open: "(", close: ")", notIn: ["string", "comment"] },
    { open: '"', close: '"', notIn: ["string", "comment"] },
    { open: "'", close: "'", notIn: ["string", "comment"] }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),
      end: new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")
    }
  }
};
var t = {
  defaultToken: "",
  tokenPostfix: ".css",
  ws: `[ 	
\r\f]*`,
  identifier: "-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",
  brackets: [
    { open: "{", close: "}", token: "delimiter.bracket" },
    { open: "[", close: "]", token: "delimiter.bracket" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "<", close: ">", token: "delimiter.angle" }
  ],
  tokenizer: {
    root: [{ include: "@selector" }],
    selector: [
      { include: "@comments" },
      { include: "@import" },
      { include: "@strings" },
      [
        "[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)",
        { token: "keyword", next: "@keyframedeclaration" }
      ],
      ["[@](page|content|font-face|-moz-document)", { token: "keyword" }],
      ["[@](charset|namespace)", { token: "keyword", next: "@declarationbody" }],
      [
        "(url-prefix)(\\()",
        ["attribute.value", { token: "delimiter.parenthesis", next: "@urldeclaration" }]
      ],
      [
        "(url)(\\()",
        ["attribute.value", { token: "delimiter.parenthesis", next: "@urldeclaration" }]
      ],
      { include: "@selectorname" },
      ["[\\*]", "tag"],
      ["[>\\+,]", "delimiter"],
      ["\\[", { token: "delimiter.bracket", next: "@selectorattribute" }],
      ["{", { token: "delimiter.bracket", next: "@selectorbody" }]
    ],
    selectorbody: [
      { include: "@comments" },
      ["[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))", "attribute.name", "@rulevalue"],
      ["}", { token: "delimiter.bracket", next: "@pop" }]
    ],
    selectorname: [
      ["(\\.|#(?=[^{])|%|(@identifier)|:)+", "tag"]
    ],
    selectorattribute: [{ include: "@term" }, ["]", { token: "delimiter.bracket", next: "@pop" }]],
    term: [
      { include: "@comments" },
      [
        "(url-prefix)(\\()",
        ["attribute.value", { token: "delimiter.parenthesis", next: "@urldeclaration" }]
      ],
      [
        "(url)(\\()",
        ["attribute.value", { token: "delimiter.parenthesis", next: "@urldeclaration" }]
      ],
      { include: "@functioninvocation" },
      { include: "@numbers" },
      { include: "@name" },
      { include: "@strings" },
      ["([<>=\\+\\-\\*\\/\\^\\|\\~,])", "delimiter"],
      [",", "delimiter"]
    ],
    rulevalue: [
      { include: "@comments" },
      { include: "@strings" },
      { include: "@term" },
      ["!important", "keyword"],
      [";", "delimiter", "@pop"],
      ["(?=})", { token: "", next: "@pop" }]
    ],
    warndebug: [["[@](warn|debug)", { token: "keyword", next: "@declarationbody" }]],
    import: [["[@](import)", { token: "keyword", next: "@declarationbody" }]],
    urldeclaration: [
      { include: "@strings" },
      [`[^)\r
]+`, "string"],
      ["\\)", { token: "delimiter.parenthesis", next: "@pop" }]
    ],
    parenthizedterm: [
      { include: "@term" },
      ["\\)", { token: "delimiter.parenthesis", next: "@pop" }]
    ],
    declarationbody: [
      { include: "@term" },
      [";", "delimiter", "@pop"],
      ["(?=})", { token: "", next: "@pop" }]
    ],
    comments: [
      ["\\/\\*", "comment", "@comment"],
      ["\\/\\/+.*", "comment"]
    ],
    comment: [
      ["\\*\\/", "comment", "@pop"],
      [/[^*/]+/, "comment"],
      [/./, "comment"]
    ],
    name: [["@identifier", "attribute.value"]],
    numbers: [
      ["-?(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?", { token: "attribute.value.number", next: "@units" }],
      ["#[0-9a-fA-F_]+(?!\\w)", "attribute.value.hex"]
    ],
    units: [
      [
        "(em|ex|ch|rem|fr|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?",
        "attribute.value.unit",
        "@pop"
      ]
    ],
    keyframedeclaration: [
      ["@identifier", "attribute.value"],
      ["{", { token: "delimiter.bracket", switchTo: "@keyframebody" }]
    ],
    keyframebody: [
      { include: "@term" },
      ["{", { token: "delimiter.bracket", next: "@selectorbody" }],
      ["}", { token: "delimiter.bracket", next: "@pop" }]
    ],
    functioninvocation: [
      ["@identifier\\(", { token: "attribute.value", next: "@functionarguments" }]
    ],
    functionarguments: [
      ["\\$@identifier@ws:", "attribute.name"],
      ["[,]", "delimiter"],
      { include: "@term" },
      ["\\)", { token: "attribute.value", next: "@pop" }]
    ],
    strings: [
      ['~?"', { token: "string", next: "@stringenddoublequote" }],
      ["~?'", { token: "string", next: "@stringendquote" }]
    ],
    stringenddoublequote: [
      ["\\\\.", "string"],
      ['"', { token: "string", next: "@pop" }],
      [/[^\\"]+/, "string"],
      [".", "string"]
    ],
    stringendquote: [
      ["\\\\.", "string"],
      ["'", { token: "string", next: "@pop" }],
      [/[^\\']+/, "string"],
      [".", "string"]
    ]
  }
};
export {
  e as conf,
  t as language
};
/*! Bundled license information:

vitepress-demo-editor/dist/css.b3f19bd2.js:
  (*!-----------------------------------------------------------------------------
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Version: 0.33.8(ed685c1f00d1ff3e2873cec2aae0bd338313c4c2)
   * Released under the MIT license
   * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
   *-----------------------------------------------------------------------------*)
*/
//# sourceMappingURL=css.b3f19bd2-V7MIHZ4Y.js.map
