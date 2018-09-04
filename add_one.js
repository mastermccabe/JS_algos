// This function, add one to the last array
// [1,2,3] --> [1,2,4]
// [1,2,9] --> [1,3,0] (notice the carry)
// [9,9,9] --> [1,0,0,0] (notice new )
function add_one(arr) {
  var new_arr = new Array(arr.length)
  console.log(new_arr);
  var carry = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let sum = arr[i] + carry
    if (sum > 9) {
      new_arr[i] = sum % 10;


    } else {
      carry = 0;
      new_arr[i] = sum;
    }
    sum = 0;


  }
  if (carry == 1) {
    new_arr.push(0)
    // = new Array[arr.length + 1]
    new_arr[0] = 1
  }
  console.log(new_arr);
  return new_arr


};


add_one([9, 9, 9])