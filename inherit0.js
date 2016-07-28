var Point=function(){
    console.log('Point');
};

var Market=function(){
    console.log('Market');
};

Market.prototype=new Point();
var market1=new Market();
var market2=new Market();

console.log(market1 instanceof Market);
console.log(market1 instanceof Point);

//부모 객체가 공유되기 때문에 영향이 있는 코드
market1.__proto__.v1='AAAAA';

//부모를 변경하면 자식 객체들도 영향이 있는 코드
Market.prototype.v2='BBBB';
