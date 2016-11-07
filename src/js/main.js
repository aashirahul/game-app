

import _ from 'lodash';
import $ from 'jquery';

import { Jerry } from "./jerry";
import { Tom } from "./Tom";
import { Balloon } from "./Balloon";


class Game{
	constructor(runTime){
		this.tom = new Tom();
		this.jerry = new Jerry();
		this.runTime = runTime;

		this.processRunTimeEvents = this.processRunTimeEvents.bind(this);
		this.startGame = this.startGame.bind(this);

		this.setupGame();
	}

	setupGame(){
		 this.runtimeEvent();
		 this.clickEvent();

		}

	runtimeEvent(runTime){
		this.interval = setInterval(this.processRunTimeEvents,20);
	}
	processRunTimeEvents(){
		this.reduceRunTime = this.runTime-20;
		this.jerry.move();
		if(this.tom.projectile != undefined && this.tom.projectile.isMoving()){
			this.tom.projectile.changingBalloonPosition();
			this.checkIfItIsAHit();
		}
	}

	checkIfItIsAHit(){
		if((this.jerry.position >= 375 && this.jerry.position <= 425) && 
			(this.tom.projectile.BalloonPosition >= -50 && this.tom.projectile.BalloonPosition < 0) ){
			this.tom.shoot(true);
		} else if(this.tom.projectile.BalloonPosition <= -60){
			this.tom.shoot(false);
		}
	}
	

	clickEvent(){
		$(".button").click(this.startGame);

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

var game = new Game(6000);

	export {Game};
	
