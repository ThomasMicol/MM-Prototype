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
    }

    render(){
        console.log(window.outerWidth)
        this.game.width = window.outerWidth;
        this.game.height = window.outerHeight * 0.90;

    }

}
