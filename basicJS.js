var foo = 10 + '20';
// console.log(foo) // 1020
// console.log(typeof foo); //string

console.log(0.1 + 0.2 == 0.3); // false
// .3== .3000000000004

console.log("i'm a lasagna hog".split("").reverse().join(""));
// goh angasal a m'i

console.log("i'm a lasagna hog".split(" ").reverse().join(" "));
// hog lasagna a i'm

// --****************----********************----
var foo = "Hello";
(function() {
  var bar = " World";
  // console.log(foo + bar);
})();
// console.log(foo + bar);
// in a program it says ReferenceError: bar is not defined
// on a window (chrome) says Hello World and then Hello[object Object]

// --****************----********************----
var foo = [];
foo.push(1);
foo.push(2);
// console.log(foo.length); //2


// --****************----********************----
var foo = {
  n: 1
};
var bar = foo;
foo.x = foo = {
  n: 2
};
// console.log(foo.x); // undefined


// --****************----********************----
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');
// one, four, three, two


// --****************----********************----
// doSomething().then(function() {
//   return doSomethingElse();
// }).then(finalHandler);
// doSomething
// |-----------------|
//                   doSomethingElse(undefined)
//                   |------------------|
//                                      finalHandler(resultOfDoSomethingElse)
//                                      |------------------|
// --****************----********************----
// doSomething().then(function () {
//   doSomethingElse();
// }).then(finalHandler);
//
// doSomething
// |-----------------|
//                   doSomethingElse(undefined)
//                   |------------------|
//                   finalHandler(undefined)
//                   |------------------|
// --****************----********************----


//Prototypal Inheritance in JavaScript
function Dog() {}
Dog.prototype.bark = function() {
  console.log("woof!");
};
var fido = new Dog();
fido.bark(); //woof!
// console.log("does fido have bark?", fido.hasOwnProperty('bark')); // false
// Althought he doesnt have property bark, since prototype chain, his parents have bark property


function Car() {}
Car.prototype.drive = function() {
  console.log("driving");
}
var bmw = new Car();
bmw.drive();


function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
var rect = new Rectangle(3, 4);

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

console.log("area is:", rect.area());