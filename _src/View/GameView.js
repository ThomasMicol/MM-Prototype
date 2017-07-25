let config = {
    width: window.outerWidth,
    height: window.outerHeight * 0.90,
    parent: 'game',
    renderer: Phaser.AUTO,
    state: {
        preload: preload,
        create: create,
        render: render
    }
}
let states = StateFactory.getStates();
let game = new Phaser.Game(config);
let timer;

function preload(){

}

function create(){
    
    game.state.add("splashState", states.splashState,true);
    game.state.add('mainMenuState', states.mainMenuState);
    timer = game.time.create(false);
    timer.add(3000,goToMainMenu,this);
    timer.start();
}

function render(){
    game.width = window.outerWidth;
    game.height = window.outerHeight * 0.90;
    game.debug.text("Time until event: " + timer.duration.toFixed(0), 10, 20,'red');
    

}

function goToMainMenu(){
    console.log('in the go to');
}

