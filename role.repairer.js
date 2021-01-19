var CreepsWay = require("Creeps.way");
const cfg = [0,0,1,2,2,2,2];
const RepairFlag = ['R1_R','R2_R','R3_R','R4_R','R5_R'];
const RepairStorage = ['R1_S','R2_S','R3_S','R4_S','R5_S'];
var roleRepairer = {
    run: function(creep,id){
        creep.say('r'+cfg[id]);
        if(creep.store[RESOURCE_ENERGY]>0) CreepsWay.RepairFlagRoom(creep,Game.flags[RepairFlag[cfg[id]]]);
        else CreepsWay.WithdrawFromFlag(creep,Game.flags[RepairStorage[cfg[id]]]);
    }
}

module.exports = roleRepairer;