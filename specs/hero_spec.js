const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('Hero', function () {
let hero1;
let hero2;
let food1;
let food2;
let task;


beforeEach(function () {
  hero1 = new Hero('Batman', 'Banana', 10);
  hero2 = new Hero('Robin', 'Apple', 10);
  food1 = new Food('Banana', 10);
  food2 = new Food('Apple', 10);
});

  it('should have a name', function(){
    assert.strictEqual(hero1.name, 'Batman');
  });


  it('should have favourite food', function () {
    assert.strictEqual(hero1.favFood, 'Banana');
  });

  it('should have health', function(){
    assert.strictEqual(hero2.health, 10)
  });

  it('should have an empty list of tasks to begin', function () {
    assert.deepStrictEqual(hero1.tasks, []);
  });

  it('should be able to eat food and replenish health value', function () {
    hero1.eatFood(food1);
    assert.strictEqual(hero1.health, 25);
  });

  it('Hero has tasks to complete', function(){
    hero1.add(task);
    assert.strictEqual(hero1.tasks.length, 1);
  })




})
