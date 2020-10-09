const getRandId = () => (Math.random() * Date.now()).toString(36);
const express = require('express');var path = require('path');
const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '../frontend/dist/index.html';
var htmlPath = path.join(__dirname, '../frontend/dist');

const server = express()
  // .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .use(express.static(htmlPath))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new WebSocket.Server({ server });
CLIENTS = [];

const state = {
  task: {
    title: "A+B",
    description: "solve A+B",
    functionName: "add",
    tests: [
      { args: [1, 2], solution: 3 },
      { args: [2, 4], solution: 6 },
      { args: [-1, 2], solution: 1 },
      { args: [2, 4], solution: 6 },
    ],
  },
  isGameStarted: false,
  time: 10 * 60 * 1000,
}

const testJSCode = (code) => {
  return state.task.tests.map((test) => {
    try {
      const code2 = `
      ${code}
      return ${state.task.functionName}(...[${test.args.join(", ")}])`;
      var F = new Function(code2);
      var answer = F();
      if (answer === test.solution) {
        return "PASS";
      } else {
        return "FAIL"; //+ `${test.solution} != ${answer}`;
      }
    } catch (e) {
      return "FAIL : " + e.message;
    }
  });
}

function sendAll(message) {
  for (var i = 0; i < CLIENTS.length; i++) {
    CLIENTS[i].ws.send(message);
  }
}

function updAll() {
  sendAll(JSON.stringify(
    {
      type: "state",
      value: {
        ...state, clients: [...CLIENTS].map(c => { return { id: c.id, pass: c.passPercentage || 0 } }),
      }
    }));
}

setInterval(() => {
  updAll();

  console.log(state.isGameStarted, "____", [...CLIENTS].map(c => { return c.id; }));
}, 1000);

let gameInterval;

wss.on('connection', function connection(ws) {
  const client = { id: getRandId(), ws: ws, admin: CLIENTS.length === 0 };
  CLIENTS.push(client);

  updAll();

  if (client.admin) {
    ws.send(JSON.stringify({ type: "admin", value: true }));
  }

  ws.on("close", () => {
    console.log("CLOSE", client.id, client.admin);

    const index = CLIENTS.map(e => e.id).indexOf(client.id);

    if (index > -1) {
      console.log(index);
      CLIENTS.splice(index, 1);
    }

    if (client.admin && CLIENTS[0]) {
      CLIENTS[0].admin = true;
      CLIENTS[0].ws.send(JSON.stringify({ type: "admin", value: true }));
    }
  });

  ws.on('message', function incoming(message) {
    message = JSON.parse(message)

    switch (message.type) {
      case "test": {
        const code = message.code;
        res = testJSCode(code);

        const index = CLIENTS.map(e => e.id).indexOf(client.id);

        if (index > -1) {
          CLIENTS[index].tests = res;
          CLIENTS[index].passPercentage = (Math.round((res.filter(rr => rr[0] === "P").length / res.length) * 100));
          updAll();
        }
        ws.send(JSON.stringify({ type: "testResult", value: res }));
        break;
      }
      case "startGame": {
        state.isGameStarted = true;
        state.time = 10 * 60 * 1000,
        clearInterval(gameInterval);
        gameInterval = setInterval(() => {
          state.time -= 1000;
        }, 1000);
        break;
      }
      case "stopGame": {
        state.isGameStarted = false;
        updAll();
        clearInterval(gameInterval);
        break;
      }
      case "setTask": {
        const task = message.task;
        // console.log(task);
        state.task = JSON.parse(task);
        updAll();
        break;
      }
    }
  });
});