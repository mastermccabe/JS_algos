function timeConversion(s) {
  // 07:05:45PM
  let time = ''
  // let temp = s.split('')
  let zone = s[s.length - 2]
  time = parseInt((s[0] + s[1]))
  let overflow = '00'
  if (zone === 'P') {
    if (time === 12) {
      time = 12

    } else time += 12
  } else { //'A'
    if (time === 12) {
      time = overflow
    } else time = (s[0] + s[1])
  }

  for (let i = 2; i < s.length - 2; i++) {
    time += s[i]
  }
  return time
}


console.log(timeConversion("12:40:22AM"));
console.log(timeConversion("12:40:03PM"));
console.log(timeConversion("06:40:03AM"));