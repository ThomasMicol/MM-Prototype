class Building{

	constructor(){
		this.isUnlocked = false;
		this.isBuilt = false;
		this._nextUpgradeCost = undefined;
		this._clickPower = 1;
		this._myLevel = 1;
	}

	get level() { return this._myLevel }; 
	get clickPower() {return this._clickPower};
	get nextUpgradeCost() {return this._nextUpgradeCost}
	set clickPower(clickPowerIncrease) {this._clickPower = this._clickPower + clickPowerIncrease};
	set unlock(lockState) {this.isUnlocked = lockState};
	set build(buildState) {this.isBuilt = buildState};
	set upgrade(upgradeAmount) {this.level += upgradeAmount};






}
