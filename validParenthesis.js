// given a string of just characters. determine if input string is valid

function validParen(s) {

  if (s.length % 2) return false;
  paren = s.split("");
  tempArr = []
  for (i = 0; i < paren.length; i++) {
    console.log(paren[i]);
    if (paren[i] === '{') tempArr.push('{')
    if (paren[i] === '(') {

      tempArr.push('(')
      console.log(tempArr);
    }
    if (paren[i] === '[') tempArr.push('[')

    if (paren[i] === '}') {
      if (tempArr[tempArr.length - 1] == '{') tempArr.pop()
      else return false
    }
    if (paren[i] === ')') {
      console.log("HERE", tempArr);
      if (tempArr[tempArr.length - 1] == '(') tempArr.pop()
      else return false
    }

    if (paren[i] == ']') {
      if (tempArr[tempArr.length - 1] == '[') tempArr.pop()
    } else return false
  }

  if (tempArr.length === 0) return true
  else return false
}

console.log(validParen('()()'));