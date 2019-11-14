const express = require('express');
const serveIndex = require('serve-index');
const cors = require('cors');
const WebSocket = require('ws');
const http = require('http');
const { initNotify } = require('./notify');

const ws = require('./ws');

const app = express();
const port = 3000;

app.use(cors());

app.use((req, res, next) => {
  console.log('url', req.url);
  next();
});

app.use('/ws', ws);

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


const wss = new WebSocket.Server({ server });
initNotify(wss);

wss.on('connection', function connection(ws) {
  console.log('one connection arrived');
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('connected successfully');
});
