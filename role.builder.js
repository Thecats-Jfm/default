const BuildFlagList = ['Build1'];
const SourceFlagList = ['Room1_Storage'];
var CreepsWay = require('Creeps.way');
var roleBuilder = {
    run: function(creep){
        if(creep.memory.building &&creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.building = false;
        }
        if(!creep.memory.building && creep.store.getFreeCapacity()==0){
            creep.memory.building =true;
        }

        if(creep.memory.building){
            CreepsWay.BuildFlagRoom(creep,Game.flags[BuildFlagList[0]]);
        }
        else{
            CreepsWay.WithdrawFromFlag(creep,Game.flags[SourceFlagList[0]]);
        }
    }
}

module.exports = roleBuilder;