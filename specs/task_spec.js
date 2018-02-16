const assert = require('assert');
const Task = require('../task.js');

describe('Task', function(){


  beforeEach(function(){
    task = new Task("Beginner", "High", "Gold Coins", "Save Gotham City");
  })

it('should have a description', function(){
  assert.strictEqual(task.description, "Save Gotham City");
})

it('should have difficulty level', function(){
  assert.strictEqual(task.difficultyLevel, "Beginner");
})

it('should have urgency level', function(){
  assert.strictEqual(task.urgencyLevel, "High");
})

it('should have reward', function(){
  assert.strictEqual(task.reward, "Gold Coins");
})


it('should be completed task', function(){
  task.completeTask()
  assert.strictEqual(task.completed, true);
})

})
