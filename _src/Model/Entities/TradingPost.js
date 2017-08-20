class TradingPost{
    constructor(){
        this.isUnlocked = true;
        this.isBuilt = false;
        this.myLevel = 1;
        this.clickPower = 1;
        this.goldCount = 0;
    } 

    addGold(){
        this.goldCount += this.clickPower;
    }

    getGoldCount(){
        return this.goldCount;
    }

    removeGold(number){
        this.goldCount -= number;
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