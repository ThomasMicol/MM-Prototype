class LumberMill extends ProductionBuilding{
    constructor(){
		super();
        this.lumberCount = 0;
    }

    get woodCount(){
        return this.lumberCount;
    }

    productionClick()
    {
        this.lumberCount += this.calcClickPower();
    }

    removeLumber(number){
        this.lumberCount -= number;
    }


}
