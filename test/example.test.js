// test/example.test.js

const { expect } = require('chai');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });

    it('should return the index when the value is present', function() {
      expect([1, 2, 3].indexOf(2)).to.equal(1);
    });
  });

  describe('#push()', function() {
    it('should add a value at the end of the array', function() {
      let arr = [1, 2, 3];
      arr.push(4);
      expect(arr).to.have.lengthOf(4);
      expect(arr[3]).to.equal(4);
    });
  });

  describe('#pop()', function() {
    it('should remove the last value from the array', function() {
      let arr = [1, 2, 3];
      let value = arr.pop();
      expect(arr).to.have.lengthOf(2);
      expect(value).to.equal(3);
    });
  });
});

describe('String', function() {
  describe('#charAt()', function() {
    it('should return the character at the specified index', function() {
      expect('hello'.charAt(0)).to.equal('h');
    });

    it('should return an empty string for an out-of-bounds index', function() {
      expect('hello'.charAt(10)).to.equal('');
    });
  });

  describe('#concat()', function() {
    it('should concatenate two strings', function() {
      let str = 'Hello, ';
      expect(str.concat('world!')).to.equal('Hello, world!');
    });
  });
});

describe('Asynchronous Code', function() {
  it('should return true after 1 second', function(done) {
    setTimeout(function() {
      expect(true).to.be.true;
      done();
    }, 1000);
  });

  it('should return an error after 1 second', function(done) {
    setTimeout(function() {
      try {
        expect(false).to.be.true;
        done(new Error('Expected false to be true'));
      } catch (err) {
        done();
      }
    }, 1000);
  });
});
