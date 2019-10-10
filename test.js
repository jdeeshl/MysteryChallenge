require('chai').should();

const mysteryFunc = require('./index.js');

// count digits, and then for each digit, add "the amount of the digit 
// in a row (and the) digit"
// 15 = 1*1 1*5(1115)

describe('takes an integer n and turns it into the ouput', function () {
  it('No further instructions', function () {
    mysteryFunc(15).should.eql('1115')
    mysteryFunc(15212).should.eql('1115121112')
    mysteryFunc(111111422).should.eql('611422')
    mysteryFunc(1).should.eql('11')
    mysteryFunc(513515).should.eql('151113151115')
    mysteryFunc(666).should.eql('36')
    mysteryFunc(69).should.eql('1619')
  });
});

