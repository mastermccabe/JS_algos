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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
  let rank = []
  let res = []
  let ranking = 1
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == scores[i - 1]) {
      //duplicates
      i++
    }
    rank.push(scores[i])
  }
  //rank = [ 100, 50, 40, 20, 10 ]

  //     for (let i = 0; i < alice.length; i++){
  //         let j = 0
  //         while (alice[i] < rank[j] && j < rank.length){
  //             ranking++
  //             j++
  //         }
  //         res.push(ranking)
  //         j = 0
  //         ranking = 1

  //     }
  //     return res;


  let lowestRank = rank.length;
  for (let i = 0; i < alice.length; i++) {
    while (alice[i] >= rank[lowestRank - 1] && lowestRank > 0) {
      rank.pop;
      lowestRank--;
    }
    res.push(lowestRank + 1);
  }
  return res;



}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const scoresCount = parseInt(readLine(), 10);

  const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

  const aliceCount = parseInt(readLine(), 10);

  const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

  let result = climbingLeaderboard(scores, alice);

  ws.write(result.join("\n") + "\n");

  ws.end();
}