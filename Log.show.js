var LogShow = {
    run: function(){
        console.log("****LogShowBegin****");
        let structures = Game.spawns['Spawn0'].room.find(FIND_STRUCTURES,{
            filter:(structure)=> {
                return structure.structureType == STRUCTURE_CONTAINER
            }
        })
        for (let id in structures){
            console.log('container'+id+': '+structures[id].store[RESOURCE_ENERGY]+'/2000');
        }
        console.log("****LogShowEnd****");
    }
}
module.exports = LogShow;