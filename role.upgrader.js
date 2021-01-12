var CreepsWay = require("Creeps.way");
const cfg = [0,0,0,1,0,0];
const TargetFlag = ['Home1','Home2'];
const StorageFlagList = ['U1_S','U2_S'];
var roleUpgrader = {
    run:function(creep,nid){
        if(creep.memory.id == undefined) creep.memory.id = nid;
        let id = creep.memory.id;
        creep.say(id);
        if(creep.store[RESOURCE_ENERGY]>0) CreepsWay.UpgradeFlag(creep,Game.flags[TargetFlag[cfg[id]]]);
        else CreepsWay.WithdrawFromFlag(creep,Game.flags[StorageFlagList[cfg[id]]]);
    }
}

module.exports = roleUpgrader;