// Complete the oddNumbers function below.
function oddNumbers(l, r) {
  let arr = []
  for (let i = l; i <= r; i++) {
    if (i % 2 === 1)
      arr.push(i)
    console.log(i)
  }

  return arr
}

// input
// 3
// 9
//
// Output
// 3
// 5
// 7
// 9