// var CreepsWay = require('Creeps.way');
const FlagList = {
	'T1_S':'T1_E',
	'T2_S':'T2_E',
	'T3_S':'T3_E',
	'T4_S':'T4_E',
	'T5_S':'T5_E',
	'T6_S':'T6_E',
	'T7_S':'T7_E',
	'T8_S':'T8_E'
}
const cfg = [0,1,1,1,2,
			 2,2,2,3,3,
			 3,3,5,5,5,
			 5,0,0,0,0];


var roleTransmitter = {
    run: function(creep,nid){
		let flag = Game.flags[]
        if(creep.store.getFreeCapacity(RESOURCE_ENERGY)!=0) CreepsWay.WithdrawFromFlag(creep,Game.flags[StartFlagList[cfg[nid]]]);
        else CreepsWay.TransferToFlag(creep,Game.flags[EndFlagList[cfg[nid]]]);
    }
}

module.exports = roleTransmitter;
console.log(FlagList);