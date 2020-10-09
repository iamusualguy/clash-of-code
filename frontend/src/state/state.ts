import { action, computed, observable, reaction } from "mobx";

export interface Task {
    title: string;
    description: string;
    functionName: string;
}

export interface ServerState {
    task: Task;
    isGameStarted: boolean;
    time: number;
    clients: any[];
}

export class GameState {

    @observable
    public serverState: ServerState;

    @observable
    public code = "";

    @observable
    public admin = false;

    @observable
    public testRes: string[] = [];

    public constructor(
        public readonly ws: WebSocket,
    ) {
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            switch (data.type) {
                case "state": this.serverState = data.value; break;
                case "testResult": this.testRes = data.value; break;
                case "admin": this.admin = data.value; break;
            }
        }

        reaction(
            () => this.code,
            (code) => {
                this.runTests();
            },
        );

        reaction(
            () => this.serverState && this.serverState.task.functionName,
            (functionName) => {
                if (this.code === "") {
                    this.code = `function ${functionName}() { }`;
                }
            },
        );
    }

    @computed
    public get title(): string {
        return this.serverState?.task.title ?? "_";
    }

    @computed
    public get description(): string {
        return this.serverState?.task.description ?? "_";
    }

    @computed
    public get functionName(): string {
        return this.serverState?.task.functionName ?? "_";
    }

    @computed
    public get time(): number {
        return this.serverState?.time ?? 0;
    }

    @computed
    public get timeReadable(): string {
        const min = Math.floor((this.time / 1000 / 60) << 0).toString();
        const sec = Math.floor((this.time / 1000) % 60).toString();
        return min.padStart(2, '0') + ":" + sec.padStart(2, "0");
    }

    @observable
    public inc = 0

    @action.bound
    public setCode(s: string) {
        this.code = s;
    }

    @action.bound
    public runTests() {
        this.ws.send(JSON.stringify({ type: "test", code: this.code }))
    }

    @action.bound
    public submit() {
        // this.ws.send(JSON.stringify({ type: "test", code: this.code }))
    }

    @action.bound
    public startGame() {
        this.ws.send(JSON.stringify({ type: "startGame" }))
    }

    @action.bound
    public stopGame() {
        this.ws.send(JSON.stringify({ type: "stopGame" }))
    }

    @observable
    public taskBuffer = "";

    @action.bound
    public setTask() {
        this.ws.send(JSON.stringify({ type: "setTask", task: this.taskBuffer }))
    }
    
}