/*
八皇后問題
8*8的棋盤上擺放八個皇后使任一皇后無法吃到另一個(棋盤上任一直線、橫線、斜線上只有一個皇后)
可延伸至n*n的棋盤上求解
*/

class Queens{
    constructor(size){
        this.size = size;
        this.currentSolution = [];
        this.solutionsNum;
        this.solutions = [];
        this.uniqueSolutions = [];
        this.col = [];
        this.slash = [];
        this.backSlash = [];
        this.go(0); // 找全部解
        this.filterUniq(); // 找獨立解，排除選轉和鏡射
    }
    go(row){
        if(row >= this.size) this.solutions.push([...this.currentSolution]);
        else {
            for(var i=0;i<this.size;i++) if( !( this.col[i] || this.slash[i + row] || this.backSlash[i - row + this.size] )){
                this.currentSolution[row] = i;
                this.col[i] = this.slash[i + row] = this.backSlash[i - row + this.size] = 1;
                this.go(row + 1);
                this.col[i] = this.slash[i + row] = this.backSlash[i - row + this.size] = 0;
            }
        }
    }
    filterUniq(){
        this.uniqueSolutions = this.solutions.reduce((a, sol) => {
            if(!a.length) return [sol];
            if(!this.isDuplicated(a, sol)) a.push(sol);
            return a;
        }, [])
    }
    symmetrize(sol){
        let newSol = [];
        sol.forEach((num, i) => {
            newSol[num] = i;
        })
        return newSol.join('');
    }
    isDuplicated(uniqSols, newSol){
        let isDuplicate = false,
            size = this.size,
            rotate90 = function(sol){
                let newAr = [];
                sol.forEach((num, i) => {
                    newAr[size-num-1] = i;
                })
                return newAr;
            },
            rotateSol90 = rotate90(newSol),
            rotateSol180 = rotate90(rotateSol90),
            rotateSol270 = rotate90(rotateSol180);
        
        // 自己 + 旋轉解 * 3 + 旋轉又行列互換 * 3
        // 行列互換就是鏡射再旋轉90度

        uniqSols.forEach(sol => {
            if(isDuplicate) return;
            
            isDuplicate = [
                newSol.join(''),
                rotateSol90.join(''),
                rotateSol180.join(''),
                rotateSol270.join(''),
                this.symmetrize(newSol),
                this.symmetrize(rotateSol90),
                this.symmetrize(rotateSol180),
                this.symmetrize(rotateSol270)
            ].includes(sol.join(''));
        })
        return isDuplicate;
    }
    printAll(){
        if(!this.solutions.length) return console.log(`${this.size}*${this.size}的皇后問題沒有解`);
        this.print(this.solutions);
    }
    printUniq(){
        if(!this.solutions.length) return console.log(`${this.size}*${this.size}的皇后問題沒有解`);
        this.print(this.uniqueSolutions);
    }
    print(sols){
        sols.forEach((sol, index) => {
            let str = '';
            sol.forEach(num => {
                for(var i=0;i<this.size;i++){
                    str += num === i ? ' Q' : ' .';
                }
                str += '\n';
            })
            console.log(`解${index+1}:\n${str}`);
        })
    }
}

let size = 11,
    queens = new Queens(size);

// queens.printAll();
queens.printUniq();
