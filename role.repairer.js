var CreepsWay = require("Creeps.way");
const RepairFlag = ['','R1_R','R2_R','R3_R','R4_R','R5_R'];
const RepairStorage = ['','R1_S','R2_S','R3_S','R4_S','R5_S'];
var roleRepairer = {
    run: function(creep){
        let id = creep.memory.id
        creep.say('r'+id);
        if(creep.store[RESOURCE_ENERGY]>0) CreepsWay.RepairFlagRoom(creep,Game.flags[RepairFlag[id]]);
        else CreepsWay.WithdrawFromFlag(creep,Game.flags[RepairStorage[id]]);
    }
}

module.exports = roleRepairer;