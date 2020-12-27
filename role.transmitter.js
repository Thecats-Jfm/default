var CreepsWay = require('Creeps.way');
const pos1 = new RoomPosition(35, 7, 'E26N8');
const pos2 = new RoomPosition(13, 32, 'E26N8');
var roleTransmitter = {
    run: function(creep){
        creep.say('t');
        if(creep.memory.carring && creep.store[RESOURCE_ENERGY]==0){
            creep.memory.carring = false;
        }
        if(!creep.memory.carring && creep.store.getFreeCapacity()==0){
            creep.memory.carring = true;
        }
        if(!creep.memory.carring){
            let source = pos1.findClosestByPath(FIND_STRUCTURES,{
                filter:(structure) =>{
                    return(
                        structure.structureType == STRUCTURE_CONTAINER
                        && structure.store[RESOURCE_ENERGY] > 0
                    )
                }
            });
            if(source){
                if(creep.withdraw(source,RESOURCE_ENERGY)==ERR_NOT_IN_RANGE){
                    creep.moveTo(source);
                }
            }
            else{
                // console.log(creep.name + " can't find available container.");
                creep.say('cnc');
            }
        }
        else{
            let target = pos2.findClosestByRange(FIND_STRUCTURES,{
                filter:(structure) =>{
                    return(
                        (structure.structureType == STRUCTURE_CONTAINER
                        )
                        &&structure.store.getFreeCapacity(RESOURCE_ENERGY)>0
                    )
                }
            })
            CreepsWay.TransferTarget(creep,target);
        }
    }
}

module.exports = roleTransmitter;