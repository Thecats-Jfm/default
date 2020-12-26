var roleBuilder = {
    run: function(creep){
        creep.say("b");
        if(creep.memory.building &&creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.building = false;
            creep.say("🔄 harvest'");
        }
        if(!creep.memory.building && creep.store.getFreeCapacity()==0){
            creep.memory.building =true;
            creep.say("� build");
        }

        if(creep.memory.building){
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length){
                if(creep.build(targets[0])==ERR_NOT_IN_RANGE){
                    creep.moveTo(targets[0]);
                }
            }

        }
        else{
            creep.say("QAQ");
            var source = creep.room.find(FIND_SOURCES)[0];
            if(creep.harvest(source)==ERR_NOT_IN_RANGE){
                creep.moveTo(source);
            }
        }
    }
}

module.exports = roleBuilder;