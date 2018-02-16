const assert = require('assert');
const Hero = require('../hero.js');

describe('Hero', function () {
  


beforeEach(function () {
  hero1 = new Hero('Batman', 'Banana', 50);
  hero2 = new Hero('Robin', 'Apple', 20);
})

  it('should have a name', function(){
    assert.strictEqual(hero1.name, 'Batman');
  })


  it('should have favourite food', function () {
    assert.strictEqual(hero1.favFood, 'Banana');
  })

  it('should have health', function(){
    assert.strictEqual(hero2.health, 20)
  })
})
