var CreepsWay = require("Creeps.way");
var roleUpgrader = {
    run:function(creep){
        if(creep.memory.upgrading&&creep.store[RESOURCE_ENERGY]==0){
            creep.memory.upgrading = false;
        }
        if(!creep.memory.upgrading&& creep.store.getFreeCapacity()==0){
            creep.memory.upgrading = true;
        }
        if(creep.memory.upgrading){
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else{
            CreepsWay.WithdrawFromContainers(creep);
        }
    }
}

module.exports = roleUpgrader;