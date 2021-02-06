var CreepsWay = require('Creeps.way');
var roleCarrier = {
    run: function(creep){
        let id = creep.memory.id
        creep.say("Ca:"+id);
        let flag = Game.flags['Ca'+id+'_S'];
        if(creep.store[RESOURCE_ENERGY]==0){
            CreepsWay.WithdrawFromFlag(creep,flag);
        }
        else{
            CreepsWay.CarryFlag(creep,flag);
        }
    }
}

module.exports = roleCarrier;