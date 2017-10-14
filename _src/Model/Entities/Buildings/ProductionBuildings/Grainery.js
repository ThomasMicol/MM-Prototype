class Grainery extends ProductionBuilding{
    constructor(){
		super()
        this._foodCount = 0;
    }

    get foodCount(){
        return this._foodCount;
    }

    productionClick()
    {
        this._foodCount += this.calcClickPower();
    }

    removeFood(number){
        this.foodCount -= number;
    }

}
