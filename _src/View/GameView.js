class GameView{

    constructor(){
        this.config = {
            parent: 'game',
            renderer: Phaser.AUTO,
            state: {
                preload: this.preload,
                create: this.create,
                render: this.render
            }
        }
        this.game = new Phaser.Game(this.config);
        
    }


    preload(){

    }

    create(){
        let states = StateFactory.getStates();
        this.game.state.add("splashState", states.splashState,true);
    }

    render(){
        this.game.width = window.outerWidth;
        this.game.height = window.outerHeight * 0.90;

    }

}
