class LoadMenuState{
	static getState(game, aModel){
		let loadMenuState;
		
		loadMenuState = function(){
			this.myLoadables = FileLoader.getLoadables();
		}
		
		loadMenuState = {

			preload:function()
			{
				this.load.image('mainMenu_background', '_sprites/Main Menu/mainMenuBackground.png');
			},

			create:function(){
				this.background = game.add.sprite(0,0, "mainMenu_background");
				this.input = game.add.inputField(530,510, { 
					font: '16px',
					width: 250,
					height: 160,
					placeholder: 'Enter your save string here'
	
				});
				
				this.btn_load = game.add.button(510,710,'loadGame', this.loadGameClick, this, 2, 1, 0);
				
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