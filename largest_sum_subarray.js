// Given an integer array nums, find the contiguous subarray
// (containing at least one number) which has the largest
// sum and return its sum.

var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    console.log("max of:", nums[i], "or", nums[i], "+", nums[i - 1]);

    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    console.log(...nums);
    console.log("max", nums[i])

  }
  // console.log(Math.max(...nums));
  return Math.max(...nums); //spread operator
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

// max of: 1 or 1 + -2
// max 1
// max of: -3 or -3 + 1
// max -2
// max of: 4 or 4 + -2
// max 4
// max of: -1 or -1 + 4
// max 3
// max of: 2 or 2 + 3
// max 5
// max of: 1 or 1 + 5
// max 6
// max of: -5 or -5 + 6
// max 1
// max of: 4 or 4 + 1
// max 5
// 6