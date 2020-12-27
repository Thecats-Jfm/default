var CreepsWay = require("Creeps.way");
var roleRepairer = {
    run: function(creep){
        if(creep.memory.repairing &&creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.repairing = false;
        }
        if(!creep.memory.repairing && creep.store.getFreeCapacity()==0){
            creep.memory.repairing =true;
        }

        if(creep.memory.repairing){
            var target = creep.pos.findClosestByPath(FIND_STRUCTURES,{
                filter:(structure) => {
                    return(
                        structure.structureType!=STRUCTURE_WALL
                        && structure.hits<structure.hitsMax
                        )
                }
            });
            CreepsWay.RepairTarget(creep, target);
        }
        else{
            CreepsWay.WithdrawFromContainers(creep);
        }
    }
}

module.exports = roleRepairer;