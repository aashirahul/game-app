class Jerry {
	constructor(){
		this.minLimit=0;
		this.maxLimit=800;
		this.velocity=5;
		this.position=this.minLimit;
	}
	

	move(){
		this.position=this.position+this.velocity;

		if(this.position >= this.maxLimit){
			this.velocity = -5;
		}

		if(this.position <= this.minLimit){
			this.velocity = 5;
		}
	}		
}

export { Jerry };