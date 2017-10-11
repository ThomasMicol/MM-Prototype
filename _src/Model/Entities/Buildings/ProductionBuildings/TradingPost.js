class TradingPost extends ProductionBuilding{
    constructor(){
		super()
        //this.myUpgradeCalculator = new UpgradeCostCalculator();
        //this.myRequiredResourceChecker = new RequiredResourceChecker();
        this._goldCount = 0;
    }

    get goldCount(){
        return this._goldCount;
    }

    addResources(){
        this._goldCount += super.clickPower;
    }

    removeGold(number){
        this._goldCount -= number;
    }


}
