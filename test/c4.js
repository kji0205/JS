

    // function doA(){
    //     console.log('doA');
    // }
    // var doB=function(){
    //     console.log('doB');
    // }
    // doA();
    // doB();

doA();
//doB();      // Error
function doA(){
    console.log('doA');
}
var doB=function(){
    console.log('doB');
}
doB();

console.log('==================================');

var doA = (function(num){
    var current=num;
    return function(){
        --current;
        console.log(current);
    };
})(10);
doA();
doA();
doA();
doA();
console.log(typeof doA);

console.log('==================================');

var fn=Function("v1",'v2', 'return v1 + v2;');
console.log(fn(10,20));
console.log(typeof fn);

console.log('==================================');

function doA(){
    console.log(arguments);
    console.log('arguments--------------------');
}
doA(1);
doA(1,2);
doA(1,2,3);

console.log('==================================');

function doA(num){
    console.log('before',value);
    if (num%10===0) {
        var value=true;
    }
    console.log('after',value);
}
doA(10);
