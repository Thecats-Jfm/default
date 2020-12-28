const _DEBUG =false;
var TowerWay = {
    RepairClosest(tower){
        let closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES,{
            filter:(structure) => {
                return structure.hits< structure.hitsMax
                    && structure.structureType != STRUCTURE_WALL
                    && structure.structureType != STRUCTURE_RAMPART
            }
        })
        if(closestDamagedStructure) {
            let ret=tower.repair(closestDamagedStructure);
            if(_DEBUG)
            if(ret==0) console.log("Tower at " +tower.pos + " repair a " +closestDamagedStructure.structureType + '.');
            else console.log("Tower at " +tower.pos + " failed to repair sth with code: "+ret+".");
            return true;
        }
        return false;
    },
    AttackClosest(tower){
        if(_DEBUG&&Game.time%10==0) LOG=true;
        else LOG = false;
        let closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile){
            let ret = tower.attack(closestHostile);
            if(_DEBUG)
            if(ret==0) console.log("Tower at " +tower.pos + " attack an emery.")
            else console.log("Tower at " +tower.pos + " failed to attack sth with code: "+ret+".");
            return true;
        }
        return false;
    },
    HealClosest(tower){
        if(_DEBUG&&Game.time%10==0) LOG=true;
        else LOG = false;
        let closestDamagedCreep = tower.pos.findClosestByRange(FIND_MY_CREEPS,{
            filter:(creep) =>{
                return creep.hits<creep.hitsMax
            }
        })
        if(closestDamagedCreep){
            let ret = tower.heal(closestDamagedCreep);
            if(_DEBUG)
            if(ret) console.log("Tower at " + tower.pos + " heal ",closestDamagedCreep.name + '.');
            else console.log("Tower at " +tower.pos + " failed to heal sth with code: "+ret+".");
            return true;
        }
        return false;
    }
}
module.exports = TowerWay;