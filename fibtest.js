function fib(n) {
  // fib goes 0,1,1,2,3,5,8
  // fib 1 = 1, fib 2 = 1, fib 3 = 2
  var value = 0;
  if (n == 0 || n == 1 || n == 2) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

console.log(fib(30));