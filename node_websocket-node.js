var WebSocket = require('websocket').server;
var http = require('http').createServer (
  function(request, response) {
    response.end();
  }
);
 
http.listen(
  '5000', function() {
    console.log('listen:5000');
  }
);
 
ws = new WebSocket({'httpServer' : http});
ws.on('request', function(request) {
    console.log('リクエストを受信しました。.');
    request.accept(null, null);
  });
ws.on('connect', function(con) {
    console.log('接続されました。');
    con.sendUTF('Hello WebSocket1');
    con.sendUTF('Hello WebSocket2');
  });
