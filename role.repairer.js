var CreepsWay = require("Creeps.way");
const cfg = [0,0,0,0];
const RepairFlag = ['R1_R']
const RepairStorage = ['R1_S'];
var roleRepairer = {
    run: function(creep,id){
        if(creep.store[RESOURCE_ENERGY]>0) CreepsWay.RepairFlagRoom(creep,Game.flags[RepairFlag[cfg[id]]]);
        else CreepsWay.WithdrawFromFlag(creep,Game.flags[RepairStorage[cfg[id]]]);
    }
}

module.exports = roleRepairer;