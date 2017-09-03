class SplashState{
	static getState(game){
		let splashState;
		
		splashState = function(){
            this.title;
            this.timer;
            
        }

        splashState = {
            preload: function(){
                this.load.image('titleText', '_sprites/Splash Screen/Thomas Made this.png');
            },

            create: function(){
                this.title = this.add.sprite(200,200, 'titleText');
                this.title.alpha = 0;
                this.game.add.tween(this.title).to({alpha: 1},2000,Phaser.Easing.Linear.None, true,0,1000,true);
                this.timer = this.game.time.create(false);
                this.timer.add(1000, function(){game.state.start('mainMenuState')}, this);
                this.timer.start();
            },

            render: function(){
                this.game.debug.text("Time until event: " + this.timer.duration.toFixed(0), 10, 20,'red');
            }
        }
		return splashState;
	}

}