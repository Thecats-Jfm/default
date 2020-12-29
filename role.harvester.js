const cfg = [0,0,1,1,2,2];
const SourceFlagList = ['Energy1', 'Energy2',];
const StorageFlagList = ['H1_S','H2_S'];
var CreepsWay = require('Creeps.way');
var roleHarvester = {
    run: function(creep,id){
        if(creep.store.getFreeCapacity()>0){
            CreepsWay.HarvestFlag(creep,Game.flags[SourceFlagList[cfg[id]]]);
        }
        else {
            CreepsWay.TransferToFlag(creep,Game.flags[StorageFlagList[cfg[id]]]);
        }
    }
}

module.exports = roleHarvester;