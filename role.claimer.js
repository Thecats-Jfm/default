const cfg = [0,1];
const TargetFlag = ['Farm1','Home2'];
const text = "I'm a small weak cute cat! Don't f**k me plz! QwQ"
var roleClaimer = {
    Reserve: function(creep,id){
        let flag = Game.flags[TargetFlag[cfg[id]]];
        if(flag.room != creep.room) creep.moveTo(flag);
        else{
            let target = flag.room.controller;
            let ret = creep.reserveController(target);
            if(ret == ERR_NOT_IN_RANGE) creep.moveTo(target);
            else if(ret!=0) creep.say('Er:',ret);
        }
    },
    Sign: function(creep){
        let target =creep.room.controller;
        creep.signController(target,text);
    }
}

module.exports = roleClaimer;