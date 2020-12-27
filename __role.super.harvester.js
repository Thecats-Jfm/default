var roleHarvester = {
    run: function(creep){
        creep.say('Sh');
        if(creep.store.getFreeCapacity()>0){
            var source = creep.room.find(FIND_SOURCES)[0];
            if(creep.harvest(source)==ERR_NOT_IN_RANGE) {
                creep.moveTo(source,{visualizePathStyle:{ stroke: '#00ffff'}});
            }
        }
        else {
            let targets = creep.pos.findClosestByPath(FIND_STRUCTURES , {
                filter:(structure) =>{
                    return (
                            structure.structureType == STRUCTURE_CONTAINER
                        )
                        && structure.store.getFreeCapacity(RESOURCE_ENERGY) >0
                }
            })
            if(targets){
                if(creep.transfer(targets,RESOURCE_ENERGY)== ERR_NOT_IN_RANGE){
                    creep.moveTo(targets,{visualizePathStyle:{ stroke: '#666666',opacity : 0.5}})
                }
            }
            else {
                creep.moveTo(37,6);
            }
        }
    }
}

module.exports = roleHarvester;