class Towers{
    constructor(size){
        this.towerA = this.initTower(size);
        this.towerB = [];
        this.towerC = [];
        this.size = size;
    }
    initTower(size){
        return [...Array(size).keys()].map(n => n+1)
    }
    print(){
        let str = '',
            size = this.size,
            padTowerA = this.towerPad(this.towerA, size),
            padTowerB = this.towerPad(this.towerB, size),
            padTowerC = this.towerPad(this.towerC, size);
        for(var i=0; i<size; i++){
            str += padTowerA[i] + padTowerB[i] + padTowerC[i];
            str += '\n';
        }
        console.log(str);
    }
    towerPad(tower, size){
        let padTower = [...tower.map(n => ' ' + n)];
        for(var i=size; i>tower.length; i--){
            padTower.unshift(' .');
        }
        return padTower;
    }
    movePlate(from, to){
        let plate;
        switch(from){
            case 'A':
                plate = this.towerA.shift();
                break;
            case 'B':
                plate = this.towerB.shift();
                break;
            case 'C':
                plate = this.towerC.shift();
                break;
        }
        switch(to){
            case 'A':
                this.towerA.unshift(plate);
                break;
            case 'B':
                this.towerB.unshift(plate);
                break;
            case 'C':
                this.towerC.unshift(plate);
                break;
        }
        return this;
    }
}

/*
    n: 移動層數
    a: 從哪裡移
    b: 輔助塔
    c: 目標塔

    Q: 將n層盤從A移到C，B為輔助塔
    解題思路: 
    可拆為三步驟
    1. 將n-1層盤從A移到B，C為輔助塔
    2. 將1層盤(最大的)從A移到C，B為輔助塔
    3. 將n-1層盤從B移到C，A為輔助塔
    第1和第3步驟可各自在拆分為三步驟，直到n=1
*/
function hanoi(n, a, b, c) {    
    if(n === 1) {
        return [{from : a, to : c }]
    }
    return [
        ...hanoi(n - 1, a, c, b),
        ...hanoi(1, a, b, c),
        ...hanoi(n - 1, b, a, c)
    ];
}
let size = 7,
    towers = new Towers(size);
hanoi(size, 'A', 'B', 'C').forEach(function(move, i) {
    console.log('Step.' + (i + 1) + ' 盤從 ' + move.from + ' 移至 ' + move.to);
    towers.movePlate(move.from, move.to).print(size);
});

