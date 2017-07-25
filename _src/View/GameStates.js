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
                this.title = this.add.sprite(2,2, 'titleText');
                this.title.alpha = 0;
                this.game.add.tween(this.title).to({alpha: 1},2000,Phaser.Easing.Linear.None, true,0,1000,true);
            }
        }
        console.log(stateHolder);
        return stateHolder;
    }


}