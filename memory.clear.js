var harvester_set = [WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE];
var upgrader_set = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE];
var claimer_set = [CLAIM,CLAIM,MOVE]
var spawnList = ['Spawn0','Spawn2_1'];
var My_Clear = {
    run: function(){
        for(let name in Memory.creeps){
            if(!Game.creeps[name]){
                if(Memory.creeps[name].role == 'harvester'){
                    let id = Memory.creeps[name].id;
                    console.log('Harvester '+ id + 'died');
                    if(id>=8){
                        delete (Memory.creeps[name]);
                        console.log("Delete");
                        return ;
                    }
                    let ret = this.TrySpawn(harvester_set,'harvester_'+Game.time,'harvester',id);
                    if(ret == 0){
                        console.log('Spawn Harvester Successfully with id: ',id);
                        delete(Memory.creeps[name]);
                    }
                }
                else if(Memory.creeps[name].role == 'upgrader'){
                    let id = Memory.creeps[name].id;
                    console.log('Upgrader'+id+' died');
                    if(id>=4){
                        delete (Memory.creeps[name]);
                        console.log("Delete");
                        return ;
                    }
                    let ret = this.TrySpawn(upgrader_set,'upgrader_'+Game.time,'upgrader',id);
                    if(ret == 0){
                        console.log('Spawn Upgrader Successfully with id: ',id);
                        delete(Memory.creeps[name]);
                    }
                }
                else if(Memory.creeps[name].role == 'claimer'){
                    let id = Memory.creeps[name].id;
                    console.log('Claimer'+id+' died');
                    if(id>=3){
                        delete (Memory.creeps[name]);
                        console.log("Delete");
                        return ;
                    }
                    let ret = this.TrySpawn(claimer_set,'claimer_'+Game.time,'claimer',id);
                    if(ret == 0){
                        console.log('Spawn Claimer Successfully with id: ',id);
                        delete(Memory.creeps[name]);
                    }
                }
                else{
                    delete Memory.creeps[name];
                    console.log('Cleared non-existing creep\'s memory: ' + name);
                }
            }
        }
    },
    TrySpawn:function(set_,name,role,id){
        for(let i in spawnList){
            let sp = spawnList[i];
            let ret = Game.spawns[sp].spawnCreep(set_,name,{memory:{role:role,id:id}});
            if(ret==0){
                console.log(sp+' successfully spawn '+name);
                return 0;
            }
        }
        return -1;
    }
}
module.exports = My_Clear