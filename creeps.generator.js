var builder_num = 8;
var builder_set = [WORK,MOVE,CARRY];
var harvester_num = 8;
var harvester_set = [WORK,MOVE,CARRY];
var upgrader_num = 5;
var upgrader_set = [WORK,MOVE,CARRY];
var LOG = true;
var Generator = {
    run: function(){
        if(LOG) console.log('****Generator_begin****');


        var builders = _.filter(Game.creeps,(creep)=> creep.memory.role == 'builder');
        if(LOG) console.log('Builders: '+builders.length);
        if(builders.length < builder_num){
            var newName = 'builder'+ Game.time;
            console.log('Try Spawning '+newName);
            ret = Game.spawns['Spawn0'].spawnCreep(builder_set,newName,{memory:{role:'builder'}});
            if(ret !=0){
                console.log('But Fail.');
            }
        }



        var harvesters = _.filter(Game.creeps, (creep)=> creep.memory.role == 'harvester');
        if(LOG) console.log('Harvesters: '+harvesters.length);
        var upgraders = _.filter(Game.creeps, (creep)=> creep.memory.role == 'upgrader');
        if(LOG) console.log('Upgraders: '+upgraders.length);

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
    Creat:function(num_limit,set,role){
        var creeps = _.filter(Game.creeps,(creep)=> creep.memory.role == role);
        if(LOG) console.log(role+': '+creeps.length);
        if(creeps.length < num_limit){
            let newName = role + Game.time;
        }
    }
}

module.exports = Generator;
