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

//  boolean isMonotonic(int[] vals); // Java
function isMonotonic(arr) {
  // var new_arr = [];
  var trend = '';
  var prev_trend = '';
  //assuming arr length of 1 == true


  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      trend = "incresing"; // increasing
      if (prev_trend == null || prev_trend == "increasing") {
        prev_trend = "increasing";
      } else return false
    } else if (arr[i] == arr[i - 1]) {
      continue; //increase i to next var
    } else {
      trend = "decreasing"; // decreasing
      if (prev_trend == null || prev_trend == "decreasing") {
        prev_trend = "decreasing";
      } else return false

    }


    return true
  }