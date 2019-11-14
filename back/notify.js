let wss;

const WebSocket = require('ws');

function notify() {
  console.log('start notify');
  if (wss) {
    console.log('wss instantiated');
  }
  wss.clients.forEach(function each(client) {
    console.log('client: ');
    if (client.readyState === WebSocket.OPEN) {
      client.send('refresh');
    }
  });
}

function initNotify(myWss) {
  wss = myWss;
}

module.exports = {
  notify,
  initNotify
};
