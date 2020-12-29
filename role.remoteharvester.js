var roleRemoteHarvester = {
    run: function(creep){
        if(creep.store.getFreeCapacity()>0){
            let flag = Game.flags['Farm1_Source1'];
            if(flag.room==undefined){
                creep.moveTo(flag);
            }
            else{
                let source = flag.pos.findClosestByRange(FIND_SOURCES);
                if(creep.harvest(source)==ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            }
        }
        else {
            let flag = Game.flags['Room1_Storage'];
            if(flag.room == undefined){
                creep.moveTo(flag);
            }
            else {
                let target = flag.pos.findClosestByRange(FIND_MY_STRUCTURES);
                let ret =creep.transfer(target,RESOURCE_ENERGY)
                if(ret == ERR_NOT_IN_RANGE){
                    creep.moveTo(target);
                }
                else {
                    creep.say(ret);
                }
                if(ret == 0) console.log(Game.time,creep.name,'RH_OK');
            }
        }
    }
}

module.exports = roleRemoteHarvester;