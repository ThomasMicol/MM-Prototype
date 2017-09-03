class BootState{
	static getState(game){
		let bootState;
		
		bootState = function(){
        }

        bootState = {
            create: function(){
                game.state.start('splashState');
            }
        }
		
		return bootState;
	}
}