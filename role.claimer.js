var roleClaimer = {
    Reserve: function(creep,flag){
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