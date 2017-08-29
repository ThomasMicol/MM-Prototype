class Grainery extends Building{
    constructor(){
		super()
        this.isUnlocked = false;
        this.isBuilt = false;
        this.clickPower = 1;
        this.foodCount = 0;
    }

    addFood(){
        this.foodCount += this.clickPower;
    }

    getFoodCount(){
        return this.foodCount;
    }

    removeFood(number){
        this.foodCount -= number;
    }

}