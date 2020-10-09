(self.webpackJsonp=self.webpackJsonp||[]).push([[54],{"./node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js ***!
  \********************************************************************/
/*! exports provided: conf, language */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: \"'\"\n    },\n    brackets: [\n        ['(', ')'],\n        ['[', ']'],\n        ['If', 'EndIf'],\n        ['While', 'EndWhile'],\n        ['For', 'EndFor'],\n        ['Sub', 'EndSub']\n    ],\n    autoClosingPairs: [\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.sb',\n    ignoreCase: true,\n    brackets: [\n        { token: 'delimiter.array', open: '[', close: ']' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\n        // Special bracket statement pairs\n        { token: 'keyword.tag-if', open: 'If', close: 'EndIf' },\n        { token: 'keyword.tag-while', open: 'While', close: 'EndWhile' },\n        { token: 'keyword.tag-for', open: 'For', close: 'EndFor' },\n        { token: 'keyword.tag-sub', open: 'Sub', close: 'EndSub' }\n    ],\n    keywords: [\n        'Else',\n        'ElseIf',\n        'EndFor',\n        'EndIf',\n        'EndSub',\n        'EndWhile',\n        'For',\n        'Goto',\n        'If',\n        'Step',\n        'Sub',\n        'Then',\n        'To',\n        'While'\n    ],\n    tagwords: ['If', 'Sub', 'While', 'For'],\n    operators: ['>', '<', '<>', '<=', '>=', 'And', 'Or', '+', '-', '*', '/', '='],\n    // we include these common regular expressions\n    identifier: /[a-zA-Z_][\\w]*/,\n    symbols: /[=><:+\\-*\\/%\\.,]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // whitespace\n            { include: '@whitespace' },\n            // classes\n            [/(@identifier)(?=[.])/, 'type'],\n            // identifiers, tagwords, and keywords\n            [\n                /@identifier/,\n                {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@operators': 'operator',\n                        '@default': 'variable.name'\n                    }\n                }\n            ],\n            // methods, properties, and events\n            [\n                /([.])(@identifier)/,\n                {\n                    cases: {\n                        $2: ['delimiter', 'type.member'],\n                        '@default': ''\n                    }\n                }\n            ],\n            // numbers\n            [/\\d*\\.\\d+/, 'number.float'],\n            [/\\d+/, 'number'],\n            // delimiters and operators\n            [/[()\\[\\]]/, '@brackets'],\n            [\n                /@symbols/,\n                {\n                    cases: {\n                        '@operators': 'operator',\n                        '@default': 'delimiter'\n                    }\n                }\n            ],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string']\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/(\\').*$/, 'comment']\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"C?/, 'string', '@pop']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js?")}}]);