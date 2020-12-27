var CreepsWay = require('Creeps.way');
var roleCarrier = {
    run: function(creep){
        if(creep.memory.carring && creep.store[RESOURCE_ENERGY]==0){
            creep.memory.carring = false;
        }
        if(!creep.memory.carring && creep.store.getFreeCapacity()==0){
            creep.memory.carring = true;
        }



        if(!creep.memory.carring){
            CreepsWay.WithdrawFromContainers(creep);
        }
        else{
            let target = creep.pos.findClosestByRange(FIND_STRUCTURES,{
                filter:(structure) =>{
                    return(
                        (structure.structureType == STRUCTURE_EXTENSION
                        || structure.structureType == STRUCTURE_SPAWN)
                        &&structure.store.getFreeCapacity(RESOURCE_ENERGY)>0
                    )
                }
            })
            CreepsWay.TransferTarget(creep,target);
        }
    }
}

module.exports = roleCarrier;