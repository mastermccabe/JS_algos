// you have a group of people with birth and death years,
// how would you find the year with the most people alive

// every person has birth year (int) and a death year (int)
// we can pick each year and see if a person is still alive birth > Y < Death
//start with lowest year, see how many other years include that years


function years(arr) {
  var count = 0;
  var temp = 0;
  var year = 0;
  var start_year = 0;
  var end_year = 0;


  arr.sort(function(a, b) {
    if (a[1] > end_year) {
      end_year = a[1];
    }
    if (b[1] > end_year) {
      end_year = b[1];
    }
    return a[0] - b[0]
  })

  start_year = arr[0][0];

  console.log("start_year:", start_year, "end_year:",
    end_year);
  for (var i = start_year; i < end_year; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i > arr[j][0] && i < arr[j][1]) {
        count += 1;

        if (temp < count) {
          temp = count;
          year = i;
        }
      }

    }

    count = 0;
  }
  console.log("year:", year, "count:", temp);



}

years([
  [2000, 2003],
  [2000, 2002],
  [1999, 2002],
  [1998, 2001]


]);