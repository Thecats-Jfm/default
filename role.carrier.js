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
            CreepsWay.WithdrawFromStorage(creep);
        }
        else{
            let target = creep.pos.findClosestByRange(FIND_STRUCTURES,{
                filter:(structure) =>{
                    return(
                        (structure.structureType == STRUCTURE_EXTENSION
                        || structure.structureType == STRUCTURE_SPAWN
                        // || structure.structureType == STRUCTURE_TOWER
                        )
                        &&structure.store.getFreeCapacity(RESOURCE_ENERGY)>0
                    )
                }
            })
            if(!target){
                target = creep.pos.findClosestByRange(FIND_STRUCTURES,{
                    filter:(structure)=>{
                        return (structure.structureType == STRUCTURE_TOWER)
                            &&structure.store.getFreeCapacity(RESOURCE_ENERGY)>0
                    }
                })
            }
            CreepsWay.TransferTarget(creep,target);
        }
    }
}

module.exports = roleCarrier;