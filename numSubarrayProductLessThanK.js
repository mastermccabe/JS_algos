// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

var numSubarrayProductLessThanK = function(nums, k) {
  var count = 0;
  var sum = 0;
  var start = 0;
  var temp = 0;
  var tempArr = nums.sort(function(a, b) {
    return (b - a)
  })

  console.log("temp arr:", tempArr);

  for (let i = 0; i < tempArr.length; i++) {
    console.log(i, "length:", tempArr.length);
    if (tempArr[i] < k) {
      start = i;
      console.log(tempArr[i], '<', k, "start:", i);

      count += (tempArr.length - i)
      temp = count;
      break;
    }
  }
  //helper function



  console.log(count);
  return count
};

numSubarrayProductLessThanK([2, 5, 3, 6, 101, 80], 100);