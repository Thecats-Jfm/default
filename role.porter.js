var CreepsWay = require('Creeps.way');
const StartFlagList = ['','1_S','2_S','3_S','4_S'];
const EndFlagList = ['','1_T','2_T','3_T','4_T'];
const cfg = [2,2,1,1,1,1,1,2];
var rolePorter = {
    run: function(creep,nid){
        creep.say('p'+ cfg[nid]);
        if(creep.store.getFreeCapacity()!=0) CreepsWay.WithdrawFromFlag(creep,Game.flags[StartFlagList[cfg[nid]]]);
        else CreepsWay.TransferToFlag(creep,Game.flags[EndFlagList[cfg[nid]]]);
    }
}

module.exports = rolePorter;