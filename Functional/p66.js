var _ = require('../lib/underscore-min');

var people=[{name:"Rick", age:30}, {name:"Jaka", age:24}];
var a=_.sortBy(people, function(p){return p.age});
console.log(a);
var albums=[{title:"Sabbath Bloody Sabbath", genre:"Metal"},
{title:"Scientist", genre:"Dub"},
{title: "Undertow", genre:"Metal"}];
var b=_.groupBy(albums, function(a){return a.genre});
console.log(b);
var c=_.countBy(albums, function(a){return a.genre});
console.log(c);
