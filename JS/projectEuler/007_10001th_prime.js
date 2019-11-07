/**
 * 13 is the 6th prime. Find the 10001th prime;
 * @param {number} n 
 */

// A prime is a number which cannot be evenly-divided by all the prime less than itself(or half of itself).
function Prime(){
    this.all = [2, 3];
    this.val = 3;
    this.index = 2;
}
Prime.prototype.next = function(){
    let curr = this.val + 2;
    while(!this.isPrime(curr)) {
        curr += 2;
    }
    this.val = curr;
    this.all.push(curr);
    this.index++;
}
Prime.prototype.isPrime = function(n){
    for(var i=0;i<this.all.length;i++){
        if (n % this.all[i] === 0) {
            return false;
        }
    }
    return true;
}
let p = new Prime;
while(p.index < 10001){
    p.next();
}
console.log(p.val);