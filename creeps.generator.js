var builder_num = 5;
var builder_set = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE]; //550
var carrier_num = 3;
var carrier_set = [CARRY,CARRY,MOVE]; //450
var harvester_num = 4;
var harvester_set = [WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE]; //500
var repairer_num = 1;
var repairer_set = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE];
var upgrader_num = 1;
var upgrader_set = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,CARRY];

var LOG_ = true;
var LOG
var Generator = {
    run: function(){
        LOG = LOG_;
        if(Game.time%5!=0) LOG =false;
        if(LOG) console.log('****Generator_begin****');
        this.TrySpawn(builder_num,builder_set,'builder');
        this.TrySpawn(carrier_num,carrier_set,'carrier');
        this.TrySpawn(harvester_num,harvester_set,'harvester');
        this.TrySpawn(repairer_num,repairer_set,'repairer');
        this.TrySpawn(upgrader_num,upgrader_set,'upgrader');

        if(Game.spawns['Spawn0'].spawning){
            var spawningCreep = Game.creeps[Game.spawns['Spawn0'].spawning.name];
            Game.spawns['Spawn0'].room.visual.text(
                '🛠️'+ spawningCreep.memory.role,
                Game.spawns['Spawn0'].pos.x+1,
                Game.spawns['Spawn0'].pos.y,
                {align:'centor',opacity:0.8});
        }
        if(LOG) console.log('****Generator_end****');
    },
    TrySpawn:function(num_limit,role_set,role){
        var creeps = _.filter(Game.creeps,(creep)=> creep.memory.role == role);
        if(LOG) console.log(role+': '+creeps.length);
        if(creeps.length < num_limit){
            let newName = role + Game.time;
            let ret = Game.spawns['Spawn0'].spawnCreep(role_set,newName,{memory:{role:role}});
            if(ret == 0) console.log('Successfully start spawning' + newName);
            else console.log('Failed to Spawn '+ newName + 'with code'+ ret);
        }
    }
}

module.exports = Generator;
