const BuildFlagList = ['','B1_R','B2_R'];
const SourceFlagList = ['','B1_S','B2_S'];
var CreepsWay = require('Creeps.way');
var roleBuilder = {
    run: function(creep){
        let id = creep.memory.id
        if(creep.store[RESOURCE_ENERGY]>0) CreepsWay.BuildFlagRoom(creep,Game.flags[BuildFlagList[id]]);
        else CreepsWay.WithdrawFromFlag(creep,Game.flags[SourceFlagList[id]]);
    }
}

module.exports = roleBuilder;