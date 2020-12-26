var RoleHarvester = require('role.harvester');
var RoleBuilder = require('role.builder');
var RoleUpgrader = require('role.upgrader');
var CreepsGenerator = require('creeps.generator');
var MemoryClear = require('memory.clear');
module.exports.loop = function () {
	CreepsGenerator.run();
	MemoryClear.run();
	var id = 0;
	for(var name in Game.creeps){
		var creep = Game.creeps[name];
		if(creep.memory.role == 'harvester'){
			id++;
			RoleHarvester.run(creep,id);
		}
		if(creep.memory.role == 'builder'){
			RoleBuilder.run(creep);
		}
		if(creep.memory.role == 'upgrader'){
			RoleUpgrader.run(creep);
		}
	}
}