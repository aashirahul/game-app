

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
		if(this.tom.projectile =! undefined){
			this.tom.Balloon.BalloonPosition();

		}
	}

	clickEvent(){
		$(".button").click(startGame);

	}
	startGame(){
		this.tom.startProjectile();
	}

	/*gameOver(){
		if(this.checkIfGameOver){
			this.getConfirmation();
		}

	getConfirmation(){
		confirm("game over");

	}

	}

	checkIfGameOver(){
		if(this.tom.hasMissesReached()){
			return true;
		} else {
			return false;
		}

	}*/

	

	}
	
