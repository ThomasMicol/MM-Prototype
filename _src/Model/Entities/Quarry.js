class Quarry{
    constructor(){
        this.isUnlocked = false;
        this.isBuilt = false;
        this.clickPower = 1;
        this.stoneCount = 0;
    }

    addStone(){
        this.stoneCount += this.clickPower;
    }

    getStoneCount(){
        return this.stoneCount;
    }

    removeStone(number){
        this.stoneCount -= number;
    }
}