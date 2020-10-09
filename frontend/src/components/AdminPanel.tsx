import * as React from 'react';
import { observer } from "mobx-react"
import { GameState } from '../state/state';
import { Editor } from './Editor';

export interface AdminPanelProps {
    state: GameState;
}

@observer
export class AdminPanel extends React.Component<AdminPanelProps, {}> {
    public render() {
        const { startGame, stopGame, setTask, serverState } = this.props.state
        return <>
            {/* <div > {serverState.clients && serverState.clients.map(c => `${c.name}:  ${c.pass}%`).join(", ")} </div> */}

            <hr />
            <textarea
                onChange={(event) => { this.props.state.taskBuffer = event.target.value; }}
                style={{ resize: "both" }}>
                {JSON.stringify(serverState.task)}
            </textarea>

            <br />

            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={() => { startGame() }}> startGame </button>
                <button type="button" className="btn btn-secondary" onClick={() => { stopGame() }}> stopGame </button>
                <button type="button" className="btn btn-info" onClick={() => { setTask() }}> setTask </button>
            </div>


        </>;
    }
}
