var Member=function(id,pw){
    this.id=id;
    this.pw=pw;
};

//객체 메서드
Member.prototype.display=function(){
    return 'display: '+this.id+' : ' + this.pw;
};
//클래스 메서드
Member.show=function(){
    console.log(this);
    return 'show: '+this.id+' + ' + this.pw;
}

var member1=new Member('user00', 'pw00');

console.log('member1.display.............');
console.log(member1.display());
console.log('call...........................');
console.log(Member.show.call(member1));
console.log('apply ...........................');
console.log(Member.show.apply(member1));
console.log('no apply or call');
console.log(Member.show());
