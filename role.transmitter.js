var CreepsWay = require('Creeps.way');
const StartFlagList = ['T1_S','T2_S','T3_S','T4_S','T5_S','T6_S','T7_S','T8_S','T9_S'];
const EndFlagList = ['T1_E','T2_E','T3_E','T4_E','T5_E','T6_E','T7_E','T8_E','T9_E'];
const cfg = [3,0,1,1,2,
             2,2,4,5,6,
             7,8,8,8,8,8,
             8,8,0,0,0,
             0,0];
var roleTransmitter = {
    run: function(creep,nid){
        creep.say('t'+ cfg[nid]);
        if(creep.store.getFreeCapacity()!=0) CreepsWay.WithdrawFromFlag(creep,Game.flags[StartFlagList[cfg[nid]]]);
        else CreepsWay.TransferToFlag(creep,Game.flags[EndFlagList[cfg[nid]]]);
    }
}

module.exports = roleTransmitter;