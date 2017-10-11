class Upgrade
{
    constructor()
    {
        this.cost = undefined;
        this.targetBuilding = undefined;
        this.magnitudeType = undefined;
        this.effectType = undefined;
        this.upgradeArea = undefined;
        this.magnitude = undefined;
        this.isIdle = false;

    }

    applyEffectType(anEffectType)
    {
        this.effectType = anEffectType;
        if(this.effectType == "Power")
        {
            if(Math.floor(Math.random() * 100) >= 65)
            {
                this.isIdle = true;
            }
            let seed = Math.floor(Math.random() * 100);
            if(seed <= 25)
            {
                this.targetBuilding = "LumberMill";
                return;
            }
            if(seed <= 50)
            {
                this.targetBuilding = "Quarry";
                return;
            }
            if(seed <= 75)
            {
                this.targetBuilding = "TradingPost";
                return;
            }
            if(seed <= 100)
            {
                this.targetBuilding = "Grainery";
                return;
            }

        }
    }

    applyMagnitudeType(magType)
    {
        this.magnitudeType = magType
    }

    applyTargetBuilding(aBuilding)
    {
        this.targetBuilding = aBuilding;
    }

    applyTargetUpgradeArea(area)
    {
        this.upgradeArea = area;
    }

    applyMagnitude(aMagnitude)
    {
        this.magnitude = aMagnitude;
    }
}