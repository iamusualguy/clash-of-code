import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import { observer } from 'mobx-react';
// @ts-ignore
import { registerRulesForLanguage } from "monaco-ace-tokenizer";
// @ts-ignore
import ScalaHighlightRules from 'monaco-ace-tokenizer/lib/ace/definitions/scala';
import { GameState } from '../state/state';

// @ts-ignore
self.MonacoEnvironment = {
    getWorkerUrl: function (_moduleId: any, label: string) {
        if (label === 'json') {
            return './json.worker.bundle.js';
        }
        if (label === 'css') {
            return './css.worker.bundle.js';
        }
        if (label === 'html') {
            return './html.worker.bundle.js';
        }
        if (label === 'typescript' || label === 'javascript') {
            return './ts.worker.bundle.js';
        }
        return './editor.worker.bundle.js';
    }
};

export interface EditorProps {
    state: GameState;
}

export const Editor: React.FC<EditorProps> = observer((props) => {
    const divEl = useRef<HTMLDivElement>(null);
    let editor: monaco.editor.IStandaloneCodeEditor;
    useEffect(() => {
        if (divEl.current) {

            // monaco.languages.register({
            //     id: 'scala',
            // });

            // registerRulesForLanguage('scala', new ScalaHighlightRules());

            editor = monaco.editor.create(divEl.current, {
                value: ['// write some code here'].join('\n'),
                language: 'javascript',
                minimap: { enabled: false },
                renderWhitespace: 'all',
                insertSpaces: true,
            });

            editor.onKeyUp(() => { props.state.setCode(editor.getValue()) });

        }
        return () => {
            editor.dispose();
        };
    }, []);
    return <div className="Editor" ref={divEl}></div>;
});
