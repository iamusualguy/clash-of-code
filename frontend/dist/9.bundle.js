(self.webpackJsonp=self.webpackJsonp||[]).push([[9],{"./node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: '#'\n    }\n};\nvar language = {\n    defaultToken: 'keyword',\n    ignoreCase: true,\n    tokenPostfix: '.azcli',\n    str: /[^#\\s]/,\n    tokenizer: {\n        root: [\n            { include: '@comment' },\n            [\n                /\\s-+@str*\\s*/,\n                {\n                    cases: {\n                        '@eos': { token: 'key.identifier', next: '@popall' },\n                        '@default': { token: 'key.identifier', next: '@type' }\n                    }\n                }\n            ],\n            [\n                /^-+@str*\\s*/,\n                {\n                    cases: {\n                        '@eos': { token: 'key.identifier', next: '@popall' },\n                        '@default': { token: 'key.identifier', next: '@type' }\n                    }\n                }\n            ]\n        ],\n        type: [\n            { include: '@comment' },\n            [\n                /-+@str*\\s*/,\n                {\n                    cases: {\n                        '@eos': { token: 'key.identifier', next: '@popall' },\n                        '@default': 'key.identifier'\n                    }\n                }\n            ],\n            [\n                /@str+\\s*/,\n                {\n                    cases: {\n                        '@eos': { token: 'string', next: '@popall' },\n                        '@default': 'string'\n                    }\n                }\n            ]\n        ],\n        comment: [\n            [\n                /#.*$/,\n                {\n                    cases: {\n                        '@eos': { token: 'comment', next: '@popall' }\n                    }\n                }\n            ]\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.js?")}}]);