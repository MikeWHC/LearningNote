// 求解第n項fibonacci數 0 1 1 2 3 5 8 13...
function fib(n) {
    if(n === 0 || n === 1) return n;
    let a = 0,
        b = 1,
        temp;
    for (var i=2;i<n;i++) {
        temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}
console.log(fib(6));