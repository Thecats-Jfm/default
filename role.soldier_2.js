//design for dismantle
//soldier2_set = [TOUGH,TOUGH,MOVE,MOVE,WORK,WORK]
const cfg = [0,0,0,0,0,0,1,2,3];
const DisFlags = ['D1_C','S2_C'];

var Dismantler ={
    Run:function(creep,id){
        let flag = Game.flags[DisFlags[cfg[id]]];
        if(creep.room!=flag.room) creep.moveTo(flag);
        else{
            var target = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES,{
                filter:(structure)=> structure.structureType == STRUCTURE_TOWER
            });
            if(!target){
                target = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES,{filter:(structure) =>{structure.structureType == STRUCTURE_SPAWN}});
                if(!target){
                    target = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES);
                }
            }
            if(!target){
                creep.say("Clear");
            }
            else{
                let ret = creep.dismantle(target);
                if(ret==ERR_NOT_IN_RANGE) creep.moveTo(target);
                else if(ret == 0) creep.say("Dismantle!");
                else creep.say("Er:"+ret);
            }
        }
    }
}
module.exports = Dismantler;