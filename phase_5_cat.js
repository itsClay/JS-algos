const Cat = function Cat (name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
};

const cat1 = new Cat("bigglesworth", "Jose");
console.log(cat1.cuteStatement());

Cat.prototype.cuteStatement = function() {
  return `Everyone loves ${this.name}`;
};



const cat2 = new Cat("bigglesworth", "Jose");
console.log(cat2.cuteStatement());
console.log(cat1.cuteStatement());


Cat.prototype.meow = function() {
  return `Meowwwwww`;
};

console.log(cat2.meow());
cat1.meow = function () {return "RUFF"};
console.log(cat1.meow());
console.log(cat2.meow());
