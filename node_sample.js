require('http').createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('サーバが応答しました。\n');
}).listen(5000, "localhost");
console.log('http://localhost:5000/でサーバを起動しました。');
