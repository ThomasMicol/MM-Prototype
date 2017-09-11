let king =  new Kingdom()
let resourceEx = new ResourceCountExtractor();
let resourceChecker = new RequiredResourceChecker();
king.lumberMill.addWood();
king.lumberMill.addWood();
king.lumberMill.addWood();

king.grainery.addFood();
king.grainery.addFood();

king.quarry.addStone();
king.quarry.addStone();


king.tradingPost.addGold();
king.tradingPost.addGold();
king.tradingPost.addGold();
king.tradingPost.addGold();


console.log(king)
let currentResources = resourceEx.extractResourceDict(king);

let neededResources = king.lumberMill.upgradeCost;
console.log(resourceChecker.checkRequiredResources(currentResources, neededResources))
