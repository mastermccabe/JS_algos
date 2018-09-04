// Count the number of prime numbers less than a non-negative number, n.
// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

//a prime number is a number only divisible by itself.


var countPrimes = function(n) {
  let flagArray = [],
    result = 0;
  for (let i = 2; i <= n; i++) {
    if (flagArray[i] === undefined) { //key part
      // is Primes
      flagArray[i] = 1;
      console.log("i = ", i);
      result++;
      // rm it's multiples
      let j = 2;
      // 2 * 2 < 6

      while (i * j < n) { //essentially looks ahead and fills up all 'undefined' non primes with 0 so result++ only gets triggered in line
        console.log(i, '*', j, '<', n);
        flagArray[i * j] = 0;
        j++;
      }
    }
  }

  return result;
};

console.log(' ** ** ** ** ** ** * \n', countPrimes(11));