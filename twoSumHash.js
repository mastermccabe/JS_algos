function twoSumHash(nums, target) {
  var arr = [];
  var exist = {};
  for (var i = 0; i < nums.length; i++) {

    if (typeof(exist[target - nums[i]]) !== 'undefined') {
      arr.push(exist[target - nums[i]]);
      console.log("here", exist);
      arr.push(i) //just pushing val of i to this array
      console.log("arr", arr);
    }
    exist[nums[i]] = i
    console.log("exists", exist);
  }
  return arr
}
//keeps value of initial array and location
console.log(twoSumHash([10, 2, 1, 5, 8], 13));