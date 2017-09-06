class LoadMenuState{
	static getState(game, aModel){
		let loadMenuState;
		
		loadMenuState = function(){
			this.myLoadables = FileLoader.getLoadables();
		}
		
		loadMenuState = {
			create:function(){
				console.log("in the loadMenuState create function");
				this.input = game.add.inputField(40,400, { 
					font: '16px',
					width: 400,
					height: 40,
					placeholder: 'Enter your save string here'
	
				});
				console.log(this.input);
				
				this.btn_load = game.add.button(500,400,'loadGame', this.loadGameClick, this, 2, 1, 0);
				
			},
			
			update: function () {
				this.input.update();
			},
			
			loadGameClick: function(){
				aModel.loadGame(this.input.text.text);
				game.state.start('mainGameState');
			}
			
		}
		
		return loadMenuState;
	}
}