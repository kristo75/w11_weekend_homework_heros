const Hero = function(name, favFood, health) {
  this.name = name;
  this.favFood = favFood;
  this.health = health;
  

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


module.exports = Hero;
