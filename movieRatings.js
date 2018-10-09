//collective sum of ratings is max
//must go through order and cannot skip more than one movie in a row.
//example ratings = [-3,2,4,-1,-2,-5]
//max choices are 2,4,-2 for sum of 4
//[5,-1,-2,-3,-4] --> 5-2-3
//skip state and normal look ahead state


function movieRatings(input) {
  let rank = 0
  let skip = true
  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] < input[i] && (skip)) {
      rank += input[1]
      console.log(rank, 'skip=', skip)
      skip = false
      i++

    } else {

      rank += input[i - 1]
      console.log('here', input[i - 1], 'sp', skip)
      skip = true
    }
  }


  return rank
}
console.log(movieRatings([5, -3, 2, 4, -1, -2, -5]))