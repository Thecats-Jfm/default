//design for dismantle
//soldier2_set = [TOUGH,TOUGH,MOVE,MOVE,WORK,WORK,MOVE,MOVE]
const cfg = [0,0,0,0,0,0,1,2,3];
const DisFlags = ['D1_C','S2_C'];

var Dismantler ={
    Run:function(creep,id){
        let flag = Game.flags[DisFlags[cfg[id]]];
        if(creep.room!=flag.room) creep.moveTo(flag);
        else {
            let target = Game.getObjectById('5f2883d1bf58521e603c90d9')
            if(target == undefined) {creep.say('no target');return;}
            let ret = creep.dismantle(target)
            if(ret==ERR_NOT_IN_RANGE) creep.moveTo(target)
        }

    }
}
module.exports = Dismantler;