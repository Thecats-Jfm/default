//design for heal
//soldier3_set = [HEAL,HEAL,MOVE,MOVE]
const cfg = [0,0,0,0,0,0,1,2,3];
const HealFlags = ['H1_C','H2_C'];

var Healer ={
    Run:function(creep,id){
        let flag = Game.flags[HealFlags[cfg[id]]];
        if(creep.pos.getRangeTo(flag)>0) creep.moveTo(flag)
        else{
            var target = creep.pos.findClosestByPath(FIND_MY_CREEPS,{
                filter:(creep)=> creep.hits<creep.hitsMax
            });
            if(!target){
                creep.say("Fine!");
            }
            else{
                let ret = creep.heal(target);
                if(ret == 0) creep.say("Heal!");
                else creep.say("Er:"+ret);
            }
        }
    }
}
module.exports = Healer;