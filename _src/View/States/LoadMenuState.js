class LoadMenuState{
	static getState(game){
		let loadMenuState;
		
		loadMenuState = function(){
			this.myLoadables = FileLoader.getLoadables();
		}
		
		loadMenuState = {
			create:function(){
				console.log("in the loadMenuState create function")
			}
			
		}
		
		return loadMenuState;
	}
}