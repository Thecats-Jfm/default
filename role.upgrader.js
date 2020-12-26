var roleUpgrader = {
    run:function(creep){
        creep.say("u");
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
            var source = creep.room.find(FIND_SOURCES)[1];
            if(creep.harvest(source)==ERR_NOT_IN_RANGE){
                creep.moveTo(source);
            }
        }
    }
}

module.exports = roleUpgrader;