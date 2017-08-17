class StateFactory{
    static getLaunchingStates(aModel){
        let stateHolder = {};
        stateHolder.splashState = function(game){
            this.title;
            this.timer;
            
        };

        stateHolder.splashState.prototype = {
            preload: function(){
                this.load.image('titleText', '_sprites/Splash Screen/Thomas Made this.png');
            },

            create: function(){
                this.title = this.add.sprite(200,200, 'titleText');
                this.title.alpha = 0;
                this.game.add.tween(this.title).to({alpha: 1},2000,Phaser.Easing.Linear.None, true,0,1000,true);
                this.timer = this.game.time.create(false);
                this.timer.add(1000, function(){this.game.state.start('mainMenuState')}, this);
                this.timer.start();
            },

            render: function(){
                this.game.debug.text("Time until event: " + this.timer.duration.toFixed(0), 10, 20,'red');
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
                this.btnNewGame = this.game.add.button(this.game.world.centerX - 95, 400, 'newGame', this.newGameClick, this, 2, 1 ,0)
                this.btnLoadGame = this.add.sprite(200,400,'loadGame');
                this.btnOptions = this.add.sprite(200,600,'options');

            },

            render: function(){
                this.game.debug.text("Money: " + aModel.getCurrency(), 10, 20,'red');
            },

            newGameClick: function(){
                this.game.state.start('characterCreationState')

            }
        }

        stateHolder.bootState = function(game){

        }

        stateHolder.bootState.prototype = {
            create: function(){
                this.game.state.start('splashState');
            }
        }

        stateHolder.characterCreationState = function(game){
            
        }
            
        stateHolder.characterCreationState.prototype = {
            create: function(){
                this.game.state.start('mainGameState');
            }
        }

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
        
        stateHolder.mainGameState = function(game){
            
        }
            
        stateHolder.mainGameState.prototype = {
            create: function(){
                console.log("i am in the game now")
            }
        }


        console.log(stateHolder);
        return stateHolder;
    }


}