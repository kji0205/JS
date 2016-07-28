var Gun=function(){
    this.fire=function(){
        return 'Gun fire';
    };
};

var Cannon=function(){
    this.fire=function(){
        return 'Cannon fire';
    };
};

function platform(weapon){
    if (weapon.constructor==Gun) {
        console.log(weapon.fire());
    }else{
        console.log('cant fire this weapon');
    }
}

platform(new Gun());
platform(new Cannon());
