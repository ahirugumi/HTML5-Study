var sys = require('sys');
var server = require('websocket-server').createServer();
server.addListener("connection", function(connection) {
    sys.puts("サーバに接続されました。");
    connection.addListener("message", function(message){
        sys.puts(message)
    });
});
server.addListener("close", function(connection) {
    sys.puts("サーバの接続が解除されました。");
});
server.listen(5000);
