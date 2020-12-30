const Storages = ['5fe80c30d556b322b89e0836','5fe827f348ec5dacf2ed65c2','5fe85b7de13bf4c2283ce67a','5fe8a7799377f7b41280fda3','5feababfdd025bc3ef8ea38f','5fe9df20d5294bb6df5699af']
//C3 C2 C1 S1
var LogShow = {
    ShowStorages: function(){
        console.log("****LogShowBegin****");
        let log = "";
        let ct1 = 0,ct2 = 0,ct3 = 0,ct4 = 0;
        for(let i in Storages){
            let ob = Game.getObjectById(Storages[i]);
            if(i<=1) ct1+=ob.store[RESOURCE_ENERGY];
            else if(i<=3) ct2+=ob.store[RESOURCE_ENERGY];
            else if(i<=4) ct3+=ob.store[RESOURCE_ENERGY];
            else if(i<=5) ct4+=ob.store[RESOURCE_ENERGY];
            log += ob.store[RESOURCE_ENERGY]+'/'+ob.store.getCapacity(RESOURCE_ENERGY)+'\t';
        }
        // console.log(log);
        console.log("Part1: "+ct1+"/4000\tPart2: "+ct2+"/4000\tPart3: "+ct3+"/2000\tPart4: "+ct4+"/1000000");
        console.log("****LogShowEnd****");
    }
}
module.exports = LogShow;