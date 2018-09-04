// you have a group of people with birth and death years,
// how would you find the year with the most people alive

// every person has birth year (int) and a death year (int)
// we can pick each year and see if a person is still alive birth > Y < Death
//start with lowest year, see how many other years include that years

function years(arr) {
  var count = 0;
  var temp = 0;
  var end_year = 0;

  arr.sort(function(a, b) {
    if (a[1] > end_year) {
      end_year = a[1]
    }
    return a[0] - b[0]

  })
  var start_year = arr[0][0];
  console.log(arr); //sorts by birth year
  console.log("start year:", start_year, "highest year:", end_year);
  // console.log(arr.length);
  for (var i = start_year; i < end_year; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i > arr[j][0] && i < arr[j][1]) {
        count += 1;
        console.log(count, "year:", i);
        if (count > temp) {
          console.log("top year:", i, "with count:", count);
          temp = count;

        }
      }

    }
    console.log("exiting: with count:", count);
    count = 0;
  }
}


years([
  [1901, 2001],
  [2008, 2011],
  [2000, 2010],
  [2009, 2020]


]);