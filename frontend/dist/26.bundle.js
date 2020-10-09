(self.webpackJsonp=self.webpackJsonp||[]).push([[26],{"./node_modules/monaco-editor/esm/vs/basic-languages/java/java.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/java/java.js ***!
  \************************************************************************/
/*! exports provided: conf, language */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    // the default separators except `@$`\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" },\n        { open: '<', close: '>' }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp('^\\\\s*//\\\\s*(?:(?:#?region\\\\b)|(?:<editor-fold\\\\b))'),\n            end: new RegExp('^\\\\s*//\\\\s*(?:(?:#?endregion\\\\b)|(?:</editor-fold>))')\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.java',\n    keywords: [\n        'abstract',\n        'continue',\n        'for',\n        'new',\n        'switch',\n        'assert',\n        'default',\n        'goto',\n        'package',\n        'synchronized',\n        'boolean',\n        'do',\n        'if',\n        'private',\n        'this',\n        'break',\n        'double',\n        'implements',\n        'protected',\n        'throw',\n        'byte',\n        'else',\n        'import',\n        'public',\n        'throws',\n        'case',\n        'enum',\n        'instanceof',\n        'return',\n        'transient',\n        'catch',\n        'extends',\n        'int',\n        'short',\n        'try',\n        'char',\n        'final',\n        'interface',\n        'static',\n        'void',\n        'class',\n        'finally',\n        'long',\n        'strictfp',\n        'volatile',\n        'const',\n        'float',\n        'native',\n        'super',\n        'while',\n        'true',\n        'false'\n    ],\n    operators: [\n        '=',\n        '>',\n        '<',\n        '!',\n        '~',\n        '?',\n        ':',\n        '==',\n        '<=',\n        '>=',\n        '!=',\n        '&&',\n        '||',\n        '++',\n        '--',\n        '+',\n        '-',\n        '*',\n        '/',\n        '&',\n        '|',\n        '^',\n        '%',\n        '<<',\n        '>>',\n        '>>>',\n        '+=',\n        '-=',\n        '*=',\n        '/=',\n        '&=',\n        '|=',\n        '^=',\n        '%=',\n        '<<=',\n        '>>=',\n        '>>>='\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    digits: /\\d+(_+\\d+)*/,\n    octaldigits: /[0-7]+(_+[0-7]+)*/,\n    binarydigits: /[0-1]+(_+[0-1]+)*/,\n    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [\n                /[a-zA-Z_$][\\w$]*/,\n                {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }\n            ],\n            // whitespace\n            { include: '@whitespace' },\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [\n                /@symbols/,\n                {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }\n            ],\n            // @ annotations.\n            [/@\\s*[a-zA-Z_\\$][\\w\\$]*/, 'annotation'],\n            // numbers\n            [/(@digits)[eE]([\\-+]?(@digits))?[fFdD]?/, 'number.float'],\n            [/(@digits)\\.(@digits)([eE][\\-+]?(@digits))?[fFdD]?/, 'number.float'],\n            [/0[xX](@hexdigits)[Ll]?/, 'number.hex'],\n            [/0(@octaldigits)[Ll]?/, 'number.octal'],\n            [/0[bB](@binarydigits)[Ll]?/, 'number.binary'],\n            [/(@digits)[fFdD]/, 'number.float'],\n            [/(@digits)[lL]?/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string'],\n            // characters\n            [/'[^\\\\']'/, 'string'],\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\n            [/'/, 'string.invalid']\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\\/\\*\\*(?!\\/)/, 'comment.doc', '@javadoc'],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment']\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            // [/\\/\\*/, 'comment', '@push' ],    // nested comment not allowed :-(\n            // [/\\/\\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/\n            [/\\*\\//, 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        //Identical copy of comment above, except for the addition of .doc\n        javadoc: [\n            [/[^\\/*]+/, 'comment.doc'],\n            // [/\\/\\*/, 'comment.doc', '@push' ],    // nested comment not allowed :-(\n            [/\\/\\*/, 'comment.doc.invalid'],\n            [/\\*\\//, 'comment.doc', '@pop'],\n            [/[\\/*]/, 'comment.doc']\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, 'string', '@pop']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/java/java.js?")}}]);