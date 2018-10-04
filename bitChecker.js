// function checkBit(a, b) {
//   var num = 0;
//
//
//
//   return (a & b)
// }
//
// console.log(checkBit(2, 5));
// 1 = 001
// 2 = 010
// 3 = 011
// 4 = 100
// 5 = 101
// 6 = 110
// 7 = 111
// 8 = 1000
// 9 = 1001
//10 = 1010
//11 = 1011
//12 = 1100
//13 = 1101
//14 = 1110
//15 = 1111
//16 = 10000

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}


function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);

    console.log(calc(n, k))
  }
}

function calc(n, k) {
  var max = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j <= n; j++) {
      if ((i & j) > max && (i & j) < k) {
        max = i & j;
      }
    }
  }

  return max
}