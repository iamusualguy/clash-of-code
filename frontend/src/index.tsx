import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { GameState } from './state/state';
import { Task } from './components/Task';

var HOST = location.origin.replace(/^http/, 'ws')

const state = new GameState(new WebSocket(HOST));
// const state = new GameState(new WebSocket("ws://localhost:3000"));

// var ws = new WebSocket("ws://localhost:1234");


ReactDOM.render(
    <Task state={state} />,
    document.getElementById('root')
);
