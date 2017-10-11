class LumberMill extends ProductionBuilding{
    constructor(){
		super();
        this.lumberCount = 0;
    }

    get woodCount(){
        return this.lumberCount;
    }

    get upgradeCost(){
        let currentLevel = super.level;
        let neededWood = currentLevel * 2;
        let neededFood  = currentLevel * 1.15;
        let neededStone = currentLevel * 1.50;
        let neededGold = currentLevel * 3;
        let resourceDict  = {
            wood: neededWood,
            food: neededFood,
            stone: neededStone,
            gold: neededGold
        }
        return resourceDict;
    }

    addResources(){
        this.lumberCount += super.clickPower;
    }

    removeLumber(number){
        this.lumberCount -= number;
    }


}
