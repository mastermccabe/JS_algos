function two_sum(arr, k) {
  //sort Array
  // arr.sort(function(a, b) {
  //   return a - b
  // });
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == k) {
        console.log(i, j);
        return [i, j];

      }
    }
  }
  return false
}
two_sum([10, 2, 1], 3);