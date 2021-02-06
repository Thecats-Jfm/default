var CreepsWay = require("Creeps.way");
var roleRepairer = {
    run: function(creep){
        let id = creep.memory.id
        creep.say('r'+id);
        if(creep.store[RESOURCE_ENERGY]>0) CreepsWay.RepairFlagRoom(creep,Game.flags['R'+id+'_R']);
        else CreepsWay.WithdrawFromFlag(creep,Game.flags['R'+id+'_S']);
    }
}

module.exports = roleRepairer;