class Grainery extends ProductionBuilding{
    constructor(){
		super()
        this._foodCount = 0;
    }

    get foodCount(){
        return this._foodCount;
    }

    addResources(){
        this._foodCount += super.clickPower;
    }

    removeFood(number){
        this.foodCount -= number;
    }

}
