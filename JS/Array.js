// push, pop
// unshift, shift
// sort, find, findIndex, indexOf, reverse, every, some, lastIndexOf
// concat
// copyWithin, fill
// slice, splice
// reduce, map, forEach, filter



// 判斷為陣列的方法
let arr = [];

// Array.isArray()
Array.isArray(arr); // true
// .constructor
arr.constructor === Array; // true
arr.__proto__.constructor === Array;
// instanceof
arr instanceof Array // true
// toString (萬用但效率差)
Object.prototype.toString.call(arr) === '[object Array]'; // true

// 陣列屬性
// length
// 可讀可寫，會改變陣列元素，補上空值或是刪掉後面元素
// 設為0就可清空陣列
const bArray = [1, 2, 3]
console.log(bArray.length)

bArray.length = 4
console.log(bArray.length)
console.log(bArray)

bArray.length = 2
console.log(bArray.length)
console.log(bArray)

// 清空陣列
// 注意第一種的原陣列不能使用const宣告，就意義上它不是真的把原來的陣列清空。一般情況下第一種效率最好，第四種最差:
let aArray = ['apple', 'banana', 'orange', 'mongo']

//第一種
aArray = []

//第二種
aArray.length = 0

//第三種
while(aArray.length > 0) {
    aArray.pop();
}

//第四種
aArray.splice(0, aArray.length)

// forEach的缺點
// 1. forEach無法提早結束或中斷
// 2. forEach被呼叫時，this會傳遞到回調函式(callback)裡
// 3. forEach方法具有副作用(改變原陣列)

// reduce
// 如沒有給初始值，會以陣列第一個元素做初始值，第二個元素當第一個傳入值開始迭代
// 可應用於:
// 兩相比較最後取出特定的值(最大或最小值)
// 計算所有成員(值)，總合或相乘
// 其它需要兩兩處理的情況(組合巢狀陣列等等)


// sort()
const fruitArray = ['蘋果', '芒果', '櫻桃', '香蕉', '大香蕉', '小香蕉' ]

//使用原本的排序
fruitArray.sort()

console.log(fruitArray)
//["大香蕉", "小香蕉", "櫻桃", "芒果", "蘋果", "香蕉"]


fruitArray.sort(function(a, b){
  //zh-Hans-TW、zh-Hans-TW-u-co-big5han、pinyin等等參數同樣結果
  return a.localeCompare(b, 'zh-Hans-TW')
})

console.log(fruitArray)
//["大香蕉", "芒果", "蘋果", "香蕉", "小香蕉", "櫻桃"]

fruitArray.sort(function(a, b){
  //按筆劃從小到大排序
  return a.localeCompare(b, 'zh-Hans-TW-u-co-stroke')
})

console.log(fruitArray)
//["大香蕉", "小香蕉", "芒果", "香蕉", "蘋果", "櫻桃"]

// reverse
// 單純調換元素順序
// 調換字串可以用下面的
function reverseString(str) {
    return str.split('').reverse().join('');
}

// find(callback) 回傳第一個符合條件再迭代過程中回傳true的元素
// findIndex(callback) 與上面一樣，但回傳其索引值

// findIndex()與indexOf()很像，但參數為回呼提供更多彈性在判斷值上
const aArray = [1, 3, 5, 7, 10, 22]
const bValue = aArray.find(function (value, index, array){
    return value > 6
})
const cIndex = aArray.findIndex(function (value, index, array){
    return value > 6
})

console.log(aArray) //[1, 3, 5, 7, 10, 22]
console.log(bValue) //7
console.log(cIndex) //3