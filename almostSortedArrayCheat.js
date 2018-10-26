function processData(input) {
  var lines = input.trim().split('\n').splice(1);
  process.stdout.write(lines.map(parseLine).join('\n'))
}

function parseLine(line) {
  var arr = line.split(' ').map(function(n) {
      return parseInt(n)
    }),
    forward = true,
    outOfOrderIdx,
    outOfOrderEndIdx,
    isSwap = false;
  if (arr.length <= 1)
    return 'yes';
  if (arr.length === 2)
    return {
      true: 'yes',
      false: 'yes\nswap 1 2'
    }[arr[0] < arr[1]];

  for (var i = 1; i < arr.length; i++) {
    if (isSwap && !outOfOrderEndIdx && arr[outOfOrderIdx - 1] > arr[i] && arr[outOfOrderIdx - 1] > arr[i - 1] &&
      arr[outOfOrderIdx - 1] < arr[i + 1]) {
      outOfOrderEndIdx = i + 1;
    } else if (arr[i - 1] < arr[i]) {
      if (!forward) {
        if (arr[outOfOrderIdx - 1] < arr[i]) {
          forward = true;
          outOfOrderEndIdx = i;
        } else {
          return 'no';
        }
      }
    } else if (forward) {
      if (!outOfOrderIdx) {
        outOfOrderIdx = i;
        if (i < arr.length - 1 && arr[i - 1] > arr[i] && arr[i] > arr[i + 1]) {
          forward = false;
        } else if (i < arr.length - 1 && arr[i - 1] < arr[i + 1]) {
          isSwap = true;
          outOfOrderEndIdx = i + 1;
        } else {
          isSwap = true;
        }
      } else {
        return 'no';
      }
    }
  }

  if (isSwap && !outOfOrderEndIdx) {
    return 'no';
  }

  if (!outOfOrderEndIdx) {
    outOfOrderEndIdx = arr.length;
  }

  if (!outOfOrderIdx) {
    return 'yes';
  } else if (isSwap || outOfOrderIdx + 1 === outOfOrderEndIdx) {
    return 'yes\nswap ' + outOfOrderIdx + ' ' + outOfOrderEndIdx;
  } else {
    return 'yes\nreverse ' + outOfOrderIdx + ' ' + outOfOrderEndIdx;
  }
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