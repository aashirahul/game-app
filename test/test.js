// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Jerry } from "../src/js/jerry";

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

    it('should not go above max-limit', function () {
      let jerry1 = new Jerry();
      let startPosition = jerry1.position;
      jerry1.move();
      let endPosition = jerry1.position;
      
      assert.equal(endPosition, maxLimit);
    });

  });


});