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
            var target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            CreepsWay.BuildTarget(creep, target);

        }
        else{
            CreepsWay.WithdrawFromContainers(creep);
        }
    }
}

module.exports = roleBuilder;