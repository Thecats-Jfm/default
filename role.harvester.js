var roleHarvester = {
    run: function(creep,id){
        creep.say('h');
        if(creep.store.getFreeCapacity()>0){
            var sources = creep.room.find(FIND_SOURCES);
            if(id<=2){
                var source = sources[0];
            }
            else if(id<=4){
                var source = sources[1];
            }
            else{
                creep.say("QWQ");
                console.log("Too many harvesters.");
            }
            if(creep.harvest(source)==ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            let target = creep.pos.findInRange(FIND_STRUCTURES ,3, {
                filter:(structure) =>{
                    return (
                            structure.structureType == STRUCTURE_CONTAINER
                        )
                        && structure.store.getFreeCapacity(RESOURCE_ENERGY) >0
                }
            })[0];
            if(target){
                if(creep.transfer(target,RESOURCE_ENERGY)== ERR_NOT_IN_RANGE){
                    creep.moveTo(target);
                }
            }
            else {
                creep.say('FFFUL!');
            }
        }
    }
}

module.exports = roleHarvester;