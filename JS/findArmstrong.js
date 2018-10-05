// 阿姆斯壯數: 一個三位數，3個位數個別的三次方再加總整好等於本身。
// e.g. 153 = 1^3 + 5^3 + 3^3
//              1 + 125 + 27
function findArmstrong(){
	let armStrong = [];
	for(let i=100;i<1000;i++){
		let num1 = i,
			num2 = i.toString().split('');
		num2 = num2.map(n =>  Math.pow(parseInt(n),3))
		num2 = num2.reduce((a, x) => {
			a += x;
			return a
		},0)
		if(num2 !== num1) continue;
		armStrong.push(num2)
	}
	return armStrong
}