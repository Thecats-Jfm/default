//design for tank
//soldier4_set = [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE]
const cfg = [0,0,0,0,0,0,1,2,3];
const HealFlags = ['H1_C','H2_C'];
const TankFlags = ['T1_C','T2_C'];
const tankhit = 400;
var Tanker ={
    Run:function(creep,id){
        creep.say("Tank:"+creep.hits);
        if(creep.hits >=tankhit &&creep.memory.heal ==true){
            let flag = Game.flags[TankFlags[cfg[id]]];
            if(creep.room!=flag.room) creep.moveTo(flag);
            else if(creep.pos.getRangeTo(flag)>1) creep.moveTo(flag);
        }
        else{
            let flag = Game.flags[HealFlags[cfg[id]]];
            if(creep.room!=flag.room) creep.moveTo(flag);
            else if(creep.pos.getRangeTo(flag)>2) creep.moveTo(flag);
            creep.memory.heal = false;
            if(creep.hits == creep.hitsMax){
                creep.memory.heal = true;
            }
        }
        console.log(creep.hits + "||" + creep.memory.heal);
    }
}
module.exports = Tanker;