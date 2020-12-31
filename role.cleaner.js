var CreepsWay = require('Creeps.way');
const cfg = [0,1,2]
const Flag = ['C1_R','C2_R']
var RoleCleaner = {
    run: function(creep,id){
        let flag = Game.flags[Flag[cfg[id]]];
        if(creep.store[RESOURCE_ENERGY]==0){
            CreepsWay.CleanFlag(creep,flag);
        }
        else{
            let target = creep.pos.findClosestByPath(FIND_STRUCTURES,{
                filter:(structure)=>{
                    return(structure.structureType == STRUCTURE_CONTAINER
                        || structure.structureType == STRUCTURE_STORAGE
                        || structure.structureType == STRUCTURE_LINK)
                        && structure.store.getFreeCapacity(RESOURCE_ENERGY) >0
                }
            })
            CreepsWay.TransferTarget(creep, target);
        }
    }
}
module.exports = RoleCleaner