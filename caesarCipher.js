'use strict';

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



function main() {
  const n = parseInt(readLine(), 10);
  const s = readLine();
  const k = parseInt(readLine(), 10);


  // Wrap the amount
  if (k < 0)
    return caesarShift(s, k + 26);

  // Make an output variable
  var output = '';

  // Go through each character
  for (var i = 0; i < s.length; i++) {

    // Get the character we'll be appending
    var c = s[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {

      // Get its code
      var code = s.charCodeAt(i);

      // Uppercase letters
      if ((code >= 65) && (code <= 90))
        c = String.fromCharCode(((code - 65 + k) % 26) + 65);

      // Lowercase letters
      else if ((code >= 97) && (code <= 122))
        c = String.fromCharCode(((code - 97 + k) % 26) + 97);

    }

    // Append
    output += c;

  }

  // All done!
  console.log(output)

};