const TowersAct = require('Towers.act');
var RoomsAct = {
    run: function(room){
        let hostiles = room.find(FIND_HOSTILE_CREEPS);
        if(hostiles.length){
            console.log("Warning! "+ hostiles.length + " hostiles in room! ");
            // room.controller.activateSafeMode();
            // console.log("Warning!!!!!!!!!!!! Try to activate SafeMode!");
            console.log('Hostile\'s owner is ' + hostiles[0].owner.username);
        }
        TowersAct.run(room);
    }
}
module.exports = RoomsAct;