var Calculator=(function(){
    var current=0;
    var add=function(v1){
        current+=v1;
        return current;
    };

    var sub=function(v1){
        current-=v1;
        return current;
    };

    var multi=function(v1){
        current*=v1;
        return current;
    };

    var div=function(v1){
        current/=v1;
        return current;
    };
    return {add:add, sub:sub, multi:multi, div:div};
})();

console.log(Calculator.add(100));
console.log(Calculator.sub(50));
console.log(Calculator.multi(4));
