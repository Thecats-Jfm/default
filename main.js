require('Out.super_move');
var CreepsWay = require('Creeps.way');
var RoleBuilder = require('role.builder');
var RoleCarrier = require('role.carrier');
var RoleClaim = require('role.claimer');
var RoleHarvester = require('role.harvester');
var roleRemoteHarvester = require('role.remoteharvester');
var RoleRepairer = require('role.repairer');
var RoleTransmitter = require('role.transmitter');
var RoleUpgrader = require('role.upgrader');
var RoomsAct = require('Rooms.act');
var LogShow = require('Log.show')
var CreepsGenerator = require('Creeps.generator');
var MemoryClear = require('memory.clear');
module.exports.loop = function () {

	CreepsGenerator.run(); //5 to do
	MemoryClear.run();
	for (let i in MyRooms) RoomsAct.run(Game.rooms[MyRooms[i]]);
	if(Game.time%1000==0) LogShow.run();
	//5 to do
	var id = 0;
	for(var name in Game.creeps){
		var creep = Game.creeps[name];

		if(creep.memory.role == 'builder'){
			RoleBuilder.run(creep);
			//CreepsWay.MoveToFlag(creep,Game.flags['0_0']);
		}
		else if(creep.memory.role == 'carrier'){
			RoleCarrier.run(creep);
		}
		else if(creep.memory.role == 'claimer'){
			creep.say("hi");
			creep.memory.dontPullMe = true;
			RoleClaim.Reserve(creep,Game.flags['Farm1_Controller']);
			// creep.signController(Game.flags['Farm1_Controller'].room.controller,"I'm A SMALL WEAK CUTE CAT! Don't F**K ME PLZ! QwQ");
		}
		else if(creep.memory.role == 'harvester'){
			id++;
			creep.memory.dontPullMe = true;
			RoleHarvester.run(creep,id);
		}
		else if(creep.memory.role == 'remoteharvester'){
			creep.say("RH");
			creep.memory.dontPullMe = true;
			roleRemoteHarvester.run(creep);
		}
		else if(creep.memory.role == 'repairer'){
			RoleRepairer.run(creep);
		}
		else if(creep.memory.role == 'transmitter'){
			RoleTransmitter.run(creep);
		}
		else if(creep.memory.role == 'upgrader'){
			RoleUpgrader.run(creep);
		}
		else if(creep.memory.role =='cleaner'){
			// creep.say(Game.flags['0_0']);
			//  creep.moveTo(Game.flags['0_0'],{visualizePathStyle:{opacity:1}})
			// creep.attackController(creep.room.controller);
			// creep.say(creep.moveTo(Game.flags['0_0']));
			// let target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
			// let ret = creep.dismantle(target);
			// if(ret == ERR_NOT_IN_RANGE) creep.moveTo(target);
			// creep.say(ret);
			console.log("Cleaner Error");
		}
		else {
			console.log("Creep Role Error");
		}


	}
}
const MyRooms = ['E26N8',];