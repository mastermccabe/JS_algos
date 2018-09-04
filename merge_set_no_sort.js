var merge = function(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }

  let i = 0;
  let j = 1;
  while (i < intervals.length - 1) {
    if (overlap(intervals[i], intervals[j])) {
      intervals.splice(i, 1, mergeIntervals(intervals[i], intervals[j]));
      intervals.splice(j, 1);
      j = i + 1;
    } else if (j < intervals.length - 1) {
      j++;
    } else {
      i++;
      j = i + 1;
    }
  }

  return intervals;
};

const mergeIntervals = (int1, int2) => {
  return new Interval(Math.min(int1.start, int2.start), Math.max(int1.end, int2.end));
};


const overlap = (int1, int2) => {
  return int1.start <= int2.start && int1.end >= int2.start ||
    int1.end >= int2.end && int1.start <= int2.end ||
    int2.start <= int1.start && int2.end >= int1.start ||
    int2.end >= int1.end && int2.start <= int1.end
};
console.log(merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]));