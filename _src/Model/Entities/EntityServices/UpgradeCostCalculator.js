class UpgradeCostCalculator{
    static CalculateUpgradeCost(upgrade)
    {
        let cost = {
            wood: 20,
            food: 20,
            stone: 10,
            gold: 5
        };

        if(upgrade.effectType == "Magnitude")
        {
            cost.wood += upgrade.magnitude;
            cost.food += upgrade.magnitude / 2;
            cost.stone += upgrade.magnitude;
            cost.gold += upgrade.magnitude * 2;

        }


        if(upgrade.effectType == "Power")
        {
            cost.wood += upgrade.magnitude * 2;
            cost.food += upgrade.magnitude;
            cost.stone += upgrade.magnitude / 2;
            cost.gold += upgrade.magnitude;
        }

        if(upgrade.effectType == "Cost")
        {
            cost.wood += upgrade.magnitude;
            cost.food += upgrade.magnitude * 2;
            cost.stone += upgrade.magnitude;
            cost.gold += upgrade.magnitude / 2;
        }


        return cost;
    }
}
