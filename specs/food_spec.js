const assert = require('assert');
const Food = require('../food');
const Hero = require('../hero');


describe('Food', function(){
  let food1;
  let food2;
  let hero1;
  let hero2;

  beforeEach(function(){
    food1 = new Food('Banana', 10);
    food2 = new Food('Apple', 10);
    hero1 = new Hero('Batman', 'Banana', 10);
    hero2 = new Hero('Robin', 'Apple', 10);
  })

  it('should have name', function(){
    assert.strictEqual(food1.name, "Banana")
  })

  it('should have replenishment value', function(){
    assert.strictEqual(food2.replenishmentValue, 10);
  })
})
