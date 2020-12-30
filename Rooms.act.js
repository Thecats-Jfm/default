const TowersAct = require('Towers.act');
const links = ['5feba542f42492dc558974cb','5feb843e6d5e0ca8c7102b24'];
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
        let link1 = Game.getObjectById(links[0]),link2 = Game.getObjectById(links[1]);
        if(link1.store.getFreeCapacity(RESOURCE_ENERGY)<=200&&link2.store[RESOURCE_ENERGY]==0){
            link1.transferEnergy(link2);
        }
    }
}
module.exports = RoomsAct;