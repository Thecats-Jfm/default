const SourceFlagList = ['', 'Energy1', 'Energy2', 'Energy3', 'Energy4', 'Energy5', 'Mineral1', 'Mineral2', 'Energy6', 'Energy7'];
var CreepsWay = require('Creeps.way');
var roleHarvester = {
    run: function (creep) {
        let id = creep.memory.id
        creep.say('h' + id)
        CreepsWay.HarvestFlag(creep, Game.flags[SourceFlagList[id]])

    },
}

module.exports = roleHarvester;