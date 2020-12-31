var CreepsWay = require('Creeps.way');
const StartFlagList = ['T1_S','T2_S','T3_S','T4_S','T5_S'];
const EndFlagList = ['T1_E','T2_E','T3_E','T4_E','T5_E'];
const cfg = [0,1,1,1,2,2,2,2,3,3,4,4,1,1,0,0,0,0];
var roleTransmitter = {
    run: function(creep,nid){
        if(creep.store.getFreeCapacity(RESOURCE_ENERGY)!=0) CreepsWay.WithdrawFromFlag(creep,Game.flags[StartFlagList[cfg[nid]]]);
        else CreepsWay.TransferToFlag(creep,Game.flags[EndFlagList[cfg[nid]]]);
    }
}

module.exports = roleTransmitter;