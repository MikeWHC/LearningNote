/**
 * By a given positive integer n, find the difference between the square of sum of 1 to n and the sum of 1 square to n square.
 * e.g. n = 2, (1 ** 2 + 2 ** 2) - (1 + 2) ** 2 = 9
 * @param {number} n 
 */

// the answer is equivalent to 2 * (1 * (sum - 1) + 2 * (sum - 2) + 3 * (sum - 3) ... ), where sum = n * (n + 1) / 2
function find (n) {
    let ans = 0,
        sum = n * (n + 1) / 2;
    for(var i=1;i<n;i++){
        sum -= i;
        ans += i * sum;
    }
    return 2 * ans;
}