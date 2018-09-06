// write a function and return true or false
//if there is a  pair of number that sum up as 10.

function pairSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 10) {
        console.log(arr[i], arr[j]);
        return true
      }
    }

  }
  return false
}
console.log(pairSum([1, 1, 1, 3, 5, 6, 7, 8]));