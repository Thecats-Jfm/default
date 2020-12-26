var My_Clear = {
    run: function(){
        for(let name in Memory.creeps){
            if(!Game.creeps[name]){
                delete Memory.creeps[name];
                console.log('Cleared non-existing creep\'s memory: ' + name);
            }
        }
    }
}
module.exports = My_Clear