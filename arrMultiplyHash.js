function twoMultiply(arr, k) { //k is the multiplier
  let hash = {}
  let validArr = []

  for (let i = 0; i < arr.length; i++) {

    // console.log((k / arr[i]), typeof(hash[k / arr[i]]))
    if (typeof(hash[k / arr[i]]) == 'number') { //or '!== undefined'
      validArr.push(hash[k / arr[i]])
      validArr.push(i)
    }
    hash[arr[i]] = i

  }

  return (validArr.length > 0) ? validArr : false
}

console.log(twoMultiply([2, 5, 10, 25], 50))