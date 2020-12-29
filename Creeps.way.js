var CreepsWay = {
    WithdrawFromContainers : function(creep){
        let source = creep.pos.findClosestByPath(FIND_STRUCTURES,{
            filter:(structure) =>{
                return(
                    (structure.structureType == STRUCTURE_CONTAINER
                    ||structure.structureType == STRUCTURE_STORAGE)
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
            // console.log(creep.name + " can't find available container.");
            creep.say('cnc');
        }
    },
    WithdrawFromFlag: function(creep,flag){
        if(flag.room!=creep.room){
            creep.moveTo(flag);
        }
        else{
            this.WithdrawFromContainers(creep);
        }
    },
    //
    TransferTarget : function(creep,target){
        if(target){
            let ret = creep.transfer(target,RESOURCE_ENERGY);
            if(ret == ERR_NOT_IN_RANGE){
                creep.moveTo(target,{visualizePathStyle:
                    {stroke:'66ccff',opacity:1,lineStyle:'dashed'}});
            }
            else if(ret != 0 ){
                console.log(creep.name + 'transfer ERROR code: ' +ret);
            }
        }
        else{
            // console.log(creep.name + "can't find target .");
            creep.say("cnf");
        }
    },
    //
    BuildTarget : function(creep, target){
        if(target){
            let ret = creep.build(target);
            if(ret == ERR_NOT_IN_RANGE){
                creep.moveTo(target);
            }
            else if(ret!=0){
                console.log(creep.name + "build ERROR code: "+ret);
            }
        }
        else{
            // console.log(creep.name + "can't find target .");
            creep.say("bnf");
        }
    },
    RepairTarget : function(creep, target){
        if(target){
            let ret = creep.repair(target);
            if(ret == ERR_NOT_IN_RANGE){
                creep.moveTo(target);
            }
            else if(ret!=0){
                console.log(creep.name + "repair ERROR code: "+ret);
            }
        }
        else{
            // console.log(creep.name + "can't find target .");
            creep.say("rnf");
        }
    },
    MoveToFlag: function(creep,flag){
        let ret = creep.moveTo(flag,{visualizePathStyle:{opacity:1}});
        creep.say(ret);
    },
    BuildFlagRoom: function(creep,flag){
        if(flag.room != creep.room){
            creep.moveTo(flag);
        }
        else{
            let target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            this.BuildTarget(creep,target);
        }
    },

}
module.exports = CreepsWay;