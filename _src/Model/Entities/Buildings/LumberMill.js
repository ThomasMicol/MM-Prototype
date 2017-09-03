class LumberMill extends Building{
    constructor(){
		super();
        this.lumberCount = 0;
    }

    addWood(){
        this.lumberCount += super.clickPower;
    }

    getWoodCount(){
        return this.lumberCount;
    }

    removeLumber(number){
        this.lumberCount -= number;
    }


}