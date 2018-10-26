function weave(sourceOne, sourceTwo) {
  var arr = []
  for (let i = 0; i < sourceOne.length; i++) {
    arr.push(sourceOne[i], sourceTwo[i])
    // arr.unshift("i")

    // console.log(sourceOne[i], sourceTwo[i])
  }
  return arr
}

console.log(weave([1, 2, 3], ['a', 'b', 'c']))