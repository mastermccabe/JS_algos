var maximumGap = function(nums) {
  var diff = 0;

  // nums.sort(function(a, b) {
  //   return a - b
  // });

  nums.sort = (a, b) => a - b

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > diff) {
      diff = nums[i] - nums[i - 1];
    }

  }
  console.log(diff);
  return diff

};

maximumGap([1, 3, 100, 50])