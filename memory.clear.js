const spawnList = ['Spawn0', 'Spawn2_1', 'Spawn1_2']
const DEBUG = true
var My_Clear = {
    run: function () {
        var used = {
            'Spawn0': false,
            'Spawn2_1': false,
            'Spawn1_2': false,
        }
        for (let name in Memory.creeps) {
            if (!Game.creeps[name]) {
                let creep = Memory.creeps[name]
                if (creep.spawn == undefined) {
                    console.log('Memory.clear: ' + name + ' died and delete')
                    delete(Memory.creeps[name])
                } else {
                    let spawn = creep.spawn,
                        body = creep.body,
                        role = creep.role,
                        id = creep.id,
                        uid = creep.uid
                    if (spawn == undefined || body == undefined || role == undefined || id == undefined || uid == undefined) {
                        console.log('Memory.clear: Error in [=_=]')
                        continue
                        break
                    }
                    // tips: spawn name error
                    if (used[spawn] == true) {
                        console.log('Memory.clear: ' + spawn + ' is used ')
                        continue
                    }
                    let ret = Game.spawns[spawn].spawnCreep(body, role + "_" + Game.time, {
                        memory: {
                            role: role,
                            spawn: spawn,
                            body: body,
                            id: id,
                            uid: uid,
                        }
                    })
                    if (ret == 0) {
                        used[spawn] = true
                        console.log('Memory.clear: ' + spawn + ' has spawned creep ' + uid)
                        delete(Memory.creeps[name])
                    }
                }
            }
        }
    },
}
module.exports = My_Clear