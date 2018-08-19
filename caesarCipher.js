function caesarEncrypt(plaintext, key) {
  var abcUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var abcLower = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return plaintext.split('').map(function (letter, index) {
    if (letter.match(/[a-z]/)) {
      return  plaintext[index] = abcLower[(abcLower.indexOf(letter) + key) % 26];
    } else if (letter.match(/[A-Z]/)) {
      return  plaintext[index] = abcUpper[(abcUpper.indexOf(letter) + key) % 26];
    } else {
      return plaintext[index] = letter;
    }
  }).join('');
}

console.log(
  // simple shift
  caesarEncrypt('A', 0),       // "A"
  caesarEncrypt('A', 3),       // "D"

  // wrap around
  caesarEncrypt('y', 5),       // "d"
  caesarEncrypt('a', 47),      // "v"

  // all letters
  caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25),
  // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
  caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5),
  // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

  // many non-letters
  '\n',
  caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2), 
  // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?, Ytqpi?"
);
