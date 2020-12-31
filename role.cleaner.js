var CreepsWay = require('Creeps.way');
const cfg = [0,1,2]
const Flag = ['C1_R','C2_R']
var RoleCleaner = {
    run: function(creep,id){
        let flag = Game.flags[Flag[cfg[id]]];
        if(creep.store[RESOURCE_ENERGY]==0){
            CreepsWay.CleanFlag(creep,flag);
        }
        else{
            CreepsWay.TransferTarget(creep, flag.room.storage);
        }
    }
}
module.exports = RoleCleaner