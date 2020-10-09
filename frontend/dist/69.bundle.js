(self.webpackJsonp=self.webpackJsonp||[]).push([[69],{"./node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.js ***!
  \************************************************************************/
/*! exports provided: conf, language */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\nvar conf = {\n    comments: {\n        lineComment: '#'\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    folding: {\n        offSide: true\n    }\n};\nvar language = {\n    tokenPostfix: '.yaml',\n    brackets: [\n        { token: 'delimiter.bracket', open: '{', close: '}' },\n        { token: 'delimiter.square', open: '[', close: ']' }\n    ],\n    keywords: ['true', 'True', 'TRUE', 'false', 'False', 'FALSE', 'null', 'Null', 'Null', '~'],\n    numberInteger: /(?:0|[+-]?[0-9]+)/,\n    numberFloat: /(?:0|[+-]?[0-9]+)(?:\\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,\n    numberOctal: /0o[0-7]+/,\n    numberHex: /0x[0-9a-fA-F]+/,\n    numberInfinity: /[+-]?\\.(?:inf|Inf|INF)/,\n    numberNaN: /\\.(?:nan|Nan|NAN)/,\n    numberDate: /\\d{4}-\\d\\d-\\d\\d([Tt ]\\d\\d:\\d\\d:\\d\\d(\\.\\d+)?(( ?[+-]\\d\\d?(:\\d\\d)?)|Z)?)?/,\n    escapes: /\\\\(?:[btnfr\\\\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,\n    tokenizer: {\n        root: [\n            { include: '@whitespace' },\n            { include: '@comment' },\n            // Directive\n            [/%[^ ]+.*$/, 'meta.directive'],\n            // Document Markers\n            [/---/, 'operators.directivesEnd'],\n            [/\\.{3}/, 'operators.documentEnd'],\n            // Block Structure Indicators\n            [/[-?:](?= )/, 'operators'],\n            { include: '@anchor' },\n            { include: '@tagHandle' },\n            { include: '@flowCollections' },\n            { include: '@blockStyle' },\n            // Numbers\n            [/@numberInteger(?![ \\t]*\\S+)/, 'number'],\n            [/@numberFloat(?![ \\t]*\\S+)/, 'number.float'],\n            [/@numberOctal(?![ \\t]*\\S+)/, 'number.octal'],\n            [/@numberHex(?![ \\t]*\\S+)/, 'number.hex'],\n            [/@numberInfinity(?![ \\t]*\\S+)/, 'number.infinity'],\n            [/@numberNaN(?![ \\t]*\\S+)/, 'number.nan'],\n            [/@numberDate(?![ \\t]*\\S+)/, 'number.date'],\n            // Key:Value pair\n            [/(\".*?\"|'.*?'|.*?)([ \\t]*)(:)( |$)/, ['type', 'white', 'operators', 'white']],\n            { include: '@flowScalars' },\n            // String nodes\n            [\n                /.+$/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@default': 'string'\n                    }\n                }\n            ]\n        ],\n        // Flow Collection: Flow Mapping\n        object: [\n            { include: '@whitespace' },\n            { include: '@comment' },\n            // Flow Mapping termination\n            [/\\}/, '@brackets', '@pop'],\n            // Flow Mapping delimiter\n            [/,/, 'delimiter.comma'],\n            // Flow Mapping Key:Value delimiter\n            [/:(?= )/, 'operators'],\n            // Flow Mapping Key:Value key\n            [/(?:\".*?\"|'.*?'|[^,\\{\\[]+?)(?=: )/, 'type'],\n            // Start Flow Style\n            { include: '@flowCollections' },\n            { include: '@flowScalars' },\n            // Scalar Data types\n            { include: '@tagHandle' },\n            { include: '@anchor' },\n            { include: '@flowNumber' },\n            // Other value (keyword or string)\n            [\n                /[^\\},]+/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@default': 'string'\n                    }\n                }\n            ]\n        ],\n        // Flow Collection: Flow Sequence\n        array: [\n            { include: '@whitespace' },\n            { include: '@comment' },\n            // Flow Sequence termination\n            [/\\]/, '@brackets', '@pop'],\n            // Flow Sequence delimiter\n            [/,/, 'delimiter.comma'],\n            // Start Flow Style\n            { include: '@flowCollections' },\n            { include: '@flowScalars' },\n            // Scalar Data types\n            { include: '@tagHandle' },\n            { include: '@anchor' },\n            { include: '@flowNumber' },\n            // Other value (keyword or string)\n            [\n                /[^\\],]+/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@default': 'string'\n                    }\n                }\n            ]\n        ],\n        // First line of a Block Style\n        multiString: [[/^( +).+$/, 'string', '@multiStringContinued.$1']],\n        // Further lines of a Block Style\n        //   Workaround for indentation detection\n        multiStringContinued: [\n            [\n                /^( *).+$/,\n                {\n                    cases: {\n                        '$1==$S2': 'string',\n                        '@default': { token: '@rematch', next: '@popall' }\n                    }\n                }\n            ]\n        ],\n        whitespace: [[/[ \\t\\r\\n]+/, 'white']],\n        // Only line comments\n        comment: [[/#.*$/, 'comment']],\n        // Start Flow Collections\n        flowCollections: [\n            [/\\[/, '@brackets', '@array'],\n            [/\\{/, '@brackets', '@object']\n        ],\n        // Start Flow Scalars (quoted strings)\n        flowScalars: [\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/'[^']*'/, 'string'],\n            [/\"/, 'string', '@doubleQuotedString']\n        ],\n        doubleQuotedString: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, 'string', '@pop']\n        ],\n        // Start Block Scalar\n        blockStyle: [[/[>|][0-9]*[+-]?$/, 'operators', '@multiString']],\n        // Numbers in Flow Collections (terminate with ,]})\n        flowNumber: [\n            [/@numberInteger(?=[ \\t]*[,\\]\\}])/, 'number'],\n            [/@numberFloat(?=[ \\t]*[,\\]\\}])/, 'number.float'],\n            [/@numberOctal(?=[ \\t]*[,\\]\\}])/, 'number.octal'],\n            [/@numberHex(?=[ \\t]*[,\\]\\}])/, 'number.hex'],\n            [/@numberInfinity(?=[ \\t]*[,\\]\\}])/, 'number.infinity'],\n            [/@numberNaN(?=[ \\t]*[,\\]\\}])/, 'number.nan'],\n            [/@numberDate(?=[ \\t]*[,\\]\\}])/, 'number.date']\n        ],\n        tagHandle: [[/\\![^ ]*/, 'tag']],\n        anchor: [[/[&*][^ ]+/, 'namespace']]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.js?")}}]);