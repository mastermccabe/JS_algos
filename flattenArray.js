let twoDArray = [
  [1, 2],
  [5, 6, 7, 8],
  [33],
  [22, 10, 2]
];
let flatArray = [].concat(...twoDArray);
console.log(flatArray);


let threeDArray = [
  [1, 2],
  [5, 6, 7, [1, 2, 3]],
  [33],
  [22, 10, 2]
];
let flatArray2 = [].concat(...threeDArray);
let flatArray3 = [].concat(...flatArray2)
console.log(flatArray3);