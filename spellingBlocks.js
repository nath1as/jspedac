function isBlockWord(string) {
  var i;
  var array = string.toUpperCase().split('');
  var blocks = {
    B: 'O',
    X: 'K',
    D: 'Q',
    C:'P',
    N: 'A',
    G: 'T',
    R: 'E',
    F: 'S',
    J: 'W',
    H: 'U',
    V: 'I',
    L: 'Y',
    Z: 'M',
  };

  function findKey(object, value) {
    var ak = Object.keys(object);
    var j;
    for (j = 0; j < ak.length; j++) {
      if (object[ak[j]] === value) {
        return ak[j];
      } else {
        return "ERROR";
      }
    }
  }

  function findValue(object, key) {
    var ak = Object.values(object);
    var k;
    for (k = 0; k < ak.length; k++) {
      if (object[ak[k]] === key) {
        return ak[k];
      } else {
        return "ERROR";
      }
    }
  }

  
  for (i = 0; i < array.length; i++) {
    if (findKey(blocks, array[i])) {
    console.log(findKey(blocks, array[i]));
    } else if (findValue(blocks, array[i])) {
    } else {
      return false;
    }
  }
  return true;
}
console.log(
  // isBlockWord('BATCH'),      // true
  isBlockWord('BUTCH'),      // false
  // isBlockWord('jest'),       // true
  // isBlockWord('Pest'),       // true
  // isBlockWord('BATCH'),      // true
  // isBlockWord('BUTCH'),      // false
  // isBlockWord('jest'),       // true
  // isBlockWord('floW'),       // true
  // isBlockWord('APPLE'),      // false
  // isBlockWord('apple'),      // false
  // isBlockWord('apPLE'),      // false
  // isBlockWord('Box'),        // false
);


