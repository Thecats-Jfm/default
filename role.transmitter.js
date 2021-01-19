var CreepsWay = require('Creeps.way');
const StartFlagList = ['','T1_S','T2_S','T3_S','T4_S','T5_S','T6_S','T7_S','T8_S','T9_S'];
const EndFlagList = ['','T1_E','T2_E','T3_E','T4_E','T5_E','T6_E','T7_E','T8_E','T9_E'];
const cfg = [1,2,3,3,4,
             5,6,7,];
var roleTransmitter = {
    run: function(creep,nid){
        if(creep.memory.id==undefined) creep.memory.id = cfg[nid];
        let id = creep.memory.id
        creep.say('t'+ id)
        if(creep.store.getUsedCapacity()==0){
            CreepsWay.WithdrawFromFlag(creep,Game.flags[StartFlagList[id]]);
        }
        else CreepsWay.TransferToFlag(creep,Game.flags[EndFlagList[id]]);
    }
}

module.exports = roleTransmitter;