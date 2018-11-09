/*
騎士走棋盤
8 * 8的棋盤，用騎士走法(走「日」字，同象棋的「馬」)不重複走地走完整個棋盤
解法: 將可能走法最少的位置先走完
*/
let start = [4, 5],
    pastMoves = [start],
    movesMap = (function(){
        let map = {};
        for(var i=1;i<=8;i++){
            for(var j=1;j<=8;j++){
                map[i + '' + j] = '00'
            }
        }
        return map;
    })()
    // 找到下個可以走的位置
    findNext = function(nowAt, pastMoves){
        let possibleMoves = [
            [nowAt[0] + 1, nowAt[1] + 2],
            [nowAt[0] + 2, nowAt[1] + 1],
            [nowAt[0] - 1, nowAt[1] - 2],
            [nowAt[0] - 2, nowAt[1] - 1],
            [nowAt[0] + 2, nowAt[1] - 1],
            [nowAt[0] + 1, nowAt[1] - 2],
            [nowAt[0] - 2, nowAt[1] + 1],
            [nowAt[0] - 1, nowAt[1] + 2]
        ]
        return possibleMoves.filter((poss) => {
            // 座標不能為負值
            if (poss[0] < 1 || poss[1] < 1 || poss[0] > 8 || poss[1] > 8) return false
            // 已經走過不能再走
            for(past of pastMoves) {
                if(past.join('') === poss.join('')) return false
            }
            return true;
        })
    },
    moveCount = 1,
    travel = function(nowAt, pastMoves){
        if(moveCount >= 64) return print(movesMap);
        let nextMove = (function(nowAt, pastMoves){
            let nextMoves = findNext(nowAt, pastMoves),
                nextNextMovesNum = nextMoves.map(move => findNext(move, [...pastMoves, move]).length);
            return nextMoves[nextNextMovesNum.indexOf(Math.min(...nextNextMovesNum))];
        })(nowAt, pastMoves);
        pastMoves.push(nextMove);
        movesMap[nextMove.join('')] = moveCount < 9 ? '0' + ++moveCount : '' + ++moveCount;
        console.log('step' + moveCount + ': (' + nextMove.join(', ') + ')')
        travel(nextMove, pastMoves);
    },
    print = function(movesMap) {
        let str = '';
        for(var i=1;i<=8;i++){
            for(var j=1;j<=8;j++){
                str += ' ' + movesMap[i + '' + j];
            }
            str += '\n';
        }
        console.log(str);
    }
// 第一步
movesMap[start.join('')] = '01';
travel(start, pastMoves);