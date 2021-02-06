var CreepsWay = require('Creeps.way');
var roleHarvester = {
    run: function (creep) {
        let id = creep.memory.id
        creep.say('h' + id)
        CreepsWay.HarvestFlag(creep, Game.flags['Energy'+id])

    },
}

module.exports = roleHarvester;