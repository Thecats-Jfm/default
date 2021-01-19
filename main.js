require('Out.super_move');
var CreepsWay = require('Creeps.way');
var LabsWay = require('Labs.way');
var LinksWay = require('Links.way');
var RoleBuilder = require('role.builder');
var RoleCarrier = require('role.carrier');
var RoleClaimer = require('role.claimer');
var RoleCleaner = require('role.cleaner');
var RoleHarvester = require('role.harvester');
var RolePorter = require('role.porter')
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
var MemoryClear = require('memory.clear');
// Game.market.deal('5ffab9a674151e9cb7a4b50f',10000,'E26N8')
module.exports.loop = function () {
	Game.cpu.generatePixel();
    MemoryClear.run();
	CreepsGenerator.run(); //7 to do
	LabsWay.run1()
	LinksWay.run1() //
    for (let i in MyRooms) RoomsAct.run(Game.rooms[MyRooms[i]]);
    if(Game.time%300==0) LogShow.ShowStorages();
	var id = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(var name in Game.creeps){
		var creep = Game.creeps[name];
		if(creep.memory.role == 'attacker'){
			creep.memory.role = 'soldier1';
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
			RoleClaimer.Reserve(creep,tid);
			// RoleClaimer.Sign(creep,tid);
			// RoleClaimer.Sign(creep);
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
			let tid = id[6]++;
			RoleRepairer.run(creep,tid);
		}
		else if(creep.memory.role == 'transmitter'){
			let tid = id[7]++;
			RoleTransmitter.run(creep,tid);
		}
		else if(creep.memory.role == 'upgrader'){
			creep.memory.dontPullMe = true;
			let tid = id[8]++;
			RoleUpgrader.run(creep,tid);
		}
		else if(creep.memory.role =='cleaner'){
			let tid = id[9]++;
			RoleCleaner.run(creep,tid);
		}
		else if(creep.memory.role == 'soldier1'){
			let tid = id[10]++;
			creep.memory.dontPullMe = true;
			RoleSoldier_1.Control(creep,tid);
		}
		else if(creep.memory.role == 'soldier2'){
			let tid = id[11]++;
			RoleSoldier_2.Run(creep,tid);
		}
		else if(creep.memory.role == 'soldier3'){
			let tid = id[12]++;
			creep.memory.dontPullMe = true;
			RoleSoldier_3.Run(creep,tid);
		}
		else if(creep.memory.role == 'soldier4'){
			creep.memory.dontPullMe = true;
			let tid = id[13]++;
			RoleSoldier_4.Run(creep,tid);
		}
		else if(creep.memory.role == 'porter'){
			let tid = id[14]++;
			RolePorter.run(creep,tid);
		}
		else if(creep.memory.role == 'tp1'||creep.memory.role == 'tp2'){
			let target = Game.getObjectById('5f2431beb337c35714084b25')
			let ret = creep.dismantle(target)
			if(ret == ERR_NOT_IN_RANGE) creep.moveTo(target);
		}
		else if(creep.memory.role == 'my'){
			if(creep.store.getFreeCapacity()==0){
				let target = creep.room.terminal
				for(let resourceType in creep.store){

					let ret = creep.transfer(target,resourceType)
					if(ret==ERR_NOT_IN_RANGE) creep.moveTo(target)
					console.log(resourceType + ret)
				}
			}
			else{
				let target = creep.room.storage
				let ret = creep.withdraw(target,'energy')
				if(ret==ERR_NOT_IN_RANGE) creep.moveTo(target)
				if(ret==ERR_NOT_ENOUGH_RESOURCES) creep.say("Hi!")
			}
		}
		else if(Memory.creeps[name].role == 'WA'){
			creep.moveTo(Game.flags['WA'])
			// creep.heal(creep)
			// let target = Game.getObjectById('5f2431beb337c35714084b25')
			// creep.rangedAttack(target)
			// let ret = creep.dismantle(target)
			console.log(creep.hits+'/'+creep.hitsMax)
		}
		else {
			console.log("Creep Role Error");
		}


	}
}
const MyRooms = ['E26N8','E27N7'];