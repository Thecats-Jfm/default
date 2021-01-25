require('Out.super_move');
var CreepsWay = require('Creeps.way');
var LabsWay = require('Labs.way');
var LinksWay = require('Links.way');
var RoleBuilder = require('role.builder');
var RoleCarrier = require('role.carrier');
var RoleClaimer = require('role.claimer');
var RoleCleaner = require('role.cleaner');
var RoleHarvester = require('role.harvester');
// var RolePorter = require('role.porter')
var RoleRepairer = require('role.repairer');
var RoleSoldier_1 = require('role.soldier_1');
var RoleSoldier_2 = require('role.soldier_2');
var RoleSoldier_3 = require('role.soldier_3');
var RoleSoldier_4 = require('role.soldier_4');
var RoleTransmitter = require('role.transmitter');
var RoleUpgrader = require('role.upgrader');
var RoomsAct = require('Rooms.act');
var LogShow = require('Log.show');
var CreepsGenerator = require('Creeps.generator');
var MemoryClear = require('Memory.clear');
// Game.market.deal('5ffab9a674151e9cb7a4b50f',10000,'E26N8')
module.exports.loop = function () {
	Game.cpu.generatePixel();
	MemoryClear.run();
	// CreepsGenerator.run(); //7 to do
	LabsWay.run1()
	LinksWay.run1() //
	for (let i in MyRooms) RoomsAct.run(Game.rooms[MyRooms[i]]);
	if (Game.time % 300 == 0) LogShow.ShowStorages();
	var id = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (var name in Game.creeps) {
		var creep = Game.creeps[name];
		if (creep.memory.role == 'builder') {
			RoleBuilder.run(creep);
		} else if (creep.memory.role == 'carrier') {
			RoleCarrier.run(creep);
		} else if (creep.memory.role == 'claimer') {
			creep.memory.dontPullMe = true;
			RoleClaimer.Reserve(creep);
			// RoleClaimer.Sign(creep);
		} else if (creep.memory.role == 'harvester') {
			creep.memory.dontPullMe = true;
			RoleHarvester.run(creep);
		} else if (creep.memory.role == 'repairer') {
			RoleRepairer.run(creep);
		} else if (creep.memory.role == 'transmitter') {
			RoleTransmitter.run(creep);
		} else if (creep.memory.role == 'upgrader') {
			creep.memory.dontPullMe = true;
			RoleUpgrader.run(creep);
		} else if (creep.memory.role == 'cleaner') {
			RoleCleaner.run(creep);
		} else if (creep.memory.role == 'tp1' || creep.memory.role == 'tp2') {
			let target = Game.getObjectById('5f2431beb337c35714084b25')
			let ret = creep.dismantle(target)
			if (ret == ERR_NOT_IN_RANGE) creep.moveTo(target);
		} else if (creep.memory.role == 'my') {
			if (creep.store.getFreeCapacity() == 0) {
				let target = creep.room.terminal
				for (let resourceType in creep.store) {

					let ret = creep.transfer(target, resourceType)
					if (ret == ERR_NOT_IN_RANGE) creep.moveTo(target)
					console.log(resourceType + ret)
				}
			} else {
				let target = creep.room.storage
				let ret = creep.withdraw(target, 'energy')
				if (ret == ERR_NOT_IN_RANGE) creep.moveTo(target)
				if (ret == ERR_NOT_ENOUGH_RESOURCES) creep.say("Hi!")
			}
		} else if (Memory.creeps[name].role == 'Big') {
			if (Game.getObjectById('5bbcae429099fc012e638a8c') == undefined || Game.getObjectById('600f0314519efd38660affca') == undefined) {
				console.log('Fine')
				creep.memory.spawn = undefined
				creep.suicide()
			}
			creep.moveTo(Game.getObjectById('5bbcae429099fc012e638a8c'));
			if (creep.room != Game.rooms['E23N9']) {
				creep.say('Runing')
				continue
			}
			if (creep.memory.building == undefined) creep.memory.building = false
			if (creep.memory.building && creep.store.getUsedCapacity() == 0) creep.memory.building = false
			if (!creep.memory.building && creep.store.getFreeCapacity() == 0) creep.memory.building = true
			if (creep.memory.building) {
				creep.moveTo(Game.getObjectById('600f0314519efd38660affca'))
				creep.build(Game.getObjectById('600f0314519efd38660affca'))
			} else {
				creep.moveTo(Game.getObjectById('5bbcae429099fc012e638a8c'))
				creep.harvest(Game.getObjectById('5bbcae429099fc012e638a8c'))
			}
		} else if (Memory.creeps[name].role == 'tp') {
			creep.moveTo(Game.flags['tp'])
			// creep.claimController(creep.room.controller)
			RoleClaimer.Sign(creep);
		} else {
			console.log("Creep Role Error");
		}


	}
}
const MyRooms = ['E26N8', 'E27N7'];