'use strict';

var message = 'some string';
console.log(typeof message);
console.log(typeof 95);

var obj = {}
console.log(typeof obj);

var fn = function(){}
console.log(typeof fn);

/*
	변수가 초기화 되었거나 혹은 되지 않았거나 둘 다 undefined 반환
*/
var un;
console.log(typeof un);
console.log(typeof abc);

/*
	null : 빈 객체(메모리?)를 가리키는 포인터
*/
console.log(typeof null);
console.log(null == undefined);

/* 
	boolean type
*/
var message = 'Hello world!';
var bMessage = Boolean(message);
console.log(bMessage);

/*
	number type
// */
/*
var iNum = 33
var octalNum1 = 070;
var octalNum1 = 079;
var octalNum1 = 08;
// */
var hexNum1 = 0xA;
var hexNum2 = 0x1f;
console.log(hexNum1);
console.log(hexNum2);

var floatNum = 3.125e7;
console.log(floatNum);

console.log(0.1 + 0.2);

console.log(isFinite(3));

console.log(Number(hexNum1));

var num = 25.3;
console.log(num.toString(2));

start: for(var i=0; i < 3; i++){
	console.log(i);
}

/*
	break
*/
var num = 0;
outermost:
for(var i=0; i<10; i++){
	for(var j=0; j<10; j++){
		if (i==5 && j ==5) {
			break outermost;
		}
		num++;
	}
}
console.log(num);