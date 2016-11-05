

class Game{
	constructor(runTime){
		this.tom = new Tom;
		this.jerry = new Jerry;
		this.runTime = runTime;
	}
	function setupGame{
		 this.runtimeEvent();
		 this.clickEvent();
		}
	function runtimeEvent(runTime){
		var interval=setInterval(processRunTimeEvents,100);
	}
	processRunTimeEvents(){
		this.reduceRunTime = this.runTime-100;
		this.jerry.move();
	}




	//playGame(){
		//.click(takingShots)



	//}
	gameOver(){
		if(this.tom.misses=5){
			return true;
		}

	}

	checkIfGameOver(){
		if(this.misses>5){
	 		return true;
		}

	}
	display(){

	}
}