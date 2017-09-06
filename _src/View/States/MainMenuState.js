class MainMenuState{
	static getState(game, aModel){
		let mainMenuState;
		
		mainMenuState = function(){
            this.btn_NewGame;
            this.btn_LoadGame;
            this.btn_Options;
        }

        mainMenuState = {
            preload: function(){
                this.load.image('newGame', '_sprites/Main Menu/newGameButton.jpg');
                this.load.image('loadGame', '_sprites/Main Menu/loadGameButton.jpg');
                this.load.image('options', '_sprites/Main Menu/optionsButton.jpg');
            },

            create: function(){
                this.btn_NewGame = this.game.add.button(this.game.world.centerX - 95, 400, 'newGame', this.newGameClick, this, 2, 1 ,0)
                this.btn_LoadGame = this.game.add.button(200,400,'loadGame', this.loadGameClick, this, 2, 1, 0);
                this.btn_Options = this.add.sprite(200,600,'options');

            },

            render: function(){
                //this.game.debug.text("Money: " + aModel.getCurrency(), 10, 20,'red');
            },

            newGameClick: function(){
                this.game.state.start('characterCreationState')
            },
			
			loadGameClick: function(){
				this.game.state.start('loadMenuState');
			}
        }
		return mainMenuState;
	}
}