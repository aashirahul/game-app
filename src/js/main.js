

import _ from 'lodash';
import $ from 'jquery';

import { Jerry } from "./jerry";
import { Tom } from "./Tom";
import { Balloon } from "./Balloon";


class Game{
	constructor(runTime){
		this.tom = new Tom;
		this.jerry = new Jerry;
		this.runTime = runTime;
	}

	setupGame(){
		 this.runtimeEvent();
		 this.clickEvent();

		}

	runtimeEvent(runTime){
		this.interval = setInterval(processRunTimeEvents,100);
	}
	processRunTimeEvents(){
		this.reduceRunTime = this.runTime-100;
		this.jerry.move();
		if(this.tom.projectile != undefined){
			this.tom.projectile.changingBalloonPosition();

		}
		this.checkIfItIsAHit();

	}

	checkIfItIsAHit(){
		if((this.jerry.position >= 375 && this.jerry.position <= 425) && 
			(this.tom.projectile.BalloonPosition >= 500 && this.tom.projectile.BalloonPosition < 550) ){
			this.tom.shoot(true);
		} else if(this.tom.projectile.BalloonPosition > 550){
			this.tom.shoot(false);
		}
	}
	

	clickEvent(){
		$(".button").click(startGame);

	}
	startGame(){
		if(this.tom.projectile == undefined || !this.tom.projectile.isMoving()) {
			this.tom.startProjectile();
			return true;
		}

		return false;
	}

	gameOver(){
		if(this.checkIfGameOver){
			$(".end-result").append(`<div> GAME OVER </div>`);
		}



	}

	checkIfGameOver(){
		if(this.tom.hasMissesReached()){
			return true;
		} else {
			return false;
		}

	}

	

	}
	export {Game};
	
