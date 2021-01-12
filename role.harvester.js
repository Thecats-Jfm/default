const cfg = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
const SourceFlagList = ['Energy1', 'Energy2','Energy3','Energy4','Energy5','Mineral1','Energy6','Energy7','Mineral2'];
var CreepsWay = require('Creeps.way');
var roleHarvester = {
    run: function(creep,id){
        if(creep.memory.id==undefined) creep.memory.id = id;
        creep.say(creep.memory.id);
        CreepsWay.HarvestFlag(creep,Game.flags[SourceFlagList[cfg[creep.memory.id]]]);

    },
}

module.exports = roleHarvester;