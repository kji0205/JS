var shape1={};
shape1.width=100;
shape1.height=200;

shape1.getArea=function(){
    return this.width*this.height;
}
console.log('--------------------');

var member={
    userid:'user',
    passwd:'1234'
};
var user1=Object.create(member);
user1.name='Hong Gil Dong';
console.dir(user1);
var user2=Object.create(member);
user2.fname='Tony';
user2.lname='Stack';
console.dir(user2);
