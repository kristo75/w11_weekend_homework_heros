const Hero = function(name, favFood, health) {
  this.name = name;
  this.favFood = favFood;
  this.health = health;
  this.tasks = [];


}

Hero.prototype.canTalk = function () {
  return 'My name is ${this.name}, have you seen Robin?'
};

Hero.prototype.isFavFood = function (food) {
  return food.name === this.isFavFood ? true : false;
};

Hero.prototype.hasHealth = function (health) {
  return health.name === this.hashealth ? true : false;
}

Hero.prototype.eatFood = function (food){
if(food.name ===this.favFood){
  this.health += food.replenishmentValue * 1.5;
} else {
  this.health += food.replenishmentValue;
}

Hero.prototype.add = function(task) {
  this.tasks.push(task);
};
}


module.exports = Hero;
