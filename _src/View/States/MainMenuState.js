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
                this.load.image('newGame', '_sprites/Main Menu/newGameButton.png');
                this.load.image('loadGame', '_sprites/Main Menu/loadGameButton.png');
                this.load.image('options', '_sprites/Main Menu/optionsButton.png');
                this.load.image('mainMenu_background', '_sprites/Main Menu/mainMenuBackground.png');
            },

            create: function(){
                this.background = this.add.sprite(0,0, "mainMenu_background");
                this.btn_NewGame = this.game.add.button(510, 510, 'newGame', this.newGameClick, this, 2, 1 ,0)
                this.btn_LoadGame = this.game.add.button(510,610,'loadGame', this.loadGameClick, this, 2, 1, 0);
                this.btn_Options = this.add.sprite(510, 710,'options');

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