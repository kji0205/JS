var gun={fire:function(){return 'Gun fire'}};
var cannon={fire:function(){return 'Cannon fire'}};
var rocket={fire:function(){return 'Rocket fire'}};
var sword={attack:function(){return 'Rocket fire'}};

function platform(weapon){
    if (weapon.fire) {
        console.log(weapon.fire());
    }else{
        console.log('cant fire this weapon');
    }
}

platform(gun);
platform(cannon);
platform(rocket);
platform(sword);
