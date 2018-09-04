let twoDArray = [
  [1, 2],
  [5, 6, 7, 8],
  [33],
  [22, 10, 2]
];
let flatArray = [].concat(...twoDArray);
console.log(flatArray);