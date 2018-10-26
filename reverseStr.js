function reverseStr(s) {
  let newStr = ''
  for (let i = s.length - 1; i >= 0; i--) {
    newStr += s[i]
  }
  return newStr
}

console.log(reverseStr("this is a string"))