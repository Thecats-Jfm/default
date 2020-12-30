var CreepsWay = require("Creeps.way");
const cfg = [0,0,0,0,0,0];
const TargetFlag = ['Home1'];
const StorageFlagList = ['U1_S'];
var roleUpgrader = {
    run:function(creep,id){
        if(creep.store[RESOURCE_ENERGY]>0) CreepsWay.UpgradeFlag(creep,Game.flags[TargetFlag[cfg[id]]]);
        else CreepsWay.WithdrawFromFlag(creep,Game.flags[StorageFlagList[cfg[id]]]);
    }
}

module.exports = roleUpgrader;