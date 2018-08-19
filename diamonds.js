function diamond(num) {
  var i;
  for (i = 1; i <= num; i += 2) {
    let repetitor =  (num - i) / 2 > 0 ? (num - i) / 2 : 0;
    console.log( ' '.repeat(repetitor) + '*'.repeat(i));
  }
  for (i = num - 2; i > 0; i -= 2) {
    let repetitor =  (num - i) / 2 > 0 ? (num - i) / 2 : 0;
    console.log( ' '.repeat(repetitor) + '*'.repeat(i));
  }
}

diamond(1);
// logs
//*

diamond(3);
// logs
// *
// ***
// *

diamond(9);
// logs
// *
// ***
// *****
// *******
// *********
// *******
// *****
// ***
// *

