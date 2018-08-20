function star(num) {
  var i;
  for (i = 1; i <= num / 2; i += 1) {
    console.log(' '.repeat(i) + '*' + ' '.repeat((num / 2) - i) + '*' + ' '.repeat((num / 2) -  i) + '*');
  }
  console.log(' ' + '*'.repeat(num));
  for (i = num / 2 ; i > 0; i--) {
    console.log(' '.repeat(i) + '*' + ' '.repeat((num / 2) - i) + '*' + ' '.repeat((num / 2) -  i) + '*');
  }
}
star(7);
star(9);
