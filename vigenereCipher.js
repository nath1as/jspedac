function vigenereEncrypt(plaintext, key) {
  var abcUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var abcLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var length = key.length;
  var counter = 0;
  var keys = key.split('').map(function (char, index) {
    return char = abcLower.indexOf(char.toLowerCase());
  });

  function shift(letter, index, key) {
    if (letter.match(/[a-z]/)) {
      counter++;
      return  plaintext[index] = abcLower[(abcLower.indexOf(letter) + key) % 26];
    } else if (letter.match(/[A-Z]/)) {
      counter++;
      return  plaintext[index] = abcUpper[(abcUpper.indexOf(letter) + key) % 26];
    } else {
      return plaintext[index] = letter;
    }
  }

  return plaintext.split('').map(function (letter, index) {
    key = keys[counter % length];
    return shift(letter, index, key);
  }).join('');
}

console.log(
  vigenereEncrypt("Pineapples don't go on pizzas!", "meat"),
);
