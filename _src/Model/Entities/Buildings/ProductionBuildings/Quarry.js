class Quarry extends ProductionBuilding{
    constructor(){
		super()
        this._stoneCount = 0;
    }

    get stoneCount(){
        return this._stoneCount;
    }

    productionClick()
    {
        this._stoneCount += this.calcClickPower();
    }

    removeStone(number){
        this._stoneCount -= number;
    }
}
