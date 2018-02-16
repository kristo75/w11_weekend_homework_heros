const assert = require('assert');
const Food = require('../food');
const Hero = require('../hero');

describe('Food', function(){


  beforeEach(function(){
    food1 = new Food('Banana', 10);
    food2 = new Food('Apple', 20);
  })

  it('should have name', function(){
    assert.strictEqual(food1.name, "Banana")
  })

  it('should have replenishment value', function(){
    assert.strictEqual(food2.replenishmentValue, 20)
  })
})
