function processData(input) {

  const lines = input.split('\n');
  const tempRotations = lines[0].split(' ')[1];
  const numbers = lines[1].split(' ');

  let rotations = (tempRotations % numbers.length)


  for (var i = 0; i < rotations; i++) {
    numbers.push(numbers.shift()); // this is key
  }

  let string = numbers.reduce((prev, number) => `${prev} ${number}`, '');
  console.log(string.trim());
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});