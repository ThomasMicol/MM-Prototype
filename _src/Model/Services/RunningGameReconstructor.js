class RunningGameReconstructor{

	static reconstruct(loadedGameObject){
		let runningGame = new RunningGame();
		runningGame.isFirstPlay = loadedGameObject.isFirstPlay;
		return runningGame;
	}
}