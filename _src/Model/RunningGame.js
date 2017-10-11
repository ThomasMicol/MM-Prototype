class RunningGame{
    constructor()
    {
		this.isFirstPlay = true;
        this.myKingdom = new Kingdom();
        this.myUpgrades = [];
        this.myUpgradeGenerator = new UpgradeGenerator(this);
        this.generateUpgradeList();

    }
    
    generateUpgradeList()
    {
        while(this.myUpgrades.length < 6)
        {
            this.myUpgrades.push(this.myUpgradeGenerator.requestNewUpgrade());
        }
    }

    buyUpgradeFromList(index)
    {
        let theUpgrade = this.myUpgrades[index]
        if(theUpgrade.effectType == "Power")
        {
            this.myKingdom.applyUpgrade(theUpgrade);
        }
        if(theUpgrade.effectType == "Magnitude")
        {
            this.myUpgradeGenerator.upgradeMagnitude(anUpgrade);
        }
        
        this.myUpgrades.splice(index, 1);
        this.generateUpgradeList();
    }
}