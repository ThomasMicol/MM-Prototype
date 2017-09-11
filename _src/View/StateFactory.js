class StateFactory{
	
    static getLaunchingStates(game, aModel){
        let stateHolder = {};
		
		
		stateHolder.bootState = BootState.getState(game);
		stateHolder.splashState = SplashState.getState(game);
		stateHolder.mainMenuState = MainMenuState.getState(game, aModel);
		stateHolder.loadMenuState = LoadMenuState.getState(game, aModel);
		stateHolder.characterCreationState = CharacterCreationState.getState(game);
		stateHolder.mainGameState = MainGameState.getState(game, aModel);
        

        
		
		stateHolder.loadSelectionState = function(game){
            
        }
            
        stateHolder.loadSelectionState.prototype = {
            create: function(){
                console.log("in the load selection state")
            }
        }

        

        

        stateHolder.optionsState = function(game){
            
        }
            
        stateHolder.optionsState.prototype = {
            create: function(){
                console.log("in the options menu")
            }
        }

        


        console.log(stateHolder);
        return stateHolder;
    }


}