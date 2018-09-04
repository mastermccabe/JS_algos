function two_sum_sort(arr, k) {
  arr.sort(function(a, b) {
    return a - b;
  })
  var l = 0;
  var r = arr.length - 1;
  while (l < r) {
    if (arr[l] + arr[r] == k) {
      console.log(arr[l], arr[r], '==', k);
      return [arr[l], arr[r]];
    } else if (arr[l] + arr[r] < l) {
      console.log("else if");
      l++;
    } else
      console.log("else");
    r--;
  }
  return false;
}
two_sum_sort([1, 4, 45, 6, 10, -8], 2);