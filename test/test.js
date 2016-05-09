(function () {
  'use strict';

  var chai = require('chai');
  var should = chai.should();

  describe('karma test with Chai', function() {

    it('should expose the Chai should property', function() {
      should.exist(123);
      (1).should.not.equal(2);
    });

  });

})();
