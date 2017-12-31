/*
* Array
*
* push/pop : stack
* unshift/shift : queue
* */

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers[numbers.length] = 6;
console.log(numbers);
numbers.push(7);
console.log('numbers.push(7); ', numbers);
for (let i = numbers.length; i >= 0; i = i - 1) {
  numbers[i] = numbers[i - 1];
}
numbers[0] = 0;
console.log(numbers);
numbers.unshift(-1);
console.log('numbers.unshift(-1); ', numbers);
numbers.unshift(-3, -2);
console.log('numbers.unshift(-3, -2); ', numbers);
let popValue = numbers.pop();
console.log('popValue ', popValue);
console.log('numbers.pop(); ', numbers);
const shiftValue = numbers.shift();
console.log('shiftValue ', shiftValue);
console.log('numbers.shift(); ', numbers);
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}
console.log(numbers);
numbers.shift();
console.log('numbers.shift(); ', numbers);
numbers.splice(3, 1);
console.log('numbers.splice(3, 1); ', numbers);
const numbersTotalSplice = numbers.splice(0, numbers.length);
console.log('numbers.splice(0, numbers.length); ', numbers);
console.log('numbersTotalSplice ', numbersTotalSplice);
numbers = numbersTotalSplice;
console.log('numbers ', numbers);
console.log('numbers === numbersTotalSplice ', numbers === numbersTotalSplice);
numbers.splice(3, 0, 3);
console.log('numbers ', numbers);

/*
* 할당
* */
let [x, y, z] = [1, 2, 0];
console.log(x, y, z);
x *= y;
console.log('x *= y ', x);
console.log('x += y ', x += y);
console.log('x, y', x, y);
console.log('x /= y ', x /= y);
console.log('z = x %= y ', z = x %= y);
console.log('z', z);
let [a, b, c] = [7, 8, 9];
console.log('a === b ', a === b);
console.log('a = b *= c ', a = b *= c);
console.log('a', a);
console.log('b', b);
console.log('a === b ', a === b);

/*
* 비트연산자
* */
let [bit1, bit2] = [123, 2];
console.log(bit1.toString(2));
console.log(parseInt(bit2, 2));
console.log('bit & bit2', (bit1 & bit2));
let t = false;
console.log('~&', bit1 ^ bit2);
console.clear();
var str = '65536';
let idx = 0;
console.log('sd', str.charCodeAt(idx));
console.log(str.toString(16));
const hex1 = 0x12;
console.log(hex1);

/*
* Array
* */
let arr = [1, 3, 5];
let s1 = arr.slice(1);
console.log(s1);
console.log(arr);
console.log(s1 === arr);