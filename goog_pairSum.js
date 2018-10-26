// collection of numbers.
// take collection and find matching pair and find Sum
//
//
//   [1, 2, 3, 4, 5] 8
//sorted, so left 2 is smallest, largest is right two
//n log n if sorted

function findMatching(nums, k) {
  let exist = {}
  let arr = [] //array containing valid arr locations.

  for (let i = 0; i < nums.length; i++) {
    //              12 - 2 = 10
    // console.log(exist, exist[k - nums[i]])
    if (typeof(exist[k - nums[i]]) !== 'undefined') {
      // console.log(k, nums[i]);
      arr.push(exist[k - nums[i]])
      //could return true here if only needing 1.
      arr.push(i)
    }

    exist[nums[i]] = i //key value pair
  }
  return (arr.length > 0) ? arr : false
}

console.log(findMatching([2, 3, 9, 7, 10], 17))