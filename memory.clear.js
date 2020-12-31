var Generator  =require('Creeps.generator');
var My_Clear = {
    run: function(){
        for(let name in Memory.creeps){
            if(!Game.creeps[name]){
                if(Memory.creeps[name].role == 'harvester'){
                    console.log('Harvester died');
                    let id = Memory.creeps[name].id;
                    let ret = Game.spawns['Spawn0'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE],'harvester_'+Game.time,{memory:{role:'harvester',id:id}});
                    if(ret == 0){
                        console.log('Spawn Harvester Successfully with id: ',id);
                        delete(Memory.creeps[name]);
                    }
                }
                if(Memory.creeps[name].role == 'upgrader'){
                    console.log('Upgrader died');
                    let id = Memory.creeps[name].id;
                    let ret = Game.spawns['Spawn0'].spawnCreep(Generator.upgrader_set,'upgrader_'+Game.time,{memory:{role:'upgrader',id:id}});
                    if(ret == 0){
                        console.log('Spawn Upgrader Successfully with id: ',id);
                        delete(Memory.creeps[name]);
                    }
                }
                else{
                    delete Memory.creeps[name];
                    console.log('Cleared non-existing creep\'s memory: ' + name);
                }
            }
        }
    }
}
module.exports = My_Clear