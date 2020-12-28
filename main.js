var RoleBuilder = require('role.builder');
var RoleCarrier = require('role.carrier');
var RoleHarvester = require('role.harvester');
var RoleRepairer = require('role.repairer');
var RoleTransmitter = require('role.transmitter');
var RoleUpgrader = require('role.upgrader');
var RoomsAct = require('Rooms.act');
var LogShow = require('Log.show')

var CreepsGenerator = require('creeps.generator');
var MemoryClear = require('memory.clear');
module.exports.loop = function () {
	CreepsGenerator.run();
	MemoryClear.run();
	RoomsAct.run(Game.spawns['Spawn0'].room);
	if(Game.time%1000==0) LogShow.run();
	var id = 0;
	for(var name in Game.creeps){
		var creep = Game.creeps[name];

		if(creep.memory.role == 'builder'){
			RoleBuilder.run(creep);
		}
		if(creep.memory.role == 'carrier'){
			RoleCarrier.run(creep);
		}
		if(creep.memory.role == 'harvester'){
			id++;
			RoleHarvester.run(creep,id);
		}
		if(creep.memory.role == 'repairer'){
			RoleRepairer.run(creep);
		}
		if(creep.memory.role == 'transmitter'){
			RoleTransmitter.run(creep);
		}
		if(creep.memory.role == 'upgrader'){
			RoleUpgrader.run(creep);
		}


	}
}