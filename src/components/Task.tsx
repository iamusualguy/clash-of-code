import * as React from 'react';
import { observer } from "mobx-react"
import { GameState } from '../state/state';
import { Editor } from './Editor';
import { AdminPanel } from './AdminPanel';

export interface TaskProps {
    state: GameState;
}

@observer
export class Task extends React.Component<TaskProps, {}> {
    public render() {
        const { title, description, functionName, timeReadable, testRes, admin, runTests, submit, serverState } = this.props.state
        return <>
            <div className="container">
                {
                    serverState && (serverState.isGameStarted || admin) &&
                    <>
                        <div className="badge badge-primary text-wrap" style={{ width: "6rem" }}>
                            {timeReadable}
                        </div>
                        <h1> {title}</h1>
                        <div> {description}</div>
                        <hr />
                        <pre><code>
                            function {functionName}() {"{"} {`\n    `}
                                return;
                                {`\n`}
                            {"}"}
                        </code></pre>
                        <hr />

                        {/* <div> {timeReadable}</div> */}
                        <ul className="list-group" style={{ width: " 20em" }}>
                            {testRes.map(test => {
                                if (test[0] === "P") {
                                    return <li className="list-group-item list-group-item-success">{test}</li>;
                                } else {
                                    return <li className="list-group-item list-group-item-danger">{test}</li>;
                                }
                            })}
                        </ul>
                        <hr />


                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary" onClick={() => { submit() }}> submit </button>
                            <button type="button" className="btn btn-secondary" onClick={() => { runTests() }}> runTests </button>
                        </div>
                        <hr />
                    </>
                }
                {admin && <AdminPanel state={this.props.state} />}
            </div>
            <Editor state={this.props.state} />
        </>;
    }
}
