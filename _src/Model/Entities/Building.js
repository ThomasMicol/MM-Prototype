class Building{
	
	constructor(){
		this.isUnlocked = false;
		this.isBuilt = false;
		this._clickPower = 1;
		this._myLevel = 1;
	}

	get level() {return this.myLevel};
	get clickPower() {return this._clickPower};
	set clickPower(clickPowerIncrease) {this._clickPower = this._clickPower + clickPowerIncrease};
	set unlock(lockState) {this.isUnlocked = lockState};
	set build(buildState) {this.isBuilt = buildState};
	set upgrade(upgradeAmount) {this.level += upgradeAmount};


	
}