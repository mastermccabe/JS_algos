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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let lower = 0,
    upper = 0,
    total = 0
  var sortedArr = arr.sort(function(a, b) {
    return a - b
  })

  for (let i = 0; i < arr.length; i++) {
    total += arr[i]

  }
  lower = total - arr[arr.length - 1]
  upper = total - arr[0]
  console.log(lower, upper)
}

function main() {
  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}