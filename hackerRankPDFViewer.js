'use strict';

const fs = require('fs');

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

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
  let max = 0
  for (let i = 0; i < word.length; i++) {
    let n = word.charCodeAt(i) - 97
    if (max < h[n]) max = h[n]
  }
  return word.length * max
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

  const word = readLine();

  let result = designerPdfViewer(h, word);

  ws.write(result + "\n");

  ws.end();
}

// 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
// abc
//output 9


// 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7
// zaba
// output = 28


// 5 1 7 7 3 7 5 7 4 5 2 2 2 4 6 2 7 2 1 2 6 5 6 2 3 3
// ljbddqqahm
//output = 70