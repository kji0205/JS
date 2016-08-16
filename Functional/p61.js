var _ = require('../lib/underscore-min');

var nums=[1,2,3,4,5];

function doubleAll(array){
    return _.map(array, function(n){return n*2});
}

console.log(doubleAll(nums));

function average(array){
    var sum=_.reduce(array, function(a, b){return a+b});
    return sum/_.size(array);
}

console.log(average(nums));

function onlyEven(array){
    return _.filter(array, function(n){
        return (n%2)===0;
    });
}

console.log(onlyEven(nums));
