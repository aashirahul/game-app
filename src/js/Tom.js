class Tom{
	constructor(){
		this.misses=0;
		this.maxMisses = 5;
		this.shots=0;
		this.score=0;
	}

shoot(wasHit){
	shots = shots+1;

	if(wasHit){
		this.score = this.score+1;
	} else {
		if(this.misses<this.maxMisses){
			this.misses = this.misses+1;
		} 

	}
}
hasMissesReached(){
	if(this.misses >= this.maxMisses){
		return true;
	} else {
		return false;
	}
}

	
