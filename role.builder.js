var CreepsWay = require('Creeps.way');
var roleBuilder = {
    run: function (creep) {
        let id = creep.memory.id
        if (creep.store[RESOURCE_ENERGY] > 0) CreepsWay.BuildFlagRoom(creep, Game.flags['B' + id + '_R']);
        else CreepsWay.WithdrawFromFlag(creep, Game.flags["B" + id + '_S']);
    }
}

module.exports = roleBuilder;