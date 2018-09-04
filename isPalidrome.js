var isPalidrome = function(s) {
  s = s.replace(/\s+/g, ''); //remove spaces
  var r = s.split('').reverse().join('');
  console.log(s, '===', r);
  console.log((s === r));
  return (s === r)
}

isPalidrome("race car")