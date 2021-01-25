var CreepsWay = require('Creeps.way');
var flags = ['','Ca1_S' ,'Ca2_S' ,'Ca3_S'];
var roleCarrier = {
    run: function(creep){
        creep.say("qwq");
        let nid = creep.memory.id
        let flag = Game.flags[flags[nid]];
        if(creep.store[RESOURCE_ENERGY]==0){
            CreepsWay.WithdrawFromFlag(creep,flag);
        }
        else{
            CreepsWay.CarryFlag(creep,flag);
        }
    }
}

module.exports = roleCarrier;