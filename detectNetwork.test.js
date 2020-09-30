describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901231') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert; //


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  it('it has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('it has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('it has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16',function(){
    detectNetwork('6011601160116611').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19',function(){
    detectNetwork('6011601160116611123').should.equal('Discover');

  });

  it('has a prefix of 644 and a length of 16',function(){
      detectNetwork('6440123412341234').should.equal('Discover');
    });

  it('has a prefix of 644 and a length of 19',function(){
      detectNetwork('6440123412341234123').should.equal('Discover');
    });

  it('has a prefix of 645 and a length of 16',function(){
      detectNetwork('6450123412341234').should.equal('Discover');
    });

  it('has a prefix of 645 and a length of 19',function(){
      detectNetwork('6450123412341234123').should.equal('Discover');
    });

  it('has a prefix of 646 and a length of 16',function(){
      detectNetwork('6460123412341234').should.equal('Discover');
    });
  it('has a prefix of 646 and a length of 19',function(){
      detectNetwork('6460123412341234123').should.equal('Discover');
    });
  it('has a prefix of 647 and a length of 16',function(){
      detectNetwork('6470123412341234').should.equal('Discover');
    });
  it('has a prefix of 647 and a length of 19',function(){
        detectNetwork('6470123412341234123').should.equal('Discover');
    });
  it('has a prefix of 648 and a length of 16',function(){
        detectNetwork('6480123412341234').should.equal('Discover');
    });
  it('has a prefix of 648 and a length of 19',function(){
        detectNetwork('6480123412341234123').should.equal('Discover');
    });
  it('has a prefix of 649 and a length of 16',function(){
        detectNetwork('6490123412341234').should.equal('Discover');
    });
  it('has a prefix of 649 and a length of 19',function(){
        detectNetwork('6490123412341234123').should.equal('Discover');
    });
  it('has a prefix of 65 and a length of 16',function(){
        detectNetwork('6500123412341234').should.equal('Discover');
    });
  it('has a prefix of 65 and a length of 19',function(){
        detectNetwork('6520123412341234123').should.equal('Discover');
    });

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();

  for(var length = 12; length <= 19; length++){
    (function(length){

      var extra = '392157482174438';
      it('it has a prefix of 5018 and a length of ' + length,function(){
        detectNetwork('5018' + (extra.substring(0,length - 4))).should.equal('Maestro');
      });

      it('it has a prefix of 5020 and a length of ' + length,function(){
        detectNetwork('5020' + (extra.substring(0,length - 4))).should.equal('Maestro');
      });

      it('it has a prefix of 5038 and a length of ' + length,function(){
        detectNetwork('5038' + (extra.substring(0,length - 4))).should.equal('Maestro');
      });

      it('it has a prefix of 6304 and a length of ' + length,function(){
        detectNetwork('6304' + (extra.substring(0,length - 4))).should.equal('Maestro');
      });



    })(length)
  };
});

describe('Switch',function(){
  var should = chai.should();
  var switchPrefixes = ['4903','4905','4911','4936','564182','633110','6333','6759'];


  for(var i = 0; i < switchPrefixes.length;i++){
    (function(i){
      var extra = '4567812312341235';
      var prefixLength = switchPrefixes[i].length;

      it('it has a prefix of ' + switchPrefixes[i] + ' and a length of 16',function(){
        detectNetwork(switchPrefixes[i] + extra.substring(0,16 - prefixLength)).should.equal('Switch');
      });

      it('it has a prefix of ' + switchPrefixes[i] + ' and a length of 18',function(){
        detectNetwork(switchPrefixes[i] + extra.substring(0,18 - prefixLength)).should.equal('Switch');
      });

      it('it has a prefix of ' + switchPrefixes[i] + ' and a length of 19',function(){
        detectNetwork(switchPrefixes[i] + extra.substring(0,19 - prefixLength)).should.equal('Switch');
      });



    })(i)
  };

});

describe('China UnionPay',function(){
  var should = chai.should();

  var extra = '4567812312341235';

  for(var chinaPrefix = 622126; chinaPrefix <= 622925;chinaPrefix++){
    (function(chinaPrefix){
      var prefixLength       = JSON.stringify(chinaPrefix).length;
      var prefixLengthString = JSON.stringify(prefixLength);
      var prefixString       = JSON.stringify(chinaPrefix);

      it('has a prefix of ' + prefixString + ' and a length of 16' ,function(){
        detectNetwork(prefixString + extra.substring(0,16-prefixLength)).should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefixString + ' and a length of 17' ,function(){
        detectNetwork(prefixString + extra.substring(0,17-prefixLength)).should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefixString + ' and a length of 18' ,function(){
        detectNetwork(prefixString + extra.substring(0,18-prefixLength)).should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefixString + ' and a length of 19' ,function(){
        detectNetwork(prefixString + extra.substring(0,19-prefixLength)).should.equal('China UnionPay');
      });

    })(chinaPrefix)

  };




  for(var prefix2 = 6282; prefix2 <= 6288;prefix2++){
    (function(prefix2){
      var prefixLength      = JSON.stringify(prefix2).length;
      var prefixString      = JSON.stringify(prefix2);

      it('has a prefix of ' + prefixString + ' and a length of 16',function(){
        detectNetwork(prefixString + extra.substring(0,16 - prefixLength)).should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefixString + ' and a length of 17',function(){
        detectNetwork(prefixString + extra.substring(0,17 - prefixLength)).should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefixString + ' and a length of 18',function(){
        detectNetwork(prefixString + extra.substring(0,18 - prefixLength)).should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefixString + ' and a length of 19',function(){
        detectNetwork(prefixString + extra.substring(0,19 - prefixLength)).should.equal('China UnionPay');
      });



    })(prefix2)



  };

  for(var prefix3 = 624; prefix3 <= 626;prefix3++){
    (function(prefix3){
      var prefixLength      = JSON.stringify(prefix3).length;
      var prefixString      = JSON.stringify(prefix3);

      it('has a prefix of ' + prefixString + ' and a length of 16',function(){
        detectNetwork(prefixString + extra.substring(0,16 - prefixLength)).should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefixString + ' and a length of 17',function(){
        detectNetwork(prefixString + extra.substring(0,17 - prefixLength)).should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefixString + ' and a length of 18',function(){
        detectNetwork(prefixString + extra.substring(0,18 - prefixLength)).should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefixString + ' and a length of 19',function(){
        detectNetwork(prefixString + extra.substring(0,19 - prefixLength)).should.equal('China UnionPay');
      });



    })(prefix3)



  };


//I am Done !!!!

});
