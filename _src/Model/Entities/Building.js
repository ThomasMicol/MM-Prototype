class Building{
	
	constructor(){
		this.isUnlocked = false;
		this.isBuilt = false;
		this.clickPower = 1;
		this.myLevel = 1;
	}

	get level() {return this.myLevel};
	get clickPower() {return this.clickPower}
	set unlock() {this.isUnlocked = true}
	set build() {this.isBuilt = true}
	set upgrade() {this.level += 1}


	
}