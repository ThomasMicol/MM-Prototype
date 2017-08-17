class GameModel{

    constructor(){
        this.myCurrency = 0;
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