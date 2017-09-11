class Grainery extends Building{
    constructor(){
		super()
        this._foodCount = 0;
    }

    get foodCount(){
        return this._foodCount;
    }

    addFood(){
        this._foodCount += super.clickPower;
    }

    removeFood(number){
        this.foodCount -= number;
    }

}
