// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Jerry } from "../src/js/jerry";
import { Tom } from "../src/js/Tom";
import { Balloon } from "../src/js/Balloon";
import { Game } from "../src/js/main";

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Something We Want To Test', function () {

  describe('Testing the Creation of Game', function () {

    it('should move to the right', function () {
      let jerry1 = new Jerry();
      let startPosition = jerry1.position;
      jerry1.move();
      let endPosition = jerry1.position;
      
      assert.equal(endPosition, startPosition + jerry1.velocity);
    });

    it('velocity should turn  negative', function () {
      let jerry1 = new Jerry();
      jerry1.position = jerry1.maxLimit;
      let startingvelocity = jerry1.velocity;
      jerry1.move();
      let changevelocity = jerry1.velocity;
      assert.equal(changevelocity, -5);

    });
    it('velocity should turn positive', function () {
      let jerry1 = new Jerry();
      jerry1.position = jerry1.minLimit;
      let startingvelocity = jerry1.velocity;
      jerry1.move();
      let changevelocity = jerry1.velocity;
      assert.equal(changevelocity, 5);

    });
    it('shots should increase and if was hit score should increase', function () {
      let tom1 = new Tom();
      let startScore = tom1.score;
      let startShots = tom1.shots;
      let startMisses = tom1.misses;
      tom1.shoot(true)
      let scoreChange = tom1.score;
      let shotsChange = tom1.shots;
      let missesChange = tom1.misses;
      assert.equal(scoreChange, startScore+1);
      assert.equal(shotsChange, startShots+1)
      assert.equal(missesChange, startMisses);

    });

    it('shots should increase and if was not a hit misses should increase', function () {
      let tom1 = new Tom();
      let startScore = tom1.score;
      let startShots = tom1.shots;
      let startMisses = tom1.misses;
      tom1.shoot(false)
      let scoreChange = tom1.score;
      let shotsChange = tom1.shots;
      let missesChange = tom1.misses;
      assert.equal(scoreChange, startScore);
      assert.equal(shotsChange, startShots+1)
      assert.equal(missesChange, startMisses+1);

    });
    it('waterBalloon should increase', function () {
      let Balloon1 = new Balloon();
      let startPosition = Balloon1.BalloonStart;
      Balloon1.changingBalloonPosition();
      let changeBalloonPosition = Balloon1.BalloonPosition;
      assert.equal(changeBalloonPosition, startPosition+Balloon1.BalloonVelocity);

    });
    it('waterBalloon should not go beyond end position', function () {
      let Balloon1 = new Balloon();
      Balloon1.BalloonPosition = Balloon1.BalloonEnd;
      Balloon1.changingBalloonPosition();
      let changeVelocity = Balloon1.BalloonVelocity;
      assert.equal(changeVelocity, 0);

    });
    it('the function should make a new balloon for the first time', function () {
    	let game = new Game();
    	game.startGame();
     	 assert.isDefined(game.tom.projectile);

    });



  });


});