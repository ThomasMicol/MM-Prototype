class ProductionBuilding extends Building
{
    constructor()
    {
        super();
        this.clickPower = 1;
        this.flat_clickBonus = 0;
        this.percentage_clickBonus = 0;
        this.multiplier_clickBonus = 0;
        this.exponent_clickBonus = 0;

        this.idlePower = 0;
        this.flat_idleBonus = 0;
        this.percentage_idleBonus = 0;
        this.multiplier_idleBonus = 0;
        this.exponent_idleBonus = 0;

    }
    upgrade(anUpgrade)
    {
        if(anUpgrade.isIdle == true)
        {
            this.upgradeIdle(anUpgrade);
        }
        if(anUpgrade.isIdle == false)
        {
            this.upgradeClick(anUpgrade);
        }
    }

    upgradeClick(anUpgrade)
    {
        if(anUpgrade.magnitudeType == "Flat")
        {
            this.flat_clickBonus += anUpgrade.magnitude;
        }
        if(anUpgrade.magnitudeType == "Percentage")
        {
            this.percentage_clickBonus += anUpgrade.magnitude;
        }
        if(anUpgrade.magnitudeType == "Mult")
        {
            this.multiplier_clickBonus += anUpgrade.magnitude;
        }
        if(anUpgrade.magnitudeType == "Exponent")
        {
            this.exponent_clickBonus += anUpgrade.magnitude;
        }
    }

    upgradeIdle(anUpgrade)
    {
        if(anUpgrade.magnitudeType == "Flat")
        {
            this.flat_idleBonus += anUpgrade.magnitude;
        }
        if(anUpgrade.magnitudeType == "Percentage")
        {
            this.percentage_idleBonus += anUpgrade.magnitude;
        }
        if(anUpgrade.magnitudeType == "Mult")
        {
            this.multiplier_idleBonus += anUpgrade.magnitude;
        }
        if(anUpgrade.magnitudeType == "Exponent")
        {
            this.exponent_idleBonus += anUpgrade.magnitude;
        }
    }
}