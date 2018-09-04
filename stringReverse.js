function stringReverse(s) {
  reverse = s.split("").reverse().join("")
  return (s === reverse)
}

console.log(stringReverse("holloh"));