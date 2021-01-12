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