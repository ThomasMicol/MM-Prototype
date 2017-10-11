class UpgradeGenerator
{
    constructor(myGame)
    {
        this.runningGame = myGame;
        this.flatCostDecrease = 0;
        this.divideCostDecrease = 1;

        this.flat_magnitude = 0;
        this.percent_magnitude = 0;
        this.mulitplier_magnitude = 0;
        this.exponent_magnitude = 1;

    }

    upgradeMagnitude(anUpgrade)
    {
        if(anUpgrade.magnitudeType == "Flat")
        {
            this.flat_magnitude += anUpgrade.magnitude;
        }
        if(anUpgrade.magnitudeType == "Percentage")
        {
            this.percent_magnitude += anUpgrade.magnitude;
        }
        if(anUpgrade.magnitudeType == "Mult")
        {
            this.mulitplier_magnitude += anUpgrade.magnitude;
        }
        if(anUpgrade.magnitudeType == "Exponent")
        {
            this.exponent_magnitude += anUpgrade.magnitude;
        }
    }

    requestNewUpgrade()
    {
        let upgrade = new Upgrade();
        upgrade.applyEffectType(this.generateEffectType());
        upgrade.applyMagnitudeType(this.generateMagnitudeType(upgrade));
        upgrade.applyTargetUpgradeArea(this.generateTargetUpgradeArea(upgrade));
        upgrade.applyMagnitude(this.generateMangnitude(upgrade));
        upgrade.cost = UpgradeCostCalculator.CalculateUpgradeCost(upgrade);
        return upgrade;
    }

    generateEffectType()
    {
        let seed = Math.floor(Math.random() * 100);
        if(seed >= 90)
        {
            return "Magnitude";
        }
        if(seed >= 60)
        {
            return "Cost"
        }
        if(seed >= 0)
        {   
            return "Power";
        }
    }

    generateTargetUpgradeArea(upgrade)
    {
        if(upgrade.effectType == "Cost")
        {
            let seed = Math.floor(Math.random() * 100);
            if(seed >= 90)
            {
                return "Upgrade";
            }
            if(seed >= 60)
            {
                return "Service";
            }
            if(seed >= 0)
            {
                return "Production";
            }
        }
        else
        {
            let seed = Math.floor(Math.random() * 100);
            if(seed >= 80)
            {
                return "Upgrade";
            }
            if(seed >= 0)
            {
                return "Production";
            }
        }
    }

    generateMagnitudeType(upgrade)
    {
        let seed = Math.floor(Math.random() * 100);
        if(upgrade.effectType == "Cost"){
            return this.generateCostMagnitudeType()
        }
        if(seed >= 97)
        {
            return "Exponent";
        }
        if(seed >= 90)
        {
            return "Mult";
        }
        if(seed >= 60)
        {
            return "Percentage"
        }
        if(seed >= 0)
        {
            return "Flat";
        }

    }

    generateMangnitude(theUpgrade)
    {
        return Math.floor(Math.random() * 100);
    }

    generateCostMagnitudeType()
    {
        let seed = Math.floor(Math.random() * 100);
        if(seed >= 90)
        {
            return "Divide";
        }
        else
        {
            return "Percentage";
        }
    }
}