import $ from 'jquery';


import { Balloon } from "./Balloon";

class Tom{
	constructor(){
		this.misses=0;
		this.maxMisses = 5;
		this.shots=0;
		this.score=0; 
		
	}


	
	startProjectile(){
		this.projectile = new Balloon() ;
	}

	shoot(wasHit){
		this.shots = this.shots+1;

		if(wasHit){
			this.score = this.score+1;
			this.projectile.BalloonVelocity = 0;
			this.projectile.BalloonPosition = this.projectile.BalloonEnd;
		} else {
			if(this.misses<this.maxMisses){
				this.misses = this.misses+1;
			} 

		}
		$(".input-result").html("");
		$(".input-result").append(`<div class="shots">Shots: ${this.shots}</div><div class="score"> Score: ${this.score}</div>
			<div class="misses"> Misses: ${this.misses}</div>`);
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
