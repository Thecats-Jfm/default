var CreepsWay = require('Creeps.way');
const StartFlagList = ['Transfer1_Start','Transfer2_Start','Transfer3_Start'];
const EndFlagList = ['Transfer1_End','Transfer2_End','Transfer3_End'];
const cnt = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0];
var roleTransmitter = {
    run: function(creep,nid){
        if(creep.memory.carring && creep.store[RESOURCE_ENERGY]==0) creep.memory.carring = false;
        if(!creep.memory.carring && creep.store.getFreeCapacity()==0) creep.memory.carring = true;
        if(!creep.memory.carring){
            let flag = Game.flags[StartFlagList[cnt[nid]]];
            CreepsWay.WithdrawFromFlag(creep,flag);
        }
        else{
            let flag = Game.flags[EndFlagList[cnt[nid]]];
            if(flag.room!=creep.room){
                creep.moveTo(flag);
                return ;
            }
            let target = flag.pos.findClosestByRange(FIND_STRUCTURES,{
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