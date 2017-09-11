class Building{

	constructor(){
		this.isUnlocked = false;
		this.isBuilt = false;
<<<<<<< HEAD
		this._nextUpgradeCost = undefined;
=======
>>>>>>> c9575ed5d978f2263459ceb60a4d2d5c061f9d14
		this._clickPower = 1;
		this._myLevel = 1;
	}

<<<<<<< HEAD
	get level() { return this._myLevel }; 
	get clickPower() {return this._clickPower};
	get nextUpgradeCost() {return this._nextUpgradeCost}
=======
	get level() {return this.myLevel};
	get clickPower() {return this._clickPower};
>>>>>>> c9575ed5d978f2263459ceb60a4d2d5c061f9d14
	set clickPower(clickPowerIncrease) {this._clickPower = this._clickPower + clickPowerIncrease};
	set unlock(lockState) {this.isUnlocked = lockState};
	set build(buildState) {this.isBuilt = buildState};
	set upgrade(upgradeAmount) {this.level += upgradeAmount};
<<<<<<< HEAD




=======
>>>>>>> c9575ed5d978f2263459ceb60a4d2d5c061f9d14


}
