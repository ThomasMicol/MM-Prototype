class GameModel{

    constructor(){
        this.myGame = new RunningGame();
    }
	
	

    newGame(){
        this.myGame = new RunningGame();
    }
	
	loadGame(obfuscatedString){
		this.myGame = RunningGameReconstructor.reconstruct(Deobfuscator.getObjectFromObfuscatedString(obfuscatedString));
		console.log(this.myGame);
    }
    
    saveGame(){
        return Obfuscator.obfuscateJavascriptObject(this.myGame);
    }
	
	

}