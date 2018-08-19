function findValue(object, key) {
  if (object[key] !== undefined) {
    return object[key];
  } else {
    return false;
  }
}

var obj = {
  a: '1',
  b: '2',
  c: '3',
  d: '4',
  e: '5',
};

console.log(findValue(obj, 'a'));
console.log(findValue(obj, 'b'));
console.log(findValue(obj, 'c'));
console.log(findValue(obj, 'd'));
console.log(findValue(obj, 'z'));

