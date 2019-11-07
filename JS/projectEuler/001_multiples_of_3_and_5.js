/**
 * Sum up all numbers which is neither multiple of 3 nor multiple of 5, and each number is less than n.
 * @param {number} n 
 */
function go(n){
    let ans = 0;
    for(var i=1;i<n;i++){
        if (i % 3 === 0 || i % 5 === 0) ans += i;
    }
    return ans;
}
go(1000);

// the question is equivalent to sum up multiples of 3 plus sum up multiples of 5 minus sum up multiples of 15
function go2(limit){
    function sum1toN(n){
        return n * (n + 1) / 2
    }
    function sumMultiples(limit, number){
        let count = Math.floor(limit / number);
        return sum1toN(count) * number;
    }
    return sumMultiples(limit - 1, 3) + sumMultiples(limit - 1, 5) - sumMultiples(limit - 1, 15);
}
go2(1000);