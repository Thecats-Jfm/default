var CreepsWay = {
    WithdrawFromStorage : function(creep){
        creep.say('o');
        let source = creep.pos.findClosestByPath(FIND_STRUCTURES,{
            filter:(structure) =>{
                return(
                    (structure.structureType == STRUCTURE_CONTAINER
                    ||structure.structureType == STRUCTURE_STORAGE
                    ||structure.structureType == STRUCTURE_LINK)
                    && structure.store[RESOURCE_ENERGY] > 0
                )
            }
        });
        if(source){
            if(creep.withdraw(source,RESOURCE_ENERGY)==ERR_NOT_IN_RANGE){
                creep.moveTo(source);
            }
        }
        else{
            creep.say('cnc');
        }
    },
    WithdrawFromTarget: function(creep, target){
        if(target){
            let ret = creep.withdraw(target,RESOURCE_ENERGY);
            if(ret == ERR_NOT_IN_RANGE) creep.moveTo(target);
            else if(ret!=0) creep.say('WD Er:',ret);
        }
        else creep.say("WD Nf");
    },
    WithdrawFromFlag: function(creep,flag){
        if(flag.room!=creep.room) creep.moveTo(flag);
        else {
            let target = flag.pos.findInRange(FIND_STRUCTURES,1,{
                filter:(structure) =>{
                    return(
                        (structure.structureType == STRUCTURE_CONTAINER
                        ||structure.structureType == STRUCTURE_STORAGE
                        ||structure.structureType == STRUCTURE_LINK)
                        && structure.store[RESOURCE_ENERGY] > 0
                    )
                }
            })[0];
            this.WithdrawFromTarget(creep, target);
        }
    },
    TransferTarget : function(creep,target){
        if(target){
            let ret = creep.transfer(target,RESOURCE_ENERGY);
            if(ret == ERR_NOT_IN_RANGE) creep.moveTo(target);
            else if(ret!=0) creep.say('TF Er:',ret);
        }
        else creep.say("TF Nf");
    },
    TransferToFlag: function(creep,flag){
        if(flag.room!=creep.room) creep.moveTo(flag);
        else {
            let target = flag.pos.findInRange(FIND_STRUCTURES,1,{
                filter:(structure) =>{
                    return(
                        (structure.structureType == STRUCTURE_CONTAINER
                        ||structure.structureType == STRUCTURE_STORAGE
                        ||structure.structureType == STRUCTURE_LINK)
                        && structure.getFreeCapacity(RESOURCE_ENERGY) > 0
                    )
                }
            })[0];
            this.TransferTarget(creep, target);
        }
    },
    BuildTarget : function(creep, target){
        if(target){
            let ret = creep.build(target);
            if(ret == ERR_NOT_IN_RANGE) creep.moveTo(target);
            else if(ret!=0) creep.say('b Er:',ret);
        }
        else creep.say("b Nf");
    },
    RepairTarget : function(creep, target){
        if(target){
            let ret = creep.repair(target);
            if(ret == ERR_NOT_IN_RANGE) creep.moveTo(target);
            else if(ret!=0) creep.say('r Er:',ret);
        }
        else creep.say("r Nf");
    },
    MoveToFlag: function(creep,flag){
        let ret = creep.moveTo(flag,{visualizePathStyle:{opacity:1}});
        creep.say(ret);
    },
    BuildFlagRoom: function(creep,flag){
        if(flag.room != creep.room) creep.moveTo(flag);
        else{
            let target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            this.BuildTarget(creep,target);
        }
    },

}
module.exports = CreepsWay;