// // Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 2
//   Output: 4 // x (or 2) occurs 4 times in arr[]
//
//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 3
//   Output: 1
//
//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 1
//   Output: 2
//
//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 4
//   Output: -1 // 4 doesn't occur in arr[]


function countOccurences(arr, x) {
  let count = 0,
    temp = 1;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]
    let val = x
    while (val == arr[i + 1]) {
      temp++
      i++
      console.log("temp:", temp, "i", i);
      if (temp > count) {
        count = temp;
      }
    }
    temp = 1;

  }
  return count;
}

console.log(countOccurences([0, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4], 2));