class Quarry extends ProductionBuilding{
    constructor(){
		super()
        this._stoneCount = 0;
    }

    get stoneCount(){
        return this._stoneCount;
    }

    addResources(){
        this._stoneCount += super.clickPower;
    }

    removeStone(number){
        this._stoneCount -= number;
    }
}
