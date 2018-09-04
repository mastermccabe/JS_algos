function countOccurences(arr, val) {
  if (!arr.length) return 0;
  console.log(arr.slice(1));
  return (arr[0] === val) + countOccurences(arr.slice(1), val);
}

console.log(countOccurences([0, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4], 3));