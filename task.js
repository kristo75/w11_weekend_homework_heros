const Task = function(difficultyLevel, urgencyLevel, reward, description){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.description = description;
  
}

Task.prototype.completeTask = function(){
  this.completed = true;
}




module.exports = Task;
