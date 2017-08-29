class LumberMill extends Building{
    constructor(){
		super();
        this.isUnlocked = true;
        this.isBuilt = true;
        this.clickPower = 1;
        this.lumberCount = 0;
    }

    addWood(){
        this.lumberCount += this.clickPower;
    }

    getWoodCount(){
        return this.lumberCount;
    }

    removeLumber(number){
        this.lumberCount -= number;
    }


}