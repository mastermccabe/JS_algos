var fizzBuzz = function(n) {
  var result = []
  for (var i = 1; i < n + 1; i++) {
    if (!(i % 15)) { //no remainder
      result.push('FizzBuzz')
    } else if (!(i % 3)) {
      result.push('Fizz')
    } else if (!(i % 5)) {
      result.push('Buzz')
    } else {
      result.push(i.toString())
    }
  }
  return result
};

console.log(fizzBuzz(33));