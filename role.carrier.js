var CreepsWay = require('Creeps.way');
var flags = ['Ca1_S' ,'Ca2_S' ,'Ca3_S'];
const cfg = [0,0,0,1,1]
var roleCarrier = {
    run: function(creep,id){
        // console.log(creep.pos);
        creep.say("qwq");
        creep.memory.id = id;
        let flag = Game.flags[flags[cfg[creep.memory.id]]];
        if(creep.store[RESOURCE_ENERGY]==0){
            CreepsWay.WithdrawFromFlag(creep,flag);
        }
        else{
            CreepsWay.CarryFlag(creep,flag);
        }
    }
}

module.exports = roleCarrier;