function main(n) {
  let bin = '',
    temp = 0,
    count = 0
  // const n = parseInt(readLine(), 10);
  bin = n.toString(2)
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] == '1') {
      temp++
      if (temp > count) {
        count = temp;
      }
    } else {
      temp = 0;
    }
  }
  console.log(count)
}


console.log(consecutiveOnes(6));
// 5 = 101