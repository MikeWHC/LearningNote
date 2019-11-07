// find biggest sum of Math.ceil(size/2) subsequence numbers
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let T;
let size;
let sum;
let leftend;
// let rightend;
let subSize;
let isEndOfCase = false;
let numOfCase = 0;
process.stdout.write('T=?\n');
rl.on('line', function (line) {
    console.log(line)
    if (T) {
        if (isEndOfCase) {
            subSize = Math.ceil(size/2);
            leftend = Number(line[0]);
            // rightend = Number(line[subSize - 1]);
            sum = line.slice(subSize - 1).reduce((a, s) => a + Number(s));
            for (let i=subSize;i<line.length;i++) {
                sum = Math.max(sum, sum - leftend + line[i]);
                leftend = i - subSize;
            }
            this.pause();
            const self = this;
            this.output.write(`Case #${++numOfCase}: ${sum}`, () => {
                self.resume();
            });
        } else {
            size = Number(line);
        }
        isEndOfCase = !isEndOfCase;
    } else {
        T = Number(line);
    }
});