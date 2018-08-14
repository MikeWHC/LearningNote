h.c = () => {
	return h.d === undefined || h.d.length === 0 ? h.d=$('#oio') : h.d;	
}
// 動態產生也可以抓到，並存在物件屬性，但似乎只限產生一次

const elementsNew = document.querySelectorAll('div')
const elementsOld = document.getElementsByTagName('div')

// 動態插入一個新的 div
const newDiv = document.createElement('div')
document.body.appendChild(newDiv)

// elementsOldw 會拿到 newDiv；elementsNew 則否。
elementsNew.length !== elementsOld.length

// 物件屬性在物件宣告時就會執行建置，函式裡的變數在執行函式時才會

let o = {
	a:1,
	b:{
		aa: function(){console.log(this)},
		bb: () => console.log(this)
    },
	c: function(){console.log(this)},
	d: () => console.log(this)
}

o.b.aa(); // o.b
o.b.bb(); // window
o.c(); // o
o.d(); // window

$('body').on('test',o.c);
$('body').on('test',o.d);
$('body').trigger('test'); // body / window

$('body').on('test2', function(){o.c()})
$('body').on('test2', function(){o.d()})
$('body').trigger('test2'); // o / window

$('body').on('test3', () => {o.c()})
$('body').on('test3', () => {o.d()})
$('body').trigger('test3'); // o / window


// 用建構式才能將屬性的this指向原物件
let o2 = {
    a: this // window
}

function o3(){
    this.a = this;
}
let instance = new o3();
instance.a = instance;

//
let util = {
    k1: 10,
    m1: function(){console.log(this)}
}

function execute(util){
    util.m1();
    util.k1 = 20;
    util.m1();
}

execute(); // error，參數為空，util === undefined
execute(util); // 印出的util都是同一個，所以傳入的物件為參照