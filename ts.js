else if(Memory.creeps[name].role == 'Big'){
    creep.moveTo(Game.getObjectById('5bbcae429099fc012e638a8c'));
    if(creep.room!=Game.rooms['E23N9']) {
        creep.say('Runing')
        continue
    }
    if(creep.memory.building ==undefined) creep.memory.building = false
    if(creep.memory.building && creep.store.getCapbility())
}