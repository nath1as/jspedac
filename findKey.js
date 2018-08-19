function findKey(object, value) {
  var ak = Object.keys(object);
  var j;
  for (j = 0; j < ak.length; j++) {
    if (object[ak[j]] === value) {
      return ak[j];
    }
  }
  return "ERROR";
}

var obj = {
  a: '1',
  b: '2',
  c: '3',
  d: '4',
  e: '5',
};

console.log(findKey(obj, '1'));
console.log(findKey(obj, '2'));
console.log(findKey(obj, '3'));
console.log(findKey(obj, '4'));
console.log(findKey(obj, '5'));

