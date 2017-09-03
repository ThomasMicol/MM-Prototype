class GameModel{

    constructor(){
        this.myGame = new RunningGame();
    }

    newGame(){
        this.myGame = new RunningGame();
    }
	
	loadGame(obfuscatedString){
		this.myGame = Deobfuscator.getObjectFromObfuscatedString(obfuscatedString);
    }
    
    saveGame(){
        return Obfuscator.obfuscateJavascriptObject(this.myGame);
    }

}