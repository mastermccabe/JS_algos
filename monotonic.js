// Welcome to Facebook!

// This is just a simple shared plaintext pad, with no execution capabilities.

// When you know what language you'd like to use for your interview,
// simply choose it from the dropdown in the top bar.

// Enjoy your interview!

// Given an array of integers, return boolean true/false whether the array is monotonic (only increases/decreases).

// True: [1, 2, 3, 4, 5, 6]
// True:  [1, 2, 5, 5, 8]
// True:  [9, 4, 4, 2, 2]
// False: [1, 4, 6, 3] !== new_arr
//new_arr [1, 3, 4, 6]

function monotonic(arr) {
  var result;
  var temp = '';
  if (arr.length <= 1) {
    return true
  }

  for (var i = 1; i < arr.length; i++) {

    if (arr[i] >= arr[i - 1] && temp != 'dec') {
      temp = 'inc';
      console.log(temp, arr[i]);

    } else if (arr[i] <= arr[i - 1] && temp != 'inc') {
      temp = 'dec';
      console.log(temp, arr[i]);

    } else {
      return false
    }
  }
  return true



}
console.log(monotonic([50, 4, 5, 2, 2, 1]));
console.log(monotonic([1, 1, 3, 4, 5, 5]));