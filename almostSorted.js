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

// Complete the almostSorted function below.
// 4 2 -- see down, swap a, b
// 4 5 2 -- no since swapping still out of order
// 1 5 4 3 2 6 - reverse 5 - 2 - notice 6 is higher
// else do ntohing
function almostSorted(arr) {
  //if sorted "yes"
  //yes\nswap a b
  //yes\nreverse a,b
  //else no
  let res = ''
  let helper
  let a = null
  let b = null

  for (let i = 1; i < arr.length; i++) {
    helper = arr[i - 1]
    if (arr[i] < helper) {
      if (a === null) {
        a = i
        b = i + 1
        res = 'swap'
      } else {
        b = i + 1
        res = 'reverse'
      }


    }

    //1 5 4 3 2 6

    if ((res === 'swap' || res === 'reverse') && arr[b - 1] < arr[i] && arr[a - 1] > arr[i]) {
      res = 'no'
    }

  }


  if (res === 'sorted') {
    console.log("yes")
  } else if (res === 'swap') {
    console.log("yes\nswap", a, b)
  } else if (res === 'reverse') {
    console.log("yes\nreverse", a, b)
  } else console.log("no")

}



function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

  almostSorted(arr);
}