const cfg = [0,1];
const TargetFlag = ['Farm1'];
var roleClaimer = {
    Reserve: function(creep,id){
        let flag = Game.flags[TargetFlag[cfg[id]]];
        if(flag.room == undefined) creep.moveTo(flag);
        else{
            let target = flag.room.controller;
            if(creep.reserveController(target)==ERR_NOT_IN_RANGE){
                creep.moveTo(target);
            }
        }
    }
}

module.exports = roleClaimer;