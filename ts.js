var CreepsWay = require('Creeps.way');
const StartFlagList = ['Transfer1_Start'];
const EndFlagList = ['Transfer1_End'];
const nid=0;
const cnt = [0];
var roleTransmitter = {
    run: function(creep){
        creep.say("new way");
        if(creep.memory.carring && creep.store[RESOURCE_ENERGY]==0){
            creep.memory.carring = false;
        }
        if(!creep.memory.carring && creep.store.getFreeCapacity()==0){
            creep.memory.carring = true;
        }
        if(!creep.memory.carring){
            let flag = Game.flags[StartFlagList[cnt[nid]]];
            if(flag.room!=creep.room){
                creep.moveTo(flag);
                creep.say("CR");
                return ;
            }
            let source = flag.pos.findClosestByPath(FIND_STRUCTURES,{
                filter:(structure) =>{
                    return (structure.structureType == STRUCTURE_CONTAINER
                        || structure.structureType == STRUCTURE_STORAGE)
                        && structure.store[RESOURCE_ENERGY] > 0
                }
            });
            if(source){
                if(creep.withdraw(source,RESOURCE_ENERGY)==ERR_NOT_IN_RANGE){
                    creep.moveTo(source);
                }
            }
        }
        else{
            let flag = Game.flags[EndFlagList[cnt[nid]]];
            if(flag.room!=creep.room){
                creep.moveTo(flag);
                creep.say('CR');
                return ;
            }
            let target = flag.findClosestByRange(FIND_STRUCTURES,{
                filter:(structure) =>{
                    return(
                        (structure.structureType == STRUCTURE_CONTAINER
                        || structure.structureType == STRUCTURE_STORAGE)
                        &&structure.store.getFreeCapacity(RESOURCE_ENERGY)>0
                    )
                }
            })
            CreepsWay.TransferTarget(creep,target);
        }
    }
}

module.exports = roleTransmitter;