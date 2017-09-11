class Kingdom{
    constructor(){
        this.lumberMill = new LumberMill();
        this.grainery = new Grainery();
        this.quarry = new Quarry();
        this.tradingPost = new TradingPost();
    }



    lumberClick(){
        this.lumberMill.addWood();
        return this.lumberMill.getWoodCount();
    }


    foodClick(){
        this.grainery.addFood();
        return this.grainery.getFoodCount();
    }


    stoneClick(){
        this.quarry.addStone();
        return this.quarry.getStoneCount();
    }


    goldClick(){
        this.tradingPost.addGold();
        return this.tradingPost.getGoldCount();
    }

    

    buildTradingPost(){
        console.log("in the build method")
        if(this.tradingPost.isUnlocked){
            console.log("its unlocked")
            if(this.tradingPost.checkRequiredResources(this)){
                console.log("the minimum has been met")
                this.deductResources(this.tradingPost.getRequiredResources());
                this.tradingPost.isBuilt = true;
            }
        }
    }

    deductResources(debtArr){
        this.lumberMill.removeLumber(debtArr.lumberDebt);
        this.grainery.removeFood(debtArr.foodDebt);
        this.quarry.removeStone(debtArr.stoneDebt);
        this.tradingPost.removeGold(debtArr.goldDebt);
    }
}
