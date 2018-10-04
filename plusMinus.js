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

// Complete the plusMinus function below.
function plusMinus(arr) {

  let pos = 0
  let neg = 0
  let total = 0
  total += arr.length


  for (let i = 0; i < arr.length; i++) {
    //positive
    if (arr[i] > 0) {
      pos += 1

    }
    //negative
    if (arr[i] < 0) {
      neg += 1

    }

  }
  console.log((pos / total).toFixed(6))
  console.log((neg / total).toFixed(6))
  console.log(((total - pos - neg) / total).toFixed(6))




}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}