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
      }
    }
    return ;
  }

  function findValue(object, key) {
    if (object[key] !== undefined) {
      return object[key];
    } else {
      return false;
    }
  }

  for (i = 0; i < array.length; i++) {
    if (findKey(blocks, array[i])) {
      delete blocks[(findKey(blocks, array[i]))];
    } else if (findValue(blocks, array[i])) {
      delete blocks[(findValue(blocks, array[i]))];
    } else {
      return false;
    }
  }
  return true;
}

// alternative:
// function isBlockWord(word) {
//   var blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
//   var letters = word.split('');
//   var matchingBlock;
//   var i;

//   for (i = 0; i < letters.length; i += 1) {
//     matchingBlock = blocks.filter(function (block) {
//       return block.indexOf(letters[i].toUpperCase()) > -1;
//     })[0];

//     if (matchingBlock === undefined) {
//       return false;
//     } else {
//       blocks.splice(blocks.indexOf(matchingBlock), 1);
//     }
//   }

//   return true;
// }
console.log(
  isBlockWord('BATCH'),      // true
  isBlockWord('BUTCH'),      // false
  isBlockWord('jest'),       // true
  isBlockWord('Pest'),       // true
  isBlockWord('BATCH'),      // true
  isBlockWord('BUTCH'),      // false
  isBlockWord('jest'),       // true
  isBlockWord('floW'),       // true
  isBlockWord('APPLE'),      // false
  isBlockWord('apple'),      // false
  isBlockWord('apPLE'),      // false
  isBlockWord('Box'),        // false
);


