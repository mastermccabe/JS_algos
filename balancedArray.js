process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solve(a) {
  let middle = a.length / 2
  let left = 0
  let right = 0
  for (let i = 0; i < middle; i++) {
    left += a[i]
  }
  for (let i = middle; i < a.length; i++) {
    right += a[i]
  }
  // console.log("left sum",left, "left right", right)
  return Math.abs(left - right)
}

function main() {
  var n = parseInt(readLine());
  a = readLine().split(' ');
  a = a.map(Number);
  var result = solve(a);
  process.stdout.write("" + result + "\n");

}