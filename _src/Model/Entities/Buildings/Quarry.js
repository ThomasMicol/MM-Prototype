class Quarry extends Building{
    constructor(){
		super()
        this.stoneCount = 0;
    }

    addStone(){
        this.stoneCount += super.clickPower;
    }

    getStoneCount(){
        return this.stoneCount;
    }

    removeStone(number){
        this.stoneCount -= number;
    }
}