class Building{
	
	constructor(){
		this.isUnlocked = false;
		this.isBuilt = false;
		this.clickPower = 1;
		this.myLevel = 1;
	}
	
	unlockBuilding(){
		this.isUnlocked = true;
	}
	
	build(){
		this.isBuilt = true;
	}
	
	
	
}