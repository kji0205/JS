
var num1=10;
console.log(num1.valueOf());
console.log(num1.toString());

console.log('==================================');

var num1=1;
function doA(){
    console.log(num1);
    var num1=10;
}
doA();

console.log('==================================');

function doA(){
    var num1=10, num2, num3;
    console.log(num1);
    console.log(num2);
    console.log(num3);
}
doA();

console.log('==================================');

var arr=[1,2,3,4,5];
console.log(3 in arr);
var obj={name:'홍길동', id:'user00'};
console.log('name' in obj);

console.log('==================================');

var obj={name:'AAA', id:'BBB'};
console.log(obj['name']);
console.log(obj.name);
