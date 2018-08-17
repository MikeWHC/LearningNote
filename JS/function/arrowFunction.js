// () => {}
// **特性
// 1. 傳入參數只有一個時，圓括號()可省略
x => x + 1
// 2. 區塊中只有一行程式，花括號{}可省略，並自動回傳其回傳值
// 下面兩行程式相等
x => x++
x => {return x++}
// 3. 自動綁定定義當下環境的this
const obj = {a:1}

function func(){
    // 如果用傳統function寫，this會是window
  setTimeout( () => { console.log(this) }, 2000); // 呼叫func當下this被call()指向obj
}

func.call(obj); // log: obj
// 4. call, apply, bind無法改變this
let func = () => console.log(this);
func.call(obj); // window
// 5. 沒有arguments物件
let func = () => console.log(arguments);
func(); // error: not defined


// !!不可以使用箭頭函式的時候!!
// 下面都情形都跟this改變有關
// 1. 建構函式 => this應該要指向實例
let C = () => {
    this.a = 1;
    this.b = 2;
}
let c = new C; // error: C is not a constructor

// 2. 事件監聽回呼 => this應該要指向註冊元素
el.addEventListener('click', () => console.log(this)); // window

// 3. 物件方法 => this應該要指向物件
let obj = {
    method: () => {
        console.log(this);
    }
}
obj.method(); // window

// 4. 設定prototype方法 => this應該要指向實例
C.prototype.setProp = (value) => this.prop = value; // window.prop = value