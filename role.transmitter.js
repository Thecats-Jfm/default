var CreepsWay = require('Creeps.way');
var roleTransmitter = {
    run: function(creep){
        let id = creep.memory.id
        creep.say('t'+ id)
        if(creep.store.getUsedCapacity()==0){
            CreepsWay.WithdrawFromFlag(creep,Game.flags['T'+id+'_S']);
        }
        else CreepsWay.TransferToFlag(creep,Game.flags['T'+id+'_E']);
    }
}

module.exports = roleTransmitter;