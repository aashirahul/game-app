

class Balloon {
	constructor(){
		this.BalloonStart = 0;
		this.BalloonEnd = 800 ;
		this.BalloonPosition = this.BalloonStart;
		this.BalloonVelocity = 5;
		}

		changingBalloonPosition(){
		this.BalloonPosition = this.BalloonPosition + this.BalloonVelocity;
		if(this.BalloonPosition >= this.BalloonEnd){
			this.BalloonVelocity = 0;
		}
	}
}

export {Balloon};