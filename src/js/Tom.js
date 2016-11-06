

import { Balloon } from "./Balloon";

class Tom{
	constructor(){
		this.misses=0;
		this.maxMisses = 5;
		this.shots=0;
		this.score=0; 
		
	}


	
	startProjectile(){
		this.projectile = new Balloon ;
	}

	shoot(wasHit){
		this.shots = this.shots+1;

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
	}

	export {Tom};
