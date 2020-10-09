(self.webpackJsonp=self.webpackJsonp||[]).push([[45],{"./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js ***!
  \**********************************************************************/
/*! exports provided: conf, language */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: '//'\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] },\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] }\n    ],\n    folding: {\n        offSide: true\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.pug',\n    ignoreCase: true,\n    brackets: [\n        { token: 'delimiter.curly', open: '{', close: '}' },\n        { token: 'delimiter.array', open: '[', close: ']' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' }\n    ],\n    keywords: [\n        'append',\n        'block',\n        'case',\n        'default',\n        'doctype',\n        'each',\n        'else',\n        'extends',\n        'for',\n        'if',\n        'in',\n        'include',\n        'mixin',\n        'typeof',\n        'unless',\n        'var',\n        'when'\n    ],\n    tags: [\n        'a',\n        'abbr',\n        'acronym',\n        'address',\n        'area',\n        'article',\n        'aside',\n        'audio',\n        'b',\n        'base',\n        'basefont',\n        'bdi',\n        'bdo',\n        'blockquote',\n        'body',\n        'br',\n        'button',\n        'canvas',\n        'caption',\n        'center',\n        'cite',\n        'code',\n        'col',\n        'colgroup',\n        'command',\n        'datalist',\n        'dd',\n        'del',\n        'details',\n        'dfn',\n        'div',\n        'dl',\n        'dt',\n        'em',\n        'embed',\n        'fieldset',\n        'figcaption',\n        'figure',\n        'font',\n        'footer',\n        'form',\n        'frame',\n        'frameset',\n        'h1',\n        'h2',\n        'h3',\n        'h4',\n        'h5',\n        'h6',\n        'head',\n        'header',\n        'hgroup',\n        'hr',\n        'html',\n        'i',\n        'iframe',\n        'img',\n        'input',\n        'ins',\n        'keygen',\n        'kbd',\n        'label',\n        'li',\n        'link',\n        'map',\n        'mark',\n        'menu',\n        'meta',\n        'meter',\n        'nav',\n        'noframes',\n        'noscript',\n        'object',\n        'ol',\n        'optgroup',\n        'option',\n        'output',\n        'p',\n        'param',\n        'pre',\n        'progress',\n        'q',\n        'rp',\n        'rt',\n        'ruby',\n        's',\n        'samp',\n        'script',\n        'section',\n        'select',\n        'small',\n        'source',\n        'span',\n        'strike',\n        'strong',\n        'style',\n        'sub',\n        'summary',\n        'sup',\n        'table',\n        'tbody',\n        'td',\n        'textarea',\n        'tfoot',\n        'th',\n        'thead',\n        'time',\n        'title',\n        'tr',\n        'tracks',\n        'tt',\n        'u',\n        'ul',\n        'video',\n        'wbr'\n    ],\n    // we include these common regular expressions\n    symbols: /[\\+\\-\\*\\%\\&\\|\\!\\=\\/\\.\\,\\:]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    tokenizer: {\n        root: [\n            // Tag or a keyword at start\n            [\n                /^(\\s*)([a-zA-Z_-][\\w-]*)/,\n                {\n                    cases: {\n                        '$2@tags': {\n                            cases: {\n                                '@eos': ['', 'tag'],\n                                '@default': ['', { token: 'tag', next: '@tag.$1' }]\n                            }\n                        },\n                        '$2@keywords': ['', { token: 'keyword.$2' }],\n                        '@default': ['', '']\n                    }\n                }\n            ],\n            // id\n            [\n                /^(\\s*)(#[a-zA-Z_-][\\w-]*)/,\n                {\n                    cases: {\n                        '@eos': ['', 'tag.id'],\n                        '@default': ['', { token: 'tag.id', next: '@tag.$1' }]\n                    }\n                }\n            ],\n            // class\n            [\n                /^(\\s*)(\\.[a-zA-Z_-][\\w-]*)/,\n                {\n                    cases: {\n                        '@eos': ['', 'tag.class'],\n                        '@default': ['', { token: 'tag.class', next: '@tag.$1' }]\n                    }\n                }\n            ],\n            // plain text with pipe\n            [/^(\\s*)(\\|.*)$/, ''],\n            { include: '@whitespace' },\n            // keywords\n            [\n                /[a-zA-Z_$][\\w$]*/,\n                {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': ''\n                    }\n                }\n            ],\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/@symbols/, 'delimiter'],\n            // numbers\n            [/\\d+\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/\\d+/, 'number'],\n            // strings:\n            [/\"/, 'string', '@string.\"'],\n            [/'/, 'string', \"@string.'\"]\n        ],\n        tag: [\n            [/(\\.)(\\s*$)/, [{ token: 'delimiter', next: '@blockText.$S2.' }, '']],\n            [/\\s+/, { token: '', next: '@simpleText' }],\n            // id\n            [\n                /#[a-zA-Z_-][\\w-]*/,\n                {\n                    cases: {\n                        '@eos': { token: 'tag.id', next: '@pop' },\n                        '@default': 'tag.id'\n                    }\n                }\n            ],\n            // class\n            [\n                /\\.[a-zA-Z_-][\\w-]*/,\n                {\n                    cases: {\n                        '@eos': { token: 'tag.class', next: '@pop' },\n                        '@default': 'tag.class'\n                    }\n                }\n            ],\n            // attributes\n            [/\\(/, { token: 'delimiter.parenthesis', next: '@attributeList' }]\n        ],\n        simpleText: [\n            [/[^#]+$/, { token: '', next: '@popall' }],\n            [/[^#]+/, { token: '' }],\n            // interpolation\n            [\n                /(#{)([^}]*)(})/,\n                {\n                    cases: {\n                        '@eos': [\n                            'interpolation.delimiter',\n                            'interpolation',\n                            {\n                                token: 'interpolation.delimiter',\n                                next: '@popall'\n                            }\n                        ],\n                        '@default': [\n                            'interpolation.delimiter',\n                            'interpolation',\n                            'interpolation.delimiter'\n                        ]\n                    }\n                }\n            ],\n            [/#$/, { token: '', next: '@popall' }],\n            [/#/, '']\n        ],\n        attributeList: [\n            [/\\s+/, ''],\n            [\n                /(\\w+)(\\s*=\\s*)(\"|')/,\n                ['attribute.name', 'delimiter', { token: 'attribute.value', next: '@value.$3' }]\n            ],\n            [/\\w+/, 'attribute.name'],\n            [\n                /,/,\n                {\n                    cases: {\n                        '@eos': {\n                            token: 'attribute.delimiter',\n                            next: '@popall'\n                        },\n                        '@default': 'attribute.delimiter'\n                    }\n                }\n            ],\n            [/\\)$/, { token: 'delimiter.parenthesis', next: '@popall' }],\n            [/\\)/, { token: 'delimiter.parenthesis', next: '@pop' }]\n        ],\n        whitespace: [\n            [/^(\\s*)(\\/\\/.*)$/, { token: 'comment', next: '@blockText.$1.comment' }],\n            [/[ \\t\\r\\n]+/, ''],\n            [/\x3c!--/, { token: 'comment', next: '@comment' }]\n        ],\n        blockText: [\n            [\n                /^\\s+.*$/,\n                {\n                    cases: {\n                        '($S2\\\\s+.*$)': { token: '$S3' },\n                        '@default': { token: '@rematch', next: '@popall' }\n                    }\n                }\n            ],\n            [/./, { token: '@rematch', next: '@popall' }]\n        ],\n        comment: [\n            [/[^<\\-]+/, 'comment.content'],\n            [/--\x3e/, { token: 'comment', next: '@pop' }],\n            [/\x3c!--/, 'comment.content.invalid'],\n            [/[<\\-]/, 'comment.content']\n        ],\n        string: [\n            [\n                /[^\\\\\"'#]+/,\n                {\n                    cases: {\n                        '@eos': { token: 'string', next: '@popall' },\n                        '@default': 'string'\n                    }\n                }\n            ],\n            [\n                /@escapes/,\n                {\n                    cases: {\n                        '@eos': { token: 'string.escape', next: '@popall' },\n                        '@default': 'string.escape'\n                    }\n                }\n            ],\n            [\n                /\\\\./,\n                {\n                    cases: {\n                        '@eos': {\n                            token: 'string.escape.invalid',\n                            next: '@popall'\n                        },\n                        '@default': 'string.escape.invalid'\n                    }\n                }\n            ],\n            // interpolation\n            [\n                /(#{)([^}]*)(})/,\n                ['interpolation.delimiter', 'interpolation', 'interpolation.delimiter']\n            ],\n            [/#/, 'string'],\n            [\n                /[\"']/,\n                {\n                    cases: {\n                        '$#==$S2': { token: 'string', next: '@pop' },\n                        '@default': { token: 'string' }\n                    }\n                }\n            ]\n        ],\n        // Almost identical to above, except for escapes and the output token\n        value: [\n            [\n                /[^\\\\\"']+/,\n                {\n                    cases: {\n                        '@eos': { token: 'attribute.value', next: '@popall' },\n                        '@default': 'attribute.value'\n                    }\n                }\n            ],\n            [\n                /\\\\./,\n                {\n                    cases: {\n                        '@eos': { token: 'attribute.value', next: '@popall' },\n                        '@default': 'attribute.value'\n                    }\n                }\n            ],\n            [\n                /[\"']/,\n                {\n                    cases: {\n                        '$#==$S2': { token: 'attribute.value', next: '@pop' },\n                        '@default': { token: 'attribute.value' }\n                    }\n                }\n            ]\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js?")}}]);