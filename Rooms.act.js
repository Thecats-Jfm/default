const TowersAct = require('Towers.act');
var RoomsAct = {
    run: function(room){
        let hostiles = room.find(FIND_HOSTILE_CREEPS);
        if(hostiles.length){
            console.log("Warning! "+ hostiles.length + " hostiles in room! ");
            room.controller.activateSafeMode();
            console.log("Warning!!!!!!!!!!!! Try to activate SafeMode!");
        }
        TowersAct.run(room);
    }
}
module.exports = RoomsAct;