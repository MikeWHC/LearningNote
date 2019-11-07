let fs = require('fs');
let readline = require('readline');
const filename = 'A-large-practice';

// 建立檔案讀取資料流
let inputStream = fs.createReadStream(`${__dirname}\\${filename}.in`);

// 建立檔案輸出資料流
let outputStream = fs.createWriteStream(`${__dirname}\\${filename}.out`);

// 將讀取資料流導入 Readline 進行處理 
let lineReader = readline.createInterface({ 
    input: inputStream,
    output: outputStream,
});
let lineIndex = 0;
console.time('s');
lineReader
    .on('line', function(line) {
        let ans = 0;
        let smax;
        let smaxStr = ''
        let isBeforeSmax = true;
        let s;
        let si;
        let sIndex = 0;
        let currSO = 0;
        let lackSO;
        for (let i = 0; i < line.length; i++) {
            s = line[i];
            if (s === ' ') {
                smax = Number(smaxStr);
                isBeforeSmax = false;
                lineIndex++;
            } else if (isBeforeSmax) {
                smaxStr += s;
            } else {
                si = Number(s);
                lackSO = sIndex - currSO;
                ans += (lackSO < 0 ? 0 : lackSO);
                currSO += si + (lackSO < 0 ? 0 : lackSO);
                if (currSO >= smax) {
                    break;
                }
                sIndex++;
            }
            // if (!isBeforeSmax) console.log(ans)
        }
        if (smax !== undefined) {
            this.output.write(`Case #${lineIndex}: ${ans}\n`);
        }
        // 取得一行行結果
        // console.log(line, ans);
    })
    .on('close', function () {
        console.timeEnd('s');
        console.log('done');
    })