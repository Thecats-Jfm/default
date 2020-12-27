const TowersWay = require('Towers.way');
var _act=false;
var TowersAct = {
    /**  @param {roo2m} roo1m **/
    run: function(room){
        let towers = room.find(FIND_MY_STRUCTURES,{
            filter:(structure) => structure.structureType == STRUCTURE_TOWER
        });
        for(let i in towers){
            let tower = towers[i];
            _act = TowersWay.AttackClosest(tower);
            if(!_act) _act = TowersWay.HealClosest(tower);
            if(!_act) TowersWay.RepairClosest(tower);
        }
    }
}
module.exports = TowersAct;