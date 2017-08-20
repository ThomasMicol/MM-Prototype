class GameModel{

    constructor(){
        this.myGame = new RunningGame();
    }

    newGame(){
        console.log("ayo")
        this.addCurrency();
    }

    addCurrency(){
        this.myCurrency++;
    }

    getCurrency(){
        return this.myCurrency;
    }
}