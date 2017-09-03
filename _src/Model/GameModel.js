class GameModel{

    constructor(){
        this.myGame = new RunningGame();
    }

    newGame(){
        this.myGame = new RunningGame();
    }
	
	getLoadbles(){
		FileLoader.getLoadables();
	}

    addCurrency(){
        this.myCurrency++;
    }

    getCurrency(){
        return this.myCurrency;
    }
}