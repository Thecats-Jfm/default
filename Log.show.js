const Storages = {
	'container1_1':'5fec953cbf4373b9bafa9ef9',
	'container1_2':'5fec90ebf4249296e189bfc7',
	'container2_1':'5ff14a78741c31b5ed109bdf',
	'container3_1':'5fed972c052d18a949910b0f',
	'container3_2':'5fedba2846e31a709ca40d2d',
    'storage1':'5fe9df20d5294bb6df5699af',
    'storage3':'5fef1e34b7b92b4f649946b0'
}
var LogShow = {
    ShowStorages: function(){
        let log = "";
        let ct1 = 0,ct2 = 0,ct3 = 0,ct4 = 0;
        for(let i in Storages){
			let ob = Game.getObjectById(Storages[i]);
            log += i+": "+ob.store.getUsedCapacity()+'/'+ob.store.getCapacity()+'\t';
        }
         console.log(log);
        // console.log("****LogShowEnd****");
    }
}
module.exports = LogShow;