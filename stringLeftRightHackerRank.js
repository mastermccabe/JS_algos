function processData(input) {

  let s = input.split('\n')
  for (let i = 1; i < s.length; i++) {
    let left = ''
    let right = ''
    let temp = s[i].split('')
    for (let j = 0; j < temp.length; j++) {
      if (j % 2) {
        right += temp[j]
      } else left += temp[j]
    }
    console.log(left, right)
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});

//input
// 2
// Hacker
// Rank

// Output
// Hce akr
// Rn ak