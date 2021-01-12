var CreepsWay = {
    // WithdrawFromStorage : function(creep){
    //     creep.say('o');
    //     let source = creep.pos.findClosestByPath(FIND_STRUCTURES,{
    //         filter:(structure) =>{
    //             return(
    //                 ((structure.structureType == STRUCTURE_CONTAINER ||structure.structureType == STRUCTURE_STORAGE) && structure.store.getUsedCapacity() > 0)
    //                 ||(structure.structureType == STRUCTURE_LINK && structure.store.getUsedCapacity(RESOURCE_ENERGY>0))
    //             )
    //         }
    //     });
    //     if(source){
    //         if(creep.withdraw(source,RESOURCE_ENERGY)==ERR_NOT_IN_RANGE){
    //             creep.moveTo(source);
    //         }
    //     }
    //     else{
    //         creep.say('cnc');
    //     }
    // },
    WithdrawFromTarget: function(creep, target){
        if(target){
            if(creep.pos.getRangeTo(target)>1) {creep.moveTo(target); return;}
            for(const resourceType in target.store) {
                if(target.structureType == STRUCTURE_STORAGE && resourceType != RESOURCE_ENERGY) continue;
                let ret = creep.withdraw(target, resourceType);
                if(ret!=0) creep.say('WD Er:'+ret);
            }
        }
        else creep.say("WD Nf");
    },
    WithdrawFromFlag: function(creep,flag){
        if(flag.room!=creep.room) creep.moveTo(flag);
        else {
            let target =flag.pos.findInRange(FIND_DROPPED_RESOURCES,1)[0];
            if(!target){
                target = flag.pos.findInRange(FIND_STRUCTURES,1,{
                    filter:(structure) =>{
                        return(
                            (structure.structureType == STRUCTURE_LINK && structure.store.getUsedCapacity(RESOURCE_ENERGY)>0)
                            ||((structure.structureType == STRUCTURE_CONTAINER ||structure.structureType == STRUCTURE_STORAGE) && structure.store.getUsedCapacity() > 0)
                        )
                    }
                })[0];
                this.WithdrawFromTarget(creep, target);
            }
            else this.PickupTarget(creep,target);
        }
    },
    TransferTarget : function(creep,target){
        if(target){
            if(creep.pos.getRangeTo(target)>1) {creep.moveTo(target); return;}
            for(const resourceType in creep.store) {
                if(resourceType!=RESOURCE_ENERGY&&target.structureType==STRUCTURE_LINK) continue;
                let ret = creep.transfer(target, resourceType);
                if(ret!=0) creep.say('TF Er:',ret);
            }
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
                        || structure.structureType == STRUCTURE_TERMINAL
                        ||structure.structureType == STRUCTURE_LINK)
                         && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
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
        else console.log(creep.pos,'bnf');
    },
    RepairTarget : function(creep, target){
        if(target){
            let ret = creep.repair(target);
            if(ret == ERR_NOT_IN_RANGE) creep.moveTo(target);
            else if(ret!=0) creep.say('Er:',ret);
        }
        else creep.say("rnf");
    },
    MoveToFlag: function(creep,flag){
        let ret = creep.moveTo(flag,{visualizePathStyle:{opacity:1}});
        creep.say(ret);
    },
    BuildFlagRoom: function(creep,flag){
        if(flag.room != creep.room) creep.moveTo(flag);
        else{
            let target = flag.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            this.BuildTarget(creep,target);
        }
    },
    RepairFlagRoom: function(creep,flag){
        if(flag.room != creep.room) creep.moveTo(flag);
        else{
            let target = creep.pos.findClosestByRange(FIND_STRUCTURES,{filter:(structure)=>{
                return(structure.structureType==STRUCTURE_CONTAINER&&structure.hits<structure.hitsMax-1000)
                    ||(structure.structureType==STRUCTURE_ROAD&&structure.hits<structure.hitsMax-100)
                    ||(structure.structureType==STRUCTURE_RAMPART&&structure.hits<300000)
                    ||(structure.structureType==STRUCTURE_TOWER&&structure.hits<structure.hitsMax)
                    ||(structure.structureType==STRUCTURE_WALL&&structure.hits<300000)
                }
            });
            this.RepairTarget(creep,target);
        }
    },
    HarvestFlag: function(creep,flag){
        if(flag.pos.isEqualTo(creep.pos)==false) creep.moveTo(flag);
        else{
            let target = flag.pos.findInRange(FIND_SOURCES, 1)[0];
            if(!target) target = flag.pos.findInRange(FIND_MINERALS,1)[0];
            let ret =creep.harvest(target);
            if(ret == ERR_NOT_IN_RANGE) creep.moveTo(target);
            else if(ret!=0) creep.say(ret);
        }
    },
    UpgradeFlag: function(creep,flag){
        if(creep.room!=flag.room) creep.moveTo(flag);
        else{
            let target = flag.room.controller;
            let ret = creep.upgradeController(target);
            if(ret == ERR_NOT_IN_RANGE) creep.moveTo(target);
            else if(ret!=0) creep.say('Er: '+ret);
        }
    },
    PickupTarget: function(creep,target){
        if(target){
            let ret = creep.pickup(target);
            if(ret == ERR_NOT_IN_RANGE) creep.moveTo(target);
            else if(ret!=0) creep.say('Er: '+ret);
        }
        else creep.say('clean');
    },
    CleanFlag: function(creep,flag){
        if(flag.room!=creep.room) creep.moveTo(flag);
        else{
            let target = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES,{
                filter:(resource)=>resource.amount>10
            })
            this.PickupTarget(creep,target);
        }
    },
    CarryFlag: function(creep,flag){
        if(creep.room!=flag.room) creep.moveTo(flag);
        else {
            let target = creep.pos.findClosestByRange(FIND_STRUCTURES,{
                filter:(structure)=>{
                    return (
                        (structure.structureType==STRUCTURE_EXTENSION
                        || structure.structureType==STRUCTURE_SPAWN
                        ||structure.structureType ==STRUCTURE_TOWER)
                        && structure.store.getFreeCapacity(RESOURCE_ENERGY)>0
                    )
                }
            })
            this.TransferTarget(creep, target);
        }
    }

}
module.exports = CreepsWay;