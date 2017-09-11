class Quarry extends Building{
    constructor(){
		super()
        this._stoneCount = 0;
    }

    get stoneCount(){
        return this._stoneCount;
    }

    addStone(){
        this._stoneCount += super.clickPower;
    }

    removeStone(number){
        this._stoneCount -= number;
    }
}
