function lightsOn(switches) {
  var i;
  var j;
  var round = 1;
  var lights = [];
  var result = [];

  //initialize lights
  for(i = 0; i < switches; i++) {
    lights.push(false);
  }
  // rounds 1..n
  for (j = 1; j <= switches; j++) {
    lights = lights.map(function (light, index) {
      return ((index + 1) % j === 0 ? !light : light);
    });
  }
  //return the index + 1 of true
  lights.forEach(function (light, index) {
    if (light) {
      result.push(index + 1);
    }
  });

  return result;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

