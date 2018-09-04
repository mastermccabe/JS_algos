// We are playing the Guess Game. The game is as follows:
//
// I pick a number from 1 to n. You have to guess which number I picked.
//
// Every time you guess wrong, I'll tell you whether the number is higher or lower.
//
// You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):
//
// -1 : My number is lower
//  1 : My number is higher
//  0 : Congrats! You got it!

function guessNumber(n) {
  if (n === 1) return n;
  let left = 0,
    right = n;
  let mid = Math.floor((right - left) / 2) //3
  if (guessNumber(mid) === 0) return mid;
  if (guessNumber(mid) === -1) {
    let mid = Math.floor(mid - left) / 2; //2
    return guessNumber(left, mid)
  } else {
    mid = Math.floor(right - mid) / 2;
    return guessNumber(mid, right)
  }

  return mid;

}

console.log(guessNumber(7));