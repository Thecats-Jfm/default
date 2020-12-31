const BuildFlagList = ['B1_R','B2_R'];
const SourceFlagList = ['B1_S','B2_S'];
const cfg = [0,0,0,0,0,0];
var CreepsWay = require('Creeps.way');
var roleBuilder = {
    run: function(creep,id){
        if(creep.store[RESOURCE_ENERGY]>0) CreepsWay.BuildFlagRoom(creep,Game.flags[BuildFlagList[cfg[id]]]);
        else CreepsWay.WithdrawFromFlag(creep,Game.flags[SourceFlagList[cfg[id]]]);
    }
}

module.exports = roleBuilder;