// // Input: [[1,3],[2,6],[8,10],[15,18]]
// intervals[start][end]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

function merge(intervals) {
  let newArr = []
  if (intervals.length === 0) return intervals
  if (intervals.length === 1) return intervals

  intervals.sort((a, b) => {
    return a[0] - b[0];
  })

  newArr.push(intervals[0])

  for (let i = 1; i < intervals.length; i++) {
    if (newArr[newArr.length - 1][1] >= intervals[i][0]) {
      newArr[newArr.length - 1][1] = Math.max(newArr[i - 1][1], intervals[i][1])

    } else {
      newArr.push(intervals[i])
    }

  }

  return newArr;
};


console.log(merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]))