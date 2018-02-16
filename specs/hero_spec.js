const assert = require('assert');
const Hero = require('../hero.js');

describe('Hero', function () {
hero = new Hero('Batman')


  it('should have a name', function(){
    assert.strictEqual(hero.name, "Batman");
  })
})
