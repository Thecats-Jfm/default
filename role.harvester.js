var roleHarvester = {
    run: function(creep,id){
        creep.say('h');
        if(creep.store.getFreeCapacity()>0){
            var sources = creep.room.find(FIND_SOURCES);
            if(id<=5){
                var source = sources[1];
            }
            else if(id<=8){
                var source = sources[0];
            }
            else{
                creep.say("QwQ");
            }
            if(creep.harvest(source)==ERR_NOT_IN_RANGE) {
                creep.moveTo(source,{visualizePathStyle:{ stroke: '#00ffff'}});
            }
        }
        else {
            if(creep.transfer(Game.spawns['Spawn0'],RESOURCE_ENERGY)==ERR_NOT_IN_RANGE){
                creep.moveTo(Game.spawns['Spawn0'],{visualizePathStyle:{ stroke: '#ff00ff'}});
            }
        }
    }
}

module.exports = roleHarvester;