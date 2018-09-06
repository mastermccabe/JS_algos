var isPalidrome = function(s) {
  s = s.replace(/\s+/g, ''); //remove spaces
  var r = s.split('').reverse().join('');
  console.log(s, '===', r);
  console.log((s === r));
  return (s === r)
}

isPalidrome("race car")


function isPalindrome2(s) {
  if (!s) return s;
  if (s.length == 0) return false;
  let i = s.length - 1;
  let j = 0;
  while (j > i) {
    if (s.charAt(i) !== s.charAt(j)) return false;
    i--;
    j++;
  }
  return true
}

console.log(isPalindrome2("123X321"));