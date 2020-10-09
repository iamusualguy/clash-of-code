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
            <div className="container" style={{ width: " 40vw", marginLeft: "9vw" }}>
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
                <div className="card">
                    <div className="card-body">
                        Input: <code>{serverState && serverState.task.input}</code>
                        <br />
    Output: <code>{serverState && serverState.task.output}</code>
                    </div>
                </div>
                <hr />
                {serverState && (serverState.isGameStarted || admin) &&
                    <>
                        <ul className="list-group" >
                            {testRes.map(test => {
                                if (test[0] === "P") {
                                    return <li className="list-group-item list-group-item-success">{test}</li>;
                                } else {
                                    return <li className="list-group-item list-group-item-danger">{test}</li>;
                                }
                            })}
                        </ul>
                        <hr />
                    </>
                }
                <ul className="list-group">
                    {serverState && serverState.clients.map(cl => {
                        return (<li className="list-group-item d-flex justify-content-between align-items-center">
                            <span className="badge badge-success badge-pill">{cl.place || ""}</span>
                            @ {cl.name}
                            
                            <span className="badge badge-primary badge-pill">{cl.pass}%</span>
                        </li>)
                    })}
                </ul>
                <br />
                <div className="input-group flex-nowrap">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        onChange={(event) => { this.props.state.name = event.target.value; this.props.state.setName(); }}
                    />

                </div>
                {admin && <AdminPanel state={this.props.state} />}
            </div>
            <Editor state={this.props.state} />
        </>;
    }
}
