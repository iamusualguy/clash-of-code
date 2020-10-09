(self.webpackJsonp=self.webpackJsonp||[]).push([[16],{"./node_modules/monaco-editor/esm/vs/basic-languages/css/css.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/css/css.js ***!
  \**********************************************************************/
/*! exports provided: conf, language */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    wordPattern: /(#?-?\\d*\\.\\d\\w*%?)|((::|[@#.!:])?[\\w-?]+%?)|::|[@#.!:]/g,\n    comments: {\n        blockComment: ['/*', '*/']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp('^\\\\s*\\\\/\\\\*\\\\s*#region\\\\b\\\\s*(.*?)\\\\s*\\\\*\\\\/'),\n            end: new RegExp('^\\\\s*\\\\/\\\\*\\\\s*#endregion\\\\b.*\\\\*\\\\/')\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.css',\n    ws: '[ \\t\\n\\r\\f]*',\n    identifier: '-?-?([a-zA-Z]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))([\\\\w\\\\-]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))*',\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.bracket' },\n        { open: '[', close: ']', token: 'delimiter.bracket' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '<', close: '>', token: 'delimiter.angle' }\n    ],\n    tokenizer: {\n        root: [{ include: '@selector' }],\n        selector: [\n            { include: '@comments' },\n            { include: '@import' },\n            { include: '@strings' },\n            [\n                '[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)',\n                { token: 'keyword', next: '@keyframedeclaration' }\n            ],\n            ['[@](page|content|font-face|-moz-document)', { token: 'keyword' }],\n            ['[@](charset|namespace)', { token: 'keyword', next: '@declarationbody' }],\n            [\n                '(url-prefix)(\\\\()',\n                ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]\n            ],\n            [\n                '(url)(\\\\()',\n                ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]\n            ],\n            { include: '@selectorname' },\n            ['[\\\\*]', 'tag'],\n            ['[>\\\\+,]', 'delimiter'],\n            ['\\\\[', { token: 'delimiter.bracket', next: '@selectorattribute' }],\n            ['{', { token: 'delimiter.bracket', next: '@selectorbody' }]\n        ],\n        selectorbody: [\n            { include: '@comments' },\n            ['[*_]?@identifier@ws:(?=(\\\\s|\\\\d|[^{;}]*[;}]))', 'attribute.name', '@rulevalue'],\n            ['}', { token: 'delimiter.bracket', next: '@pop' }]\n        ],\n        selectorname: [\n            ['(\\\\.|#(?=[^{])|%|(@identifier)|:)+', 'tag'] // selector (.foo, div, ...)\n        ],\n        selectorattribute: [\n            { include: '@term' },\n            [']', { token: 'delimiter.bracket', next: '@pop' }]\n        ],\n        term: [\n            { include: '@comments' },\n            [\n                '(url-prefix)(\\\\()',\n                ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]\n            ],\n            [\n                '(url)(\\\\()',\n                ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]\n            ],\n            { include: '@functioninvocation' },\n            { include: '@numbers' },\n            { include: '@name' },\n            ['([<>=\\\\+\\\\-\\\\*\\\\/\\\\^\\\\|\\\\~,])', 'delimiter'],\n            [',', 'delimiter']\n        ],\n        rulevalue: [\n            { include: '@comments' },\n            { include: '@strings' },\n            { include: '@term' },\n            ['!important', 'keyword'],\n            [';', 'delimiter', '@pop'],\n            ['(?=})', { token: '', next: '@pop' }] // missing semicolon\n        ],\n        warndebug: [['[@](warn|debug)', { token: 'keyword', next: '@declarationbody' }]],\n        import: [['[@](import)', { token: 'keyword', next: '@declarationbody' }]],\n        urldeclaration: [\n            { include: '@strings' },\n            ['[^)\\r\\n]+', 'string'],\n            ['\\\\)', { token: 'delimiter.parenthesis', next: '@pop' }]\n        ],\n        parenthizedterm: [\n            { include: '@term' },\n            ['\\\\)', { token: 'delimiter.parenthesis', next: '@pop' }]\n        ],\n        declarationbody: [\n            { include: '@term' },\n            [';', 'delimiter', '@pop'],\n            ['(?=})', { token: '', next: '@pop' }] // missing semicolon\n        ],\n        comments: [\n            ['\\\\/\\\\*', 'comment', '@comment'],\n            ['\\\\/\\\\/+.*', 'comment']\n        ],\n        comment: [\n            ['\\\\*\\\\/', 'comment', '@pop'],\n            [/[^*/]+/, 'comment'],\n            [/./, 'comment']\n        ],\n        name: [['@identifier', 'attribute.value']],\n        numbers: [\n            [\n                '-?(\\\\d*\\\\.)?\\\\d+([eE][\\\\-+]?\\\\d+)?',\n                { token: 'attribute.value.number', next: '@units' }\n            ],\n            ['#[0-9a-fA-F_]+(?!\\\\w)', 'attribute.value.hex']\n        ],\n        units: [\n            [\n                '(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?',\n                'attribute.value.unit',\n                '@pop'\n            ]\n        ],\n        keyframedeclaration: [\n            ['@identifier', 'attribute.value'],\n            ['{', { token: 'delimiter.bracket', switchTo: '@keyframebody' }]\n        ],\n        keyframebody: [\n            { include: '@term' },\n            ['{', { token: 'delimiter.bracket', next: '@selectorbody' }],\n            ['}', { token: 'delimiter.bracket', next: '@pop' }]\n        ],\n        functioninvocation: [\n            ['@identifier\\\\(', { token: 'attribute.value', next: '@functionarguments' }]\n        ],\n        functionarguments: [\n            ['\\\\$@identifier@ws:', 'attribute.name'],\n            ['[,]', 'delimiter'],\n            { include: '@term' },\n            ['\\\\)', { token: 'attribute.value', next: '@pop' }]\n        ],\n        strings: [\n            ['~?\"', { token: 'string', next: '@stringenddoublequote' }],\n            [\"~?'\", { token: 'string', next: '@stringendquote' }]\n        ],\n        stringenddoublequote: [\n            ['\\\\\\\\.', 'string'],\n            ['\"', { token: 'string', next: '@pop' }],\n            [/[^\\\\\"]+/, 'string'],\n            ['.', 'string']\n        ],\n        stringendquote: [\n            ['\\\\\\\\.', 'string'],\n            [\"'\", { token: 'string', next: '@pop' }],\n            [/[^\\\\']+/, 'string'],\n            ['.', 'string']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/css/css.js?")}}]);