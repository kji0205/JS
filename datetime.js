'use strict';

var now = new Date();
var todayAtMidn = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log(now);
console.log(todayAtMidn);
console.log('now.getTime() :: ' + now.getTime());
console.log('todayAtMidn.getTime() :: ' + todayAtMidn.getTime());

var dt = new Date('2017/04/03');
console.log(dt);
console.log(dt.getTime());

/*
	월은 0(1월)에서 11(12월)까지 번호가 지정되고,  요일은 0(일요일)에서 6(토요일)까지 번호가 지정됩니다. 
*/
var dtA = new Date('2017/03/30 20:00:00');
var dtB = new Date(2017, 3, 3, 19, 0, 0);
console.log(dtA);
console.log(dtB);
console.log(dtA.getTime());
console.log(dtB.getTime());

console.log(dtA.getUTCDate());
console.log(dtA.getUTCDay());
// console.log(dtA.getTimezoneOffset());

var startDate = new Date(2017, 4, 3, 0, 0, 0);
var endDate = new Date(2017, 4, 30, 23, 59, 999);
var chDate = new Date(2017, 4, 3, 9, 0, 0);

