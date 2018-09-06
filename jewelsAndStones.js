var numJewelsInStones = function(J, S) {
  let count = 0;
  let temp = J.split('')
  console.log(temp);
  for (let i = 0; i < S.length; i++) {
    if (temp.includes(S.charAt(i))) {
      count++;
    }
  }
  return count;
};

// var numJewelsInStones = function(J, S) {
//   if (!J || !S) return 0;
//
//   let count = 0;
//   for (const c of S) {
//     if (J.includes(c)) count++;
//   }
//
//   return count;
// };
console.log(numJewelsInStones("aAAbbbb", "aA"));