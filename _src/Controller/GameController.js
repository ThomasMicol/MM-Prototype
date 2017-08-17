class GameController{

    constructor(aModel){
        let myModel = aModel;
        let myView = new GameView(myModel)
    }

}

let gameController = new GameController(new GameModel());