var CreepsWay = require("Creeps.way");
const TargetFlag = ['', 'Home1', 'Home2'];
const StorageFlagList = ['', 'U1_S', 'U2_S'];
var roleUpgrader = {
    run: function (creep) {
        let id = creep.memory.id;
        creep.say('u' + id);
        if (creep.store[RESOURCE_ENERGY] > 0) CreepsWay.UpgradeFlag(creep, Game.flags[TargetFlag[id]]);
        else CreepsWay.WithdrawFromFlag(creep, Game.flags[StorageFlagList[id]]);
    }
}

module.exports = roleUpgrader;