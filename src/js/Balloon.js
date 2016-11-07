
import $ from 'jquery';

class Balloon {
	constructor(){
		this.BalloonStart = 525;
		this.BalloonEnd = -60 ;
		this.BalloonPosition = this.BalloonStart;
		this.BalloonVelocity = -5;
	}

	changingBalloonPosition(){
		this.BalloonPosition = this.BalloonPosition + this.BalloonVelocity;
		if(this.BalloonPosition <= this.BalloonEnd){
			this.BalloonVelocity = 0;
		}
		$("#balloon").css({top:this.BalloonPosition});
	}

	isMoving() {
		if(this.BalloonVelocity != 0) {
			return true;
		} else {
			return false;
		}
	}
}

export {Balloon};