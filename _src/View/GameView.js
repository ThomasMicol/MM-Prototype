class GameView{
    constructor(aModel){
        this.config = {
            width: 1440,
            height: 880,
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
		this.pluginManager;
        this.game = new Phaser.Game(this.config);
		this.setPlugins();
        this.setLaunchingStates(this.game, this.myModel);
    }
        
    create(){
        console.log("in the view create function");
    }
    
    render(){
        
    }

	setPlugins(){
		this.pluginManager = new Phaser.PluginManager(this.game);
		this.pluginManager.add(PhaserInput.Plugin);
	}
	
    setLaunchingStates(game, aModel){
        this.states = StateFactory.getLaunchingStates(game, aModel);
        game.state.add('bootState', this.states.bootState, true)
        game.state.add('splashState', this.states.splashState);
        game.state.add('mainMenuState', this.states.mainMenuState); 
        game.state.add('loadMenuState', this.states.loadMenuState); 
        game.state.add('characterCreationState', this.states.characterCreationState);
        game.state.add('mainGameState', this.states.mainGameState);
    }

    
}

