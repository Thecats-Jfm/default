var LabsWay = {
    run1:function(){
        let lab3 = Game.getObjectById('5ff1e4d8bbb4cca922e80f58'),lab1 = Game.getObjectById('5ff205ead734c64fa2dc661a'),lab2 =  Game.getObjectById('5ff19903b1fcd5605d33e1bc')
        lab3.runReaction(lab1,lab2)
    }
}
module.exports = LabsWay