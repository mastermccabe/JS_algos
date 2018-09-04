function jewelsAndStones(J, S) {
  let charSet = J.split('');
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (charSet.includes(S.charAt(i))) {
      count++;
    }
  }

  return count;
}

console.log(jewelsAndStones("aA", "aAAbbbb"));