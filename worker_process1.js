onmessage=function(event){
    var sum=0;
    for (var i=0; i<=event.data; i++){
      sum = sum + i;
    }
    postMessage("合計" + sum);
}
