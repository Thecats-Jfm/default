var CreepsWay = require("Creeps.way");
var roleUpgrader = {
    run:function(creep,nid){
        let id = creep.memory.id;
        let flag = 'U'+id+'_S'
        creep.say('u'+id);
        if(creep.store[RESOURCE_ENERGY]>0) CreepsWay.UpgradeFlag(creep,Game.flags[flag]);
        else CreepsWay.WithdrawFromFlag(creep,Game.flags[flag]);
    }
}

module.exports = roleUpgrader;