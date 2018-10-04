// Input: arr[] = {9, 7, 5, 3},
//            k = 6
// Output: True
// We can divide array into (9, 3) and
// (7, 5). Sum of both of these pairs
// is a multiple of 6.
//
// Input: arr[] = {92, 75, 65, 48, 45, 35},
//            k = 10
// Output: True
// We can divide array into (92, 48), (75, 65)
// and (45, 35). Sum of all these pairs is a
// multiple of 10.
//
// Input: arr[] = {91, 74, 66, 48}, k = 10
// Output: False

// 1) If length of given array is odd, return false.
//     An odd length array cannot be divided in pairs.
// 2) Traverse input array and count occurrences of
//     all remainders.
//       freq[arr[i] % k]++
// 3) Traverse input array again.
//    a) Find remainder of current element.
//    b) If remainder divides k into two halves, then
//       there must be even occurrences of it as it
//       forms  pair with itself only.
//    c) If remainder is 0, then then there must be
//       even occurrences.
//    c) Else, number of occurrences of current
//       remainder must be equal to number of
//        occurrences of "k - current remainder".

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var k = parseInt(n_temp[1]);
  a = readLine().split(' ');
  a = a.map(Number);
  var numOfPairs = 0;
  for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if ((a[i] + a[j]) % k === 0) {
        numOfPairs++;
      }
    }
  }
  console.log(numOfPairs);
}

//The best one is below

function main() {
  var i, j, count = 0;
  const nk = readLine().split(' ');

  const n = parseInt(nk[0], 10); //loop times arr.length

  const k = parseInt(nk[1], 10); //div num

  const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10)); //arr

  for (i in a) {
    for (j in a) {
      // If its bigger than the current loop count and
      // the i, j pair divided by k has 0 remainder, +1 count.
      if (i < j && (a[i] + a[j]) % k == 0) count++;
    }
  }

  // Output
  console.log(count);
}