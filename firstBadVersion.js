// You are a product manager and currently leading a team to develop a new product.
//Unfortunately, the latest version of your product fails the quality check.
//Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Given n = 5, and version = 4 is the first bad version.
//
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
//
// Then 4 is the first bad version

var solution = function(isBadVersion) {

  return function(n) {
    if (n === 1) return 1;
    let left = 1;
    right = n;
    while (left <= right) {
      if (left === right) return left;
      let mid = left + Math.floor((right - left) / 2);
      if (!isBadVersion(mid)) {
        if (isBadVersion(mid + 1)) return mid + 1;
        else left = mid + 1;
      } else {
        if (mid === left) return mid;
        else right = mid;
      }
    }

  };
};

console.log(solution(4));

// 
// Time complexity : O(\log n)O(logn). The search space is halved each time, so the time complexity is O(\log n)O(logn).
//
// Space complexity : O(1)O(1).