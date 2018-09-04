// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

var merge = function(intervals) {
  if (intervals.length === 0) {
    return []
  }
  if (intervals.length === 1) {
    return [intervals[0][0], intervals[0][1]]
  }
  //sort starting
  intervals.sort(function(a, b) {
    return a[0] - b[0]
  })


  console.log(intervals);
  var results = []
  var top = null;

  // push the 1st interval into the stack
  results.push(intervals[0]);
  for (var i = 0; i < intervals.length; i++) {
    top = results[results.length - 1];
    console.log("top = ", top);
    // if the current interval doesn't overlap with the
    // stack top element, push it to the stack
    if (top[1] < intervals[i][0]) {
      results.push(intervals[i])


      // otherwise update the end value of the top element
      // if end of current interval is higher
    } else if (top[1] < intervals[i][1]) {

      top[1] = intervals[i][1];
      results.pop();
      results.push(top);
    }
  }
  console.log(results);
  return results
};
//[ [ 1, 3 ], [ 15, 18 ] ]
//[[1,6],[8,10],[15,18]]
merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
])