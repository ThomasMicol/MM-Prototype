class RequiredResourceChecker{
    static checkRequiredResources(currentResourcesDict, neededResourcesDict){
        if(currentResourcesDict.wood >= neededResourcesDict.wood && currentResourcesDict.food >= neededResourcesDict.food){
            if(currentResourcesDict.stone >= neededResourcesDict.stone && currentResourcesDict.gold >= neededResourcesDict.gold){
                return true;
            }
            return false;
        }
        console.log(currentResourcesDict);
        console.log(neededResourcesDict)
    }
}
