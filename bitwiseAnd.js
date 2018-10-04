// given set S = { 1,2,3,.....,N}. find two integers A and B
// where A < B from set S such that alud of A&B is max possible
// and also less than tiven interger K
//
// input 1 is number of tests ?
//
// 5 2 = 101 & 010 = 0
// 8 5 = 1000 & 0101 = 0
// 2 2
//
// 01 & 10 = 0
// 01 & 11 = 1
// 001 & 100 = 0
// 001 & 101 = 1
// 10 & 11 = 10 = 2
// 010 & 100 = 0
// 010 & 100 = 0
// 011 & 101 = 1
// 100 & 101 = 100 = 4
//

function main() {
  var max = 0,
    temp;
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    max = 0;
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    for (var i = 1; i < n - 1; i++) {
      for (var j = i + 1; j <= n; j++) {
        temp = i & j;
        if (max < temp && temp < k) {
          max = temp;
        }
      }

    }
    console.log(max);
  }


}