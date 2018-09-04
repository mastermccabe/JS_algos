function fib(n) {
  if (typeof n != 'number' || n < 0) {
    return false
  }
  if (n == 0 || n == 1 || n == 2) {
    return 1
  } else
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(5));
// -------------------------------------------------
var cache = {};

function fibonacci(number) {

  if (number < 1)
    return 0;

  if (number <= 2)
    return 1;

  if (number in cache)
    return cache[number];

  var value = fibonacci(number - 1) + fibonacci(number - 2);
  cache[number] = value;
  return value;
}
console.log(fibonacci(30));