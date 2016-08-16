var _ = require('../lib/underscore-min');

var a={name:"a", fun: function(){return this;}}
console.log(a.fun());

var bFunc=function(){return this};
var b={name:"b", fun: bFunc}
console.log(b.fun());

function Point2D(x, y){
    this._x=x;
    this._y=y;
}

var c=new Point2D(0,1);
console.log(c);

function Point3D(x, y, z){
    Point2D.call(this, x, y);
    this._z=z;
}

var d=new Point3D(10, -1, 100);
console.log(d);
