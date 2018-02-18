const assert = require('assert');
const Task = require('../task.js');

describe('Task', function(){
let task1;
let task2;

  beforeEach(function(){
    task1 = new Task("Beginner", "High", "Gold Coins", "Save Gotham City");
    task2 = new Task("Advanced", " Medium", "Platinum Bar", "Save Someone");
  })

it('should have a description', function(){
  assert.strictEqual(task1.description, "Save Gotham City");
})

it('should have difficulty level', function(){
  assert.strictEqual(task1.difficultyLevel, "Beginner");
})

it('should have urgency level', function(){
  assert.strictEqual(task1.urgencyLevel, "High");
})

it('should have reward', function(){
  assert.strictEqual(task1.reward, "Gold Coins");
})


it('should be completed task', function(){
  task1.completeTask()
  assert.strictEqual(task1.completed, true);
})


})
