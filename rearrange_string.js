function rearrange(string) {
  var data = 'Smith, John - PPP';
  data = data.split(' - ')[0].split(', ');

  var result = data[1] + ' ' + data[0];
  console.log(result);
}