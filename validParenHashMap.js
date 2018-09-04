function validParen(s) {
  map = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  temp_stack = []
  if (s.length % 2) return false

  for (let i = 0; i < s.length; i++) {

    if (map.hasOwnProperty(s[i])) {
      temp_stack.push(s[i])
    } else {
      if (s[i] === map[temp_stack[temp_stack.length - 1]]) {
        temp_stack.pop()
        // temp_stack.splice(temp_stack.length - 1, 1)
      } else {
        return false
      }
    }
  }
  if (temp_stack.length === 0) {
    return true;
  } else {
    return false;
  }

}

console.log(validParen('{}[]([{}])'));

//time complexity is O(n) since using map and lookup is O(n)