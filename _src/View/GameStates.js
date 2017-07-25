class StateFactory{
    static getStates(){
        let stateHolder = {};

        stateHolder.splashState = function(game){
            this.title;
        };

        stateHolder.splashState.prototype = {
            preload: function(){
                this.load.image('titleText', '_sprites/Splash Screen/Thomas Made this.png');
            },

            create: function(){
                this.title = this.add.sprite(200,200, 'titleText');
                this.title.alpha = 0;
                this.game.add.tween(this.title).to({alpha: 1},2000,Phaser.Easing.Linear.None, true,0,1000,true);
            }
        }

        stateHolder.mainMenuState = function(game){
            this.btnNewGame;
            this.btnLoadGame;
            this.btnOptions;
        }

        stateHolder.mainMenuState.prototype = {
            preload: function(){
                this.load.image('newGame', '_sprites/Main Menu/newGameButton.jpg');
                this.load.image('loadGame', '_sprites/Main Menu/loadGameButton.jpg');
                this.load.image('options', '_sprites/Main Menu/optionsButton.jpg');
            },

            create: function(){
                console.log("in the main menu create function");
            }
        }
        console.log(stateHolder);
        return stateHolder;
    }


}