const Hero = function(name) {
  this.name = name;

}

Hero.prototype.canTalk = function () {
  return 'My name is ${this.name}, have you seen Robin?'
};


module.exports = Hero;
