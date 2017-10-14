class Kingdom{
    constructor(){
        this.lumberMill = new LumberMill();
        this.grainery = new Grainery();
        this.quarry = new Quarry();
        this.tradingPost = new TradingPost();
        this.school = new School();
        this.stable = new Stable();
    }



    lumberClick(){
        this.lumberMill.productionClick();
        return this.lumberMill.woodCount;
    }


    foodClick(){
        this.grainery.productionClick();
        return this.grainery.foodCount;
    }


    stoneClick(){
        this.quarry.productionClick();
        return this.quarry.stoneCount;
    }


    goldClick(){
        this.tradingPost.productionClick();
        return this.tradingPost.goldCount;
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

    applyUpgrade(anUpgrade)
    {
        if(RequiredResourceChecker.checkRequiredResources(ResourceCountExtractor.extractResourceDict(this), anUpgrade.cost))
        {
            this.deductResources(anUpgrade.cost);
            if(anUpgrade.targetBuilding == "LumberMill")
            {
                
                this.lumberMill.upgrade(anUpgrade);
            }
            if(anUpgrade.targetBuilding == "Grainery")
            {
                this.grainery.upgrade(anUpgrade);
            }
            if(anUpgrade.targetBuilding == "Quarry")
            {
                this.quarry.upgrade(anUpgrade);
            }
            if(anUpgrade.targetBuilding == "TradingPost")
            {
                this.tradingPost.upgrade(anUpgrade);
            }
        }
        
    }
}
