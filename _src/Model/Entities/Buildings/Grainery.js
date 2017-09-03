class Grainery extends Building{
    constructor(){
		super()
        this.foodCount = 0;
    }

    addFood(){
        this.foodCount += super.clickPower;
    }

    getFoodCount(){
        return this.foodCount;
    }

    removeFood(number){
        this.foodCount -= number;
    }

}