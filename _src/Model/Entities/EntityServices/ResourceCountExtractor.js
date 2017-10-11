class ResourceCountExtractor{
    static extractResourceDict(aKingdom){
        let currentWood = aKingdom.lumberMill.woodCount;
        let currentFood = aKingdom.grainery.foodCount;
        let currentStone = aKingdom.quarry.stoneCount;
        let currentGold = aKingdom.tradingPost.goldCount;

        let resourceDict = {
            wood: currentWood,
            food: currentFood,
            stone: currentStone,
            gold: currentGold
        }
        return resourceDict;
    }
}
