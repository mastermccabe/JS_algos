function remove_dupe(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1])
      arr.splice(i, 1);
    console.log(arr.splice(i, 1));
  }
  console.log("array", arr);
}
remove_dupe([1, 1, 2, 3, 4, 4]);