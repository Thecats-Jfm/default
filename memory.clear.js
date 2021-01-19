const id_limit = {
    'harvester': 5,
    'upgrader': 2,
    'claimer': 2,
    'transmitter': 10,
}
const role_set = {
    'harvester': [WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE],
    'upgrader': [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE],
    'claimer': [CLAIM, CLAIM, MOVE],
    'transmitter': [CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE],
}
var spawnList = ['Spawn0', 'Spawn2_1'];
var My_Clear = {
    run: function () {
        var used = [0, 0, 0]
        for (let name in Memory.creeps) {
            if (!Game.creeps[name]) {
                if (Memory.creeps[name].id != undefined&&Memory.creeps[name].role!='carrier') {
                    let role = Memory.creeps[name].role
                    let id = Memory.creeps[name].id
                    console.log(role + id + ' died')
                    if (id >= id_limit[role]) {
                        delete(Memory.creeps[name])
                        console.log('Delete')
                        return
                    }
                    let ret = this.TrySpawn(role_set[role], role + "_" + Game.time, role, id, used)
                    if (ret == 0) {
                        delete(Memory.creeps[name])
                    }
                } else {
                    delete Memory.creeps[name];
                    console.log('Cleared non-existing creep\'s memory: ' + name);
                }
            }
        }
    },
    TrySpawn: function (set_, name, role, id, used) {
        for (let i in spawnList) {
            if (used[i] == 1) continue;
            let sp = spawnList[i];
            let ret = Game.spawns[sp].spawnCreep(set_, name, {
                memory: {
                    role: role,
                    id: id
                }
            });
            console.log(sp + 'qaq' + ret)
            if (ret == 0) {
                used[i] = 1;
                console.log(sp + ' successfully spawn ' + name + ' with id:' + id);
                return 0;
            }
        }
        return -1;
    },
}
module.exports = My_Clear