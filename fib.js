function* fib() {
    var x = 0;
    var y = 1;
    while(true) {
        var temp = y;
        y += x;
        yield x = temp;
    }
}

var iter = fib();
for(let i = 0; i < 8
    ; i++) {
    console.log(iter.next().value);
}