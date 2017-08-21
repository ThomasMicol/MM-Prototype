class GameView{
    constructor(aModel){
        this.config = {
            width: 1420,
            height: 860,
            parent: 'game',
            renderer: Phaser.AUTO,
            state: {
                preload: this.preload,
                create: this.create,
                render: this.render,
				update: this.update
            }
        }
        this.myModel = aModel;       
        this.states;
        this.game = new Phaser.Game(this.config);
        this.setLaunchingStates(this.game, this.myModel);
    }
        
    create(){
        console.log("in the view create function");
    }
    
    render(){
        
    }

    setLaunchingStates(game, aModel){
        this.states = StateFactory.getLaunchingStates(aModel);
        game.state.add('bootState', this.states.bootState, true)
        game.state.add('splashState', this.states.splashState);
        game.state.add('mainMenuState', this.states.mainMenuState); 
        game.state.add('characterCreationState', this.states.characterCreationState);
        game.state.add('mainGameState', this.states.mainGameState);
    }

    
}

