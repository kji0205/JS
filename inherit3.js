var Point=function(){
    console.log('Point');
};

Point.prototype.lat;
Point.prototype.lng;

Point.prototype.doA=function(){
    console.log(this.lat+":"+this.lng+":"+this.name);
};

var Market=function(name, lat, lng){
    this.name=name;
    this.lat=lat;
    this.lng=lng;
};

Market.prototype=Point.prototype;
var market1=new Market("A Mart",111,222);
var market2=new Market("B Mart",333,444);
console.log(market1);
console.log(market2);
market1.doA();
market1.doA();
