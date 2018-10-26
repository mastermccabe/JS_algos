function processData(input) {
  var data = input.split('\n'),
    count = parseInt(data.shift()),
    entries = data.slice();

  entries.forEach(function(entry) {

    var greater = entry.split(''),
      lessThanNext = -1,
      nextHighest = Infinity;

    //console.log(greater);

    for (var i = greater.length - 2; i >= 0; i--) {
      // find the first letter on the end that is less than the next
      if (greater[i] < greater[i + 1]) {
        lessThanNext = greater[i];

        closest = i + 1;

        // from here to the end, find the next highest character
        for (var j = i + 2; j < greater.length; j++) {
          let difference = greater[j].charCodeAt(0) - greater[i].charCodeAt(0),
            currentDifference = greater[closest].charCodeAt(0) - greater[i].charCodeAt(0);

          closest = difference > 0 && difference < currentDifference ? j : closest;
        }

        //swap the two
        let tmp = greater[i];
        greater[i] = greater[closest];
        greater[closest] = tmp;

        //sort the end
        greater = greater.slice(0, i + 1).concat(greater.slice(i + 1).sort());

        break;
      }


    }

    greater = greater.join('');

    console.log(greater === entry ? 'no answer' : greater);

  })
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