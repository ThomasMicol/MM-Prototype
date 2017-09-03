class CharacterCreationState{
	static getState(game){
		let characterCreationState;
		
		characterCreationState = function(){
            
        }
            
        characterCreationState = {
            create: function(){
                game.state.start('mainGameState');
            }
        } 
		
		return characterCreationState;
	}
}