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

	Game.cpu.generatePixel();
    MemoryClear.run();
    CreepsGenerator.run(); //7 to do

    for (let i in MyRooms) RoomsAct.run(Game.rooms[MyRooms[i]]);
    if(Game.time%10==0) LogShow.ShowStorages();

	var id = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(var name in Game.creeps){
		var creep = Game.creeps[name];
		if(creep.memory.role == 'attacker'){
            let tid = id[0]++;
			creep.say("PAY!");
			creep.moveTo(Game.flags['0_0']);
			let target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            creep.attack(target);
		}
		else if(creep.memory.role == 'builder'){
			let tid = id[1]++;
			RoleBuilder.run(creep,tid);
		}
		else if(creep.memory.role == 'carrier'){
            let tid = id[2]++; ;
			RoleCarrier.run(creep,tid);
		}
		else if(creep.memory.role == 'claimer'){
			let tid = id[3]++;
			creep.memory.dontPullMe = true;
			RoleClaim.Reserve(creep,tid);
			// creep.signController(Game.flags['Farm1_Controller'].room.controller,"I'm A SMALL WEAK CUTE CAT! Don't F**K ME PLZ! QwQ");
			// creep.reserveController(creep.room.controller);
			// creep.moveTo(Game.flags['Farm1_Controller']);
		}
		else if(creep.memory.role == 'harvester'){
			let tid = id[4]++;
			creep.memory.dontPullMe = true;
			RoleHarvester.run(creep,tid);
		}
		else if(creep.memory.role == 'remoteharvester'){
			let tid = id[5]++;
			console.log("RH Error");
		}
		else if(creep.memory.role == 'repairer'){
			creep.say('r');
			let tid = id[6]++;
			RoleRepairer.run(creep,tid);
		}
		else if(creep.memory.role == 'transmitter'){
			let tid = id[7]++;
			creep.say('t'+tid);
			RoleTransmitter.run(creep,tid);
			// creep.moveTo(Game.flags['0_0']);
		}
		else if(creep.memory.role == 'upgrader'){
			let tid = id[8]++;
			RoleUpgrader.run(creep,tid);
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