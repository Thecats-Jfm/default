const cfg = [0,1,2,1,2,0];
const SourceFlagList = ['Energy1', 'Energy2','Energy3'];
var CreepsWay = require('Creeps.way');
var roleHarvester = {
    run: function(creep,id){
        CreepsWay.HarvestFlag(creep,Game.flags[SourceFlagList[cfg[id]]]);

    }
}

module.exports = roleHarvester;