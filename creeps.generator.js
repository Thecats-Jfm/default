var attacker_num = 0;
var attacker_set = [MOVE,MOVE,ATTACK,ATTACK]
var builder_num = 0;
var builder_set = [WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE]; //600
var carrier_num = 4;
var carrier_set = [CARRY,CARRY,MOVE,CARRY,CARRY,MOVE]; //300
var claimer_num = -2;
var claimer_set = [CLAIM,CLAIM,MOVE];//1250
var cleaner_num = 3;
var cleaner_set = [CARRY,CARRY,MOVE]; //600
var harvester_num = 0;
var harvester_set = [WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE]; //750
var porter_num = 2;
var porter_set = [CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE]
var repairer_num = 5;
var repairer_set = [WORK,CARRY,CARRY,CARRY,MOVE,MOVE];//500
var soldier1_num = 1;
var soldier1_set = [MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK]; //300
var soldier2_num = 0;
var soldier2_set = [MOVE,MOVE,WORK,WORK,MOVE,MOVE,WORK,WORK,MOVE,MOVE,WORK,WORK,MOVE,MOVE,WORK,WORK];
var soldier3_num = 0;
var soldier3_set = [HEAL,HEAL,MOVE,MOVE,HEAL,HEAL,MOVE,MOVE];
var soldier4_num = 0;
var soldier4_set = [TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE];
var transmitter_num = 0;
var transmitter_set = [CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,]; //300
var upgrader_num = -4;
var upgrader_set = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE]; //1200
const SpawnList = ['Spawn0','Spawn2_1'];


const LOG_ = true;
var LOG
var Generator = {
    run: function(){
        LOG = LOG_;
        if(Game.time%3!=0) LOG =false;
        if(LOG) console.log('****Generator_begin****');
        this.TrySpawn(attacker_num,attacker_set,'attacker');
        this.TrySpawn(builder_num,builder_set,'builder');
        this.TrySpawn(carrier_num,carrier_set,'carrier');
        this.TrySpawn(claimer_num,claimer_set,'claimer');
        this.TrySpawn(cleaner_num,cleaner_set,'cleaner');
        this.TrySpawn(harvester_num,harvester_set,'harvester');
        this.TrySpawn(porter_num,porter_set,'porter');
        this.TrySpawn(repairer_num,repairer_set,'repairer');
        this.TrySpawn(soldier1_num,soldier1_set,'soldier1');
        this.TrySpawn(soldier2_num,soldier2_set,'soldier2');
        this.TrySpawn(soldier3_num,soldier3_set,'soldier3');
        this.TrySpawn(soldier4_num,soldier4_set,'soldier4');
        this.TrySpawn(transmitter_num,transmitter_set,'transmitter');
        this.TrySpawn(upgrader_num,upgrader_set,'upgrader');
        for(let i in SpawnList){
            let name = SpawnList[i];
            if(Game.spawns[name].spawning){
                var spawningCreep = Game.creeps[Game.spawns[name].spawning.name];
                Game.spawns[name].room.visual.text(
                    '🛠️'+ spawningCreep.memory.role,
                    Game.spawns[name].pos.x+1,
                    Game.spawns[name].pos.y,
                    {align:'centor',opacity:0.8});
            }
        }
        if(LOG) console.log('****Generator_end****');
    },
    TrySpawn:function(num_limit,role_set,role){
        var creeps = _.filter(Game.creeps,(creep)=> creep.memory.role == role);
        if(LOG) console.log(role+': '+creeps.length + '/'+num_limit);
        if(creeps.length < num_limit){
            let newName = role + "_" + Game.time;
            let ret = Game.spawns['Spawn0'].spawnCreep(role_set,newName,{memory:{role:role}});
            if(ret == 0) console.log('Spawn0 Successfully start spawning ' + newName);
            else {
                ret = Game.spawns['Spawn2_1'].spawnCreep(role_set,newName,{memory:{role:role}});
                if(ret == 0) console.log('Spawn2_1 Successfully start spawning ' + newName);
            }
            // else console.log('Failed to Spawn '+ newName + 'with code'+ ret);
        }
    }
}

module.exports = Generator;
