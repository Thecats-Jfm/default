const dict = {
    'link1_1':'5feb843e6d5e0ca8c7102b24',
    'link1_2':'5ff060968d6889216f5e86bc',
    'link1_3':'5feba542f42492dc558974cb',
    'link2_1':'5ff2c3d3b9eb67038aeb2f69',
    'link2_2':'5ff2ec60c479b93373ad460d',
}
var Links = {
    run1: function(){
        let link1_1 = Game.getObjectById(dict['link1_1'])
        let link1_2 = Game.getObjectById(dict['link1_2'])
        let link1_3 = Game.getObjectById(dict['link1_3'])
        let link2_1 = Game.getObjectById(dict['link2_1'])
        let link2_2 = Game.getObjectById(dict['link2_2'])
        if(link1_2.store.getFreeCapacity(RESOURCE_ENERGY)>=600){
            if(link1_3.store[RESOURCE_ENERGY]>=600) link1_3.transferEnergy(link1_2,600)
            if(link1_1.store[RESOURCE_ENERGY]>=600) link1_1.transferEnergy(link1_2,600)
        }
        else {
            if(link1_3.store[RESOURCE_ENERGY]==800) link1_3.transferEnergy(link1_1);
        }
        if(link2_2.store[RESOURCE_ENERGY]>=200){
            link2_2.transferEnergy(link2_1)

        }
    }
}
module.exports = Links