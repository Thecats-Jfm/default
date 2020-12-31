const Storages = ['5fec953cbf4373b9bafa9ef9','5fec90ebf4249296e189bfc7','5feababfdd025bc3ef8ea38f','5fed972c052d18a949910b0f','5fedba2846e31a709ca40d2d','5fe9df20d5294bb6df5699af']
//C3 C2 C1 S1
var LogShow = {
    ShowStorages: function(){
        // console.log("****LogShowBegin****");
        let log = "";
        let ct1 = 0,ct2 = 0,ct3 = 0,ct4 = 0;
        for(let i in Storages){
            let ob = Game.getObjectById(Storages[i]);
            if(i<=1) ct1+=ob.store[RESOURCE_ENERGY];
            else if(i<=3) ct2+=ob.store[RESOURCE_ENERGY];
            else if(i<=4) ct3+=ob.store[RESOURCE_ENERGY];
            else if(i<=5) ct4+=ob.store[RESOURCE_ENERGY];
            log += 'container'+i+": "+ob.store[RESOURCE_ENERGY]+'/'+ob.store.getCapacity(RESOURCE_ENERGY)+'\t';
        }
         console.log(log);
        //console.log("Part1: "+ct1+"/4000\tPart2: "+ct2+"/4000\tPart3: "+ct3+"/2000\tPart4: "+ct4+"/1000000");
        // console.log("****LogShowEnd****");
    }
}
module.exports = LogShow;