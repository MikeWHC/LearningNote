// for-of 是ES6新增的語法
// 可用於所有可被迭代的東西(不含物件，物件用traverse非iterate)
// 像是HTMLcollection, Array, String, iterators...等等
for (let i of arr) {
    console.log(i); // 每個元素
}

// for-in 主要用作物件
// 並且迭代不一定照順序(物件屬性沒有順序)
// 傳入的是鍵(索引值)並非值(元素)


// 與for-in的區別可在MDN的for-of章節有介紹
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
