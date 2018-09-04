// Given a list of non negative integers, arrange them such that they form the largest number.
// Input: [10,2]
// Output: "210"
// Input: [3,30,34,5,9]
// Output: "9534330"

var largestNumber = function(nums) {
  var sorted = nums.sort(function(a, b) {

    var ab = a.toString() + b.toString();
    var ba = b.toString() + a.toString();
    console.log("ba:", ba, "ab:", ab);
    return ba - ab; //z to a
  });
  console.log("sorted:", sorted);

  var joined = sorted.join('');
  if (parseInt(joined) === 0) {
    return '0';
  } else {
    console.log("highest number:", joined);
    return joined;
  }
};

largestNumber([3, 30, 34, 5, 9, 8])
//highest number: 98534330