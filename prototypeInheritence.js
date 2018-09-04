function Dog() {}
Dog.prototype.bark = function() {
  console.log("woof!");
};
var fido = new Dog();
fido.bark();