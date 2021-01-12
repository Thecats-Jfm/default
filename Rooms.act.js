const TowersAct = require('Towers.act');
const links = ['5feba542f42492dc558974cb','5feb843e6d5e0ca8c7102b24']; // to be change
var RoomsAct = {
    run: function(room){
        let hostiles = room.find(FIND_HOSTILE_CREEPS);
        if(hostiles.length){
            console.log("Warning! "+ hostiles.length + " hostiles in room" + room.name +'!');
            // room.controller.activateSafeMode();
            // console.log("Warning!!!!!!!!!!!! Try to activate SafeMode!");
            console.log('Hostile\'s owner is ' + hostiles[0].owner.username);
        }
        TowersAct.run(room);
    }
}
module.exports = RoomsAct;