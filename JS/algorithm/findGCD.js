// 求兩數之最大公因數
function findGCD(num1, num2){
	let dividend = Math.max(num1),
		divisor = Math.min(num2),
		remainder = num1 % num2;
	
	while(remainder !== 0){
		dividend = divisor;
		divisor = remainder;
		remainder = dividend % divisor;		
    }
	return divisor;
}

let num1 = 128,
	num2 = 72;

console.log(findGCD(num1, num2))