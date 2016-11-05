// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Jerry } from "../src/js/jerry";
import { Tom } from "../src/js/Tom";

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
      tom1.startScore = tom1.score;
      tom1.startShots = tom1.shots;
      tom1.startMisses = tom1.misses;
      tom1.shoot(true)
      let scoreChange = tom1.score;
      let shotsChange = tom1.shots;
      let missesChange = tom1.misses;
      assert.equal(scoreChange, 1);
      assert.equal(shotsChange, 1)
      assert.equal(missesChange, 0);

    });

    it('shots should increase and if was not a hit misses should increase', function () {
      let tom1 = new Tom();
      tom1.startScore = tom1.score;
      tom1.startShots = tom1.shots;
      tom1.startMisses = tom1.misses;
      tom1.shoot(false)
      let scoreChange = tom1.score;
      let shotsChange = tom1.shots;
      let missesChange = tom1.misses;
      assert.equal(scoreChange, 0);
      assert.equal(shotsChange, 1)
      assert.equal(missesChange, 1);

    });


  });


});