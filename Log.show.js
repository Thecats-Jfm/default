const Storages = {
	'container1_1':'5fec953cbf4373b9bafa9ef9',
	'container1_2':'5fec90ebf4249296e189bfc7',
	'container2_1':'5ff14a78741c31b5ed109bdf',
	'container3_1':'5fed972c052d18a949910b0f',
    'container3_2':'5fedba2846e31a709ca40d2d',
    'storage1':'5fe9df20d5294bb6df5699af',
    'storage2':'5fef1e34b7b92b4f649946b0',
    'Terminal1':'5ff051231cf94d0e97ec36bd',
    'Terminal2':'5ffd9b45d59e8d73f59b4c96',
}
const Links = {
    'link1_1':'5feb843e6d5e0ca8c7102b24',
    'link1_2':'5ff060968d6889216f5e86bc',
    'link1_3':'5feba542f42492dc558974cb',
    'link2_1':'5ff2c3d3b9eb67038aeb2f69',
    'link2_2':'5ff2ec60c479b93373ad460d',
}
var LogShow = {
    ShowStorages: function(){
        let log = "";
        let ct1 = 0,ct2 = 0,ct3 = 0,ct4 = 0;
        for(let i in Storages){
            let ob = Game.getObjectById(Storages[i]);
            if(ob == undefined) log+=i+'cannot find'
            else log += i+": "+ob.store.getUsedCapacity()+'/'+ob.store.getCapacity()+'\t';
        }
        console.log(log);
        log = ''
        for(let i in Links){
            let ob = Game.getObjectById(Links[i]);
            log += i+": "+ob.store[RESOURCE_ENERGY]+'/800'+'\t';
        }
        console.log(log);
        // console.log("****LogShowEnd****");
    }
}
module.exports = LogShow;