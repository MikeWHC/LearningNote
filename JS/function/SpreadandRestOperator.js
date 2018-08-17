// Spread
// 1. 用在函式"呼叫"，展開一個陣列變成一個個參數
Math.max(1, 2, 3); // 3
let arr = [1, 2, 3];
Math.max(...arr);

// 2. 把可迭代物件轉成陣列
const aString = "foo"
const chars = [...aString] // [ "f", "o", "o" ]

// 3. 淺拷貝陣列
let arr2 = [...arr];

// 4. 連接陣列(像是concat)
let arr3 = [...arr, 4, 5]; // [1, 2, 3, 4, 5]

// Rest
// 1. 用在函式"定義"，將傳入的"不定量參數"存進一個陣列(取代arguments)
function func(...args) {
    // !!其餘運算子在函式定義有三個注意重點
    // 1. 只能出現一次
    // 2. 順序要是最後一個
    // 3. 若沒有傳入參數會變空陣列，非undefined
    args.forEach((arg) => console.log(arg));
}

// 2. 解構賦值(destructuring)
const [x, y, z] = [1, 2, 3];
console.log(x, y, z); // 1 2 3
//
const [x, ...y] = [1, 2, 3];
console.log(x); // 1
console.log(y); // [2, 3]
//
const [x, y, ...z] = [1]
console.log(x) //1
console.log(y) //undefined
console.log(z) //[]
//
function f(...[a, b, c]) {
    return a + b + c;
}
f(1) // NaN (b and c are undefined)
f(1, 2, 3) // 6
f(1, 2, 3, 4) // 6 (the fourth parameter is not destructured)

// ES7 其餘屬性 / 展開屬性(for 物件)

// 展開運算符: 用在陣列的"字面文字定義"裡面(例如[1, ...b])，
//            或是函式"呼叫"時(例如func(...args))

// 其餘運算符: 用在函式的"定義"，裡面的傳入參數名稱定義時(例如function func(x, ...y))。
//            或是在解構賦值時(例如const [x, ...y] = [1,2,3])