class TradingPost extends Building{
    constructor(){
		super()
        //this.myUpgradeCalculator = new UpgradeCostCalculator();
        //this.myRequiredResourceChecker = new RequiredResourceChecker();
        this._goldCount = 0;
    }

    get goldCount(){
        return this._goldCount;
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


    get upgradeCost(){
        return super.nextUpgradeCost;
    }

    addGold(){
        this._goldCount += super.clickPower;
    }

    removeGold(number){
        this._sgoldCount -= number;
    }

    checkRequiredResources(aKingdom){

        let requiredLumber = 1;
        let requiredFood = 0;
        let requiredStone = 0;
        let requiredGold = 0;
        let myLumber = aKingdom.lumberMill.getWoodCount();
        let myFood = aKingdom.grainery.getFoodCount();
        let myStone = aKingdom.quarry.getStoneCount();
        let myGold = aKingdom.tradingPost.getGoldCount();
        if(requiredLumber <= myLumber && requiredFood <= myFood){
            if(requiredStone <= myStone && requiredGold <= myGold ){
                return true;
            }
            return false;
        }
        return false;
    }

    getRequiredResources(){
        let requiredLumber = 1;
        let requiredFood = 0;
        let requiredStone = 0;
        let requriedGold = 0;
        let requiredResourcesArr = {
            lumberDebt: requiredLumber,
            foodDebt : requiredFood,
            stoneDebt: requiredStone,
            goldDebt: requriedGold
        }
        return requiredResourcesArr;
    }


}
