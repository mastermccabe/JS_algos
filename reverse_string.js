var reverseString = function(s) {
  var newS = s.split('').reverse().join('');
  var ordS = s.split('').sort().join('');
  console.log(newS);
  console.log(ordS);
};

reverseString("abcdsdf")