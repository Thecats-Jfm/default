// design for control region
// cannon fodder
// [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,ATTACK,ATTACK]
const cfg = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3];
const ControlFlags = ['S1_C','S2_C'];
var SoldierControl = {
    Control: function(creep,tid){
        let room = creep.room;
        let flag = Game.flags[ControlFlags[cfg[tid]]];
        if(room!=flag.room) {
            creep.moveTo(flag);
            return ;
        }
        let hostiles = room.find(FIND_HOSTILE_CREEPS);
        if(hostiles.length){
            this.ATTACKENEMY(creep);
            return ;
        }
        if(creep.pos.getRangeTo(flag.pos)>1) creep.moveTo(flag);
        else creep.say("Controled");



    },
    ATTACKENEMY: function(creep){
        let hostile = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
        let ret = creep.attack(hostile);
        if(ret == ERR_NOT_IN_RANGE) creep.moveTo(hostile);
        else if(ret == 0) creep.say("Fight");
        else creep.say('Er: '+ret);
    }
}

module.exports = SoldierControl