var i = 0;
onconnect = function(event) {
    i++;
    var port = event.ports[0];
    port.postMessage('現在の値：' + i);
    port.onmessage = function(event) {
        port.postMessage('送信しました。：' + event.data);
    }
}
